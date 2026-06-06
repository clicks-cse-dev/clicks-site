/**
 * Sector detail pages — expanded from BySector.astro homepage content.
 */
import type { SectorIconKey } from '../components/sector/types';
import type { OfferKey } from '../components/product-logos/types';
import type { Locale } from '../i18n';

export interface SectorProductLink {
  href: string;
  product: OfferKey;
  label: Record<Locale, string>;
}

export interface SectorPageData {
  slug: string;
  icon: SectorIconKey;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  pains: Record<Locale, string>;
  proofs: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
  products: SectorProductLink[];
}

export const SECTOR_PAGE_DATA: SectorPageData[] = [
  {
    slug: 'public-sector',
    icon: 'gov',
    titles: { he: 'מגזר ציבורי', en: 'Public sector' },
    descriptions: {
      he: 'פתרונות לגופים ממשלתיים — מוכנות לרכש, נגישות ומוצר עובד.',
      en: 'Solutions for government bodies — procurement-ready, accessible and proven in production.',
    },
    pains: {
      he: 'מערכות מפוצלות, בירוקרטיה ידנית ושרשרת אחריות לא ברורה.',
      en: 'Fragmented systems, manual bureaucracy and an unclear chain of accountability.',
    },
    proofs: {
      he: 'מוכנות לרכש, נגישות לפי תקן, אסמכתאות בשם אמיתי ומערכת שאפשר לראות.',
      en: 'Procurement-readiness, standards-compliant accessibility, named references and a system you can see.',
    },
    bullets: {
      he: [
        'אפיון וארכיטקטורה לפני בנייה — מדדי הצלחה ברורים.',
        'CRM 360, ניהול תיקים ואוטומציות עם FlowGram.',
        'תחזוקה וממשל דרך Clicks TSM לאורך חיי המערכת.',
      ],
      en: [
        'Discovery and architecture before build — clear success metrics.',
        'CRM 360, case management and automations with FlowGram.',
        'Maintenance and governance via Clicks TSM for the system lifecycle.',
      ],
    },
    products: [
      {
        href: '/services/flowgram',
        product: 'flowgram',
        label: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
      },
      {
        href: '/services/clicks-tsm',
        product: 'tsm',
        label: { he: 'Clicks TSM', en: 'Clicks TSM' },
      },
    ],
  },
  {
    slug: 'local-authorities',
    icon: 'municipality',
    titles: { he: 'רשויות מקומיות', en: 'Local authorities' },
    descriptions: {
      he: 'שירות לתושב עם סטטוס ברור, אחריות ומעקב עד סגירה.',
      en: 'Resident services with clear status, ownership and tracking through closure.',
    },
    pains: {
      he: 'שירות לתושב שנתקע בתהליכים איטיים ובהעברות בין מחלקות.',
      en: 'Resident services stuck in slow processes and hand-offs between departments.',
    },
    proofs: {
      he: 'לוחות פניות, SLA ודוחות שמראים איפה בקשות עומדות ומה נופל בין מחלקות.',
      en: 'Request boards, SLAs and reports that show where requests stand and what falls between departments.',
    },
    bullets: {
      he: [
        'מסע פנייה מקצה לקצה על לוח monday אחד.',
        'CRM Connections לערוצי תושב (WhatsApp, דוא"ל).',
        'דשבורדים למנהלים — זמן טיפול ועומסים.',
      ],
      en: [
        'End-to-end resident journey on one monday board.',
        'CRM Connections for resident channels (WhatsApp, email).',
        'Dashboards for managers — handling time and load.',
      ],
    },
    products: [
      {
        href: '/services/crm-connections',
        product: 'crm',
        label: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
      },
      {
        href: '/services/clicks-solutions',
        product: 'solutions',
        label: { he: 'Clicks Solutions', en: 'Clicks Solutions' },
      },
      {
        href: '/products/clicks-deploy-ready',
        product: 'ready',
        label: { he: 'Clicks deploy ready', en: 'Clicks deploy ready' },
      },
    ],
  },
  {
    slug: 'regional-clusters',
    icon: 'cluster',
    titles: { he: 'אשכולות אזוריים', en: 'Regional clusters' },
    descriptions: {
      he: 'חיבור תכנון לביצוע — GIS, דשבורדים ואינטגרציות.',
      en: 'Planning connected to execution — GIS, dashboards and integrations.',
    },
    pains: {
      he: 'נתק בין צוותי התכנון לצוותי הביצוע; מידע גאוגרפי שלא מדבר עם המשימות.',
      en: 'A gap between planning and execution; geographic data that never talks to the work.',
    },
    proofs: {
      he: 'monday-GIS, דשבורדים ואינטגרציות עומק — תכנון לביצוע על מפה אחת.',
      en: 'monday-GIS, dashboards and deep integrations — planning to execution on one map.',
    },
    bullets: {
      he: [
        'סנכרון ArcGIS ↔ monday עם Clicks Monday GIS.',
        'תצוגות מפה בלוח ובפריט.',
        'FlowGram לתהליכי אישור רב-גורמי.',
      ],
      en: [
        'ArcGIS ↔ monday sync with Clicks Monday GIS.',
        'Map views on boards and items.',
        'FlowGram for multi-stakeholder approval flows.',
      ],
    },
    products: [
      {
        href: '/products/monday-gis',
        product: 'gis',
        label: { he: 'Clicks Monday GIS', en: 'Clicks Monday GIS' },
      },
      {
        href: '/services/flowgram',
        product: 'flowgram',
        label: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
      },
    ],
  },
  {
    slug: 'nonprofits',
    icon: 'nonprofit',
    titles: { he: 'מלכ"רים ועמותות', en: 'Nonprofits' },
    descriptions: {
      he: 'קליטת פניות, ניהול תיקים ומעקב אחרי מוטבים בלי להעמיס על צוות קטן.',
      en: 'CRM 360, intake and case management — close consulting support and fast to deploy.',
    },
    pains: {
      he: 'מעט אנשי צוות, הרבה פניות ותורמים, ויותר מדי מעקב ידני אחרי מוטבים ומתנדבים.',
      en: 'Lean teams, many requests and donors, and too much manual tracking of beneficiaries and volunteers.',
    },
    proofs: {
      he: 'חבילות מוכנות להטמעה, ליווי צמוד וגישה ישירה למייסדים בלי פרויקט כבד.',
      en: 'Ready implementation packs, close guidance and direct founder access without a heavy project.',
    },
    bullets: {
      he: [
        'הטמעה מהירה בלי פרויקט ענק.',
        'ערוצי קליטה מרובים על monday.',
        'ניהול תיקים ו-SLA מוכנים.',
      ],
      en: [
        'Fast rollout without a giant project.',
        'Multi-channel intake on monday.',
        'Ready case management and SLAs.',
      ],
    },
    products: [
      {
        href: '/products/clicks-deploy-ready',
        product: 'ready',
        label: { he: 'Clicks deploy ready', en: 'Clicks deploy ready' },
      },
      {
        href: '/services/crm-connections',
        product: 'crm',
        label: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
      },
    ],
  },
  {
    slug: 'manufacturing',
    icon: 'manufacturing',
    titles: { he: 'מפעלים ותעשייה מסורתית', en: 'Manufacturing & traditional industry' },
    descriptions: {
      he: 'ייצור, לוגיסטיקה ותפעול שטח בלי ERP כבד ובלי לנהל הכול באקסלים.',
      en: 'Production, logistics and field operations without a heavy ERP and without running everything in spreadsheets.',
    },
    pains: {
      he: 'אקסלים, וואטסאפ ומערכות ישנות שלא מדברות: הזמנות, מלאי ותחזוקה נופלים בין צוותים.',
      en: 'Spreadsheets, WhatsApp and legacy tools that don’t talk — orders, inventory and maintenance fall through the cracks.',
    },
    proofs: {
      he: 'FlowGram לתהליכי ייצור ואישורים, אינטגרציות ל-ERP/MES קיימים, ו-Clicks TSM לתחזוקה ו-SLA.',
      en: 'FlowGram for production and approval flows, hooks into existing ERP/MES, and Clicks TSM for maintenance and SLA.',
    },
    bullets: {
      he: [
        'מסלול הזמנה→ייצור→משלוח על לוח אחד.',
        'קריאות תחזוקה, מלאי ואיכות — עם התראות ואחריותיות.',
        'הטמעה מהירה לצוותים שלא "חיים במחשב".',
      ],
      en: [
        'Order→production→ship path on one board.',
        'Maintenance, inventory and quality tickets — with alerts and ownership.',
        'Fast rollout for teams that don’t “live in software”.',
      ],
    },
    products: [
      {
        href: '/services/flowgram',
        product: 'flowgram',
        label: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
      },
      {
        href: '/services/clicks-tsm',
        product: 'tsm',
        label: { he: 'Clicks TSM', en: 'Clicks TSM' },
      },
    ],
  },
  {
    slug: 'high-tech',
    icon: 'hitech',
    titles: { he: 'חברות הייטק', en: 'High-tech companies' },
    descriptions: {
      he: 'מוצר, מכירות ותפעול על monday כשכבת תיאום בין צוותים וכלים.',
      en: 'Product, sales and operations on monday as the coordination layer across teams and tools.',
    },
    pains: {
      he: 'Jira, CRM, כספים ושיווק בערימות נפרדות — בלי תמונת מצב אחת לניהול ולמדידה.',
      en: 'Jira, CRM, finance and marketing in separate stacks — no single picture for leadership.',
    },
    proofs: {
      he: 'אינטגרציות עומק, אוטומציות, דשבורדים למנהלים — ומוצרי Clicks (CMS/GIS/CRM) כשצריך.',
      en: 'Deep integrations, automations, exec dashboards — plus Clicks products (CMS/GIS/CRM) when needed.',
    },
    bullets: {
      he: [
        'חיבור כלי פיתוח, מכירות ותמיכה ל-monday.',
        'FlowGram לתהליכי קליטה, רכש פנימי ואישורים.',
        'Clicks TSM לממשל, הרשאות ותחזוקה שוטפת.',
      ],
      en: [
        'Wire dev, sales and support tools into monday.',
        'FlowGram for onboarding, internal procurement and approvals.',
        'Clicks TSM for governance, permissions and ecosystem maintenance.',
      ],
    },
    products: [
      {
        href: '/services/flowgram',
        product: 'flowgram',
        label: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
      },
      {
        href: '/services/crm-connections',
        product: 'crm',
        label: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
      },
    ],
  },
];

const bySlug = new Map(SECTOR_PAGE_DATA.map((s) => [s.slug, s]));

export function getSectorPage(slug: string): SectorPageData | undefined {
  return bySlug.get(slug);
}
