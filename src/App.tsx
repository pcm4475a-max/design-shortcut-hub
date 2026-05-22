import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import type { Software, OsType } from './types/shortcut';
import { allShortcuts } from './data';
import { getFavorites, toggleFavorite } from './utils/storage';
import Header from './components/Header';
import FavoritePanel from './components/FavoritePanel';
import Home from './pages/Home';
import SoftwarePage from './pages/SoftwarePage';

function AppContent() {
  const [os, setOs] = useState<OsType>('win');
  const [favOpen, setFavOpen] = useState(false);
  const [favIds, setFavIds] = useState<Set<string>>(() => new Set(getFavorites()));
  const navigate = useNavigate();

  const refreshFavs = () => {
    setFavIds(new Set(getFavorites()));
  };

  const favorites = useMemo(
    () => allShortcuts.filter((s) => favIds.has(s.id)),
    [favIds]
  );

  const handleSoftwareSelect = (software: Software) => {
    navigate(`/software/${software}`);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header os={os} onOsChange={setOs} />

      <div className="flex-1 flex">
        {/* Main content */}
        <main className="flex-1 min-w-0">
          <Routes>
            <Route
              path="/"
              element={<Home os={os} onSoftwareSelect={handleSoftwareSelect} />}
            />
            <Route
              path="/software/:softwareId"
              element={<SoftwareRoute os={os} />}
            />
          </Routes>
        </main>

        {/* Desktop favorites sidebar */}
        <aside className="hidden lg:block w-72 bg-surface border-l border-border overflow-y-auto max-h-[calc(100vh-3.5rem)] sticky top-14">
          <FavoritePanel
            favorites={favorites}
            os={os}
            onToggleFav={(id) => {
              toggleFavorite(id);
              refreshFavs();
            }}
            isOpen={true}
            onClose={() => {}}
          />
        </aside>
      </div>

      {/* Mobile favorites toggle */}
      <button
        onClick={() => {
          setFavOpen(!favOpen);
          refreshFavs();
        }}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-hover transition-colors"
        aria-label="收藏"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        {favIds.size > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {favIds.size}
          </span>
        )}
      </button>

      {/* Mobile favorites panel */}
      <div className="lg:hidden">
        <FavoritePanel
          favorites={favorites}
          os={os}
          onToggleFav={(id) => {
            toggleFavorite(id);
            refreshFavs();
          }}
          isOpen={favOpen}
          onClose={() => setFavOpen(false)}
        />
      </div>
    </div>
  );
}

function SoftwareRoute({ os }: { os: OsType }) {
  const { softwareId } = useParams<{ softwareId: string }>();
  const validSoftware = ['photoshop', 'illustrator', 'figma', 'premiere-pro', 'after-effects'];
  if (!softwareId || !validSoftware.includes(softwareId)) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-text-secondary">未找到该软件</p>
        <a href="/design-shortcut-hub/" className="text-accent hover:underline text-sm mt-2 inline-block">
          返回首页
        </a>
      </div>
    );
  }
  return <SoftwarePage software={softwareId as Software} os={os} />;
}

export default function App() {
  return (
    <BrowserRouter basename="/design-shortcut-hub">
      <AppContent />
    </BrowserRouter>
  );
}
