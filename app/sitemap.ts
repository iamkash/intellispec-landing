import type { MetadataRoute } from 'next';
import { getCaseStudies, getBlogPosts, getPressItems, getWhitePapers } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://intellispec.com';

  const staticPaths = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/pricing',
    '/privacy',
    '/terms',
    '/cookies',
    '/resources',
    '/industries',
    '/modules',
    '/press',
    '/case-studies',
    '/white-papers'
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const [caseStudies, blogPosts, pressItems, whitePapers] = await Promise.all([
    getCaseStudies().catch(() => []),
    getBlogPosts().catch(() => []),
    getPressItems().catch(() => []),
    getWhitePapers().catch(() => []),
  ]);

  const toDate = (d?: string) => (d ? new Date(d) : new Date());

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...(Array.isArray(caseStudies) ? caseStudies : []).filter((i) => i?.slug?.current).map((i) => ({
      url: `${baseUrl}/case-studies/${i.slug.current}`,
      lastModified: toDate(i.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...(Array.isArray(blogPosts) ? blogPosts : []).filter((i) => i?.slug?.current).map((i) => ({
      url: `${baseUrl}/blog/${i.slug.current}`,
      lastModified: toDate(i.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...(Array.isArray(pressItems) ? pressItems : []).filter((i) => i?.slug?.current).map((i) => ({
      url: `${baseUrl}/press/${i.slug.current}`,
      lastModified: toDate(i.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...(Array.isArray(whitePapers) ? whitePapers : []).filter((i) => i?.slug?.current).map((i) => ({
      url: `${baseUrl}/white-papers/${i.slug.current}`,
      lastModified: toDate(i.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}


