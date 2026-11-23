export type RevelationPlace = 'Makki' | 'Madani';

export type PortalScreen = 'reader' | 'index' | 'lexicon' | 'notes';

export type DrawerTab = 'tafsir' | 'lexicon' | 'notes';

export type TranslationId = 'sahih' | 'haleem';

export type TafsirSourceId = 'ibn_kathir' | 'jalalayn';

export interface WordToken {
  arabic: string;
  transliteration: string;
  gloss: string;
  rootId?: string;
}

export interface AyahTafsir {
  ibn_kathir: string;
  jalalayn: string;
  contextNote?: string;
}

export interface Ayah {
  number: number;
  arabic: string;
  transliteration: string;
  translations: {
    sahih: string;
    haleem: string;
  };
  tafsir: AyahTafsir;
  words: WordToken[];
  durationSeconds: number;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameTranslit: string;
  nameEnglish: string;
  revelation: RevelationPlace;
  juz: number;
  totalAyahsInSurah: number;
  isExcerpt?: boolean;
  excerptLabel?: string;
  themeSummary: string;
  ayahs: Ayah[];
}

export interface LexiconRoot {
  id: string;
  rootArabic: string;
  rootTranslit: string;
  coreMeaning: string;
  scholarlyNote: string;
  semanticField: string;
  totalOccurrences: number;
  derivedForms: Array<{
    arabic: string;
    translit: string;
    formLabel: string;
    meaning: string;
  }>;
  references: Array<{
    surahNumber: number;
    ayahNumber: number;
    phraseArabic: string;
    phraseEnglish: string;
  }>;
}

export interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  style: string;
  rateMultiplier: number;
}

export interface StudyNote {
  verseKey: string;
  surahNumber: number;
  ayahNumber: number;
  text: string;
  updatedAt: string;
}

export interface ThematicPath {
  id: string;
  title: string;
  subtitle: string;
  surahNumber: number;
  ayahNumber: number;
  durationLabel: string;
}
