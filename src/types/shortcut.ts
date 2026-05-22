export type Software = 'photoshop' | 'illustrator' | 'figma' | 'premiere-pro' | 'after-effects';

export type Frequency = 'high' | 'medium' | 'low';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Shortcut {
  id: string;
  software: Software;
  category: string;
  action: string;
  win: string;
  mac: string;
  description: string;
  memoryTip: string;
  scene: string;
  frequency: Frequency;
  difficulty: Difficulty;
}

export interface SoftwareInfo {
  id: Software;
  name: string;
  nameCN: string;
  icon: string;
  color: string;
  description: string;
  categoryOrder: string[];
}

export type OsType = 'win' | 'mac';

export interface ShortcutFilters {
  software: Software | 'all';
  category: string;
  frequency: Frequency | 'all';
  difficulty: Difficulty | 'all';
  searchQuery: string;
}
