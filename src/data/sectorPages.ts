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
      he: 'מוכנות לרכש, נגישות לפי תקן, אסמכתאות בשם אמיתי ומוצר עובד — לא מצגת.',
      en: 'Procurement-readiness, standards-compliant accessibility, named references and a working product — not slideware.',
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
      he: 'שירות לתושב מהיר יותר — פחות נפילות בין מחלקות.',
      en: 'Faster resident services — fewer things falling between departments.',
    },
    pains: {
      he: 'שירות לתושב שנתקע בתהליכים איטיים ובהעברות בין מחלקות.',
      en: 'Resident services stuck in slow processes and hand-offs between departments.',
    },
    proofs: {
      he: 'תוצאות של "היומיום בקליק" עם מספרי ROI — בקשות שנסגרות מהר.',
      en: '"Everyday in one click" outcomes with ROI numbers — requests that close faster.',
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
      he: 'CRM 360, קליטה וניהול תיקים — ליווי צמוד ומהיר להטמעה.',
      en: 'CRM 360, intake and case management — close consulting support and fast to deploy.',
    },
    pains: {
      he: 'CRM 360, קליטה וניהול מקרים — עם תקציב מצומצם וצוות רזה.',
      en: 'CRM 360, intake and case management — on a tight budget with a lean team.',
    },
    proofs: {
      he: 'ליווי צמוד, מערכות מוכנות-להטמעה וגישה ישירה למייסדים.',
      en: 'Close consulting partnership, ready-to-deploy systems and direct founder access.',
    },
    bullets: {
      he: [
        'רולאאוט מהיר בלי פרויקט ענק.',
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
    titles: { he: 'מפעלים ותעשייה (low-tech)', en: 'Manufacturing & low-tech' },
    descriptions: {
      he: 'ייצור, לוגיסטיקה ותפעול שטח — בלי ERP כבד, עם monday שמדבר עם המציאות.',
      en: 'Production, logistics and shop-floor ops — without a heavy ERP, with monday wired to reality.',
    },
    pains: {
      he: 'אקסלים, וואטסאפ ומערכות ישנות שלא מדברות — הזמנות, מלאי ותחזוקה נופלים בין הכיסאות.',
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
      he: 'גיילות, מוצר ותפעול — monday כשכבת תיאום בין צוותים וכלים.',
      en: 'Agility, product and ops — monday as the coordination layer across teams and tools.',
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
        'FlowGram לתהליכי אונבורדינג, רכש פנימי ואישורים.',
        'Clicks TSM לממשל, הרשאות ותחזוקה של האקוסיסטם.',
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
