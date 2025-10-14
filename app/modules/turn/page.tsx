"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  FileText, 
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
  QrCode,
  Lock,
  AlertCircle,
  Clipboard,
  Eye,
  Search,
  Download,
  Target,
  Gauge,
  MapPin,
  Bell,
  Monitor,
  Smartphone,
  Wifi,
  Signal,
  Building,
  Factory,
  Wrench,
  Hammer,
  Truck,
  Package
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliTurnPage() {
  const features = [
    {
      icon: Monitor,
      title: "Digital Wall Charts",
      description: "Visual management dashboards providing real-time transparency and decision-making insights"
    },
    {
      icon: Users,
      title: "Crew Management",
      description: "Real-time crew tracking, skill matrix management, and shift planning with automated scheduling"
    },
    {
      icon: Target,
      title: "Critical Path Monitoring",
      description: "Advanced project scheduling with critical path identification and bottleneck resolution"
    },
    {
      icon: HardHat,
      title: "Scaffold Tracking",
      description: "Complete scaffold management with safety compliance and inspection tracking"
    },
    {
      icon: Wrench,
      title: "Critical Flange Tracking",
      description: "RFID-enabled flange management ensuring leak prevention and safety compliance"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Comprehensive progress monitoring with milestone tracking and performance analytics"
    }
  ]

  const benefits = [
    "Reduce turnaround time by 40%",
    "42% reduction in flange management",
    "Cut turnaround costs by 30%",
    "Improve safety compliance by 95%",
    "Reduce scope creep by 70%",
    "Improve resource utilization by 45%"
  ]

  const advancedFeatures = [
    {
      icon: Zap,
      title: "Weld Tracking",
      description: "Comprehensive weld management with quality assurance and defect tracking"
    },
    {
      icon: Clipboard,
      title: "Digital Permitting",
      description: "Automated permit-to-work system with compliance tracking and safety approvals"
    },
    {
      icon: Lock,
      title: "Blind Tracking",
      description: "Process blind management ensuring safe equipment isolation and verification"
    },
    {
      icon: Shield,
      title: "Digital Job Safety Analysis",
      description: "Automated safety analysis with risk assessment and hazard identification"
    },
    {
      icon: Wifi,
      title: "Mobile Connectivity",
      description: "Offline-capable mobile apps with real-time synchronization and data backup"
    },
    {
      icon: Signal,
      title: "Real-Time Analytics",
      description: "Live data analytics with predictive insights and trend identification"
    }
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "Cloud-Based Platform",
      description: "Enterprise-grade cloud infrastructure with 99.9% uptime and global redundancy"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Sub-second data processing with WebSocket connections and live updates"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and role-based access control"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Seamless integration with existing CMMS, ERP, and project management systems"
    },
    {
      icon: Download,
      title: "Export Capabilities",
      description: "Multiple export formats including PDF, Excel, and project management formats"
    },
    {
      icon: Calendar,
      title: "Scheduled Operations",
      description: "Automated scheduling and task management with calendar integration"
    }
  ]

  const turnaroundPhases = [
    {
      title: "Planning Phase",
      description: "Comprehensive planning with scope definition, resource allocation, and timeline development",
      icon: Calendar
    },
    {
      title: "Execution Phase",
      description: "Real-time execution monitoring with progress tracking and issue resolution",
      icon: Activity
    },
    {
      title: "Quality Control",
      description: "Quality assurance processes with inspection checkpoints and compliance verification",
      icon: CheckCircle
    },
    {
      title: "Commissioning",
      description: "System commissioning with startup procedures and performance validation",
      icon: Shield
    }
  ]

  const useCases = [
    {
      title: "Plant Shutdowns",
      description: "Comprehensive shutdown management with safety protocols and timeline optimization",
      icon: Building
    },
    {
      title: "Equipment Maintenance",
      description: "Major equipment maintenance with resource coordination and progress tracking",
      icon: Wrench
    },
    {
      title: "Capital Projects",
      description: "Capital project execution with scope control and budget management",
      icon: Factory
    },
    {
      title: "Emergency Repairs",
      description: "Emergency repair coordination with rapid response and resource mobilization",
      icon: AlertTriangle
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-semibold">IntelliTurn Module</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Turnaround Excellence
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Digital turnaround management with real-time visibility, critical path monitoring, and automated flange tracking.
                  Only platform with built-in turnaround assessment ensuring on-schedule, on-budget execution.
                  <span className="text-primary font-semibold px-1">42% flange management efficiency</span> and
                  <span className="text-primary font-semibold px-1">40% faster turnarounds</span> guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary" aria-label="Start free trial of IntelliTurn">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <button className="btn-outline" aria-label="Watch IntelliTurn demo">
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
                    src="/images/modules/turn.jpg"
                    alt="IntelliTurn - Turnaround Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliTurn</p>
                        <p className="text-primary-foreground/80 text-sm">Turnaround Management</p>
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
                Comprehensive turnaround management capabilities
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
                  Measurable Impact
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your turnaround performance with proven results
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
                      <p className="text-slate-500">Turnaround Analytics Dashboard</p>
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
                Advanced Turnaround Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology for comprehensive turnaround management and optimization
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

        {/* Turnaround Phases Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="turnaround-phases-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="turnaround-phases-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Turnaround Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive management across all phases of the turnaround process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {turnaroundPhases.map((phase, index) => (
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
                Proven solutions for critical turnaround scenarios and complex projects
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
                  Connect with your existing project management and operational systems
                </p>
                
                <ul className="space-y-6" role="list">
                  {[
                    "Integration with existing CMMS and ERP systems",
                    "Real-time data synchronization across all platforms",
                    "Mobile app compatibility with offline functionality",
                    "API-first architecture for custom integrations",
                    "Automated workflow notifications and escalations",
                    "Comprehensive audit trail and reporting capabilities"
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
                      <Database className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
                      <p className="text-slate-500">System Integration Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future Turnaround Digital Execution Suite Roadmap Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="turnaround-future-roadmap-heading">
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
              <h2 id="turnaround-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Future: The Turnaround Digital Execution Suite
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our roadmap for the future of turnaround optimization. This advanced suite will optimize shutdown, 
                turnaround, and outage (STO) events with AI-powered planning and real-time digital execution.
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
                      title: "AI-Based Scope & Crew Planning",
                      description: "AI analyzes work orders to optimize turnaround scope and assign crews by skill and availability.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["AI analysis", "Work order optimization", "Crew assignment", "Skill matching"]
                    },
                    {
                      title: "Digital Wall Chart Integration",
                      description: "Live, digital wall chart displays real-time turnaround progress, accessible to all stakeholders on any device.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Real-time progress", "Digital wall chart", "Multi-device access", "Stakeholder visibility"]
                    },
                    {
                      title: "AI-Powered Gap Analysis",
                      description: "Predictive analytics flag potential delays by comparing planned vs. actual work in real time.",
                      icon: "★",
                      color: "from-accent to-accent",
                      features: ["Predictive analytics", "Delay detection", "Real-time comparison", "Planned vs actual"]
                    },
                    {
                      title: "Digital Flange Tagging & Blind Management",
                      description: "Mobile tool tracks status of all flanges, blinds, and isolations for safety and faster recommissioning.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Flange tracking", "Blind management", "Safety compliance", "Faster recommissioning"]
                    },
                    {
                      title: "Post-TA Data Cleanup & Closeout",
                      description: "Automatically reconciles data and generates CMMS-ready reports for fast, accurate closeout after every turnaround.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Data reconciliation", "CMMS reports", "Fast closeout", "Accurate documentation"]
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
                  Ready to Transform Your Turnarounds?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join industry leaders who have revolutionized their turnaround management with IntelliTurn. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary" aria-label="Start free trial of IntelliTurn">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <Link href="/contact" className="btn-outline" aria-label="Contact sales for IntelliTurn">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <LLMReadyBlock
        intent="Turnaround FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Does IntelliTurn integrate with Primavera P6 and Microsoft Project, and how do digital wall charts stay synchronized?', a: 'Yes. Bidirectional data exchange keeps digital wall charts aligned with planning tools.' },
          { q: 'How is critical path monitored in real time, and how are bottlenecks highlighted to coordinators?', a: 'Live progress vs plan with variance, bottleneck flags, and task‑level alerts highlight risks.' },
          { q: 'How are flanges and blinds tracked with RFID from install to verification and recommissioning?', a: 'RFID tags track status, verification steps, and leak‑prevention controls through recommissioning.' },
          { q: 'Can permits and JSAs be digitized with prerequisites, routed approvals, and field verification?', a: 'Yes. Digital PTW and JSA workflows enforce prerequisites and capture approvals and field checks.' },
          { q: 'How are crews planned and managed across shifts with skill matrices and utilization insights?', a: 'Skill matrices drive shift planning; live utilization and on‑site visibility support adjustments.' },
          { q: 'Is offline operation supported for field teams, and how does data synchronize securely?', a: 'Yes. Field updates work offline and synchronize securely when connectivity returns.' },
          { q: 'What analytics are provided for progress, safety, costs, and critical‑path variance?', a: 'Dashboards report progress, safety metrics, costs, and variance against the critical path.' },
          { q: 'How do configurable alerts reduce delays and flag permit expiries and scope risks early?', a: 'Alert rules notify on delays, expiries, and scope risks with escalation paths.' },
          { q: 'What audit evidence is captured for permits, flanges/blinds, and task changes?', a: 'Immutable logs with timestamps, users, and evidence support audits and reviews.' },
          { q: 'What security controls govern access across plants and contractors?', a: 'RBAC, encryption, and least‑privilege access are enforced across sites and roles.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Deliver on‑time, on‑budget turnarounds with digital wall charts, RFID flange/blind controls, and real‑time
            alerts for critical‑path execution.
          </p>
        )}
        takeaways={[
          '40% faster STOs; 30% cost reduction',
          '42% flange management efficiency',
          'Audit‑ready documentation by default',
        ]}
      />
      {/* Structured Data: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IntelliTurn',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/turn',
            image: 'https://intellispec.com/images/modules/turn.jpg'
          })
        }}
      />
    </>
  )
} 