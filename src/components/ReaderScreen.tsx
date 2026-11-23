import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Languages,
  SlidersHorizontal,
} from 'lucide-react';
import {
  DrawerTab,
  LexiconRoot,
  Reciter,
  StudyNote,
  Surah,
  TafsirSourceId,
  TranslationId,
  WordToken,
} from '../types/quran';
import { AyahCard } from './AyahCard';
import { GirihDivider } from './GirihDivider';
import { ScholarlyDrawer } from './ScholarlyDrawer';
import { makeVerseKey } from '../utils/portalLogic';

interface ReaderScreenProps {
  surahs: Surah[];
  currentSurah: Surah;
  activeStudyAyahNumber: number;
  recitingSurahNumber: number;
  recitingAyahNumber: number;
  isPlaying: boolean;
  translationId: TranslationId;
  tafsirSource: TafsirSourceId;
  reciter: Reciter;
  reciters: Reciter[];
  translationEditions: Array<{ id: TranslationId; label: string; note: string }>;
  showTransliteration: boolean;
  arabicFocusMode: boolean;
  arabicScale: 'standard' | 'large';
  drawerTab: DrawerTab;
  selectedRootId: string | null;
  allRoots: LexiconRoot[];
  bookmarks: string[];
  notes: Record<string, StudyNote>;
  mobileDrawerOpen: boolean;
  onSelectSurah: (surahNumber: number, ayahNumber?: number) => void;
  onChangeTranslation: (id: TranslationId) => void;
  onChangeReciter: (reciterId: string) => void;
  onToggleTransliteration: () => void;
  onToggleArabicFocus: () => void;
  onToggleArabicScale: () => void;
  onPlayAyah: (surahNumber: number, ayahNumber: number) => void;
  onSelectForTafsir: (ayahNumber: number) => void;
  onSelectWordRoot: (ayahNumber: number, token: WordToken) => void;
  onToggleBookmark: (verseKey: string) => void;
  onChangeDrawerTab: (tab: DrawerTab) => void;
  onChangeTafsirSource: (src: TafsirSourceId) => void;
  onSelectRoot: (rootId: string) => void;
  onSaveNote: (surahNumber: number, ayahNumber: number, text: string) => void;
  onSetMobileDrawerOpen: (open: boolean) => void;
}

export const ReaderScreen: React.FC<ReaderScreenProps> = ({
  surahs,
  currentSurah,
  activeStudyAyahNumber,
  recitingSurahNumber,
  recitingAyahNumber,
  isPlaying,
  translationId,
  tafsirSource,
  reciter,
  reciters,
  translationEditions,
  showTransliteration,
  arabicFocusMode,
  arabicScale,
  drawerTab,
  selectedRootId,
  allRoots,
  bookmarks,
  notes,
  mobileDrawerOpen,
  onSelectSurah,
  onChangeTranslation,
  onChangeReciter,
  onToggleTransliteration,
  onToggleArabicFocus,
  onToggleArabicScale,
  onPlayAyah,
  onSelectForTafsir,
  onSelectWordRoot,
  onToggleBookmark,
  onChangeDrawerTab,
  onChangeTafsirSource,
  onSelectRoot,
  onSaveNote,
  onSetMobileDrawerOpen,
}) => {
  const currentSurahIdx = surahs.findIndex((s) => s.number === currentSurah.number);
  const prevSurah = currentSurahIdx > 0 ? surahs[currentSurahIdx - 1] : null;
  const nextSurah =
    currentSurahIdx >= 0 && currentSurahIdx + 1 < surahs.length
      ? surahs[currentSurahIdx + 1]
      : null;

  const activeAyah =
    currentSurah.ayahs.find((a) => a.number === activeStudyAyahNumber) ??
    currentSurah.ayahs[0];
  const selectedRoot = allRoots.find((r) => r.id === selectedRootId) ?? null;

  return (
    <main className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 pt-8 pb-32">
      {/* Surah Masthead */}
      <section className="bg-[#F4EFE6] border border-[#C5A059]/30 rounded-3xl px-6 py-7 sm:px-10 sm:py-9 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#8C6B28]">
              Surah {currentSurah.number} · {currentSurah.revelation} Revelation · Juz{' '}
              {currentSurah.juz} · {currentSurah.totalAyahsInSurah} Verses
            </p>
            <div className="flex flex-wrap items-baseline gap-4">
              <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#134E3C] tracking-tight">
                {currentSurah.nameTranslit}
              </h1>
              <span className="font-editorial text-xl sm:text-2xl text-[#404944]">
                {currentSurah.nameEnglish}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#1E293B] max-w-[65ch] leading-relaxed">
              {currentSurah.themeSummary}
            </p>
            {currentSurah.isExcerpt && currentSurah.excerptLabel && (
              <p className="text-xs font-semibold text-[#134E3C] pt-1">
                {currentSurah.excerptLabel}
              </p>
            )}
          </div>

          <div dir="rtl" lang="ar" className="text-right shrink-0">
            <p className="font-arabic text-4xl sm:text-5xl text-[#134E3C] leading-relaxed">
              سورة {currentSurah.nameArabic}
            </p>
          </div>
        </div>

        <GirihDivider compact />

        {/* Workspace Reading Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <label className="sr-only" htmlFor="reader-surah-select">
              Select Surah
            </label>
            <select
              id="reader-surah-select"
              value={currentSurah.number}
              onChange={(e) => onSelectSurah(Number(e.target.value))}
              className="rounded-lg bg-white border border-[#C5A059]/40 px-3 py-2 text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#134E3C]"
            >
              {surahs.map((s) => (
                <option key={s.number} value={s.number}>
                  {s.number}. {s.nameTranslit} ({s.nameEnglish})
                </option>
              ))}
            </select>

            <label className="sr-only" htmlFor="reader-translation-select">
              Select Translation
            </label>
            <select
              id="reader-translation-select"
              value={translationId}
              onChange={(e) => onChangeTranslation(e.target.value as TranslationId)}
              className="rounded-lg bg-white border border-[#C5A059]/40 px-3 py-2 text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#134E3C]"
            >
              {translationEditions.map((ed) => (
                <option key={ed.id} value={ed.id}>
                  Translation: {ed.label}
                </option>
              ))}
            </select>

            <label className="sr-only" htmlFor="reader-reciter-select">
              Select Reciter
            </label>
            <select
              id="reader-reciter-select"
              value={reciter.id}
              onChange={(e) => onChangeReciter(e.target.value)}
              className="rounded-lg bg-white border border-[#C5A059]/40 px-3 py-2 text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#134E3C]"
            >
              {reciters.map((r) => (
                <option key={r.id} value={r.id}>
                  Reciter: {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onToggleArabicFocus}
              aria-pressed={arabicFocusMode}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
                arabicFocusMode
                  ? 'bg-[#134E3C] text-white border-[#134E3C]'
                  : 'bg-white text-[#1E293B] border-[#C5A059]/40 hover:bg-[#E6F0EB]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Arabic Only</span>
            </button>

            <button
              type="button"
              onClick={onToggleTransliteration}
              aria-pressed={showTransliteration}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
                showTransliteration
                  ? 'bg-[#134E3C] text-white border-[#134E3C]'
                  : 'bg-white text-[#1E293B] border-[#C5A059]/40 hover:bg-[#E6F0EB]'
              }`}
            >
              <Languages className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Transliteration</span>
            </button>

            <button
              type="button"
              onClick={onToggleArabicScale}
              aria-pressed={arabicScale === 'large'}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-[#C5A059]/40 bg-white text-[#1E293B] hover:bg-[#E6F0EB] transition-colors whitespace-nowrap"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{arabicScale === 'large' ? 'Script: Large' : 'Script: Standard'}</span>
            </button>

            <button
              type="button"
              onClick={() => onSetMobileDrawerOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#134E3C] text-white whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Scholarly Drawer</span>
            </button>
          </div>
        </div>
      </section>

      {/* 12-Column Reading Grid (8-col Ayah Stream + 4-col Scholarly Drawer) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-5">
          {currentSurah.ayahs.map((ayah) => {
            const key = makeVerseKey(currentSurah.number, ayah.number);
            const isRecitingThis =
              recitingSurahNumber === currentSurah.number &&
              recitingAyahNumber === ayah.number;
            return (
              <AyahCard
                key={key}
                surahNumber={currentSurah.number}
                surahName={currentSurah.nameTranslit}
                ayah={ayah}
                translationId={translationId}
                showTransliteration={showTransliteration}
                arabicFocusMode={arabicFocusMode}
                arabicScale={arabicScale}
                isReciting={isRecitingThis}
                isPlaying={isPlaying}
                isSelectedForStudy={activeStudyAyahNumber === ayah.number}
                isBookmarked={bookmarks.includes(key)}
                hasNote={Boolean(notes[key])}
                selectedRootId={selectedRootId}
                onPlayAyah={(num) => onPlayAyah(currentSurah.number, num)}
                onSelectForTafsir={onSelectForTafsir}
                onSelectWordRoot={onSelectWordRoot}
                onToggleBookmark={onToggleBookmark}
              />
            );
          })}

          {/* Surah Prev / Next Navigation Footer */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#C5A059]/25">
            {prevSurah ? (
              <button
                type="button"
                onClick={() => onSelectSurah(prevSurah.number)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#C5A059]/45 bg-white text-sm font-semibold text-[#134E3C] hover:bg-[#E6F0EB] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>
                  Previous: {prevSurah.number}. {prevSurah.nameTranslit}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextSurah && (
              <button
                type="button"
                onClick={() => onSelectSurah(nextSurah.number)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#134E3C] hover:bg-[#0F382C] text-sm font-semibold text-white transition-colors"
              >
                <span>
                  Next: {nextSurah.number}. {nextSurah.nameTranslit}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <ScholarlyDrawer
          surah={currentSurah}
          activeAyah={activeAyah}
          activeTab={drawerTab}
          tafsirSource={tafsirSource}
          selectedRoot={selectedRoot}
          allRoots={allRoots}
          notes={notes}
          isOpenMobile={mobileDrawerOpen}
          onCloseMobile={() => onSetMobileDrawerOpen(false)}
          onChangeTab={onChangeDrawerTab}
          onChangeTafsirSource={onChangeTafsirSource}
          onSelectRoot={onSelectRoot}
          onJumpToVerse={onSelectSurah}
          onSaveNote={onSaveNote}
        />
      </div>
    </main>
  );
};
