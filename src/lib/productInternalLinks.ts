/**
 * Product/service page internal linking — validation and helpers.
 * Every offer page must link to at least two other offer pages.
 */
import type { ProductPageData } from '../data/productPages';

export const MIN_RELATED_OFFER_LINKS = 2;

export function validateProductInternalLinks(pages: readonly ProductPageData[]): void {
  const slugs = new Set(pages.map((page) => page.slug));
  const errors: string[] = [];

  for (const page of pages) {
    const { relatedSlugs } = page;

    if (relatedSlugs.length < MIN_RELATED_OFFER_LINKS) {
      errors.push(
        `${page.slug}: ${relatedSlugs.length} related link(s) — minimum is ${MIN_RELATED_OFFER_LINKS}`,
      );
    }

    if (new Set(relatedSlugs).size !== relatedSlugs.length) {
      errors.push(`${page.slug}: duplicate entries in relatedSlugs`);
    }

    if (relatedSlugs.includes(page.slug)) {
      errors.push(`${page.slug}: must not link to itself`);
    }

    for (const relatedSlug of relatedSlugs) {
      if (!slugs.has(relatedSlug)) {
        errors.push(`${page.slug}: unknown related slug "${relatedSlug}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Product internal link validation failed:\n${errors.map((e) => `  - ${e}`).join('\n')}`);
  }
}
