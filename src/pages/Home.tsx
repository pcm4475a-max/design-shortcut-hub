import { useState } from 'react';
import type { Software, OsType } from '../types/shortcut';
import { softwareList } from '../data/software';
import { allShortcuts, getBeginnerShortcuts, getHighFrequencyShortcuts } from '../data';
import SearchBar from '../components/SearchBar';
import ShortcutCard from '../components/ShortcutCard';
import { toggleFavorite } from '../utils/storage';
import { searchShortcuts } from '../utils/search';

interface HomeProps {
  os: OsType;
  onSoftwareSelect: (software: Software) => void;
}

export default function Home({ os, onSoftwareSelect }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [favIds, setFavIds] = useState<Set<string>>(new Set());

  const handleToggleFav = (id: string) => {
    const newFavs = toggleFavorite(id);
    setFavIds(new Set(newFavs));
  };

  const searchResults = searchQuery.trim() ? searchShortcuts(allShortcuts, searchQuery) : [];
  const beginnerShortcuts = getBeginnerShortcuts();
  const psHigh = getHighFrequencyShortcuts('photoshop').slice(0, 8);
  const aiHigh = getHighFrequencyShortcuts('illustrator').slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading tracking-tight mb-4">
          设计师快捷键速查站
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
          快速查找和学习 Photoshop、Illustrator 等设计软件的常用快捷键。
          支持 Windows / Mac 对照、分类筛选、收藏，让快捷键成为你的肌肉记忆。
        </p>
        <div className="flex justify-center">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Search Results */}
      {searchQuery.trim() && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-text-heading mb-4">
            搜索结果：{searchResults.length} 条
          </h2>
          {searchResults.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-xl border border-border">
              <p className="text-text-secondary mb-2">没有找到对应快捷键</p>
              <p className="text-sm text-text-secondary/70">
                可以换个关键词试试，比如：图层、钢笔、导出、缩放、选区
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {searchResults.slice(0, 24).map((s) => (
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
        </section>
      )}

      {/* Software entry cards */}
      {!searchQuery.trim() && (
        <>
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-text-heading mb-4">选择软件</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {softwareList.map((sw) => (
                <button
                  key={sw.id}
                  onClick={() => onSoftwareSelect(sw.id)}
                  className="bg-surface border border-border rounded-xl p-5 text-center hover:shadow-md transition-all hover:-translate-y-0.5 group"
                >
                  <span className="text-3xl block mb-2">{sw.icon}</span>
                  <span className="text-sm font-semibold text-text-heading block mb-1">{sw.name}</span>
                  <span className="text-xs text-text-secondary">{sw.description}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Quick reference sections */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⭐</span>
              <h2 className="text-lg font-semibold text-text-heading">新手先背这 {beginnerShortcuts.length} 个</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {beginnerShortcuts.slice(0, 20).map((s) => (
                <ShortcutCard
                  key={s.id}
                  shortcut={s}
                  os={os}
                  isFav={favIds.has(s.id)}
                  onToggleFav={() => handleToggleFav(s.id)}
                />
              ))}
            </div>
          </section>

          {/* PS high frequency */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-text-heading mb-4">
              🎨 Photoshop 高频快捷键
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {psHigh.map((s) => (
                <ShortcutCard
                  key={s.id}
                  shortcut={s}
                  os={os}
                  isFav={favIds.has(s.id)}
                  onToggleFav={() => handleToggleFav(s.id)}
                />
              ))}
            </div>
            <button
              onClick={() => onSoftwareSelect('photoshop')}
              className="mt-3 text-sm text-accent hover:text-accent-hover font-medium"
            >
              查看全部 Photoshop 快捷键 →
            </button>
          </section>

          {/* AI high frequency */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-text-heading mb-4">
              ✏️ Illustrator 高频快捷键
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {aiHigh.map((s) => (
                <ShortcutCard
                  key={s.id}
                  shortcut={s}
                  os={os}
                  isFav={favIds.has(s.id)}
                  onToggleFav={() => handleToggleFav(s.id)}
                />
              ))}
            </div>
            <button
              onClick={() => onSoftwareSelect('illustrator')}
              className="mt-3 text-sm text-accent hover:text-accent-hover font-medium"
            >
              查看全部 Illustrator 快捷键 →
            </button>
          </section>
        </>
      )}
    </div>
  );
}
