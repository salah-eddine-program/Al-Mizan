import React, { useMemo, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { LexiconRoot } from '../types/quran';
import { searchLexiconRoots } from '../utils/portalLogic';

interface LexiconScreenProps {
  roots: LexiconRoot[];
  onJumpToVerse: (surahNumber: number, ayahNumber: number, rootId?: string) => void;
}

export const LexiconScreen: React.FC<LexiconScreenProps> = ({ roots, onJumpToVerse }) => {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>(roots[0]?.id ?? '');

  const filteredRoots = useMemo(() => searchLexiconRoots(roots, query), [roots, query]);
  const activeRoot =
    filteredRoots.find((r) => r.id === selectedId) ?? filteredRoots[0] ?? null;

  return (
    <main className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-32 space-y-8">
      <section className="bg-[#F4EFE6] border border-[#C5A059]/30 rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold text-[#8C6B28] mb-2">
            Classical Arabic Morphology
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#134E3C] tracking-tight">
            Trilateral Root Lexicon &amp; Concordance
          </h1>
          <p className="mt-2.5 text-base text-[#1E293B] max-w-[65ch] leading-relaxed">
            Explore foundational Arabic trilateral roots, derived morphological patterns, and direct
            verse concordances inspired by classical lexicographers.
          </p>
        </div>

        <div className="relative w-full md:w-80 shrink-0">
          <Search
            className="w-4 h-4 text-[#707974] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <label htmlFor="lexicon-search-input" className="sr-only">
            Search Arabic root, transliteration, or English meaning
          </label>
          <input
            id="lexicon-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search root (e.g. رحم, mercy, q-w-m)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#707974] focus:outline-none focus:border-[#134E3C] focus:ring-2 focus:ring-[#134E3C]/15"
          />
        </div>
      </section>

      {filteredRoots.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Root List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredRoots.map((root) => {
              const isSelected = activeRoot?.id === root.id;
              return (
                <button
                  key={root.id}
                  type="button"
                  onClick={() => setSelectedId(root.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-colors flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#E6F0EB] border-[#134E3C]/45 shadow-manuscript'
                      : 'bg-white border-[#C5A059]/25 hover:border-[#C5A059]/60'
                  }`}
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#8C6B28]">
                      {root.semanticField} · <span className="tabular-nums">{root.totalOccurrences}</span>×
                    </p>
                    <h2 className="font-editorial text-lg font-semibold text-[#134E3C] mt-0.5">
                      Root {root.rootTranslit}
                    </h2>
                    <p className="text-sm text-[#1E293B] truncate mt-0.5">
                      {root.coreMeaning}
                    </p>
                  </div>
                  <span
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-3xl text-[#0F172A] shrink-0"
                  >
                    {root.rootArabic}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Root Detail Panel (7 cols) */}
          {activeRoot && (
            <section
              aria-label={`Lexicon Entry for ${activeRoot.rootTranslit}`}
              className="lg:col-span-7 bg-white border border-[#C5A059]/25 rounded-3xl p-7 sm:p-9 shadow-scholarly-panel space-y-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#C5A059]/25">
                <div>
                  <p className="text-xs font-semibold text-[#8C6B28]">
                    {activeRoot.semanticField} · <span className="tabular-nums">{activeRoot.totalOccurrences}</span> Quranic occurrences
                  </p>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#134E3C] mt-1">
                    Root: {activeRoot.rootTranslit}
                  </h2>
                  <p className="text-base text-[#1E293B] mt-2">{activeRoot.coreMeaning}</p>
                </div>
                <div
                  dir="rtl"
                  lang="ar"
                  className="px-5 py-3 rounded-2xl bg-[#F4EFE6] border border-[#C5A059]/30 font-arabic text-4xl text-[#134E3C]"
                >
                  {activeRoot.rootArabic}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-[#404944]">
                  Scholarly Lexicography
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#1E293B] max-w-[65ch]">
                  {activeRoot.scholarlyNote}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-[#404944]">
                  Derived Morphological Forms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeRoot.derivedForms.map((form) => (
                    <div
                      key={form.translit}
                      className="p-4 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/20"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm text-[#134E3C]">
                          {form.translit}
                        </span>
                        <span dir="rtl" lang="ar" className="font-arabic text-2xl text-[#0F172A]">
                          {form.arabic}
                        </span>
                      </div>
                      <p className="text-xs text-[#8C6B28] mt-1">{form.formLabel}</p>
                      <p className="text-sm text-[#1E293B] mt-1.5">{form.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-semibold text-[#404944]">
                  Verse Concordance (Click to Open in Reader)
                </h3>
                <div className="space-y-2.5">
                  {activeRoot.references.map((ref) => (
                    <button
                      key={`${ref.surahNumber}:${ref.ayahNumber}`}
                      type="button"
                      onClick={() =>
                        onJumpToVerse(ref.surahNumber, ref.ayahNumber, activeRoot.id)
                      }
                      className="w-full text-left p-4 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/25 hover:bg-[#E6F0EB] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-[#134E3C] tabular-nums">
                          Quran {ref.surahNumber}:{ref.ayahNumber}
                        </span>
                        <p className="text-sm text-[#1E293B]">{ref.phraseEnglish}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span dir="rtl" lang="ar" className="font-arabic text-2xl text-[#0F172A]">
                          {ref.phraseArabic}
                        </span>
                        <ExternalLink className="w-4 h-4 text-[#134E3C]" aria-hidden="true" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="bg-white border border-[#C5A059]/25 rounded-2xl p-10 text-center space-y-3">
          <p className="font-editorial text-lg font-semibold text-[#134E3C]">
            No lexicon roots match &ldquo;{query}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="px-4 py-2 rounded-lg bg-[#134E3C] text-white text-xs font-semibold"
          >
            Show All Roots
          </button>
        </div>
      )}
    </main>
  );
};
