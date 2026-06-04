# BUILD_CONTRACT.md — Clicks Strategic Ecosystems site

Foundation is scaffolded and `npm run build` is **green**. This document tells the Build-phase
agents exactly how to implement each section so everything fits together.

> Authoritative spec: `PRD.md`. Brand bans: `MondayCMS/DESIGN.md` (mirrored below).

---

## 1. Stack

- **Astro 5** (static output) + **@astrojs/react** + react/react-dom 19. Use React only for
  genuine interactivity ("islands"); prefer plain `.astro` for static sections.
- **TypeScript** throughout (`tsconfig.json` extends `astro/tsconfigs/strict`, alias `@/* -> src/*`).
- **Styling:** scoped `<style>` blocks inside each `.astro` component + the global token sheet
  `src/styles/design-system.css` (imported once in `Layout.astro`). **NO Tailwind. NO @vibe/core.**
  Do not add a CSS framework or re-import the design system.
- Scripts: `npm run dev`, `npm run build`, `npm run preview`.

---

## 2. Locale + content convention (READ THIS)

There is **no central translation dictionary.** Every page and component:

1. Takes a `locale: Locale` prop (`Locale = 'he' | 'en'`, from `src/i18n`).
2. Holds its **own inline content object** shaped `{ he: {...}, en: {...} } as const`, then
   `const t = content[locale];` and renders from `t`.

```astro
---
import type { Locale } from '../../i18n';
interface Props { locale: Locale; }
const { locale } = Astro.props;

const content = {
  he: { title: 'מערכות הפעלה אסטרטגיות', cta: 'בואו נדבר' },
  en: { title: 'Strategic ecosystems', cta: "Let's talk" },
} as const;
const t = content[locale];
---
<section class="section hero">
  <div class="container">
    <h1>{t.title}</h1>
    <a class="btn btn-primary" href={BOOKING_URL}>{t.cta}</a>
  </div>
</section>

<style>
  .hero { /* scoped, tokens only */ }
</style>
```

HE is the default locale (RTL). EN is secondary (LTR). Never hardcode `dir`/`lang` — the Layout
sets them from `locale`.

### i18n helpers (`src/i18n/index.ts`)
- `type Locale`, `LOCALES`, `DEFAULT_LOCALE` (`'he'`).
- `dir(locale)` → `'rtl' | 'ltr'`.
- `getLangFromUrl(url)` → `Locale` (reads `/en` prefix).
- `localizedPath(path, locale)` → HE returns the path as-is (`/about`); EN prefixes `/en` (`/en/about`).
  **Always build internal hrefs with `localizedPath`** so links stay correct per locale.
- `alternatePath(url)` → `{ locale, href }` for the language switch (already wired in Header).

### Routing map
`prefixDefaultLocale: false`, so:
- HE page `/x` → file `src/pages/x.astro` (or `src/pages/x/index.astro`).
- EN page `/en/x` → file `src/pages/en/x.astro`.
- Home: `src/pages/index.astro` (HE) and `src/pages/en/index.astro` (EN) — both already exist and
  import all 11 sections in PRD §7 order.

---

## 3. Section components

All live in `src/components/sections/`. Each currently a **minimal stub**
(`<section data-stub="…"></section>`) — **overwrite the stub** with the real implementation.
Keep the filename, keep the `locale: Locale` prop signature. Render order is fixed by the pages:

| # | File | PRD §7 role |
|---|------|-------------|
| 1 | `Hero.astro` | Value-prop H1 + subhead + ONE primary CTA (`BOOKING_URL`) + monday partner badge + ecosystem/real-board centerpiece (NOT stock photo). |
| 2 | `TrustBand.astro` | Grayscale client-logo wall + quantified stats. |
| 3 | `Positioning.astro` | "What we do" — bridging strategy↔process↔technology; "everyday in one click". |
| 4 | `Methodology.astro` | 4-step model: Discover → Architect → Build on monday → Operate (Clicks TSM). |
| 5 | `ProductsFamily.astro` | Equally-weighted product cards: FlowGram, Clicks TSM, monday-CMS, monday-GIS, CRM Connections, ready-to-deploy. |
| 6 | `BySector.astro` | Self-routing sector cards: gov, municipalities, regional clusters, nonprofits. |
| 7 | `ShowProduct.astro` | Real annotated monday boards / FlowGram map / TSM dashboard + demo loop (the differentiator). |
| 8 | `CaseStudy.astro` | Featured named case with before→after metrics + quote. |
| 9 | `FoundersTeaser.astro` | Sapir Hassidim + Amit Aizenkot, boutique warmth. |
| 10 | `ProcurementBand.astro` | Accessibility (תקן נגישות), privacy, RTL, monday partner, licensed dealer (VAT). |
| 11 | `ClosingCTA.astro` | "Book a discovery call" (primary, `BOOKING_URL`) + demo / case secondary + WhatsApp + phone. |

**Props each section receives:** `{ locale: 'he' | 'en' }` — nothing else. Pull contact/brand
constants from `@/config` or relative `../../config`.

Header and Footer are rendered by `Layout.astro`, NOT inside sections. Do not add them per-section.

---

## 4. `src/config.ts` — site constants

Import what you need (`import { BOOKING_URL, PHONE } from '../../config';`). Available exports:

- `COMPANY_NAME` = `'Clicks Strategic Ecosystems'`, `COMPANY_NAME_HE`
- `PHONE` = `'054-694-5131'`, `PHONE_E164` = `'+972546945131'` (for `tel:`)
- `WHATSAPP` = `'https://wa.me/972546945131'`
- `EMAIL_SAPIR` = `'sapir@clickcse.com'`, `EMAIL_AMIT` = `'amit@clickcse.com'`
- `BOOKING_URL` = `'https://calendar.app.google/REPLACE_ME'` — **primary CTA target.** TODO: real link (PRD §12 Q6).
- `VAT` = `'211698568'`, `DOMAIN` = `'clickcse.com'`, `SITE_URL`, `SOCIAL`

---

## 5. Layout & shell

- `src/layouts/Layout.astro` — props `{ locale, title, description? }`. Sets `<html lang dir>`,
  loads Figtree + Noto Sans Hebrew (Google Fonts preconnect), imports the global CSS, renders a
  skip-link, `<Header>`, `<main id="main"><slot/></main>`, `<Footer>`. Wrap every page in it.
- `src/components/Header.astro` — sticky, logo on inline-end, nav, HE/EN switch, one gradient CTA pill, vanilla-JS mobile menu.
- `src/components/Footer.astro` — fat footer (sitemap/contact/legal/social/VAT).
- Logo asset: `src/assets/clicks-logo.png` — import via `astro:assets` `Image` (see Header).

---

## 6. Styling rules (enforced)

- **Tokens only** — colors/space/radii/type/shadows come from `design-system.css` custom
  properties. No raw hex, no magic pixel paddings outside the `--space-*` scale.
- **RTL via logical properties** — use `margin-inline`, `padding-block`, `inset-inline-start`,
  `text-align: start`, etc. Never `left`/`right`/`margin-left`. This makes HE/EN mirror for free.
- Shared utility classes available globally: `.container`, `.section`, `.card`, `.btn`,
  `.btn-primary`, `.btn-secondary`, `.eyebrow`, `.visually-hidden`, `.skip-link`.
- Signature gradient = `var(--gradient-primary)` (indigo `#4316E0` → violet `#7B5BF0`), used
  sparingly (~12–18% of chrome) on CTAs / marks. Focus ring = `var(--focus-ring)`.
- Respect `prefers-reduced-motion` for any animation. Lazy-load heavy media.

### Hard bans (DESIGN.md)
- ❌ **No gradient text** (gradient on fills/marks only, never on type).
- ❌ **No nested cards** — one `.card` per region; use `border-block-start` dividers to subdivide.
- ❌ **No side-stripe alerts** (no left/right colored border bars).
- ❌ **No purple-hero SaaS cliché** — hero leads with real product UI / ecosystem geometry, not a
  full-bleed purple gradient wash.
- ❌ No carousels / DOM bloat / heavy JS / stock-photo-only imagery / CTA sprawl (PRD §4).

---

## 7. Minimal valid section (template)

The stubs already follow this; replace the empty `<section>` body with real markup + scoped styles:

```astro
---
import type { Locale } from '../../i18n';
interface Props { locale: Locale; }
const { locale } = Astro.props;
const content = { he: { /* … */ }, en: { /* … */ } } as const;
const t = content[locale];
---
<section class="section">
  <div class="container">
    <p class="eyebrow">{t.eyebrow}</p>
    <h2>{t.title}</h2>
    <!-- … -->
  </div>
</section>

<style>
  /* scoped, tokens + logical properties only */
</style>
```

---

## 8. Verify before finishing

Run `npm run build` — it must stay green. Both `/` and `/en/` must render. Keep the `locale` prop
contract intact so the pages keep type-checking.
