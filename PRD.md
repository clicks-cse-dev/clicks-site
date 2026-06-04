# PRD — Clicks Strategic Ecosystems Website

**Status:** Draft for founder review (do not build yet)
**Date:** 2026-06-04
**Authors:** Amit Aizenkot (+ Claude)
**Repo:** `/Users/amitaizenkot/code/clicks-site` (greenfield)

### Decisions locked (2026-06-04)
- **Languages:** Hebrew + English (HE default / RTL, EN switch). Arabic dropped from v1.
- **Framework:** Astro + React islands.
- **Primary CTA:** **Google Calendar appointment-scheduling link** (native Google booking page, e.g. `calendar.app.google/…`), with WhatsApp `054-694-5131` + a contact form as secondary paths.
- **Typography:** Figtree everywhere (default — answer came through ambiguous; pending founder confirmation, optional Bricolage Grotesque display).

---

## 0. How this PRD was built

This document is grounded in real research, not assumptions:

- **Competitor analysis** — 9 competitor sites deep-analyzed (from the `#competitors` Slack channel): Brij Labs/ONE City, AlterNet, Meser, OneCity, Toffu AI, Peax, Tryve, Abra, CarbonWeb.
- **Brand & content** — extracted from Google Drive (logo deck, proposals 339/341, GIS doc, meeting summaries) and from the `MondayCMS` / `MondayGIS` codebases (`design-system.css`, `DESIGN.md`, logo assets, reusable components).
- **Company data** — pulled from the `clicks-cse` monday.com account (clients, projects, products, pipeline) to ground the Products/Sectors/Case-Study content.

---

## 1. Purpose & goals

Build the public marketing website for **Clicks Strategic Ecosystems (CSE)** — a Hebrew-first, boutique consultancy + product studio that designs, builds and maintains operating ecosystems on **monday.com** for Israel's public, civic and nonprofit sectors.

**Primary goal:** generate qualified discovery calls from public-sector / municipal / regional-cluster / nonprofit decision-makers.

**Secondary goals:**
1. Establish credibility & procurement-readiness (accessibility, references, monday partner status).
2. Showcase the productized family (FlowGram, Clicks TSM, monday-CMS, monday-GIS, CRM Connections).
3. Differentiate as the only player that **shows real working systems** with quantified outcomes.

### Success metrics
- Discovery-call / contact-form submissions per month.
- Scroll depth to the "Show the product" and "Case study" sections.
- WhatsApp click-throughs (`054-694-5131`).
- Lighthouse ≥ 95 (perf/SEO/a11y); accessibility statement compliant with תקן נגישות 5568.

---

## 2. Audience & personas

| Persona | Who | Primary pain | What convinces them |
|---|---|---|---|
| **Gov / authority decision-maker** | National bodies, ministries (e.g. Bedouin Authority) | Fragmented systems, manual bureaucracy, accountability | Procurement-readiness, accessibility, named references, real product |
| **Municipality / local council** | Local-authority ops leads | Resident services, slow processes | "Everyday in one click" outcomes, ROI numbers |
| **Regional cluster / planning body** | Eastern Galilee Cluster, Knowledge Center | Connecting planning ↔ execution teams | monday-GIS, dashboards, integration depth |
| **Nonprofit / civic org** | HaShomer HaTzair, Keren Rashi, volunteering councils | CRM 360, intake, case mgmt, limited budget | Boutique warmth, ready-to-deploy systems, founder access |
| **Ops / IT lead (any of the above)** | Person who'll own the system | Maintenance, SLAs, governance | Clicks TSM / ITSM, support model |

---

## 3. Positioning & messaging

**Positioning statement:**
> Clicks Strategic Ecosystems is the Hebrew-first, boutique consultancy-and-product-studio that **bridges strategy, process and technology at the point of impact** — designing, building and maintaining living operating ecosystems on monday.com for Israel's public, civic and nonprofit sectors.

**The wedge:** between abstract strategy consultancies (AlterNet) and faceless mega-integrators (Abra, Peax) who bury monday.com as one logo among ten — Clicks owns *"strategic ecosystems on monday.com"* end-to-end: **strategy → process engineering (FlowGram) → build (CRM 360, case mgmt, monday-CMS/GIS, CRM Connections) → operate & maintain (Clicks TSM)**.

**Confirmed taglines (from Drive):**
- EN: *"Bridging strategy, process and technology — at the point of impact"*
- HE: *"פתרונות אסטרטגיים למגזר ציבורי מתקדם"*

**Hero headline candidates** (to choose from — bilingual, RTL-aware):
1. EN: *Strategic ecosystems on monday.com — built for Israel's public sector, and kept running.*
   HE: *מערכות הפעלה אסטרטגיות על monday.com — למגזר הציבורי המתקדם.*
2. EN: *We bridge strategy, process and technology — at the point of impact.*
   HE: *מגשרים בין אסטרטגיה, תהליך וטכנולוגיה — בנקודת ההשפעה.*
3. EN (outcome framing): *A permit approved before the coffee gets cold — your processes, in one click, on monday.com.*
   HE: *קפה של בוקר — והבקשה כבר אושרה. התהליכים שלכם, בקליק, על monday.com.*
4. EN: *Not slideware. The operating system for your organization — designed, built, maintained.*
   HE: *לא מצגת. מערכת ההפעלה של הארגון שלכם — באפיון, יישום ותחזוקה.*

---

## 4. Competitive insights → what we do differently

**Steal (table stakes everyone gets right):** Hebrew-first RTL, trust band high on page (logos + stats + partner badge), sticky mega-menu + fat footer, sector-segmented service cards, consultative "let's talk" CTA, accessibility + privacy.

**Beat (whitespace no competitor fills):**
1. **SHOW THE PRODUCT** — real monday.com boards, FlowGram process maps, Clicks TSM dashboards, short looping demo. *No competitor does this.* Our #1 differentiator.
2. **Outcome-led case studies** — named gov/nonprofit stories with before→after metrics + quotes (everyone shows only vanity logos).
3. **Own a brand metaphor** — "strategic ecosystems" + the blue→violet cursor mark (only Peax & Toffu manage an ownable idea).
4. **Premium craft** — bespoke, fast, token-driven design in a field that looks dated (navy-on-white, Elementor templates).
5. **Public-sector trust moat** — RTL + accessibility + procurement-readiness that LTR international partners (Tryve, CarbonWeb) structurally can't match.
6. **Founder-visible warmth** — named, approachable (Sapir + Amit) vs. enterprise-cold mega-integrators.

**Avoid:** carousel-heavy long-scroll, DOM bloat / heavy JS, stock-photo-only imagery, single generic contact form, CTA sprawl, mascot-led playfulness (too unserious for gov).

---

## 5. Brand & visual design system

Inherit the **parent-brand identity** that already exists in the Monday codebases (do not invent a new look). Authoritative source: `MondayCMS/DESIGN.md`.

### Color
- **Signature:** Clicks blue→violet gradient — **indigo `#4316E0` → electric violet `#7B5BF0`** (from `clicks-strategic-ecosystems-logo-trimmed.png`). Used sparingly (~12–18% of chrome).
- **Surfaces:** violet-tinted neutral base `#f2f0f8` / `#faf9fd`, white raised cards (radius 16–22px, soft shadow).
- **Ink:** near-black violet `#1a1528`.
- **Spark accent (very sparing):** coral `#e85d4c` for a single highlight / live-data dot.
- **Semantic:** success `#059669`, warning `#d97706`, danger `#e11d48` (shared across both apps).
- **CTAs:** gradient-filled pill buttons (`linear-gradient(165deg, accent-light → accent)`); focus ring `rgba(82,70,217,0.34)`.
- Each product *section* may briefly nod to its own accent (CMS indigo, GIS sage-teal `#3d8b7e`) but the umbrella stays blue→violet.

### Typography
- **Recommended unifier:** **Figtree** (400–800) for body/UI + headings — already the GIS primary and shared wordmark font; supports **Noto Sans Hebrew / Arabic** for first-class RTL.
- **Optional display:** pair with **Bricolage Grotesque** (700–800, letter-spacing -0.045em) for editorial headlines — *founder to confirm*.
- Type scale ~1.2 ratio via existing `--text-*` tokens.

### Logo & marks
- Header/footer: `CompanyLogo.tsx` + `clicks-strategic-ecosystems-logo-trimmed.png` (blue→violet cursor mark + wordmark) — reuse as-is.
- Products section: theme-driven inline-SVG marks `CseLogo.tsx` (bridge), `ClicksMondayGisLogo.tsx` (map/globe) — recolor automatically via tokens.

### Motion
Restrained & signature — NOT decorative carousels. Subtle scroll-reveal; ONE hero centerpiece (animated "ecosystem" diagram strategy→process→build→operate, or a monday board / FlowGram map animating into place). Respect `prefers-reduced-motion`. **Bans (from DESIGN.md):** no gradient text, no side-stripe alerts, no nested cards, no purple-hero SaaS cliché.

### Imagery
**Lead with real product UI** (the category gap): annotated monday.com boards, FlowGram blueprints, Clicks TSM SLA/ticket views, monday-GIS map-in-board. Support with the connected-nodes "ecosystem" geometry motif + a grayscale Israeli public-sector/nonprofit logo wall. Human photography only in About/founders (need real headshots).

---

## 6. Information architecture (sitemap)

Dual-axis navigation (like Peax): **By solution** AND **By sector**.

```
/                         Home (HE default, bilingual)
/solutions                Overview hub (dual-axis)
/products/flowgram        FlowGram — process engineering
/products/clicks-tsm      Clicks TSM — ITSM / maintenance / governance
/products/monday-cms      monday-CMS
/products/monday-gis      monday-GIS / Clicks GIS
/products/crm-connections Clicks CRM Connections (WhatsApp/Meta/email)
/solutions/monday-ecosystems  CRM 360, work mgmt, case mgmt, ready-to-deploy
/sectors/public-sector
/sectors/local-authorities
/sectors/regional-clusters
/sectors/nonprofits
/cases                    Case studies index
/cases/[slug]             Individual case study (with metrics)
/about                    Company + founders (Sapir, Amit) + methodology
/contact                  Segmented discovery/demo paths + form + WhatsApp
/accessibility            Accessibility statement (תקן נגישות)
/privacy                  Privacy policy
/blog                     (Optional) education-first SEO content
```

**Phase 1 scope:** Home, About, Contact, a single Products overview (+ anchored sections), one Case study, accessibility + privacy. Sector pages and per-product pages in Phase 2.

---

## 7. Landing page — section-by-section spec

1. **Sticky header** — Clicks logo (right, RTL), dual-axis nav (By solution / By sector), HE/EN switch, single gradient "בואו נדבר / Let's talk" CTA pill.
2. **Hero** — crisp value-prop H1 (3-second clarity) + subhead + ONE primary CTA + **monday.com certified-partner badge**; centerpiece = animated ecosystem diagram or real monday board / FlowGram visual (NOT a stock photo).
3. **Trust band** — Israeli public-sector/nonprofit client-logo wall + quantified stats (processes automated, hours saved, SLA/tickets via Clicks TSM, bodies served).
4. **Positioning / "what we do"** — bridging strategy↔process↔technology; the ecosystem metaphor in plain language + "everyday in one click" outcome framing.
5. **The ecosystem / methodology** — 4-step model: **Discover → Architect → Build on monday → Operate (Clicks TSM)**, as an interactive/animated flow.
6. **Products family** — equally-weighted cards w/ theme-driven SVG marks: FlowGram, Clicks TSM, monday-CMS, monday-GIS, Clicks CRM Connections, ready-to-deploy systems.
7. **By sector** — self-routing cards: government, municipalities, regional clusters, nonprofits — each mapped to a concrete pain.
8. **Show-the-product** — real annotated monday.com boards / FlowGram process map / Clicks TSM dashboard + short looping demo *(the category whitespace)*.
9. **Featured case study** — named gov/nonprofit story (e.g. HaShomer HaTzair CRM 360) with before→after metrics + client quote.
10. **Founders / About teaser** — Sapir Hassidim + Amit Aizenkot, boutique founder-visible warmth + "who builds this and how".
11. **Trust & procurement-readiness band** — accessibility (תקן נגישות), privacy, RTL, certified monday.com partner, licensed dealer (עוסק מורשה 211698568).
12. **Closing segmented CTA** — "Book a discovery call" primary (Google Calendar booking link) + "See a demo" / "Read a case study" secondary; WhatsApp + phone.
13. **Fat footer** — sitemap, products, sectors, contact, accessibility statement, privacy policy, social.

---

## 8. Content (sourced from Drive + monday.com)

### Products (confirmed)
| Product | One-liner |
|---|---|
| **FlowGram by Clicks** | Process engineering: workflows, automations & deep system integrations (blueprints, ETL, data hygiene). |
| **Clicks TSM** | Technology & systems management: maintenance, ITSM, control/governance, sustainability, tech ROI. |
| **monday-CMS** | Content management for monday.com — sync catalog/business content, power websites & apps from monday boards. |
| **monday-GIS / Clicks GIS** | Bi-directional monday.com ↔ ArcGIS sync via GeoJSON; GIS embed in board/item views; enhanced Maps. |
| **Clicks CRM Connections** | Multi-channel comms on monday.com (WhatsApp Business, Meta Messenger, email) for lead intake/nurture/routing. |
| **Ready-to-deploy solutions** | Pre-built monday ecosystems (CRM 360, case mgmt, onboarding/SLA, dashboards) for fast rollout. |
| **Clicks WORK** *(2027)* | Change management, org processes, WLB/WFH enablement — show as roadmap/coming-soon (TBD). |

### Sectors served
Public sector / government bodies · local authorities & municipalities · regional planning & development clusters · nonprofits & civic/social orgs · informal-education orgs · GIS-mature planning/tourism-permit bodies.

### Candidate case studies (⚠️ require naming consent + publishable metrics)
- **HaShomer HaTzair** — CRM 360 for the service year (proposal 341).
- **Keren Rashi / Galilee Business Home** — CRM, data, automations, AI (proposal 339).
- **Eastern Galilee Cluster / Knowledge Center** — Tourism/Planning 360.
- **Bedouin Authority** — monday-GIS design partner.

> **⚠️ Confidentiality:** lead statuses, budgets (₪), and pipeline from the monday WBS are **internal-only** and must NOT appear on the site. We will only publish clients/metrics with explicit consent (see Open Questions).

### Contact (from Drive)
Email `sapir@clickcse.com` / `amit@clickcse.com` · phone/WhatsApp `054-694-5131` · website `clickcse.com` · עוסק מורשה 211698568 · addresses: Ahad Ha'am 9, Migdal Shalom, Tel Aviv-Yafo / Eilat 11, Apt 3, Jerusalem (*confirm which to show*).

### Founders (bios inferred — require approval + headshots)
- **Sapir Hassidim** — Founder & Lead Consultant; leads client engagements & authors strategic proposals; Tel Aviv / Jerusalem.
- **Amit Aizenkot** — Co-Founder & Technical/Development Lead; builds the monday.com apps & underlying technology.

---

## 9. Tech stack & architecture

- **Framework:** **Astro + React islands** (confirmed) — best fit for a static, SEO-first, fast-first-paint marketing site; existing in-house React components embed directly as islands.
- **Language:** TypeScript throughout.
- **Styling:** plain **CSS Modules + a `:root` CSS-variable token sheet** ported from `MondayCMS/frontend/src/styles/design-system.css`, re-anchored to the **company blue→violet** gradient (not CMS indigo / GIS teal). **No Tailwind, no @vibe/core** (Vibe is a dense product-UI kit, off-register for marketing).
- **Reuse from existing repos:** `CompanyLogo.tsx` + logo PNG (header/footer); product SVG marks `CseLogo` / `ClicksMondayGisLogo` (Products section); lightweight `ui/` primitives (Button gradient/secondary/link, Card, FormField, Modal); `MondayGIS LandingScreen` as a layout/spacing reference.
- **RTL/i18n:** RTL-first via CSS logical properties + a `LocaleProvider` setting `dir` on `<html>`; Noto Sans Hebrew loaded; **HE default, EN secondary** (Arabic out of v1 scope).
- **Fonts:** Google Fonts `<link>` preconnect pattern from existing `index.html`.
- **Analytics:** add Mixpanel/GA later for marketing analytics (omit `monday-sdk-js` — product-runtime only).
- **Hosting/domain:** `clickcse.com` (TBD); static deploy (Netlify/Vercel/Cloudflare Pages).

---

## 10. Non-functional requirements

- **Accessibility:** WCAG 2.1 AA + Israeli תקן נגישות 5568; published accessibility statement; skip-to-content; keyboard nav; reduced-motion support.
- **Performance:** Lighthouse ≥ 95; lazy-load media; avoid carousel/DOM bloat seen in competitors.
- **SEO:** semantic HTML, per-page meta, hreflang for HE/EN, sitemap.xml, structured data (Organization).
- **Responsive:** mobile-first; RTL + LTR mirrored layouts.
- **Privacy:** cookie consent + privacy policy.

---

## 11. Build phases

| Phase | Deliverable |
|---|---|
| **0. Setup** | Scaffold Astro+TS+React-islands; port `design-system.css` tokens (re-anchored to blue→violet); import `CompanyLogo`; RTL/i18n scaffolding. |
| **1. Landing MVP** | Full bilingual landing page (sections 1–13), Contact, About, one Case study, accessibility + privacy. |
| **2. Depth** | Per-product pages, sector pages, case-study index, blog/SEO. |
| **3. Polish** | Real product visuals + demo loop, motion pass, analytics, Lighthouse/a11y audit, launch on clickcse.com. |

---

## 12. Open questions (need founder decisions before/early in build)

1. **Brand color** — confirm exact parent-brand hex from `לוגו כיוון כללי.pptx`; is `#4316E0 → #7B5BF0` correct or are there official tokens?
2. ~~Typography~~ — *defaulted to Figtree everywhere; confirm or switch to Figtree + Bricolage Grotesque display.*
3. **monday.com partner status** — are you a certified/registered partner, and at what tier? Can we show a badge in the hero (the field's #1 trust lever)?
4. **Case studies** — which clients can be named publicly (logos, quotes, metrics)? What hard numbers can we publish?
5. **Founder assets** — headshots for Sapir & Amit + confirmed role titles + any background to highlight (bios are inferred).
6. **Google Calendar link** — please create a Google Calendar *appointment schedule* and share the booking link (e.g. `calendar.app.google/…`) to wire into the primary CTA. Which calendar/account should own bookings?
7. **Product visuals** — can we get shareable screenshots/recordings of monday boards, FlowGram, Clicks TSM, monday-GIS? Any client-specific visuals to anonymize?
8. **Clicks WORK (2027)** — include as "coming soon / roadmap" now, or omit until launch?
9. **Domain & footer** — launch on `clickcse.com`? Which contact address(es) and physical address (Tel Aviv vs Jerusalem)? Add Mixpanel/GA?
10. **Accessibility/procurement** — need formal תקן נגישות 5568 compliance + published statement from day one for tenders?

**Resolved:** Languages = HE + EN · Framework = Astro + React islands · Primary CTA = Google Calendar booking link.

---

## 13. Out of scope (v1)
- Client login / portal, e-commerce, blog CMS backend (use Astro content collections / Markdown), online payments, the internal monday WBS data, any confidential pipeline/budget content.
