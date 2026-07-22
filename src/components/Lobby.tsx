import { useState, useEffect } from 'react';
import { createRoom, joinRoom, findOrCreateRoom } from '../services/room';
import { getUserProfile, type UserProfile } from '../services/userService';
import { ProfileCard } from './ProfileCard';
import { LeaderboardModal } from './LeaderboardModal';
import type { Player, Difficulty, DurationMinutes } from '../types/game';

interface LobbyProps {
  user: {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
  };
  onRoomJoined: (roomId: string) => void;
}

export function Lobby({ user, onRoomJoined }: LobbyProps) {
  const [joinCode, setJoinCode] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [duration, setDuration] = useState<DurationMinutes>(2);
  const [loading, setLoading] = useState(false);
  const [quickMatchLoading, setQuickMatchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🏆 Profil ve Liderlik Tablosu State'leri
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  // Kullanıcı Profil Bilgilerini Çek
  useEffect(() => {
    if (user?.uid) {
      getUserProfile(user.uid, user.displayName || 'Oyuncu', user.photoURL || undefined).then((data) => {
        setProfile(data);
      });
    }
  }, [user]);

  const currentPlayer: Player = {
    id: user.uid,
    name: user.displayName || 'Anonim Oyuncu',
    photoURL: user.photoURL || undefined,
    score: 0,
  };

  // ⚡ OTOMATİK HIZLI EŞLEŞME (KODSUZ RAKİP BULMA)
  const handleQuickMatch = async () => {
    setQuickMatchLoading(true);
    setError(null);
    try {
      const roomId = await findOrCreateRoom(currentPlayer, difficulty, duration);
      onRoomJoined(roomId);
    } catch (err: any) {
      setError(err.message || 'Hızlı eşleşme sırasında bir hata oluştu.');
    } finally {
      setQuickMatchLoading(false);
    }
  };

  // KOD İLE ODA OLUŞTURMA
  const handleCreate = async () => {
    setLoading(true);
    setError(null);
    try {
      const roomId = await createRoom(currentPlayer, difficulty, duration);
      onRoomJoined(roomId);
    } catch (err: any) {
      setError(err.message || 'Oda oluşturulurken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  // KOD İLE ODAYA KATILMA
  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinCode.trim()) return;

    setLoading(true);
    setError(null);
    try {
      await joinRoom(joinCode.trim(), currentPlayer);
      onRoomJoined(joinCode.trim());
    } catch (err: any) {
      setError(err.message || 'Odaya katılırken hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Arka plan ışık efektleri */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10 space-y-4">
        
        {/* 🎨 1. PROFİL KARTI & ROZETLER */}
        <ProfileCard profile={profile} />

        {/* 🎯 ANA LOBİ KARTI */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl space-y-6">
          
          {/* Üst Kullanıcı Başlığı & Top 10 Butonu */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || ''} className="w-12 h-12 rounded-full border-2 border-indigo-500" />
              ) : (
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">
                  {user.displayName?.[0] || 'O'}
                </div>
              )}
              <div>
                <p className="text-xs text-slate-400">Hoş geldin,</p>
                <h2 className="font-bold text-slate-100">{user.displayName || 'Oyuncu'}</h2>
              </div>
            </div>

            {/* 🏆 GLOBAL TOP 10 BUTONU */}
            <button
              onClick={() => setIsLeaderboardOpen(true)}
              className="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold px-3.5 py-2 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              🏆 Top 10 Sıralaması
            </button>
          </div>

          {/* Hata Mesajı */}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm p-4 rounded-xl text-center">
              {error}
            </div>
          )}

          {/* ⚡ HIZLI EŞLEŞME BUTONU */}
          <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900/60 p-5 rounded-2xl border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <h3 className="text-lg font-black text-indigo-300 flex items-center gap-2">
                <span>⚡</span> Otomatik Hızlı Maç
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Kod girmeden anında uygun bir rakiple eşleş!
              </p>
            </div>
            <button
              onClick={handleQuickMatch}
              disabled={quickMatchLoading || loading}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-indigo-500/30 active:scale-95 disabled:opacity-50 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
            >
              {quickMatchLoading ? (
                <>
                  <span className="animate-spin text-lg">🌀</span> Rakip Aranıuyor...
                </>
              ) : (
                <>🚀 Hızlı Rakip Bul</>
              )}
            </button>
          </div>

          {/* İki Kolonlu Seçenek Kartı */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* ODA OLUŞTUR */}
            <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 space-y-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-1 flex items-center gap-2">
                  <span>➕</span> Özel Oda Oluştur
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Kuralları sen belirle, arkadaşına kod ile meydan oku.
                </p>

                {/* Zorluk Seçimi */}
                <div className="space-y-2 mb-4">
                  <label className="text-xs text-slate-300 font-medium">Zorluk Seviyesi</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setDifficulty(level)}
                        className={`py-2 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                          difficulty === level
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                            : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {level === 'easy' ? 'Kolay' : level === 'medium' ? 'Orta' : 'Zor'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Oyun Süresi */}
                <div className="space-y-2 mb-6">
                  <label className="text-xs text-slate-300 font-medium">Oyun Modu</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {([
                      { value: 1, label: 'Hızlı ⚡' },
                      { value: 2, label: 'Standart ⚔️' },
                      { value: 5, label: 'Maraton 🏆' },
                    ] as const).map((mode) => (
                      <button
                        key={mode.value}
                        type="button"
                        onClick={() => setDuration(mode.value)}
                        className={`py-2 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                          duration === mode.value
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                            : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCreate}
                disabled={loading || quickMatchLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Oda Kuruluyor...' : 'Özel Oda Kur'}
              </button>
            </div>

            {/* ODAYA KATIL */}
            <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 space-y-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-1 flex items-center gap-2">
                  <span>🔑</span> Koda Göre Katıl
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Arkadaşının paylaştığı 6 haneli oda kodunu gir.
                </p>

                <form onSubmit={handleJoin} className="space-y-3">
                  <input
                    id="room-code-input"
                    name="roomCode"
                    type="text"
                    maxLength={6}
                    placeholder="Örn: 482910"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    aria-label="Oda Kodu"
                    className="w-full bg-slate-900 border border-slate-700 focus:border-purple-500 text-center font-mono text-2xl tracking-widest py-3 rounded-xl text-white outline-none transition-all placeholder:text-slate-600 placeholder:text-base placeholder:tracking-normal"
                  />
                  
                  <button
                    type="submit"
                    disabled={loading || quickMatchLoading || joinCode.length < 6}
                    className="w-full bg-slate-800 hover:bg-purple-600 border border-slate-700 hover:border-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-40 disabled:hover:bg-slate-800 disabled:hover:border-slate-700 cursor-pointer"
                  >
                    {loading ? 'Katılınıyor...' : 'Odaya Gir'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 🏆 GLOBAL TOP 10 MODAL */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />
    </div>
  );
}