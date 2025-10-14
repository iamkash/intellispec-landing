"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Archive, 
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
  Eye,
  Search,
  Download,
  FileText,
  FolderOpen,
  Upload,
  Share2,
  Key,
  Server,
  Cloud,
  ShieldCheck,
  FileCheck,
  FolderTree,
  History
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliSCAFFPage() {
  const features = [
    {
      icon: HardHat,
      title: "Scaffold Registration",
      description: "Complete scaffold registration system with QR codes and digital tracking"
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Digital safety inspections with automated compliance checking and alerts"
    },
    {
      icon: Calendar,
      title: "Maintenance Scheduling",
      description: "Automated maintenance scheduling with predictive alerts and work orders"
    },
    {
      icon: Users,
      title: "Crew Management",
      description: "Comprehensive crew tracking with certification management and safety training"
    },
    {
      icon: Clipboard,
      title: "Compliance Tracking",
      description: "Real-time compliance monitoring with automated reporting and audit trails"
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Advanced analytics for scaffold utilization, safety metrics, and efficiency"
    }
  ]

  const benefits = [
    "Reduce inspection time by 80%",
    "Improve safety compliance by 95%",
    "Cut scaffold incidents by 60%",
    "Ensure 100% scaffold tracking",
    "Increase crew productivity by 70%",
    "Eliminate safety violations by 90%"
  ]

  const advancedFeatures = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      description: "Multi-layer security with encryption, access controls, and audit logging"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Scalable cloud storage with automatic backups and disaster recovery"
    },
    {
      icon: FileCheck,
      title: "Version Control",
      description: "Complete version history with change tracking and rollback capabilities"
    },
    {
      icon: Share2,
      title: "Collaborative Access",
      description: "Secure sharing with role-based permissions and real-time collaboration"
    },
    {
      icon: FolderTree,
      title: "Smart Organization",
      description: "AI-powered document organization with automatic categorization and tagging"
    },
    {
      icon: History,
      title: "Audit Trails",
      description: "Comprehensive audit trails with detailed access logs and compliance reporting"
    }
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "Enterprise Storage",
      description: "High-performance storage infrastructure with 99.99% uptime and global redundancy"
    },
    {
      icon: Zap,
      title: "Fast Retrieval",
      description: "Sub-second document retrieval with intelligent caching and indexing"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "SOC 2 Type II certified with AES-256 encryption and multi-factor authentication"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with existing document management systems"
    },
    {
      icon: Download,
      title: "Export Capabilities",
      description: "Multiple export formats with batch processing and automated workflows"
    },
    {
      icon: Calendar,
      title: "Retention Policies",
      description: "Automated retention policies with compliance monitoring and legal hold support"
    }
  ]

  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit",
      icon: Lock
    },
    {
      title: "Access Controls",
      description: "Role-based access controls with granular permissions",
      icon: Key
    },
    {
      title: "Audit Logging",
      description: "Comprehensive audit logs with detailed activity tracking",
      icon: Activity
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with industry standards and regulations",
      icon: Shield
    }
  ]

  const useCases = [
    {
      title: "Inspection Records",
      description: "Secure storage and management of all inspection reports and findings",
      icon: FileText
    },
    {
      title: "Compliance Documents",
      description: "Regulatory compliance documents with automated retention and audit trails",
      icon: Clipboard
    },
    {
      title: "Technical Specifications",
      description: "Engineering documents, drawings, and technical specifications",
      icon: HardHat
    },
    {
      title: "Training Records",
      description: "Employee training records and certification management",
      icon: Users
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
                    <Archive className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-semibold">IntelliSCAFF Module</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Scaffolding Management Excellence
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Eliminate scaffolding safety risks with AI-powered monitoring and automated compliance tracking. 
                  Get instant alerts for structural issues, automated inspection schedules, and bulletproof documentation. 
                  <span className="text-primary font-semibold px-1">80% faster inspections</span> and 
                  <span className="text-primary font-semibold px-1">100% compliance guarantee</span> - zero safety violations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary" aria-label="Start free trial of IntelliSCAFF">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <button className="btn-outline" aria-label="Watch IntelliSCAFF demo">
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
                      src="/images/modules/vault.jpg"
                      alt="IntelliSCAFF - Scaffolding Management"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliSCAFF</p>
                        <p className="text-primary-foreground/80 text-sm">Scaffolding Management</p>
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
                Comprehensive document management capabilities
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
                  Scaffolding Management Excellence
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your scaffolding operations with measurable improvements and enhanced safety
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
                  <div className="aspect-square bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                      <p className="text-slate-500">Scaffolding Analytics Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="advanced-features-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="advanced-features-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Advanced Document Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology for comprehensive document management and security
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
                Built with enterprise-grade technology for reliability, security, and performance
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

        {/* Document Lifecycle Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="document-lifecycle-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="document-lifecycle-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Document Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive management across all phases of the document lifecycle
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Document Creation",
                  description: "Secure document creation with version control and metadata",
                  icon: FileText
                },
                {
                  title: "Review & Approval",
                  description: "Structured review process with digital signatures and approvals",
                  icon: CheckCircle
                },
                {
                  title: "Storage & Access",
                  description: "Secure storage with role-based access control and encryption",
                  icon: Lock
                },
                {
                  title: "Retention & Archive",
                  description: "Automated retention policies and long-term archival management",
                  icon: Database
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

        {/* Security Features Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="security-features-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="security-features-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Enterprise Security
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bank-level security features for protecting your most sensitive documents
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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
                Proven solutions for critical document management scenarios
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
        <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="integration-heading">
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
                  Connect with your existing document management systems and workflows
                </p>
                
                <ul className="space-y-6" role="list">
                  {[
                    "Integration with existing document management systems",
                    "API-first architecture for custom integrations",
                    "Real-time synchronization across all platforms",
                    "Mobile app compatibility with offline functionality",
                    "Automated document workflows and approvals",
                    "Comprehensive audit trail and compliance reporting"
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
                  <div className="aspect-square bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Server className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                      <p className="text-slate-500">System Integration Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Intelligent Document Vault & AI-Powered Records Manager Roadmap Section */}
        <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="vault-future-roadmap-heading">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="vault-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Future: Intelligent Document Vault & AI-Powered Records Manager
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our roadmap for the future of document management. This advanced system will transform document 
                storage into intelligent data vaults with AI-powered classification, automated compliance, and predictive analytics.
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
                      title: "AI-Powered Document Classification",
                      description: "Automatically categorizes and tags documents using AI, ensuring proper organization and compliance.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["AI classification", "Automatic tagging", "Smart organization", "Compliance assurance"]
                    },
                    {
                      title: "Intelligent Data Extraction & OCR",
                      description: "Advanced OCR with AI-powered data extraction from any document format, creating searchable databases.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Advanced OCR", "Data extraction", "Searchable databases", "Multi-format support"]
                    },
                    {
                      title: "Predictive Compliance Monitoring",
                      description: "AI monitors document lifecycle and predicts compliance risks, automatically flagging potential issues.",
                      icon: "★",
                      color: "from-accent to-accent",
                      features: ["Predictive monitoring", "Compliance risks", "Auto flagging", "Lifecycle tracking"]
                    },
                    {
                      title: "Blockchain Document Authentication",
                      description: "Immutable document verification using blockchain technology for tamper-proof record keeping.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Blockchain verification", "Immutable records", "Tamper-proof", "Document authentication"]
                    },
                    {
                      title: "AI-Generated Compliance Reports",
                      description: "Automatically generates comprehensive compliance reports with insights and recommendations.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Auto report generation", "Compliance insights", "Recommendations", "Comprehensive analysis"]
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
                  Ready to Transform Your Scaffolding Operations?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join industry leaders who have revolutionized their scaffolding management with IntelliSCAFF. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary" aria-label="Start free trial of IntelliSCAFF">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <Link href="/contact" className="btn-outline" aria-label="Contact sales for IntelliSCAFF">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <LLMReadyBlock
          intent="Scaffolding/Vault FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'Which scaffolding records are tracked (registrations, inspections, crew assignments) and how are they identified (QR/ID)?', a: 'Registrations, inspections, crew assignments, and status are tracked by QR/ID.' },
            { q: 'Do safety inspections use digital checklists with defect logging and automated compliance checks?', a: 'Yes. Digital checklists, defect logs, and automated compliance checks are supported.' },
            { q: 'How are documents managed with versioning, RBAC, and retention policies in the vault?', a: 'A versioned document vault enforces RBAC with configurable retention policies.' },
            { q: 'Can audit evidence be compiled automatically into packs with photos, checklists, and signatures?', a: 'Yes. Evidence packs compile photos, checklists, and signatures for rapid audits.' },
            { q: 'What analytics are available for utilization, safety incidents, readiness, and turnaround support?', a: 'Analytics cover utilization, incidents, readiness, and turnaround support.' },
            { q: 'Is mobile/offline supported for field inspections and document access?', a: 'Yes. Field inspection and document access work offline with secure sync.' },
            { q: 'What integrations exist with work management and safety systems?', a: 'API‑first integrations connect to work management and safety platforms.' },
            { q: 'How is access controlled across sites and projects, and what is logged?', a: 'Role‑based permissions per site/project with detailed audit logs.' },
            { q: 'Can photos and digital forms be attached with markups for context?', a: 'Yes. Attachments, markups, and digital forms are supported.' },
            { q: 'What security controls protect the vault and its records?', a: 'Encryption, SSO, and tamper‑evident logging protect sensitive records.' }
          ]}
        />
        <TLDRBlock
          summary={(
            <p>
              Digitize scaffolding records and documents with versioned storage, access controls, and analytics for
              compliance and readiness.
            </p>
          )}
          takeaways={[
            'Faster inspections; fewer incidents',
            'Versioning and RBAC for secure records',
            'Audit‑ready packs in minutes',
          ]}
        />

      </main>
      {/* Structured Data: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IntelliSCAFF',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/vault',
            image: 'https://intellispec.com/images/modules/vault.jpg'
          })
        }}
      />
    </>
  )
} 