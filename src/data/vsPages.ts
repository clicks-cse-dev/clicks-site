import type { Locale } from '../i18n';

export interface VsPage {
  slug: string;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  competitor: { name: string; url: string };
  content: Record<
    Locale,
    {
      h1: string;
      intro: string;
      sections: { heading: string; body: string }[];
      verdict: string;
      cta: string;
    }
  >;
}

export const VS_PAGES: VsPage[] = [
  {
    slug: 'onecity',
    titles: {
      he: 'Clicks vs OneCity — ניהול תהליכים לרשויות מקומיות',
      en: 'Clicks vs OneCity — Process Management for Local Authorities',
    },
    descriptions: {
      he: 'השוואה בין גישת קליקס + monday.com לבין OneCity לרשויות מקומיות בישראל.',
      en: 'Comparing the Clicks + monday.com approach to OneCity for Israeli local authorities.',
    },
    competitor: { name: 'OneCity', url: 'https://www.onecity.co.il' },
    content: {
      he: {
        h1: 'Clicks + monday.com לעומת OneCity — מה עדיף לרשות שלכם?',
        intro:
          'OneCity ו-monday.com הם שני גישות שונות לניהול תהליכי הרשות. קליקס עובדת עם monday.com ומסייעת לרשויות לבנות מערכות שמותאמות בדיוק לצרכיהן.',
        sections: [
          {
            heading: 'OneCity',
            body: 'מוצר ייעודי לרשויות עם מודולים מוכנים. מהיר להתחלה בתהליכים מוגדרים. פחות גמיש לשינויים ייחודיים.',
          },
          {
            heading: 'Clicks + monday.com',
            body: 'פלטפורמה גמישה שמותאמת לצרכי הרשות. שליטה מלאה בתהליכים. אינטגרציה עם GIS, אתר האינטרנט ומערכות קיימות. ניתן לשנות ולהרחיב ללא תלות בספק.',
          },
          {
            heading: 'עלויות',
            body: 'monday.com עם קליקס כמטמיע לרוב זול יותר לטווח ארוך — בגלל גמישות ואי-תלות בספק לכל שינוי. OneCity עשוי להיות מהיר יותר להתחלה.',
          },
        ],
        verdict:
          'לרשות שרוצה גמישות מלאה ואינטגרציה עמוקה — monday.com עם קליקס הוא הבחירה הנכונה.',
        cta: 'לשיחת ייעוץ חינם',
      },
      en: {
        h1: 'Clicks + monday.com vs OneCity — Which is Right for Your Authority?',
        intro:
          'OneCity and monday.com represent two different approaches to managing authority processes. Clicks works with monday.com to help authorities build systems tailored exactly to their needs.',
        sections: [
          {
            heading: 'OneCity',
            body: 'Dedicated local-authority product with ready-made modules. Fast to start with defined processes. Less flexible for unique changes.',
          },
          {
            heading: 'Clicks + monday.com',
            body: 'Flexible platform tailored to authority needs. Full process control. Integration with GIS, website and existing systems. Change and extend without vendor dependency.',
          },
          {
            heading: 'Cost',
            body: 'monday.com with Clicks as implementer is usually less expensive long-term — due to flexibility and no vendor dependency for changes. OneCity may be faster to start.',
          },
        ],
        verdict:
          'For an authority that wants full flexibility and deep integration — monday.com with Clicks is the right choice.',
        cta: 'Book a free advisory call',
      },
    },
  },
  {
    slug: 'alternet',
    titles: {
      he: 'Clicks vs Alternet — הטמעת monday.com בישראל',
      en: 'Clicks vs Alternet — monday.com Implementation in Israel',
    },
    descriptions: {
      he: 'השוואה בין קליקס לבין Alternet כשותפי הטמעה של monday.com בישראל.',
      en: 'Comparing Clicks and Alternet as monday.com implementation partners in Israel.',
    },
    competitor: { name: 'Alternet', url: 'https://alternet.co.il' },
    content: {
      he: {
        h1: 'Clicks לעומת Alternet — הטמעת monday.com',
        intro:
          'Alternet היא חברת IT ישראלית שמציעה שירותי הטמעה של monday.com. קליקס מתמחה ספציפית בגופים ציבוריים ומלכ"רים.',
        sections: [
          {
            heading: 'Alternet',
            body: 'חברת IT כללית עם מגוון רחב של שירותים. הטמעת monday.com היא אחת מתוך שירותים רבים.',
          },
          {
            heading: 'Clicks',
            body: 'מתמחה בלעדית ב-monday.com עם מיקוד על מגזר ציבורי, רשויות ומלכ"רים. כל המוצרים והשירותים שלנו נבנו סביב monday.com.',
          },
          {
            heading: 'למה זה משנה?',
            body: 'מיקוד יוצר מומחיות. קליקס ראתה יותר בעיות ופתרונות ספציפיים למגזר הציבורי — ויכולה לייעץ טוב יותר על מה עובד ומה לא.',
          },
        ],
        verdict:
          'לגוף ציבורי שמחפש מטמיע שמבין את הצרכים הספציפיים של המגזר — קליקס היא הבחירה המומחית.',
        cta: 'לשיחת ייעוץ עם מומחה monday.com',
      },
      en: {
        h1: 'Clicks vs Alternet — monday.com Implementation',
        intro:
          'Alternet is an Israeli IT company offering monday.com implementation services. Clicks specialises specifically in public bodies and nonprofits.',
        sections: [
          {
            heading: 'Alternet',
            body: 'General IT company with a broad range of services. monday.com implementation is one of many offerings.',
          },
          {
            heading: 'Clicks',
            body: 'Exclusively specialised in monday.com with a focus on public sector, local authorities and nonprofits. All our products and services are built around monday.com.',
          },
          {
            heading: 'Why does this matter?',
            body: 'Focus creates expertise. Clicks has seen more public-sector-specific problems and solutions — and can advise better on what works and what does not.',
          },
        ],
        verdict:
          'For a public body looking for an implementer who understands the specific needs of the sector — Clicks is the expert choice.',
        cta: 'Book a monday.com advisory call',
      },
    },
  },
];

export function getVsPage(slug: string): VsPage | undefined {
  return VS_PAGES.find((v) => v.slug === slug);
}
