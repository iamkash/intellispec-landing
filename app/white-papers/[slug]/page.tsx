import { Metadata } from 'next';
import { getWhitePaper, getWhitePapers } from '@/lib/sanity';
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
  Download,
  FileText,
  Award,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import PortableText from '@/components/PortableText';
import ShareButtons from '@/components/ShareButtons';

interface WhitePaperPageProps {
  params: {
    slug: string;
  };
}

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export async function generateStaticParams() {
  const whitePapers = await getWhitePapers();
  
  return whitePapers.map((paper) => ({
    slug: paper.slug.current,
  }));
}

export async function generateMetadata({ params }: WhitePaperPageProps): Promise<Metadata> {
  const whitePaper = await getWhitePaper(params.slug);
  
  if (!whitePaper) {
    return {
      title: 'White Paper Not Found - IntelliSpec',
    };
  }

  return {
    title: `${whitePaper.title} - IntelliSpec`,
    description: whitePaper.excerpt,
    alternates: { canonical: `https://intellispec.com/white-papers/${params.slug}` },
    openGraph: {
      title: whitePaper.title,
      description: whitePaper.excerpt,
      type: 'article',
      publishedTime: whitePaper.publishedAt,
      authors: whitePaper.author ? [whitePaper.author.name] : undefined,
    },
  };
}

export default async function WhitePaperPage({ params }: WhitePaperPageProps) {
  const whitePaper = await getWhitePaper(params.slug);
  
  if (!whitePaper) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/white-papers"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to White Papers</span>
          </Link>

          {/* White Paper Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 px-4 py-2 text-sm font-semibold">
                {whitePaper.category}
              </Badge>
              <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-semibold">
                White Paper
              </Badge>
              <div className="flex items-center space-x-1">
                <Award className="w-5 h-5 text-yellow-500 fill-current" />
                <Award className="w-5 h-5 text-yellow-500 fill-current" />
                <Award className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {whitePaper.title}
            </h1>
            
            <div className="flex items-center space-x-8 text-slate-600 dark:text-slate-400 mb-8 text-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{new Date(whitePaper.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Research Paper</span>
              </div>
              {whitePaper.author && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{whitePaper.author.name}</span>
                </div>
              )}
            </div>
            
            <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide max-w-4xl">
              {whitePaper.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          {whitePaper.featuredImage && (
            <div className="mb-20">
              <div className="relative">
                <Image 
                  src={urlFor(whitePaper.featuredImage).width(1400).height(800).url()} 
                  alt={whitePaper.title}
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
      {whitePaper.content && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <PortableText value={whitePaper.content} />
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Share This White Paper
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Help others discover this valuable research by sharing it with your network.
            </p>
          </div>
          
          <ShareButtons 
            title={whitePaper.title}
            text={whitePaper.excerpt}
            slug={params.slug}
            contentType="white-papers"
          />
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Download This White Paper
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get the complete white paper in PDF format for offline reading, sharing with your team, and future reference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {whitePaper.downloadUrl && (
              <Button 
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <a href={whitePaper.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                  <Download className="w-7 h-7" />
                  <span>Download PDF</span>
                </a>
              </Button>
            )}
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/white-papers" className="flex items-center space-x-3">
                <span>Back to White Papers</span>
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related White Papers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              More Research & Resources
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive research, technical resources, and industry insights to deepen your knowledge.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/white-papers" className="flex items-center space-x-3">
                <span>View All White Papers</span>
                <ExternalLink className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Structured Data: TechArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: whitePaper.title,
            description: whitePaper.excerpt,
            datePublished: whitePaper.publishedAt || undefined,
            dateModified: whitePaper.publishedAt || undefined,
            mainEntityOfPage: `https://intellispec.com/white-papers/${params.slug}`,
            url: `https://intellispec.com/white-papers/${params.slug}`,
            image: whitePaper.featuredImage ? [urlFor(whitePaper.featuredImage).width(1200).height(630).url()] : undefined,
            author: whitePaper.author ? { '@type': 'Person', name: whitePaper.author.name } : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'IntelliSpec',
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
              { '@type': 'ListItem', position: 2, name: 'White Papers', item: 'https://intellispec.com/white-papers' },
              { '@type': 'ListItem', position: 3, name: whitePaper.title, item: `https://intellispec.com/white-papers/${params.slug}` }
            ]
          })
        }}
      />
    </main>
  );
} 