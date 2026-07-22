import { useState, useEffect, useRef } from 'react';

// Web Audio Context referansı (Odadan çıkınca veya oyun bitince sesi tamamen susturmak için)
let currentAudioCtx: AudioContext | null = null;

const playTimerBeep = (isCritical: boolean) => {
  try {
    if (currentAudioCtx && currentAudioCtx.state !== 'closed') {
      currentAudioCtx.close();
    }
    
    currentAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = currentAudioCtx.createOscillator();
    const gain = currentAudioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isCritical ? 880 : 440, currentAudioCtx.currentTime);

    gain.gain.setValueAtTime(0.05, currentAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, currentAudioCtx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(currentAudioCtx.destination);

    osc.start();
    osc.stop(currentAudioCtx.currentTime + 0.15);
  } catch (e) {
    // Ses kısıtlamaları için silent catch
  }
};

export function useGameTimer(
  gameStartTime: number | null,
  totalDurationSeconds: number,
  isGameActive: boolean, // Oyunun aktif ('basladi' veya 'oyun_devam_ediyor') olup olmadığının kontrolü
  onTimeUp: () => void
) {
  const [timeLeft, setTimeLeft] = useState<number>(totalDurationSeconds);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;
  const lastSecondRef = useRef<number>(totalDurationSeconds);

  useEffect(() => {
    // Oyun aktif değilse (örneğin 'bitti' durumuna geçtiyse veya rakip ayrıldıysa)
    // timer çalışmasın ve aktif çalmakta olan bip sesi anında susturulsun!
    if (!gameStartTime || !isGameActive) {
      if (currentAudioCtx && currentAudioCtx.state !== 'closed') {
        currentAudioCtx.close();
      }
      return;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - gameStartTime) / 1000);
      const remaining = Math.max(0, totalDurationSeconds - elapsedSeconds);

      setTimeLeft(remaining);

      if (remaining !== lastSecondRef.current && remaining > 0) {
        lastSecondRef.current = remaining;
        playTimerBeep(remaining <= 5);
      }

      if (remaining <= 0) {
        clearInterval(interval);
        onTimeUpRef.current();
      }
    }, 200);

    return () => {
      clearInterval(interval);
      // Odadan çıkıldığında, unmount olunduğunda veya oyun bittiğinde sesi kapat!
      if (currentAudioCtx && currentAudioCtx.state !== 'closed') {
        currentAudioCtx.close();
      }
    };
  }, [gameStartTime, totalDurationSeconds, isGameActive]);

  return timeLeft;
}