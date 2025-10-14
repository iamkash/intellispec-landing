import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6439i3cz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-19', // Use current date instead of future date
  useCdn: false, // Disable CDN for development to avoid caching issues
  token: process.env.SANITY_API_TOKEN, // Only needed if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Content types
export interface CaseStudy {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any;
  featuredImage?: any;
  industry: string;
  client: string;
  results: string[];
  publishedAt: string;
  author?: {
    name: string;
    image?: any;
  };
}

export interface WhitePaper {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any;
  featuredImage: any;
  category: string;
  downloadUrl?: string;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any;
  featuredImage: any;
  category: string;
  tags: string[];
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
  readTime: number;
}

export interface PressItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any;
  featuredImage?: any;
  category: string;
  type: string;
  source: string;
  url?: string;
  featured: boolean;
  publishedAt: string;
  author?: {
    name: string;
    image?: any;
  };
}

// Query functions
export async function getCaseStudies(): Promise<CaseStudy[]> {
  return await client.fetch(`
    *[_type == "caseStudy" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      industry,
      client,
      results,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy> {
  return await client.fetch(`
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      industry,
      client,
      results,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `, { slug });
}

export async function getWhitePapers(): Promise<WhitePaper[]> {
  return await client.fetch(`
    *[_type == "whitePaper"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      downloadUrl,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `);
}

export async function getWhitePaper(slug: string): Promise<WhitePaper> {
  return await client.fetch(`
    *[_type == "whitePaper" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      downloadUrl,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `, { slug });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return await client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      tags,
      publishedAt,
      author->{
        name,
        image
      },
      readTime
    }
  `);
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return await client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      tags,
      publishedAt,
      author->{
        name,
        image
      },
      readTime
    }
  `, { slug });
}

export async function getPressItems(): Promise<PressItem[]> {
  return await client.fetch(`
    *[_type == "pressItem"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      featuredImage,
      category,
      type,
      source,
      url,
      featured,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `);
}

export async function getPressItem(slug: string): Promise<PressItem> {
  return await client.fetch(`
    *[_type == "pressItem" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      type,
      source,
      url,
      featured,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `, { slug });
} 