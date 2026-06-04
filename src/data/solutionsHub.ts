/**
 * Solutions hub — offer cards (logos) + sector slugs from sectorPages.
 */
import type { OfferKey } from '../components/product-logos/types';
import type { Locale } from '../i18n';
import { offerPagePath } from './productPages';

export interface HubOfferDef {
  key: OfferKey;
  href: string;
  label: Record<Locale, string>;
  desc: Record<Locale, string>;
}

export const HUB_PRODUCTS: HubOfferDef[] = [
  {
    key: 'cms',
    href: '/products/monday-cms',
    label: { he: 'Clicks Monday CMS', en: 'Clicks Monday CMS' },
    desc: {
      he: 'ניהול תוכן וסנכרון קטלוג מלוחות monday.',
      en: 'Content and catalog sync from monday boards.',
    },
  },
  {
    key: 'gis',
    href: '/products/monday-gis',
    label: { he: 'Clicks Monday GIS', en: 'Clicks Monday GIS' },
    desc: {
      he: 'סנכרון ArcGIS ↔ monday והטמעת מפות בלוחות.',
      en: 'ArcGIS ↔ monday sync and maps in boards.',
    },
  },
  {
    key: 'ready',
    href: offerPagePath('clicks-deploy-ready'),
    label: { he: 'Clicks deploy ready', en: 'Clicks deploy ready' },
    desc: {
      he: 'CRM 360, ניהול תיקים, SLA ודשבורדים מוכנים.',
      en: 'CRM 360, case management, SLA and dashboards.',
    },
  },
];

export const HUB_SERVICES: HubOfferDef[] = [
  {
    key: 'flowgram',
    href: offerPagePath('flowgram'),
    label: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
    desc: {
      he: 'הנדסת תהליכים, אוטומציות ואינטגרציות עומק.',
      en: 'Process planning, automations and deep integrations.',
    },
  },
  {
    key: 'tsm',
    href: offerPagePath('clicks-tsm'),
    label: { he: 'Clicks TSM', en: 'Clicks TSM' },
    desc: {
      he: 'תחזוקה, ITSM, ממשל ומיצוי ROI טכנולוגי.',
      en: 'Support, ITSM, governance and tech ROI.',
    },
  },
  {
    key: 'crm',
    href: offerPagePath('crm-connections'),
    label: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
    desc: {
      he: 'WhatsApp, Meta ואימייל לקליטת לידים על monday.',
      en: 'WhatsApp, Meta and email wired into monday.',
    },
  },
  {
    key: 'solutions',
    href: offerPagePath('clicks-solutions'),
    label: { he: 'Clicks Solutions', en: 'Clicks Solutions' },
    desc: {
      he: 'פיתוח מותאם על monday — מאפיון ועד תחזוקה.',
      en: 'Bespoke monday builds from discovery through care.',
    },
  },
];

export const HUB_SECTOR_SLUGS = [
  'public-sector',
  'local-authorities',
  'regional-clusters',
  'nonprofits',
  'manufacturing',
  'high-tech',
] as const;

export const SOLUTIONS_HUB_COPY = {
  he: {
    title: 'פתרונות',
    description:
      'מוצרים, פיתוחים מותאמים, חבילות להטמעה ומגזרים — משפחת Clicks על monday.com.',
    eyebrow: 'פתרונות',
    h1: 'מוצרים, שירותים ומגזרים',
    lead: 'אותם לוגואים ואותה שפה כמו בדף הבית — כאן מגיעים לדף המלא של כל מוצר, שירות או מגזר.',
    productsTitle: 'מוצרים',
    productsLead: 'מוצרים מוכנים לשוק — CMS, GIS ו-deploy ready.',
    servicesTitle: 'פיתוחים מותאמים',
    servicesLead: 'FlowGram, TSM, CRM Connections ו-Solutions.',
    sectorsTitle: 'לפי מגזר',
    sectorsLead: 'דפים ממוקדים לפי סוג ארגון — עם כאב, הוכחה ומוצרים רלוונטיים.',
    explore: 'גלו עוד',
    sectorCta: 'למגזר',
    phaseNote: 'לא בטוחים מה מתאים? קבעו שיחת ייעוץ — נמפה אתכם למסלול הנכון.',
    home: 'לדף הבית',
    cta: 'לקביעת שיחת ייעוץ',
  },
  en: {
    title: 'Solutions',
    description:
      'Products, custom developments, ready ecosystems and sectors — the Clicks family on monday.com.',
    eyebrow: 'Solutions',
    h1: 'Products, services and sectors',
    lead: 'Same lockups as the homepage — each card opens the full product, service or sector page.',
    productsTitle: 'Products',
    productsLead: 'Shipped products — CMS, GIS and deploy ready.',
    servicesTitle: 'Custom developments',
    servicesLead: 'FlowGram, TSM, CRM Connections and Solutions.',
    sectorsTitle: 'By sector',
    sectorsLead: 'Focused pages by organization type — pains, proof and relevant offers.',
    explore: 'Learn more',
    sectorCta: 'By sector',
    phaseNote: 'Not sure what fits? Book a call — we will map you to the right path.',
    home: 'Back to home',
    cta: 'Book a discovery call',
  },
} as const;
