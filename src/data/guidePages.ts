import type { Locale } from '../i18n';

export interface GuidePage {
  slug: string;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  publishDate: string;
  content: Record<
    Locale,
    {
      h1: string;
      intro: string;
      sections: { heading: string; body: string }[];
      cta: string;
    }
  >;
}

export const GUIDE_PAGES: GuidePage[] = [
  {
    slug: 'monday-local-authorities',
    titles: {
      he: 'monday.com לרשויות מקומיות — מדריך מלא',
      en: 'monday.com for Local Authorities — Complete Guide',
    },
    descriptions: {
      he: 'איך רשויות מקומיות ומועצות אזוריות בישראל מיישמות monday.com לניהול תהליכים, שירות אזרחי ותשתיות.',
      en: 'How Israeli local authorities and regional councils implement monday.com to manage processes, citizen services and infrastructure.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'monday.com לרשויות מקומיות — המדריך המלא',
        intro:
          'רשויות מקומיות בישראל עומדות בפני אתגרי ניהול מורכבים: בקשות אזרחים שמגיעות ממגוון ערוצים, תהליכי אישור ארוכים, ניהול תשתיות מרובות ותיאום בין מחלקות. monday.com מאפשר לרשויות לאחד את כל התהליכים האלה בפלטפורמה אחת, גמישה ונגישה.',
        sections: [
          {
            heading: 'אילו תהליכים ניהלה הרשות לפני monday.com?',
            body: 'רשויות מקומיות ניהלו תהליכים בגיליונות אקסל, דוא"ל ומערכות נפרדות שלא תקשרו ביניהן. בקשות אזרחים אבדו בין המחלקות, אישורים התעכבו, ולא היה ניראות אמיתית על סטטוס הבקשות. monday.com פתרה את הבעיה הזו על ידי איחוד כל הבקשות, האישורים והמעקב בלוח אחד שכולם עובדים ממנו.',
          },
          {
            heading: 'מה ניתן לנהל ב-monday.com ברשות?',
            body: 'ניהול בקשות אזרחים, מעקב היתרי בנייה, תיאום צוותי שטח, ניהול תשתיות ורכוש, גיוס עובדים ומתנדבים, תיאום אירועים עירוניים, ניהול ספקים, מעקב תלונות ופניות, ניהול פרויקטים עירוניים ועוד.',
          },
          {
            heading: 'מה ההבדל בין monday.com לבין OneCity או Meser?',
            body: 'OneCity ו-Meser הם מוצרים ייעודיים לרשויות עם יכולות מוגדרות מראש. monday.com הוא פלטפורמה גמישה שאפשר להתאים לכל תהליך. יתרון monday.com: ניתן לשנות ולהרחיב את המערכת בלי לחכות לספק, ולשלב עם כלים קיימים כמו GIS, CRM ומערכות תוכן.',
          },
          {
            heading: 'איך מתחילים?',
            body: 'השלב הראשון הוא מיפוי תהליכים — הבנת מה הרשות צריכה לנהל ואיך התהליכים עובדים כיום. קליקס מלווה רשויות מקומיות מהאפיון ועד לאימון הצוות והתחזוקה השוטפת.',
          },
        ],
        cta: 'לשיחת ייעוץ חינם עם מומחה monday.com לרשויות',
      },
      en: {
        h1: 'monday.com for Local Authorities — The Complete Guide',
        intro:
          'Israeli local authorities face complex management challenges: citizen requests arriving across multiple channels, lengthy approval processes, infrastructure management and cross-department coordination. monday.com lets authorities unify all these processes in one flexible, accessible platform.',
        sections: [
          {
            heading: 'What challenges does monday.com solve for local authorities?',
            body: 'Local authorities traditionally managed processes across Excel sheets, email and separate systems that did not communicate with each other. Citizen requests got lost between departments, approvals were delayed, and there was no real visibility on request status. monday.com solved this by unifying all requests, approvals and tracking in one board that everyone works from.',
          },
          {
            heading: 'What can local authorities manage in monday.com?',
            body: 'Citizen request management, building permit tracking, field team coordination, infrastructure and property management, staff and volunteer recruitment, municipal event coordination, supplier management, complaint tracking, municipal project management and more.',
          },
          {
            heading: 'How does monday.com compare to OneCity or Meser?',
            body: 'OneCity and Meser are dedicated local-authority products with predefined capabilities. monday.com is a flexible platform adaptable to any process. monday.com advantages: the system can be changed and extended without waiting for a vendor, and can integrate with existing tools like GIS, CRM and content systems.',
          },
          {
            heading: 'How do you start?',
            body: 'The first step is process mapping — understanding what the authority needs to manage and how processes currently work. Clicks accompanies local authorities from discovery through team training and ongoing maintenance.',
          },
        ],
        cta: 'Book a free monday.com advisory call for local authorities',
      },
    },
  },
  {
    slug: 'monday-nonprofits',
    titles: {
      he: 'monday.com לעמותות ומלכ"רים — המדריך המלא',
      en: 'monday.com for Nonprofits — Complete Guide',
    },
    descriptions: {
      he: 'כיצד עמותות ומלכ"רים בישראל מנהלים מתנדבים, תורמים ופרויקטים ב-monday.com.',
      en: 'How Israeli nonprofits manage volunteers, donors and projects with monday.com.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'monday.com לעמותות ומלכ"רים',
        intro:
          'עמותות ומלכ"רים מתמודדים עם אתגרים ניהוליים ייחודיים: ניהול מתנדבים שמגיעים ומסיימים תדיר, מעקב תורמים, דיווח לגורמים ממשלתיים ותיאום בין פרויקטים מרובים לעיתים בתקציב מוגבל. monday.com מציע פתרון גמיש במחיר שמתאים לגודל ולצרכים.',
        sections: [
          {
            heading: 'ניהול מתנדבים ב-monday.com',
            body: 'ניהול מאגר מתנדבים, שיבוץ למשמרות ואירועים, מעקב שעות, תקשורת עם מתנדבים ועדכון סטטוס — הכל בלוח אחד. מנהל המתנדבים רואה בזמן אמת מי זמין, מי שובץ ומי צריך תזכורת.',
          },
          {
            heading: 'מעקב תורמים וגיוס כספים',
            body: 'ניהול מאגר תורמים, מעקב תרומות, תזכורות לחידוש תרומות, דוחות לדירקטוריון — ב-monday.com אפשר לבנות מערכת CRM מלאה לגיוס כספים בלי לשלם על מערכת ייעודית יקרה.',
          },
          {
            heading: 'דיווח לגורמים ממשלתיים',
            body: 'עמותות שמקבלות תקצוב ממשרדי ממשלה חייבות לדווח על פעילות, משתתפים ותוצאות. monday.com מאפשר לאסוף נתונים במהלך העבודה ולייצר דוחות אוטומטית בלי להכניס נתונים פעמיים.',
          },
        ],
        cta: 'לשיחת ייעוץ לעמותות ומלכ"רים',
      },
      en: {
        h1: 'monday.com for Nonprofits',
        intro:
          'Nonprofits face unique management challenges: managing volunteers who join and leave regularly, tracking donors, reporting to government funders and coordinating multiple projects often on limited budgets. monday.com offers a flexible solution at a price that matches your scale and needs.',
        sections: [
          {
            heading: 'Managing volunteers in monday.com',
            body: 'Maintain a volunteer database, assign to shifts and events, track hours, communicate with volunteers and update status — all in one board. The volunteer manager sees in real time who is available, who is assigned and who needs a reminder.',
          },
          {
            heading: 'Donor tracking and fundraising',
            body: 'Manage a donor database, track donations, set renewal reminders, generate board reports — monday.com lets you build a complete CRM for fundraising without paying for an expensive dedicated system.',
          },
          {
            heading: 'Government reporting',
            body: 'Nonprofits receiving government funding must report on activities, participants and outcomes. monday.com lets you collect data during normal work and generate reports automatically without double data entry.',
          },
        ],
        cta: 'Book a nonprofit advisory call',
      },
    },
  },
  {
    slug: 'monday-implementation-guide',
    titles: {
      he: 'הטמעת monday.com — המדריך המלא שלב אחר שלב',
      en: 'monday.com Implementation — Complete Step-by-Step Guide',
    },
    descriptions: {
      he: 'כל מה שצריך לדעת על הטמעת monday.com בארגון: שלבים, עלויות, מה לדרוש מהמטמיע ואיך למדוד הצלחה.',
      en: 'Everything you need to know about implementing monday.com: stages, costs, what to demand from your implementer and how to measure success.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'הטמעת monday.com — שלב אחר שלב',
        intro:
          'הטמעת monday.com בהצלחה דורשת יותר מפתיחת לוחות. ארגונים שמצליחים הם אלה שהשקיעו באפיון תהליכים, הגדירו מדדי הצלחה ברורים ועבדו עם מטמיע שמבין את הצרכים הספציפיים שלהם.',
        sections: [
          {
            heading: 'שלב 1: אפיון ומיפוי תהליכים',
            body: 'לפני שפותחים לוח, חשוב להבין אילו תהליכים הארגון צריך לנהל, מי המשתמשים, מה המידע שצריך לעקוב ואילו מערכות קיימות צריכות להתחבר. שלב האפיון חוסך שינויים יקרים בהמשך.',
          },
          {
            heading: 'שלב 2: ארכיטקטורת לוחות ומידע',
            body: 'כיצד יוגדרו הלוחות, הפריטים, הסטטוסים, הקשרים בין לוחות, ההרשאות ומי יכול לראות מה. ארכיטקטורה טובה מאפשרת להרחיב את המערכת בלי לשבור אותה.',
          },
          {
            heading: 'שלב 3: בנייה ואוטומציות',
            body: 'בניית הלוחות לפי האפיון, הגדרת אוטומציות שחוסכות עבודה ידנית, וחיבור לכלים קיימים (Gmail, Slack, GIS, מערכות ERP ועוד).',
          },
          {
            heading: 'שלב 4: אימון והדרכה',
            body: 'הדרכת המשתמשים — בהתאם לתפקידם. מנהלים צריכים לדעת לבנות דוחות, משתמשים קצה צריכים לדעת לעדכן פריטים. אימון ממוקד חוסך שיחות תמיכה בהמשך.',
          },
          {
            heading: 'שלב 5: תחזוקה שוטפת',
            body: 'אחרי ההשקה, המערכת צריכה ליווי: שינויים בתהליכים, תקלות, עדכוני monday.com ופיתוחים חדשים. Clicks TSM מספק תחזוקה שוטפת עם SLA מוגדר.',
          },
        ],
        cta: 'לשיחת ייעוץ על הטמעת monday.com',
      },
      en: {
        h1: 'monday.com Implementation — Step by Step',
        intro:
          'A successful monday.com implementation requires more than opening boards. Organisations that succeed are those that invest in process design, define clear success metrics and work with an implementer who understands their specific needs.',
        sections: [
          {
            heading: 'Step 1: Process discovery and mapping',
            body: 'Before opening a board, understand which processes the organisation needs to manage, who the users are, what data must be tracked and which existing systems need to connect. The discovery phase saves costly changes later.',
          },
          {
            heading: 'Step 2: Board and information architecture',
            body: 'How boards, items, statuses, board relationships, permissions and visibility will be defined. Good architecture lets you extend the system without breaking it.',
          },
          {
            heading: 'Step 3: Build and automations',
            body: 'Building boards to the spec, setting up automations that save manual work, and connecting existing tools (Gmail, Slack, GIS, ERP systems and more).',
          },
          {
            heading: 'Step 4: Training',
            body: 'Training users according to their role. Managers need to know how to build reports; end users need to know how to update items. Targeted training reduces support calls later.',
          },
          {
            heading: 'Step 5: Ongoing maintenance',
            body: 'After launch, the system needs support: process changes, incidents, monday.com updates and new features. Clicks TSM provides ongoing maintenance with a defined SLA.',
          },
        ],
        cta: 'Book a monday.com implementation advisory call',
      },
    },
  },
  {
    slug: 'what-is-monday-cms',
    titles: {
      he: 'מה זה Clicks Monday CMS? ניהול תוכן משולב עם monday.com',
      en: 'What is Clicks Monday CMS? Content Management Integrated with monday.com',
    },
    descriptions: {
      he: 'הסבר מפורט על Clicks Monday CMS — גשר בין monday.com לבין WordPress ו-Webflow לניהול תוכן אוטומטי.',
      en: 'Detailed explainer on Clicks Monday CMS — bridging monday.com with WordPress and Webflow for automated content management.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'Clicks Monday CMS — ניהול תוכן ישירות ממערכת monday.com',
        intro:
          'ארגונים רבים מנהלים מידע ב-monday.com ומידע נוסף באתר שלהם — ומעדכנים את שניהם בנפרד. Clicks Monday CMS יוצר גשר בין שני העולמות: שינוי ב-monday.com מתעדכן אוטומטית באתר.',
        sections: [
          {
            heading: 'איך Clicks Monday CMS עובד?',
            body: 'ה-CMS מסנכרן שורות ממערכת monday.com לדפים, פוסטים וקטלוגים באתר הוורדפרס או Webflow שלכם. כשמוסיפים פריט ב-monday.com — הוא מופיע באתר. כשמשנים סטטוס — הדף מתעדכן. ללא פיתוח ידני.',
          },
          {
            heading: 'לאיזה ארגונים זה מתאים?',
            body: 'רשויות מקומיות שמנהלות קטלוגי שירותים, ארגוני תרבות שמעלים אירועים, עמותות שמפרסמות קריאות למתנדבים, חברות שמנהלות קטלוג מוצרים — כל מי שמעדכן מידע גם ב-monday.com וגם באתר.',
          },
          {
            heading: 'אילו מערכות נתמכות?',
            body: 'WordPress ו-Webflow. תמיכה ב-Wix ומערכות נוספות בפיתוח.',
          },
        ],
        cta: 'לגלות עוד על Clicks Monday CMS',
      },
      en: {
        h1: 'Clicks Monday CMS — Content Management Directly from monday.com',
        intro:
          'Many organisations manage information in monday.com and additional information on their website — updating both separately. Clicks Monday CMS bridges the two worlds: a change in monday.com automatically updates the website.',
        sections: [
          {
            heading: 'How does Clicks Monday CMS work?',
            body: 'The CMS syncs rows from monday.com to pages, posts and catalogues on your WordPress or Webflow website. When you add an item in monday.com — it appears on the website. When you change a status — the page updates. No manual development.',
          },
          {
            heading: 'Which organisations benefit?',
            body: 'Local authorities managing service catalogues, cultural organisations publishing events, nonprofits posting volunteer calls, companies managing product catalogues — anyone updating information in both monday.com and a website.',
          },
          {
            heading: 'Which platforms are supported?',
            body: 'WordPress and Webflow. Wix and additional platforms in development.',
          },
        ],
        cta: 'Learn more about Clicks Monday CMS',
      },
    },
  },
  {
    slug: 'monday-public-sector-automations',
    titles: {
      he: 'אוטומציות monday.com למגזר הציבורי',
      en: 'monday.com Automations for the Public Sector',
    },
    descriptions: {
      he: 'כיצד גופים ציבוריים ורשויות בישראל משתמשים באוטומציות של monday.com לחיסכון בזמן ושגיאות.',
      en: 'How Israeli public bodies and authorities use monday.com automations to save time and eliminate errors.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'אוטומציות monday.com למגזר הציבורי — שימושים ודוגמאות',
        intro:
          'אוטומציות ב-monday.com מאפשרות לגופים ציבוריים לחסוך שעות עבודה חוזרות ונשנות, להפחית שגיאות אנוש ולוודא שתהליכים לא נופלים בין הכיסאות. הנה הדוגמאות הנפוצות ביותר.',
        sections: [
          {
            heading: 'אוטומציות בקשות ואישורים',
            body: 'כשבקשת אזרח מוגשת, מוקצית אוטומטית לגורם הרלוונטי. כשהאחראי לא מגיב תוך X שעות — נשלחת תזכורת. כשהאישור ניתן — האזרח מקבל עדכון אוטומטי. ללא מעקב ידני.',
          },
          {
            heading: 'אוטומציות ניהול תשתיות',
            body: 'תקלה שדווחה ב-monday.com מקבלת אוטומטית תיוג לפי סוג, מוקצית לצוות הנכון ומודיעה למנהל כשהיא בשהייה יותר מדי זמן. מעקב תשתיות בזמן אמת.',
          },
          {
            heading: 'אוטומציות דיווח וממשל',
            body: 'בסוף כל חודש — נשלח דוח אוטומטי לכל מנהל עם סיכום הפעילות. מסמכים שפג תוקפם — מקבלים תזכורת. אישורים תקציביים — מועברים אוטומטית לגורם הבא.',
          },
        ],
        cta: 'לראות דמו של אוטומציות לגופים ציבוריים',
      },
      en: {
        h1: 'monday.com Automations for the Public Sector — Use Cases and Examples',
        intro:
          'Automations in monday.com allow public bodies to save hours of repetitive work, reduce human error and ensure processes don’t fall through the cracks. Here are the most common use cases.',
        sections: [
          {
            heading: 'Request and approval automations',
            body: 'When a citizen request is submitted, it is automatically assigned to the relevant party. If the responsible person does not respond within X hours — a reminder is sent. When approval is granted — the citizen receives an automatic update. No manual tracking.',
          },
          {
            heading: 'Infrastructure management automations',
            body: 'A reported fault in monday.com automatically gets tagged by type, assigned to the right team and notifies the manager when it has been waiting too long. Real-time infrastructure tracking.',
          },
          {
            heading: 'Reporting and governance automations',
            body: 'At the end of every month — an automatic report is sent to every manager with an activity summary. Expired documents trigger reminders. Budget approvals are automatically passed to the next party.',
          },
        ],
        cta: 'See a public sector automation demo',
      },
    },
  },
  {
    slug: 'monday-vs-onecity',
    titles: {
      he: 'monday.com לעומת OneCity — השוואה לרשויות מקומיות',
      en: 'monday.com vs OneCity — Comparison for Local Authorities',
    },
    descriptions: {
      he: 'השוואה מפורטת בין monday.com לבין OneCity לניהול תהליכים ברשויות מקומיות בישראל.',
      en: 'Detailed comparison between monday.com and OneCity for process management in Israeli local authorities.',
    },
    publishDate: '2026-06-01',
    content: {
      he: {
        h1: 'monday.com לעומת OneCity — מה מתאים לרשות שלכם?',
        intro:
          'רשויות מקומיות בישראל לעיתים שוקלות בין monday.com לבין OneCity לניהול תהליכים פנים-ארגוניים. זו השוואה ישירה בין שני הפתרונות.',
        sections: [
          {
            heading: 'מה OneCity מציע?',
            body: 'OneCity הוא מוצר ייעודי לרשויות מקומיות עם מודולים מוכנים לשירות אזרחי, ניהול חניות, רישוי ועוד. הוא מאפשר לרשות להתחיל במהירות בתהליכים קיימים מוגדרים מראש.',
          },
          {
            heading: 'מה monday.com מציע?',
            body: 'monday.com היא פלטפורמת עבודה גמישה שאפשר להתאים לכל תהליך — ללא תלות בספק לשינויים. אפשר לבנות בדיוק את מה שהרשות צריכה, ולחבר לכל מערכת קיימת (GIS, ERP, אתר האינטרנט).',
          },
          {
            heading: 'מי מתאים לאיזה פתרון?',
            body: 'OneCity מתאים לרשות שרוצה להתחיל מהר עם תהליכים סטנדרטיים מוגדרים. monday.com מתאים לרשות שרוצה שליטה מלאה על התהליכים, גמישות לשינויים ואינטגרציה עמוקה עם מערכות קיימות.',
          },
          {
            heading: 'מה עדיף מבחינת עלות?',
            body: 'monday.com עם מטמיע כמו קליקס לרוב עולה פחות לטווח ארוך — כי אין תלות בספק לכל שינוי ותוספת. OneCity עשוי להיות מהיר יותר להתחלה אבל יקר יותר בהתאמות עתידיות.',
          },
        ],
        cta: 'לשיחת ייעוץ — נשמח לעזור לבחור את הפתרון הנכון',
      },
      en: {
        h1: 'monday.com vs OneCity — What is Right for Your Authority?',
        intro:
          'Israeli local authorities often consider monday.com versus OneCity for internal process management. Here is a direct comparison between the two solutions.',
        sections: [
          {
            heading: 'What does OneCity offer?',
            body: 'OneCity is a dedicated local-authority product with ready-made modules for citizen services, parking management, licensing and more. It lets an authority start quickly with pre-defined existing processes.',
          },
          {
            heading: 'What does monday.com offer?',
            body: 'monday.com is a flexible work platform adaptable to any process — without vendor dependency for changes. You can build exactly what the authority needs, and connect to any existing system (GIS, ERP, website).',
          },
          {
            heading: 'Which solution fits whom?',
            body: 'OneCity fits an authority that wants to start quickly with standard defined processes. monday.com fits an authority that wants full control over processes, flexibility to change, and deep integration with existing systems.',
          },
          {
            heading: 'What is more cost-effective?',
            body: 'monday.com with an implementer like Clicks is often less expensive long-term — because there is no vendor dependency for every change and addition. OneCity may be faster to start but more expensive to customise later.',
          },
        ],
        cta: 'Book an advisory call — we will help you choose the right solution',
      },
    },
  },
];

export function getGuide(slug: string): GuidePage | undefined {
  return GUIDE_PAGES.find((g) => g.slug === slug);
}
