import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  updateDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config'; // Firebase konfigürasyon dosyanın yolu

export interface MatchPlayer {
  uid: string;
  displayName: string;
  score: number;
}

export async function findOrCreateQuickMatch(currentUser: { uid: string; displayName: string }) {
  try {
    const gamesRef = collection(db, 'games');

    // 1. Durumu 'waiting' olan ve private OLMAYAN odaları çek
    const q = query(
      gamesRef,
      where('status', '==', 'waiting'),
      where('isPrivate', '==', false)
    );

    const querySnapshot = await getDocs(q);

    // 2. Kendimizin KURMADIĞI ve ikinci oyuncusu henüz boş olan GERÇEK bir oda var mı bak
    const availableGameDoc = querySnapshot.docs.find((docSnap) => {
      const data = docSnap.data();
      // Kurucu biz olmamalıyız VE guestId boş olmalı
      return data.hostId !== currentUser.uid && !data.guestId;
    });

    if (availableGameDoc) {
      // ---- UYGUN ODA BULUNDU: İKİNCİ OYUNCU OLARAK KATIL ----
      const gameId = availableGameDoc.id;
      const gameRef = doc(db, 'games', gameId);

      await updateDoc(gameRef, {
        guestId: currentUser.uid,
        guestName: currentUser.displayName,
        status: 'playing', // İki oyuncu da hazır, maçı başlat!
        updatedAt: serverTimestamp(),
      });

      return { gameId, role: 'guest' };
    } else {
      // ---- UYGUN ODA YOKSA: YENİ ODA OLUŞTUR VE RAKİP BEKLE ----
      const newGameRef = await addDoc(gamesRef, {
        hostId: currentUser.uid,
        hostName: currentUser.displayName,
        guestId: null, // RAKİP HENÜZ YOK!
        guestName: null,
        status: 'waiting', // BEKLEMEDE
        isPrivate: false,
        createdAt: serverTimestamp(),
      });

      return { gameId: newGameRef.id, role: 'host' };
    }
  } catch (error) {
    console.error('Matchmaking hatası:', error);
    throw error;
  }
}