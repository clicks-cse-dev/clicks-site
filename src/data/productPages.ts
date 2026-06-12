/**
 * Product detail pages — content + logo keys (marks from MondayCMS / MondayGIS).
 */
import { validateProductInternalLinks } from '../lib/productInternalLinks';
import type { Locale } from '../i18n';

export type ProductLogoKey =
  | 'flowgram'
  | 'tsm'
  | 'cms'
  | 'gis'
  | 'crm'
  | 'solutions'
  | 'ready';

export type OfferKind = 'product' | 'service';

export const SHIPPED_PRODUCT_SLUGS = ['monday-cms', 'monday-gis', 'clicks-deploy-ready'] as const;
export const SERVICE_SLUGS = [
  'flowgram',
  'clicks-tsm',
  'crm-connections',
  'clicks-solutions',
] as const;

export interface ProductPageData {
  slug: string;
  kind: OfferKind;
  logo: ProductLogoKey;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  leads: Record<Locale, string>;
  audience: Record<Locale, string>;
  facts: Record<Locale, { term: string; detail: string }[]>;
  problems: Record<Locale, string[]>;
  features: Record<Locale, { title: string; body: string }[]>;
  scenarios: Record<Locale, { title: string; body: string }[]>;
  steps: Record<Locale, { title: string; body: string }[]>;
  /** At least two slugs from PRODUCT_PAGE_DATA — rendered in the "Works well with" section. */
  relatedSlugs: string[];
  faq: Record<Locale, { question: string; answer: string }[]>;
}

export const PRODUCT_PAGE_DATA: ProductPageData[] = [
  {
    slug: 'flowgram',
    kind: 'service',
    logo: 'flowgram',
    titles: { he: 'FlowGram by Clicks', en: 'FlowGram by Clicks' },
    descriptions: {
      he: 'תכנון תהליכים, אוטומציות וחיבורים לפני ובמהלך בנייה על monday.com.',
      en: 'Process planning, automations and integrations before and during builds on monday.com.',
    },
    leads: {
      he: 'לפני שפותחים לוח — מסדרים איך העבודה באמת זורמת: מי עושה מה, מתי, ומה צריך להתחבר למערכות שכבר יש לכם. FlowGram נותן תמונה ברורה שאפשר לבדוק עם כל הגורמים לפני הבנייה.',
      en: 'Before anyone opens a board — we lay out how work actually flows: who does what, when, and what must connect to systems you already run. FlowGram gives a clear picture stakeholders can review before build starts.',
    },
    audience: {
      he: 'כל ארגון עם תהליכים רב-גורמיים — אישורים, הסלמות וחיבור למערכות קיימות לפני בנייה על monday.',
      en: 'Any organization with multi-stakeholder processes — approvals, escalations and hooks into existing systems before building on monday.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'גילוי ואפיון — לפני או במקביל לבניית הלוחות' },
        { term: 'מה מקבלים', detail: 'מפת תהליך, כללי אוטומציה ומפרט חיבורים' },
        { term: 'עובד יחד עם', detail: 'בנייה על monday.com ו-Clicks TSM לתחזוקה' },
      ],
      en: [
        { term: 'Project phase', detail: 'Discover and architect — before or alongside board build' },
        { term: 'Deliverable', detail: 'Process map, automation rules and integration spec' },
        { term: 'Pairs with', detail: 'Build on monday.com and Clicks TSM for maintenance' },
      ],
    },
    problems: {
      he: [
        'כל מחלקה מחזיקה גרסה אחרת של איך התהליך אמור לעבוד.',
        'אוטומציות נבנות על הלוח לפני שהבנו את כל הענפים והחריגים.',
        'אינטגרציות נסגרות בשלב מאוחר וגורמות לעיכובים.',
      ],
      en: [
        'Each department holds a different version of how the process should run.',
        'Automations get wired on the board before branches and exceptions are understood.',
        'Integrations get decided late and stall go-live.',
      ],
    },
    features: {
      he: [
        { title: 'מפת תהליך ברורה', body: 'כל שלב, אחראי, תנאי וחריג — לפני שורה אחת בלוח.' },
        { title: 'אוטומציות לפי שלבים', body: 'מקליטה ועד אישור: סטטוסים, תזכורות והסלמות מחוברים ל-monday.' },
        { title: 'חיבור למערכות קיימות', body: 'העברת נתונים, ניקוי שדות וחיבורים ל-ERP, דוא״ל או מערכות פנימיות.' },
        { title: 'תיעוד לאישורים', body: 'מסמך שמנהלים, IT וגורמי עסק יכולים לאשר לפני פיתוח.' },
      ],
      en: [
        { title: 'Clear process map', body: 'Every step, owner, condition and exception — before a single board row.' },
        { title: 'Staged automations', body: 'From intake to approval: statuses, reminders and escalations on monday.' },
        { title: 'Existing system hooks', body: 'Data transfer, field cleanup and links to ERP, email or internal tools.' },
        { title: 'Documentation teams can sign off', body: 'A spec leadership, IT and advisors can approve before build.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'אישור רב-מחלקתי', body: 'מסלול ברור בין יחידות, עם נקודות עצירה ומדידת זמן טיפול.' },
        { title: 'קליטה מערוץ דיגיטלי', body: 'טופס, CRM או WhatsApp → ניתוב אוטומטי → מעקב בלוח אחד.' },
      ],
      en: [
        { title: 'Multi-department approval', body: 'A clear path between units, with hold points and handling-time tracking.' },
        { title: 'Field intake', body: 'Form or digital channel → automatic routing → one board to track.' },
      ],
    },
    steps: {
      he: [
        { title: 'מיפוי', body: 'ראיונות, תהליך נוכחי ונקודות כאב.' },
        { title: 'שרטוט', body: 'FlowGram: זרימה, ענפים וחיבורים.' },
        { title: 'מסירה לבנייה', body: 'מפרט מוכן לצוות monday שלכם או שלנו.' },
      ],
      en: [
        { title: 'Map', body: 'Interviews, current process and pain points.' },
        { title: 'Draw', body: 'FlowGram: flow, branches and connections.' },
        { title: 'Hand off', body: 'Spec ready for your monday team or ours.' },
      ],
    },
    relatedSlugs: ['clicks-tsm', 'monday-cms', 'clicks-solutions'],
    faq: {
      he: [
        { question: 'מה זה FlowGram?', answer: 'FlowGram הוא שירות האפיון של קליקס — מיפוי תהליכים, אוטומציות וחיבורים לפני ובמהלך בנייה על monday.com. בסוף האפיון מקבלים מפת תהליך, כללי אוטומציה ומפרט חיבורים.' },
        { question: 'מתי מתחילים עם FlowGram?', answer: 'FlowGram מתאים לפני פתיחת הלוח הראשון או כשרוצים לשפר מערכת קיימת. אנחנו ממפים יחד את התהליך לפני שבונים — כדי שלא לבזבז זמן על לוחות שלא משרתים את העבודה האמיתית.' },
        { question: 'כמה זמן לוקח אפיון FlowGram?', answer: 'תלוי במורכבות התהליך. אפיון בסיסי לוקח 2-4 שבועות. תהליכים מורכבים עם חיבורים למערכות רבות יכולים לקחת 6-8 שבועות.' },
      ],
      en: [
        { question: 'What is FlowGram?', answer: "FlowGram is Clicks' process-design service — mapping workflows, automations and integrations before and during monday.com builds. The deliverable is a process map, automation rules and an integration spec." },
        { question: 'When should we use FlowGram?', answer: "FlowGram fits before opening the first board or when improving an existing system. We map the process together before building — so you don't waste time on boards that don't match real work." },
        { question: 'How long does a FlowGram engagement take?', answer: 'Depends on process complexity. A basic discovery takes 2-4 weeks. Complex processes with many system integrations can take 6-8 weeks.' },
      ],
    },
  },
  {
    slug: 'clicks-tsm',
    kind: 'service',
    logo: 'tsm',
    titles: { he: 'Clicks TSM', en: 'Clicks TSM' },
    descriptions: {
      he: 'תמיכה, תחזוקה ומעקב אחרי מערכות monday אחרי ההשקה.',
      en: 'Support, maintenance and oversight for monday systems after go-live.',
    },
    leads: {
      he: 'מערכת שעולה לאוויר היא רק ההתחלה. Clicks TSM נותן מקום אחד לקריאות, הרשאות, שינויים ודוחות — כדי שהמערכת תמשיך לעבוד גם אחרי חודשים ושנים.',
      en: 'Going live is only the start. Clicks TSM gives one place for tickets, access, changes and reports — so the system keeps working months and years later.',
    },
    audience: {
      he: 'ארגונים עם monday שכבר רץ בייצור וצריכים גוף שמטפל בתקלות, עדכונים ומדיניות הרשאות.',
      en: 'Organizations with monday in production that need a team handling fixes, updates and permission policy.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'תפעול — אחרי השקה או העברה מספק אחר' },
        { term: 'מה מקבלים', detail: 'לוח תמיכה, SLA, דוחות וממשל שינויים' },
        { term: 'עובד יחד עם', detail: 'FlowGram לשינויי תהליך ומוצרי monday של קליקס' },
      ],
      en: [
        { term: 'Project phase', detail: 'Operate — after launch or vendor handover' },
        { term: 'Deliverable', detail: 'Support board, SLAs, reports and change governance' },
        { term: 'Pairs with', detail: 'FlowGram for process changes and other Clicks monday products' },
      ],
    },
    problems: {
      he: [
        'אין בעלות ברורה על תקלות ושינויים אחרי סגירת הפרויקט.',
        'הרשאות ועדכונים נעשים ידנית בלי תיעוד.',
        'מנהלים לא רואים אם המערכת עומדת ביעדים שהוגדרו.',
      ],
      en: [
        'No clear owner for issues and changes after the project ends.',
        'Permissions and updates happen ad hoc with no audit trail.',
        'Leaders cannot see if the system still meets agreed targets.',
      ],
    },
    features: {
      he: [
        { title: 'קריאות ותמיכה', body: 'מסלול ברור: קליטה, עדיפות, טיפול וסגירה — על לוח monday.' },
        { title: 'הרשאות ושינויים', body: 'בקשות גישה, אישורים ויומן שינויים לצוות IT ולמנהלים.' },
        { title: 'דוחות למנהלים', body: 'זמינות, עומסים ועמידה בזמני טיפול — לא רק צבע ירוק בלוח.' },
        { title: 'שיפור מתמשך', body: 'עדכוני מוצר, תיקונים והתאמות לתהליכים שמשתנים.' },
      ],
      en: [
        { title: 'Tickets and support', body: 'Clear path: intake, priority, resolution and close — on a monday board.' },
        { title: 'Access and changes', body: 'Access requests, approvals and a change log for IT and procurement.' },
        { title: 'Leadership reports', body: 'Availability, load and response times — not just a green board.' },
        { title: 'Ongoing improvement', body: 'Product updates, fixes and adjustments as processes evolve.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'מעבר מספק הטמעה', body: 'קליטת מערכת קיימת, תיעוד ותחזוקה שוטפת בלי להפסיק עבודה.' },
        { title: 'ביקורת חוזית או פנימית', body: 'דוחות SLA ושינויים מתועדים לפני חידוש או ביקורת.' },
      ],
      en: [
        { title: 'Vendor handover', body: 'Take over a live system, document it and run maintenance without downtime.' },
        { title: 'Procurement review', body: 'SLA and change reports documented before contract renewal.' },
      ],
    },
    steps: {
      he: [
        { title: 'קליטה', body: 'מיפוי לוחות, הרשאות ו-SLA קיימים.' },
        { title: 'הפעלה', body: 'לוח תמיכה, כללים ואחראים.' },
        { title: 'שוטף', body: 'ניטור, דוחות ושיפורים מתוכננים.' },
      ],
      en: [
        { title: 'Onboard', body: 'Map boards, permissions and current SLAs.' },
        { title: 'Run', body: 'Support board, rules and owners.' },
        { title: 'Improve', body: 'Monitoring, reports and planned enhancements.' },
      ],
    },
    relatedSlugs: ['flowgram', 'crm-connections', 'clicks-solutions'],
    faq: {
      he: [
        { question: 'מה זה Clicks TSM?', answer: 'Clicks TSM הוא שירות התחזוקה השוטפת של מערכות monday.com. כולל תמיכה שוטפת, SLA מוגדר, עדכונים ושינויים, ניטור תהליכים וממשל מערכת — כדי שהמערכת תמשיך לעבוד לאורך זמן.' },
        { question: 'האם אפשר להשיג TSM בלי להקים את המערכת עם קליקס?', answer: 'כן. Clicks TSM מתאים גם למערכות שנבנו על ידי מישהו אחר. אנו עוברים על המערכת הקיימת, מבינים את הארכיטקטורה, ומספקים תחזוקה שוטפת.' },
        { question: 'מה ה-SLA של Clicks TSM?', answer: 'ה-SLA תלוי בתוכנית שנבחרה — זמני תגובה של 4 שעות עד 2 ימי עסקים, תלוי בדחיפות וברמת השירות.' },
      ],
      en: [
        { question: 'What is Clicks TSM?', answer: 'Clicks TSM is the ongoing maintenance service for monday.com systems. It includes support, a defined SLA, updates and changes, process monitoring and system governance — so your system keeps working long-term.' },
        { question: 'Can we get TSM without building the system with Clicks?', answer: 'Yes. Clicks TSM works for systems built by other parties. We audit the existing system, understand the architecture, and provide ongoing maintenance.' },
        { question: 'What SLA does Clicks TSM offer?', answer: 'SLA depends on the chosen plan — response times from 4 hours to 2 business days, depending on urgency and service tier.' },
      ],
    },
  },
  {
    slug: 'monday-cms',
    kind: 'product',
    logo: 'cms',
    titles: { he: 'Clicks Monday CMS', en: 'Clicks Monday CMS' },
    descriptions: {
      he: 'מוצר Clicks Monday CMS מחבר לוחות monday.com ל-WordPress, Webflow ו-CMS נוספים — סנכרון דו-כיווני של תוכן וקטלוג בלי העתקה ידנית. בשימוש אצל לקוחות קליקס.',
      en: 'Clicks Monday CMS syncs monday.com with WordPress and Webflow — two-way content and catalog sync without manual copy-paste. Used by Clicks clients today.',
    },
    leads: {
      he: 'מוצר חי מבית קליקס: מחבר בין לוחות monday ל-WordPress, Webflow וספקי CMS נוספים. צוותי תוכן עובדים בלוח מוכר; האתר מתעדכן בלי להעתיק ידנית.',
      en: 'A live Clicks product: connects monday boards to WordPress, Webflow and other CMS platforms. Content teams work in a familiar board; the site updates without copy-paste.',
    },
    audience: {
      he: 'ארגונים עם קטלוג שירותים, תוכן שיווקי או מידע שצריך להופיע גם באתר וגם בלוח תפעולי.',
      en: 'Teams with service catalogs, marketing content or reference information that must live on both a site and an operations board.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'בנייה — אחרי אפיון שדות וקטלוג' },
        { term: 'מה מקבלים', detail: 'סנכרון דו-כיווני וממשק בתוך monday' },
        { term: 'עובד יחד עם', detail: 'monday-GIS לאתרים עם מפה, FlowGram לתהליכי פרסום' },
      ],
      en: [
        { term: 'Project phase', detail: 'Build — after fields and catalog are defined' },
        { term: 'Deliverable', detail: 'Two-way sync and in-monday UI' },
        { term: 'Pairs with', detail: 'monday-GIS for map-heavy sites, FlowGram for publishing flows' },
      ],
    },
    problems: {
      he: [
        'תוכן באתר ותוכן בלוח מתעדכנים בנפרד — טעויות ועיכובים.',
        'אין תמונה אחת איזה גרסה פורסמה ומתי.',
        'צוותי שטח לא רואים מה מופיע באתר הציבורי.',
      ],
      en: [
        'Site content and board content drift — errors and delays.',
        'No single view of which version is live and when.',
        'Field teams cannot see what appears on the public site.',
      ],
    },
    features: {
      he: [
        { title: 'סנכרון דו-כיווני', body: 'שינוי בלוח או ב-CMS — עם סטטוס סנכרון ברור בכל פריט.' },
        { title: 'מיפוי שדות', body: 'התאמה בין עמודות monday לשדות באתר — פעם אחת, שימוש חוזר.' },
        { title: 'ספקי CMS', body: 'WordPress, Webflow ואחרים — בחירה והגדרה מתוך monday.' },
        { title: 'מוצר בשימוש', body: 'אותו מוצר שרץ אצל לקוחות קליקס — לא הדגמה.' },
      ],
      en: [
        { title: 'Two-way sync', body: 'Change on the board or in the CMS — clear sync status on every item.' },
        { title: 'Field mapping', body: 'Match monday columns to site fields — set once, reuse.' },
        { title: 'CMS providers', body: 'WordPress, Webflow and more — configured from monday.' },
        { title: 'Production product', body: 'The same product Clicks clients run — not a demo.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'קטלוג שירותים לרשות', body: 'עדכון שירותים באתר הציבורי ישירות מלוח האישור.' },
        { title: 'תוכן שיווקי למלכ״ר', body: 'קמפיינים ודפי נחיתה מסונכרנים עם סטטוס פרסום בלוח.' },
      ],
      en: [
        { title: 'Municipal service catalog', body: 'Update public-site services from the approval board.' },
        { title: 'Nonprofit campaigns', body: 'Landing pages synced with publish status on the board.' },
      ],
    },
    steps: {
      he: [
        { title: 'מיפוי תוכן', body: 'שדות, קטלוג וספק CMS.' },
        { title: 'חיבור', body: 'הגדרת סנכרון ראשוני ובדיקות.' },
        { title: 'הפעלה', body: 'הדרכת צוות תוכן וניטור סנכרון.' },
      ],
      en: [
        { title: 'Map content', body: 'Fields, catalog and CMS provider.' },
        { title: 'Connect', body: 'Initial sync setup and tests.' },
        { title: 'Go live', body: 'Train content teams and monitor sync.' },
      ],
    },
    relatedSlugs: ['monday-gis', 'flowgram', 'clicks-solutions'],
    faq: {
      he: [
        { question: 'מה זה Clicks Monday CMS?', answer: 'Clicks Monday CMS הוא גשר בין monday.com לבין מערכות ניהול תוכן כמו WordPress ו-Webflow. הוא מסנכרן תוכן, קטלוג, משתמשים ודפים בין monday.com לבין האתר — ללא פיתוח ידני.' },
        { question: 'האם Monday CMS מתאים לרשויות מקומיות?', answer: 'כן. רשויות מקומיות שמנהלות אתרים ומידע ציבורי יכולות לסנכרן עדכונים ישירות מ-monday.com לאתר — חיסכון בכפל עבודה ושגיאות.' },
        { question: 'אילו מערכות תוכן נתמכות?', answer: 'כרגע WordPress ו-Webflow. תמיכה ב-Wix ומערכות נוספות בפיתוח.' },
      ],
      en: [
        { question: 'What is Clicks Monday CMS?', answer: 'Clicks Monday CMS bridges monday.com and content management systems like WordPress and Webflow. It syncs content, catalogue entries, users and pages between monday.com and your website — without manual development.' },
        { question: 'Is Monday CMS suitable for local authorities?', answer: 'Yes. Local authorities managing public websites and information can sync updates directly from monday.com to the website — eliminating duplicate work and errors.' },
        { question: 'Which CMS platforms are supported?', answer: 'Currently WordPress and Webflow. Wix and additional platforms are in development.' },
      ],
    },
  },
  {
    slug: 'monday-gis',
    kind: 'product',
    logo: 'gis',
    titles: { he: 'Clicks Monday GIS', en: 'Clicks Monday GIS' },
    descriptions: {
      he: 'Clicks Monday GIS מסנכרן ArcGIS ושכבות GIS עם לוחות monday.com — מפות, נכסים ופרויקטים בשטח על לוח אחד. לרשויות, אשכולות אזוריים וגופי תשתיות.',
      en: 'Clicks Monday GIS syncs ArcGIS with monday.com — embedded maps, regional dashboards and field assets on one board. For authorities and utilities.',
    },
    leads: {
      he: 'כשצריך מפה אחת של אמת בין GIS לתפעול: סנכרון עם ArcGIS, תצוגות מפה בלוח ובפריט, ודשבורדים לתכנון אזורי — בלי לקפוץ בין מערכות.',
      en: 'When GIS and operations need one map of truth: ArcGIS sync, map views on boards and items, and planning dashboards — without switching systems.',
    },
    audience: {
      he: 'אשכולות אזוריים, רשויות, רשויות מים וגופים עם נכסים, תשתיות או פרויקטים בשטח.',
      en: 'Regional clusters, authorities, utilities and teams with assets, infrastructure or field projects.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'בנייה — כשיש נתוני מיקום או שכבות GIS' },
        { term: 'מה מקבלים', detail: 'סנכרון GeoJSON ומפות מובנות ב-monday' },
        { term: 'עובד יחד עם', detail: 'monday-CMS לפרסום מפות באתר, FlowGram לתהליכי אישור' },
      ],
      en: [
        { term: 'Project phase', detail: 'Build — when location data or GIS layers matter' },
        { term: 'Deliverable', detail: 'GeoJSON sync and embedded maps in monday' },
        { term: 'Pairs with', detail: 'monday-CMS for publishing maps on the site, FlowGram for approvals' },
      ],
    },
    problems: {
      he: [
        'מנהלי פרויקטים ב-monday לא רואים איפה הפרויקט בשטח.',
        'עדכוני GIS ועדכוני לוח לא מסונכרנים.',
        'דוחות אזוריים דורשים ייצוא ידני למפות.',
      ],
      en: [
        'Project managers on monday cannot see where work sits geographically.',
        'GIS updates and board updates fall out of sync.',
        'Regional reports require manual exports to maps.',
      ],
    },
    features: {
      he: [
        { title: 'סנכרון ArcGIS', body: 'שכבות וישויות — עם בקרה מתי ומה עובר בין המערכות.' },
        { title: 'מפה בלוח ובפריט', body: 'הקשר מרחבי ליד המשימה, לא בטאב נפרד.' },
        { title: 'דשבורדים אזוריים', body: 'תכנון, סטטוס פרויקטים ועומסים לפי אזור.' },
        { title: 'מוצר בשימוש', body: 'מבוסס על mondaygis החי — ממשק ולוגו מוכרים.' },
      ],
      en: [
        { title: 'ArcGIS sync', body: 'Layers and entities — with control over what moves when.' },
        { title: 'Maps on board and item', body: 'Spatial context next to the task, not a separate tab.' },
        { title: 'Regional dashboards', body: 'Planning, project status and load by area.' },
        { title: 'Production product', body: 'Based on live mondaygis — familiar UI and branding.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'אשכול אזורי', body: 'פרויקטים על המפה עם סטטוס תקציב ולוח אחד.' },
        { title: 'תשתיות ברשות', body: 'נכסים בשטח מקושרים לפניות תושבים ב-monday.' },
      ],
      en: [
        { title: 'Regional cluster', body: 'Projects on the map with budget status on one board.' },
        { title: 'Municipal infrastructure', body: 'Field assets linked to resident requests on monday.' },
      ],
    },
    steps: {
      he: [
        { title: 'הגדרת שכבות', body: 'ArcGIS, שדות וכללי סנכרון.' },
        { title: 'הטמעה בלוח', body: 'תצוגות מפה ודשבורדים.' },
        { title: 'הדרכה', body: 'צוותי תכנון ושטח עובדים מאותו מקור.' },
      ],
      en: [
        { title: 'Define layers', body: 'ArcGIS, fields and sync rules.' },
        { title: 'Embed in boards', body: 'Map views and dashboards.' },
        { title: 'Train teams', body: 'Planning and field staff share one source.' },
      ],
    },
    relatedSlugs: ['monday-cms', 'flowgram', 'clicks-deploy-ready'],
    faq: {
      he: [
        { question: 'מה זה Clicks Monday GIS?', answer: 'Clicks Monday GIS מסנכרן בין מערכות GIS ומפות ArcGIS לבין לוחות monday.com. נתוני מיקום, שכבות GIS ורשומות גיאוגרפיות מתעדכנים אוטומטית.' },
        { question: 'לאיזה סוגי גופים מתאים Monday GIS?', answer: 'רשויות מקומיות, מועצות אזוריות, גופי תשתיות ותיירות שמנהלים נכסים גיאוגרפיים — ורוצים שהמידע הגיאוגרפי יהיה זמין בתוך monday.com.' },
        { question: 'האם צריך ידע ב-GIS כדי להשתמש?', answer: 'לא. מי שמנהל את monday.com יכול לעבוד עם נתוני ה-GIS ישירות בלוח, ללא צורך בכלי GIS נפרדים.' },
      ],
      en: [
        { question: 'What is Clicks Monday GIS?', answer: 'Clicks Monday GIS syncs GIS systems and ArcGIS maps with monday.com boards. Location data, GIS layers and geographic records update automatically.' },
        { question: 'Which organisations benefit from Monday GIS?', answer: 'Local authorities, regional councils, infrastructure and tourism bodies managing geographic assets — and wanting geographic data available inside monday.com.' },
        { question: 'Do users need GIS expertise?', answer: 'No. Anyone managing monday.com can work with GIS data directly in the board, without separate GIS tools.' },
      ],
    },
  },
  {
    slug: 'clicks-deploy-ready',
    kind: 'product',
    logo: 'ready',
    titles: { he: 'Clicks Deploy Ready', en: 'Clicks Deploy Ready' },
    descriptions: {
      he: 'Clicks Deploy Ready: חבילות monday.com מוכנות להטמעה — CRM 360, ניהול תיקים, SLA ודשבורדים. התחילו לעבוד ב-3–10 ימי עסקים, לא בחודשים.',
      en: 'Clicks Deploy Ready: ready-made monday.com packs — CRM 360, case management, SLA and dashboards. Go live in 3–10 business days, not months.',
    },
    leads: {
      he: 'תבניות עבודה שכבר עברו שטח, מותאמות לפי סוג הארגון. לא מתחילים מלוח ריק, ואפשר להרחיב עם FlowGram, CRM Connections ו-TSM.',
      en: 'Field-tested work templates tailored to your organization. You do not start from a blank board, and can extend with FlowGram, CRM Connections and TSM.',
    },
    audience: {
      he: 'ארגונים שצריכים הטמעה מהירה על monday: CRM, תיקים, קליטה ו-SLA.',
      en: 'Teams that need a fast monday implementation: CRM, cases, intake and SLA.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'הטמעה — חבילה מוכנה + התאמה קלה' },
        { term: 'מה מקבלים', detail: 'לוחות, אוטומציות, הדרכה ודשבורדים' },
        { term: 'עובד יחד עם', detail: 'FlowGram, CRM Connections ו-Clicks TSM' },
      ],
      en: [
        { term: 'Project phase', detail: 'Rollout — ready pack plus light tailoring' },
        { term: 'Deliverable', detail: 'Boards, automations, training and dashboards' },
        { term: 'Pairs with', detail: 'FlowGram, CRM Connections and Clicks TSM' },
      ],
    },
    problems: {
      he: [
        'פרויקט monday נמשך חודשים בלי תבנית מוכחת.',
        'צוותים מתחילים מלוח ריק וממציאים מחדש.',
        'אין חבילה שמתחברת לערוצי לקוח (WhatsApp, דוא״ל).',
      ],
      en: [
        'monday projects drag on without a proven template.',
        'Teams start from an empty board and reinvent basics.',
        'No pack wired to customer channels (WhatsApp, email).',
      ],
    },
    features: {
      he: [
        { title: 'CRM 360', body: 'קליטת פניות, טיפול, מדידה ודוחות בלוח אחד.' },
        { title: 'ניהול תיקים', body: 'תיק עם SLA, מסמכים והרשאות.' },
        { title: 'קליטה + SLA', body: 'תבניות קליטה, מדדי שירות ודשבורד עומסים.' },
        { title: 'דשבורד מנהלים', body: 'תמונת מצב שבועית וחריגות.' },
      ],
      en: [
        { title: 'CRM 360', body: 'End-to-end journey with metrics and reports.' },
        { title: 'Case management', body: 'Cases with SLA, documents and permissions.' },
        { title: 'Onboarding + SLA', body: 'Intake, service metrics and load dashboard.' },
        { title: 'Executive dashboard', body: 'Weekly snapshot and exceptions.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'מלכ״ר עם CRM 360', body: 'קליטת פניות, תיק ודיווח למנהלים — בשבועות.' },
        { title: 'רשות עם תיקי תושב', body: 'SLA, מסמכים ומדדים על לוח אחד.' },
      ],
      en: [
        { title: 'Nonprofit CRM 360', body: 'Intake, cases and leadership reports in weeks.' },
        { title: 'Authority case files', body: 'SLA, documents and KPIs on one board.' },
      ],
    },
    steps: {
      he: [
        { title: 'בחירת חבילה', body: 'CRM, תיקים, SLA או שילוב.' },
        { title: 'התאמה', body: 'שמות, מחלקות וערוצים.' },
        { title: 'הטמעה', body: 'הדרכה, עלייה לאוויר ותחזוקה ב-TSM.' },
      ],
      en: [
        { title: 'Pick a pack', body: 'CRM, cases, SLA or a blend.' },
        { title: 'Tailor', body: 'Names, departments and channels.' },
        { title: 'Roll out', body: 'Training, go-live and TSM care.' },
      ],
    },
    relatedSlugs: ['crm-connections', 'flowgram', 'monday-gis'],
    faq: {
      he: [
        { question: 'מה זה Clicks Deploy Ready?', answer: 'Clicks Deploy Ready הוא חבילת השקה מהירה ל-monday.com — אוסף לוחות, אוטומציות ותבניות שנבנו מראש לפי סוג הארגון, כדי להתחיל לעבוד בימים ולא בחודשים.' },
        { question: 'כמה זמן לוקחת השקה עם Deploy Ready?', answer: 'בין 3 ל-10 ימי עסקים, תלוי בגודל הארגון ובמורכבות הצרכים. הרבה יותר מהיר מהטמעה מאפס.' },
        { question: 'האם אפשר לשנות אחר כך?', answer: 'בהחלט. Deploy Ready הוא נקודת ההתחלה — ניתן להתאים, להרחיב ולשנות את הלוחות לאורך הזמן בשירות Clicks TSM.' },
      ],
      en: [
        { question: 'What is Clicks Deploy Ready?', answer: 'Clicks Deploy Ready is a fast-launch monday.com package — a curated set of boards, automations and templates pre-built for specific organisation types, so you start working in days not months.' },
        { question: 'How long does a Deploy Ready rollout take?', answer: 'Between 3 and 10 business days, depending on organisation size and needs. Much faster than a build from scratch.' },
        { question: 'Can things be changed later?', answer: 'Absolutely. Deploy Ready is a starting point — boards can be tailored, extended and changed over time using the Clicks TSM service.' },
      ],
    },
  },
  {
    slug: 'crm-connections',
    kind: 'service',
    logo: 'crm',
    titles: { he: 'Clicks CRM Connections', en: 'Clicks CRM Connections' },
    descriptions: {
      he: 'WhatsApp, Messenger ואימייל — מחוברים ללוח monday אחד.',
      en: 'WhatsApp, Messenger and email — wired into one monday board.',
    },
    leads: {
      he: 'התושב והלקוח כבר כותבים ב-WhatsApp או במסנג׳ר. CRM Connections הופך את השיחה לפריט בלוח: אחראי, סטטוס, היסטוריה ומדידה — בלי תיבות דואר נפרדות.',
      en: 'Residents and customers already message on WhatsApp or Messenger. CRM Connections turns each conversation into a board item: owner, status, history and metrics — without separate inboxes.',
    },
    audience: {
      he: 'רשויות, מלכ״רים וצוותי שירות שמקבלים פניות בערוצים דיגיטליים ורוצים מעקב אחד.',
      en: 'Municipalities, nonprofits and service teams taking digital-channel requests who want one place to track them.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'בנייה — לצד CRM 360 או לוח פניות' },
        { term: 'מה מקבלים', detail: 'חיבור ערוצים, ניתוב ותיעוד שיחות' },
        { term: 'עובד יחד עם', detail: 'חבילות מוכנות להטמעה ו-Clicks TSM' },
      ],
      en: [
        { term: 'Project phase', detail: 'Build — alongside CRM 360 or a requests board' },
        { term: 'Deliverable', detail: 'Channel connections, routing and conversation history' },
        { term: 'Pairs with', detail: 'Ready-to-deploy solutions and Clicks TSM' },
      ],
    },
    problems: {
      he: [
        'שיחות ב-WhatsApp לא מתועדות ב-CRM.',
        'אין ניתוב לפי נושא או מחלקה.',
        'מנהלים לא יודעים כמה פניות פתוחות בכל ערוץ.',
      ],
      en: [
        'WhatsApp chats never make it into the CRM.',
        'No routing by topic or department.',
        'Managers cannot see open volume per channel.',
      ],
    },
    features: {
      he: [
        { title: 'WhatsApp Business', body: 'הודעות נכנסות → פריט עם אחראי וסטטוס.' },
        { title: 'Meta Messenger', body: 'לידים מדף או בוט — ישר לתור טיפול.' },
        { title: 'אימייל חכם', body: 'כללים לפי נושא/מחלקה — בלי תיבות נפרדות.' },
        { title: 'מדידה', body: 'זמן תגובה, עומסים וסגירות לפי ערוץ.' },
      ],
      en: [
        { title: 'WhatsApp Business', body: 'Inbound messages → items with owner and status.' },
        { title: 'Meta Messenger', body: 'Page or bot leads — straight into a queue.' },
        { title: 'Smart email', body: 'Rules by topic or department — no separate inboxes.' },
        { title: 'Metrics', body: 'Response time, load and closures per channel.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'פניית תושב', body: 'WhatsApp → ניתוב למחלקה → מעקב עד סגירה.' },
        { title: 'ליד למלכ״ר', body: 'מסנג׳ר מקמפיין → טיפוח בלוח אחד.' },
      ],
      en: [
        { title: 'Resident request', body: 'WhatsApp → route to department → track to close.' },
        { title: 'Nonprofit lead', body: 'Campaign Messenger → nurture on one board.' },
      ],
    },
    steps: {
      he: [
        { title: 'הגדרת ערוצים', body: 'חשבונות, תבניות וניתוב.' },
        { title: 'חיבור ללוח', body: 'שדות, סטטוסים ואוטומציות.' },
        { title: 'הדרכת צוות', body: 'עובדים עונים מתוך monday.' },
      ],
      en: [
        { title: 'Channels', body: 'Accounts, templates and routing.' },
        { title: 'Board wiring', body: 'Fields, statuses and automations.' },
        { title: 'Team training', body: 'Staff respond from monday.' },
      ],
    },
    relatedSlugs: ['flowgram', 'clicks-tsm', 'clicks-deploy-ready'],
    faq: {
      he: [
        { question: 'מה זה Clicks CRM Connections?', answer: 'Clicks CRM Connections הוא שירות חיבור בין monday.com לבין כלי CRM וממשקים חיצוניים — כולל WhatsApp Business, Meta Messenger, ומערכות ישנות. הנתונים זורמים אוטומטית בין המערכות.' },
        { question: 'האם זה מתאים לרשויות ומלכ"רים?', answer: 'כן. הרבה גופים ציבוריים ומלכ"רים עובדים עם מערכות ישנות שלא מדברות זו עם זו. Clicks CRM Connections יוצר גשרים בין המערכות הקיימות לבין monday.com.' },
        { question: 'אילו מערכות אפשר לחבר?', answer: 'ניתן לחבר WhatsApp Business, Meta Messenger, מערכות ERP ישנות, Google Sheets, מסדי נתונים, ועוד — תלוי בצרכי הארגון.' },
      ],
      en: [
        { question: 'What is Clicks CRM Connections?', answer: 'Clicks CRM Connections bridges monday.com with CRM tools and external interfaces — including WhatsApp Business, Meta Messenger, and legacy systems. Data flows automatically between systems.' },
        { question: 'Is it suitable for public bodies and nonprofits?', answer: 'Yes. Many public bodies and nonprofits run legacy systems that don\'t talk to each other. Clicks CRM Connections creates bridges between existing systems and monday.com.' },
        { question: 'Which systems can be connected?', answer: 'WhatsApp Business, Meta Messenger, legacy ERP systems, Google Sheets, databases and more — depending on organisational needs.' },
      ],
    },
  },
  {
    slug: 'clicks-solutions',
    kind: 'service',
    logo: 'solutions',
    titles: { he: 'Clicks Solutions', en: 'Clicks Solutions' },
    descriptions: {
      he: 'פיתוח מותאם על monday.com — מהאפיון ועד תחזוקה שוטפת.',
      en: 'Bespoke monday.com development — from discovery through ongoing care.',
    },
    leads: {
      he: 'כשאין חבילה מוכנה שמתאימה בדיוק — בונים יחד: לוחות, אוטומציות, אינטגרציות וממשקים לפי תהליכי הארגון, עם FlowGram לאפיון ו-Clicks TSM לתחזוקה.',
      en: 'When no off-the-shelf pack fits exactly — we build together: boards, automations, integrations and interfaces around your processes, with FlowGram for design and Clicks TSM for care.',
    },
    audience: {
      he: 'גופים ציבוריים, רשויות, מפעלים והייטק שצריכים מערכת monday ייחודית מחוברת למערכות קיימות.',
      en: 'Public bodies, municipalities, plants and tech teams that need a tailored monday system wired to what they already run.',
    },
    facts: {
      he: [
        { term: 'שלב בפרויקט', detail: 'גילוי, אפיון, בנייה והטמעה' },
        { term: 'מה מקבלים', detail: 'פתרון monday מלא לפי מפרט מאושר' },
        { term: 'עובד יחד עם', detail: 'FlowGram, מוצרי CMS/GIS ו-Clicks TSM' },
      ],
      en: [
        { term: 'Project phase', detail: 'Discover, architect, build and roll out' },
        { term: 'Deliverable', detail: 'Full monday solution to an approved spec' },
        { term: 'Pairs with', detail: 'FlowGram, CMS/GIS products and Clicks TSM' },
      ],
    },
    problems: {
      he: [
        'תהליכים ייחודיים שלא נכנסים לחבילת CRM מוכנה.',
        'צורך בחיבורים למערכות פנימיות שלא קיימים במוצר סטנדרטי.',
        'צוות פנימי שצריך ליווי מקצועי לאורך כל מחזור החיים.',
      ],
      en: [
        'Unique processes that do not fit a ready CRM pack.',
        'Hooks into internal systems a standard product does not cover.',
        'Internal teams that need expert guidance across the lifecycle.',
      ],
    },
    features: {
      he: [
        { title: 'אפיון משותף', body: 'מפת תהליך, שדות, הרשאות ואוטומציות לפני פיתוח.' },
        { title: 'בנייה על monday', body: 'לוחות, דשבורדים, טפסים וחיבורים לפי המפרט.' },
        { title: 'אינטגרציות', body: 'ERP, GIS, דוא״ל, WhatsApp ומערכות קיימות.' },
        { title: 'העברה ותחזוקה', body: 'הדרכה, תיעוד ומסלול TSM לשוטף.' },
      ],
      en: [
        { title: 'Joint design', body: 'Process map, fields, permissions and automations before build.' },
        { title: 'Build on monday', body: 'Boards, dashboards, forms and connections to spec.' },
        { title: 'Integrations', body: 'ERP, GIS, email, WhatsApp and systems you already use.' },
        { title: 'Handover & care', body: 'Training, documentation and a TSM path for operations.' },
      ],
    },
    scenarios: {
      he: [
        { title: 'מערכת פניות ייחודית', body: 'תהליך רב-מחלקתי עם אישורים ומדדים מותאמים.' },
        { title: 'גשר בין מערכות', body: 'monday כמרכז תפעולי מול ERP ו-GIS.' },
      ],
      en: [
        { title: 'Custom requests system', body: 'Multi-department flow with tailored approvals and KPIs.' },
        { title: 'Systems bridge', body: 'monday as the operations hub against ERP and GIS.' },
      ],
    },
    steps: {
      he: [
        { title: 'גילוי', body: 'מטרות, מגבלות ומערכות קיימות.' },
        { title: 'אפיון ואישור', body: 'מפרט עם FlowGram — לפני שורה בלוח.' },
        { title: 'בנייה והטמעה', body: 'פיתוח, בדיקות, הדרכה ומסירה ל-TSM.' },
      ],
      en: [
        { title: 'Discover', body: 'Goals, constraints and existing systems.' },
        { title: 'Spec & sign-off', body: 'FlowGram-backed spec — before board rows.' },
        { title: 'Build & roll out', body: 'Development, tests, training and TSM handover.' },
      ],
    },
    relatedSlugs: ['flowgram', 'clicks-tsm', 'monday-cms'],
    faq: {
      he: [
        { question: 'מה זה Clicks Solutions?', answer: 'Clicks Solutions הוא ה-umbrella של פתרונות הייעוץ המותאמים אישית של קליקס — כולל בנייה ממוקדת על monday.com, אוטומציות, חיבורים ותהליכי גיוס והטמעה לפי צרכי הארגון.' },
        { question: 'מה ההבדל בין Clicks Solutions לבין המוצרים האחרים?', answer: 'Clicks Solutions הוא הגישה הגמישה — כשהצרכים לא בדיוק מתאימים לפתרון מוכן. אנו בונים פתרון מותאם לתהליכים הספציפיים של הארגון.' },
        { question: 'לאיזה סוגי ארגונים מתאים?', answer: 'לכל ארגון עם תהליכים ייחודיים שלא מתאימים לתבנית — רשויות מקומיות עם צרכים מיוחדים, מפעלים עם תהליכי ייצור מורכבים, מלכ"רים עם פעילות רב-שנתית.' },
      ],
      en: [
        { question: 'What is Clicks Solutions?', answer: "Clicks Solutions is the umbrella for Clicks' bespoke consulting solutions — targeted monday.com builds, automations, integrations and onboarding processes tailored to each organisation's needs." },
        { question: 'How does Clicks Solutions differ from the other products?', answer: "Clicks Solutions is the flexible approach — for when needs don't fit a ready-made product. We build a solution matched to the organisation's specific processes." },
        { question: 'Which types of organisations fit?', answer: "Any organisation with unique processes that don't fit a template — local authorities with special needs, manufacturers with complex production workflows, nonprofits with multi-year programmes." },
      ],
    },
  },
];

const bySlug = new Map(PRODUCT_PAGE_DATA.map((p) => [p.slug, p]));

export function getProductPage(slug: string): ProductPageData | undefined {
  return bySlug.get(slug);
}

export function getRelatedProducts(slugs: string[]): ProductPageData[] {
  return slugs.map((s) => bySlug.get(s)).filter((p): p is ProductPageData => Boolean(p));
}

/** Path segment only — pair with localizedPath(offerPagePath(slug), locale). */
export function offerPagePath(slug: string): string {
  const page = bySlug.get(slug);
  const base = page?.kind === 'product' ? '/products' : '/services';
  return `${base}/${slug}`;
}

export function getProductOffers(): ProductPageData[] {
  return PRODUCT_PAGE_DATA.filter((p) => p.kind === 'product');
}

export function getServiceOffers(): ProductPageData[] {
  return PRODUCT_PAGE_DATA.filter((p) => p.kind === 'service');
}

validateProductInternalLinks(PRODUCT_PAGE_DATA);
