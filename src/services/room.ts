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

  const questionAmount = Math.max(30, durationMinutes * 20);
  const selectedQuestions = getQuestionsByDifficulty(difficulty, questionAmount);

  const roomData = {
    oyuncu1: { id: hostUser.id, name: hostUser.name, score: 0 },
    oyuncu2: null,
    durum: 'bekliyor', // 'bekliyor' | 'basladi' | 'bitti'
    mevcutSoruIndex: 0,
    toplamSureSaniye: durationMinutes * 60,
    aktifSoruHavuzu: selectedQuestions,
    gameStartTime: null,
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
      callback(null);
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

// 4. OYUNU BAŞLATMA
// 4. OYUNU BAŞLATMA
export async function startGame(roomId: string) {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    durum: 'basladi',
    gameStartTime: Date.now() // Her iki oyuncu için ortak başlama zamanı
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

// 6. OTOMATİK EŞLEŞME (DÜZELTİLDİ 🚀)
export async function findOrCreateRoom(
  user: { id: string; name: string },
  difficulty: string = 'kolay',
  durationMinutes: number = 1
): Promise<string> {
  try {
    const roomsRef = collection(db, 'rooms');

    // Sadece durumu 'bekliyor' olan son 20 odayı çekiyoruz
    const q = query(
      roomsRef,
      where('durum', '==', 'bekliyor'),
      limit(20)
    );

    const querySnapshot = await getDocs(q);
    let availableRoomId: string | null = null;

    // Kendimizin OLUŞTURMADIĞI VE 2. oyuncusu GERÇEKTEN boş olan odayı bul
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const isDifferentHost = data.oyuncu1?.id !== user.id;
      const hasNoGuest = !data.oyuncu2 || data.oyuncu2 === null;

      if (isDifferentHost && hasNoGuest && !availableRoomId) {
        availableRoomId = docSnap.id;
      }
    });

    // 1. Katılabileceğimiz başka birisinin boş odası varsa KATIL
    if (availableRoomId) {
      await joinRoom(availableRoomId, user);
      return availableRoomId;
    }

    // 2. Uygun oda yoksa YENİ ODA OLUŞTUR (Host Ol ve Bekle)
    const newRoomId = await createRoom(user, difficulty, durationMinutes);
    return newRoomId;

  } catch (error) {
    console.error('Otomatik eşleşme hatası, yeni oda açılıyor:', error);
    return await createRoom(user, difficulty, durationMinutes);
  }
}