/**
 * i18n conventions for the Clicks site.
 *
 * CHOSEN CONVENTION (documented in BUILD_CONTRACT.md):
 *   Every page and component takes a `locale: Locale` prop and holds its OWN
 *   inline content object shaped as `{ he: {...}, en: {...} }`. There is no
 *   central translation dictionary — copy lives next to the markup that uses it.
 *
 *   Example inside a component:
 *     const content = { he: { title: 'שלום' }, en: { title: 'Hello' } } as const;
 *     const t = content[locale];
 *
 * This file only provides routing/direction helpers shared across the site.
 */

export const LOCALES = ['he', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'he';

/** Reading direction for a locale. Drives <html dir>. */
export function dir(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'he' ? 'rtl' : 'ltr';
}

/**
 * Detect the active locale from a request URL.
 * EN routes are prefixed with /en (prefixDefaultLocale: false), HE is the root.
 */
export function getLangFromUrl(url: URL): Locale {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return DEFAULT_LOCALE;
}

/**
 * Build a locale-aware href.
 *   localizedPath('/about', 'he') -> '/about'
 *   localizedPath('/about', 'en') -> '/en/about'
 *   localizedPath('/', 'en')      -> '/en/'
 * Pass paths WITHOUT the /en prefix (the "canonical HE path").
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (locale === 'en') {
    return clean === '/' ? '/en/' : `/en${clean}`;
  }
  return clean;
}

/**
 * Given the current URL, return the equivalent path in the OTHER locale.
 * Used by the HE/EN language switch in the Header.
 */
export function alternatePath(url: URL): { locale: Locale; href: string } {
  const current = getLangFromUrl(url);
  const target: Locale = current === 'he' ? 'en' : 'he';
  // Strip any leading /en, then re-localize to the target.
  const canonical = canonicalPathFromUrl(url);
  return { locale: target, href: localizedPath(canonical, target) };
}

/** Path without locale prefix (HE canonical form). */
export function canonicalPathFromUrl(url: URL): string {
  const stripped = url.pathname.replace(/^\/en(\/|$)/, '/');
  return stripped === '' ? '/' : stripped;
}
