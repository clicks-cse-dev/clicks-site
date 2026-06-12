import { SITE_URL } from '../config';

/**
 * Paths that should not appear in sitemap.xml — redirect-only URLs or legacy aliases.
 * Keep in sync with `redirects` in astro.config.mjs.
 */
export const SITEMAP_EXCLUDED_PATHS = [
  '/blog',
  '/en/blog',
  '/contact',
  '/en/contact',
  '/cases/hashomer-haatzair',
  '/en/cases/hashomer-haatzair',
  '/blog/galilee-business-operations-platform',
  '/en/blog/galilee-business-operations-platform',
  '/blog/crm-360-service-year',
  '/blog/regional-business-operations-platform',
  '/blog/volunteer-placement-crm',
  '/blog/regional-tourism-permits-crm',
  '/en/blog/crm-360-service-year',
  '/en/blog/regional-business-operations-platform',
  '/en/blog/volunteer-placement-crm',
  '/en/blog/regional-tourism-permits-crm',
  '/products/flowgram',
  '/products/clicks-tsm',
  '/products/crm-connections',
  '/products/clicks-solutions',
  '/en/products/flowgram',
  '/en/products/clicks-tsm',
  '/en/products/crm-connections',
  '/en/products/clicks-solutions',
  '/solutions/monday-ecosystems',
  '/en/solutions/monday-ecosystems',
] as const;

function normalizePath(pathname: string): string {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function shouldIncludeInSitemap(page: string): boolean {
  const url = new URL(page);
  if (url.origin !== new URL(SITE_URL).origin) return false;

  const path = normalizePath(url.pathname);
  return !SITEMAP_EXCLUDED_PATHS.some((excluded) => path === normalizePath(excluded));
}
