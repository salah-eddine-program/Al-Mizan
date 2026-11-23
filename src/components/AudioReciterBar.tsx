import React from 'react';
import { Pause, Play, Repeat, SkipBack, SkipForward } from 'lucide-react';
import { Ayah, Reciter, Surah } from '../types/quran';
import { formatSeconds, makeVerseKey } from '../utils/portalLogic';

interface AudioReciterBarProps {
  surah: Surah;
  ayah: Ayah;
  reciter: Reciter;
  isPlaying: boolean;
  elapsedSeconds: number;
  totalSeconds: number;
  playbackSpeed: number;
  autoAdvance: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  onTogglePlay: () => void;
  onPrevAyah: () => void;
  onNextAyah: () => void;
  onSeekRatio: (ratio: number) => void;
  onCycleSpeed: () => void;
  onToggleAutoAdvance: () => void;
  onJumpToActiveAyah: () => void;
}

const WAVEFORM_BAR_HEIGHTS = [
  32, 54, 42, 78, 64, 48, 88, 72, 52, 92, 66, 44, 74, 86, 58, 40,
  70, 90, 62, 46, 80, 68, 50, 84, 60, 42, 76, 62, 48, 72, 54, 38,
];

export const AudioReciterBar: React.FC<AudioReciterBarProps> = ({
  surah,
  ayah,
  reciter,
  isPlaying,
  elapsedSeconds,
  totalSeconds,
  playbackSpeed,
  autoAdvance,
  hasPrev,
  hasNext,
  onTogglePlay,
  onPrevAyah,
  onNextAyah,
  onSeekRatio,
  onCycleSpeed,
  onToggleAutoAdvance,
  onJumpToActiveAyah,
}) => {
  const progressRatio = totalSeconds > 0 ? Math.min(1, elapsedSeconds / totalSeconds) : 0;
  const verseKey = makeVerseKey(surah.number, ayah.number);

  const handleScrub = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onSeekRatio(ratio);
  };

  return (
    <div
      role="region"
      aria-label="Quran Audio Reciter Bar"
      className="fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F4]/95 backdrop-blur-md border-t border-[#C5A059]/40 shadow-[0_-4px_20px_rgba(19,78,60,0.06)]"
    >
      {/* Mobile ultra-compact progress ribbon at top of bar */}
      <div className="md:hidden h-1 w-full bg-[#134E3C]/15">
        <div
          className="h-full bg-[#C5A059] transition-all duration-150"
          style={{ width: `${progressRatio * 100}%` }}
        />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 py-2 md:py-3 flex items-center justify-between gap-4">
        {/* Track Identity */}
        <button
          type="button"
          onClick={onJumpToActiveAyah}
          className="text-left min-w-0 flex-1 md:flex-none md:w-64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C] rounded-md"
        >
          <p className="text-sm font-editorial font-semibold text-[#134E3C] truncate">
            {surah.nameTranslit} · <span className="tabular-nums">{verseKey}</span>
          </p>
          <p className="text-xs text-[#404944] truncate">
            {reciter.name}
          </p>
        </button>

        {/* Transport Controls + Waveform Scrubber */}
        <div className="flex items-center gap-3 md:flex-1 md:max-w-xl">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onPrevAyah}
              disabled={!hasPrev}
              aria-label="Previous Ayah"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#134E3C] hover:bg-[#E6F0EB] disabled:opacity-35 transition-colors"
            >
              <SkipBack className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onTogglePlay}
              aria-label={isPlaying ? `Pause recitation of ${verseKey}` : `Play recitation of ${verseKey}`}
              data-testid="reciter-play-toggle"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#134E3C] hover:bg-[#0F382C] text-white transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={onNextAyah}
              disabled={!hasNext}
              aria-label="Next Ayah"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#134E3C] hover:bg-[#E6F0EB] disabled:opacity-35 transition-colors"
            >
              <SkipForward className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Waveform Scrubber */}
          <div className="hidden md:flex items-center gap-3 flex-1 min-w-0">
            <span className="text-xs font-semibold text-[#404944] tabular-nums w-9 text-right">
              {formatSeconds(elapsedSeconds)}
            </span>

            <button
              type="button"
              onClick={handleScrub}
              aria-label="Seek recitation progress"
              className="flex-1 h-8 flex items-center gap-[3px] px-1 rounded-md hover:bg-[#E6F0EB]/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134E3C]"
            >
              {WAVEFORM_BAR_HEIGHTS.map((heightPct, idx) => {
                const barRatio = (idx + 0.5) / WAVEFORM_BAR_HEIGHTS.length;
                const isElapsed = barRatio <= progressRatio;
                return (
                  <span
                    key={idx}
                    aria-hidden="true"
                    className={`flex-1 rounded-full transition-colors ${
                      isElapsed ? 'bg-[#C5A059]' : 'bg-[#134E3C]/22'
                    }`}
                    style={{ height: `${Math.max(22, heightPct * 0.28)}px` }}
                  />
                );
              })}
            </button>

            <span className="text-xs font-semibold text-[#404944] tabular-nums w-9">
              {formatSeconds(totalSeconds)}
            </span>
          </div>
        </div>

        {/* Speed & Auto-Advance Controls */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onCycleSpeed}
            aria-label={`Change playback speed, currently ${playbackSpeed}x`}
            className="px-2.5 py-1.5 rounded-lg border border-[#C5A059]/35 bg-white text-xs font-semibold text-[#134E3C] hover:bg-[#E6F0EB] transition-colors tabular-nums whitespace-nowrap"
          >
            {playbackSpeed}x
          </button>

          <button
            type="button"
            onClick={onToggleAutoAdvance}
            aria-pressed={autoAdvance}
            aria-label="Toggle auto-advance to next Ayah"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-colors whitespace-nowrap ${
              autoAdvance
                ? 'bg-[#E6F0EB] text-[#134E3C] border-[#134E3C]/35'
                : 'bg-white text-[#404944] border-[#C5A059]/35 hover:bg-[#F4EFE6]'
            }`}
          >
            <Repeat className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden lg:inline">Auto-Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
