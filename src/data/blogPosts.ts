/**
 * Case-study articles — single source for /cases, homepage CaseStudy. (/blog redirects here.)
 */
import type { Locale } from '../i18n';
import type { BlogPost } from './blogTypes';

export const FEATURED_BLOG_SLUG = 'crm-360-service-year';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'crm-360-service-year',
    category: 'case-study',
    featured: true,
    publishDate: '2026-06-01',
    refs: {
      primaryProductSlugs: ['crm-connections'],
      supportingProductSlugs: ['flowgram', 'clicks-solutions', 'clicks-tsm'],
      solutionHref: '/products/clicks-deploy-ready',
      sectorSlugs: ['nonprofits'],
      deliverables: [
        {
          label: {
            he: 'מיפוי מסע מועמד ו-Blueprints ב-Miro',
            en: 'Candidate journey mapping and Miro blueprints',
          },
          productSlug: 'flowgram',
        },
        {
          label: {
            he: 'CRM ליבה: טפסים, תהליכי עבודה ואוטומציות בלוחות',
            en: 'Core CRM: forms, workflows and board automations',
          },
          productSlug: 'clicks-solutions',
        },
        {
          label: {
            he: 'לידים מ-Meta, בוט WhatsApp וערוצי תקשורת',
            en: 'Meta leads, WhatsApp bot and multi-channel comms',
          },
          productSlug: 'crm-connections',
        },
        {
          label: {
            he: 'דשבורדים, איכות נתונים ודיווח ניהולי',
            en: 'Dashboards, data quality and management reporting',
          },
          productSlug: 'clicks-solutions',
        },
      ],
      offerBlurbs: [
        {
          productSlug: 'flowgram',
          blurb: {
            he: 'מסע מועמד מלא — מחשיפה ועד שיבוץ — לפני שורה אחת בלוח.',
            en: 'Full candidate journey — exposure through placement — before a single board row.',
          },
        },
        {
          productSlug: 'crm-connections',
          blurb: {
            he: 'WhatsApp, Messenger ו-Meta מחוברים ללוח מועמדים אחד.',
            en: 'WhatsApp, Messenger and Meta wired into one candidates board.',
          },
        },
        {
          productSlug: 'clicks-solutions',
          blurb: {
            he: 'יישום CRM 360, קשרים בין ישויות ועשרות אוטומציות.',
            en: 'CRM 360 build, entity links and dozens of automations.',
          },
        },
        {
          productSlug: 'clicks-tsm',
          blurb: {
            he: 'תמיכה בהפעלה, בדיקות מקצה לקצה והדרכת משתמשי מפתח.',
            en: 'Go-live support, end-to-end QA and key-user training.',
          },
        },
      ],
    },
    sectorLabel: {
      he: 'גוף חינוכי-חברתי',
      en: 'Social & education nonprofit',
    },
    project: {
      he: 'CRM 360 לשנת שירות',
      en: 'CRM 360 for the service year',
    },
    title: {
      he: 'CRM 360 לשנת שירות — גיוס, שיבוץ ומעקב על monday.com',
      en: 'CRM 360 for the service year — recruitment, placement and tracking on monday.com',
    },
    description: {
      he: 'איך בנינו תהליך אחד לגיוס, מיון, שיבוץ ומעקב חניכה עם FlowGram, CRM Connections וחבילות monday מוכנות.',
      en: 'How we built one process for recruitment, placement and mentorship tracking with FlowGram, CRM Connections and ready monday packs.',
    },
    h1: {
      he: 'גיוס, שיבוץ ומעקב חניכה בלוח CRM 360 אחד',
      en: 'Recruitment, placement and mentorship tracking on one CRM 360 board',
    },
    lead: {
      he: 'ארגון חינוכי גדול ניהל שנת שירות על גיליונות, טפסים מפוזרים ומעקב ידני בין צוותים. בנינו על monday.com תהליך אחד לקליטת מועמדים, שיבוץ, מעקב חניכה ודיווח, עם אפיון לפני הבנייה וערוצי תקשורת שמחוברים ללוח.',
      en: 'A large education org ran its service year on spreadsheets, scattered forms and manual handoffs between teams. We built one monday.com process for candidate intake, placement, mentorship tracking and reporting, with process design before build and communication channels wired to the board.',
    },
    metrics: [
      {
        label: { he: 'תהליכי עבודה בלוחות הליבה', en: 'Core board workflows' },
        value: { he: '25–35', en: '25–35' },
        delta: { he: 'מסע מועמד מלא', en: 'Full candidate journey' },
      },
      {
        label: { he: 'קמפייני Meta מחוברים', en: 'Connected Meta campaigns' },
        value: { he: 'עד 3', en: 'Up to 3' },
        delta: { he: 'לידים → לוח', en: 'Leads → board' },
      },
      {
        label: { he: 'ערוצי תקשורת מרכזיים', en: 'Central comms channels' },
        value: { he: 'WhatsApp + Meta', en: 'WhatsApp + Meta' },
        delta: { he: 'CRM Connections', en: 'CRM Connections' },
      },
      {
        label: { he: 'שלבי אבן בפרויקט', en: 'Project milestones' },
        value: { he: '5', en: '5' },
        delta: { he: 'מיפוי → מסירה', en: 'Map → handoff' },
      },
    ],
    sections: {
      bridge: {
        he: 'הפרויקט לא התחיל בלוח — הוא התחיל ב-FlowGram וב-Miro, ונסגר ב-CRM 360 על monday.com עם Clicks CRM Connections וליווי תפעולי.',
        en: 'The project did not start on a board — it started in FlowGram and Miro, and closed on CRM 360 on monday.com with Clicks CRM Connections and operational care.',
      },
      challenge: {
        he: 'גיוס ומיון מועמדים לשנת שירות פזורים בין קמפיינים, כנסי חשיפה, שאלונים וגיליונות. כל צוות החזיק גרסה אחרת של הסטטוס, ולידים מ-Meta לא הגיעו באופן אחיד ללוח מרכזי. לא הייתה תמונת מנהלים אחת על המרה, שיבוץ או איכות נתונים.',
        en: 'Recruitment and sorting for the service year were split across campaigns, events, questionnaires and spreadsheets. Each team held a different status picture, and Meta leads did not land consistently on one board. Leadership lacked a single view of conversion, placement and data quality.',
      },
      approach: {
        he: 'עבדנו בשלבים ברורים: מיפוי מסע המועמד ותרשימי זרימה משותפים, יישום CRM ליבה לפי תבנית מוסכמת, דשבורדים וניקוי נתונים, ואז חיבור ערוצי תקשורת לפני בדיקות, הדרכה ועלייה מסודרת לאוויר.',
        en: 'We followed Discover → Architect → Build → Operate: mapped the candidate journey and shared flow blueprints, implemented core CRM to best practice, added dashboards and ETL, then wired multi-channel comms — before QA, training and a controlled go-live.',
      },
      built: {
        he: [
          'מיפוי מפורט: מקורות לידים, סטטוסים, מבני לוחות, כרטיסי מועמד/ש"ש/בוגר ושדות רגישים.',
          'CRM ליבה: טפסי הרשמה, אינטייק, שאלוני העדפות, צ\'ק-ליסטים ותצוגות לצוותים.',
          'קשרים בין לידים, מועמדים, יישובים, מסלולים, קומונות ורשויות.',
          'Clicks CRM Connections: WhatsApp Business, Messenger, בוט פניות, סנכרון לשדות וסטטוסים.',
          'דשבורדים: מדדי התקדמות, מקורות לידים, עלות מול תוצאה וסימולציות לשיבוץ.',
        ],
        en: [
          'Detailed mapping: lead sources, statuses, board structures, candidate/alumni cards and sensitive fields.',
          'Core CRM: registration forms, intake, preference questionnaires, checklists and team views.',
          'Links between leads, candidates, communities, tracks and authorities.',
          'Clicks CRM Connections: WhatsApp Business, Messenger, inquiry bot, sync to fields and statuses.',
          'Dashboards: progress metrics, lead sources, basic ROI and placement simulations.',
        ],
      },
      inPractice: {
        he: 'מועמד שנכנס מדף נחיתה או מקמפיין Meta נוצר כליד, עובר אינטייק מובנה ומקבל משימות מעקב לפי סטטוס. שיחות WhatsApp מתועדות באותו תיק — בלי לעבור בין מערכות. מנהלי התוכנית רואים בדשבורד איפה התקע התהליך ומה עומס הקליטה לפני מחזור הגיוס הבא.',
        en: 'A candidate entering from a landing page or Meta campaign becomes a lead, goes through structured intake and receives follow-up tasks by status. WhatsApp conversations stay on the same record — without switching systems. Program leads see on the dashboard where the process stalls and intake load before the next recruitment cycle.',
      },
      outcomes: {
        he: 'מקור אמת אחד לנתוני שנת השירות, פחות מעקב ידני בין גיליונות, וצוותים שמבלים יותר זמן עם החניכים — לא עם העתקות ותיאומים. המערכת מוכנה להרחבות עתידיות (טלפוניה, סינון AI) מתוך אותו אפיון.',
        en: 'One source of truth for service-year data, less manual chasing across sheets, and teams spending more time with participants — not on copy-paste coordination. The system is ready for future extensions (telephony, AI screening) from the same specification.',
      },
    },
  },
  {
    slug: 'regional-business-operations-platform',
    category: 'case-study',
    featured: false,
    publishDate: '2026-06-02',
    refs: {
      primaryProductSlugs: ['monday-cms', 'crm-connections'],
      supportingProductSlugs: ['flowgram', 'clicks-solutions', 'clicks-tsm'],
      solutionHref: '/products/clicks-deploy-ready',
      sectorSlugs: ['regional-clusters', 'local-authorities'],
      deliverables: [
        {
          label: {
            he: 'סנכרון קטלוג ותוכן לעמודי Wix',
            en: 'Catalog and content sync to Wix pages',
          },
          productSlug: 'monday-cms',
        },
        {
          label: {
            he: 'בוט WhatsApp, IVR ודיוור לפי מסע לקוח',
            en: 'WhatsApp bot, IVR and journeys-based messaging',
          },
          productSlug: 'crm-connections',
        },
        {
          label: {
            he: 'Onboarding, SLA ומסעות לקוח רב-שלביים',
            en: 'Onboarding, SLA and multi-step customer journeys',
          },
          productSlug: 'flowgram',
        },
        {
          label: {
            he: 'הקמת סביבות ל-6 רשויות מקומיות',
            en: 'Workspaces for six local authorities',
          },
          productSlug: 'clicks-solutions',
        },
      ],
      offerBlurbs: [
        {
          productSlug: 'monday-cms',
          blurb: {
            he: 'עד מאות עמודי עסקים ב-Wix — מעודכנים מלוח monday אחד.',
            en: 'Hundreds of business pages on Wix — updated from one monday board.',
          },
        },
        {
          productSlug: 'crm-connections',
          blurb: {
            he: 'זרימות WhatsApp, טלפון ודיוור — לידים ולקוחות קיימים באותו CRM.',
            en: 'WhatsApp, phone and broadcast flows — leads and customers on one CRM.',
          },
        },
        {
          productSlug: 'flowgram',
          blurb: {
            he: 'Blueprints למסעות קליטה, SLA ושירותים אזוריים.',
            en: 'Blueprints for intake journeys, SLA and regional services.',
          },
        },
        {
          productSlug: 'clicks-solutions',
          blurb: {
            he: 'מודולים משותפים, פורטל פנימי ואוטומציות רב-ערוציות.',
            en: 'Shared modules, internal portal and omnichannel automations.',
          },
        },
      ],
    },
    sectorLabel: {
      he: 'אשכול אזורי',
      en: 'Regional cluster',
    },
    project: {
      he: 'CRM לליווי עסקים ושירות אזורי',
      en: 'CRM for business support & regional services',
    },
    title: {
      he: 'פלטפורמת תפעול אזורית — CRM, תוכן וערוצי תקשורת',
      en: 'Regional operations platform — CRM, content and channels',
    },
    description: {
      he: 'סנכרון קטלוג לאתר, בוטים ב-WhatsApp, onboarding עם SLA והקמה לרשויות — על monday.com עם monday-CMS ו-CRM Connections.',
      en: 'Site catalog sync, WhatsApp bots, SLA-based onboarding and municipal rollouts — on monday.com with monday-CMS and CRM Connections.',
    },
    h1: {
      he: 'מלוח אחד — קטלוג, שירות לעסקים ותקשורת בכל הערוצים',
      en: 'From one board — catalog, business services and every channel',
    },
    lead: {
      he: 'מיזם אזורי שמלווה עסקים קטנים ובינוניים צריך שהאתר הציבורי, ה-CRM והצוותים בשטח ידברו באותה שפה. חיברנו קטלוג דיגיטלי, מסעות לקוח עם SLA, זרימות WhatsApp וטלפון, והרחבה לרשויות מקומיות — בלי העתקות ידניות בין מערכות.',
      en: 'A regional program supporting small and mid-sized businesses needed its public site, CRM and field teams aligned. We connected a digital catalog, SLA-driven customer journeys, WhatsApp and phone flows, and rollout to local authorities — without manual copy between systems.',
    },
    metrics: [
      {
        label: { he: 'עמודים בקטלוג דיגיטלי', en: 'Digital catalog pages' },
        value: { he: 'עד 550', en: 'Up to 550' },
        delta: { he: 'monday-CMS → אתר', en: 'monday-CMS → site' },
      },
      {
        label: { he: 'רשויות מקומיות', en: 'Local authorities' },
        value: { he: '6', en: '6' },
        delta: { he: 'סביבות מקומיות', en: 'Regional workspaces' },
      },
      {
        label: { he: 'זרימות תקשורת', en: 'Comms flows' },
        value: { he: '3+', en: '3+' },
        delta: { he: 'בוט, IVR, דיוור', en: 'Bot, IVR, broadcast' },
      },
      {
        label: { he: 'מודולי שירות', en: 'Service modules' },
        value: { he: 'ליווי + הכשרות + SLA', en: 'Coaching + training + SLA' },
        delta: { he: 'חבילה מוכנה', en: 'Ready-to-deploy' },
      },
    ],
    sections: {
      bridge: {
        he: 'הפרויקט חיבר אפיון תהליכים (FlowGram) לבנייה על monday.com, monday-CMS לתוכן באתר, ו-Clicks CRM Connections לערוצים שהעסקים כבר משתמשים בהם.',
        en: 'The project linked process design (FlowGram) to builds on monday.com, monday-CMS for site content, and Clicks CRM Connections for channels businesses already use.',
      },
      challenge: {
        he: 'תוכן עסקים באתר לא תמיד תאם את מה שרשום בלוחות monday. פניות הגיעו ב-WhatsApp, בטלפון ובטפסים — בלי מעקב אחיד. יחידות שונות באשכול עבדו על תבניות דומות אך נפרדות, עם הסלמות SLA שלא נמדדו במרכז.',
        en: 'Business content on the public site did not always match monday boards. Inquiries arrived on WhatsApp, phone and forms — without unified tracking. Different units in the cluster used similar but separate templates, with SLAs that were not measured centrally.',
      },
      approach: {
        he: 'שכפלנו והתאמנו תהליכים בין יחידות, הרחבנו מודול שיתוף רשויות, הגדרנו מסעות קליטה עם אוטומציות מייל ו-WhatsApp, והקמנו שידור תוכן מהמאנדיי לאתר.',
        en: 'We adapted processes across units, expanded the authority-sharing module, defined intake journeys with email and WhatsApp automations, and stood up content broadcast from monday to the site.',
      },
      built: {
        he: [
          'קטלוג עסקים: טופס איסוף, לוח נכסים ותהליכי אישור לפני פרסום.',
          'monday-CMS: שידור ועדכון עמודי עסקים באתר מתוך הלוח.',
          'זרימות WhatsApp: זיהוי לפי טלפון/ח.פ., תפריטים, יצירת לידים ועדכון סטטוסים.',
          'מענה טלפוני (IVR): ניתוב לבוט או לשיחה חוזרת עם רישום בלוח שיחות נכנסות.',
          'דיוור לפי מסע לקוח: חימום לידים, אינטייק עצמי או ראיון טלפוני.',
          'סביבת הכשרות, וובינרים, מודול משובים ופורטל פנימי מבוסס CRM.',
        ],
        en: [
          'Business catalog: intake form, assets board and pre-publish approval workflows.',
          'monday-CMS: publish and update business pages on the site from the board.',
          'WhatsApp flows: lookup by phone/ID, menus, lead creation and status updates.',
          'Phone (IVR): route to bot or callback with logging on an inbound-calls board.',
          'Journey-based broadcast: lead warming, self-intake or phone interview paths.',
          'Training environment, webinars, feedback module and CRM-backed internal portal.',
        ],
      },
      inPractice: {
        he: 'עסק שלא רשום מקבל בוט שמאסף פרטים ופותח ליד; לקוח קיים בוחר בין WhatsApp מיידי לבקשת שיחה. צוות השירות רואה את אותו תיק ב-monday, כולל מקור הפנייה. מפעילי התוכן מעדכנים תיאור ומדיה בלוח — והשינוי יורד לאתר בלי עבודה כפולה.',
        en: 'An unregistered business gets a bot that collects details and opens a lead; an existing customer chooses instant WhatsApp or a callback. Service staff see the same record in monday, including the source. Content operators update copy and media on the board — and the change reaches the site without duplicate work.',
      },
      outcomes: {
        he: 'פחות פער בין מה שמוצג באתר למה שמנוהל בתפעול, מענה מהיר יותר בערוצים דיגיטליים, ותשתית אחידה להרחבה לרשויות מקומיות נוספות.',
        en: 'Less gap between what the site shows and what operations manage, faster responses on digital channels, and one foundation to extend to more local authorities.',
      },
    },
  },
  {
    slug: 'volunteer-placement-crm',
    category: 'case-study',
    featured: false,
    publishDate: '2026-06-03',
    refs: {
      primaryProductSlugs: ['crm-connections', 'flowgram'],
      supportingProductSlugs: ['clicks-solutions'],
      solutionHref: '/products/clicks-deploy-ready',
      sectorSlugs: ['nonprofits'],
      deliverables: [
        {
          label: {
            he: 'אפיון מערכת השמה + Blueprints',
            en: 'Placement system design + blueprints',
          },
          productSlug: 'flowgram',
        },
        {
          label: {
            he: '5 טפסי Meta → לוח לידים (make.com)',
            en: '5 Meta forms → leads board (make.com)',
          },
          productSlug: 'crm-connections',
        },
        {
          label: {
            he: 'לוח מדריכים בהשמה ואוטומציות',
            en: 'Instructors-on-placement board and automations',
          },
          productSlug: 'clicks-solutions',
        },
        {
          label: {
            he: 'מעקב נוכחות ברמת רכזים',
            en: 'Coordinator-level attendance tracking',
          },
          productSlug: 'clicks-solutions',
        },
      ],
      offerBlurbs: [
        {
          productSlug: 'flowgram',
          blurb: {
            he: 'שולחן עגול, שני Blueprints: קמפיינים+השמה וניהול אחרי השמה.',
            en: 'Discovery round, two blueprints: campaigns+placement and post-placement ops.',
          },
        },
        {
          productSlug: 'crm-connections',
          blurb: {
            he: 'לידים מקמפיין פעיל ב-Meta נטענים ללוח מרכזי.',
            en: 'Leads from an active Meta campaign land on a central board.',
          },
        },
        {
          productSlug: 'clicks-solutions',
          blurb: {
            he: 'לוח השמה, טופס רישום לדף נחיתה ועד ~25 אוטומציות.',
            en: 'Placement board, landing registration form and ~25 automations.',
          },
        },
      ],
    },
    sectorLabel: {
      he: 'מלכ"ר — גיוס והשמה',
      en: 'Nonprofit — recruitment & placement',
    },
    project: {
      he: 'CRM להשמת מדריכים',
      en: 'Instructor placement CRM',
    },
    title: {
      he: 'CRM להשמה — מליד ב-Meta ועד מעקב אחרי השמה',
      en: 'Placement CRM — from Meta lead to post-placement tracking',
    },
    description: {
      he: 'אפיון מערכת השמה, לוח לידים מרכזי, אינטגרציית Meta ומעקב מדריכים — עם FlowGram ו-CRM Connections.',
      en: 'Placement system design, central leads board, Meta integration and instructor tracking — with FlowGram and CRM Connections.',
    },
    h1: {
      he: 'מקמפיין לידים — להשמה שרצה על לוח אחד',
      en: 'From lead campaign — to placement running on one board',
    },
    lead: {
      he: 'ארגון שמגייס מדריכים להשמה בארץ עבד עם גיליונות, טפסי Meta נפרדים ומעקב ידני אחרי רכזים. הקמנו שלד CRM על monday.com: אפיון משותף ב-Miro, לידים מרכזיים, מסלול מועמד→מדריך בהשמה ואוטומציות שמחליפות צעדים חוזרים.',
      en: 'An org recruiting instructors for national placement relied on spreadsheets, separate Meta forms and manual coordinator tracking. We stood up a CRM skeleton on monday.com: shared Miro specs, a central leads hub, candidate→instructor placement path and automations that replace repetitive steps.',
    },
    metrics: [
      {
        label: { he: 'טפסי לידים מ-Meta', en: 'Meta lead forms' },
        value: { he: '5', en: '5' },
        delta: { he: 'make.com', en: 'make.com' },
      },
      {
        label: { he: 'אוטומציות בלוחות', en: 'Board automations' },
        value: { he: '~25', en: '~25' },
        delta: { he: 'לידים + השמה', en: 'Leads + placement' },
      },
      {
        label: { he: 'פגישות אפיון השמה', en: 'Placement design sessions' },
        value: { he: '6', en: '6' },
        delta: { he: '+ Blueprints', en: '+ blueprints' },
      },
      {
        label: { he: 'מודול נוכחות', en: 'Attendance module' },
        value: { he: 'רכזים אזוריים', en: 'Regional coordinators' },
        delta: { he: 'אחרי השמה', en: 'Post-placement' },
      },
    ],
    sections: {
      bridge: {
        he: 'התהליך נפתח ב-FlowGram ובלוח Miro משותף, נבנה ב-Clicks Solutions על monday.com, וחובר לעולם החיצוני דרך CRM Connections ו-make.com.',
        en: 'Work started in FlowGram and a shared Miro board, was built in Clicks Solutions on monday.com, and connected outward via CRM Connections and make.com.',
      },
      challenge: {
        he: 'לידים מקמפיין פייסבוק לא הגיעו באופן אחיד ללוח אחד. תיק מועמד/מדריך פוזר בין טפסים ומיילים, ורכזים אזוריים לא יכלו לעקוב בנוכחות בלי גיליון נפרד. לא הייתה תמונת ביניים ברורה בין "נרשם" ל"בהשמה בפועל".',
        en: 'Facebook campaign leads did not land consistently on one board. Candidate/instructor files were split across forms and email, and regional coordinators could not track attendance without another sheet. There was no clear picture between "registered" and "actively placed".',
      },
      approach: {
        he: 'פגישת התנעה, אפיון במשותף עם בעלי עניין, שני תרשימי זרימה (קמפיינים+קליטה להשמה / ניהול אחרי השמה), ואז פיתוח לוח לידים, טופס רישום לדף נחיתה, לוח מדריכים בהשמה וחבילת הדרכות.',
        en: 'Kickoff, joint specification with stakeholders, two flow diagrams (campaigns+intake to placement / post-placement management), then a leads board, landing registration form, instructors-on-placement board and a training package.',
      },
      built: {
        he: [
          'לוח לידים מרכזי עם שדות מותנים, תיק מועמד/מדריך וסנכרון מ-5 טפסי Meta.',
          'טופס רישום לדף נחיתה ייעודי.',
          'לוח מדריכים בהשמה: סטטוס מעקב ובקרה אחרי השמה בפועל.',
          'מודול מעקב נוכחות "וולנטרי" לרכזים אזוריים.',
          'תחזוקת אוטומציות, אינטגרציות Native ו-make.com לתקופת ההפעלה.',
        ],
        en: [
          'Central leads board with conditional fields, candidate/instructor dossier and sync from 5 Meta forms.',
          'Registration form for a dedicated landing page.',
          'Instructors-on-placement board: status tracking after active placement.',
          '"Voluntary" attendance module for regional coordinators.',
          'Care for automations, native integrations and make.com during go-live.',
        ],
      },
      inPractice: {
        he: 'ליד מקמפיין נכנס ללוח עם מקור ושדות מותאמים, עובר לתיק מועמד וממשיך למסלול השמה כשהוא מוכן. רכז אזורי מזין נוכחות בלוח ייעודי במקום גיליון צד. מנהל התוכנית רואה כמה מדריכים בכל שלב — בלי לרדוף אחרי עותקים במייל.',
        en: 'A campaign lead enters the board with source and tailored fields, moves to a candidate file and continues to the placement track when ready. A regional coordinator logs attendance on a dedicated board instead of a side sheet. Program managers see how many instructors are in each stage — without chasing email copies.',
      },
      outcomes: {
        he: 'מסלול גיוס→השמה שקוף יותר, פחות העתקות ידניות מ-Meta, ותשתית שניתן להרחיב בהדרכות ואוטומציות נוספות ככל שהארגון מבשל את התהליך.',
        en: 'A clearer recruitment→placement path, less manual copying from Meta, and a foundation that can grow with more training and automations as the org matures the process.',
      },
    },
  },
  {
    slug: 'regional-tourism-permits-crm',
    category: 'case-study',
    featured: false,
    publishDate: '2026-06-04',
    refs: {
      primaryProductSlugs: ['monday-gis', 'flowgram'],
      supportingProductSlugs: ['clicks-solutions', 'crm-connections'],
      solutionHref: '/products/clicks-deploy-ready',
      sectorSlugs: ['regional-clusters', 'public-sector'],
      deliverables: [
        {
          label: {
            he: 'תיקי יזם ומתחם עם חיווי זמינות שטח',
            en: 'Entrepreneur & site dossiers with land-availability signal',
          },
          productSlug: 'monday-gis',
        },
        {
          label: {
            he: 'אינטייק מותאם ומסלולי היתר/תיירות',
            en: 'Tailored intake and permitting/tourism paths',
          },
          productSlug: 'flowgram',
        },
        {
          label: {
            he: 'Handovers דו-כיווניים בין יחידות באשכול',
            en: 'Bidirectional handovers between cluster units',
          },
          productSlug: 'clicks-solutions',
        },
        {
          label: {
            he: 'טופס שאלון יזם ודף מידע להורדה',
            en: 'Entrepreneur questionnaire and downloadable info sheet',
          },
          productSlug: 'crm-connections',
        },
      ],
      offerBlurbs: [
        {
          productSlug: 'monday-gis',
          blurb: {
            he: 'מיפוי אזורים, תכליות מותרות וחיווי "רמזור" ליזמים.',
            en: 'Zone mapping, permitted uses and a traffic-light signal for entrepreneurs.',
          },
        },
        {
          productSlug: 'flowgram',
          blurb: {
            he: 'מסע מועמד מהיתר דרך אינטייק ועד שיבוץ לשירותי ליווי.',
            en: 'Journey from permit request through intake to support services.',
          },
        },
        {
          productSlug: 'clicks-solutions',
          blurb: {
            he: 'CRM רב-טננטי: מרכז היתרים, תיירות 360 ושיתוף עם רשויות.',
            en: 'Multi-tenant CRM: permitting hub, tourism 360 and authority sharing.',
          },
        },
      ],
    },
    sectorLabel: {
      he: 'אשכול אזורי — תכנון ותיירות',
      en: 'Regional cluster — planning & tourism',
    },
    project: {
      he: 'CRM 360 להיתרים ולפיתוח תיירות',
      en: 'CRM 360 for permits & tourism development',
    },
    title: {
      he: 'תיירות והיתרים על לוח אחד — מיזם ועד חיווי שטח',
      en: 'Tourism & permits on one board — from inquiry to land signal',
    },
    description: {
      he: 'תיקי יזם, מרכז היתרים, תיירות 360 ו-handoffs בין גורמים — עם monday-GIS, FlowGram ו-CRM על monday.com.',
      en: 'Entrepreneur dossiers, permitting hub, tourism 360 and cross-unit handoffs — with monday-GIS, FlowGram and CRM on monday.com.',
    },
    h1: {
      he: 'מדף נחיתה אחד — תיק יזם, היתר ושירותי ליווי מחוברים',
      en: 'One landing path — entrepreneur file, permit and support services linked',
    },
    lead: {
      he: 'אשכול אזורי שמנהל בקשות היתר, יזמות תיירות ושיתוף עם גורמי ליווי עסקי צריך CRM אחד עם מידור הרשאות וחיווי שטח ליזמים. בנינו מסלול מקצה לקצה: שאלון יזם, תיק מתחם, אינטייקים מותאמים ו-handoffs ליחידות הרלוונטיות.',
      en: 'A regional cluster managing permit requests, tourism ventures and ties to business-support units needed one CRM with permission tiers and land signals for entrepreneurs. We built an end-to-end path: entrepreneur questionnaire, site dossier, tailored intakes and handoffs to the right units.',
    },
    metrics: [
      {
        label: { he: 'סביבות CRM מקושרות', en: 'Linked CRM environments' },
        value: { he: '2+', en: '2+' },
        delta: { he: 'היתרים + תיירות', en: 'Permits + tourism' },
      },
      {
        label: { he: 'סוגי אינטייק', en: 'Intake types' },
        value: { he: 'מותאמים', en: 'Tailored' },
        delta: { he: 'עם/בלי pre-rolling', en: 'With/without pre-rolling' },
      },
      {
        label: { he: 'Handovers', en: 'Handovers' },
        value: { he: 'דו-כיווני', en: 'Bidirectional' },
        delta: { he: 'בין יחידות', en: 'Across units' },
      },
      {
        label: { he: 'מקורות כניסה', en: 'Entry points' },
        value: { he: 'דף נחיתה + CRM', en: 'Landing + CRM' },
        delta: { he: 'טופס ללא התחברות', en: 'Form without login' },
      },
    ],
    sections: {
      bridge: {
        he: 'הפרויקט שילב FlowGram למסעות, monday-GIS לשכבת מרחב, ו-Clicks Solutions ל-CRM רב-גורמי עם handoffs.',
        en: 'The project combined FlowGram for journeys, monday-GIS for spatial layer, and Clicks Solutions for multi-stakeholder CRM with handoffs.',
      },
      challenge: {
        he: 'יזמים נכנסים מדפי נחיתה אך המידע התפזר בין מערכות תכנון, תיירות וליווי עסקי. לא הייתה תמונה אחת על זמינות שטח, סטטוס היתר או המשך לשירותי תמיכה — והרשאות משתמשים היו מורכבות.',
        en: 'Entrepreneurs entered from landing pages but data was split across planning, tourism and business-support systems. There was no single view of land availability, permit status or handoff to support — and user permissions were complex.',
      },
      approach: {
        he: 'הגדרנו היררכיית טננטים ומשתמשים, תיקי יזם/מתחם, אינטייקים לפי סוג בקשה, חיווי "רמזור" לזמינות שטח, ומסלולי handoff לרשויות ולשירותי ליווי.',
        en: 'We defined tenant/user hierarchy, entrepreneur/site dossiers, intakes by request type, a traffic-light land signal, and handoff paths to authorities and support services.',
      },
      built: {
        he: [
          'טופס שאלון יזם מדף נחיתה — ללא התחברות — עם יצירת תיק וליד.',
          'תיק מתחם עם העשרה ממחסן נתונים וחיווי זמינות שטח.',
          'אינטייקים נפרדים: עם/בלי pre-rolling, אופציה למילוי עצמי או ראיון מרכז.',
          'מיפוי מתחמי תיירות ומסלולי העברה לשירותי ליווי עסקי.',
          'Handovers דו-כיווניים בין מרכז היתרים, תיירות 360, רשויות ושותפים.',
        ],
        en: [
          'Entrepreneur questionnaire from a landing page — no login — with dossier and lead creation.',
          'Site dossier enriched from a data warehouse and land-availability signal.',
          'Separate intakes: with/without pre-rolling, self-service or center interview.',
          'Tourism-zone mapping and routing to business-support services.',
          'Bidirectional handovers between permitting hub, tourism 360, authorities and partners.',
        ],
      },
      inPractice: {
        he: 'יזם ממלא שאלון, מקבל דף מידע PDF ורואה חיווי שטח ראשוני. אם נדרש היתר — נפתח מסלול מרכז היתרים; אם מדובר בתיירות — מתעדכן תיק משותף עם יחידת התיירות. שינוי סטטוס בידי גוף מלווה מחזיר משוב לתיק היזם ב-monday.',
        en: 'An entrepreneur completes a questionnaire, receives a PDF info sheet and sees an initial land signal. If a permit is needed — the permitting track opens; for tourism — a shared dossier updates with the tourism unit. A status change by a support body feeds back to the entrepreneur file in monday.',
      },
      outcomes: {
        he: 'מסלול אחד ליזם, פחות כפילויות בין יחידות, ותשתית שניתן להרחיב למדיניות אזורית ולדיווח מרכזי.',
        en: 'One path for the entrepreneur, less duplication between units, and a foundation that can extend to regional policy and central reporting.',
      },
    },
  },
  {
    slug: 'nonprofit-endpoint-fleet-support',
    category: 'case-study',
    featured: false,
    publishDate: '2026-06-05',
    refs: {
      primaryProductSlugs: ['clicks-tsm'],
      supportingProductSlugs: ['clicks-solutions'],
      sectorSlugs: ['nonprofits'],
      deliverables: [
        {
          label: {
            he: 'תקן פריסה ואיקטוב עשרות תחנות עבודה',
            en: 'Deployment standard and rollout across dozens of workstations',
          },
          productSlug: 'clicks-solutions',
        },
        {
          label: {
            he: 'לוח מלאי מחשבים, משתמשים ורישיונות',
            en: 'Computer inventory, users and license board',
          },
          productSlug: 'clicks-solutions',
        },
        {
          label: {
            he: 'לוח תמיכה, SLA ומעקב קריאות שוטף',
            en: 'Support board, SLA and ongoing ticket tracking',
          },
          productSlug: 'clicks-tsm',
        },
        {
          label: {
            he: 'נוהל הרשאות, גיבוי ועדכוני אבטחה',
            en: 'Access policy, backup and security-update routine',
          },
          productSlug: 'clicks-tsm',
        },
      ],
      offerBlurbs: [
        {
          productSlug: 'clicks-tsm',
          blurb: {
            he: 'תמיכה טכנית שוטפת: קליטת תקלות, עדיפויות וסגירה על לוח monday.',
            en: 'Ongoing technical support: intake, priorities and closure on a monday board.',
          },
        },
        {
          productSlug: 'clicks-solutions',
          blurb: {
            he: 'איקטוב ותצורה אחידה לעשרות מחשבים — לפני שהתמיכה נכנסת לשגרה.',
            en: 'Uniform setup and configuration for dozens of PCs — before support goes into routine.',
          },
        },
      ],
    },
    sectorLabel: {
      he: 'עמותה ללא כוונת רווח',
      en: 'Mission-driven nonprofit',
    },
    project: {
      he: 'פריסת צי מחשבים ותמיכה שוטפת',
      en: 'Endpoint fleet rollout and ongoing support',
    },
    title: {
      he: 'עשרות מחשבים בעמותה — פריסה אחידה ותמיכה טכנית שוטפת',
      en: 'Dozens of PCs at a nonprofit — uniform rollout and ongoing IT support',
    },
    description: {
      he: 'איך איקטבנו ותצרנו עשרות תחנות עבודה לעמותה חברתית, והשארנו תמיכה שוטפת דרך Clicks TSM על monday.com.',
      en: 'How we configured dozens of workstations for a social nonprofit and kept ongoing support running through Clicks TSM on monday.com.',
    },
    h1: {
      he: 'מאיקטוב עשרות מחשבים — לתמיכה שוטפת שמחזיקה את העמותה בעבודה',
      en: 'From rolling out dozens of PCs — to ongoing support that keeps the nonprofit running',
    },
    lead: {
      he: 'עמותה ללא כוונת רווח שמריצה פעילות שטח רחבה הגיעה עם מחשבים מפוזרים, גרסאות שונות ואין גוף שממשיך אחרי "סגירת הפרויקט". איקטבנו עשרות תחנות לפי תקן אחיד, ריכזנו מלאי ומשתמשים בלוח monday, וסיפקנו תמיכה טכנית שוטפת דרך Clicks TSM — קריאות, SLA ושגרת תחזוקה.',
      en: 'A nonprofit running broad field programs arrived with scattered machines, mixed versions and no team left after "project close". We configured dozens of endpoints to one standard, centralized inventory and users on a monday board, and provided ongoing technical support through Clicks TSM — tickets, SLAs and a maintenance routine.',
    },
    metrics: [
      {
        label: { he: 'תחנות עבודה באיקטוב', en: 'Workstations configured' },
        value: { he: '40+', en: '40+' },
        delta: { he: 'תקן פריסה אחיד', en: 'Single deployment standard' },
      },
      {
        label: { he: 'לוח תמיכה ו-SLA', en: 'Support board & SLA' },
        value: { he: 'Clicks TSM', en: 'Clicks TSM' },
        delta: { he: 'תמיכה שוטפת', en: 'Ongoing support' },
      },
      {
        label: { he: 'מלאי ורישיונות', en: 'Inventory & licenses' },
        value: { he: 'לוח monday', en: 'monday board' },
        delta: { he: 'Clicks Solutions', en: 'Clicks Solutions' },
      },
      {
        label: { he: 'זמני תגובה מוגדרים', en: 'Defined response tiers' },
        value: { he: '3 רמות', en: '3 tiers' },
        delta: { he: 'קריאות + מרחוק', en: 'Tickets + remote' },
      },
    ],
    sections: {
      bridge: {
        he: 'הפריסה והמלאי בוצעו ב-Clicks Solutions על monday.com; התמיכה השוטפת רצה ב-Clicks TSM — אותו מקום לקריאות, הרשאות ודוחות למנהלים.',
        en: 'Rollout and inventory ran in Clicks Solutions on monday.com; ongoing support runs in Clicks TSM — one place for tickets, access and leadership reports.',
      },
      challenge: {
        he: 'מחשבים שנקנו בשנים שונות, בלי תיעוד מרכזי של מי משתמש במה. עדכוני אבטחה ואנטי-וירוס לא אחידים, ותקלות נפתרות בוואטסאפ אצל מתנדב "שמבין במחשבים". לא הייתה בעלות ברורה אחרי שהקבלן הראשון עזב.',
        en: 'Machines bought in different years with no central record of who uses what. Security and antivirus updates were inconsistent, and issues were fixed over WhatsApp by a volunteer "who knows computers". There was no clear owner after the first contractor left.',
      },
      approach: {
        he: 'סקר צי קיים, הגדרת תקן פריסה (חשבונות, עדכונים, גיבוי, תוכנות ליבה), גל איקטוב לפי מחלקות/סניפים, ואז מעבר ללוח תמיכה עם SLA ואחראים קבועים מצד קליקס.',
        en: 'Survey the existing fleet, define a deployment standard (accounts, updates, backup, core apps), roll out in waves by team or site, then move to a support board with SLAs and named owners on the Clicks side.',
      },
      built: {
        he: [
          'איקטוב ותצורה לעשרות מחשבים — Windows ו-Mac — לפי צ׳ק-ליסט אחיד.',
          'לוח מלאי: מחשב, משתמש, מיקום, רישיון Office/אנטי-וירוס ותאריך אחרון לעדכון.',
          'לוח קריאות Clicks TSM: קליטה, עדיפות, טיפול מרחוק או בשטח, סגירה ומדידה.',
          'נוהל הרשאות וגיבוי — בקשות גישה מתועדות, לא שינוי ידני בלי יומן.',
          'דוח חודשי קצר למנהל תפעול: פתוחות, זמני תגובה ומחשבים שדורשים החלפה.',
        ],
        en: [
          'Configuration of dozens of PCs — Windows and Mac — against one checklist.',
          'Inventory board: machine, user, site, Office/antivirus license and last patch date.',
          'Clicks TSM ticket board: intake, priority, remote or on-site fix, close and measure.',
          'Access and backup routine — documented access requests, not ad-hoc local admin.',
          'Short monthly report for operations: open items, response times and machines due for replacement.',
        ],
      },
      inPractice: {
        he: 'עובד פונה עם תקלה — נפתחת קריאה בלוח, מקבלת עדיפות ואחראי. טכנאי מתחבר מרחוק או מגיע לסניף, מעדכן את רשומת המחשב במלאי וסוגר עם סיכום. מנהל התפעול רואה בדשבורד כמה קריאות פתוחות ומה עמד ב-SLA — בלי לרדוף אחרי הודעות פזורות.',
        en: 'A staff member reports an issue — a ticket opens on the board with priority and owner. A technician connects remotely or visits a site, updates the machine record in inventory and closes with a short summary. Operations leads see open volume and SLA adherence on a dashboard — without chasing scattered messages.',
      },
      outcomes: {
        he: 'צי מחשבים שמדבר באותה שפה, תמיכה שוטפת עם מי שמכיר את הארגון, ותיעוד שמאפשר להחליף מחשב או משתמש בלי לאבד הקשר.',
        en: 'A fleet that speaks one language, ongoing support from a team that knows the org, and documentation that makes replacing a machine or user possible without losing context.',
      },
    },
  },
];

const bySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPost | undefined {
  return bySlug.get(slug);
}

export function getFeaturedBlogPost(): BlogPost {
  const post = bySlug.get(FEATURED_BLOG_SLUG);
  if (!post) throw new Error(`Featured blog post missing: ${FEATURED_BLOG_SLUG}`);
  return post;
}

export function getCaseStudyPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === 'case-study');
}

export function getBlogPostLocale(post: BlogPost, locale: Locale) {
  return {
    sectorLabel: post.sectorLabel[locale],
    project: post.project[locale],
    title: post.title[locale],
    description: post.description[locale],
    h1: post.h1[locale],
    lead: post.lead[locale],
    metrics: post.metrics.map((m) => ({
      label: m.label[locale],
      value: m.value[locale],
      delta: m.delta?.[locale],
    })),
    sections: {
      bridge: post.sections.bridge[locale],
      challenge: post.sections.challenge[locale],
      approach: post.sections.approach[locale],
      built: post.sections.built[locale],
      inPractice: post.sections.inPractice[locale],
      outcomes: post.sections.outcomes[locale],
    },
  };
}
