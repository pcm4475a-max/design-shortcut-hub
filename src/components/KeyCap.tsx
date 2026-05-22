interface KeyCapProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function KeyCap({ label, size = 'md' }: KeyCapProps) {
  const sizeClass = size === 'sm' ? 'min-w-[1.4rem] h-[1.4rem] text-[0.7rem] px-1' : 'min-w-[1.75rem] h-[1.75rem] text-[0.8rem] px-1.5';

  return (
    <kbd className={`key-cap ${sizeClass}`}>
      {label}
    </kbd>
  );
}

export function KeyCombo({ keys, size = 'md' }: { keys: string; size?: 'sm' | 'md' }) {
  return (
    <span className="inline-flex items-center gap-1 flex-wrap">
      {keys.split(' + ').map((key, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-text-secondary text-xs">+</span>}
          <KeyCap label={key} size={size} />
        </span>
      ))}
    </span>
  );
}
