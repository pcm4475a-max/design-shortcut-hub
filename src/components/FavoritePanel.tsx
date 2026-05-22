import type { Shortcut, OsType } from '../types/shortcut';
import { KeyCombo } from './KeyCap';
import { softwareMap } from '../data/software';

interface FavoritePanelProps {
  favorites: Shortcut[];
  os: OsType;
  onToggleFav: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritePanel({ favorites, os, onToggleFav, isOpen, onClose }: FavoritePanelProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Panel */}
      <div
        className={`fixed top-14 right-0 h-[calc(100vh-3.5rem)] w-80 bg-surface border-l border-border z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 lg:static lg:h-auto lg:border-l-0 lg:w-full lg:bg-transparent`}
      >
        <div className="p-4 lg:p-0">
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <h3 className="text-sm font-semibold text-text-heading flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              我的收藏
              {favorites.length > 0 && (
                <span className="text-xs text-text-secondary font-normal">({favorites.length})</span>
              )}
            </h3>
            <button onClick={onClose} className="lg:hidden text-text-secondary hover:text-text p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {favorites.length === 0 ? (
            <p className="text-xs text-text-secondary leading-relaxed">
              还没有收藏快捷键。浏览快捷键卡片，点击星标即可收藏。
            </p>
          ) : (
            <div className="space-y-2">
              {favorites.map((s) => {
                const sw = softwareMap[s.software];
                const keyStr = os === 'win' ? s.win : s.mac;
                return (
                  <div key={s.id} className="bg-bg rounded-lg p-3 border border-border/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-text-heading">{s.action}</span>
                      <button
                        onClick={() => onToggleFav(s.id)}
                        className="text-amber-500 hover:text-amber-600 shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                    </div>
                    <KeyCombo keys={keyStr} size="sm" />
                    <span className="text-[10px] text-text-secondary/60 ml-1" style={{ color: sw.color }}>
                      {sw.name}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
