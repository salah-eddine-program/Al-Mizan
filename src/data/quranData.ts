import { LexiconRoot, Reciter, Surah, ThematicPath } from '../types/quran';

export const RECITERS: Reciter[] = [
  {
    id: 'alafasy',
    name: 'Mishary Rashid Alafasy',
    arabicName: 'مشاري راشد العفاسي',
    style: 'Murattal · Kuwait',
    rateMultiplier: 1.0,
  },
  {
    id: 'husary',
    name: 'Mahmoud Khalil Al-Husary',
    arabicName: 'محمود خليل الحصري',
    style: 'Mujawwad · Cairo',
    rateMultiplier: 1.18,
  },
  {
    id: 'minshawi',
    name: 'Muhammad Siddiq Al-Minshawi',
    arabicName: 'محمد صديق المنشاوي',
    style: 'Tartil · Upper Egypt',
    rateMultiplier: 1.12,
  },
];

export const TRANSLATION_EDITIONS = [
  { id: 'sahih' as const, label: 'Sahih International', note: 'Contemporary clear English' },
  { id: 'haleem' as const, label: 'M.A.S. Abdel Haleem', note: 'Oxford scholarly prose' },
];

export const LEXICON_ROOTS: LexiconRoot[] = [
  {
    id: 'r-h-m',
    rootArabic: 'ر ح م',
    rootTranslit: 'r-ḥ-m',
    coreMeaning: 'Mercy, tenderness, compassion, womb-kinship',
    scholarlyNote:
      'Classical lexicographers (Ibn Faris, al-Raghib al-Isfahani) trace this root to encompassing compassion and protective care. The intensive forms al-Rahman (all-encompassing mercy in creation) and al-Rahim (ever-merciful grace toward believers) pair breadth with continuity.',
    semanticField: 'Divine Attributes & Ethics',
    totalOccurrences: 339,
    derivedForms: [
      {
        arabic: 'الرَّحْمَٰن',
        translit: 'al-Raḥmān',
        formLabel: 'Intensive adjective (faʿlān)',
        meaning: 'The Entirely Merciful — universal mercy encompassing all creation',
      },
      {
        arabic: 'الرَّحِيم',
        translit: 'al-Raḥīm',
        formLabel: 'Permanent attribute (faʿīl)',
        meaning: 'The Especially Merciful — enduring, bestowed grace',
      },
      {
        arabic: 'رَحْمَة',
        translit: 'raḥmah',
        formLabel: 'Verbal noun',
        meaning: 'Mercy, compassionate deliverance, blessing',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 1,
        phraseArabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        phraseEnglish: 'The Entirely Merciful, the Especially Merciful',
      },
      {
        surahNumber: 1,
        ayahNumber: 3,
        phraseArabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        phraseEnglish: 'The Entirely Merciful, the Especially Merciful',
      },
      {
        surahNumber: 55,
        ayahNumber: 1,
        phraseArabic: 'الرَّحْمَٰنُ',
        phraseEnglish: 'The Most Merciful',
      },
    ],
  },
  {
    id: 'h-m-d',
    rootArabic: 'ح م د',
    rootTranslit: 'ḥ-m-d',
    coreMeaning: 'Praise, gratitude for inherent perfection and goodness',
    scholarlyNote:
      'Unlike shukr (gratitude strictly for a favor received) or madh (praise that can apply even to inanimate beauty), hamd joins heartfelt veneration with recognition of willful excellence and benevolence.',
    semanticField: 'Worship & Doxology',
    totalOccurrences: 63,
    derivedForms: [
      {
        arabic: 'الْحَمْدُ',
        translit: 'al-ḥamd',
        formLabel: 'Definite verbal noun',
        meaning: 'All praise and heartfelt gratitude belong wholly to God',
      },
      {
        arabic: 'حَمِيد',
        translit: 'Ḥamīd',
        formLabel: 'Attribute (faʿīl)',
        meaning: 'The Praiseworthy in Himself',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 2,
        phraseArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        phraseEnglish: 'All praise is due to Allah, Lord of the worlds',
      },
    ],
  },
  {
    id: 'r-b-b',
    rootArabic: 'ر ب ب',
    rootTranslit: 'r-b-b',
    coreMeaning: 'Lordship, nurturing, sustaining from stage to stage',
    scholarlyNote:
      'Denotes one who brings something gradually to perfection (tarbiyah). When applied absolutely with al-ʿĀlamīn, it signifies sovereign creation, continual sustenance, and moral governance.',
    semanticField: 'Theology & Cosmology',
    totalOccurrences: 980,
    derivedForms: [
      {
        arabic: 'رَبّ',
        translit: 'Rabb',
        formLabel: 'Noun of agency',
        meaning: 'Lord, Sustainer, Cherisher, Educator',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 2,
        phraseArabic: 'رَبِّ الْعَالَمِينَ',
        phraseEnglish: 'Lord of all worlds',
      },
      {
        surahNumber: 113,
        ayahNumber: 1,
        phraseArabic: 'بِرَبِّ الْفَلَقِ',
        phraseEnglish: 'in the Lord of daybreak',
      },
      {
        surahNumber: 114,
        ayahNumber: 1,
        phraseArabic: 'بِرَبِّ النَّاسِ',
        phraseEnglish: 'in the Lord of mankind',
      },
    ],
  },
  {
    id: 'h-d-y',
    rootArabic: 'ه د ي',
    rootTranslit: 'h-d-y',
    coreMeaning: 'Gentle guidance, showing the way, bestowing a gift',
    scholarlyNote:
      'Shares its root with hadiyyah (a gift), conveying that divine guidance is not coercion but an illuminating gift leading a traveler safely to their destination.',
    semanticField: 'Revelation & Spiritual Wayfaring',
    totalOccurrences: 316,
    derivedForms: [
      {
        arabic: 'اهْدِنَا',
        translit: 'ihdinā',
        formLabel: 'Imperative prayer (Form I)',
        meaning: 'Guide us, keep us steady upon, and deepen our insight into',
      },
      {
        arabic: 'هُدًى',
        translit: 'hudan',
        formLabel: 'Indefinite noun',
        meaning: 'Pure guidance',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 6,
        phraseArabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        phraseEnglish: 'Guide us to the straight path',
      },
      {
        surahNumber: 2,
        ayahNumber: 2,
        phraseArabic: 'هُدًى لِّلْمُتَّقِينَ',
        phraseEnglish: 'a guidance for those conscious of Allah',
      },
    ],
  },
  {
    id: 'h-y-y',
    rootArabic: 'ح ي ي',
    rootTranslit: 'ḥ-y-y',
    coreMeaning: 'Life, vitality, eternal self-subsistent aliveness',
    scholarlyNote:
      'In Ayat al-Kursi, al-Hayy (The Ever-Living) establishes absolute, unborrowed life—contrasted with created life that depends upon breath, nourishment, and sleep.',
    semanticField: 'Divine Names & Metaphysics',
    totalOccurrences: 184,
    derivedForms: [
      {
        arabic: 'الْحَيُّ',
        translit: 'al-Ḥayy',
        formLabel: 'Divine Name',
        meaning: 'The Ever-Living, untouched by decline or mortality',
      },
    ],
    references: [
      {
        surahNumber: 2,
        ayahNumber: 255,
        phraseArabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        phraseEnglish: 'Allah — there is no deity except Him, the Ever-Living, the Sustainer',
      },
    ],
  },
  {
    id: 'q-w-m',
    rootArabic: 'ق و م',
    rootTranslit: 'q-w-m',
    coreMeaning: 'Standing firm, upholding, sustaining existence',
    scholarlyNote:
      'Used in both theology (al-Qayyūm: the Self-Subsisting Upholder of every atom) and moral geometry (al-Mustaqīm: the straight, balanced path that stands upright).',
    semanticField: 'Cosmology & Moral Rectitude',
    totalOccurrences: 660,
    derivedForms: [
      {
        arabic: 'الْقَيُّومُ',
        translit: 'al-Qayyūm',
        formLabel: 'Intensive Divine Name (fayʿūl)',
        meaning: 'The Sustainer of all existence who needs none',
      },
      {
        arabic: 'الْمُسْتَقِيمَ',
        translit: 'al-mustaqīm',
        formLabel: 'Form X active participle',
        meaning: 'Upright, balanced, straight',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 6,
        phraseArabic: 'الصِّرَاطَ الْمُسْتَقِيمَ',
        phraseEnglish: 'the straight path',
      },
      {
        surahNumber: 2,
        ayahNumber: 255,
        phraseArabic: 'الْحَيُّ الْقَيُّومُ',
        phraseEnglish: 'the Ever-Living, the Sustainer of existence',
      },
    ],
  },
  {
    id: 'm-l-k',
    rootArabic: 'م ل ك',
    rootTranslit: 'm-l-k',
    coreMeaning: 'Sovereignty, rightful possession, dominion',
    scholarlyNote:
      'Encompasses both Mālik (Owner/Master of a realm) and Malik (King/Sovereign), capturing absolute authority over time, judgment, and cosmic order.',
    semanticField: 'Sovereignty & Eschatology',
    totalOccurrences: 206,
    derivedForms: [
      {
        arabic: 'مَالِكِ',
        translit: 'Mālik',
        formLabel: 'Active participle',
        meaning: 'Master, Owner',
      },
      {
        arabic: 'الْمُلْكُ',
        translit: 'al-mulk',
        formLabel: 'Noun of dominion',
        meaning: 'Dominion, absolute sovereignty',
      },
    ],
    references: [
      {
        surahNumber: 1,
        ayahNumber: 4,
        phraseArabic: 'مَالِكِ يَوْمِ الدِّينِ',
        phraseEnglish: 'Sovereign of the Day of Recompense',
      },
      {
        surahNumber: 67,
        ayahNumber: 1,
        phraseArabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ',
        phraseEnglish: 'Blessed is He in whose hand is dominion',
      },
    ],
  },
  {
    id: 'w-h-d',
    rootArabic: 'و ح د / أ ح د',
    rootTranslit: 'ʾ-ḥ-d',
    coreMeaning: 'Absolute oneness, indivisible singularity',
    scholarlyNote:
      'Al-Raghib notes that Aḥad conveys an exclusive, indivisible oneness beyond numerical counting—distinct from wāḥid ("one" in a series), affirming pure transcendence.',
    semanticField: 'Pure Monotheism (Tawḥīd)',
    totalOccurrences: 85,
    derivedForms: [
      {
        arabic: 'أَحَدٌ',
        translit: 'Aḥad',
        formLabel: 'Unique singular predicate',
        meaning: 'The One, utterly incomparable and indivisible',
      },
    ],
    references: [
      {
        surahNumber: 112,
        ayahNumber: 1,
        phraseArabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        phraseEnglish: 'Say, "He is Allah, [who is] One"',
      },
    ],
  },
  {
    id: 's-m-d',
    rootArabic: 'ص م د',
    rootTranslit: 'ṣ-m-d',
    coreMeaning: 'Eternal refuge, absolute fullness, unshakable reliance',
    scholarlyNote:
      'Classical commentators (Ibn Abbas, Mujahid) interpret al-Ṣamad simultaneously as the Master to whom all creation turns in need, and the One who is completely self-sufficient, neither needing nourishment nor having any hollowness.',
    semanticField: 'Divine Self-Sufficiency',
    totalOccurrences: 1,
    derivedForms: [
      {
        arabic: 'الصَّمَدُ',
        translit: 'al-Ṣamad',
        formLabel: 'Unique Quranic hapax',
        meaning: 'The Eternal Refuge, the Absolute Self-Sufficient',
      },
    ],
    references: [
      {
        surahNumber: 112,
        ayahNumber: 2,
        phraseArabic: 'اللَّهُ الصَّمَدُ',
        phraseEnglish: 'Allah, the Eternal Refuge',
      },
    ],
  },
  {
    id: 'q-r-a',
    rootArabic: 'ق ر أ',
    rootTranslit: 'q-r-ʾ',
    coreMeaning: 'To gather, recite aloud, read attentively',
    scholarlyNote:
      'The opening imperative of revelation (Iqraʾ) joins collecting scattered signs into coherent meaning with vocalized recitation.',
    semanticField: 'Revelation & Literacy',
    totalOccurrences: 88,
    derivedForms: [
      {
        arabic: 'اقْرَأْ',
        translit: 'iqraʾ',
        formLabel: 'Imperative (Form I)',
        meaning: 'Read, recite',
      },
      {
        arabic: 'الْقُرْآن',
        translit: 'al-Qurʾān',
        formLabel: 'Verbal noun',
        meaning: 'The Recitation',
      },
    ],
    references: [
      {
        surahNumber: 96,
        ayahNumber: 1,
        phraseArabic: 'اقْرَأْ بِاسْمِ رَبِّكَ',
        phraseEnglish: 'Recite in the name of your Lord',
      },
    ],
  },
  {
    id: 'sh-r-h',
    rootArabic: 'ش ر ح',
    rootTranslit: 'sh-r-ḥ',
    coreMeaning: 'To expand, lay open, illuminate with clarity',
    scholarlyNote:
      'Applied to the heart or chest (ṣadr), sharḥ denotes spaciousness of spirit, relief from anxiety, and receptivity to wisdom.',
    semanticField: 'Inner Illumination',
    totalOccurrences: 5,
    derivedForms: [
      {
        arabic: 'نَشْرَحْ',
        translit: 'nashraḥ',
        formLabel: 'Jussive imperfect (Form I)',
        meaning: 'Have We not expanded',
      },
    ],
    references: [
      {
        surahNumber: 94,
        ayahNumber: 1,
        phraseArabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        phraseEnglish: 'Did We not expand for you, [O Muhammad], your breast?',
      },
    ],
  },
  {
    id: 'a-s-r',
    rootArabic: 'ع ص ر',
    rootTranslit: 'ʿ-ṣ-r',
    coreMeaning: 'Time, pressing/distilling, the late afternoon era',
    scholarlyNote:
      'Al-ʿAṣr evokes the swift passage of historical time and the closing light of day—pressing every human life to distill meaning through faith, integrity, truth, and patience.',
    semanticField: 'Time & Human Accountability',
    totalOccurrences: 5,
    derivedForms: [
      {
        arabic: 'الْعَصْرِ',
        translit: 'al-ʿaṣr',
        formLabel: 'Noun of time',
        meaning: 'Time, the declining day, the epoch',
      },
    ],
    references: [
      {
        surahNumber: 103,
        ayahNumber: 1,
        phraseArabic: 'وَالْعَصْرِ',
        phraseEnglish: 'By time',
      },
    ],
  },
];

export const SURAHS: Surah[] = [
  {
    number: 1,
    nameArabic: 'الفاتحة',
    nameTranslit: 'Al-Fatihah',
    nameEnglish: 'The Opening',
    revelation: 'Makki',
    juz: 1,
    totalAyahsInSurah: 7,
    themeSummary:
      'The liturgical prologue of the Quran—uniting praise of the Compassionate Creator, recognition of moral accountability, and the supplication for steady guidance.',
    ayahs: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismi Allāhi al-Raḥmāni al-Raḥīm',
        translations: {
          sahih: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
          haleem: 'In the name of God, the Lord of Mercy, the Giver of Mercy.',
        },
        tafsir: {
          ibn_kathir:
            'Every noble undertaking begins by invoking the Divine Name, seeking blessing and alignment with God’s mercy. The pairing of al-Raḥmān (universal compassion encompassing all creation) and al-Raḥīm (enduring, intimate mercy) frames revelation first and foremost as an act of grace.',
          jalalayn:
            'I begin with the Name of God, who is characterized by absolute, overflowing mercy—both in the breadth of His creation and in His particular kindness toward those who turn to Him.',
          contextNote: 'Counted as the first verse of Al-Fatihah in the Kufan recitation tradition.',
        },
        durationSeconds: 5,
        words: [
          { arabic: 'بِسْمِ', transliteration: 'bismi', gloss: 'In the name of' },
          { arabic: 'اللَّهِ', transliteration: 'Allāhi', gloss: 'God (Allah)' },
          { arabic: 'الرَّحْمَٰنِ', transliteration: 'al-Raḥmāni', gloss: 'the Entirely Merciful', rootId: 'r-h-m' },
          { arabic: 'الرَّحِيمِ', transliteration: 'al-Raḥīm', gloss: 'the Especially Merciful', rootId: 'r-h-m' },
        ],
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        transliteration: 'Al-ḥamdu lillāhi Rabbi al-ʿālamīn',
        translations: {
          sahih: '[All] praise is [due] to Allah, Lord of the worlds —',
          haleem: 'Praise belongs to God, Lord of the Worlds,',
        },
        tafsir: {
          ibn_kathir:
            'All perfection of praise and gratitude belongs intrinsically to God alone. Calling Him Rabb al-ʿālamīn affirms that every realm of existence—seen and unseen—is nurtured, sustained, and governed by Him.',
          jalalayn:
            'The statement is at once declarative and devotional: all praise is rightly God’s, Creator and Sustainer of every order of beings.',
        },
        durationSeconds: 5,
        words: [
          { arabic: 'الْحَمْدُ', transliteration: 'al-ḥamdu', gloss: 'All praise', rootId: 'h-m-d' },
          { arabic: 'لِلَّهِ', transliteration: 'lillāhi', gloss: 'is due to Allah' },
          { arabic: 'رَبِّ', transliteration: 'Rabbi', gloss: 'Lord & Sustainer', rootId: 'r-b-b' },
          { arabic: 'الْعَالَمِينَ', transliteration: 'al-ʿālamīn', gloss: 'of all worlds' },
        ],
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Al-Raḥmāni al-Raḥīm',
        translations: {
          sahih: 'The Entirely Merciful, the Especially Merciful,',
          haleem: 'the Lord of Mercy, the Giver of Mercy,',
        },
        tafsir: {
          ibn_kathir:
            'Repeating the names of mercy immediately after affirming universal Lordship anchors the human relationship with God in hope rather than dread—reminding the reader that sovereign governance is inseparable from compassion.',
          jalalayn:
            'He who encompasses all creatures in mercy in this life and bestows enduring mercy in the next.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'الرَّحْمَٰنِ', transliteration: 'al-Raḥmāni', gloss: 'The Entirely Merciful', rootId: 'r-h-m' },
          { arabic: 'الرَّحِيمِ', transliteration: 'al-Raḥīm', gloss: 'the Especially Merciful', rootId: 'r-h-m' },
        ],
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        transliteration: 'Māliki yawmi al-dīn',
        translations: {
          sahih: 'Sovereign of the Day of Recompense.',
          haleem: 'Master of the Day of Judgement.',
        },
        tafsir: {
          ibn_kathir:
            'Yawm al-Dīn is the Day of Reckoning, when every deed is weighed in absolute justice. Mentioning Sovereignty here balances mercy with moral seriousness: nothing good is forgotten, and no injustice goes unaddressed.',
          jalalayn:
            'Sole Master and Judge on the Day when every soul receives the true fruit of its choices (recorded in canonical readings as both Mālik, Owner, and Malik, King).',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'مَالِكِ', transliteration: 'Māliki', gloss: 'Sovereign / Master', rootId: 'm-l-k' },
          { arabic: 'يَوْمِ', transliteration: 'yawmi', gloss: 'of the Day' },
          { arabic: 'الدِّينِ', transliteration: 'al-dīn', gloss: 'of Recompense' },
        ],
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        transliteration: 'Iyyāka naʿbudu wa iyyāka nastaʿīn',
        translations: {
          sahih: 'It is You we worship and You we ask for help.',
          haleem: 'It is You we worship; it is You we ask for help.',
        },
        tafsir: {
          ibn_kathir:
            'The turning point of the surah: the grammar shifts from speaking about God in the third person to addressing Him directly ("You alone"). Placing the object iyyāka first restricts devotion and ultimate reliance exclusively to God.',
          jalalayn:
            'We devote worship solely to You, and we seek strength solely from You—for even worship itself is only possible by Your aid.',
          contextNote: 'Classical scholars call this verse the pivot between praise and supplication.',
        },
        durationSeconds: 5,
        words: [
          { arabic: 'إِيَّاكَ', transliteration: 'iyyāka', gloss: 'You alone' },
          { arabic: 'نَعْبُدُ', transliteration: 'naʿbudu', gloss: 'we worship' },
          { arabic: 'وَإِيَّاكَ', transliteration: 'wa iyyāka', gloss: 'and You alone' },
          { arabic: 'نَسْتَعِينُ', transliteration: 'nastaʿīn', gloss: 'we ask for help' },
        ],
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinā al-ṣirāṭa al-mustaqīm',
        translations: {
          sahih: 'Guide us to the straight path —',
          haleem: 'Guide us to the straight path:',
        },
        tafsir: {
          ibn_kathir:
            'The supplication asks not merely for initial awareness of truth, but for continual clarity, steadiness, and deeper ascent along the balanced path (al-ṣirāṭ al-mustaqīm) that leads to God’s pleasure.',
          jalalayn:
            'Direct us and keep us firm upon the clear, upright way free of deviation.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'اهْدِنَا', transliteration: 'ihdinā', gloss: 'Guide us', rootId: 'h-d-y' },
          { arabic: 'الصِّرَاطَ', transliteration: 'al-ṣirāṭa', gloss: 'to the path' },
          { arabic: 'الْمُسْتَقِيمَ', transliteration: 'al-mustaqīm', gloss: 'the straight / upright', rootId: 'q-w-m' },
        ],
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        transliteration: 'Ṣirāṭa alladhīna anʿamta ʿalayhim ghayri al-maghḍūbi ʿalayhim wa lā al-ḍāllīn',
        translations: {
          sahih:
            'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
          haleem:
            'the path of those You have blessed, those who incur no anger and who have not gone astray.',
        },
        tafsir: {
          ibn_kathir:
            'Those favored by God are identified elsewhere in the Quran (4:69) as the prophets, the truthful, the witnesses, and the righteous. Thus the prayer asks to walk in harmony with lived integrity—avoiding both knowing neglect and aimless confusion.',
          jalalayn:
            'The path of those blessed with steadfast guidance, distinct from those who turned away willfully after knowing truth or lost the way in error.',
        },
        durationSeconds: 8,
        words: [
          { arabic: 'صِرَاطَ', transliteration: 'ṣirāṭa', gloss: 'The path' },
          { arabic: 'الَّذِينَ', transliteration: 'alladhīna', gloss: 'of those' },
          { arabic: 'أَنْعَمْتَ', transliteration: 'anʿamta', gloss: 'You have blessed' },
          { arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', gloss: 'upon them' },
          { arabic: 'غَيْرِ', transliteration: 'ghayri', gloss: 'not of' },
          { arabic: 'الْمَغْضُوبِ', transliteration: 'al-maghḍūbi', gloss: 'those incurring anger' },
          { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'wa lā al-ḍāllīn', gloss: 'nor those astray' },
        ],
      },
    ],
  },
  {
    number: 2,
    nameArabic: 'البقرة',
    nameTranslit: 'Al-Baqarah',
    nameEnglish: 'The Cow (Ayat al-Kursi & Opening)',
    revelation: 'Madani',
    juz: 3,
    totalAyahsInSurah: 286,
    isExcerpt: true,
    excerptLabel: 'Selected Study Passage · Verses 1–2 & 255–256',
    themeSummary:
      'Foundational Madani chapter encompassing creed, law, community ethics, and the celebrated Throne Verse (Ayat al-Kursi, 2:255).',
    ayahs: [
      {
        number: 1,
        arabic: 'الم',
        transliteration: 'Alif-Lām-Mīm',
        translations: {
          sahih: 'Alif, Lam, Meem.',
          haleem: 'Alif Lam Mim.',
        },
        tafsir: {
          ibn_kathir:
            'Among the detached opening letters (al-ḥurūf al-muqaṭṭaʿāt). Many classical authorities remark that God alone knows their ultimate secret, while also noting their placement right before declarations about the Scripture—highlighting that the Arabic Quran is composed of the very letters known to speakers, yet inimitable.',
          jalalayn:
            'God knows best what He intends by these opening letters.',
        },
        durationSeconds: 4,
        words: [{ arabic: 'الم', transliteration: 'Alif-Lām-Mīm', gloss: 'Opening letters' }],
      },
      {
        number: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
        transliteration: 'Dhālika al-kitābu lā rayba fīhi hudan lil-muttaqīn',
        translations: {
          sahih: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah —',
          haleem: 'This is the Scripture in which there is no doubt, containing guidance for those who are mindful of God,',
        },
        tafsir: {
          ibn_kathir:
            'Al-Fatihah ended with a prayer for guidance; Al-Baqarah opens immediately with the answer: "This is the Book... guidance for the God-conscious." Its illumination benefits those who approach it with humility and moral attentiveness (taqwā).',
          jalalayn:
            'There is no uncertainty regarding its divine origin; it serves as active guidance for those who guard themselves against wrongdoing.',
        },
        durationSeconds: 6,
        words: [
          { arabic: 'ذَٰلِكَ', transliteration: 'dhālika', gloss: 'That / This' },
          { arabic: 'الْكِتَابُ', transliteration: 'al-kitābu', gloss: 'the Book' },
          { arabic: 'لَا رَيْبَ', transliteration: 'lā rayba', gloss: 'no doubt' },
          { arabic: 'فِيهِ', transliteration: 'fīhi', gloss: 'in it' },
          { arabic: 'هُدًى', transliteration: 'hudan', gloss: 'guidance', rootId: 'h-d-y' },
          { arabic: 'لِّلْمُتَّقِينَ', transliteration: 'lil-muttaqīn', gloss: 'for the mindful' },
        ],
      },
      {
        number: 255,
        arabic:
          'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
        transliteration:
          'Allāhu lā ilāha illā huwa al-Ḥayyu al-Qayyūm, lā taʾkhudhuhu sinatun wa lā nawm...',
        translations: {
          sahih:
            'Allah — there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
          haleem:
            'God: there is no god but Him, the Ever Living, the Ever Watchful. Neither slumber nor sleep overtakes Him. All that is in the heavens and in the earth belongs to Him. Who is there that can intercede with Him except by His leave? He knows what is before them and what is behind them, but they do not comprehend any of His knowledge except what He wills. His throne extends over the heavens and the earth; it does not weary Him to preserve them both. He is the Most High, the Tremendous.',
        },
        tafsir: {
          ibn_kathir:
            'Known as Ayat al-Kursi (the Throne Verse) and described in Prophetic tradition as the greatest verse in the Quran. Its ten clauses present a complete portrait of divine transcendence and immanent care: absolute oneness, eternal life (al-Ḥayy), continual sustenance of all creation (al-Qayyūm), unbroken vigilance, universal ownership, sovereign knowledge, and effortless preservation of the cosmos.',
          jalalayn:
            'His Kursi (footstool/sovereign seat) encompasses the heavens and the earth in majesty, and guarding the entire cosmos causes Him no fatigue whatsoever.',
          contextNote: 'Ayat al-Kursi — widely memorized and recited for reflection on divine majesty.',
        },
        durationSeconds: 22,
        words: [
          { arabic: 'اللَّهُ', transliteration: 'Allāhu', gloss: 'Allah' },
          { arabic: 'لَا إِلَٰهَ إِلَّا هُوَ', transliteration: 'lā ilāha illā huwa', gloss: 'no deity except Him' },
          { arabic: 'الْحَيُّ', transliteration: 'al-Ḥayyu', gloss: 'the Ever-Living', rootId: 'h-y-y' },
          { arabic: 'الْقَيُّومُ', transliteration: 'al-Qayyūm', gloss: 'the Sustainer', rootId: 'q-w-m' },
          { arabic: 'لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ', transliteration: 'lā taʾkhudhuhu sinatun wa lā nawm', gloss: 'neither drowsiness nor sleep overtakes Him' },
          { arabic: 'وَسِعَ كُرْسِيُّهُ', transliteration: 'wasiʿa kursiyyuhu', gloss: 'His Kursi extends over' },
          { arabic: 'وَهُوَ الْعَلِيُّ الْعَظِيمُ', transliteration: 'wa huwa al-ʿAliyyu al-ʿAẓīm', gloss: 'He is the Most High, Most Great' },
        ],
      },
      {
        number: 256,
        arabic:
          'لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ',
        transliteration: 'Lā ikrāha fī al-dīni qad tabayyana al-rushdu mina al-ghayy...',
        translations: {
          sahih:
            'There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing.',
          haleem:
            'There is no compulsion in religion: true guidance has become distinct from error, so whoever rejects false gods and believes in God has grasped the firmest hand-hold, one that will never break. God is all hearing and all knowing.',
        },
        tafsir: {
          ibn_kathir:
            'Placed immediately after Ayat al-Kursi, this verse establishes the foundational principle of conscience: genuine faith cannot be coerced, because truth shines with its own moral clarity. The believer who turns away from falsehood holds fast to al-ʿurwat al-wuthqā—an unbreakable anchor.',
          jalalayn:
            'No one is to be forced into faith; sound guidance stands clearly distinguished from error.',
        },
        durationSeconds: 13,
        words: [
          { arabic: 'لَا إِكْرَاهَ', transliteration: 'lā ikrāha', gloss: 'There is no compulsion' },
          { arabic: 'فِي الدِّينِ', transliteration: 'fī al-dīn', gloss: 'in religion' },
          { arabic: 'قَد تَّبَيَّنَ الرُّشْدُ', transliteration: 'qad tabayyana al-rushd', gloss: 'sound guidance has become clear' },
          { arabic: 'بِالْعُرْوَةِ الْوُثْقَىٰ', transliteration: 'bi-l-ʿurwati al-wuthqā', gloss: 'the most trustworthy handhold' },
        ],
      },
    ],
  },
  {
    number: 55,
    nameArabic: 'الرحمن',
    nameTranslit: 'Ar-Rahman',
    nameEnglish: 'The Most Merciful',
    revelation: 'Madani',
    juz: 27,
    totalAyahsInSurah: 78,
    isExcerpt: true,
    excerptLabel: 'Selected Study Passage · Verses 1–13',
    themeSummary:
      'A lyrical meditation on divine grace—pairing revelation of the Quran, human speech, cosmic balance (al-mīzān), and the famous refrain calling both humanity and jinn to gratitude.',
    ayahs: [
      {
        number: 1,
        arabic: 'الرَّحْمَٰنُ',
        transliteration: 'Al-Raḥmān',
        translations: {
          sahih: 'The Most Merciful',
          haleem: 'It is the Lord of Mercy',
        },
        tafsir: {
          ibn_kathir:
            'The Surah opens with a single, resonant Divine Name—al-Raḥmān—establishing that every gift that follows (revelation, creation, balance, and speech) flows from sheer mercy.',
          jalalayn: 'God, the Lord of encompassing Mercy.',
        },
        durationSeconds: 3,
        words: [{ arabic: 'الرَّحْمَٰنُ', transliteration: 'al-Raḥmān', gloss: 'The Most Merciful', rootId: 'r-h-m' }],
      },
      {
        number: 2,
        arabic: 'عَلَّمَ الْقُرْآنَ',
        transliteration: 'ʿAllama al-Qurʾān',
        translations: {
          sahih: 'Taught the Qur’an,',
          haleem: 'who taught the Quran.',
        },
        tafsir: {
          ibn_kathir:
            'Notice the sequence: teaching the Quran is placed even before mentioning the creation of the human being, signaling that spiritual illumination is the highest expression of divine mercy.',
          jalalayn: 'He taught the Quran to whomever He willed, making its recitation and meaning accessible.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'عَلَّمَ', transliteration: 'ʿallama', gloss: 'Taught' },
          { arabic: 'الْقُرْآنَ', transliteration: 'al-Qurʾān', gloss: 'the Quran', rootId: 'q-r-a' },
        ],
      },
      {
        number: 3,
        arabic: 'خَلَقَ الْإِنسَانَ',
        transliteration: 'Khalaqa al-insān',
        translations: {
          sahih: 'Created man,',
          haleem: 'He created man',
        },
        tafsir: {
          ibn_kathir: 'Brought the human species into existence with dignity and intellectual capacity.',
          jalalayn: 'Created humanity from humble origins.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'خَلَقَ', transliteration: 'khalaqa', gloss: 'Created' },
          { arabic: 'الْإِنسَانَ', transliteration: 'al-insān', gloss: 'the human being' },
        ],
      },
      {
        number: 4,
        arabic: 'عَلَّمَهُ الْبَيَانَ',
        transliteration: 'ʿAllamahu al-bayān',
        translations: {
          sahih: '[And] taught him eloquence.',
          haleem: 'and taught him to communicate.',
        },
        tafsir: {
          ibn_kathir:
            'Al-bayān refers to articulate speech, clarity of thought, and the capacity to discern and express meaning—the gift that allows humans to receive revelation and transmit knowledge.',
          jalalayn: 'Taught him distinct articulation and understanding.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'عَلَّمَهُ', transliteration: 'ʿallamahu', gloss: 'Taught him' },
          { arabic: 'الْبَيَانَ', transliteration: 'al-bayān', gloss: 'eloquence & discernment' },
        ],
      },
      {
        number: 7,
        arabic: 'وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ',
        transliteration: 'Wa al-samāʾa rafaʿahā wa waḍaʿa al-mīzān',
        translations: {
          sahih: 'And the heaven He raised and imposed the balance',
          haleem: 'He raised up the sky and set the balance,',
        },
        tafsir: {
          ibn_kathir:
            'Al-Mīzān (the Balance) denotes both the cosmic equilibrium holding the heavens in order and the moral justice commanded among humanity in the next verses.',
          jalalayn: 'He elevated the sky and established justice and equilibrium.',
        },
        durationSeconds: 5,
        words: [
          { arabic: 'وَالسَّمَاءَ', transliteration: 'wa al-samāʾa', gloss: 'And the heaven' },
          { arabic: 'رَفَعَهَا', transliteration: 'rafaʿahā', gloss: 'He raised it' },
          { arabic: 'وَوَضَعَ', transliteration: 'wa waḍaʿa', gloss: 'and established' },
          { arabic: 'الْمِيزَانَ', transliteration: 'al-mīzān', gloss: 'the balance' },
        ],
      },
      {
        number: 13,
        arabic: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',
        transliteration: 'Fa-bi-ayyi ālāʾi Rabbikumā tukadhdhibān',
        translations: {
          sahih: 'So which of the favors of your Lord would you deny?',
          haleem: 'Which, then, of your Lord’s blessings do you both deny?',
        },
        tafsir: {
          ibn_kathir:
            'This poetic refrain recurs thirty-one times throughout Surah Ar-Rahman, inviting continuous reflection upon visible and invisible mercies.',
          jalalayn: 'Addressing both humankind and jinn: which of your Lord’s countless blessings can you refute?',
        },
        durationSeconds: 5,
        words: [
          { arabic: 'فَبِأَيِّ', transliteration: 'fa-bi-ayyi', gloss: 'So which' },
          { arabic: 'آلَاءِ', transliteration: 'ālāʾi', gloss: 'favors / blessings' },
          { arabic: 'رَبِّكُمَا', transliteration: 'Rabbikumā', gloss: 'of your Lord', rootId: 'r-b-b' },
          { arabic: 'تُكَذِّبَانِ', transliteration: 'tukadhdhibān', gloss: 'would you deny?' },
        ],
      },
    ],
  },
  {
    number: 67,
    nameArabic: 'الملك',
    nameTranslit: 'Al-Mulk',
    nameEnglish: 'The Sovereignty',
    revelation: 'Makki',
    juz: 29,
    totalAyahsInSurah: 30,
    isExcerpt: true,
    excerptLabel: 'Selected Study Passage · Verses 1–4',
    themeSummary:
      'Calls attention to the seamless architecture of the seven heavens and reminds humanity that life and death were created to test excellence in deeds.',
    ayahs: [
      {
        number: 1,
        arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'Tabāraka alladhī bi-yadihi al-mulku wa huwa ʿalā kulli shayʾin qadīr',
        translations: {
          sahih: 'Blessed is He in whose hand is dominion, and He is over all things competent —',
          haleem: 'Blessed is He who holds all control in His hands, who has power over all things;',
        },
        tafsir: {
          ibn_kathir:
            'Tabāraka conveys supreme, overflowing blessing and permanence. Every earthly realm is temporary; true dominion (al-mulk) rests solely in God’s hands.',
          jalalayn: 'Exalted above every imperfection is He who possesses absolute sovereignty.',
        },
        durationSeconds: 6,
        words: [
          { arabic: 'تَبَارَكَ', transliteration: 'tabāraka', gloss: 'Blessed is' },
          { arabic: 'بِيَدِهِ', transliteration: 'bi-yadihi', gloss: 'in whose hand' },
          { arabic: 'الْمُلْكُ', transliteration: 'al-mulk', gloss: 'is dominion', rootId: 'm-l-k' },
          { arabic: 'قَدِيرٌ', transliteration: 'qadīr', gloss: 'all-competent' },
        ],
      },
      {
        number: 2,
        arabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ',
        transliteration: 'Alladhī khalaqa al-mawta wa al-ḥayāta li-yabluwakum ayyukum aḥsanu ʿamalā...',
        translations: {
          sahih:
            '[He] who created death and life to test you [as to] which of you is best in deed — and He is the Exalted in Might, the Forgiving —',
          haleem:
            'who created death and life to test you [people] and reveal which of you does best — He is the Mighty, the Forgiving;',
        },
        tafsir: {
          ibn_kathir:
            'Classical scholars (including al-Fudayl ibn Iyad) emphasize that the verse says "best in deed" (aḥsanu ʿamalā), not "most in deed"—meaning deeds that are both sincere in intention and sound in execution.',
          jalalayn:
            'Death precedes life in order here to remind the heart that earthly existence is finite and purposeful.',
        },
        durationSeconds: 8,
        words: [
          { arabic: 'خَلَقَ', transliteration: 'khalaqa', gloss: 'Created' },
          { arabic: 'الْمَوْتَ', transliteration: 'al-mawta', gloss: 'death' },
          { arabic: 'وَالْحَيَاةَ', transliteration: 'wa al-ḥayāta', gloss: 'and life', rootId: 'h-y-y' },
          { arabic: 'أَحْسَنُ عَمَلًا', transliteration: 'aḥsanu ʿamalā', gloss: 'best in deed' },
        ],
      },
      {
        number: 3,
        arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ',
        transliteration: 'Alladhī khalaqa sabʿa samāwātin ṭibāqan mā tarā fī khalqi al-Raḥmāni min tafāwut...',
        translations: {
          sahih:
            '[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision to the sky, do you see any breaks?',
          haleem:
            'who created the seven heavens, one above the other. You will not see any flaw in what the Lord of Mercy creates. Look again! Can you see any flaw?',
        },
        tafsir: {
          ibn_kathir:
            'Invites empirical contemplation: look across the cosmos for any structural discord or fracture; every layer testifies to unified design and harmony.',
          jalalayn:
            'Seven heavens arranged harmoniously in tiers without flaw or fissure.',
        },
        durationSeconds: 9,
        words: [
          { arabic: 'سَبْعَ سَمَاوَاتٍ', transliteration: 'sabʿa samāwātin', gloss: 'seven heavens' },
          { arabic: 'الرَّحْمَٰنِ', transliteration: 'al-Raḥmāni', gloss: 'of the Most Merciful', rootId: 'r-h-m' },
          { arabic: 'تَفَاوُتٍ', transliteration: 'tafāwut', gloss: 'inconsistency / flaw' },
        ],
      },
    ],
  },
  {
    number: 94,
    nameArabic: 'الشرح',
    nameTranslit: 'Ash-Sharh',
    nameEnglish: 'The Relief',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 8,
    themeSummary:
      'A deeply consoling Makki surah assuring the heart that spiritual expansion follows hardship and that with every single difficulty come multiple avenues of ease.',
    ayahs: [
      {
        number: 1,
        arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ',
        transliteration: 'Alam nashraḥ laka ṣadrak',
        translations: {
          sahih: 'Did We not expand for you, [O Muhammad], your breast?',
          haleem: 'Did We not relieve your heart for you [Prophet],',
        },
        tafsir: {
          ibn_kathir:
            'Reminds the Prophet of the spiritual illumination, serenity, and resilience God placed within his heart during periods of heavy opposition.',
          jalalayn: 'Did We not open your heart with light, wisdom, and peace?',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'أَلَمْ', transliteration: 'alam', gloss: 'Did We not' },
          { arabic: 'نَشْرَحْ', transliteration: 'nashraḥ', gloss: 'expand / relieve', rootId: 'sh-r-h' },
          { arabic: 'صَدْرَكَ', transliteration: 'ṣadrak', gloss: 'your chest / heart' },
        ],
      },
      {
        number: 2,
        arabic: 'وَوَضَعْنَا عَنكَ وِزْرَكَ',
        transliteration: 'Wa waḍaʿnā ʿanka wizrak',
        translations: {
          sahih: 'And We removed from you your burden',
          haleem: 'and remove the burden',
        },
        tafsir: {
          ibn_kathir: 'Lifted the heavy emotional and prophetic weight carried in calling people to truth.',
          jalalayn: 'Lightened your heavy responsibility.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'وَوَضَعْنَا', transliteration: 'wa waḍaʿnā', gloss: 'And We removed' },
          { arabic: 'وِزْرَكَ', transliteration: 'wizrak', gloss: 'your burden' },
        ],
      },
      {
        number: 3,
        arabic: 'الَّذِي أَنقَضَ ظَهْرَكَ',
        transliteration: 'Alladhī anqaḍa ẓahrak',
        translations: {
          sahih: 'Which had weighed upon your back',
          haleem: 'that weighed so heavily on your back,',
        },
        tafsir: {
          ibn_kathir: 'A vivid metaphor of a load so heavy it causes the bearer’s back to ache—now replaced with grace.',
          jalalayn: 'Which pressed down heavily upon you.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'أَنقَضَ', transliteration: 'anqaḍa', gloss: 'weighed heavily upon' },
          { arabic: 'ظَهْرَكَ', transliteration: 'ẓahrak', gloss: 'your back' },
        ],
      },
      {
        number: 4,
        arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
        transliteration: 'Wa rafaʿnā laka dhikrak',
        translations: {
          sahih: 'And raised high for you your repute.',
          haleem: 'and raise your reputation high?',
        },
        tafsir: {
          ibn_kathir:
            'Commentators cite Mujahid: wherever God’s name is invoked in the call to prayer (adhan) and testimony of faith, His Messenger is remembered alongside Him with honor.',
          jalalayn: 'Elevated your honorable mention across generations.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'وَرَفَعْنَا', transliteration: 'wa rafaʿnā', gloss: 'And We raised high' },
          { arabic: 'ذِكْرَكَ', transliteration: 'dhikrak', gloss: 'your mention / repute' },
        ],
      },
      {
        number: 5,
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        transliteration: 'Fa-inna maʿa al-ʿusri yusrā',
        translations: {
          sahih: 'For indeed, with hardship [will be] ease.',
          haleem: 'So truly where there is hardship there is also ease;',
        },
        tafsir: {
          ibn_kathir:
            'Arabic grammarians observe that al-ʿusr (the hardship) appears with the definite article al-, whereas yusrā (ease) is indefinite—signifying one definite hardship accompanied by abundant, manifold ease.',
          jalalayn: 'Ease is woven alongside hardship, not merely postponed after it.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'مَعَ', transliteration: 'maʿa', gloss: 'with / alongside' },
          { arabic: 'الْعُسْرِ', transliteration: 'al-ʿusri', gloss: 'the hardship' },
          { arabic: 'يُسْرًا', transliteration: 'yusrā', gloss: 'ease' },
        ],
      },
      {
        number: 6,
        arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        transliteration: 'Inna maʿa al-ʿusri yusrā',
        translations: {
          sahih: 'Indeed, with hardship [will be] ease.',
          haleem: 'truly where there is hardship there is also ease.',
        },
        tafsir: {
          ibn_kathir:
            'The repetition reinforces certainty; a classical maxim states that "one hardship can never overcome two eases."',
          jalalayn: 'Emphatic reassurance of relief.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'الْعُسْرِ', transliteration: 'al-ʿusri', gloss: 'the hardship' },
          { arabic: 'يُسْرًا', transliteration: 'yusrā', gloss: 'ease' },
        ],
      },
      {
        number: 7,
        arabic: 'فَإِذَا فَرَغْتَ فَانصَبْ',
        transliteration: 'Fa-idhā faraghta fanṣab',
        translations: {
          sahih: 'So when you have finished [your duties], then stand up [for worship].',
          haleem: 'The moment you are freed [of one task] work on,',
        },
        tafsir: {
          ibn_kathir:
            'When daily obligations conclude, turn immediately to earnest devotion and prayer, keeping the soul continually engaged in purposeful exertion.',
          jalalayn: 'When you finish one duty, strive in supplication and worship.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'فَرَغْتَ', transliteration: 'faraghta', gloss: 'you have finished' },
          { arabic: 'فَانصَبْ', transliteration: 'fanṣab', gloss: 'strive / stand in worship' },
        ],
      },
      {
        number: 8,
        arabic: 'وَإِلَىٰ رَبِّكَ فَارْغَب',
        transliteration: 'Wa ilā Rabbika farghab',
        translations: {
          sahih: 'And to your Lord direct [your] longing.',
          haleem: 'and turn to your Lord for everything.',
        },
        tafsir: {
          ibn_kathir: 'Anchor every hope and aspiration in your Lord alone.',
          jalalayn: 'Make God the sole object of your devotion and desire.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'رَبِّكَ', transliteration: 'Rabbika', gloss: 'your Lord', rootId: 'r-b-b' },
          { arabic: 'فَارْغَب', transliteration: 'farghab', gloss: 'direct your longing' },
        ],
      },
    ],
  },
  {
    number: 96,
    nameArabic: 'العلق',
    nameTranslit: 'Al-Alaq',
    nameEnglish: 'The Clinging Clot (First Revelation)',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 19,
    isExcerpt: true,
    excerptLabel: 'First Revealed Passage · Verses 1–5',
    themeSummary:
      'The inaugural verses revealed at Mount Hira—consecrating reading, the pen, and the pursuit of knowledge in the name of the Most Generous Creator.',
    ayahs: [
      {
        number: 1,
        arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
        transliteration: 'Iqraʾ bismi Rabbika alladhī khalaq',
        translations: {
          sahih: 'Recite in the name of your Lord who created —',
          haleem: 'Read! In the name of your Lord who created:',
        },
        tafsir: {
          ibn_kathir:
            'The very first command of the Quranic revelation is Iqraʾ ("Read / Recite")—anchored in God’s creative Lordship so that human learning remains humble, ethical, and life-giving.',
          jalalayn: 'Begin reciting by invoking the Name of your Lord, Creator of all things.',
          contextNote: 'First five verses revealed in the Cave of Hira.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'اقْرَأْ', transliteration: 'iqraʾ', gloss: 'Read / Recite', rootId: 'q-r-a' },
          { arabic: 'رَبِّكَ', transliteration: 'Rabbika', gloss: 'your Lord', rootId: 'r-b-b' },
          { arabic: 'خَلَقَ', transliteration: 'khalaqa', gloss: 'created' },
        ],
      },
      {
        number: 2,
        arabic: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ',
        transliteration: 'Khalaqa al-insāna min ʿalaq',
        translations: {
          sahih: 'Created man from a clinging substance.',
          haleem: 'He created man from a clinging form.',
        },
        tafsir: {
          ibn_kathir: 'Draws humility from human biological origin—elevated from a tiny clinging cell to an intellect capable of knowledge.',
          jalalayn: 'Formed humanity from a clinging embryonic state.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'خَلَقَ', transliteration: 'khalaqa', gloss: 'Created' },
          { arabic: 'الْإِنسَانَ', transliteration: 'al-insān', gloss: 'the human being' },
          { arabic: 'عَلَقٍ', transliteration: 'ʿalaq', gloss: 'clinging form' },
        ],
      },
      {
        number: 3,
        arabic: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ',
        transliteration: 'Iqraʾ wa Rabbuka al-Akram',
        translations: {
          sahih: 'Recite, and your Lord is the most Generous —',
          haleem: 'Read! Your Lord is the Most Bountiful One',
        },
        tafsir: {
          ibn_kathir: 'Links the act of reading with divine generosity (al-Akram): God opens doors of understanding far beyond human expectation.',
          jalalayn: 'Read, for none is more generous than your Lord in bestowing wisdom.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'اقْرَأْ', transliteration: 'iqraʾ', gloss: 'Read / Recite', rootId: 'q-r-a' },
          { arabic: 'وَرَبُّكَ', transliteration: 'wa Rabbuka', gloss: 'and your Lord', rootId: 'r-b-b' },
          { arabic: 'الْأَكْرَمُ', transliteration: 'al-Akram', gloss: 'the Most Generous' },
        ],
      },
      {
        number: 4,
        arabic: 'الَّذِي عَلَّمَ بِالْقَلَمِ',
        transliteration: 'Alladhī ʿallama bi-l-qalam',
        translations: {
          sahih: 'Who taught by the pen —',
          haleem: 'who taught by [means of] the pen,',
        },
        tafsir: {
          ibn_kathir:
            'Honors writing and scholarship: through the pen, insight is preserved across centuries and civilizations rather than perishing with a single memory.',
          jalalayn: 'Taught humanity the craft of writing.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'عَلَّمَ', transliteration: 'ʿallama', gloss: 'taught' },
          { arabic: 'بِالْقَلَمِ', transliteration: 'bi-l-qalam', gloss: 'by the pen' },
        ],
      },
      {
        number: 5,
        arabic: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ',
        transliteration: 'ʿAllama al-insāna mā lam yaʿlam',
        translations: {
          sahih: 'Taught man that which he knew not.',
          haleem: 'who taught man what he did not know.',
        },
        tafsir: {
          ibn_kathir: 'Every branch of human discovery begins in ignorance and progresses only through divine instruction and reason.',
          jalalayn: 'Led humanity from unknowing to illumination.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'عَلَّمَ', transliteration: 'ʿallama', gloss: 'Taught' },
          { arabic: 'الْإِنسَانَ', transliteration: 'al-insān', gloss: 'humanity' },
          { arabic: 'مَا لَمْ يَعْلَمْ', transliteration: 'mā lam yaʿlam', gloss: 'what it knew not' },
        ],
      },
    ],
  },
  {
    number: 103,
    nameArabic: 'العصر',
    nameTranslit: 'Al-Asr',
    nameEnglish: 'The Declining Day',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 3,
    themeSummary:
      'Imam al-Shafiʿi famously remarked that if people reflected deeply on this brief chapter alone, it would suffice them—distilling human flourishing into faith, good action, mutual counsel in truth, and steadfast patience.',
    ayahs: [
      {
        number: 1,
        arabic: 'وَالْعَصْرِ',
        transliteration: 'Wa al-ʿaṣr',
        translations: {
          sahih: 'By time,',
          haleem: 'By the declining day,',
        },
        tafsir: {
          ibn_kathir:
            'An oath by passing time (al-ʿaṣr)—the fleeting capital of every human life, reminiscent of the late afternoon hour before sunset.',
          jalalayn: 'By the course of time and the afternoon period.',
        },
        durationSeconds: 3,
        words: [{ arabic: 'وَالْعَصْرِ', transliteration: 'wa al-ʿaṣr', gloss: 'By time / declining day', rootId: 'a-s-r' }],
      },
      {
        number: 2,
        arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
        transliteration: 'Inna al-insāna la-fī khusr',
        translations: {
          sahih: 'Indeed, mankind is in loss,',
          haleem: 'man is [deep] in loss,',
        },
        tafsir: {
          ibn_kathir: 'Like a merchant whose finite hours slip away without lasting profit—unless anchored in what follows.',
          jalalayn: 'Humanity stands in manifest depletion of its lifespan.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'الْإِنسَانَ', transliteration: 'al-insān', gloss: 'humanity' },
          { arabic: 'لَفِي خُسْرٍ', transliteration: 'la-fī khusr', gloss: 'is surely in loss' },
        ],
      },
      {
        number: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        transliteration: 'Illā alladhīna āmanū wa ʿamilū al-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-l-ṣabr',
        translations: {
          sahih:
            'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
          haleem:
            'except for those who believe, do good deeds, urge one another to the truth, and urge one another to steadfastness.',
        },
        tafsir: {
          ibn_kathir:
            'Four intertwined pillars rescue human time from loss: inner conviction (īmān), ethical action (ʿamal ṣāliḥ), and a supportive community that counsels one another gently toward truth and endurance.',
          jalalayn: 'Those spared from loss pair faith and virtue with mutual encouragement in truth and perseverance.',
        },
        durationSeconds: 8,
        words: [
          { arabic: 'آمَنُوا', transliteration: 'āmanū', gloss: 'believed' },
          { arabic: 'وَعَمِلُوا الصَّالِحَاتِ', transliteration: 'wa ʿamilū al-ṣāliḥāt', gloss: 'and did righteous deeds' },
          { arabic: 'وَتَوَاصَوْا بِالْحَقِّ', transliteration: 'wa tawāṣaw bi-l-ḥaqq', gloss: 'counseled each other to truth' },
          { arabic: 'بِالصَّبْرِ', transliteration: 'bi-l-ṣabr', gloss: 'to patience / steadfastness' },
        ],
      },
    ],
  },
  {
    number: 112,
    nameArabic: 'الإخلاص',
    nameTranslit: 'Al-Ikhlas',
    nameEnglish: 'The Sincerity',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 4,
    themeSummary:
      'The purest distillation of Islamic monotheism (Tawḥīd)—traditionally valued as one-third of the Quran in thematic weight for defining God’s absolute unity and transcendence.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        transliteration: 'Qul huwa Allāhu Aḥad',
        translations: {
          sahih: 'Say, "He is Allah, [who is] One,',
          haleem: 'Say, ‘He is God the One,',
        },
        tafsir: {
          ibn_kathir:
            'Revealed when seekers asked the Prophet to describe the lineage of his Lord. Aḥad affirms unique, indivisible singularity: He has no partner, equal, or counterpart.',
          jalalayn: 'Declare: He is God, One and Indivisible.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'قُلْ', transliteration: 'qul', gloss: 'Say' },
          { arabic: 'اللَّهُ', transliteration: 'Allāhu', gloss: 'Allah' },
          { arabic: 'أَحَدٌ', transliteration: 'Aḥad', gloss: 'The One', rootId: 'w-h-d' },
        ],
      },
      {
        number: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        transliteration: 'Allāhu al-Ṣamad',
        translations: {
          sahih: 'Allah, the Eternal Refuge.',
          haleem: 'God the eternal.',
        },
        tafsir: {
          ibn_kathir:
            'Al-Ṣamad is the Master toward whom all creatures turn in their needs, while He Himself stands in need of nothing.',
          jalalayn: 'The Absolute Refuge sought by every created being.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'اللَّهُ', transliteration: 'Allāhu', gloss: 'Allah' },
          { arabic: 'الصَّمَدُ', transliteration: 'al-Ṣamad', gloss: 'the Eternal Refuge', rootId: 's-m-d' },
        ],
      },
      {
        number: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        transliteration: 'Lam yalid wa lam yūlad',
        translations: {
          sahih: 'He neither begets nor is born,',
          haleem: 'He begot no one nor was He begotten.',
        },
        tafsir: {
          ibn_kathir: 'Refutes any notion of biological descent or originated existence—God transcends birth, aging, and succession.',
          jalalayn: 'He has no offspring and no parent.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'لَمْ يَلِدْ', transliteration: 'lam yalid', gloss: 'He neither begets' },
          { arabic: 'وَلَمْ يُولَدْ', transliteration: 'wa lam yūlad', gloss: 'nor was He born' },
        ],
      },
      {
        number: 4,
        arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        transliteration: 'Wa lam yakun lahu kufuwan aḥad',
        translations: {
          sahih: 'Nor is there to Him any equivalent."',
          haleem: 'No one is comparable to Him.’',
        },
        tafsir: {
          ibn_kathir: 'Concludes with complete incomparability: nothing in creation resembles Him in essence, attributes, or majesty.',
          jalalayn: 'There is none equal or comparable to Him.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'كُفُوًا', transliteration: 'kufuwan', gloss: 'equivalent / comparable' },
          { arabic: 'أَحَدٌ', transliteration: 'aḥad', gloss: 'anyone', rootId: 'w-h-d' },
        ],
      },
    ],
  },
  {
    number: 113,
    nameArabic: 'الفلق',
    nameTranslit: 'Al-Falaq',
    nameEnglish: 'The Daybreak',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 5,
    themeSummary:
      'First of the twin chapters of refuge (al-Muʿawwidhatayn), turning to the Lord who splits open the dawn for protection against external darkness and harm.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        transliteration: 'Qul aʿūdhu bi-Rabbi al-falaq',
        translations: {
          sahih: 'Say, "I seek refuge in the Lord of daybreak',
          haleem: 'Say [Prophet], ‘I seek refuge with the Lord of daybreak',
        },
        tafsir: {
          ibn_kathir:
            'Al-falaq literally means the cleaving of dawn through the darkness of night—symbolizing that the same Lord who breaks light out of night can disperse any outward adversity.',
          jalalayn: 'I take shelter with the Lord who splits open the morning light.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'أَعُوذُ', transliteration: 'aʿūdhu', gloss: 'I seek refuge' },
          { arabic: 'بِرَبِّ', transliteration: 'bi-Rabbi', gloss: 'in the Lord', rootId: 'r-b-b' },
          { arabic: 'الْفَلَقِ', transliteration: 'al-falaq', gloss: 'of daybreak' },
        ],
      },
      {
        number: 2,
        arabic: 'مِن شَرِّ مَا خَلَقَ',
        transliteration: 'Min sharri mā khalaq',
        translations: {
          sahih: 'From the evil of that which He created',
          haleem: 'against the harm in what He has created,',
        },
        tafsir: {
          ibn_kathir: 'Seeks protection from harm arising anywhere among created beings.',
          jalalayn: 'From every harm within creation.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'مِن شَرِّ', transliteration: 'min sharri', gloss: 'from the harm' },
          { arabic: 'مَا خَلَقَ', transliteration: 'mā khalaq', gloss: 'of what He created' },
        ],
      },
      {
        number: 3,
        arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        transliteration: 'Wa min sharri ghāsiqin idhā waqab',
        translations: {
          sahih: 'And from the evil of darkness when it settles',
          haleem: 'the harm in the night when darkness gathers,',
        },
        tafsir: {
          ibn_kathir: 'Deep night when visibility fades and hidden dangers stir.',
          jalalayn: 'From the perils of enveloping night.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'غَاسِقٍ', transliteration: 'ghāsiqin', gloss: 'darkness / night' },
          { arabic: 'وَقَبَ', transliteration: 'waqab', gloss: 'it settles deeply' },
        ],
      },
      {
        number: 4,
        arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        transliteration: 'Wa min sharri al-naffāthāti fī al-ʿuqad',
        translations: {
          sahih: 'And from the evil of the blowers in knots',
          haleem: 'the harm in witches when they blow on knots,',
        },
        tafsir: {
          ibn_kathir: 'Refers to deceptive practices and hidden malice intended to sever ties or unsettle hearts.',
          jalalayn: 'From occult ill-intent and malice.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'النَّفَّاثَاتِ', transliteration: 'al-naffāthāt', gloss: 'those blowing' },
          { arabic: 'الْعُقَدِ', transliteration: 'al-ʿuqad', gloss: 'in knots' },
        ],
      },
      {
        number: 5,
        arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        transliteration: 'Wa min sharri ḥāsidin idhā ḥasad',
        translations: {
          sahih: 'And from the evil of an envier when he envies."',
          haleem: 'the harm in the envier when he envies.’',
        },
        tafsir: {
          ibn_kathir: 'Specifies "when he envies"—meaning when inner resentment translates into harmful speech or action.',
          jalalayn: 'From envy once it manifests in harm.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'حَاسِدٍ', transliteration: 'ḥāsidin', gloss: 'an envier' },
          { arabic: 'حَسَدَ', transliteration: 'ḥasad', gloss: 'he envies' },
        ],
      },
    ],
  },
  {
    number: 114,
    nameArabic: 'الناس',
    nameTranslit: 'An-Nas',
    nameEnglish: 'Mankind',
    revelation: 'Makki',
    juz: 30,
    totalAyahsInSurah: 6,
    themeSummary:
      'The concluding chapter of the Quran—invoking three majestic titles of God (Lord, Sovereign, Deity of Mankind) as sanctuary against subtle inner whispering.',
    ayahs: [
      {
        number: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        transliteration: 'Qul aʿūdhu bi-Rabbi al-nās',
        translations: {
          sahih: 'Say, "I seek refuge in the Lord of mankind,',
          haleem: 'Say, ‘I seek refuge with the Lord of people,',
        },
        tafsir: {
          ibn_kathir:
            'While Al-Falaq invoked one attribute of God against outward harms, An-Nas invokes three—Lord, King, and God—because safeguarding the interior heart from doubt and whispering requires the deepest spiritual fortification.',
          jalalayn: 'I seek protection in the Sustainer and Educator of humankind.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'أَعُوذُ', transliteration: 'aʿūdhu', gloss: 'I seek refuge' },
          { arabic: 'بِرَبِّ', transliteration: 'bi-Rabbi', gloss: 'in the Lord', rootId: 'r-b-b' },
          { arabic: 'النَّاسِ', transliteration: 'al-nās', gloss: 'of mankind' },
        ],
      },
      {
        number: 2,
        arabic: 'مَلِكِ النَّاسِ',
        transliteration: 'Maliki al-nās',
        translations: {
          sahih: 'The Sovereign of mankind,',
          haleem: 'the Controller of people,',
        },
        tafsir: {
          ibn_kathir: 'All earthly rulers remain subjects under His true kingship.',
          jalalayn: 'The absolute Sovereign over all people.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'مَلِكِ', transliteration: 'Maliki', gloss: 'The Sovereign', rootId: 'm-l-k' },
          { arabic: 'النَّاسِ', transliteration: 'al-nās', gloss: 'of mankind' },
        ],
      },
      {
        number: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        transliteration: 'Ilāhi al-nās',
        translations: {
          sahih: 'The God of mankind,',
          haleem: 'the God of people,',
        },
        tafsir: {
          ibn_kathir: 'The sole One worthy of ultimate devotion and trust.',
          jalalayn: 'The true Deity worshipped by humankind.',
        },
        durationSeconds: 3,
        words: [
          { arabic: 'إِلَٰهِ', transliteration: 'Ilāhi', gloss: 'The God' },
          { arabic: 'النَّاسِ', transliteration: 'al-nās', gloss: 'of mankind' },
        ],
      },
      {
        number: 4,
        arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        transliteration: 'Min sharri al-waswāsi al-khannās',
        translations: {
          sahih: 'From the evil of the retreating whisperer —',
          haleem: 'against the harm of the slinking whisperer —',
        },
        tafsir: {
          ibn_kathir:
            'Al-khannās describes one who whispers when the heart is heedless, yet retreats and shrinks back the moment God is remembered.',
          jalalayn: 'The insidious whisperer who recoils at remembrance of God.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'الْوَسْوَاسِ', transliteration: 'al-waswās', gloss: 'the whisperer' },
          { arabic: 'الْخَنَّاسِ', transliteration: 'al-khannās', gloss: 'who retreats' },
        ],
      },
      {
        number: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        transliteration: 'Alladhī yuwaswisu fī ṣudūri al-nās',
        translations: {
          sahih: 'Who whispers [evil] into the breasts of mankind —',
          haleem: 'who whispers into the hearts of people —',
        },
        tafsir: {
          ibn_kathir: 'Targets the inner consciousness (ṣudūr), prompting anxiety, vanity, or despair.',
          jalalayn: 'Insinuates distracting thoughts into human hearts.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'يُوَسْوِسُ', transliteration: 'yuwaswisu', gloss: 'whispers' },
          { arabic: 'صُدُورِ', transliteration: 'ṣudūri', gloss: 'breasts / hearts' },
        ],
      },
      {
        number: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Mina al-jinnati wa al-nās',
        translations: {
          sahih: 'From among the jinn and mankind."',
          haleem: 'whether they be jinn or people.’',
        },
        tafsir: {
          ibn_kathir:
            'Concludes the entire Quran by reminding the seeker that misleading suggestions come both from unseen forces and from human voices—making remembrance of God a lifelong anchor.',
          jalalayn: 'Both unseen spirits and human tempters.',
        },
        durationSeconds: 4,
        words: [
          { arabic: 'الْجِنَّةِ', transliteration: 'al-jinnati', gloss: 'the jinn' },
          { arabic: 'وَالنَّاسِ', transliteration: 'wa al-nās', gloss: 'and mankind' },
        ],
      },
    ],
  },
];

export const THEMATIC_PATHS: ThematicPath[] = [
  {
    id: 'path-mercy',
    title: 'The Architecture of Divine Mercy',
    subtitle: 'Al-Fatihah (1:1–3) & Ar-Rahman (55:1–13)',
    surahNumber: 55,
    ayahNumber: 1,
    durationLabel: '6 Verses · Roots r-ḥ-m & q-r-ʾ',
  },
  {
    id: 'path-throne',
    title: 'The Throne Verse & Cosmic Vigilance',
    subtitle: 'Al-Baqarah (2:255–256)',
    surahNumber: 2,
    ayahNumber: 255,
    durationLabel: 'Ayat al-Kursi · Classical Tafsir',
  },
  {
    id: 'path-consolation',
    title: 'Solace in Adversity & Knowledge',
    subtitle: 'Ash-Sharh (94:1–8) & Al-Alaq (96:1–5)',
    surahNumber: 94,
    ayahNumber: 1,
    durationLabel: '8 Verses · Makki Consolation',
  },
  {
    id: 'path-sanctuary',
    title: 'The Three Chapters of Tawhid & Refuge',
    subtitle: 'Al-Ikhlas, Al-Falaq & An-Nas (112–114)',
    surahNumber: 112,
    ayahNumber: 1,
    durationLabel: '15 Verses · Juz Amma',
  },
];
