import type { Locale } from '../i18n';
import { FOUNDERS_STORY } from './founders';

export const ABOUT_PAGE = {
  he: {
    title: 'אודות קליקס',
    description: 'חברת ייעוץ וסטודיו מוצר על monday.com — מגזר ציבורי, אזרחי, מפעלים והייטק.',
    eyebrow: 'החברה',
    h1: 'מגשרים בין אסטרטגיה, תהליך וטכנולוגיה',
    lead:
      'קליקס — מערכות הפעלה אסטרטגיות — חברת ייעוץ שמתאימה תהליכים לארגון ומשתמשת בטכנולוגיה כדי לגשר על הפער בין תהליכים לאנשים. עובדים עם מגזר ציבורי, רשויות, מלכ"רים, מפעלים והייטק.',
    story: FOUNDERS_STORY.he,
    foundersLead: 'על המייסדים',
    ctaTitle: 'רוצים לשמוע איך זה נראה על התהליך שלכם?',
    ctaText: 'שיחת ייעוץ קצרה, בלי מצגת כללית.',
    book: 'לקביעת שיחת ייעוץ',
    contact: 'צרו קשר',
  },
  en: {
    title: 'About Clicks',
    description:
      'A consulting firm and product studio on monday.com — public, civic, manufacturing and high-tech.',
    eyebrow: 'Company',
    h1: 'Bridging strategy, process and technology',
    lead:
      'Clicks Strategic Ecosystems is a consulting firm that adapts processes to each organization and uses technology to bridge the gap between processes and people. We work with public sector, municipalities, nonprofits, manufacturing and high-tech teams.',
    story: FOUNDERS_STORY.en,
    foundersLead: 'About the founders',
    ctaTitle: 'Want to see what this looks like on your process?',
    ctaText: 'A short discovery call, no generic deck.',
    book: 'Book a discovery call',
    contact: 'Contact us',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type AboutPageContent = (typeof ABOUT_PAGE)[Locale];
