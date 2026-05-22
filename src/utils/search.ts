import type { Shortcut } from '../types/shortcut';

export function searchShortcuts(shortcuts: Shortcut[], query: string): Shortcut[] {
  if (!query.trim()) return shortcuts;

  const q = query.toLowerCase().trim();

  return shortcuts.filter(
    (s) =>
      s.action.toLowerCase().includes(q) ||
      s.win.toLowerCase().includes(q) ||
      s.mac.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.scene.toLowerCase().includes(q) ||
      s.software.toLowerCase().includes(q) ||
      s.memoryTip.toLowerCase().includes(q)
  );
}

export function filterBySoftware(shortcuts: Shortcut[], software: string): Shortcut[] {
  if (software === 'all') return shortcuts;
  return shortcuts.filter((s) => s.software === software);
}

export function filterByCategory(shortcuts: Shortcut[], category: string): Shortcut[] {
  if (!category || category === 'all') return shortcuts;
  return shortcuts.filter((s) => s.category === category);
}

export function filterByFrequency(shortcuts: Shortcut[], frequency: string): Shortcut[] {
  if (frequency === 'all') return shortcuts;
  return shortcuts.filter((s) => s.frequency === frequency);
}

export function filterByDifficulty(shortcuts: Shortcut[], difficulty: string): Shortcut[] {
  if (difficulty === 'all') return shortcuts;
  return shortcuts.filter((s) => s.difficulty === difficulty);
}
