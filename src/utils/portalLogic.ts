import { Ayah, LexiconRoot, RevelationPlace, StudyNote, Surah } from '../types/quran';

/**
 * Strips Arabic diacritical marks (tashkeel) and normalizes alef variants
 * so Arabic keyword queries match reliably regardless of vowel marks.
 */
export function normalizeArabic(input: string): string {
  return input
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}

export function makeVerseKey(surahNumber: number, ayahNumber: number): string {
  return `${surahNumber}:${ayahNumber}`;
}

export function filterSurahs(
  surahs: Surah[],
  query: string,
  revelationFilter: 'All' | RevelationPlace
): Surah[] {
  const q = query.trim().toLowerCase();
  const qNormArabic = normalizeArabic(query);

  return surahs.filter((surah) => {
    if (revelationFilter !== 'All' && surah.revelation !== revelationFilter) {
      return false;
    }
    if (!q) return true;

    const matchesEnglish =
      surah.nameTranslit.toLowerCase().includes(q) ||
      surah.nameEnglish.toLowerCase().includes(q) ||
      surah.themeSummary.toLowerCase().includes(q) ||
      String(surah.number) === q;

    const matchesArabic =
      qNormArabic.length > 0 && normalizeArabic(surah.nameArabic).includes(qNormArabic);

    return matchesEnglish || matchesArabic;
  });
}

export interface VerseSearchHit {
  surah: Surah;
  ayah: Ayah;
}

export function searchCorpusVerses(surahs: Surah[], query: string): VerseSearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const qNormArabic = normalizeArabic(query);

  const hits: VerseSearchHit[] = [];
  for (const surah of surahs) {
    for (const ayah of surah.ayahs) {
      const key = makeVerseKey(surah.number, ayah.number);
      const matchesText =
        key === q ||
        ayah.translations.sahih.toLowerCase().includes(q) ||
        ayah.translations.haleem.toLowerCase().includes(q) ||
        ayah.transliteration.toLowerCase().includes(q) ||
        (qNormArabic.length > 0 && normalizeArabic(ayah.arabic).includes(qNormArabic));

      if (matchesText) {
        hits.push({ surah, ayah });
      }
    }
  }
  return hits;
}

export function searchLexiconRoots(roots: LexiconRoot[], query: string): LexiconRoot[] {
  const q = query.trim().toLowerCase();
  if (!q) return roots;
  const qNormArabic = normalizeArabic(query).replace(/\s+/g, '');

  return roots.filter((root) => {
    const rootLettersCompact = normalizeArabic(root.rootArabic).replace(/\s+/g, '');
    return (
      root.rootTranslit.toLowerCase().includes(q) ||
      root.coreMeaning.toLowerCase().includes(q) ||
      root.semanticField.toLowerCase().includes(q) ||
      root.scholarlyNote.toLowerCase().includes(q) ||
      (qNormArabic.length > 0 && rootLettersCompact.includes(qNormArabic)) ||
      root.derivedForms.some(
        (f) =>
          f.translit.toLowerCase().includes(q) ||
          f.meaning.toLowerCase().includes(q) ||
          (qNormArabic.length > 0 && normalizeArabic(f.arabic).includes(qNormArabic))
      )
    );
  });
}

export function getNextAyahNumber(surah: Surah, currentAyahNumber: number): number | null {
  const idx = surah.ayahs.findIndex((a) => a.number === currentAyahNumber);
  if (idx === -1 || idx + 1 >= surah.ayahs.length) return null;
  return surah.ayahs[idx + 1].number;
}

export function getPrevAyahNumber(surah: Surah, currentAyahNumber: number): number | null {
  const idx = surah.ayahs.findIndex((a) => a.number === currentAyahNumber);
  if (idx <= 0) return null;
  return surah.ayahs[idx - 1].number;
}

export function formatSeconds(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function toggleBookmarkList(bookmarks: string[], verseKey: string): string[] {
  if (bookmarks.includes(verseKey)) {
    return bookmarks.filter((k) => k !== verseKey);
  }
  return [verseKey, ...bookmarks];
}

export function upsertStudyNote(
  notes: Record<string, StudyNote>,
  surahNumber: number,
  ayahNumber: number,
  text: string,
  nowIso: string = new Date().toISOString()
): Record<string, StudyNote> {
  const verseKey = makeVerseKey(surahNumber, ayahNumber);
  const trimmed = text.trim();
  if (!trimmed) {
    const next = { ...notes };
    delete next[verseKey];
    return next;
  }
  return {
    ...notes,
    [verseKey]: {
      verseKey,
      surahNumber,
      ayahNumber,
      text: trimmed,
      updatedAt: nowIso,
    },
  };
}

export function exportStudyNotesMarkdown(
  surahs: Surah[],
  bookmarks: string[],
  notes: Record<string, StudyNote>
): string {
  const allKeys = Array.from(new Set([...bookmarks, ...Object.keys(notes)]));
  if (allKeys.length === 0) {
    return '# Al-Mizan Study Notes\n\nNo saved bookmarks or annotations yet.\n';
  }

  const lines: string[] = ['# Al-Mizan — Quranic Study Notes & Bookmarks', ''];
  for (const key of allKeys) {
    const [sStr, aStr] = key.split(':');
    const sNum = Number(sStr);
    const aNum = Number(aStr);
    const surah = surahs.find((s) => s.number === sNum);
    const ayah = surah?.ayahs.find((a) => a.number === aNum);
    const note = notes[key];

    if (surah && ayah) {
      lines.push(`## ${surah.nameTranslit} (${key}) — ${surah.nameEnglish}`);
      lines.push('');
      lines.push(`> ${ayah.arabic}`);
      lines.push('');
      lines.push(ayah.translations.sahih);
      if (note?.text) {
        lines.push('');
        lines.push(`**Study Note:** ${note.text}`);
      }
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }
  return lines.join('\n');
}
