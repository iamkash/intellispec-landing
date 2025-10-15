import { Metadata } from 'next';
import { getPressItem, getPressItems } from '@/lib/sanity';
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
  Share2
} from 'lucide-react';
import Link from 'next/link';
import PortableText from '@/components/PortableText';
import ShareButtons from '@/components/ShareButtons';

interface PressItemPageProps {
  params: {
    slug: string;
  };
}

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export async function generateStaticParams() {
  const pressItems = await getPressItems();
  
  return pressItems.map((item) => ({
    slug: item.slug.current,
  }));
}

export async function generateMetadata({ params }: PressItemPageProps): Promise<Metadata> {
  const pressItem = await getPressItem(params.slug);
  
  if (!pressItem) {
    return {
      title: 'Press Item Not Found - intelliSPEC',
    };
  }

  return {
    title: `${pressItem.title} - intelliSPEC`,
    description: pressItem.excerpt,
    alternates: { canonical: `https://intellispec.com/press/${params.slug}` },
    openGraph: {
      title: pressItem.title,
      description: pressItem.excerpt,
      type: 'article',
      publishedTime: pressItem.publishedAt,
      authors: pressItem.author ? [pressItem.author.name] : undefined,
    },
  };
}

export default async function PressItemPage({ params }: PressItemPageProps) {
  const pressItem = await getPressItem(params.slug);
  
  if (!pressItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/press"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to Press Center</span>
          </Link>

          {/* Press Item Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 px-4 py-2 text-sm font-semibold">
                {pressItem.type}
              </Badge>
              <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-semibold">
                {pressItem.category}
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {pressItem.title}
            </h1>
            
            <div className="flex items-center space-x-8 text-slate-600 dark:text-slate-400 mb-8 text-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{new Date(pressItem.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">{pressItem.source}</span>
              </div>
              {pressItem.author && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{pressItem.author.name}</span>
                </div>
              )}
            </div>
            
            <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide max-w-4xl">
              {pressItem.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          {pressItem.featuredImage && (
            <div className="mb-20">
              <div className="relative">
                <Image 
                  src={urlFor(pressItem.featuredImage).width(1400).height(800).url()} 
                  alt={pressItem.title}
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
      {pressItem.content && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <PortableText value={pressItem.content} />
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
            title={pressItem.title}
            text={pressItem.excerpt}
            slug={params.slug}
            contentType="press"
          />
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {pressItem.url && (
              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <a href={pressItem.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <ExternalLink className="w-6 h-6" />
                  <span>Read Full Article</span>
                </a>
              </Button>
            )}
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/press" className="flex items-center space-x-3">
                <span>Back to Press Center</span>
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Press Items */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              More Press Coverage
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our latest press releases and media coverage highlighting PK Companies&apos; innovations and achievements.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/press" className="flex items-center space-x-3">
                <span>View All Press Items</span>
                <ExternalLink className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Structured Data: NewsArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: pressItem.title,
            description: pressItem.excerpt,
            datePublished: pressItem.publishedAt || undefined,
            dateModified: pressItem.publishedAt || undefined,
            mainEntityOfPage: `https://intellispec.com/press/${params.slug}`,
            url: `https://intellispec.com/press/${params.slug}`,
            image: pressItem.featuredImage ? [urlFor(pressItem.featuredImage).width(1200).height(630).url()] : undefined,
            author: pressItem.author ? { '@type': 'Person', name: pressItem.author.name } : undefined,
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
              { '@type': 'ListItem', position: 2, name: 'Press', item: 'https://intellispec.com/press' },
              { '@type': 'ListItem', position: 3, name: pressItem.title, item: `https://intellispec.com/press/${params.slug}` }
            ]
          })
        }}
      />
    </main>
  );
} 