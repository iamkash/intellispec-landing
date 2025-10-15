'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Clock, 
  User, 
  Tag, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Sparkles,
  Zap,
  ArrowUpRight,
  Play,
  ExternalLink,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/sanity';

interface BlogPostsClientProps {
  blogPosts: BlogPost[];
}

const ITEMS_PER_PAGE = 9;

export default function BlogPostsClient({ blogPosts }: BlogPostsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories and tags for filters
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    return uniqueCategories.sort();
  }, [blogPosts]);

  const allTags = useMemo(() => {
    const tags = blogPosts.flatMap(post => post.tags || []);
    const uniqueTags = Array.from(new Set(tags));
    return uniqueTags.sort();
  }, [blogPosts]);

  // Filter and search blog posts
  const filteredBlogPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedBlogPosts = filteredBlogPosts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const stats = useMemo(() => ({
    total: blogPosts.length,
    categories: categories.length,
    avgReadTime: blogPosts.reduce((acc, post) => acc + (post.readTime || 0), 0) / blogPosts.length,
    totalTags: allTags.length
  }), [blogPosts, categories, allTags]);

  const companyStats = [
    {
      number: `${stats.total}+`,
      label: "Articles",
      description: "Published"
    },
    {
      number: `${stats.categories}`,
      label: "Categories",
      description: "Topics covered"
    },
    {
      number: `${stats.avgReadTime.toFixed(1)}`,
      label: "Avg Read Time",
      description: "Minutes"
    },
    {
      number: `${stats.totalTags}`,
      label: "Topics",
      description: "Tags used"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-5"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent rounded-full opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
              Industry Insights
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
              Blog <span className="gradient-text">Posts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Insights, updates, and thought leadership on intelligent inspection technology, 
              compliance solutions, and industry best practices.
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

      {/* Featured Blog Post */}
      {blogPosts.length > 0 && (
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
            <Badge className="mb-6 bg-secondary text-secondary-foreground border-0 shadow-lg">
              Featured Article
            </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Latest <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Read our latest articles highlighting industry trends, technical insights, and best practices.
              </p>
            </motion.div>

            {/* Featured Blog Post */}
            {blogPosts.slice(0, 1).map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Card className="glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {post.featuredImage ? (
                      <div className="relative h-64 lg:h-full">
                        <Image 
                          src={urlFor(post.featuredImage).width(800).height(600).url()} 
                          alt={post.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                      </div>
                    ) : (
                      <div className="relative h-64 lg:h-full bg-primary flex items-center justify-center">
                        <div className="text-center text-primary-foreground">
                          <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Featured Article</p>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-primary text-primary-foreground border-0">
                          {post.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted text-foreground">
                          Article
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        {post.author && (
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{post.author.name}</span>
                          </div>
                        )}
                        {post.readTime && (
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{post.readTime} min read</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                        {post.tags && post.tags.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                              <Tag className="w-4 h-4" />
                              Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      
                      <Button 
                        asChild
                        className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link href={`/blog/${post.slug.current}`} className="flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Read Full Article</span>
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

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
              All Articles
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              All <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete collection of articles covering industry insights, technical updates, and best practices.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background text-foreground border border-border hover:bg-primary/5'
                  }`}
                >
                  All Categories ({blogPosts.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-background text-foreground border border-border hover:bg-primary/5'
                    }`}
                  >
                    {category} ({blogPosts.filter(post => post.category === category).length})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogPosts.filter(post => post._id !== blogPosts[0]?._id).map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {post.featuredImage ? (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                      <Image 
                        src={urlFor(post.featuredImage).width(600).height(400).url()} 
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0 bg-primary flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-medium">Article</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary text-primary-foreground border-0 text-xs">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-muted text-foreground text-xs">
                        Article
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full mt-auto flex-shrink-0"
                    >
                      <Link href={`/blog/${post.slug.current}`} className="flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Read Article</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredBlogPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or check back later for new articles.
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
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss <span className="text-primary-foreground/80">Important Updates</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Get the latest insights, technical articles, and industry trends delivered to your inbox.
              Stay ahead with intelliSPEC&apos;s thought leadership content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Subscribe to Newsletter
              </a>
              <a
                href="/white-papers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
              >
                Read White Papers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
