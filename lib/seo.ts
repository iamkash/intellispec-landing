import type { Metadata } from 'next';

type CreatePageMetadataInput = {
  title: string;
  description: string;
  canonicalPath: string; // path starting with '/'
  ogImageUrl?: string;
  keywords?: string[];
};

/**
 * Centralized helper to create consistent Next.js Metadata across pages.
 * - Ensures canonical URLs
 * - Fills OpenGraph and Twitter cards
 * - Enables indexing by default
 */
export function createPageMetadata(input: CreatePageMetadataInput): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://intellispec.com';
  const canonical = `${baseUrl}${input.canonicalPath}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    keywords: input.keywords,
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: 'intelliSPEC',
      type: 'website',
      images: input.ogImageUrl ? [{ url: input.ogImageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: input.ogImageUrl ? [input.ogImageUrl] : undefined,
      site: '@intellispec',
      creator: '@intellispec',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


