import { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  ExternalLink, 
  Building2, 
  User,
  ArrowLeft,
  Clock,
  Tag,
  Share2,
  BookOpen,
  Copy,
  Check
} from 'lucide-react';
import Link from 'next/link';
import PortableText from '@/components/PortableText';
import ShareButtons from '@/components/ShareButtons';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  
  return blogPosts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await getBlogPost(params.slug);
  
  if (!blogPost) {
    return {
      title: 'Blog Post Not Found - intelliSPEC',
    };
  }

  return {
    title: `${blogPost.title} - intelliSPEC`,
    description: blogPost.excerpt,
    alternates: { canonical: `https://intellispec.com/blog/${params.slug}` },
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      type: 'article',
      publishedTime: blogPost.publishedAt,
      authors: blogPost.author ? [blogPost.author.name] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await getBlogPost(params.slug);
  
  if (!blogPost) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to Blog</span>
          </Link>

          {/* Blog Post Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 px-4 py-2 text-sm font-semibold">
                {blogPost.category}
              </Badge>
              <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-semibold">
                Blog Post
              </Badge>
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">{blogPost.readTime} min read</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center space-x-8 text-slate-600 dark:text-slate-400 mb-8 text-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{new Date(blogPost.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{blogPost.readTime} min read</span>
              </div>
              {blogPost.author && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{blogPost.author.name}</span>
                </div>
              )}
            </div>
            
            <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide max-w-4xl">
              {blogPost.excerpt}
            </p>

            {/* Tags */}
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-8">
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-4 py-2 border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Tag className="w-3 h-3 mr-2" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {blogPost.featuredImage && (
            <div className="mb-20">
              <div className="relative">
                <Image
                  src={urlFor(blogPost.featuredImage).width(1400).height(800).url()}
                  alt={blogPost.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto rounded-3xl shadow-3xl border border-slate-200/50 dark:border-slate-700/50"
                  priority
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      {blogPost.content && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <PortableText value={blogPost.content} />
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Share This Article
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Help others discover this valuable insight by sharing it with your network.
            </p>
          </div>
          
          <ShareButtons 
            title={blogPost.title}
            text={blogPost.excerpt}
            slug={params.slug}
          />
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              More Insights & Articles
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our latest insights, technical articles, and industry trends to stay ahead of the curve.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/blog" className="flex items-center space-x-3">
                <span>View All Blog Posts</span>
                <ExternalLink className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Structured Data: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blogPost.title,
            description: blogPost.excerpt,
            datePublished: blogPost.publishedAt || undefined,
            dateModified: blogPost.publishedAt || undefined,
            mainEntityOfPage: `https://intellispec.com/blog/${params.slug}`,
            url: `https://intellispec.com/blog/${params.slug}`,
            image: blogPost.featuredImage ? [urlFor(blogPost.featuredImage).width(1200).height(630).url()] : undefined,
            author: blogPost.author ? { '@type': 'Person', name: blogPost.author.name } : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'intelliSPEC',
              url: 'https://intellispec.com'
            }
          })
        }}
      />
      {/* Structured Data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://intellispec.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://intellispec.com/blog' },
              { '@type': 'ListItem', position: 3, name: blogPost.title, item: `https://intellispec.com/blog/${params.slug}` }
            ]
          })
        }}
      />
    </main>
  );
} 