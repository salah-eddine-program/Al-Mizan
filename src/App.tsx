import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AudioReciterBar } from './components/AudioReciterBar';
import { Header } from './components/Header';
import { LexiconScreen } from './components/LexiconScreen';
import { QuickJumpModal } from './components/QuickJumpModal';
import { ReaderScreen } from './components/ReaderScreen';
import { StudyNotesScreen } from './components/StudyNotesScreen';
import { SurahIndexScreen } from './components/SurahIndexScreen';
import {
  LEXICON_ROOTS,
  RECITERS,
  SURAHS,
  THEMATIC_PATHS,
  TRANSLATION_EDITIONS,
} from './data/quranData';
import {
  DrawerTab,
  PortalScreen,
  StudyNote,
  TafsirSourceId,
  TranslationId,
  WordToken,
} from './types/quran';
import {
  getNextAyahNumber,
  getPrevAyahNumber,
  makeVerseKey,
  toggleBookmarkList,
  upsertStudyNote,
} from './utils/portalLogic';

const STORAGE_BOOKMARKS_KEY = 'al_mizan_bookmarks_v1';
const STORAGE_NOTES_KEY = 'al_mizan_notes_v1';
const STORAGE_LAST_READ_KEY = 'al_mizan_last_read_v1';

const SPEED_OPTIONS = [0.75, 1, 1.25];

function loadJsonStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const initialLastRead = loadJsonStorage<{ surah: number; ayah: number }>(
    STORAGE_LAST_READ_KEY,
    { surah: 1, ayah: 1 }
  );

  const [activeScreen, setActiveScreen] = useState<PortalScreen>('reader');
  const [currentSurahNumber, setCurrentSurahNumber] = useState<number>(initialLastRead.surah);
  const [activeStudyAyahNumber, setActiveStudyAyahNumber] = useState<number>(
    initialLastRead.ayah
  );

  // Reading preferences
  const [translationId, setTranslationId] = useState<TranslationId>('sahih');
  const [tafsirSource, setTafsirSource] = useState<TafsirSourceId>('ibn_kathir');
  const [reciterId, setReciterId] = useState<string>(RECITERS[0].id);
  const [showTransliteration, setShowTransliteration] = useState<boolean>(false);
  const [arabicFocusMode, setArabicFocusMode] = useState<boolean>(false);
  const [arabicScale, setArabicScale] = useState<'standard' | 'large'>('standard');

  // Contextual Scholarly Drawer state
  const [drawerTab, setDrawerTab] = useState<DrawerTab>('tafsir');
  const [selectedRootId, setSelectedRootId] = useState<string | null>('r-h-m');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  // Quick Jump modal
  const [quickJumpOpen, setQuickJumpOpen] = useState<boolean>(false);

  // Persistent Bookmarks & Study Notes
  const [bookmarks, setBookmarks] = useState<string[]>(() =>
    loadJsonStorage<string[]>(STORAGE_BOOKMARKS_KEY, ['1:1', '2:255'])
  );
  const [notes, setNotes] = useState<Record<string, StudyNote>>(() =>
    loadJsonStorage<Record<string, StudyNote>>(STORAGE_NOTES_KEY, {
      '1:5': {
        verseKey: '1:5',
        surahNumber: 1,
        ayahNumber: 5,
        text: 'Grammatical shift from third-person praise to direct address ("Iyyaka") marks the pivot of Al-Fatihah.',
        updatedAt: '2026-11-23T09:00:00Z',
      },
    })
  );

  // Audio Recitation Engine State
  const [recitingSurahNumber, setRecitingSurahNumber] = useState<number>(initialLastRead.surah);
  const [recitingAyahNumber, setRecitingAyahNumber] = useState<number>(initialLastRead.ayah);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    } catch {
      // Ignore storage quota errors
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes));
    } catch {
      // Ignore storage quota errors
    }
  }, [notes]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_LAST_READ_KEY,
        JSON.stringify({ surah: currentSurahNumber, ayah: activeStudyAyahNumber })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [currentSurahNumber, activeStudyAyahNumber]);

  const currentSurah = useMemo(
    () => SURAHS.find((s) => s.number === currentSurahNumber) ?? SURAHS[0],
    [currentSurahNumber]
  );

  const recitingSurah = useMemo(
    () => SURAHS.find((s) => s.number === recitingSurahNumber) ?? SURAHS[0],
    [recitingSurahNumber]
  );

  const recitingAyah = useMemo(
    () =>
      recitingSurah.ayahs.find((a) => a.number === recitingAyahNumber) ??
      recitingSurah.ayahs[0],
    [recitingSurah, recitingAyahNumber]
  );

  const reciter = useMemo(
    () => RECITERS.find((r) => r.id === reciterId) ?? RECITERS[0],
    [reciterId]
  );

  const totalAyahSeconds = useMemo(
    () => Math.max(2, Math.round(recitingAyah.durationSeconds * reciter.rateMultiplier)),
    [recitingAyah.durationSeconds, reciter.rateMultiplier]
  );

  // Subtle acoustic cadence chime when beginning recitation of a verse (optional Web Audio)
  const playSubtleCadenceTone = useCallback(() => {
    try {
      const AudioContextCtor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextCtor) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextCtor();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(293.66, ctx.currentTime); // Gentle D4
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.48);
    } catch {
      // Headless browsers or blocked autoplay gracefully ignore Web Audio
    }
  }, []);

  // Playback progress loop
  useEffect(() => {
    if (!isPlaying) return;
    const tickMs = 200;
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const nextElapsed = prev + (tickMs / 1000) * playbackSpeed;
        if (nextElapsed >= totalAyahSeconds) {
          const nextNum = getNextAyahNumber(recitingSurah, recitingAyah.number);
          if (autoAdvance && nextNum !== null) {
            setRecitingAyahNumber(nextNum);
            setActiveStudyAyahNumber(nextNum);
            playSubtleCadenceTone();
            return 0;
          }
          setIsPlaying(false);
          return totalAyahSeconds;
        }
        return nextElapsed;
      });
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [
    isPlaying,
    playbackSpeed,
    totalAyahSeconds,
    autoAdvance,
    recitingSurah,
    recitingAyah.number,
    playSubtleCadenceTone,
  ]);

  const handleOpenSurahAndVerse = useCallback(
    (surahNumber: number, ayahNumber?: number, rootId?: string) => {
      const targetSurah = SURAHS.find((s) => s.number === surahNumber) ?? SURAHS[0];
      const targetAyah =
        (ayahNumber && targetSurah.ayahs.find((a) => a.number === ayahNumber)?.number) ||
        targetSurah.ayahs[0].number;

      setCurrentSurahNumber(targetSurah.number);
      setActiveStudyAyahNumber(targetAyah);
      setActiveScreen('reader');
      if (rootId) {
        setSelectedRootId(rootId);
        setDrawerTab('lexicon');
      }

      if (!isPlaying) {
        setRecitingSurahNumber(targetSurah.number);
        setRecitingAyahNumber(targetAyah);
        setElapsedSeconds(0);
      }

      window.setTimeout(() => {
        const el = document.getElementById(`ayah-${makeVerseKey(targetSurah.number, targetAyah)}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
    },
    [isPlaying]
  );

  const handlePlayAyah = (surahNumber: number, ayahNumber: number) => {
    if (
      recitingSurahNumber === surahNumber &&
      recitingAyahNumber === ayahNumber &&
      isPlaying
    ) {
      setIsPlaying(false);
      return;
    }
    setRecitingSurahNumber(surahNumber);
    setRecitingAyahNumber(ayahNumber);
    setActiveStudyAyahNumber(ayahNumber);
    setElapsedSeconds(0);
    setIsPlaying(true);
    playSubtleCadenceTone();
  };

  const handleSelectForTafsir = (ayahNumber: number) => {
    setActiveStudyAyahNumber(ayahNumber);
    setDrawerTab('tafsir');
    if (window.innerWidth < 1024) {
      setMobileDrawerOpen(true);
    }
  };

  const handleSelectWordRoot = (ayahNumber: number, token: WordToken) => {
    setActiveStudyAyahNumber(ayahNumber);
    if (token.rootId) {
      setSelectedRootId(token.rootId);
    }
    setDrawerTab('lexicon');
    if (window.innerWidth < 1024) {
      setMobileDrawerOpen(true);
    }
  };

  const handleToggleBookmark = (verseKey: string) => {
    setBookmarks((prev) => toggleBookmarkList(prev, verseKey));
  };

  const handleSaveNote = (surahNumber: number, ayahNumber: number, text: string) => {
    setNotes((prev) => upsertStudyNote(prev, surahNumber, ayahNumber, text));
  };

  const prevReciteAyah = getPrevAyahNumber(recitingSurah, recitingAyah.number);
  const nextReciteAyah = getNextAyahNumber(recitingSurah, recitingAyah.number);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F172A] flex flex-col">
      <Header
        activeScreen={activeScreen}
        onNavigate={setActiveScreen}
        onOpenQuickJump={() => setQuickJumpOpen(true)}
      />

      <div className="flex-1">
        {activeScreen === 'reader' && (
          <ReaderScreen
            surahs={SURAHS}
            currentSurah={currentSurah}
            activeStudyAyahNumber={activeStudyAyahNumber}
            recitingSurahNumber={recitingSurahNumber}
            recitingAyahNumber={recitingAyahNumber}
            isPlaying={isPlaying}
            translationId={translationId}
            tafsirSource={tafsirSource}
            reciter={reciter}
            reciters={RECITERS}
            translationEditions={TRANSLATION_EDITIONS}
            showTransliteration={showTransliteration}
            arabicFocusMode={arabicFocusMode}
            arabicScale={arabicScale}
            drawerTab={drawerTab}
            selectedRootId={selectedRootId}
            allRoots={LEXICON_ROOTS}
            bookmarks={bookmarks}
            notes={notes}
            mobileDrawerOpen={mobileDrawerOpen}
            onSelectSurah={(num, ayahNum) => handleOpenSurahAndVerse(num, ayahNum)}
            onChangeTranslation={setTranslationId}
            onChangeReciter={setReciterId}
            onToggleTransliteration={() => setShowTransliteration((v) => !v)}
            onToggleArabicFocus={() => setArabicFocusMode((v) => !v)}
            onToggleArabicScale={() =>
              setArabicScale((s) => (s === 'standard' ? 'large' : 'standard'))
            }
            onPlayAyah={handlePlayAyah}
            onSelectForTafsir={handleSelectForTafsir}
            onSelectWordRoot={handleSelectWordRoot}
            onToggleBookmark={handleToggleBookmark}
            onChangeDrawerTab={setDrawerTab}
            onChangeTafsirSource={setTafsirSource}
            onSelectRoot={(id) => {
              setSelectedRootId(id);
              setDrawerTab('lexicon');
            }}
            onSaveNote={handleSaveNote}
            onSetMobileDrawerOpen={setMobileDrawerOpen}
          />
        )}

        {activeScreen === 'index' && (
          <SurahIndexScreen
            surahs={SURAHS}
            thematicPaths={THEMATIC_PATHS}
            lastReadSurahNumber={currentSurahNumber}
            lastReadAyahNumber={activeStudyAyahNumber}
            onOpenSurah={(num, ayahNum) => handleOpenSurahAndVerse(num, ayahNum)}
          />
        )}

        {activeScreen === 'lexicon' && (
          <LexiconScreen
            roots={LEXICON_ROOTS}
            onJumpToVerse={(sNum, aNum, rId) => handleOpenSurahAndVerse(sNum, aNum, rId)}
          />
        )}

        {activeScreen === 'notes' && (
          <StudyNotesScreen
            surahs={SURAHS}
            bookmarks={bookmarks}
            notes={notes}
            onJumpToVerse={(sNum, aNum) => handleOpenSurahAndVerse(sNum, aNum)}
            onRemoveBookmark={handleToggleBookmark}
            onSaveNote={handleSaveNote}
            onNavigateIndex={() => setActiveScreen('index')}
          />
        )}
      </div>

      <AudioReciterBar
        surah={recitingSurah}
        ayah={recitingAyah}
        reciter={reciter}
        isPlaying={isPlaying}
        elapsedSeconds={elapsedSeconds}
        totalSeconds={totalAyahSeconds}
        playbackSpeed={playbackSpeed}
        autoAdvance={autoAdvance}
        hasPrev={prevReciteAyah !== null}
        hasNext={nextReciteAyah !== null}
        onTogglePlay={() => {
          if (!isPlaying) {
            if (elapsedSeconds >= totalAyahSeconds) setElapsedSeconds(0);
            playSubtleCadenceTone();
          }
          setIsPlaying((p) => !p);
        }}
        onPrevAyah={() => {
          if (prevReciteAyah !== null) {
            setRecitingAyahNumber(prevReciteAyah);
            setActiveStudyAyahNumber(prevReciteAyah);
            setElapsedSeconds(0);
            if (isPlaying) playSubtleCadenceTone();
          }
        }}
        onNextAyah={() => {
          if (nextReciteAyah !== null) {
            setRecitingAyahNumber(nextReciteAyah);
            setActiveStudyAyahNumber(nextReciteAyah);
            setElapsedSeconds(0);
            if (isPlaying) playSubtleCadenceTone();
          }
        }}
        onSeekRatio={(ratio) => setElapsedSeconds(ratio * totalAyahSeconds)}
        onCycleSpeed={() => {
          const idx = SPEED_OPTIONS.indexOf(playbackSpeed);
          setPlaybackSpeed(SPEED_OPTIONS[(idx + 1) % SPEED_OPTIONS.length]);
        }}
        onToggleAutoAdvance={() => setAutoAdvance((a) => !a)}
        onJumpToActiveAyah={() =>
          handleOpenSurahAndVerse(recitingSurah.number, recitingAyah.number)
        }
      />

      <QuickJumpModal
        isOpen={quickJumpOpen}
        surahs={SURAHS}
        onClose={() => setQuickJumpOpen(false)}
        onSelectVerse={(sNum, aNum) => handleOpenSurahAndVerse(sNum, aNum)}
      />
    </div>
  );
}
