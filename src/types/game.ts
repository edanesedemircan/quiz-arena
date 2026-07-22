export type RoomStatus = 'bekliyor' | 'basladi' | 'soru_kilitli' | 'bitti';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type DurationMinutes = 1 | 2 | 5;

export interface Question {
  id: string;
  category: string;
  question: string;
  correctAnswer: string;
  options: string[];
}

export interface Player {
  id: string;
  name: string;
  photoURL?: string;
  score: number;
}

export interface Room {
  odaId: string;
  oyuncu1: Player;
  oyuncu2?: Player;
  toplamSureDk: DurationMinutes;
  zorluk: Difficulty;
  durum: RoomStatus;
  mevcutSoruIndex: number;
  oyunBitisZamani?: number;
  soruBitisZamani?: number;
  sonBasanOyuncuId?: string;
  basilanSik?: string;
  aktifSoruHavuzu: Question[];
  olusturulmaTarihi: number;
}