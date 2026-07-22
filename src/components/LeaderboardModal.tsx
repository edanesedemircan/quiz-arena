import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getLeaderboard, type UserProfile } from '../services/userService';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeaderboardModal({ isOpen, onClose }: LeaderboardModalProps) {
  const [leaderboard, setLeaderboard] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getLeaderboard().then((data) => {
        setLeaderboard(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    /* Tüm Ekranı Kaplayan Karartma Katmanı */
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(2, 6, 23, 0.95)', 
        zIndex: 999999 
      }}
    >
      {/* Modal Kutusu - Tam Opak Katı Renk */}
      <div 
        className="max-w-md w-full border-2 border-indigo-500/50 p-6 rounded-3xl space-y-5 shadow-2xl relative"
        style={{ 
          backgroundColor: '#090d16', 
          opacity: 1, 
          zIndex: 1000000 
        }}
      >
        {/* Başlık ve Kapat Butonu */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <h2 className="text-xl font-black text-amber-400 flex items-center gap-2 tracking-wide">
            🏆 Global Top 10
          </h2>
          <button
            onClick={onClose}
            type="button"
            className="text-slate-400 hover:text-white font-bold text-sm bg-slate-800 hover:bg-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Sıralama Listesi */}
        {loading ? (
          <p className="text-center text-indigo-300 animate-pulse py-12 font-medium">
            Sıralama yükleniyor... ⏳
          </p>
        ) : leaderboard.length === 0 ? (
          <p className="text-center text-slate-400 py-8 text-sm">
            Henüz kayıtlı oyuncu verisi bulunamadı.
          </p>
        ) : (
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {leaderboard.map((player, index) => {
              const winRate =
                player.totalGames > 0
                  ? Math.round((player.wins / player.totalGames) * 100)
                  : 0;

              let rankBadge = `${index + 1}.`;
              if (index === 0) rankBadge = '🥇';
              if (index === 1) rankBadge = '🥈';
              if (index === 2) rankBadge = '🥉';

              return (
                <div
                  key={player.uid || index}
                  className="flex items-center justify-between p-3.5 rounded-2xl border transition-all"
                  style={{
                    backgroundColor:
                      index === 0
                        ? '#1e1b18'
                        : index === 1
                        ? '#141c2e'
                        : index === 2
                        ? '#1a1412'
                        : '#0d1322',
                    borderColor:
                      index === 0
                        ? '#f59e0b'
                        : index === 1
                        ? '#6366f1'
                        : '#1e293b',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-black text-lg w-7 text-center">
                      {rankBadge}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-slate-100 truncate max-w-[150px]">
                        {player.displayName}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {player.wins || 0} Galibiyet (%{winRate} WR)
                      </p>
                    </div>
                  </div>

                  <span className="font-extrabold text-indigo-300 font-mono text-sm bg-indigo-950 px-3 py-1 rounded-xl border border-indigo-500/30">
                    {player.totalScore || 0} Puan
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}