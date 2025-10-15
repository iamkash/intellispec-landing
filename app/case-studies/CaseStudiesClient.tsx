'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Building2, 
  Target, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Award,
  Star,
  Sparkles,
  Zap,
  ArrowUpRight,
  Play,
  BarChart3,
  Lightbulb,
  ExternalLink,
  Users,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { CaseStudy } from '@/lib/sanity';

interface CaseStudiesClientProps {
  caseStudies: CaseStudy[];
}

const ITEMS_PER_PAGE = 6;

export default function CaseStudiesClient({ caseStudies }: CaseStudiesClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique industries for filter
  const industries = useMemo(() => {
    const uniqueIndustries = Array.from(new Set(caseStudies.map(cs => cs.industry)));
    return uniqueIndustries.sort();
  }, [caseStudies]);

  // Filter and search case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      const matchesSearch = searchTerm === '' || 
        caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry === 'all' || caseStudy.industry === selectedIndustry;
      
      return matchesSearch && matchesIndustry;
    });
  }, [caseStudies, searchTerm, selectedIndustry]);

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    setCurrentPage(1);
  };

  const stats = useMemo(() => ({
    total: caseStudies.length,
    industries: industries.length,
    avgResults: caseStudies.reduce((acc, cs) => acc + (cs.results?.length || 0), 0) / caseStudies.length,
    featured: caseStudies.filter(cs => cs.featuredImage).length
  }), [caseStudies, industries]);

  const companyStats = [
    {
      number: `${stats.total}+`,
      label: "Case Studies",
      description: "Success stories"
    },
    {
      number: `${stats.industries}`,
      label: "Industries",
      description: "Sectors served"
    },
    {
      number: `${stats.avgResults.toFixed(1)}`,
      label: "Avg Results",
      description: "Per case study"
    },
    {
      number: `${stats.featured}`,
      label: "Featured",
      description: "With images"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-background">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 bg-background/60"></div>
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
              Success Stories
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Discover how leading companies across industries are transforming their operations
              with intelliSPEC&apos;s intelligent inspection and compliance solutions.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">
                Featured Success Story
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Latest <span className="gradient-text">Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Read our latest case studies highlighting measurable improvements and success stories from our clients.
              </p>
            </motion.div>

            {/* Featured Case Study */}
            {caseStudies.slice(0, 1).map((caseStudy, index) => (
              <motion.div
                key={caseStudy._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Card className="glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {caseStudy.featuredImage ? (
                      <div className="relative h-64 lg:h-full">
                        <Image 
                          src={urlFor(caseStudy.featuredImage).width(800).height(600).url()} 
                          alt={caseStudy.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                          placeholder="empty"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>
                    ) : (
                      <div className="relative h-64 lg:h-full bg-primary flex items-center justify-center">
                        <div className="text-center text-primary-foreground">
                          <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Featured Case Study</p>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-primary text-primary-foreground border-0">
                          {caseStudy.industry}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted text-foreground">
                          Case Study
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {caseStudy.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(caseStudy.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{caseStudy.client}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>

                      {caseStudy.results && caseStudy.results.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Key Results
                          </h4>
                          <ul className="space-y-2">
                            {caseStudy.results.slice(0, 3).map((result, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button 
                        asChild
                        className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href={`/case-studies/${caseStudy.slug.current}`} className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Read Full Case Study</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
              Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              All <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our complete collection of case studies showcasing real results and measurable improvements.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleIndustryChange('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-blue-50:bg-slate-700'
                  }`}
                >
                  All Industries ({caseStudies.length})
                </button>
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleIndustryChange(industry)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-blue-50:bg-slate-700'
                    }`}
                  >
                    {industry} ({caseStudies.filter(cs => cs.industry === industry).length})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCaseStudies.filter(cs => cs._id !== caseStudies[0]?._id).map((caseStudy, index) => (
              <motion.div
                key={caseStudy._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {caseStudy.featuredImage ? (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                      <Image 
                        src={urlFor(caseStudy.featuredImage).width(600).height(400).url()} 
                        alt={caseStudy.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        placeholder="empty"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-medium">Case Study</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 text-xs">
                        {caseStudy.industry}
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                        Case Study
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-slate-600 mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(caseStudy.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-3 h-3" />
                        <span>{caseStudy.client}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {caseStudy.excerpt}
                    </p>

                    {caseStudy.results && caseStudy.results.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-slate-900 mb-2 flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Key Results
                        </h4>
                        <ul className="space-y-1">
                          {caseStudy.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="text-xs text-slate-600 flex items-start gap-1">
                              <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full mt-auto flex-shrink-0"
                    >
                      <Link href={`/case-studies/${caseStudy.slug.current}`} className="flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Read Case Study</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No case studies found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search criteria or check back later for new case studies.
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-xl px-6"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="lg"
                    onClick={() => setCurrentPage(page)}
                    className="w-12 h-12 rounded-xl"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-xl px-6"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white border-0">
              Ready to Get Started?
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to See <span className="gradient-text">Similar Results</span>?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how intelliSPEC can help transform your operations and achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Get Started Today</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="px-8 py-4"
              >
                <Link href="/pricing" className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>See Pricing</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
