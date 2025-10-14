import { Metadata } from 'next';
import { getCaseStudy, getCaseStudies } from '@/lib/sanity';
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
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
  Award,
  Star
} from 'lucide-react';
import Link from 'next/link';
import PortableText from '@/components/PortableText';
import ShareButtons from '@/components/ShareButtons';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();

  if (!Array.isArray(caseStudies)) {
    return [];
  }

  return caseStudies
    .filter((caseStudy) => caseStudy?.slug?.current)
    .map((caseStudy) => ({
      slug: caseStudy.slug.current,
    }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - IntelliSpec',
    };
  }

  return {
    title: `${caseStudy.title} - IntelliSpec`,
    description: caseStudy.excerpt,
    alternates: { canonical: `https://intellispec.com/case-studies/${params.slug}` },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: 'article',
      publishedTime: caseStudy.publishedAt,
      authors: caseStudy.author ? [caseStudy.author.name] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to Case Studies</span>
          </Link>

          {/* Case Study Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white border-0 px-4 py-2 text-sm font-semibold">
                {caseStudy.industry}
              </Badge>
              <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-semibold">
                Case Study
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {caseStudy.title}
            </h1>
            
            <div className="flex items-center space-x-8 text-slate-600 dark:text-slate-400 mb-8 text-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{new Date(caseStudy.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">{caseStudy.client}</span>
              </div>
              {caseStudy.author && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{caseStudy.author.name}</span>
                </div>
              )}
            </div>
            
            <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide max-w-4xl">
              {caseStudy.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          {caseStudy.featuredImage && (
            <div className="mb-20">
              <div className="relative">
                <Image
                  src={urlFor(caseStudy.featuredImage).width(1400).height(800).url()}
                  alt={caseStudy.title}
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
      {caseStudy.content && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <PortableText value={caseStudy.content} />
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Share This Case Study
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Help others discover this success story by sharing it with your network.
            </p>
          </div>
          
          <ShareButtons 
            title={caseStudy.title}
            text={caseStudy.excerpt}
            slug={params.slug}
            contentType="case-studies"
          />
        </div>
      </section>

      {/* Results Section */}
      {Array.isArray(caseStudy.results) && caseStudy.results.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Key Results & Achievements
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Measurable outcomes and achievements from this implementation that demonstrate the transformative impact of IntelliSpec.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="glass-morphism border-slate-300/30 dark:border-slate-600/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-light tracking-wide">
                        {result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Data: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: caseStudy.title,
            description: caseStudy.excerpt,
            datePublished: caseStudy.publishedAt || undefined,
            dateModified: caseStudy.publishedAt || undefined,
            mainEntityOfPage: `https://intellispec.com/case-studies/${params.slug}`,
            url: `https://intellispec.com/case-studies/${params.slug}`,
            image: caseStudy.featuredImage ? [urlFor(caseStudy.featuredImage).width(1200).height(630).url()] : undefined,
            author: caseStudy.author ? { '@type': 'Person', name: caseStudy.author.name } : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'IntelliSpec',
              url: 'https://intellispec.com'
            }
          })
        }}
      />

      {/* Related Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore other case studies from various industries showcasing the transformative power of IntelliSpec.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <Link href="/case-studies" className="flex items-center space-x-3">
                <span>View All Case Studies</span>
                <ExternalLink className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Structured Data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://intellispec.com' },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://intellispec.com/case-studies' },
              { '@type': 'ListItem', position: 3, name: caseStudy.title, item: `https://intellispec.com/case-studies/${params.slug}` }
            ]
          })
        }}
      />
    </main>
  );
} 