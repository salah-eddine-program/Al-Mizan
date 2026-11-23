import React, { useState } from 'react';
import {
  Bookmark,
  BookOpen,
  Check,
  Copy,
  Pause,
  Play,
  Volume2,
} from 'lucide-react';
import { Ayah, TranslationId, WordToken } from '../types/quran';
import { makeVerseKey } from '../utils/portalLogic';

interface AyahCardProps {
  surahNumber: number;
  surahName: string;
  ayah: Ayah;
  translationId: TranslationId;
  showTransliteration: boolean;
  arabicFocusMode: boolean;
  arabicScale: 'standard' | 'large';
  isReciting: boolean;
  isPlaying: boolean;
  isSelectedForStudy: boolean;
  isBookmarked: boolean;
  hasNote: boolean;
  selectedRootId: string | null;
  onPlayAyah: (ayahNumber: number) => void;
  onSelectForTafsir: (ayahNumber: number) => void;
  onSelectWordRoot: (ayahNumber: number, token: WordToken) => void;
  onToggleBookmark: (verseKey: string) => void;
}

export const AyahCard: React.FC<AyahCardProps> = ({
  surahNumber,
  surahName,
  ayah,
  translationId,
  showTransliteration,
  arabicFocusMode,
  arabicScale,
  isReciting,
  isPlaying,
  isSelectedForStudy,
  isBookmarked,
  hasNote,
  selectedRootId,
  onPlayAyah,
  onSelectForTafsir,
  onSelectWordRoot,
  onToggleBookmark,
}) => {
  const [copied, setCopied] = useState(false);
  const verseKey = makeVerseKey(surahNumber, ayah.number);

  const handleCopy = async () => {
    const payload = `${ayah.arabic}\n\n"${ayah.translations[translationId]}" — Quran ${verseKey} (${surahName})`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const surfaceClass = isReciting
    ? 'bg-[#E6F0EB] border-[#134E3C]/40'
    : isSelectedForStudy
    ? 'bg-white border-[#C5A059]/70'
    : 'bg-white border-[#C5A059]/25 hover:border-[#C5A059]/50';

  const arabicTextSizeClass =
    arabicScale === 'large'
      ? 'text-[34px] sm:text-[40px] leading-[2.5]'
      : 'text-[28px] sm:text-[32px] leading-[2.35]';

  return (
    <article
      id={`ayah-${verseKey}`}
      data-testid={`ayah-card-${verseKey}`}
      className={`rounded-2xl border shadow-manuscript px-5 py-6 sm:px-8 sm:py-8 transition-colors duration-200 ${surfaceClass}`}
    >
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-semibold tabular-nums ${
              isReciting
                ? 'bg-[#134E3C] text-white'
                : 'bg-[#E6F0EB] text-[#134E3C]'
            }`}
          >
            {verseKey}
          </span>

          {isReciting && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#134E3C]">
              <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isPlaying ? 'Now Reciting' : 'Reciter Paused'}</span>
            </span>
          )}

          {!isReciting && isSelectedForStudy && (
            <span className="text-xs font-semibold text-[#8C6B28]">
              Active in Drawer
            </span>
          )}

          {hasNote && (
            <span className="text-xs font-semibold text-[#404944]">
              · Note Saved
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onPlayAyah(ayah.number)}
            aria-label={
              isReciting && isPlaying
                ? `Pause recitation of ${verseKey}`
                : `Play recitation of ${verseKey}`
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] ${
              isReciting && isPlaying
                ? 'bg-[#134E3C] text-white'
                : 'bg-[#F4EFE6] text-[#134E3C] hover:bg-[#E6F0EB]'
            }`}
          >
            {isReciting && isPlaying ? (
              <Pause className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <Play className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>{isReciting && isPlaying ? 'Pause' : 'Recite'}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectForTafsir(ayah.number)}
            aria-label={`Open Tafsir commentary for ${verseKey}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#C5A059]/40 bg-[#FBF9F4] text-[#1E293B] hover:bg-[#E6F0EB] hover:text-[#134E3C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C]"
          >
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tafsir</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy Ayah ${verseKey}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#404944] hover:text-[#134E3C] hover:bg-[#F4EFE6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C]"
            title="Copy Arabic and translation"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#134E3C]" aria-hidden="true" />
            ) : (
              <Copy className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onToggleBookmark(verseKey)}
            aria-pressed={isBookmarked}
            aria-label={
              isBookmarked ? `Remove bookmark for ${verseKey}` : `Bookmark Ayah ${verseKey}`
            }
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] ${
              isBookmarked
                ? 'bg-[#C5A059]/20 text-[#8C6B28]'
                : 'text-[#404944] hover:text-[#8C6B28] hover:bg-[#F4EFE6]'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Bookmark verse'}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? 'fill-[#C5A059] text-[#8C6B28]' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Central Sacred Arabic Script Zone */}
      <div dir="rtl" lang="ar" className="text-right mb-6">
        <p className={`font-arabic text-[#0F172A] ${arabicTextSizeClass}`}>
          {ayah.arabic}{' '}
          <span
            className="inline-flex items-center justify-center text-[0.55em] font-sans font-semibold text-[#8C6B28] border border-[#C5A059]/50 rounded-full w-8 h-8 align-middle mx-1 tabular-nums"
            aria-hidden="true"
          >
            {ayah.number}
          </span>
        </p>

        {/* Interactive Root Word Chips Row (discrete clickable tokens for Lexicon lookup) */}
        {ayah.words.some((w) => Boolean(w.rootId)) && (
          <div className="mt-3 flex flex-wrap items-center gap-2 justify-start">
            <span className="text-[11px] font-sans font-semibold text-[#707974] ml-1" dir="ltr">
              Root Study:
            </span>
            {ayah.words
              .filter((w) => Boolean(w.rootId))
              .map((token, idx) => {
                const isRootActive = selectedRootId === token.rootId && isSelectedForStudy;
                return (
                  <button
                    key={`${verseKey}-${token.arabic}-${idx}`}
                    type="button"
                    onClick={() => onSelectWordRoot(ayah.number, token)}
                    aria-label={`Inspect root lexicon for ${token.transliteration} (${token.gloss})`}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] ${
                      isRootActive
                        ? 'bg-[#134E3C] text-white border-[#134E3C]'
                        : 'bg-[#FBF9F4] text-[#134E3C] border-[#C5A059]/35 hover:bg-[#E6F0EB]'
                    }`}
                  >
                    <span className="font-arabic text-base leading-none">{token.arabic}</span>
                    <span className="font-sans text-[11px] opacity-85" dir="ltr">
                      {token.gloss}
                    </span>
                  </button>
                );
              })}
          </div>
        )}
      </div>

      {/* Fine Gold Separator & Translation */}
      {!arabicFocusMode && (
        <div className="pt-5 border-t border-[#C5A059]/25">
          {showTransliteration && (
            <p className="text-sm italic text-[#404944] mb-2 max-w-[65ch]">
              {ayah.transliteration}
            </p>
          )}
          <p className="text-[17px] leading-[1.7] text-[#1E293B] max-w-[65ch]">
            {ayah.translations[translationId]}
          </p>
          {ayah.tafsir.contextNote && (
            <p className="mt-3 text-xs font-medium text-[#8C6B28]">
              Scholarly Note · {ayah.tafsir.contextNote}
            </p>
          )}
        </div>
      )}
    </article>
  );
};
