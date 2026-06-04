/**
 * Phase-2 detail pages (products, sectors, solution hubs).
 * Linked from homepage/footer before full content exists.
 */
import type { Locale } from '../i18n';

export type PhaseTwoKind = 'product' | 'sector' | 'solution';

export interface PhaseTwoEntry {
  slug: string;
  kind: PhaseTwoKind;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
}

export const PRODUCT_PAGES: PhaseTwoEntry[] = [
  {
    slug: 'flowgram',
    kind: 'product',
    titles: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
    descriptions: {
      he: 'הנדסת תהליכים, אוטומציות ואינטגרציות עומק — דף מוצר מפורט בקרוב.',
      en: 'Process engineering, automations and deep integrations — full product page coming soon.',
    },
  },
  {
    slug: 'clicks-tsm',
    kind: 'product',
    titles: { he: 'Clicks TSM', en: 'Clicks TSM' },
    descriptions: {
      he: 'ניהול טכנולוגיה, ITSM וממשל — דף מוצר מפורט בקרוב.',
      en: 'Technology management, ITSM and governance — full product page coming soon.',
    },
  },
  {
    slug: 'monday-cms',
    kind: 'product',
    titles: { he: 'monday-CMS', en: 'monday-CMS' },
    descriptions: {
      he: 'ניהול תוכן וסנכרון קטלוג מלוחות monday — דף מוצר מפורט בקרוב.',
      en: 'Content management and catalog sync from monday boards — full product page coming soon.',
    },
  },
  {
    slug: 'monday-gis',
    kind: 'product',
    titles: { he: 'monday-GIS / Clicks GIS', en: 'monday-GIS / Clicks GIS' },
    descriptions: {
      he: 'סנכרון ArcGIS ↔ monday והטמעת מפות — דף מוצר מפורט בקרוב.',
      en: 'ArcGIS ↔ monday sync and map embeds — full product page coming soon.',
    },
  },
  {
    slug: 'crm-connections',
    kind: 'product',
    titles: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
    descriptions: {
      he: 'WhatsApp, Meta ואימייל על monday — דף מוצר מפורט בקרוב.',
      en: 'WhatsApp, Meta and email on monday.com — full product page coming soon.',
    },
  },
];

export const SECTOR_PAGES: PhaseTwoEntry[] = [
  {
    slug: 'public-sector',
    kind: 'sector',
    titles: { he: 'מגזר ציבורי', en: 'Public sector' },
    descriptions: {
      he: 'פתרונות לגופים ממשלתיים — דף מגזר מפורט בקרוב.',
      en: 'Solutions for government bodies — full sector page coming soon.',
    },
  },
  {
    slug: 'local-authorities',
    kind: 'sector',
    titles: { he: 'רשויות מקומיות', en: 'Local authorities' },
    descriptions: {
      he: 'שירות לתושב ותהליכים מהירים — דף מגזר מפורט בקרוב.',
      en: 'Resident services and faster processes — full sector page coming soon.',
    },
  },
  {
    slug: 'regional-clusters',
    kind: 'sector',
    titles: { he: 'אשכולות אזוריים', en: 'Regional clusters' },
    descriptions: {
      he: 'תכנון, GIS ודשבורדים — דף מגזר מפורט בקרוב.',
      en: 'Planning, GIS and dashboards — full sector page coming soon.',
    },
  },
  {
    slug: 'nonprofits',
    kind: 'sector',
    titles: { he: 'מלכ"רים ועמותות', en: 'Nonprofits' },
    descriptions: {
      he: 'CRM 360 וניהול תיקים — דף מגזר מפורט בקרוב.',
      en: 'CRM 360 and case management — full sector page coming soon.',
    },
  },
  {
    slug: 'manufacturing',
    kind: 'sector',
    titles: { he: 'מפעלים ותעשייה (low-tech)', en: 'Manufacturing & low-tech' },
    descriptions: {
      he: 'ייצור, מלאי ותחזוקה על monday — דף מגזר.',
      en: 'Production, inventory and maintenance on monday — sector page.',
    },
  },
  {
    slug: 'high-tech',
    kind: 'sector',
    titles: { he: 'חברות הייטק', en: 'High-tech companies' },
    descriptions: {
      he: 'תיאום צוותים וכלים על monday — דף מגזר.',
      en: 'Team and tool coordination on monday — sector page.',
    },
  },
];

export const SOLUTION_MONDAY_ECOSYSTEMS: PhaseTwoEntry = {
  slug: 'monday-ecosystems',
  kind: 'solution',
  titles: { he: 'אקוסיסטמים מוכנים על monday', en: 'Ready-to-deploy monday ecosystems' },
  descriptions: {
    he: 'CRM 360, ניהול תיקים, SLA ודשבורדים — דף פתרון מפורט בקרוב.',
    en: 'CRM 360, case management, SLAs and dashboards — full solution page coming soon.',
  },
};

const bySlug = new Map<string, PhaseTwoEntry>();
for (const entry of [...PRODUCT_PAGES, ...SECTOR_PAGES, SOLUTION_MONDAY_ECOSYSTEMS]) {
  bySlug.set(entry.slug, entry);
}

export function getPhaseTwoEntry(slug: string): PhaseTwoEntry | undefined {
  return bySlug.get(slug);
}
