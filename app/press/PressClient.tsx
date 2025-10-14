'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Calendar, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone,
  MapPin,
  Globe,
  Award,
  TrendingUp,
  Users,
  Shield,
  Target,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  FileText,
  Image,
  Video,
  Mic,
  Filter,
  Star,
  Quote,
  Building2,
  Briefcase,
  Rocket,
  CheckCircle,
  Newspaper
} from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import { PressItem } from '@/lib/sanity';

interface PressClientProps {
  pressItems: PressItem[];
}

const ITEMS_PER_PAGE = 6;

export default function PressClient({ pressItems }: PressClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(pressItems.map(item => item.category)));
    return uniqueCategories.sort();
  }, [pressItems]);

  // Filter and search press items
  const filteredPressItems = useMemo(() => {
    return pressItems.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [pressItems, searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPressItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPressItems = filteredPressItems.slice(startIndex, endIndex);

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
    total: pressItems.length,
    categories: categories.length,
    featured: pressItems.filter(item => item.featured).length,
    pressReleases: pressItems.filter(item => item.type === 'Press Release').length
  }), [pressItems, categories]);

  const companyStats = [
    {
      number: `${stats.total}+`,
      label: "Press Items",
      description: "Published"
    },
    {
      number: `${stats.categories}`,
      label: "Categories",
      description: "Topics covered"
    },
    {
      number: `${stats.featured}`,
      label: "Featured",
      description: "Highlighted news"
    },
    {
      number: `${stats.pressReleases}`,
      label: "Press Releases",
      description: "Official announcements"
    }
  ];

  const mediaResources = [
    {
      icon: Image,
      title: "Company Logo",
      description: "High-resolution PK Companies logo in various formats",
      formats: ["PNG", "SVG", "EPS"],
      size: "2.1 MB"
    },
    {
      icon: FileText,
      title: "Company Fact Sheet",
      description: "Comprehensive overview of PK Companies and intelliSPEC™",
      formats: ["PDF"],
      size: "1.8 MB"
    },
    {
      icon: Image,
      title: "Product Screenshots",
      description: "High-quality screenshots of the intelliSPEC™ platform",
      formats: ["PNG", "JPG"],
      size: "5.2 MB"
    },
    {
      icon: FileText,
      title: "Executive Bios",
      description: "Detailed biographies of PK Companies leadership team",
      formats: ["PDF", "DOC"],
      size: "3.4 MB"
    },
    {
      icon: Image,
      title: "Team Photos",
      description: "Professional team and office photography",
      formats: ["JPG", "PNG"],
      size: "8.7 MB"
    },
    {
      icon: FileText,
      title: "Press Kit",
      description: "Complete media kit with all company materials",
      formats: ["ZIP"],
      size: "25.3 MB"
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-8 bg-primary text-primary-foreground border-0 shadow-lg">
                <Newspaper className="w-4 h-4 mr-2" />
                Press & Media
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
            >
              Press{" "}
              <span className="relative">
                <span className="gradient-text">
                  Center
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Stay updated with the latest news, press releases, and media coverage about PK Companies 
              and our mission to revolutionize industrial safety through technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {companyStats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 aspect-square flex flex-col justify-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {index === 0 && <Newspaper className="w-8 h-8 text-white" />}
                    {index === 1 && <Building2 className="w-8 h-8 text-white" />}
                    {index === 2 && <Star className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Press Release */}
      {pressItems.length > 0 && (
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
              Featured News
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Latest <span className="gradient-text">Updates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Read our latest press releases and media coverage highlighting PK Companies&apos; innovations and achievements.
              </p>
            </motion.div>

            {/* Featured Press Item */}
            {pressItems.filter(item => item.featured).slice(0, 1).map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Card className="glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {item.featuredImage ? (
                      <div className="relative h-64 lg:h-full">
                        <NextImage 
                          src={urlFor(item.featuredImage).width(800).height(600).url()} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    ) : (
                      <div className="relative h-64 lg:h-full bg-primary flex items-center justify-center">
                        <div className="text-center text-primary-foreground">
                          <Newspaper className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Featured News</p>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-primary text-primary-foreground border-0">
                          {item.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted text-foreground">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(item.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{item.source}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <Button 
                        asChild
                        className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Link href={`/press/${item.slug.current}`} className="flex items-center space-x-2">
                          <span>{item.type === 'Press Release' ? 'Read Full Release' : item.type === 'Award' ? 'View Award Details' : 'Read Full Article'}</span>
                          <ArrowRight className="w-4 h-4" />
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

      {/* Press Releases & Media Coverage */}
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
              Press & Media
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Press <span className="gradient-text">Releases</span> & Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our latest press releases, media coverage, and company announcements.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search press releases..."
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
                  All News ({pressItems.length})
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
                    {category} ({pressItems.filter(item => item.category === category).length})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Press Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPressItems.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {item.featuredImage ? (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                      <NextImage 
                        src={urlFor(item.featuredImage).width(600).height(400).url()} 
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0 bg-primary flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <Newspaper className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-medium">Press Item</p>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-primary text-primary-foreground border-0 text-xs">
                        {item.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-muted text-foreground text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-3 h-3" />
                        <span>{item.source}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full mt-auto flex-shrink-0"
                    >
                      <Link href={`/press/${item.slug.current}`} className="flex items-center justify-center space-x-2">
                        <span>{item.type === 'Press Release' ? 'Read Release' : item.type === 'Award' ? 'View Award' : 'Read Article'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPressItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No press items found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or check back later for new updates.
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

      {/* Media Resources */}
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
              Media Resources
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Media <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download high-quality media assets, company information, and press materials for your coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <resource.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-grow text-sm">
                      {resource.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Formats:</span>
                        <span className="font-medium text-foreground">
                          {resource.formats.join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium text-foreground">
                          {resource.size}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href="#" className="flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-accent text-accent-foreground border-0 shadow-lg">
              Media Contact
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For media inquiries, press opportunities, or additional information, please contact our media relations team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "press@pkcompanies.com",
                description: "For press inquiries and media requests"
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+1 (713) 555-0123",
                description: "Direct line for urgent media inquiries"
              },
              {
                icon: MapPin,
                title: "Office",
                value: "Houston, TX",
                description: "Main headquarters and press office"
              },
              {
                icon: Globe,
                title: "Website",
                value: "www.pkcompanies.com",
                description: "Company website and resources"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-foreground font-medium mb-2">
                      {contact.value}
                    </p>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 