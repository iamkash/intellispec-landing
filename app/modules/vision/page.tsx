"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Eye, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  HardHat,
  Zap,
  BarChart3,
  Clock,
  Database,
  Activity,
  AlertTriangle,
  Settings,
  Calendar,
  QrCode,
  Lock,
  AlertCircle,
  Clipboard,
  Search,
  Download,
  FileText,
  Map,
  Layers,
  Monitor,
  Smartphone,
  Wifi,
  Signal,
  Target,
  Gauge,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  Globe,
  Compass,
  Navigation,
  Building,
  Factory
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliVisionPage() {
  const features = [
    {
      icon: Layers,
      title: "2D/3D CAD Viewing",
      description: "Upload and view CAD files tied to assets and inspection points with measurement tools"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Real-time data visualizations and operational insights with customizable widgets"
    },
    {
      icon: FileText,
      title: "Custom Report Builder",
      description: "Drag-and-drop report builder with auto-generated PDFs and exportable logs"
    },
    {
      icon: Map,
      title: "Facility-Level Views",
      description: "Floorplans, asset zones, and location-based routing with spatial analytics"
    },
    {
      icon: TrendingUp,
      title: "KPI Trends",
      description: "Track performance metrics and trends with historical data analysis"
    },
    {
      icon: Monitor,
      title: "Operational Insights",
      description: "AI-powered analytics with pattern recognition and predictive capabilities"
    }
  ]

  const benefits = [
    "Improve decision-making speed by 80%",
    "Reduce data analysis time by 70%",
    "Increase operational visibility by 90%",
    "Enhance collaboration by 75%",
    "Cut reporting time by 60%",
    "Boost productivity by 65%"
  ]

  const advancedFeatures = [
    {
      icon: PieChart,
      title: "CAD File Management",
      description: "Upload, organize, and link CAD files to specific assets and inspection points"
    },
    {
      icon: LineChart,
      title: "Real-Time Dashboards",
      description: "Live operational dashboards with customizable widgets and drill-down capabilities"
    },
    {
      icon: BarChart,
      title: "Data Visualizations",
      description: "Advanced charts, graphs, and visual representations of operational data"
    },
    {
      icon: TrendingDown,
      title: "KPI Tracking",
      description: "Monitor key performance indicators with trend analysis and benchmarking"
    },
    {
      icon: Navigation,
      title: "Location-Based Routing",
      description: "Optimize routes and workflows based on asset locations and facility layout"
    },
    {
      icon: Building,
      title: "Asset Zones",
      description: "Define and manage asset zones with spatial relationships and floorplan integration"
    }
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "CAD File Support",
      description: "Native support for major CAD formats including DWG, DXF, STEP, and IGES files"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant data processing with live dashboard updates and real-time analytics"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based access control with secure file storage and data encryption"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with existing CAD and data systems"
    },
    {
      icon: Download,
      title: "Export Capabilities",
      description: "Auto-generated PDFs, Excel exports, and exportable logs with custom formatting"
    },
    {
      icon: Calendar,
      title: "Scheduled Reports",
      description: "Automated report generation and distribution with customizable schedules"
    }
  ]

  const visualizationTypes = [
    {
      title: "2D/3D CAD Viewing",
      description: "Upload and view CAD files with measurement tools and asset linking",
      icon: Layers
    },
    {
      title: "Interactive Dashboards",
      description: "Real-time operational dashboards with customizable widgets and drill-down",
      icon: Monitor
    },
    {
      title: "Facility Floorplans",
      description: "Interactive facility maps with asset zones and location-based routing",
      icon: Map
    },
    {
      title: "KPI Trends",
      description: "Track performance metrics and trends with historical data analysis",
      icon: BarChart3
    }
  ]

  const useCases = [
    {
      title: "CAD File Management",
      description: "Upload and organize CAD files linked to assets and inspection points",
      icon: Layers
    },
    {
      title: "Operational Dashboards",
      description: "Real-time data visualizations and operational insights with KPI tracking",
      icon: Activity
    },
    {
      title: "Facility Mapping",
      description: "Floorplans, asset zones, and location-based routing optimization",
      icon: Building
    },
    {
      title: "Custom Reporting",
      description: "Drag-and-drop report builder with auto-generated PDFs and exportable logs",
      icon: FileText
    }
  ]

  return (
    <>

      <main className="min-h-screen">
      
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-muted/40 to-muted/60 animate-background-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-semibold">IntelliVision Module</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Visual Intelligence Hub
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Visualize your entire operation with AI-enhanced 2D/3D CAD viewing and interactive dashboards. 
                  Get instant insights from visual data analysis, automated pattern recognition, and predictive trend mapping. 
                  <span className="text-primary font-semibold px-1">80% faster decision making</span> and 
                  <span className="text-primary font-semibold px-1">$2.5M operational savings</span> - see everything, understand more.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary" aria-label="Start free trial of IntelliVision">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <button className="btn-outline" aria-label="Watch IntelliVision demo">
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/modules/vision.jpg"
                    alt="IntelliVision - Visual Intelligence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliVision</p>
                        <p className="text-primary-foreground/80 text-sm">Visual Intelligence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="section-padding glass-section relative overflow-hidden">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Core Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive business intelligence capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="benefits-heading">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Intelligence Excellence
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your data into actionable insights with measurable improvements
                </p>
                
                <ul className="space-y-4" role="list">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card rounded-3xl p-8">
                  <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                      <p className="text-muted-foreground">Analytics Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="advanced-features-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="advanced-features-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Advanced Analytics Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology for comprehensive data analysis and visualization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="tech-specs-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="tech-specs-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Technical Specifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built with enterprise-grade technology for reliability, performance, and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <motion.article
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <spec.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{spec.title}</h3>
                  <p className="text-muted-foreground">{spec.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Visualization Lifecycle Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="visualization-lifecycle-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="visualization-lifecycle-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Visualization Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive management across all phases of the data visualization process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Data Collection",
                  description: "Automated data collection from multiple sources and systems",
                  icon: Database
                },
                {
                  title: "Data Processing",
                  description: "Advanced data processing, cleaning, and transformation",
                  icon: Settings
                },
                {
                  title: "Visualization Design",
                  description: "Interactive dashboard design with customizable layouts",
                  icon: Eye
                },
                {
                  title: "Analysis & Insights",
                  description: "Advanced analytics with predictive insights and reporting",
                  icon: BarChart3
                }
              ].map((phase, index) => (
                <motion.article
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <phase.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Visualization Types Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="visualization-types-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="visualization-types-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Visualization Types
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive visualization capabilities for all types of data and analysis
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visualizationTypes.map((type, index) => (
                <motion.article
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <type.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="use-cases-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="use-cases-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Common Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proven solutions for critical business intelligence and analytics scenarios
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.article
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <useCase.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Integration & Workflow Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="integration-heading">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 id="integration-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Seamless Integration
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Connect with your existing data sources and business intelligence systems
                </p>
                
                <ul className="space-y-6" role="list">
                  {[
                    "Integration with existing data warehouses and databases",
                    "Real-time data connectivity with live streaming capabilities",
                    "API-first architecture for custom data source integration",
                    "Mobile app compatibility with responsive dashboards",
                    "Automated data refresh and synchronization",
                    "Comprehensive data governance and security controls"
                  ].map((integration, index) => (
                    <motion.li
                      key={integration}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">{integration}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="glass-card rounded-3xl p-8">
                  <div className="aspect-square bg-muted/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Database className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                      <p className="text-muted-foreground">Data Integration Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Advanced Business Intelligence & AI-Powered Analytics Platform Roadmap Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="vision-future-roadmap-heading">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="vision-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Future: Advanced Business Intelligence & AI-Powered Analytics Platform
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our roadmap for the future of data visualization and business intelligence. This advanced platform will 
                transform data analysis with AI-powered insights, predictive analytics, and immersive 3D visualizations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  {[
                    {
                      title: "AI-Powered Predictive Analytics",
                      description: "Advanced machine learning algorithms that predict trends, anomalies, and future outcomes with high accuracy.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Predictive modeling", "Trend forecasting", "Anomaly detection", "Risk assessment"]
                    },
                    {
                      title: "Immersive 3D Visualization Engine",
                      description: "Next-generation 3D rendering with VR/AR support for immersive data exploration and facility walkthroughs.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["3D rendering", "VR/AR support", "Immersive exploration", "Facility walkthroughs"]
                    },
                    {
                      title: "Real-Time AI Insights Engine",
                      description: "Continuous AI analysis providing instant insights, recommendations, and automated decision support.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Real-time analysis", "AI insights", "Automated decisions", "Instant recommendations"]
                    },
                    {
                      title: "Advanced Natural Language Query",
                      description: "Conversational AI interface allowing users to ask questions in plain English and receive instant visual answers.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Natural language", "Conversational AI", "Plain English queries", "Instant visual answers"]
                    },
                    {
                      title: "Autonomous Data Storytelling",
                      description: "AI automatically generates compelling data stories, reports, and presentations with narrative insights.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Auto storytelling", "Narrative insights", "Compelling reports", "Data presentations"]
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {feature.features.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100/60 text-muted-foreground border border-slate-200/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <LLMReadyBlock
          intent="Visual Intelligence FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'Which CAD formats does IntelliVision support (DWG, DXF, STEP, IGES) and how are they rendered?', a: 'DWG, DXF, STEP, IGES, and more via adapters; files render in a secure viewer.' },
            { q: 'Can CAD drawings be linked to assets and inspection points with measurements and annotations?', a: 'Yes. Drawings can be tied to assets/points and include measurements and annotations.' },
            { q: 'Do interactive dashboards support drill‑down, filters, and shareable views for teams?', a: 'Yes. Dashboards support drill‑down, filtering, and shareable saved views.' },
            { q: 'How are KPIs tracked with trends, benchmarking, and alert thresholds?', a: 'KPIs include trends, benchmarking, and threshold‑based alerts.' },
            { q: 'Is reporting automated with custom templates, scheduled delivery, and PDF/Excel export?', a: 'Custom report templates support scheduled delivery and PDF/Excel exports.' },
            { q: 'Can facility floorplans and zones be visualized with location‑based routing and search?', a: 'Yes. Floorplans and zones support routing, find‑nearest, and semantic search.' },
            { q: 'How is real‑time data streamed to dashboards, and what latency can we expect?', a: 'Live updates via WebSockets deliver near‑real‑time latency where applicable.' },
            { q: 'What access controls govern who can view CAD and dashboards across teams and sites?', a: 'RBAC with per‑team/site permissions and audit trails govern access.' },
            { q: 'Is mobile viewing supported for CAD and dashboards with responsive layouts?', a: 'Yes. Responsive CAD viewing and dashboards on mobile are supported.' },
            { q: 'What security and governance controls protect sensitive visual data?', a: 'Encryption, SSO, and governance policies protect sensitive data.' }
          ]}
        />
        <TLDRBlock
          summary={(
            <p>
              Unify CAD, dashboards, and logs into a visual intelligence hub for faster, data‑driven decisions.
            </p>
          )}
          takeaways={[
            'Unified visual hub with CAD and dashboards',
            'Live drill‑down dashboards and alerts',
            'Custom reports and scheduled exports',
          ]}
        />

        {/* CTA Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Ready to Visualize Your Data?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join industry leaders who have revolutionized their data visualization with IntelliVision. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary" aria-label="Start free trial of IntelliVision">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <Link href="/contact" className="btn-outline" aria-label="Contact sales for IntelliVision">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      
      </main>
      {/* Structured Data: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IntelliVision',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/vision',
            image: 'https://intellispec.com/images/modules/vision.jpg'
          })
        }}
      />
    </>
  )
} 