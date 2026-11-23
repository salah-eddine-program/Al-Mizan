---
name: Prestigious Islamic Knowledge Portal
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#404944'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#707974'
  outline-variant: '#c0c9c3'
  surface-tint: '#316855'
  primary: '#003627'
  on-primary: '#ffffff'
  primary-container: '#134e3c'
  on-primary-container: '#86bea7'
  inverse-primary: '#99d2bb'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#27312e'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d4744'
  on-tertiary-container: '#abb5b0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b5efd6'
  primary-fixed-dim: '#99d2bb'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#16503e'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#dbe5e0'
  tertiary-fixed-dim: '#bfc9c4'
  on-tertiary-fixed: '#141d1b'
  on-tertiary-fixed-variant: '#3f4945'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 60px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 42px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The visual narrative bridges timeless Islamic scholarly heritage with contemporary, distraction-free digital design. Built for seekers of knowledge, academics, and readers engaging with the Holy Quran and classical texts, the interface conveys reverence, quiet dignity, and intellectual depth.

### Visual Style
The aesthetic adopts a refined editorial and architectural approach:
- **Sacred Restraint**: Avoid loud, jarring interactions; prioritize breathing room, contemplative pacing, and deliberate white space reminiscent of classical illuminated manuscripts.
- **Modern Scholarly Atmosphere**: Balanced between parchment warmth and crisp modern legibility, avoiding gimmicks while elevating calligraphic and typographic proportions.
- **Subtle Ornamentation**: Restrained Islamic geometric motifs (*girih*) and hairline gold dividers used strictly to delineate major sections or sacred verse markers, never as noisy backdrop textures.

## Colors

The palette draws directly from classical manuscript illumination and traditional architecture:

- **Primary (`#134E3C`)**: Deep emerald green, establishing institutional gravity, spiritual focus, and high-contrast anchors for primary actions and titles.
- **Secondary (`#C5A059`)**: Noble muted gold, reserved for ceremonial markers, active verse highlights, decorative rules, and premium scholarly badging.
- **Tertiary (`#E6F0EB`)**: Soft sage tint, providing gentle surface distinction for active audio players, reading panels, and selected text blocks without causing visual strain.
- **Neutral (`#1E293B` / `#0F172A`)**: Deep slate for high-readability body copy, preserving crispness without the harsh contrast of pure black.
- **Backgrounds (`#FBF9F4` / `#F4EFE6` / `#FFFFFF`)**: Warm parchment canvas layers that soften glare during extended reading sessions while retaining clean optical separation.

## Typography

The typographic hierarchy accommodates dual-script excellence, balancing dignified English editorial headings with precise scholarly readability.

### Rules and Guidelines
- **Latin Display & Headlines**: `Noto Serif` brings an academic, literary poise to English headings, surah names, commentary titles, and analytical headers.
- **UI & Analytical Body**: `Source Sans 3` delivers clean, functional neutral support for translations, commentaries (*tafsir* notes), metadata, and interface controls.
- **Arabic Companion Pairings**: For the sacred Arabic Quranic script, fallbacks must prioritize high-definition Naskh rendering (`Amiri` or `Scheherazade New`) with generous vertical line heights (minimum 2.2x to 2.6x) to avoid diacritic (*tashkeel*) collision. UI controls in Arabic pair with clean modern grotesque counterparts (`Cairo` or `Noto Sans Arabic`).
- **Pacing**: Long-form scholarly reading text blocks should never exceed 70 characters per line.

## Layout & Spacing

The layout employs a responsive 12-column grid system built to natively support right-to-left (RTL) reading flows as well as standard LTR configurations.

### Grid & Breakpoints
- **Desktop (1200px+)**: 12 columns, `margin-lg` (64px) outer boundaries, `gutter` (24px). Primary reading panel occupies 8 central columns with a 4-column contextual drawer for commentary, root word lexicons, and reciter audio controls.
- **Tablet (768px – 1199px)**: 8 columns, `margin` (32px), `gutter` (24px). Side drawers collapse into accessible bottom sheets or overlay panels.
- **Mobile (Below 768px)**: 4 columns, `margin-sm` (16px), `gutter-sm` (16px). Stacked vertical flow prioritizing undistracted single-column verse recitation.

### RTL Flow & Spacing Rhythm
- Margin and padding tokens flip directionally (`space-start` and `space-end`) to sustain natural visual flow from right to left in Arabic contexts.
- Structural breathing room is deliberate: sacred verse containers maintain generous internal vertical padding (`space-xl`) to encourage unhurried reading and reflection.

## Elevation & Depth

Visual hierarchy favors layered manuscript parchment and refined ambient light over heavy drop shadows.

### Atmospheric Tiers
- **Canvas Base**: Surface rendered in warm parchment (`#FBF9F4`), completely grounded.
- **Container Level 1 (Verses & Cards)**: Crisp white (`#FFFFFF`) or parchment-light (`#F4EFE6`) surface bordered with a 1px hairline rule in muted gold tint (`rgba(197, 160, 89, 0.25)`) and an ambient shadow: `0 2px 8px -2px rgba(19, 78, 60, 0.04), 0 1px 4px -1px rgba(30, 41, 59, 0.03)`.
- **Level 2 (Active Panels & Tafsir Overlays)**: Enhanced ambient elevation: `0 12px 28px -6px rgba(15, 56, 44, 0.08), 0 4px 12px -2px rgba(30, 41, 59, 0.04)`.
- **Level 3 (Audio Players & Modal Navigations)**: Floating docked bar with subtle emerald-tinted backdrop blur (`backdrop-filter: blur(12px)`) and a subtle top gold border divider.

## Shapes

The design system uses a balanced corner radius of `roundedness: 2` (base 0.5rem / 8px; standard cards and containers at 1rem / 16px; featured modules at 1.5rem / 24px). 

This moderate curvature softens the interface, blending contemporary software aesthetics with the smooth, curved geometry of Islamic arches and architectural niches (*mihrab*), without slipping into overly informal pill forms.

## Components

### Buttons
- **Primary**: Deep emerald background (`#134E3C`), crisp white text, 0.5rem radius, padded with `space-sm` vertically and `space-lg` horizontally. Hover transitions to `#0F382C` with subtle gold ring focus indication.
- **Secondary (Noble)**: Crisp parchment background, hairline gold border (`#C5A059`), dark slate text. Hover brings a soft sage fill (`#E6F0EB`).
- **Tertiary / Text**: Deep emerald text with an understated underline on hover; no background container.

### Chips & Badges
- **Surah & Ayah Indicators**: Rounded-full or 0.5rem radius badges using `#E6F0EB` fill with `#134E3C` text for regular markers. Special revelation tags (Makki / Madani) use a muted gold wash (`rgba(197, 160, 89, 0.15)`) with `#8C6B28` text.

### Quranic Verse Cards (*Ayah* Containers)
- Surface in pure `#FFFFFF` over `#FBF9F4` canvas.
- Framed by a subtle gold hairline outline (`rgba(197, 160, 89, 0.2)`).
- Top bar contains verse number badge, quick audio playback action, and copy/bookmark triggers.
- Central zone holds the Arabic text in generous typography, followed below by a fine separator and translated commentary.
- Active recitation state applies a soft tertiary sage background (`#E6F0EB`) with an emerald left/right indicator bar.

### Input Fields & Search Bars
- Background in `#FFFFFF` with slate neutral border (`#E2E8F0`).
- Generous internal padding (`space-md`) accommodating Arabic search glyphs and English text.
- Focus state switches border to `#134E3C` with an ambient ring: `0 0 0 3px rgba(19, 78, 60, 0.15)`.

### Checkboxes & Radio Controls
- Base control has a 0.25rem radius (checkbox) or circle (radio), framed in `#C5A059`.
- Checked state fills with `#134E3C` displaying a sharp white interior glyph.

### Audio Sticky Reciter Bar
- Docked persistently to the viewport bottom.
- Frosted warm cream background with a 1px gold hairline top border.
- Waveform scrubber styled in muted emerald with a noble gold elapsed progress indicator.