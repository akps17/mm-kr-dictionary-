export type WordLevel = 'basic' | 'pre-intermediate' | 'intermediate' | 'advanced' | undefined;

export type Example = {
  korean: string;
  myanmar: string;
  english?: string;
};

export type DictionaryEntry = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
  level?: WordLevel;
  examples?: Example[];
  addedAt?: Date;
  addedBy?: string;
  source?: string;
};

export const WORD_LEVELS: { value: WordLevel; label: string; color: string }[] = [
  { value: 'basic', label: 'Basic (TOPIK I - Level 1)', color: '#10B981' },
  { value: 'pre-intermediate', label: 'Pre-Intermediate (TOPIK I - Level 2)', color: '#10B981' },
  { value: 'intermediate', label: 'Intermediate (TOPIK II - Level 3-4)', color: '#10B981' },
  { value: 'advanced', label: 'Advanced (TOPIK II - Level 5-6)', color: '#10B981' },
];