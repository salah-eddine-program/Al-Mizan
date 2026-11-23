import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, FileText, Layers, Trash2, X } from 'lucide-react';
import {
  Ayah,
  DrawerTab,
  LexiconRoot,
  StudyNote,
  Surah,
  TafsirSourceId,
} from '../types/quran';
import { makeVerseKey } from '../utils/portalLogic';

interface ScholarlyDrawerProps {
  surah: Surah;
  activeAyah: Ayah;
  activeTab: DrawerTab;
  tafsirSource: TafsirSourceId;
  selectedRoot: LexiconRoot | null;
  allRoots: LexiconRoot[];
  notes: Record<string, StudyNote>;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onChangeTab: (tab: DrawerTab) => void;
  onChangeTafsirSource: (src: TafsirSourceId) => void;
  onSelectRoot: (rootId: string) => void;
  onJumpToVerse: (surahNumber: number, ayahNumber: number) => void;
  onSaveNote: (surahNumber: number, ayahNumber: number, text: string) => void;
}

export const ScholarlyDrawer: React.FC<ScholarlyDrawerProps> = ({
  surah,
  activeAyah,
  activeTab,
  tafsirSource,
  selectedRoot,
  allRoots,
  notes,
  isOpenMobile,
  onCloseMobile,
  onChangeTab,
  onChangeTafsirSource,
  onSelectRoot,
  onJumpToVerse,
  onSaveNote,
}) => {
  const verseKey = makeVerseKey(surah.number, activeAyah.number);
  const existingNote = notes[verseKey]?.text ?? '';
  const [draftNote, setDraftNote] = useState(existingNote);
  const [saveFeedback, setSaveFeedback] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setDraftNote(notes[verseKey]?.text ?? '');
  }, [verseKey, notes]);

  useEffect(() => {
    setSaveFeedback(false);
  }, [verseKey]);

  // Roots present in the active verse
  const verseRootIds = Array.from(
    new Set(activeAyah.words.map((w) => w.rootId).filter((id): id is string => Boolean(id)))
  );
  const verseRoots = allRoots.filter((r) => verseRootIds.includes(r.id));
  const displayedRoot =
    selectedRoot && verseRootIds.includes(selectedRoot.id)
      ? selectedRoot
      : selectedRoot ?? verseRoots[0] ?? null;

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveNote(surah.number, activeAyah.number, draftNote);
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2000);
  };

  const drawerContent = (
    <div className="bg-white border border-[#C5A059]/25 rounded-2xl shadow-scholarly-panel flex flex-col max-h-full overflow-hidden">
      {/* Drawer Header */}
      <div className="px-5 pt-5 pb-4 border-b border-[#C5A059]/20">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <p className="text-xs font-semibold text-[#8C6B28]">
              Contextual Study · {surah.nameTranslit} {verseKey}
            </p>
            <h2 className="font-editorial text-lg font-semibold text-[#134E3C]">
              Scholarly Companion
            </h2>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Close Scholarly Drawer"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-[#404944] hover:bg-[#F4EFE6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Tabs */}
        <div
          role="tablist"
          aria-label="Scholarly Companion Tabs"
          className="grid grid-cols-3 gap-1 p-1 bg-[#F4EFE6] rounded-xl"
        >
          {(
            [
              { id: 'tafsir', label: 'Tafsir', icon: BookOpen },
              { id: 'lexicon', label: 'Lexicon', icon: Layers },
              { id: 'notes', label: 'Notes', icon: FileText },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onChangeTab(tab.id)}
                className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-white text-[#134E3C] shadow-sm'
                    : 'text-[#404944] hover:text-[#134E3C]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Body */}
      <div className="p-5 space-y-5 overflow-y-auto flex-1">
        {activeTab === 'tafsir' && (
          <div role="tabpanel" aria-label="Tafsir Commentary" className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-[#404944]">Exegesis Source</span>
              <div className="inline-flex rounded-lg bg-[#F4EFE6] p-0.5">
                <button
                  type="button"
                  onClick={() => onChangeTafsirSource('ibn_kathir')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                    tafsirSource === 'ibn_kathir'
                      ? 'bg-[#134E3C] text-white'
                      : 'text-[#404944] hover:text-[#134E3C]'
                  }`}
                >
                  Ibn Kathir
                </button>
                <button
                  type="button"
                  onClick={() => onChangeTafsirSource('jalalayn')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                    tafsirSource === 'jalalayn'
                      ? 'bg-[#134E3C] text-white'
                      : 'text-[#404944] hover:text-[#134E3C]'
                  }`}
                >
                  Al-Jalalayn
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/20">
              <p dir="rtl" lang="ar" className="font-arabic text-xl leading-[2.2] text-[#0F172A] text-right mb-2">
                {activeAyah.arabic}
              </p>
              <p className="text-xs text-[#404944] italic">{activeAyah.transliteration}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-editorial text-base font-semibold text-[#134E3C]">
                {tafsirSource === 'ibn_kathir'
                  ? 'Tafsir Ibn Kathir — Synthesis'
                  : 'Tafsir al-Jalalayn — Gloss'}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#1E293B] max-w-[65ch]">
                {activeAyah.tafsir[tafsirSource]}
              </p>
              {activeAyah.tafsir.contextNote && (
                <div className="pt-3 border-t border-[#C5A059]/20 text-xs text-[#8C6B28] leading-relaxed">
                  <strong>Contextual Annotation:</strong> {activeAyah.tafsir.contextNote}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'lexicon' && (
          <div role="tabpanel" aria-label="Root Word Lexicon" className="space-y-4">
            {verseRoots.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-[#404944] mb-2">
                  Roots in Ayah {verseKey}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {verseRoots.map((r) => {
                    const isCurrent = displayedRoot?.id === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => onSelectRoot(r.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                          isCurrent
                            ? 'bg-[#134E3C] text-white border-[#134E3C]'
                            : 'bg-[#FBF9F4] text-[#134E3C] border-[#C5A059]/35 hover:bg-[#E6F0EB]'
                        }`}
                      >
                        <span className="font-arabic text-base leading-none">{r.rootArabic}</span>
                        <span>({r.rootTranslit})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {displayedRoot ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C5A059]/25">
                  <div className="flex items-baseline justify-between gap-3">
                    <span dir="rtl" lang="ar" className="font-arabic text-3xl text-[#134E3C]">
                      {displayedRoot.rootArabic}
                    </span>
                    <span className="text-xs font-semibold text-[#8C6B28] tabular-nums">
                      {displayedRoot.totalOccurrences} occurrences
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A] mt-1">
                    Root: {displayedRoot.rootTranslit} · {displayedRoot.semanticField}
                  </p>
                  <p className="text-sm text-[#1E293B] mt-2 leading-relaxed">
                    {displayedRoot.coreMeaning}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#404944] mb-1.5">
                    Classical Lexicography
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1E293B]">
                    {displayedRoot.scholarlyNote}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#404944] mb-2">
                    Key Morphological Forms
                  </h3>
                  <div className="space-y-2">
                    {displayedRoot.derivedForms.map((form) => (
                      <div
                        key={form.translit}
                        className="p-3 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/20"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-[#134E3C]">
                            {form.translit}
                          </span>
                          <span dir="rtl" lang="ar" className="font-arabic text-xl text-[#0F172A]">
                            {form.arabic}
                          </span>
                        </div>
                        <p className="text-xs text-[#8C6B28] mt-0.5">{form.formLabel}</p>
                        <p className="text-xs text-[#1E293B] mt-1">{form.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#404944] mb-2">
                    Concordance in Corpus
                  </h3>
                  <div className="space-y-1.5">
                    {displayedRoot.references.map((ref) => (
                      <button
                        key={`${ref.surahNumber}:${ref.ayahNumber}`}
                        type="button"
                        onClick={() => onJumpToVerse(ref.surahNumber, ref.ayahNumber)}
                        className="w-full text-left p-2.5 rounded-lg bg-white border border-[#C5A059]/25 hover:bg-[#E6F0EB] transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#134E3C] tabular-nums">
                            Surah {ref.surahNumber}:{ref.ayahNumber}
                          </p>
                          <p className="text-xs text-[#404944] truncate">{ref.phraseEnglish}</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#134E3C] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/20 text-sm text-[#404944]">
                Click any highlighted root word inside an Ayah card—or explore the full{' '}
                <strong className="text-[#134E3C]">Root Lexicon</strong> tab—to inspect classical Arabic morphology.
              </div>
            )}
          </div>
        )}

        {activeTab === 'notes' && (
          <div role="tabpanel" aria-label="Personal Study Notes" className="space-y-4">
            <form onSubmit={handleNoteSubmit} className="space-y-3">
              <label
                htmlFor="scholarly-note-input"
                className="block text-xs font-semibold text-[#134E3C]"
              >
                Personal Reflection for Ayah {verseKey}
              </label>
              <textarea
                id="scholarly-note-input"
                rows={5}
                value={draftNote}
                onChange={(e) => setDraftNote(e.target.value)}
                placeholder="Record linguistic observations, cross-references, or contemplative reflections..."
                className="w-full rounded-xl bg-white border border-[#E2E8F0] p-3 text-sm text-[#0F172A] placeholder:text-[#707974] focus:outline-none focus:border-[#134E3C] focus:ring-2 focus:ring-[#134E3C]/15"
              />
              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#134E3C] hover:bg-[#0F382C] text-white text-xs font-semibold transition-colors"
                >
                  Save Note
                </button>
                {existingNote && (
                  <button
                    type="button"
                    onClick={() => {
                      setDraftNote('');
                      onSaveNote(surah.number, activeAyah.number, '');
                    }}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-[#ba1a1a] hover:bg-[#ffdad6]/50 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Clear</span>
                  </button>
                )}
              </div>
              {saveFeedback && (
                <p className="text-xs font-semibold text-[#134E3C]">
                  Saved to your local study notebook.
                </p>
              )}
            </form>

            {/* Other notes in current Surah */}
            <div className="pt-4 border-t border-[#C5A059]/20 space-y-2">
              <h3 className="text-xs font-semibold text-[#404944]">
                Notes in {surah.nameTranslit}
              </h3>
              {surah.ayahs
                .filter((a) => Boolean(notes[makeVerseKey(surah.number, a.number)]))
                .map((a) => {
                  const k = makeVerseKey(surah.number, a.number);
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => onJumpToVerse(surah.number, a.number)}
                      className="w-full text-left p-3 rounded-xl bg-[#FBF9F4] border border-[#C5A059]/20 hover:bg-[#E6F0EB] transition-colors"
                    >
                      <p className="text-xs font-semibold text-[#134E3C] tabular-nums">{k}</p>
                      <p className="text-xs text-[#1E293B] mt-1 line-clamp-2">
                        {notes[k].text}
                      </p>
                    </button>
                  );
                })}
              {surah.ayahs.every((a) => !notes[makeVerseKey(surah.number, a.number)]) && (
                <p className="text-xs text-[#707974]">
                  No notes recorded in this chapter yet.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <aside
        aria-label="Scholarly Companion Drawer"
        className="lg:col-span-4 lg:sticky lg:top-6 lg:max-h-[calc(100vh-7.5rem)] flex flex-col"
      >
        {drawerContent}
      </aside>
    );
  }

  if (!isOpenMobile) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-[2px] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Scholarly Companion"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCloseMobile();
      }}
    >
      <div className="w-full sm:max-w-lg max-h-[85vh] flex flex-col">
        {drawerContent}
      </div>
    </div>
  );
};
