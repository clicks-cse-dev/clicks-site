/**
 * Reverse lookups: product / sector pages → related blog posts.
 */
import { BLOG_POSTS, type BlogPost } from './blogPosts';
import type { ProductSlug, SectorSlug } from './blogTypes';

function postUsesProduct(post: BlogPost, slug: ProductSlug): boolean {
  return (
    post.refs.primaryProductSlugs.includes(slug) ||
    post.refs.supportingProductSlugs.includes(slug) ||
    post.refs.deliverables.some((d) => d.productSlug === slug)
  );
}

function postUsesSector(post: BlogPost, slug: SectorSlug): boolean {
  return post.refs.sectorSlugs.includes(slug);
}

export function getPostsForProduct(productSlug: string, limit = 2): BlogPost[] {
  if (!productSlug) return [];
  return BLOG_POSTS.filter((p) => postUsesProduct(p, productSlug as ProductSlug)).slice(0, limit);
}

export function getPostsForSector(sectorSlug: string, limit = 2): BlogPost[] {
  if (!sectorSlug) return [];
  return BLOG_POSTS.filter((p) => postUsesSector(p, sectorSlug as SectorSlug)).slice(0, limit);
}
