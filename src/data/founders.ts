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
      he: 'יוצר טכנולוגי שמוביל פיתוח מקצה לקצה: ארכיטקטורה, קוד, אינטגרציות ופרויקטים מורכבים על monday.com ובמערכות סביבו. מפתח ומנהל פרויקטים טכנולוגיים מנוסה; בונה מוצרים, אוטומציות ומערכות שחייבות לעמוד בשטח, לא להיעצר ב-POC.',
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
    'בתוך מציאות של לחץ מתמשך, אי־ודאות וקצב עבודה שלא עוצר לרגע, הוא פגש אנשים מסורים שפעלו סביב השעון למען מטרה משותפת.',
    'לצד המחויבות והעשייה, הוא זיהה גם אתגרים שחזרו על עצמם: מידע מפוזר בין גורמים שונים, משימות שחופפות זו לזו וחוסר שקיפות שהקשה על קבלת החלטות בזמן אמת.',
    'במקום לחפש אשמים או תירוצים, הוא חיפש פתרון.',
    'לא עוד מערכת מורכבת, אלא דרך עבודה שתאפשר לכל המעורבים לראות את אותה תמונה, להבין מה מצב המשימות, ומי אחראי לכל שלב בתהליך.',
    'כך הוטמעו לראשונה שיטות עבודה סדורות — לא כפרויקט טכנולוגי, אלא ככלי שמאפשר לאנשים לעבוד יחד בצורה טובה יותר.',
    'התוצאות הגיעו מהר: תיאום טוב יותר בין גורמים, טיפול מהיר יותר בבקשות וסגירת מעגלים אפקטיבית גם בתנאי לחץ.',
    'כשהמודל הוכיח את עצמו, התחדדה ההבנה שמדובר באתגר רחב הרבה יותר. ארגונים רבים יודעים מה הם רוצים להשיג, אך מתקשים להפוך כוונות לביצוע כאשר התהליכים, המידע והאנשים אינם מחוברים זה לזה.',
    'ספיר ועמית נפגשו סביב אותה תפיסה. שניהם מאמינים שטכנולוגיה היא אמצעי — לא מטרה.',
    'המטרה היא לגרום לארגונים לעבוד טוב יותר, לשרת טוב יותר ולהשיג יותר.',
    'ספיר, שצמח במשרד הפנים, מביא עמו היכרות עמוקה עם המגזר הציבורי, עם תהליכי קבלת החלטות ועם המציאות היומיומית של הלקוחות.',
    'עמית, בוגר יחידת 8200 ובעל ניסיון עשיר בהייטק, מתמחה בבניית פתרונות טכנולוגיים ובהפיכת רעיונות מורכבים למערכות שעובדות בפועל.',
    'למרות הרקע השונה, הם חולקים אמונה משותפת ופשוטה: אם הפתרון לא עובד בשטח עבור האנשים שמשתמשים בו מדי יום — הוא לא באמת פתרון.',
    'מתוך התפיסה הזו נולדה קליקס.',
    'קליקס היא חברת ייעוץ והטמעת פתרונות שמסייעת לארגונים לחבר בין אנשים, תהליכים וטכנולוגיה.',
    'אנחנו מלווים את הלקוח לכל אורך הדרך — משלב האפיון והחשיבה האסטרטגית, דרך בניית התהליך והמערכת, ועד להטמעה מלאה אצל המשתמשים בקצה.',
    'אנחנו עובדים עם משרדי ממשלה, רשויות מקומיות, מלכ"רים, מפעלים וחברות הייטק — מתוך אותה מטרה: להפוך תהליכים מורכבים לעבודה ברורה, יעילה ומחוברת למציאות.',
    'כי בסופו של דבר, מערכות לא משנות ארגונים. אנשים עושים זאת — והמערכות צריכות לעזור להם להצליח.',
  ],
  en: [
    'At the beginning of the Iron Swords war, Sapir volunteered to support Home Front Command.',
    'In a reality of sustained pressure, uncertainty and a pace of work that never paused, he met people who worked around the clock toward a shared goal.',
    'Alongside that commitment, he saw challenges that kept repeating: information scattered across teams, overlapping tasks and a lack of visibility that made real-time decisions harder.',
    'Instead of looking for blame or excuses, he looked for a solution.',
    'Not another complex system, but a way of working that would let everyone involved see the same picture, understand the state of tasks and know who owns each step in the process.',
    'That is when structured ways of working were introduced for the first time — not as a technology project, but as a tool that helps people work together more effectively.',
    'Results came quickly: better coordination, faster handling of requests and effective closure of loops even under pressure.',
    'When the model proved itself, a wider truth became clear: many organizations know what they want to achieve, but struggle to turn intent into execution when processes, information and people are not connected.',
    'Sapir and Amit came together around the same view. Both believe technology is a means — not an end.',
    'The goal is to help organizations work better, serve better and achieve more.',
    'Sapir, who grew up in Israel’s Ministry of Interior, brings deep familiarity with the public sector, decision-making processes and clients’ day-to-day reality.',
    'Amit, a graduate of Unit 8200 with extensive high-tech experience, specializes in building technology solutions and turning complex ideas into systems that work in practice.',
    'Despite different backgrounds, they share one simple belief: if a solution does not work in the field for the people who use it every day — it is not really a solution.',
    'That is how Clicks was born.',
    'Clicks is a consulting and implementation firm that helps organizations connect people, processes and technology.',
    'We accompany clients end to end — from discovery and strategic thinking, through building the process and system, to full adoption with frontline users.',
    'We work with government ministries, municipalities, nonprofits, manufacturers and high-tech companies — toward the same goal: turning complex processes into work that is clear, efficient and grounded in reality.',
    'In the end, systems do not change organizations. People do — and systems should help them succeed.',
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
      'מתוך עבודה בשטח בתקופה מאתגרת — כשמידע, משימות ואחריות לא היו מחוברים — חיפשנו דרך עבודה שעובדת לאנשים, לא רק במצגת. משם גדלה קליקס: ייעוץ והטמעה שמחברים אנשים, תהליכים וטכנולוגיה.',
    storyMore: 'לסיפור ההקמה המלא',
    foundersLead: 'על המייסדים',
    aboutCta: 'עוד על קליקס',
  },
  en: {
    title: 'A consulting firm with founders at the front',
    storyTeaser:
      'From work in the field during a demanding period — when information, tasks and ownership were disconnected — we looked for a way of working that helps people, not just slides. That is how Clicks grew: consulting and implementation that connects people, processes and technology.',
    storyMore: 'Read our full founding story',
    foundersLead: 'About the founders',
    aboutCta: 'More about Clicks',
  },
} as const;
