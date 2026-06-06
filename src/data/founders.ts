/**
 * Founders — single source for bios, LinkedIn, photos (HE + EN).
 */
import type { Locale } from '../i18n';
import sapirPhoto from '../assets/founders/sapir-hassidim.png';
import amitPhoto from '../assets/founders/amit-aizenkot.png';
import type { ImageMetadata } from 'astro';

export interface FounderData {
  id: 'sapir' | 'amit';
  linkedin: string;
  photo: ImageMetadata;
  name: Record<Locale, string>;
  role: Record<Locale, string>;
  /** Hero paragraph — focused, proof-forward */
  hero: Record<Locale, string>;
  focus: Record<Locale, string>;
  linkedinLabel: Record<Locale, string>;
}

export const FOUNDERS: FounderData[] = [
  {
    id: 'sapir',
    linkedin: 'https://www.linkedin.com/in/sapir-hassidim-73805b342/',
    photo: sapirPhoto,
    name: { he: 'ספיר חסידים', en: 'Sapir Hassidim' },
    role: { he: 'מייסד ומנכ"ל', en: 'Founder & CEO' },
    hero: {
      he: 'מנכ"ל קליקס ופנים מול הלקוח בפרויקטים מול משרדי ממשלה, רשויות ומלכ"רים. מוביל אסטרטגיה, הצעות וחדרי ישיבות, ומוודא שפתרון monday.com מתאים לתהליך האמיתי: מגילוי ראשוני, דרך הצעה או מכרז, ועד שהמערכת רצה אצל האנשים בשטח.',
      en: 'CEO of Clicks and the client-facing lead on public-sector engagements. Owns strategy, proposals and stakeholder alignment, and makes sure the monday.com solution fits how work actually runs: from first discovery and RFPs through rollout people use every day.',
    },
    focus: {
      he: 'אסטרטגיה · לקוח · הנהגה',
      en: 'Strategy · Client leadership · Executive direction',
    },
    linkedinLabel: {
      he: 'פרופיל LinkedIn של ספיר',
      en: 'Sapir on LinkedIn',
    },
  },
  {
    id: 'amit',
    linkedin: 'https://www.linkedin.com/in/amit-aizenkot-a84730185/',
    photo: amitPhoto,
    name: { he: 'עמית איזנקוט', en: 'Amit Aizenkot' },
    role: { he: 'מייסד ומנהל טכנולוגיות', en: 'Co-Founder & Head of Technology' },
    hero: {
      he: 'מוביל פיתוח וארכיטקטורה מקצה לקצה: קוד, אינטגרציות ופרויקטים מורכבים על monday.com ובמערכות סביבו. מפתח ומנהל פרויקטים טכנולוגיים מנוסה; בונה מוצרים, אוטומציות ומערכות שצריכות לעבוד בשטח, לא להישאר בהוכחת היתכנות.',
      en: 'Technical creator who leads delivery end to end: architecture, code, integrations and complex builds on monday.com and the systems around it. An experienced developer and technology project manager; ships products, automation and platforms that have to hold up in production, not stop at a proof of concept.',
    },
    focus: {
      he: 'פיתוח · ארכיטקטורה · הובלת פרויקטים טכנולוגיים',
      en: 'Engineering · Architecture · Technical project leadership',
    },
    linkedinLabel: {
      he: 'פרופיל LinkedIn של עמית',
      en: 'Amit on LinkedIn',
    },
  },
];

/** Company story — shared by /about and homepage founders section */
export const FOUNDERS_STORY: Record<Locale, readonly string[]> = {
  he: [
    'בתחילת מלחמת חרבות ברזל התנדב ספיר לסייע לפיקוד העורף.',
    'בתוך קצב עבודה מהיר, לחץ מתמשך והרבה גורמים מעורבים, הוא ראה שוב ושוב את אותה בעיה: מידע מפוזר, משימות כפולות וחוסר שקיפות שהקשה לקבל החלטות בזמן.',
    'הפתרון לא היה עוד מערכת כבדה, אלא דרך עבודה שמראה לכולם אותה תמונה: מה פתוח, מי אחראי ומה צריך לקרות עכשיו.',
    'כשהשיטה התחילה לעבוד, התברר שזה לא אתגר של חירום בלבד. גם רשויות, עמותות ומפעלים מתקשים להפוך כוונות לביצוע כשהתהליך, המידע והאנשים לא מחוברים.',
    'ספיר, שצמח במשרד הפנים, מביא עמו היכרות עמוקה עם המגזר הציבורי, עם תהליכי קבלת החלטות ועם המציאות היומיומית של הלקוחות.',
    'עמית, בוגר יחידת 8200 ובעל ניסיון עשיר בהייטק, מתמחה בבניית פתרונות טכנולוגיים ובהפיכת רעיונות מורכבים למערכות שעובדות בפועל.',
    'מתוך התפיסה הזו נולדה קליקס.',
    'היום קליקס מלווה לקוחות משלב האפיון, דרך בניית הלוחות והאוטומציות, ועד תחזוקה והטמעה אצל האנשים שעובדים במערכת מדי יום.',
  ],
  en: [
    'At the beginning of the Iron Swords war, Sapir volunteered to support Home Front Command.',
    'In a fast-moving environment with pressure and many stakeholders, he kept seeing the same problem: scattered information, duplicated tasks and limited visibility for timely decisions.',
    'The answer was not another heavy system, but a way of working that showed everyone the same picture: what is open, who owns it and what needs to happen now.',
    'When that method started working, it became clear this was not only an emergency problem. Municipalities, nonprofits and manufacturers face the same challenge when process, information and people are disconnected.',
    'Sapir, who grew up in Israel’s Ministry of Interior, brings deep familiarity with the public sector, decision-making processes and clients’ day-to-day reality.',
    'Amit, a graduate of Unit 8200 with extensive high-tech experience, specializes in building technology solutions and turning complex ideas into systems that work in practice.',
    'That is how Clicks was born.',
    'Today Clicks supports clients from discovery, through boards and automations, to maintenance and adoption by the people who use the system every day.',
  ],
};

/** Standout line in the founding story (rendered bold) */
export const FOUNDERS_STORY_EMPHASIS: Record<Locale, string> = {
  he: 'מתוך התפיסה הזו נולדה קליקס.',
  en: 'That is how Clicks was born.',
};

export const FOUNDERS_SECTION = {
  he: {
    title: 'חברת ייעוץ עם מייסדים בחזית',
    storyTeaser:
      'מתוך עבודה בשטח בתקופה מאתגרת, כשמידע, משימות ואחריות לא היו מחוברים, חיפשנו דרך עבודה שאנשים באמת יכולים להשתמש בה. משם גדלה קליקס: ייעוץ, בנייה ותחזוקה של תהליכים על monday.com.',
    storyMore: 'לסיפור ההקמה המלא',
    foundersLead: 'על המייסדים',
    aboutCta: 'עוד על קליקס',
  },
  en: {
    title: 'A consulting firm with founders at the front',
    storyTeaser:
      'From field work during a demanding period, when information, tasks and ownership were disconnected, we looked for a way of working people could actually use. That is how Clicks grew: consulting, build and maintenance for monday.com workflows.',
    storyMore: 'Read our full founding story',
    foundersLead: 'About the founders',
    aboutCta: 'More about Clicks',
  },
} as const;
