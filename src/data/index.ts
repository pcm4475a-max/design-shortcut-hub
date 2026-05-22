import type { Shortcut } from '../types/shortcut';
import photoshopShortcuts from './photoshop';
import illustratorShortcuts from './illustrator';
import figmaShortcuts from './figma';
import premiereProShortcuts from './premiere-pro';
import afterEffectsShortcuts from './after-effects';

export const allShortcuts: Shortcut[] = [
  ...photoshopShortcuts,
  ...illustratorShortcuts,
  ...figmaShortcuts,
  ...premiereProShortcuts,
  ...afterEffectsShortcuts,
];

export const totalCount = allShortcuts.length;

export function getShortcutsBySoftware(software: string): Shortcut[] {
  if (software === 'all') return allShortcuts;
  return allShortcuts.filter((s) => s.software === software);
}

export function getCategories(software: string): string[] {
  const cats = new Set(
    allShortcuts
      .filter((s) => software === 'all' || s.software === software)
      .map((s) => s.category)
  );
  return Array.from(cats);
}

export function getHighFrequencyShortcuts(software?: string): Shortcut[] {
  const list = software ? getShortcutsBySoftware(software) : allShortcuts;
  return list.filter((s) => s.frequency === 'high');
}

export function getBeginnerShortcuts(software?: string): Shortcut[] {
  const list = software ? getShortcutsBySoftware(software) : allShortcuts;
  return list.filter((s) => s.difficulty === 'easy' && s.frequency === 'high');
}
