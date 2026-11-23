import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Compass, Search } from 'lucide-react';
import { RevelationPlace, Surah, ThematicPath } from '../types/quran';
import { filterSurahs } from '../utils/portalLogic';
import { GirihDivider } from './GirihDivider';

interface SurahIndexScreenProps {
  surahs: Surah[];
  thematicPaths: ThematicPath[];
  lastReadSurahNumber: number;
  lastReadAyahNumber: number;
  onOpenSurah: (surahNumber: number, ayahNumber?: number) => void;
}

export const SurahIndexScreen: React.FC<SurahIndexScreenProps> = ({
  surahs,
  thematicPaths,
  lastReadSurahNumber,
  lastReadAyahNumber,
  onOpenSurah,
}) => {
  const [query, setQuery] = useState('');
  const [revelationFilter, setRevelationFilter] = useState<'All' | RevelationPlace>('All');

  const filtered = useMemo(
    () => filterSurahs(surahs, query, revelationFilter),
    [surahs, query, revelationFilter]
  );

  const lastReadSurah =
    surahs.find((s) => s.number === lastReadSurahNumber) ?? surahs[0];

  return (
    <main className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-32 space-y-10">
      {/* Editorial Intro + Continue Reading */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-[#F4EFE6] border border-[#C5A059]/30 rounded-3xl p-7 sm:p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold text-[#8C6B28] mb-2">
              Curated Classical Index
            </p>
            <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#134E3C] tracking-tight max-w-2xl">
              Chapters of the Holy Quran
            </h1>
            <p className="mt-3 text-base text-[#1E293B] max-w-[65ch] leading-relaxed">
              Navigate Makki and Madani revelations with dual scholarly translations, classical
              exegesis from Ibn Kathir and Al-Jalalayn, and interactive trilateral root morphology.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[#C5A059]/25 flex flex-wrap items-center gap-6 text-sm text-[#404944]">
            <span className="tabular-nums">
              <strong className="text-[#134E3C]">{surahs.length}</strong> Study Chapters Loaded
            </span>
            <span aria-hidden="true">·</span>
            <span>Dual English Translations</span>
            <span aria-hidden="true">·</span>
            <span>Classical Tafsir &amp; Lexicon</span>
          </div>
        </div>

        {/* Continue Reading Card */}
        <div className="lg:col-span-4 bg-[#134E3C] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-scholarly-panel">
          <div>
            <p className="text-xs font-semibold text-[#fed488] mb-2">
              Resume Study Session
            </p>
            <h2 className="font-editorial text-2xl font-semibold">
              {lastReadSurah.nameTranslit}
            </h2>
            <p className="text-sm text-[#b5efd6] mt-1">
              {lastReadSurah.nameEnglish} · Ayah {lastReadSurah.number}:{lastReadAyahNumber}
            </p>
            <p dir="rtl" lang="ar" className="font-arabic text-3xl text-[#fed488] mt-4 text-right">
              سورة {lastReadSurah.nameArabic}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenSurah(lastReadSurah.number, lastReadAyahNumber)}
            className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#C5A059] hover:bg-[#b38e47] text-[#0F172A] text-sm font-semibold transition-colors"
          >
            <span>Continue Reading</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Thematic Reading Paths */}
      <section aria-labelledby="thematic-paths-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#8C6B28]" aria-hidden="true" />
          <h2 id="thematic-paths-heading" className="font-editorial text-2xl font-semibold text-[#134E3C]">
            Guided Thematic Paths
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {thematicPaths.map((path) => (
            <button
              key={path.id}
              type="button"
              onClick={() => onOpenSurah(path.surahNumber, path.ayahNumber)}
              className="text-left bg-white border border-[#C5A059]/25 hover:border-[#134E3C]/50 hover:bg-[#E6F0EB]/40 rounded-2xl p-5 shadow-manuscript transition-colors flex flex-col justify-between gap-4"
            >
              <div>
                <p className="text-xs font-semibold text-[#8C6B28] mb-1.5">
                  {path.durationLabel}
                </p>
                <h3 className="font-editorial text-base font-semibold text-[#0F172A]">
                  {path.title}
                </h3>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  {path.subtitle}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#134E3C]">
                <span>Open Passage</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <GirihDivider />

      {/* Search & Revelation Filter Bar */}
      <section aria-labelledby="surah-directory-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 id="surah-directory-heading" className="font-editorial text-2xl font-semibold text-[#134E3C]">
            Surah Directory
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#707974] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="surah-index-search" className="sr-only">
                Search chapters by name, Arabic, or topic
              </label>
              <input
                id="surah-index-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Arabic, English, or number..."
                className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#707974] focus:outline-none focus:border-[#134E3C] focus:ring-2 focus:ring-[#134E3C]/15"
              />
            </div>

            <div
              role="group"
              aria-label="Filter by revelation period"
              className="inline-flex p-1 rounded-lg bg-[#F4EFE6] border border-[#C5A059]/25 self-start"
            >
              {(['All', 'Makki', 'Madani'] as const).map((period) => {
                const active = revelationFilter === period;
                return (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setRevelationFilter(period)}
                    aria-pressed={active}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-[#134E3C] text-white'
                        : 'text-[#404944] hover:text-[#134E3C]'
                    }`}
                  >
                    {period}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Surah Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((surah) => (
              <button
                key={surah.number}
                type="button"
                onClick={() => onOpenSurah(surah.number)}
                className="text-left bg-white border border-[#C5A059]/25 hover:border-[#134E3C]/50 hover:bg-[#E6F0EB]/35 rounded-2xl p-6 shadow-manuscript transition-colors flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="w-10 h-10 rounded-lg bg-[#E6F0EB] text-[#134E3C] font-semibold text-sm flex items-center justify-center shrink-0 tabular-nums">
                      {surah.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-editorial text-lg font-semibold text-[#0F172A] truncate">
                        {surah.nameTranslit}
                      </h3>
                      <p className="text-sm text-[#404944] truncate">{surah.nameEnglish}</p>
                    </div>
                  </div>
                  <span dir="rtl" lang="ar" className="font-arabic text-2xl text-[#134E3C] shrink-0">
                    {surah.nameArabic}
                  </span>
                </div>

                <p className="text-sm text-[#1E293B] line-clamp-2 leading-relaxed">
                  {surah.themeSummary}
                </p>

                <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#404944]">
                  <span>
                    {surah.revelation} · <span className="tabular-nums">{surah.totalAyahsInSurah}</span> Verses · Juz {surah.juz}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#134E3C]">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Read</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#C5A059]/25 rounded-2xl p-10 text-center space-y-3">
            <p className="font-editorial text-lg font-semibold text-[#134E3C]">
              No matching chapters found
            </p>
            <p className="text-sm text-[#404944]">
              Try clearing your filter or searching by Surah number (e.g. 1, 55, 112).
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setRevelationFilter('All');
              }}
              className="px-4 py-2 rounded-lg bg-[#134E3C] text-white text-xs font-semibold"
            >
              Reset Directory Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
