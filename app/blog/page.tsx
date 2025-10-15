import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/sanity';
import BlogPostsClient from './BlogPostsClient';

export const metadata: Metadata = {
  title: 'Blog - intelliSPEC',
  description: 'Stay updated with the latest insights, industry trends, and technical articles from intelliSPEC.',
};

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  
  return <BlogPostsClient blogPosts={blogPosts} />;
} 