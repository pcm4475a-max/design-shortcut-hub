import type { Software } from '../types/shortcut';
import { softwareList } from '../data/software';

interface SoftwareTabsProps {
  active: Software | 'all';
  onChange: (software: Software | 'all') => void;
}

export default function SoftwareTabs({ active, onChange }: SoftwareTabsProps) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
      <button
        onClick={() => onChange('all')}
        className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          active === 'all'
            ? 'bg-accent text-white shadow-sm'
            : 'bg-surface text-text-secondary hover:text-text hover:bg-bg border border-border'
        }`}
      >
        全部软件
      </button>
      {softwareList.map((sw) => (
        <button
          key={sw.id}
          onClick={() => onChange(sw.id)}
          className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
            active === sw.id
              ? 'text-white shadow-sm'
              : 'bg-surface text-text-secondary hover:text-text hover:bg-bg border border-border'
          }`}
          style={active === sw.id ? { backgroundColor: sw.color } : undefined}
        >
          <span>{sw.icon}</span>
          <span>{sw.name}</span>
        </button>
      ))}
    </div>
  );
}
