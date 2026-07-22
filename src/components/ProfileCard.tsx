import {type UserProfile } from '../services/userService';

interface ProfileCardProps {
  profile: UserProfile | null;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  if (!profile) return null;

  const winRate =
    profile.totalGames > 0 ? Math.round((profile.wins / profile.totalGames) * 100) : 0;

  const hasSniper = profile.badges?.includes('sniper');
  const hasSpeedster = profile.badges?.includes('speedster');
  const hasChampion = profile.badges?.includes('champion');

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-indigo-600 rounded-full flex items-center justify-center font-black text-lg border-2 border-indigo-400">
            {profile.displayName?.[0] || 'O'}
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-sm">{profile.displayName}</h3>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md font-mono">
              Toplam: {profile.totalScore} P
            </span>
          </div>
        </div>

        {/* Win Rate Rozeti */}
        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Kazanma Oranı</p>
          <p className="text-lg font-black text-emerald-400 font-mono">%{winRate}</p>
        </div>
      </div>

      {/* İstatistik Mini Tablosu */}
      <div className="grid grid-cols-3 gap-2 text-center bg-slate-950/60 p-2.5 rounded-2xl border border-slate-800/80 text-xs">
        <div>
          <p className="text-[10px] text-slate-400">Maçlar</p>
          <p className="font-bold text-slate-200 mt-0.5">{profile.totalGames}</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400">Galibiyet</p>
          <p className="font-bold text-emerald-400 mt-0.5">{profile.wins}</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400">En İyi Seri</p>
          <p className="font-bold text-amber-400 mt-0.5">{profile.bestStreak} 🔥</p>
        </div>
      </div>

      {/* BAŞARIM ROZETLERİ (ACHIEVEMENTS) */}
      <div className="space-y-1.5">
        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
          Başarım Rozetleri
        </p>
        <div className="flex gap-2">
          {/* 🎯 Keskin Nişancı */}
          <div
            title="🎯 Keskin Nişancı: Üst üste 5 doğru cevap ver"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
              hasSniper
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-slate-950/40 border-slate-800 text-slate-600 grayscale opacity-40'
            }`}
          >
            🎯 Keskin Nişancı
          </div>

          {/* ⚡ Işık Hızı */}
          <div
            title="⚡ Işık Hızı: 2 saniyenin altında doğru cevap ver"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
              hasSpeedster
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                : 'bg-slate-950/40 border-slate-800 text-slate-600 grayscale opacity-40'
            }`}
          >
            ⚡ Işık Hızı
          </div>

          {/* 🏆 Şampiyon */}
          <div
            title="🏆 Şampiyon: 10 Maç kazan"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
              hasChampion
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-slate-950/40 border-slate-800 text-slate-600 grayscale opacity-40'
            }`}
          >
            🏆 Şampiyon
          </div>
        </div>
      </div>
    </div>
  );
}