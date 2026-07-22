import type { Question, Difficulty } from '../types/game';

// HTML Entity'lerini düzgün metne çeviren yardımcı fonksiyon
const decodeHTML = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// Şıkları rastgele karıştırma (Fisher-Yates Shuffle Algoritması)
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const fetchQuestions = async (difficulty: Difficulty, amount: number = 20): Promise<Question[]> => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error('Soru çekme başarısız oldu');
    }

    return data.results.map((q: any, index: number) => {
      const decodedCorrect = decodeHTML(q.correct_answer);
      const decodedIncorrect = q.incorrect_answers.map((ans: string) => decodeHTML(ans));
      
      // Doğru cevap ve yanlış cevapları harmanlayıp 4 şık yapıyoruz
      const allOptions = shuffleArray([decodedCorrect, ...decodedIncorrect]);

      return {
        id: `q_${index}_${Date.now()}`,
        category: decodeHTML(q.category),
        question: decodeHTML(q.question),
        correctAnswer: decodedCorrect,
        options: allOptions
      };
    });
  } catch (error) {
    console.error("Trivia API Hatası:", error);
    return [];
  }
};