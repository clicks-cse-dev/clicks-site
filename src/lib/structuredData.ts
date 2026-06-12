/**
 * JSON-LD structured data builders for Organization and Service schemas.
 * Used on the homepage and product/service detail pages.
 */
import {
  COMPANY_NAME,
  EMAIL_SAPIR,
  PHONE_E164,
  SITE_URL,
} from '../config';
import {
  PRODUCT_PAGE_DATA,
  offerPagePath,
  type ProductPageData,
} from '../data/productPages';
import { localizedPath, type Locale } from '../i18n';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const MONDAY_PARTNER_URL = 'https://monday.com/gotopartners/directory/';

const ORGANIZATION_DESCRIPTION: Record<Locale, string> = {
  he: 'ייעוץ, אפיון ובנייה של מערכות הפעלה על monday.com לגופים ציבוריים, רשויות, מלכ"רים וחברות טכנולוגיה בישראל.',
  en: 'Consulting, process design and implementation of operating systems on monday.com for public-sector bodies, municipalities, nonprofits and technology companies in Israel.',
};

const SERVICE_CATALOG_NAME: Record<Locale, string> = {
  he: 'פתרונות monday.com של קליקס',
  en: 'Clicks monday.com solutions',
};

type JsonLdObject = Record<string, unknown>;

export function buildOrganizationJsonLd(locale: Locale): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og.png`,
    description: ORGANIZATION_DESCRIPTION[locale],
    areaServed: {
      '@type': 'Country',
      name: 'Israel',
    },
    foundingDate: '2024',
    knowsLanguage: ['he', 'en'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: PHONE_E164,
      email: EMAIL_SAPIR,
      availableLanguage: ['Hebrew', 'English'],
    },
    sameAs: [MONDAY_PARTNER_URL],
  };
}

export function buildHomepageServiceCatalogJsonLd(locale: Locale): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: SERVICE_CATALOG_NAME[locale],
    provider: { '@id': ORGANIZATION_ID },
    itemListElement: PRODUCT_PAGE_DATA.map((offer, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: buildServiceJsonLd(offer, locale),
    })),
  };
}

export function buildServiceJsonLd(
  offer: ProductPageData,
  locale: Locale,
): JsonLdObject {
  const url = new URL(localizedPath(offerPagePath(offer.slug), locale), SITE_URL).href;

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: offer.titles[locale],
    description: offer.descriptions[locale],
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'Country',
      name: 'Israel',
    },
    url,
  };
}

export function buildProductServiceJsonLd(
  offer: ProductPageData,
  locale: Locale,
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    ...buildServiceJsonLd(offer, locale),
  };
}

export function buildBreadcrumbJsonLd(
  locale: Locale,
  crumbs: { name: string; item: string }[],
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildOfferBreadcrumbJsonLd(
  offer: ProductPageData,
  locale: Locale,
): JsonLdObject {
  const canonical = new URL(localizedPath(offerPagePath(offer.slug), locale), SITE_URL).href;
  const isProduct = offer.kind === 'product';

  return buildBreadcrumbJsonLd(locale, [
    { name: locale === 'he' ? 'דף הבית' : 'Home', item: SITE_URL },
    {
      name: locale === 'he' ? 'פתרונות' : 'Solutions',
      item: new URL(localizedPath('/solutions', locale), SITE_URL).href,
    },
    {
      name: locale === 'he'
        ? (isProduct ? 'מוצרים' : 'שירותים')
        : (isProduct ? 'Products' : 'Services'),
      item: new URL(
        localizedPath(
          isProduct ? '/solutions#hub-products-title' : '/solutions#hub-services-title',
          locale,
        ),
        SITE_URL,
      ).href,
    },
    { name: offer.titles[locale], item: canonical },
  ]);
}

export function buildFaqJsonLd(
  faq: { question: string; answer: string }[],
): JsonLdObject | null {
  if (faq.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
