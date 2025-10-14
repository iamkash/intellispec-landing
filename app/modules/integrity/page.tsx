"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Settings, 
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
  Download,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliIntegrityPage() {
  const features = [
    {
      icon: Activity,
      title: "Mechanical Health Tracking",
      description: "Monitor equipment condition, vibration, and performance metrics in real-time"
    },
    {
      icon: AlertTriangle,
      title: "Corrosion Point Management",
      description: "Track corrosion rates, locations, and mitigation strategies across all assets"
    },
    {
      icon: Shield,
      title: "Coatings Assessment",
      description: "Monitor coating conditions, degradation, and maintenance requirements"
    },
    {
      icon: HardHat,
      title: "Fireproofing Conditions",
      description: "Track fireproofing integrity and compliance with safety standards"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered predictions for equipment failure and maintenance needs"
    },
    {
      icon: Database,
      title: "Asset Health Database",
      description: "Centralized repository for all integrity-related data and history"
    }
  ]

  const benefits = [
    "Reduce unplanned downtime by 70%",
    "Extend asset life by 40%",
    "Cut maintenance costs by 35%",
    "Improve safety compliance by 95%",
    "Increase equipment reliability by 60%",
    "Reduce inspection frequency by 50%"
  ]

  const advancedFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis and reporting for integrity management decisions"
    },
    {
      icon: Clock,
      title: "Predictive Maintenance",
      description: "AI-powered predictions for maintenance scheduling and equipment life extension"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Automated compliance tracking and regulatory reporting for all assets"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing systems and data sources"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized storage and management of all integrity-related documents"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of asset conditions and performance metrics"
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

  const integrityCapabilities = [
    {
      title: "Asset Health Monitoring",
      description: "Continuous monitoring of asset health and performance across all equipment",
      icon: Activity
    },
    {
      title: "Corrosion Control",
      description: "Advanced corrosion monitoring and mitigation strategies",
      icon: Shield
    },
    {
      title: "Coating Management",
      description: "Comprehensive coating assessment and maintenance planning",
      icon: HardHat
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered predictions for equipment failure and maintenance needs",
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      title: "Equipment Monitoring",
      description: "Real-time monitoring of critical equipment and performance metrics",
      icon: Activity
    },
    {
      title: "Corrosion Management",
      description: "Comprehensive corrosion tracking and mitigation across all assets",
      icon: AlertTriangle
    },
    {
      title: "Coating Assessment",
      description: "Advanced coating condition assessment and maintenance planning",
      icon: Shield
    },
    {
      title: "Asset Life Extension",
      description: "Predictive maintenance and life extension strategies for all assets",
      icon: TrendingUp
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
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-primary font-semibold">IntelliIntegrity Module</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Asset Integrity Excellence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Prevent catastrophic failures with AI-powered asset integrity monitoring and predictive maintenance. 
                Get real-time corrosion tracking, automated coating assessments, and failure prediction analytics. 
                <span className="text-primary font-semibold px-1">70% reduction in downtime</span> and 
                <span className="text-primary font-semibold px-1">40% asset life extension</span> - protect your investments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="btn-outline">
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
                    src="/images/modules/integrity.jpg"
                    alt="IntelliIntegrity - Asset Integrity Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliIntegrity</p>
                        <p className="text-slate-200 text-sm">Asset Integrity Management</p>
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
              Comprehensive asset integrity management capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding glass-section relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Proven Results
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your asset integrity management with measurable improvements
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-slate-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="aspect-square bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-primary">Integrity Analytics Dashboard</p>
                    <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrity Lifecycle Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Asset Integrity Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management across all phases of the asset integrity process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment & Inspection",
                description: "Comprehensive asset condition assessment and inspection planning",
                icon: Activity
              },
              {
                title: "Data Collection",
                description: "Systematic data collection from multiple inspection sources",
                icon: Database
              },
              {
                title: "Analysis & Evaluation",
                description: "Advanced analysis of integrity data and condition evaluation",
                icon: BarChart3
              },
              {
                title: "Maintenance Planning",
                description: "Proactive maintenance planning based on integrity findings",
                icon: Settings
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="section-padding glass-section relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology for comprehensive asset integrity management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Mechanical Integrity & Coating Manager Roadmap Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="integrity-future-roadmap-heading">
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
            <h2 id="integrity-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Future: Mechanical Integrity & Coating Manager
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our roadmap for the future of mechanical integrity and coating management. This advanced system will 
              manage the protective layers of industrial assets with AI-powered insights and comprehensive data analysis.
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
                    title: "CML Data Management",
                    description: "Capture CML readings on mobile devices with historical logging and trend analysis for better corrosion control.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["Mobile CML capture", "Historical logging", "Trend analysis", "Corrosion control"]
                  },
                  {
                    title: "AI-Powered Recoating Prediction",
                    description: "Predict when recoating is needed using AI analysis of corrosion data, environment, and coating specs—optimizing maintenance spend.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["AI analysis", "Corrosion data", "Environment factors", "Coating specs"]
                  },
                  {
                    title: "Patch & Repair Analysis",
                    description: "Assess and verify coating patch quality with AI-driven image analysis to ensure long-term integrity.",
                    icon: "★",
                    color: "from-accent to-accent",
                    features: ["Patch quality assessment", "AI image analysis", "Long-term integrity", "Quality verification"]
                  },
                  {
                    title: "Insulation & Fireproofing Scope Planning",
                    description: "Plan and manage insulation and fireproofing scopes, covering all service types and job complexities.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["Insulation planning", "Fireproofing management", "Service types", "Job complexity"]
                  },
                  {
                    title: "NACE-Compliant Surveys",
                    description: "Conduct corrosion surveys with digital workflows designed for strict NACE standards compliance.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["NACE compliance", "Digital workflows", "Corrosion surveys", "Standards adherence"]
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
      <section className="section-padding glass-section relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Protect Your Assets?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join industry leaders who have revolutionized their asset integrity management with IntelliIntegrity. 
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <Link href="/contact" className="btn-outline">
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LLMReadyBlock
        intent="Asset Integrity FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Which data sources does IntelliIntegrity ingest (vibration, corrosion/UT thickness, process historians, manual inspections) and how are they normalized?', a: 'Vibration, corrosion/UT, process data, and manual inspections are ingested and normalized into a common integrity data model.' },
          { q: 'Can IntelliIntegrity predict failures using trend analysis and machine learning, and how are recommendations surfaced to planners?', a: 'Yes. Trend analysis and ML models forecast risks and propose next‑best actions for planners and inspectors.' },
          { q: 'How are corrosion monitoring locations (CMLs) configured, logged historically, and scheduled for re‑inspection?', a: 'CML setup supports historical logging and automated re‑inspection scheduling with route optimization.' },
          { q: 'Does the platform include coating management such as condition tracking, patch QA, and recoating prediction with evidence storage?', a: 'Yes. Coating condition, patch QA, and recoating prediction are supported with linked photo evidence and notes.' },
          { q: 'How is compliance continuously tracked and made audit‑ready without manual collation?', a: 'Live policy checks, required evidence capture, and auto‑assembled audit‑ready reports ensure compliance.' },
          { q: 'Can IntelliIntegrity integrate with CMMS/ERP (e.g., Maximo, SAP) to create and synchronize work orders?', a: 'Yes. API‑first integrations with Maximo, SAP, and others synchronize work orders and status.' },
          { q: 'Which dashboards and KPIs are available for downtime, integrity risk, backlog, and cost trends?', a: 'Dashboards provide downtime and integrity KPIs, backlog health, and cost trend analytics.' },
          { q: 'Is there mobile/offline field capture for inspections, and how is synchronization secured?', a: 'Yes. Field capture works offline and synchronizes securely when connectivity returns.' },
          { q: 'What governance controls exist to manage who can modify data and approve reports?', a: 'Role‑based access control, multi‑step approvals, and tamper‑evident audit trails enforce governance.' },
          { q: 'What security controls protect integrity data at rest, in transit, and during access?', a: 'Encryption at rest/in transit, RBAC, and hardened infrastructure protect sensitive data.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Prevent failures and slash downtime with predictive asset health, digital inspections, and automated
            compliance—driving safer, longer‑lasting equipment.
          </p>
        )}
        takeaways={[
          'Predictive monitoring reduces unplanned downtime',
          'Digital inspections and coating management',
          'Automated compliance and integrity KPIs',
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
          name: 'IntelliIntegrity',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS',
          url: 'https://intellispec.com/modules/integrity',
          image: 'https://intellispec.com/images/modules/integrity.jpg'
        })
      }}
    />
    </>
  )
} 