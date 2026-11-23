import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { Surah } from '../types/quran';
import { searchCorpusVerses } from '../utils/portalLogic';

interface QuickJumpModalProps {
  isOpen: boolean;
  surahs: Surah[];
  onClose: () => void;
  onSelectVerse: (surahNumber: number, ayahNumber?: number) => void;
}

export const QuickJumpModal: React.FC<QuickJumpModalProps> = ({
  isOpen,
  surahs,
  onClose,
  onSelectVerse,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const verseHits = useMemo(() => {
    if (!query.trim()) return [];
    return searchCorpusVerses(surahs, query).slice(0, 8);
  }, [surahs, query]);

  const matchingSurahs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter(
      (s) =>
        s.nameTranslit.toLowerCase().includes(q) ||
        s.nameEnglish.toLowerCase().includes(q) ||
        s.nameArabic.includes(query.trim()) ||
        String(s.number) === q
    );
  }, [surahs, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F172A]/45 backdrop-blur-[2px] flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Quick Jump and Verse Search"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl bg-[#FBF9F4] border border-[#C5A059]/45 rounded-2xl shadow-scholarly-panel overflow-hidden">
        {/* Search Input Row */}
        <div className="p-4 bg-white border-b border-[#C5A059]/25 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#134E3C] shrink-0" aria-hidden="true" />
          <label htmlFor="quick-jump-input" className="sr-only">
            Jump to Surah, verse reference, or search text
          </label>
          <input
            ref={inputRef}
            id="quick-jump-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to Surah, verse (e.g. 2:255), Arabic or English keyword..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#0F172A] placeholder:text-[#707974] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Quick Jump"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#404944] hover:bg-[#F4EFE6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {verseHits.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#8C6B28] px-1">
                Matching Verses
              </p>
              {verseHits.map(({ surah, ayah }) => (
                <button
                  key={`${surah.number}:${ayah.number}`}
                  type="button"
                  onClick={() => {
                    onSelectVerse(surah.number, ayah.number);
                    onClose();
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-white border border-[#C5A059]/25 hover:bg-[#E6F0EB] transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#134E3C] tabular-nums">
                      {surah.nameTranslit} ({surah.number}:{ayah.number})
                    </span>
                    <span dir="rtl" lang="ar" className="font-arabic text-lg text-[#0F172A]">
                      {ayah.arabic.slice(0, 60)}
                      {ayah.arabic.length > 60 ? '…' : ''}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E293B] line-clamp-2">
                    {ayah.translations.sahih}
                  </p>
                </button>
              ))}
            </div>
          )}

          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#404944] px-1">
              {query.trim() ? 'Matching Surahs' : 'Chapters'}
            </p>
            {matchingSurahs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingSurahs.map((surah) => (
                  <button
                    key={surah.number}
                    type="button"
                    onClick={() => {
                      onSelectVerse(surah.number);
                      onClose();
                    }}
                    className="text-left p-3 rounded-xl bg-white border border-[#C5A059]/25 hover:bg-[#E6F0EB] transition-colors flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#134E3C] truncate">
                        <span className="tabular-nums">{surah.number}.</span> {surah.nameTranslit}
                      </p>
                      <p className="text-xs text-[#404944] truncate">{surah.nameEnglish}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span dir="rtl" lang="ar" className="font-arabic text-lg text-[#0F172A]">
                        {surah.nameArabic}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#134E3C]" aria-hidden="true" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              verseHits.length === 0 && (
                <p className="text-sm text-[#404944] px-1 py-4 text-center">
                  No chapters or verses matched &ldquo;{query}&rdquo;.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
