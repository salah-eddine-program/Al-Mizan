import test from 'node:test';
import assert from 'node:assert/strict';
import { LEXICON_ROOTS, SURAHS } from '../data/quranData';
import {
  exportStudyNotesMarkdown,
  filterSurahs,
  formatSeconds,
  getNextAyahNumber,
  getPrevAyahNumber,
  makeVerseKey,
  normalizeArabic,
  searchCorpusVerses,
  searchLexiconRoots,
  toggleBookmarkList,
  upsertStudyNote,
} from './portalLogic';

test('normalizeArabic strips diacritics and normalizes alef variants', () => {
  assert.equal(normalizeArabic('الرَّحْمَٰنِ'), 'الرحمن');
  assert.equal(normalizeArabic('أَحَدٌ'), 'احد');
  assert.equal(normalizeArabic('الفَاتِحَة'), 'الفاتحه');
});

test('filterSurahs filters by revelation place and Arabic or English query', () => {
  const madani = filterSurahs(SURAHS, '', 'Madani');
  assert.ok(madani.length >= 2);
  assert.ok(madani.every((s) => s.revelation === 'Madani'));

  const ikhlasByEnglish = filterSurahs(SURAHS, 'Ikhlas', 'All');
  assert.equal(ikhlasByEnglish.length, 1);
  assert.equal(ikhlasByEnglish[0].number, 112);

  const fatihahByArabic = filterSurahs(SURAHS, 'الفاتحة', 'All');
  assert.equal(fatihahByArabic.length, 1);
  assert.equal(fatihahByArabic[0].number, 1);
});

test('searchCorpusVerses finds verses by verse key, English translation, and unvoweled Arabic', () => {
  const byKey = searchCorpusVerses(SURAHS, '2:255');
  assert.equal(byKey.length, 1);
  assert.equal(byKey[0].surah.number, 2);

  const byEnglish = searchCorpusVerses(SURAHS, 'compulsion');
  assert.ok(byEnglish.some((h) => h.surah.number === 2 && h.ayah.number === 256));

  const byArabic = searchCorpusVerses(SURAHS, 'الصمد');
  assert.ok(byArabic.some((h) => h.surah.number === 112 && h.ayah.number === 2));
});

test('searchLexiconRoots matches root letters, transliteration, and meaning', () => {
  const byLetters = searchLexiconRoots(LEXICON_ROOTS, 'رحم');
  assert.equal(byLetters.length, 1);
  assert.equal(byLetters[0].id, 'r-h-m');

  const byEnglish = searchLexiconRoots(LEXICON_ROOTS, 'mercy');
  assert.ok(byEnglish.some((r) => r.id === 'r-h-m'));
});

test('audio ayah stepping respects surah verse sequence', () => {
  const fatihah = SURAHS.find((s) => s.number === 1)!;
  assert.equal(getNextAyahNumber(fatihah, 1), 2);
  assert.equal(getNextAyahNumber(fatihah, 7), null);
  assert.equal(getPrevAyahNumber(fatihah, 1), null);
  assert.equal(getPrevAyahNumber(fatihah, 7), 6);

  const baqarah = SURAHS.find((s) => s.number === 2)!;
  assert.equal(getNextAyahNumber(baqarah, 2), 255);
  assert.equal(getPrevAyahNumber(baqarah, 255), 2);
});

test('formatSeconds renders mm:ss consistently', () => {
  assert.equal(formatSeconds(0), '0:00');
  assert.equal(formatSeconds(65), '1:05');
  assert.equal(formatSeconds(125.9), '2:05');
});

test('bookmarks, study notes, and markdown export work deterministically', () => {
  const b1 = toggleBookmarkList([], makeVerseKey(1, 1));
  assert.deepEqual(b1, ['1:1']);
  const b2 = toggleBookmarkList(b1, '1:1');
  assert.deepEqual(b2, []);

  const n1 = upsertStudyNote({}, 1, 5, 'Pivot between praise and prayer.', '2026-11-23T10:00:00Z');
  assert.equal(n1['1:5'].text, 'Pivot between praise and prayer.');

  const md = exportStudyNotesMarkdown(SURAHS, ['1:1'], n1);
  assert.ok(md.includes('Al-Fatihah (1:1)'));
  assert.ok(md.includes('**Study Note:** Pivot between praise and prayer.'));

  const n2 = upsertStudyNote(n1, 1, 5, '   ');
  assert.equal(n2['1:5'], undefined);
});
