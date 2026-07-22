import { doc, setDoc, onSnapshot, updateDoc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from './firebase';
import { getQuestionsByDifficulty } from '../data/questionsData';

// 6 haneli benzersiz oda kodu üreteci
function generateRoomCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// 1. ODA OLUŞTURMA
export async function createRoom(
  hostUser: { id: string; name: string },
  difficulty: string = 'kolay', // 'kolay' | 'orta' | 'zor'
  durationMinutes: number = 1    // 1, 2 veya 5 dakika
) {
  const roomId = generateRoomCode();

  // Dış API/Çeviri yerine seçilen zorluktaki yerel Türkçe soruları anında çekiyoruz
  const questionAmount = Math.max(30, durationMinutes * 20);
  const selectedQuestions = getQuestionsByDifficulty(difficulty, questionAmount);

  const roomData = {
    oyuncu1: { id: hostUser.id, name: hostUser.name, score: 0 },
    oyuncu2: null,
    durum: 'bekliyor', // 'bekliyor' | 'basladi' | 'bitti'
    mevcutSoruIndex: 0,
    toplamSureSaniye: durationMinutes * 60, // Seçilen süre (saniye)
    aktifSoruHavuzu: selectedQuestions,
    gameStartTime: null, // Arka sekme süre senkronu için oyun başladığında dolacak
    createdAt: new Date(),
  };

  await setDoc(doc(db, 'rooms', roomId), roomData);
  return roomId;
}

// 2. ODAYI ANLIK DİNLEME (Firestore Realtime)
export function subscribeToRoom(roomId: string, callback: (room: any) => void) {
  const roomRef = doc(db, 'rooms', roomId);
  return onSnapshot(roomRef, (snapshot) => {
    if (snapshot.exists()) {
      callback({ id: snapshot.id, ...snapshot.data() });
    } else {
      callback(null); // Oda silindiyse veya erişilemiyorsa
    }
  });
}

// 3. ODAYA KATILMA
export async function joinRoom(roomId: string, guestUser: { id: string; name: string }) {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    oyuncu2: { id: guestUser.id, name: guestUser.name, score: 0 }
  });
}

// 4. OYUNU BAŞLATMA (Sunucu Zaman Damgası ile)
export async function startGame(roomId: string) {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    durum: 'basladi',
    gameStartTime: Date.now() // Her iki oyuncu için ortak başlama zamanı (Date.now())
  });
}

// 5. ODADAN AYRILMA / PES ETME
export async function leaveRoom(roomId: string, isHost: boolean) {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    durum: 'bitti',
    winnerReason: isHost ? 'Host oyundan ayrıldı' : 'Rakip oyundan ayrıldı'
  });
}

// 6. OTOMATİK EŞLEŞME (MATCHMAKING - Kodsuz Otomatik Oda Bulma)
export async function findOrCreateRoom(
  user: { id: string; name: string },
  difficulty: string = 'kolay',
  durationMinutes: number = 1
): Promise<string> {
  try {
    const roomsRef = collection(db, 'rooms');

    // Durumu 'bekliyor' olan ve henüz 2. oyuncusu katılmamış odaları sorgula
    const q = query(
      roomsRef,
      where('durum', '==', 'bekliyor'),
      where('oyuncu2', '==', null),
      limit(10)
    );

    const querySnapshot = await getDocs(q);
    let availableRoomId: string | null = null;

    // Kendimizin oluşturmadığı boş bir oda var mı bak
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.oyuncu1?.id !== user.id && !availableRoomId) {
        availableRoomId = docSnap.id;
      }
    });

    // 1. Eğer katılabileceğimiz uygun bir oda bulunduysa katıl
    if (availableRoomId) {
      await joinRoom(availableRoomId, user);
      return availableRoomId;
    }

    // 2. Uygun oda yoksa yeni oda oluştur ve kurucu (Host) ol
    const newRoomId = await createRoom(user, difficulty, durationMinutes);
    return newRoomId;
  } catch (error) {
    console.error('Otomatik eşleşme hatası, yeni oda açılıyor:', error);
    // Hata durumunda güvenli liman olarak yeni oda aç
    return await createRoom(user, difficulty, durationMinutes);
  }
}