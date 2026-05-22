import type { Shortcut, OsType } from '../types/shortcut';
import { KeyCombo } from './KeyCap';
import { softwareMap } from '../data/software';

interface ShortcutCardProps {
  shortcut: Shortcut;
  os: OsType;
  isFav: boolean;
  onToggleFav: () => void;
}

export default function ShortcutCard({ shortcut, os, isFav, onToggleFav }: ShortcutCardProps) {
  const sw = softwareMap[shortcut.software];
  const keyStr = os === 'win' ? shortcut.win : shortcut.mac;

  return (
    <div className="shortcut-card bg-surface border border-border rounded-xl p-4 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Action name + tags */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-base font-semibold text-text-heading">{shortcut.action}</h3>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: sw.color + '18', color: sw.color }}>
              {sw.name}
            </span>
            {shortcut.frequency === 'high' && (
              <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-high-bg text-high">高频</span>
            )}
            {shortcut.difficulty === 'easy' && (
              <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-easy-bg text-easy">新手友好</span>
            )}
          </div>

          {/* Key combo display */}
          <div className="mb-2">
            <KeyCombo keys={keyStr} />
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-2">
            {shortcut.description}
          </p>

          {/* Memory tip */}
          <div className="flex items-start gap-1.5 text-xs">
            <span className="shrink-0 mt-0.5">💡</span>
            <span className="text-text-secondary/80 italic">{shortcut.memoryTip}</span>
          </div>

          {/* Scene */}
          <div className="flex items-start gap-1.5 text-xs mt-1">
            <span className="shrink-0 mt-0.5">🎯</span>
            <span className="text-text-secondary/70">{shortcut.scene}</span>
          </div>
        </div>

        {/* Favorite button */}
        <button
          onClick={onToggleFav}
          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
            isFav
              ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
              : 'text-text-secondary/30 hover:text-amber-400 hover:bg-amber-50 opacity-0 group-hover:opacity-100'
          }`}
          aria-label={isFav ? '取消收藏' : '收藏'}
          title={isFav ? '取消收藏' : '收藏'}
        >
          <svg className="w-4 h-4" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
