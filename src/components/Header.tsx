import type { OsType } from '../types/shortcut';

interface HeaderProps {
  os: OsType;
  onOsChange: (os: OsType) => void;
}

export default function Header({ os, onOsChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="/design-shortcut-hub/" className="flex items-center gap-2.5 no-underline">
            <span className="text-xl font-bold text-text-heading tracking-tight">
              快捷键速查
            </span>
            <span className="hidden sm:inline text-xs font-medium text-text-secondary bg-bg px-2 py-0.5 rounded-full">
              PS / AI / Figma
            </span>
          </a>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-secondary hidden sm:inline">系统切换</span>
            <div className="flex bg-bg rounded-lg p-0.5 border border-border">
              <button
                onClick={() => onOsChange('win')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  os === 'win'
                    ? 'bg-surface text-text-heading shadow-sm'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                Windows
              </button>
              <button
                onClick={() => onOsChange('mac')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  os === 'mac'
                    ? 'bg-surface text-text-heading shadow-sm'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                Mac
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
