# Clicks Strategic Ecosystems — product context

## Register

**brand** — Marketing site (Hebrew-first landing + supporting pages). Design is the product; craft and trust matter as much as copy.

## Users & purpose

**Primary:** Public-sector, municipal, regional-cluster, and nonprofit decision-makers in Israel evaluating monday.com operating ecosystems.

**Job to be done:** Decide whether to book a discovery call. They need 3-second clarity (what / for whom / next step), proof the systems are real, and procurement signals (accessibility, RTL, partner status).

**Emotions to evoke:** Confidence, boutique warmth, operational seriousness (not startup playfulness, not mega-integrator coldness).

## Brand personality (3 words)

Precise · Warm · Proven

## Competitive landscape (Israel)

See **`docs/COMPETITORS_IL.md`** — monday.com partner directory (11 IL partners: Boost IL, Unitask, Abra-it, matrix DevOps, etc.). Clicks wedge: public/civic boutique + show-the-product + operate (TSM), not generic implementation.

## References

- Peax — dual-axis navigation clarity (by industry / category), sector routing
- Brij — editorial section labels, method storytelling (Discover → Build → Bridge)
- Linear / Notion — product UI framed in device/window chrome (screenshot-as-proof pattern)
- Existing Clicks tokens — blue→violet gradient, Figtree, violet-tinted neutrals (`src/styles/design-system.css`, `MondayCMS/DESIGN.md`)

## Anti-references

- Elementor-template navy consultancies, generic “enterprise digital transformation”
- Purple full-bleed SaaS hero washes, gradient text, nested cards, side-stripe alerts
- Carousel-heavy homepages, CTA sprawl (multiple competing above-fold CTAs)
- Stock-photo-only heroes, vanity logo walls without metrics or product proof
- AI-slop: cream paper backgrounds, buzzword soup, em-dash marketing cadence

## Strategic design principles

1. **Show the product** — Real or high-fidelity monday / FlowGram / TSM mocks; #1 differentiator vs competitors.
2. **One primary CTA** — Google Calendar booking; WhatsApp and form are secondary.
3. **RTL-first** — Logical properties; HE default; EN mirror via `/en/`.
4. **Restrained motion** — Signature ecosystem diagram + scroll reveals; respect `prefers-reduced-motion`.
5. **Procurement-ready** — Accessibility statement, privacy, VAT, partner badge without over-claiming tier.

## Accessibility

WCAG 2.1 AA target; Israeli Standard 5568; skip link; keyboard nav; reduced motion; contrast on muted text (avoid washed-out gray on tinted bg).

## Open decisions (founder)

- Real Google Calendar `BOOKING_URL`
- monday partner tier confirmation for badge copy
- Client logos, case metrics, founder headshots (publication consent)
