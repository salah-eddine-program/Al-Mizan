import React, { useMemo, useState } from 'react';
import { Bookmark, Download, ExternalLink, FileText, Trash2 } from 'lucide-react';
import { StudyNote, Surah } from '../types/quran';
import { exportStudyNotesMarkdown } from '../utils/portalLogic';

interface StudyNotesScreenProps {
  surahs: Surah[];
  bookmarks: string[];
  notes: Record<string, StudyNote>;
  onJumpToVerse: (surahNumber: number, ayahNumber: number) => void;
  onRemoveBookmark: (verseKey: string) => void;
  onSaveNote: (surahNumber: number, ayahNumber: number, text: string) => void;
  onNavigateIndex: () => void;
}

export const StudyNotesScreen: React.FC<StudyNotesScreenProps> = ({
  surahs,
  bookmarks,
  notes,
  onJumpToVerse,
  onRemoveBookmark,
  onSaveNote,
  onNavigateIndex,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'bookmarks' | 'notes'>('all');
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState('');

  const entries = useMemo(() => {
    const keys = Array.from(new Set([...bookmarks, ...Object.keys(notes)]));
    return keys
      .map((key) => {
        const [sStr, aStr] = key.split(':');
        const surahNumber = Number(sStr);
        const ayahNumber = Number(aStr);
        const surah = surahs.find((s) => s.number === surahNumber);
        const ayah = surah?.ayahs.find((a) => a.number === ayahNumber);
        if (!surah || !ayah) return null;
        return {
          key,
          surah,
          ayah,
          isBookmarked: bookmarks.includes(key),
          note: notes[key] ?? null,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .filter((item) => {
        if (filterMode === 'bookmarks') return item.isBookmarked;
        if (filterMode === 'notes') return Boolean(item.note);
        return true;
      });
  }, [bookmarks, notes, surahs, filterMode]);

  const handleExport = () => {
    const md = exportStudyNotesMarkdown(surahs, bookmarks, notes);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'al-mizan-study-notes.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-32 space-y-8">
      <section className="bg-[#F4EFE6] border border-[#C5A059]/30 rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold text-[#8C6B28] mb-2">
            Personal Scholarly Archive
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#134E3C] tracking-tight">
            Bookmarks &amp; Study Notes
          </h1>
          <p className="mt-2.5 text-base text-[#1E293B] max-w-[65ch] leading-relaxed">
            Your saved verses and personal commentary are stored locally in your browser and can be
            exported cleanly to Markdown at any time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            role="group"
            aria-label="Filter saved items"
            className="inline-flex p-1 rounded-lg bg-white border border-[#C5A059]/25"
          >
            {(
              [
                { id: 'all', label: 'All Saved' },
                { id: 'bookmarks', label: 'Bookmarks' },
                { id: 'notes', label: 'With Notes' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterMode(tab.id)}
                aria-pressed={filterMode === tab.id}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                  filterMode === tab.id
                    ? 'bg-[#134E3C] text-white'
                    : 'text-[#404944] hover:text-[#134E3C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleExport}
            disabled={entries.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#134E3C] hover:bg-[#0F382C] disabled:opacity-45 text-white text-xs font-semibold transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Export Markdown</span>
          </button>
        </div>
      </section>

      {entries.length > 0 ? (
        <div className="space-y-4">
          {entries.map((entry) => {
            const isEditing = editingKey === entry.key;
            return (
              <article
                key={entry.key}
                className="bg-white border border-[#C5A059]/25 rounded-2xl p-6 sm:p-8 shadow-manuscript space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-[#E6F0EB] text-[#134E3C] text-xs font-semibold tabular-nums">
                      {entry.key}
                    </span>
                    <h2 className="font-editorial text-lg font-semibold text-[#0F172A]">
                      {entry.surah.nameTranslit} — {entry.surah.nameEnglish}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onJumpToVerse(entry.surah.number, entry.ayah.number)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#E6F0EB] text-xs font-semibold text-[#134E3C] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open in Reader</span>
                    </button>

                    {entry.isBookmarked && (
                      <button
                        type="button"
                        onClick={() => onRemoveBookmark(entry.key)}
                        aria-label={`Remove bookmark ${entry.key}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#8C6B28] hover:bg-[#F4EFE6] transition-colors"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-[#C5A059]" aria-hidden="true" />
                        <span>Bookmarked</span>
                      </button>
                    )}
                  </div>
                </div>

                <p dir="rtl" lang="ar" className="font-arabic text-2xl sm:text-3xl leading-[2.3] text-[#0F172A] text-right">
                  {entry.ayah.arabic}
                </p>

                <p className="text-base text-[#1E293B] max-w-[65ch] leading-relaxed pt-3 border-t border-[#C5A059]/20">
                  {entry.ayah.translations.sahih}
                </p>

                <div className="pt-3 border-t border-[#C5A059]/20">
                  {isEditing ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        onSaveNote(entry.surah.number, entry.ayah.number, editDraft);
                        setEditingKey(null);
                      }}
                      className="space-y-3"
                    >
                      <label htmlFor={`edit-note-${entry.key}`} className="sr-only">
                        Edit study note for {entry.key}
                      </label>
                      <textarea
                        id={`edit-note-${entry.key}`}
                        rows={3}
                        value={editDraft}
                        onChange={(e) => setEditDraft(e.target.value)}
                        className="w-full rounded-xl bg-[#FBF9F4] border border-[#E2E8F0] p-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#134E3C]"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-[#134E3C] text-white text-xs font-semibold"
                        >
                          Save Reflection
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingKey(null)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#404944] hover:bg-[#F4EFE6]"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-1 max-w-[65ch]">
                        <p className="text-xs font-semibold text-[#8C6B28] flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Study Reflection</span>
                        </p>
                        {entry.note ? (
                          <p className="text-sm text-[#0F172A] leading-relaxed">
                            {entry.note.text}
                          </p>
                        ) : (
                          <p className="text-sm text-[#707974] italic">
                            No personal reflection written for this verse yet.
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingKey(entry.key);
                            setEditDraft(entry.note?.text ?? '');
                          }}
                          className="px-3 py-1.5 rounded-lg border border-[#C5A059]/40 text-xs font-semibold text-[#134E3C] hover:bg-[#E6F0EB] transition-colors"
                        >
                          {entry.note ? 'Edit Note' : 'Add Note'}
                        </button>
                        {entry.note && (
                          <button
                            type="button"
                            onClick={() => onSaveNote(entry.surah.number, entry.ayah.number, '')}
                            aria-label={`Delete study note for ${entry.key}`}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#ba1a1a] hover:bg-[#ffdad6]/50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Delete</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-[#C5A059]/25 rounded-3xl p-12 text-center space-y-4 shadow-manuscript">
          <p className="font-editorial text-2xl font-semibold text-[#134E3C]">
            Your study notebook is currently empty
          </p>
          <p className="text-sm text-[#404944] max-w-md mx-auto leading-relaxed">
            Bookmark any Ayah while reading or record commentary notes inside the Scholarly Companion
            drawer to build your personal study archive.
          </p>
          <button
            type="button"
            onClick={onNavigateIndex}
            className="px-5 py-2.5 rounded-lg bg-[#134E3C] hover:bg-[#0F382C] text-white text-sm font-semibold transition-colors"
          >
            Browse Surah Index
          </button>
        </div>
      )}
    </main>
  );
};
