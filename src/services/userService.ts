import { doc, getDoc, setDoc, updateDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface UserProfile {
  uid: string;
  displayName: string;
  photoURL?: string;
  totalGames: number;
  wins: number;
  losses: number;
  totalScore: number;
  bestStreak: number;
  badges: string[]; // ['sniper', 'speedster', 'champion']
}

// 1. Kullanıcı Profilini Getir veya Oluştur
export async function getUserProfile(uid: string, displayName: string, photoURL?: string): Promise<UserProfile> {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);

  if (snap.exists()) {
    return snap.data() as UserProfile;
  } else {
    const newUser: UserProfile = {
      uid,
      displayName: displayName || 'Anonim Oyuncu',
      photoURL: photoURL || '',
      totalGames: 0,
      wins: 0,
      losses: 0,
      totalScore: 0,
      bestStreak: 0,
      badges: [],
    };
    await setDoc(userRef, newUser);
    return newUser;
  }
}

// 2. Maç Sonu İstatistiklerini ve Rozetleri Güncelle
export async function updateStatsAfterGame(
  uid: string,
  earnedScore: number,
  isWinner: boolean,
  maxStreakInGame: number,
  fastestAnswerTime: number // saniye cinsinden
) {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) return;

  const currentData = snap.data() as UserProfile;
  const newTotalGames = currentData.totalGames + 1;
  const newWins = isWinner ? currentData.wins + 1 : currentData.wins;
  const newLosses = !isWinner ? currentData.losses + 1 : currentData.losses;
  const newTotalScore = Math.max(0, currentData.totalScore + earnedScore);
  const newBestStreak = Math.max(currentData.bestStreak || 0, maxStreakInGame);

  // ROZET KONTROLLERİ 🏅
  const updatedBadges = new Set(currentData.badges || []);

  // 🎯 Keskin Nişancı: Maç içi seri >= 5
  if (maxStreakInGame >= 5) {
    updatedBadges.add('sniper');
  }

  // ⚡ Işık Hızı: Doğru cevabı < 2 saniyede verme
  if (fastestAnswerTime > 0 && fastestAnswerTime < 2) {
    updatedBadges.add('speedster');
  }

  // 🏆 Şampiyon: 10 Galibiyet
  if (newWins >= 10) {
    updatedBadges.add('champion');
  }

  await updateDoc(userRef, {
    totalGames: newTotalGames,
    wins: newWins,
    losses: newLosses,
    totalScore: newTotalScore,
    bestStreak: newBestStreak,
    badges: Array.from(updatedBadges),
  });
}

// 3. Global Top 10 Liderlik Tablosunu Getir
export async function getLeaderboard(): Promise<UserProfile[]> {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('totalScore', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);

    const leaderboard: UserProfile[] = [];
    querySnapshot.forEach((docSnap) => {
      leaderboard.push(docSnap.data() as UserProfile);
    });

    return leaderboard;
  } catch (error) {
    console.error('Liderlik tablosu çekilemedi:', error);
    return [];
  }
}