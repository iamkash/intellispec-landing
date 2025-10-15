"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Command, 
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
  Radio,
  MapPin,
  Bell,
  Monitor,
  Smartphone,
  Wifi,
  Signal,
  Target,
  Gauge
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TLDRBlock from '@/components/sections/TLDRBlock'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'

export default function IntelliSAFETYPage() {
  const features = [
    {
      icon: Monitor,
      title: "Real-Time Dashboards",
      description: "Live operational dashboards with customizable widgets and real-time data visualization"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent alert system with configurable thresholds and automated notifications"
    },
    {
      icon: Users,
      title: "Shift Management",
      description: "Digital shift logs, crew tracking, and personnel management with real-time status"
    },
    {
      icon: Activity,
      title: "Activity Monitoring",
      description: "Comprehensive activity tracking with detailed logs and performance analytics"
    },
    {
      icon: MapPin,
      title: "Field Visibility",
      description: "Real-time location tracking and field activity monitoring across all operations"
    },
    {
      icon: Shield,
      title: "Safety Oversight",
      description: "Centralized safety monitoring with incident tracking and compliance dashboards"
    }
  ]

  const benefits = [
    "Improve operational efficiency by 75%",
    "Reduce response time by 60%",
    "Increase field visibility by 90%",
    "Enhance safety compliance by 85%",
    "Cut communication delays by 70%",
    "Boost productivity by 50%"
  ]

  const advancedFeatures = [
    {
      icon: Radio,
      title: "Real-Time Communication",
      description: "Instant messaging, voice calls, and emergency alerts across all field personnel"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "AI-powered insights and predictive maintenance alerts for proactive operations"
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Real-time KPI tracking with customizable dashboards and automated reporting"
    },
    {
      icon: Smartphone,
      title: "Mobile Command Center",
      description: "Full command capabilities on mobile devices with offline functionality"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamless integration with IoT sensors and smart devices for comprehensive monitoring"
    },
    {
      icon: Signal,
      title: "Advanced Reporting",
      description: "Automated report generation with drill-down capabilities and trend analysis"
    }
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "Cloud-Based Platform",
      description: "Enterprise-grade cloud infrastructure with 99.9% uptime and global CDN"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Sub-second data processing with WebSocket connections and live updates"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and multi-factor authentication"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "RESTful APIs for seamless integration with existing systems and third-party tools"
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Multiple export formats including PDF, Excel, CSV, and real-time data feeds"
    },
    {
      icon: Calendar,
      title: "Scheduled Operations",
      description: "Automated scheduling and task management with calendar integration"
    }
  ]

  const commandCapabilities = [
    {
      title: "Emergency Response",
      description: "Instant emergency alerts and rapid response coordination across all teams",
      icon: AlertTriangle
    },
    {
      title: "Resource Allocation",
      description: "Real-time resource tracking and optimal allocation based on current needs",
      icon: Target
    },
    {
      title: "Quality Control",
      description: "Live quality monitoring and automated quality assurance workflows",
      icon: CheckCircle
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous compliance tracking with automated audit trails and reporting",
      icon: Shield
    }
  ]

  const useCases = [
    {
      title: "Plant Operations",
      description: "Real-time monitoring of plant operations with automated alerts and control systems",
      icon: Monitor
    },
    {
      title: "Field Maintenance",
      description: "Mobile field maintenance with real-time work order management and progress tracking",
      icon: HardHat
    },
    {
      title: "Safety Management",
      description: "Comprehensive safety oversight with incident prevention and emergency response",
      icon: Shield
    },
    {
      title: "Asset Management",
      description: "Real-time asset tracking and performance monitoring across all equipment",
      icon: Activity
    }
  ]

  return (
    <>

      <main className="min-h-screen">

        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-900/40 to-slate-800/40 animate-background-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-float"></div>
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
                    <Command className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-semibold">intelliSAFETY Module</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Safety Command Excellence
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your safety operations with AI-powered command center that never sleeps. Get instant alerts, 
                  real-time monitoring, and predictive insights that prevent incidents before they happen. 
                  <span className="text-primary font-semibold px-1">75% faster response times</span> and 
                  <span className="text-primary font-semibold px-1">90% reduction in safety violations</span> guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary" aria-label="Start free trial of intelliSAFETY">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <button className="btn-outline" aria-label="Watch intelliSAFETY demo">
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
                      src="/images/modules/command.jpg"
                      alt="intelliSAFETY - Safety Command Center"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Subtle Logo Watermark */}
                    <div className="absolute top-4 right-4">
                      <Image
                        src="/images/logos/light-logo.png"
                        alt="intelliSPEC"
                        width={120}
                        height={27}
                        className="opacity-30"
                      />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Command className="w-5 h-5 text-white" />
                        </div>
                        <div>
                        <p className="text-white font-semibold">intelliSAFETY</p>
                        <p className="text-primary-foreground/80 text-sm">Safety Command Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding glass-section-alt relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Command Center Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to manage your operations with precision and control
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
                  Operational Excellence
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your operations with measurable improvements and enhanced visibility
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
                      <p className="text-slate-500">Operational Analytics Dashboard</p>
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
                Advanced Command Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology for comprehensive operational command and control
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


        {/* Command Lifecycle Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="command-lifecycle-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="command-lifecycle-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Command Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive management across all phases of the command and control process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Situation Assessment",
                  description: "Real-time monitoring and analysis of operational conditions",
                  icon: Eye
                },
                {
                  title: "Decision Making",
                  description: "Data-driven decision support with scenario analysis",
                  icon: Activity
                },
                {
                  title: "Command Execution",
                  description: "Coordinated execution of operational commands and directives",
                  icon: Zap
                },
                {
                  title: "Performance Review",
                  description: "Post-action analysis and continuous improvement",
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

        {/* Command Capabilities Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="command-capabilities-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="command-capabilities-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Command Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced command and control capabilities for complex operational environments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commandCapabilities.map((capability, index) => (
                <motion.article
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <capability.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
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
                Proven solutions for critical operational scenarios and complex environments
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
                  Connect with your existing operational systems and workflows
                </p>
                
                <ul className="space-y-6" role="list">
                  {[
                    "Integration with existing SCADA and control systems",
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

        {/* Future Industrial Safety Command Center (Wilma) Roadmap Section */}
        <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="command-future-roadmap-heading">
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
              <h2 id="command-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Future: The Industrial Safety Command Center (Wilma)
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our roadmap for the future of safety monitoring. This advanced system will transform safety monitoring 
                into intelligent safety sentinels with AI-powered surveillance and predictive alerting capabilities.
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
                      title: "Live AI-Monitored Feeds",
                      description: "Connects to IP cameras at entry points—AI engine provides continuous safety protocol monitoring.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["IP camera integration", "AI safety monitoring", "Continuous surveillance", "Protocol compliance"]
                    },
                    {
                      title: "Automated Attendant Verification",
                      description: "AI verifies the presence of hole watch/fire watch attendants and triggers alerts if they leave post.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Attendant verification", "AI monitoring", "Alert triggers", "Post monitoring"]
                    },
                    {
                      title: "Real-Time Dashboards & Incident Logging",
                      description: "Central dashboard displays live confined space status, auto-logs incidents with video evidence.",
                      icon: "★",
                      color: "from-accent to-accent",
                      features: ["Live dashboards", "Confined space status", "Auto incident logging", "Video evidence"]
                    },
                    {
                      title: "Predictive Alerting",
                      description: "AI detects risky behaviors or permit overruns, sending early warnings before incidents happen.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["AI behavior detection", "Permit overrun alerts", "Early warnings", "Incident prevention"]
                    },
                    {
                      title: "AI-Generated Audit Reports",
                      description: "Creates complete, auditable reports for every entry—timestamps, logs, video snapshots, and alerts.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Complete audit reports", "Timestamps", "Video snapshots", "Alert documentation"]
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
                  Ready to Transform Your Safety Operations?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join industry leaders who have revolutionized their safety operations with intelliSAFETY. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary" aria-label="Start free trial of intelliSAFETY">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <Link href="/contact" className="btn-outline" aria-label="Contact sales for intelliSAFETY">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <LLMReadyBlock
          intent="Command Center FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'How do unified dashboards accelerate response time with situational awareness and real‑time KPIs?', a: 'Consolidated views, alerts, and KPIs reduce time to action across operations.' },
            { q: 'Is there mobile/offline support for command workflows and incident updates in the field?', a: 'Yes. Mobile command workflows run offline with secure synchronization.' },
            { q: 'Can SCADA systems and IoT sensors be integrated to stream live signals into the command hub?', a: 'Yes. Data feeds and adapters stream real‑time signals into the hub.' },
            { q: 'Are communications unified with shift logs, messaging, and incident records in one system?', a: 'Yes. Shift logs, messaging, and incident records are centralized with audit trails.' },
            { q: 'Do predictive alerts use thresholds and machine learning to flag risks before incidents?', a: 'Yes. Thresholds and ML models predict risks and trigger early alerts.' },
            { q: 'What audit evidence is captured for incidents and operational actions?', a: 'Immutable logs record events, users, timestamps, and supporting evidence.' },
            { q: 'How is role‑based access enforced across teams, locations, and functions?', a: 'RBAC limits views and actions by team, role, and location.' },
            { q: 'How are incidents documented from the field with forms, media attachments, and activity logs?', a: 'Structured forms capture details and attachments; activity logs are automatic.' },
            { q: 'Can KPIs be customized per operation and surfaced on configurable dashboards?', a: 'Yes. KPI tiles and dashboards are configurable per operation.' },
            { q: 'What security controls protect the command center and its data?', a: 'Encryption, SSO, and least‑privilege access with comprehensive auditing.' }
          ]}
        />

        <TLDRBlock
          summary={(
            <p>
              Achieve real-time situational awareness and faster response with live dashboards, smart alerts, and
              integrated communications—plus predictive insights for proactive safety.
            </p>
          )}
          takeaways={[
            'Live command visibility across plants and field',
            'Predictive alerts reduce incident frequency',
            'Immutable audit trails for reporting and reviews',
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
            name: 'intelliSAFETY',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/command',
            image: 'https://intellispec.com/images/modules/command.jpg'
          })
        }}
      />
    </>
  )
} 