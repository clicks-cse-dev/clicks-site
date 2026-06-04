/**
 * Split case-study product slugs into services vs products (matches solutions hub).
 */
import type { Locale } from '../i18n';
import { localizedPath } from '../i18n';
import type { OfferKey } from '../components/product-logos/types';
import { getProductPage, offerPagePath } from './productPages';
import { PRODUCT_SLUG_TO_LOGO, type BlogPost, type ProductSlug } from './blogTypes';

const PRODUCT_SLUGS = new Set<ProductSlug>(['monday-cms', 'monday-gis', 'clicks-deploy-ready']);
const SERVICE_SLUGS = new Set<ProductSlug>([
  'flowgram',
  'clicks-tsm',
  'crm-connections',
  'clicks-solutions',
]);

const PRODUCT_ORDER: ProductSlug[] = ['monday-cms', 'monday-gis', 'clicks-deploy-ready'];
const SERVICE_ORDER: ProductSlug[] = [
  'flowgram',
  'clicks-tsm',
  'crm-connections',
  'clicks-solutions',
];

export type OfferLink = { name: string; href: string; product: OfferKey; slug: ProductSlug };

function sortBySlugOrder(items: OfferLink[], order: ProductSlug[]): OfferLink[] {
  return [...items].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug) || a.name.localeCompare(b.name),
  );
}

export function getCaseStudyOfferLists(post: BlogPost, locale: Locale) {
  const slugs = [
    ...new Set([...post.refs.primaryProductSlugs, ...post.refs.supportingProductSlugs]),
  ];

  const services: OfferLink[] = [];
  const products: OfferLink[] = [];
  const seen = new Set<string>();

  for (const slug of slugs) {
    const page = getProductPage(slug);
    if (!page) continue;
    const href = localizedPath(offerPagePath(slug), locale);
    if (seen.has(href)) continue;
    seen.add(href);
    const link: OfferLink = {
      name: page.titles[locale],
      href,
      product: PRODUCT_SLUG_TO_LOGO[slug],
      slug,
    };
    if (PRODUCT_SLUGS.has(slug)) products.push(link);
    else if (SERVICE_SLUGS.has(slug)) services.push(link);
    else services.push(link);
  }

  if (post.refs.solutionHref) {
    const href = localizedPath(post.refs.solutionHref, locale);
    if (!seen.has(href)) {
      seen.add(href);
      products.push({
        name: locale === 'he' ? 'Clicks deploy ready' : 'Clicks deploy ready',
        href,
        product: 'ready',
        slug: 'clicks-deploy-ready',
      });
    }
  }

  return {
    products: sortBySlugOrder(products, PRODUCT_ORDER),
    services: sortBySlugOrder(services, SERVICE_ORDER),
  };
}
