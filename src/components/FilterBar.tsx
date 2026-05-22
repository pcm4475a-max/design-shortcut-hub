import type { Frequency, Difficulty } from '../types/shortcut';
import { getCategories } from '../data';

interface FilterBarProps {
  software: string;
  category: string;
  frequency: Frequency | 'all';
  difficulty: Difficulty | 'all';
  onCategoryChange: (cat: string) => void;
  onFrequencyChange: (freq: Frequency | 'all') => void;
  onDifficultyChange: (diff: Difficulty | 'all') => void;
  resultCount: number;
}

const frequencyOptions: { value: Frequency | 'all'; label: string }[] = [
  { value: 'all', label: '全部频率' },
  { value: 'high', label: '高频' },
  { value: 'medium', label: '中频' },
  { value: 'low', label: '低频' },
];

const difficultyOptions: { value: Difficulty | 'all'; label: string }[] = [
  { value: 'all', label: '全部难度' },
  { value: 'easy', label: '新手友好' },
  { value: 'medium', label: '进阶' },
  { value: 'hard', label: '高级' },
];

export default function FilterBar({
  software,
  category,
  frequency,
  difficulty,
  onCategoryChange,
  onFrequencyChange,
  onDifficultyChange,
  resultCount,
}: FilterBarProps) {
  const categories = getCategories(software);

  return (
    <div className="space-y-3">
      {/* Category filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 flex-wrap">
        <button
          onClick={() => onCategoryChange('all')}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            category === 'all'
              ? 'bg-text-heading text-white'
              : 'bg-surface text-text-secondary hover:text-text border border-border'
          }`}
        >
          全部分类
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              category === cat
                ? 'bg-text-heading text-white'
                : 'bg-surface text-text-secondary hover:text-text border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Frequency & Difficulty + count */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex gap-1">
          {frequencyOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onFrequencyChange(opt.value)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                frequency === opt.value
                  ? opt.value === 'high'
                    ? 'bg-high-bg text-high'
                    : opt.value === 'medium'
                    ? 'bg-medium-bg text-medium'
                    : 'bg-low-bg text-low'
                  : 'bg-surface text-text-secondary hover:text-text border border-border'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex gap-1">
          {difficultyOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onDifficultyChange(opt.value)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                difficulty === opt.value
                  ? opt.value === 'easy'
                    ? 'bg-easy-bg text-easy'
                    : opt.value === 'medium'
                    ? 'bg-medium-bg text-medium'
                    : 'bg-hard-bg text-hard'
                  : 'bg-surface text-text-secondary hover:text-text border border-border'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <span className="text-xs text-text-secondary ml-auto">
          共 {resultCount} 条快捷键
        </span>
      </div>
    </div>
  );
}
