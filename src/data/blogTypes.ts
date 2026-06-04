/**
 * Shared types for blog / case-study content.
 */
import type { Locale } from '../i18n';
import type { ProductLogoKey } from './productPages';
import type { OfferKey } from '../components/product-logos/types';

export type BlogCategory = 'case-study' | 'guide';

export type ProductSlug =
  | 'flowgram'
  | 'clicks-tsm'
  | 'monday-cms'
  | 'monday-gis'
  | 'clicks-deploy-ready'
  | 'crm-connections'
  | 'clicks-solutions';

export type SectorSlug =
  | 'public-sector'
  | 'local-authorities'
  | 'regional-clusters'
  | 'nonprofits'
  | 'manufacturing'
  | 'high-tech';

export const PRODUCT_SLUG_TO_LOGO: Record<ProductSlug, OfferKey> = {
  flowgram: 'flowgram',
  'clicks-tsm': 'tsm',
  'monday-cms': 'cms',
  'monday-gis': 'gis',
  'clicks-deploy-ready': 'ready',
  'crm-connections': 'crm',
  'clicks-solutions': 'solutions',
};

export const PRODUCT_SLUG_TO_PAGE_LOGO: Record<ProductSlug, ProductLogoKey> = {
  flowgram: 'flowgram',
  'clicks-tsm': 'tsm',
  'monday-cms': 'cms',
  'monday-gis': 'gis',
  'clicks-deploy-ready': 'ready',
  'crm-connections': 'crm',
  'clicks-solutions': 'solutions',
};

export interface BlogDeliverable {
  label: Record<Locale, string>;
  productSlug: ProductSlug;
}

export interface BlogOfferBlurb {
  productSlug: ProductSlug;
  blurb: Record<Locale, string>;
}

export interface BlogCapabilityMetric {
  label: Record<Locale, string>;
  value: Record<Locale, string>;
  delta?: Record<Locale, string>;
}

export interface BlogPostSection {
  challenge: Record<Locale, string>;
  approach: Record<Locale, string>;
  built: Record<Locale, string[]>;
  inPractice: Record<Locale, string>;
  outcomes: Record<Locale, string>;
  bridge: Record<Locale, string>;
}

export interface BlogPostRefs {
  primaryProductSlugs: ProductSlug[];
  supportingProductSlugs: ProductSlug[];
  solutionHref?: '/products/clicks-deploy-ready';
  sectorSlugs: SectorSlug[];
  deliverables: BlogDeliverable[];
  offerBlurbs: BlogOfferBlurb[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  featured: boolean;
  publishDate: string;
  refs: BlogPostRefs;
  sectorLabel: Record<Locale, string>;
  project: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  h1: Record<Locale, string>;
  lead: Record<Locale, string>;
  metrics: BlogCapabilityMetric[];
  sections: BlogPostSection;
}
