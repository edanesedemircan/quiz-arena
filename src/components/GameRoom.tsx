import { useEffect, useState } from 'react';
import { subscribeToRoom, leaveRoom, startGame } from '../services/room';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';
import { useGameTimer } from '../hooks/useGameTimer';
import { updateStatsAfterGame } from '../services/userService';

interface GameRoomProps {
  roomId: string;
  userId: string;
  onLeaveRoom: () => void;
}

export function GameRoom({ roomId, userId, onLeaveRoom }: GameRoomProps) {
  const [room, setRoom] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong'; text: string } | null>(null);

  // Soru Başına Süre State'i
  const [questionTimeLeft, setQuestionTimeLeft] = useState<number>(10);

  // Bekleme salonunda 2. oyuncu geldiğinde çalışacak 5sn otomatik sayaç State'i
  const [autoStartCountdown, setAutoStartCountdown] = useState<number>(5);

  // 🃏 JOKER STATE'LERİ
  const [jokers, setJokers] = useState({
    shield: true,
    fiftyFifty: true,
    freezeTime: true,
    sabotage: true,
  });
  const [isShieldActive, setIsShieldActive] = useState<boolean>(false);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [isFrozenByEnemy, setIsFrozenByEnemy] = useState<boolean>(false);

  // 1. Firestore Anlık Dinleyici
  useEffect(() => {
    const unsubscribe = subscribeToRoom(roomId, (updatedRoom) => {
      setRoom(updatedRoom);
    });
    return () => unsubscribe();
  }, [roomId]);

  const isHost = room?.oyuncu1?.id === userId;
  const isGameActive = room?.durum === 'basladi' || room?.durum === 'oyun_devam_ediyor';

  // ⏳ Bekleme Salonunda 2. Oyuncu Gelince 5 Saniyede Otomatik Başlama Efekti
  useEffect(() => {
    if (room?.durum === 'bekliyor' && room?.oyuncu1 && room?.oyuncu2) {
      const timer = setInterval(() => {
        setAutoStartCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            if (isHost) {
              startGame(roomId);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [room?.durum, room?.oyuncu1, room?.oyuncu2, isHost, roomId]);

  // 🧊 Rakip Sabotaj Attı mı Kontrolü (9 Saniye)
  useEffect(() => {
    if (room?.sabotage && room.sabotage.targetUserId === userId) {
      if (Date.now() - room.sabotage.timestamp < 9000) {
        setIsFrozenByEnemy(true);
        soundManager.playWrong();

        const timer = setTimeout(() => {
          setIsFrozenByEnemy(false);
        }, 9000);

        return () => clearTimeout(timer);
      }
    }
  }, [room?.sabotage, userId]);

  // 2. Real-Time Genel Oda Süresi Sayacı
  const roomTimeLeft = useGameTimer(
    room?.gameStartTime || null,
    room?.toplamSureSaniye || 60,
    isGameActive,
    async () => {
      soundManager.playTimeUp();
      if (isHost && isGameActive) {
        const roomRef = doc(db, 'rooms', roomId);
        await updateDoc(roomRef, { durum: 'bitti' });
      }
    }
  );

  // Otomatik Sonraki Soruya Geçiş
  const handleNextQuestionAuto = async () => {
    if (!room) return;
    const roomRef = doc(db, 'rooms', roomId);
    const nextIndex = (room.mevcutSoruIndex || 0) + 1;
    const totalQuestions = room.aktifSoruHavuzu?.length || 0;

    if (nextIndex < totalQuestions) {
      await updateDoc(roomRef, {
        mevcutSoruIndex: nextIndex,
        lastAnsweredBy: null, // Yeni soruda cevap vereni sıfırla
      });
    } else {
      await updateDoc(roomRef, { durum: 'bitti' });
    }
  };

  // 3. Soru Başına Süre Sayacı
  useEffect(() => {
    if (!room || !isGameActive) return;

    setQuestionTimeLeft(10);
    setSelectedOption(null);
    setHasAnswered(false);
    setFeedback(null);
    setIsShieldActive(false);
    setHiddenOptions([]);

    const qTimer = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(qTimer);
          if (room.oyuncu1?.id === userId) {
            handleNextQuestionAuto();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(qTimer);
  }, [room?.mevcutSoruIndex, room?.durum, isGameActive, userId]);

  // Oyun Bittiğinde Konfeti, Ses Kesme ve İstatistik/Rozet Güncelleme
  useEffect(() => {
    if (room?.durum === 'bitti') {
      soundManager.stopAll();
      const p1Score = room.oyuncu1?.score || 0;
      const p2Score = room.oyuncu2?.score || 0;
      const isWinner = (isHost && p1Score > p2Score) || (!isHost && p2Score > p1Score);
      const myScore = isHost ? p1Score : p2Score;

      if (isWinner) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }

      // 🏆 3. MODÜL: Maç İstatistiklerini Veritabanına Kaydet & Rozetleri Kontrol Et
      if (userId) {
        updateStatsAfterGame(
          userId,
          myScore,   // Oyuncunun kazandığı puan
          isWinner,  // Kazandı mı? (Şampiyon rozeti için)
          5,         // Maç içi seri (Keskin Nişancı rozeti kontrolü)
          1.5        // En hızlı cevap süresi (Işık Hızı rozeti kontrolü)
        );
      }
    }
  }, [room?.durum, isHost, userId]);

  // JOKER FONKSİYONLARI
  const handleUseShield = () => {
    if (!jokers.shield || hasAnswered || isQuestionLocked) return;
    setJokers((prev) => ({ ...prev, shield: false }));
    setIsShieldActive(true);
    soundManager.playCorrect();
  };

  const handleUseFiftyFifty = () => {
    if (!jokers.fiftyFifty || hasAnswered || isQuestionLocked || !currentQuestion) return;
    const correctAnswer = currentQuestion.correctAnswer || currentQuestion.correct_answer || currentQuestion.dogruCevap;
    const incorrectOptions = optionsList.filter((opt) => opt !== correctAnswer);
    const shuffled = [...incorrectOptions].sort(() => 0.5 - Math.random());
    setHiddenOptions(shuffled.slice(0, 2));
    setJokers((prev) => ({ ...prev, fiftyFifty: false }));
  };

  const handleUseFreezeTime = () => {
    if (!jokers.freezeTime || hasAnswered || isQuestionLocked) return;
    setQuestionTimeLeft((prev) => prev + 5);
    setJokers((prev) => ({ ...prev, freezeTime: false }));
  };

  const handleUseSabotage = async () => {
    if (!jokers.sabotage || hasAnswered || isQuestionLocked || !room) return;
    const enemyId = isHost ? room.oyuncu2?.id : room.oyuncu1?.id;
    if (!enemyId) return;

    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, {
      sabotage: {
        targetUserId: enemyId,
        timestamp: Date.now(),
      },
    });
    setJokers((prev) => ({ ...prev, sabotage: false }));
  };

  // Odadan Ayrılma
  const handleQuitRoom = async () => {
    if (window.confirm('Odadan ayrılmak istediğinize emin misiniz? Maç sonlandırılacak.')) {
      soundManager.stopAll();
      await leaveRoom(roomId, isHost);
      onLeaveRoom();
    }
  };

  if (!room) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="animate-pulse text-indigo-400 font-semibold">Oda verileri yükleniyor... ⏳</div>
      </div>
    );
  }

  const currentQuestion = room.aktifSoruHavuzu?.[room.mevcutSoruIndex];

  // ⚡ Rakip senden önce cevap verdi mi kontrolü (İlk Bilen Kapar)
  const isQuestionLocked = room?.lastAnsweredBy && room.lastAnsweredBy !== userId;

  // Cevap Verme İşlemi
  const handleSelectOption = async (option: string) => {
    if (hasAnswered || isQuestionLocked || isFrozenByEnemy || !currentQuestion) return;
    setSelectedOption(option);
    setHasAnswered(true);

    const q = currentQuestion;
    const correctAnswer = q.correctAnswer || q.correct_answer || q.dogruCevap;
    const isCorrect = option === correctAnswer;
    const roomRef = doc(db, 'rooms', roomId);

    // Odaya bu soruyu bizim cevapladığımızı yazıyoruz (diğerine kilitlenecek)
    await updateDoc(roomRef, { lastAnsweredBy: userId });

    if (isCorrect) {
      soundManager.playCorrect();
      setFeedback({ type: 'correct', text: '🎯 DOĞRU! +10 PUAN' });
    } else {
      soundManager.playWrong();
      if (isShieldActive) {
        setFeedback({ type: 'wrong', text: '🛡️ KALKAN KORUDU! (0 PUAN)' });
      } else {
        setFeedback({ type: 'wrong', text: '💥 YANLIŞ! -10 PUAN' });
      }
    }

    const penalty = isShieldActive ? 0 : 10;

    if (isHost) {
      const currentScore = room.oyuncu1?.score || 0;
      const newScore = isCorrect ? currentScore + 10 : currentScore - penalty;
      await updateDoc(roomRef, { 'oyuncu1.score': newScore });
    } else if (room.oyuncu2) {
      const currentScore = room.oyuncu2?.score || 0;
      const newScore = isCorrect ? currentScore + 10 : currentScore - penalty;
      await updateDoc(roomRef, { 'oyuncu2.score': newScore });
    }

    setTimeout(() => {
      if (isHost) {
        handleNextQuestionAuto();
      }
    }, 1200);
  };

  // 1. BEKLEME SALONU (OTOMATİK BAŞLAMALI)
  if (room.durum === 'bekliyor') {
    const isBothPlayersReady = room.oyuncu1 && room.oyuncu2;

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {isBothPlayersReady ? (
            <div className="space-y-2 animate-bounce">
              <span className="text-5xl">⚔️</span>
              <h2 className="text-2xl font-black text-emerald-400">RAKİP BULUNDU!</h2>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-4xl animate-spin inline-block">⏳</span>
              <h2 className="text-xl font-bold text-slate-200">Bekleme Salonu</h2>
              <p className="text-xs text-slate-400">Arkadaşına bu kodu vererek odaya davet et:</p>
            </div>
          )}

          <div>
            <div className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 font-mono text-3xl font-extrabold tracking-widest py-3 px-6 rounded-2xl inline-block">
              {roomId}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div>
              <p className="text-xs text-slate-400">Oyuncu 1 (Kurucu)</p>
              <p className="font-semibold text-sm text-indigo-400 mt-1">{room.oyuncu1?.name}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Oyuncu 2</p>
              <p className="font-semibold text-sm text-purple-400 mt-1">
                {room.oyuncu2 ? room.oyuncu2.name : 'Bekleniyor...'}
              </p>
            </div>
          </div>

          {isBothPlayersReady ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl space-y-1">
              <p className="text-xs text-emerald-300 font-medium">Oyun Otomatik Başlıyor</p>
              <p className="text-3xl font-black text-emerald-400 font-mono animate-pulse">
                {autoStartCountdown}
              </p>
            </div>
          ) : (
            <p className="text-xs text-slate-500 animate-pulse">
              {isHost ? 'İkinci oyuncu katıldığında oyun otomatik başlayacak...' : 'Oda sahibinin oyunu başlatması bekleniyor...'}
            </p>
          )}

          <button
            onClick={() => {
              soundManager.stopAll();
              onLeaveRoom();
            }}
            className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs py-2.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            Odadan Çık
          </button>
        </div>
      </div>
    );
  }

  // 2. OYUN BİTTİ EKRANI
  if (room.durum === 'bitti') {
    const p1Score = room.oyuncu1?.score || 0;
    const p2Score = room.oyuncu2?.score || 0;
    let winnerText = 'Berabere! 🤝';

    if (room.winnerReason) {
      winnerText = `⚠️ ${room.winnerReason}`;
    } else if (p1Score > p2Score) {
      winnerText = `🏆 Kazanan: ${room.oyuncu1?.name}`;
    } else if (p2Score > p1Score) {
      winnerText = `🏆 Kazanan: ${room.oyuncu2?.name}`;
    }

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl text-center space-y-6 shadow-2xl">
          <span className="text-6xl animate-bounce">🎉</span>
          <h2 className="text-2xl font-bold text-indigo-400">Oyun Bitti!</h2>
          <p className="text-xl font-black text-emerald-400 tracking-wide">{winnerText}</p>

          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-sm text-slate-300">{room.oyuncu1?.name}</span>
              <span className="font-extrabold text-indigo-400 text-lg">{p1Score} Puan</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-300">{room.oyuncu2?.name || 'Rakip'}</span>
              <span className="font-extrabold text-purple-400 text-lg">{p2Score} Puan</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.stopAll();
              onLeaveRoom();
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg cursor-pointer"
          >
            Lobiye Dön
          </button>
        </div>
      </div>
    );
  }

  // 3. OYUN DEVAM EDİYOR
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-slate-400 animate-pulse">Soru hazırlanıyor... 🎯</p>
      </div>
    );
  }

  const q = currentQuestion;
  const questionText: string = q.question || q.soruMetni || '';
  const categoryText: string = q.category || q.kategori || 'Genel Kültür';
  const correctAnswer: string = q.correctAnswer || q.correct_answer || q.dogruCevap || '';
  const optionsList: string[] =
    q.options ||
    q.all_answers ||
    q.tumSiklar ||
    q.answers ||
    q.siklar ||
    (q.incorrect_answers ? [...q.incorrect_answers, correctAnswer] : []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* 🧊 DONDURULMA OVERLAY ANİMASYONU */}
        {isFrozenByEnemy && (
          <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 border-4 border-cyan-400/80 rounded-3xl animate-pulse">
            <span className="text-6xl mb-3 animate-bounce">🧊</span>
            <h3 className="text-2xl font-black text-cyan-300 tracking-wider">RAKİP SENİ DONDURDU!</h3>
            <p className="text-xs text-cyan-100/80 mt-2 font-mono text-center">
              9 saniye boyunca cevap veremezsin...
            </p>
          </div>
        )}

        {/* Üst Zaman Sayacı & Odadan Çık */}
        <div className="flex justify-between items-center bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-rose-400 flex items-center gap-1">
              ⏱️ Kalan Süre: {roomTimeLeft ?? '--'}s
            </span>
            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
              ⚡ Soru Süresi: {questionTimeLeft}s
            </span>
          </div>

          <button
            onClick={handleQuitRoom}
            className="px-3 py-1 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-semibold rounded-lg border border-rose-500/30 transition-all cursor-pointer"
          >
            🚪 Odadan Çık
          </button>
        </div>

        {/* 🃏 JOKER / POWER-UP BARI */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-950/60 p-2.5 rounded-2xl border border-slate-800">
          <button
            disabled={!jokers.shield || hasAnswered || isQuestionLocked}
            onClick={handleUseShield}
            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              isShieldActive
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                : jokers.shield && !hasAnswered && !isQuestionLocked
                ? 'bg-slate-800 hover:bg-amber-500/20 border-slate-700 text-amber-400'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            🛡️ Kalkan {isShieldActive && '(Aktif)'}
          </button>

          <button
            disabled={!jokers.fiftyFifty || hasAnswered || isQuestionLocked}
            onClick={handleUseFiftyFifty}
            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              jokers.fiftyFifty && !hasAnswered && !isQuestionLocked
                ? 'bg-slate-800 hover:bg-indigo-500/20 border-slate-700 text-indigo-400'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            💣 %50:%50
          </button>

          <button
            disabled={!jokers.freezeTime || hasAnswered || isQuestionLocked}
            onClick={handleUseFreezeTime}
            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              jokers.freezeTime && !hasAnswered && !isQuestionLocked
                ? 'bg-slate-800 hover:bg-cyan-500/20 border-slate-700 text-cyan-400'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            ⏱️ +5sn Süre
          </button>

          <button
            disabled={!jokers.sabotage || hasAnswered || isQuestionLocked}
            onClick={handleUseSabotage}
            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              jokers.sabotage && !hasAnswered && !isQuestionLocked
                ? 'bg-slate-800 hover:bg-rose-500/20 border-slate-700 text-rose-400'
                : 'bg-slate-900 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            🧊 Dondur
          </button>
        </div>

        {/* RAKİP ÖNCE CEVAP VERDİ BİLGİ BANNERI */}
        {isQuestionLocked && !hasAnswered && (
          <div className="bg-amber-500/20 border-2 border-amber-400 text-amber-300 text-center font-bold text-sm py-2.5 px-4 rounded-xl animate-pulse">
            ⚡ Rakip senden önce cevap verdi! Sonraki soruya geçiliyor...
          </div>
        )}

        {/* Görsel Feedback Banner */}
        {feedback && (
          <div
            className={`text-center font-black text-base py-3 px-4 rounded-xl border-2 transition-all shadow-2xl animate-bounce ${
              feedback.type === 'correct'
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-emerald-950/50'
                : 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-rose-950/50'
            }`}
          >
            {feedback.text}
          </div>
        )}

        {/* Skor Tabelası */}
        <div className="flex items-center justify-between bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
            <div>
              <p className="text-xs text-slate-400">{room.oyuncu1?.name}</p>
              <p className="text-lg font-bold text-indigo-400">{room.oyuncu1?.score || 0} Puan</p>
            </div>
          </div>

          <span className="text-xs font-mono bg-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
            Soru {room.mevcutSoruIndex + 1}
          </span>

          <div className="text-right">
            <p className="text-xs text-slate-400">{room.oyuncu2?.name || 'Rakip'}</p>
            <p className="text-lg font-bold text-purple-400">{room.oyuncu2?.score || 0} Puan</p>
          </div>
        </div>

        {/* Soru Metni */}
        <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 text-center">
          <span className="text-xs text-indigo-400 font-semibold uppercase tracking-widest">
            Kategori: {categoryText}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-100 mt-2">{questionText}</h3>
        </div>

        {/* Şıklar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {optionsList.map((option, idx) => {
            if (hiddenOptions.includes(option)) {
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-900/40 bg-slate-950/20 text-slate-800 text-center font-bold text-xs flex items-center justify-center cursor-not-allowed"
                >
                  ❌ Elendi
                </div>
              );
            }

            let btnStyle = 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-200';

            if (hasAnswered) {
              if (option === correctAnswer) {
                btnStyle = 'bg-emerald-500 border-emerald-300 text-white font-black scale-[1.03] ring-4 ring-emerald-500/50 shadow-xl shadow-emerald-950';
              } else if (option === selectedOption) {
                btnStyle = 'bg-rose-600 border-rose-300 text-white font-black ring-4 ring-rose-500/50 shadow-xl shadow-rose-950';
              } else {
                btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-20';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered || isQuestionLocked || isFrozenByEnemy}
                onClick={() => handleSelectOption(option)}
                className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isQuestionLocked && !hasAnswered ? 'opacity-30 cursor-not-allowed' : btnStyle
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}