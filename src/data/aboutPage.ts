import type { Locale } from '../i18n';
import { FOUNDERS_STORY } from './founders';

export const ABOUT_PAGE = {
  he: {
    title: 'אודות קליקס',
    description: 'חברת ייעוץ וסטודיו מוצר על monday.com — מגזר ציבורי, אזרחי, מפעלים והייטק.',
    eyebrow: 'החברה',
    h1: 'חברת ייעוץ ובנייה על monday.com, עם המייסדים בחזית',
    lead:
      'קליקס מאפיינת, בונה ומתחזקת תהליכים על monday.com לארגונים שצריכים סדר, אחריות ומעקב אמיתי: רשויות, גופים ציבוריים, מלכ"רים, מפעלים וחברות הייטק.',
    story: FOUNDERS_STORY.he,
    foundersLead: 'על המייסדים',
    ctaTitle: 'רוצים לשמוע איך זה נראה על התהליך שלכם?',
    ctaText: 'שיחת ייעוץ קצרה, עם דוגמה מתוך תהליך אמיתי.',
    book: 'לקביעת שיחת ייעוץ',
    contact: 'צרו קשר',
  },
  en: {
    title: 'About Clicks',
    description:
      'A consulting firm and product studio on monday.com — public, civic, manufacturing and high-tech.',
    eyebrow: 'Company',
    h1: 'A monday.com consulting and build team with founders at the front',
    lead:
      'Clicks designs, builds and maintains monday.com workflows for organizations that need clarity, ownership and real tracking: municipalities, public bodies, nonprofits, manufacturers and high-tech companies.',
    story: FOUNDERS_STORY.en,
    foundersLead: 'About the founders',
    ctaTitle: 'Want to see what this looks like on your process?',
    ctaText: 'A short discovery call, no generic deck.',
    book: 'Book a discovery call',
    contact: 'Contact us',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type AboutPageContent = (typeof ABOUT_PAGE)[Locale];
