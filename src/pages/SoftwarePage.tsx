import { useState, useMemo } from 'react';
import type { Software, OsType, Frequency, Difficulty } from '../types/shortcut';
import { softwareMap } from '../data/software';
import { getShortcutsBySoftware } from '../data';
import { searchShortcuts, filterByCategory, filterByFrequency, filterByDifficulty } from '../utils/search';
import { toggleFavorite, isFavorite } from '../utils/storage';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ShortcutCard from '../components/ShortcutCard';

interface SoftwarePageProps {
  software: Software;
  os: OsType;
}

export default function SoftwarePage({ software, os }: SoftwarePageProps) {
  const sw = softwareMap[software];
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [frequency, setFrequency] = useState<Frequency | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [favIds, setFavIds] = useState<Set<string>>(() => new Set(
    getShortcutsBySoftware(software).filter(s => isFavorite(s.id)).map(s => s.id)
  ));

  const handleToggleFav = (id: string) => {
    const newFavs = toggleFavorite(id);
    setFavIds(new Set(newFavs));
  };

  const shortcuts = useMemo(() => {
    let result = getShortcutsBySoftware(software);
    result = filterByCategory(result, category);
    result = filterByFrequency(result, frequency);
    result = filterByDifficulty(result, difficulty);
    result = searchShortcuts(result, searchQuery);
    return result;
  }, [software, category, frequency, difficulty, searchQuery]);

  if (!sw) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <a href="/design-shortcut-hub/" className="text-text-secondary hover:text-text transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <span className="text-2xl">{sw.icon}</span>
          <h1 className="text-2xl font-bold text-text-heading">{sw.name} 快捷键速查</h1>
          <span className="text-sm text-text-secondary">{sw.description}</span>
        </div>
      </div>

      {/* Search */}
      <div className="mb-5">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Filters */}
      <div className="mb-6">
        <FilterBar
          software={software}
          category={category}
          frequency={frequency}
          difficulty={difficulty}
          onCategoryChange={setCategory}
          onFrequencyChange={setFrequency}
          onDifficultyChange={setDifficulty}
          resultCount={shortcuts.length}
        />
      </div>

      {/* Results */}
      {shortcuts.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-xl border border-border">
          <p className="text-text-secondary text-lg mb-2">没有找到对应快捷键</p>
          <p className="text-sm text-text-secondary/70">
            可以换个关键词试试，比如：图层、钢笔、导出、缩放、选区
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {shortcuts.map((s) => (
            <ShortcutCard
              key={s.id}
              shortcut={s}
              os={os}
              isFav={favIds.has(s.id)}
              onToggleFav={() => handleToggleFav(s.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
