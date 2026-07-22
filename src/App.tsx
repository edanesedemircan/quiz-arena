import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth, logoutUser } from './services/firebase';
import { Auth } from './components/Auth';
import { Lobby } from './components/Lobby';
import { GameRoom } from './components/GameRoom';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [roomId, setRoomId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-xl font-medium animate-pulse text-indigo-400 flex items-center gap-2">
          <span>Yükleniyor...</span> ⚔️
        </div>
      </div>
    );
  }

  // 1. Giriş yapılmamışsa Giriş (Auth) ekranı
  if (!user) {
    return <Auth />;
  }

  // 2. Odaya girilmişse Bekleme / Oyun Arenası Ekranı
  if (roomId) {
    return (
      <GameRoom 
        roomId={roomId} 
        userId={user.uid} 
        onLeaveRoom={() => setRoomId(null)} 
      />

    );
  }

  // 3. Giriş yapılmışsa Lobi ekranı
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Üst Sağ Çıkış Butonu */}
      <button
        onClick={logoutUser}
        className="fixed top-4 right-4 z-50 bg-slate-900/80 hover:bg-rose-600/20 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 text-xs font-semibold py-2 px-3 rounded-xl backdrop-blur-md transition-all cursor-pointer"
      >
        Çıkış Yap
      </button>

      <Lobby user={user} onRoomJoined={(id) => setRoomId(id)} />
    </div>
  );
}