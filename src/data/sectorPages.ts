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
  faq: Record<Locale, { question: string; answer: string }[]>;
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
    faq: {
      he: [
        { question: 'האם monday.com מתאים לרשויות מקומיות?', answer: 'כן. monday.com משמש רשויות מקומיות, מועצות אזוריות וגופים ממשלתיים בישראל לניהול תהליכים, בקשות אזרחים, גיוס ושיבוץ, ניהול תשתיות ועוד. קליקס מתמחה בהטמעה למגזר הציבורי.' },
        { question: 'מה ההבדל בין monday.com לבין OneCity?', answer: 'monday.com היא פלטפורמת עבודה גמישה שאפשר להתאים לכל תהליך. OneCity הוא מוצר ייעודי לרשויות. היתרון של monday.com: גמישות, אינטגרציות ועלות בקרת על ידי הרשות עצמה.' },
        { question: 'כמה עולה הטמעת monday.com לרשות מקומית?', answer: 'תלוי בהיקף הפרויקט, מספר המשתמשים ומורכבות התהליכים. צרו קשר לשיחת ייעוץ ונבנה הצעה מדויקת לצרכים שלכם.' },
      ],
      en: [
        { question: 'Is monday.com suitable for local authorities?', answer: 'Yes. monday.com is used by local authorities, regional councils and government bodies in Israel to manage processes, citizen requests, recruitment, infrastructure and more. Clicks specialises in public-sector implementations.' },
        { question: 'What is the difference between monday.com and OneCity?', answer: "monday.com is a flexible work platform adaptable to any process. OneCity is a dedicated local-authority product. monday.com's advantages: flexibility, integrations and costs controlled by the authority itself." },
        { question: 'How much does a monday.com implementation cost for a local authority?', answer: "Depends on project scope, number of users and process complexity. Contact us for a discovery call and we'll build an accurate proposal for your needs." },
      ],
    },
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
    faq: {
      he: [
        { question: 'איך monday.com עוזר לרשות מקומית לנהל פניות תושבים?', answer: 'monday.com מאפשר לרשות לנהל את כל מסע הפנייה — מקליטה ועד סגירה — בלוח אחד, עם SLA, ניתוב אוטומטי למחלקות ודשבורד למנהלים.' },
        { question: 'האם אפשר לחבר WhatsApp לניהול פניות תושבים?', answer: 'כן. באמצעות Clicks CRM Connections ניתן לחבר WhatsApp Business לרשות כך שפניות נכנסות הופכות לפריטים בלוח monday עם אחראי וסטטוס.' },
        { question: 'כמה זמן לוקח להטמיע monday.com ברשות?', answer: 'עם חבילת Clicks Deploy Ready ניתן להתחיל לעבוד תוך 3-10 ימי עסקים. פרויקטים מורכבים יותר עם אינטגרציות מיוחדות עשויים לקחת מספר שבועות.' },
      ],
      en: [
        { question: 'How does monday.com help a local authority manage resident requests?', answer: 'monday.com lets the authority manage the full request journey — from intake to closure — in one board, with SLAs, automatic routing to departments and a management dashboard.' },
        { question: 'Can WhatsApp be connected for managing resident requests?', answer: 'Yes. Using Clicks CRM Connections, WhatsApp Business can be connected so inbound requests become board items in monday with an owner and status.' },
        { question: 'How long does a monday.com implementation take for a local authority?', answer: 'With the Clicks Deploy Ready package, you can start working within 3-10 business days. More complex projects with special integrations may take several weeks.' },
      ],
    },
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
    faq: {
      he: [
        { question: 'איך אשכול אזורי יכול להשתמש ב-monday.com?', answer: 'אשכולות אזוריים מנהלים פרויקטים, תקציבים ומשאבים על פני רשויות מרובות. monday.com מאפשר תמונת מצב אחת עם תכנון גיאוגרפי דרך Clicks Monday GIS.' },
        { question: 'איך מחברים נתוני GIS לניהול פרויקטים?', answer: 'Clicks Monday GIS מסנכרן שכבות ArcGIS עם לוחות monday, כך שניתן לראות פרויקטים על המפה עם סטטוס, תקציב ואחריות — ממקום אחד.' },
      ],
      en: [
        { question: 'How can a regional cluster use monday.com?', answer: 'Regional clusters manage projects, budgets and resources across multiple authorities. monday.com provides a single picture with geographic planning through Clicks Monday GIS.' },
        { question: 'How do you connect GIS data to project management?', answer: 'Clicks Monday GIS syncs ArcGIS layers with monday boards so you can see projects on the map with status, budget and ownership — from one place.' },
      ],
    },
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
    faq: {
      he: [
        { question: 'האם monday.com מתאים לעמותות?', answer: 'כן. עמותות ומלכ"רים משתמשים ב-monday.com לניהול מתנדבים, גיוס כספים, ניהול פרויקטים ורישות עם גופים ממשלתיים. קליקס מבין את הצרכים הייחודיים של המגזר השלישי.' },
        { question: 'האם יש הנחה ל-monday.com לעמותות?', answer: 'monday.com מציעה תוכניות מחיר מיוחדות לעמותות. צרו קשר ונסייע לכם להבין את האפשרויות.' },
        { question: 'אילו תהליכים אפשר לנהל ב-monday.com בעמותה?', answer: 'ניהול מתנדבים, מעקב תורמים, ניהול פרויקטים, דיווח לגורמים ממשלתיים, תיאום אירועים, ניהול לוחות זמנים ועוד.' },
      ],
      en: [
        { question: 'Is monday.com suitable for nonprofits?', answer: 'Yes. Nonprofits use monday.com to manage volunteers, fundraising, projects and coordination with government bodies. Clicks understands the unique needs of the third sector.' },
        { question: 'Is there a discount for nonprofits?', answer: "monday.com offers special pricing plans for nonprofits. Contact us and we'll help you understand the options." },
        { question: 'Which processes can nonprofits manage in monday.com?', answer: 'Volunteer management, donor tracking, project management, government reporting, event coordination, scheduling and more.' },
      ],
    },
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
    faq: {
      he: [
        { question: 'איך monday.com עוזר למפעלים?', answer: 'monday.com מחבר תהליכי הזמנה, ייצור ומשלוח ללוח אחד, עם התראות אוטומטיות, קריאות תחזוקה וניהול מלאי — בלי ERP כבד.' },
        { question: 'האם אפשר לחבר monday.com ל-ERP קיים?', answer: 'כן. קליקס מחבר monday.com למערכות ERP ו-MES קיימות כך שנתוני ייצור זמינים בלוח לצוות התפעול.' },
        { question: 'האם זה מתאים לצוותי שטח שלא עובדים עם מחשבים?', answer: 'כן. monday.com זמין גם דרך מובייל, ועם הטמעה נכונה הצוות יכול לעדכן סטטוס, לדווח על תקלות ולקבל התראות מהסמארטפון.' },
      ],
      en: [
        { question: 'How does monday.com help manufacturers?', answer: 'monday.com connects order, production and shipping processes in one board, with automatic alerts, maintenance tickets and inventory management — without a heavy ERP.' },
        { question: 'Can monday.com be connected to an existing ERP?', answer: 'Yes. Clicks connects monday.com to existing ERP and MES systems so production data is available in the board for the operations team.' },
        { question: 'Is it suitable for field teams that don\'t work with computers?', answer: 'Yes. monday.com is available on mobile and with the right implementation teams can update status, report issues and receive alerts from their smartphone.' },
      ],
    },
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
    faq: {
      he: [
        { question: 'איך monday.com עוזר לחברות הייטק?', answer: 'monday.com משמש כשכבת תיאום בין צוותי פיתוח, מכירות ותפעול — מחבר Jira, CRM וכלים אחרים לתמונת מצב אחת למנהלים.' },
        { question: 'האם monday.com יכול להחליף Jira?', answer: 'לא בהכרח להחליף, אלא להשלים. Clicks מחבר Jira ל-monday כך שצוותי מוצר ממשיכים לעבוד ב-Jira ומנהלים רואים את התמונה הכוללת ב-monday.' },
        { question: 'מה זה Clicks TSM לחברות הייטק?', answer: 'Clicks TSM מספק ממשל שוטף למערכת monday — ניהול הרשאות, שינויים ותחזוקה — כדי שהמערכת תמשיך לתמוך בצמיחת החברה לאורך זמן.' },
      ],
      en: [
        { question: 'How does monday.com help high-tech companies?', answer: 'monday.com serves as the coordination layer between product, sales and operations teams — connecting Jira, CRM and other tools into a single picture for leadership.' },
        { question: 'Can monday.com replace Jira?', answer: "Not necessarily replace — but complement. Clicks connects Jira to monday so product teams keep working in Jira while leadership sees the full picture in monday." },
        { question: 'What is Clicks TSM for high-tech companies?', answer: 'Clicks TSM provides ongoing governance for the monday system — permission management, changes and maintenance — so the system continues to support company growth long-term.' },
      ],
    },
  },
];

const bySlug = new Map(SECTOR_PAGE_DATA.map((s) => [s.slug, s]));

export function getSectorPage(slug: string): SectorPageData | undefined {
  return bySlug.get(slug);
}
