"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
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
  Calendar,
  QrCode,
  Lock,
  AlertCircle,
  Clipboard,
  Eye,
  Search,
  Download
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliComplyPage() {

  const features = [
    {
      icon: FileText,
      title: "JSA Management",
      description: "Job Safety Analysis creation, review, and approval workflows with digital signatures"
    },
    {
      icon: Shield,
      title: "Permit-to-Work",
      description: "Digital permit management with automated approvals, notifications, and compliance tracking"
    },
    {
      icon: Lock,
      title: "LOTO Procedures",
      description: "Lockout/Tagout procedures with step-by-step guidance and verification checkpoints"
    },
    {
      icon: AlertCircle,
      title: "Incident Reporting",
      description: "Comprehensive incident documentation with root cause analysis and corrective actions"
    },
    {
      icon: Clipboard,
      title: "Compliance Tracking",
      description: "Real-time monitoring of regulatory compliance with automated audit trails"
    },
    {
      icon: Eye,
      title: "Safety Audits",
      description: "Digital audit management with customizable checklists and automated reporting"
    }
  ]

  const benefits = [
    "Reduce safety incidents by 85%",
    "Improve compliance rate by 95%",
    "Cut permit processing time by 70%",
    "Ensure 100% audit trail compliance",
    "Reduce regulatory fines by 90%",
    "Increase safety awareness by 60%"
  ]

  const advancedFeatures = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live tracking of all safety activities and compliance status across facilities"
    },
    {
      icon: QrCode,
      title: "Digital Permitting",
      description: "QR code-based permit system with instant validation and mobile access"
    },
    {
      icon: Clock,
      title: "Automated Expiry Alerts",
      description: "Proactive notifications for permit renewals, certification expirations, and compliance deadlines"
    },
    {
      icon: Database,
      title: "Centralized Repository",
      description: "Secure storage of all compliance documents, permits, and safety records"
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description: "Advanced reporting and analytics for safety performance and regulatory compliance"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Powerful search capabilities across all compliance documents and safety records"
    }
  ]

  const technicalSpecs = [
    {
      icon: Database,
      title: "Cloud-Based Platform",
      description: "Secure cloud infrastructure with enterprise-grade security and 99.9% uptime"
    },
    {
      icon: Zap,
      title: "Mobile-First Design",
      description: "Native mobile apps with offline functionality and real-time synchronization"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and role-based access control"
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Seamless integration with existing safety management systems and databases"
    },
    {
      icon: Download,
      title: "Export Capabilities",
      description: "Multiple export formats including PDF, Excel, and regulatory submission formats"
    },
    {
      icon: Calendar,
      title: "Scheduled Reports",
      description: "Automated report generation and distribution based on configurable schedules"
    }
  ]

  const complianceStandards = [
    {
      title: "OSHA Standards",
      description: "Full compliance with OSHA regulations including 29 CFR 1910 and 1926",
      icon: Shield
    },
    {
      title: "ISO 45001",
      description: "Occupational health and safety management system compliance",
      icon: FileText
    },
    {
      title: "API Standards",
      description: "Compliance with API safety standards for oil and gas operations",
      icon: HardHat
    },
    {
      title: "State Regulations",
      description: "State-specific safety and environmental compliance requirements",
      icon: Settings
    }
  ]

  const useCases = [
    {
      title: "Hot Work Permits",
      description: "Welding, cutting, and other hot work operations with fire watch requirements",
      icon: AlertTriangle
    },
    {
      title: "Confined Space Entry",
      description: "Entry permits with atmospheric monitoring and rescue team coordination",
      icon: Lock
    },
    {
      title: "Energy Isolation",
      description: "LOTO procedures for electrical, mechanical, and hydraulic systems",
      icon: Shield
    },
    {
      title: "Working at Heights",
      description: "Fall protection permits and safety equipment verification",
      icon: HardHat
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
                    <FileText className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-semibold">IntelliComply Module</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Compliance Excellence
                </h1>
                
                              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Achieve bulletproof safety compliance with automated permit workflows and real-time monitoring. 
                Get instant violation alerts, automated audit trails, and predictive risk assessments. 
                <span className="text-primary font-semibold px-1">100% compliance rate</span> and 
                <span className="text-primary font-semibold px-1">85% incident reduction</span> - never fail another audit.
              </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary" aria-label="Start free trial of IntelliComply">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <button className="btn-outline" aria-label="Watch IntelliComply demo">
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
                      src="/images/modules/comply.jpg"
                      alt="IntelliComply - Safety Compliance Management"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">IntelliComply</p>
                          <p className="text-primary-foreground/80 text-sm">Safety Compliance Management</p>
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
        <section className="section-padding bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
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
                Compliance Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to manage safety compliance and regulatory requirements
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
                  Proven Safety Results
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your safety compliance with measurable improvements and risk reduction
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
                      <p className="text-slate-500">Safety Analytics Dashboard</p>
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
                Advanced Safety Technology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology for comprehensive safety management and compliance
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

        {/* Compliance Lifecycle Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="compliance-lifecycle-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="compliance-lifecycle-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Compliance Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive management across all phases of the compliance process
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Risk Assessment",
                  description: "Comprehensive risk identification, analysis, and mitigation planning",
                  icon: AlertTriangle
                },
                {
                  title: "Procedure Development",
                  description: "Create and document safety procedures with approval workflows",
                  icon: FileText
                },
                {
                  title: "Implementation",
                  description: "Deploy safety procedures with training and communication",
                  icon: Users
                },
                {
                  title: "Monitoring & Audit",
                  description: "Continuous monitoring, auditing, and compliance verification",
                  icon: Eye
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

        {/* Compliance Standards Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="compliance-standards-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="compliance-standards-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Regulatory Compliance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built-in compliance with major safety and regulatory standards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.article
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <standard.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{standard.title}</h3>
                  <p className="text-muted-foreground text-sm">{standard.description}</p>
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
                Proven solutions for critical safety scenarios and high-risk operations
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
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="integration-heading">
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
                  Connect with your existing safety management systems and workflows
                </p>
                
                <ul className="space-y-6" role="list">
                  {[
                    "Integration with existing safety management systems",
                    "API-first architecture for custom integrations", 
                    "Real-time data synchronization across all platforms",
                    "Mobile app compatibility with offline functionality",
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
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Sarah&apos;s Story</h3>
                      <p className="text-primary">Safety Manager, PetroChem Industries</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    &ldquo;At 2 AM, our system alerted me to an expired hot work permit. I immediately contacted the crew
                    and prevented what could have been a catastrophic incident. IntelliComply didn&apos;t just save our
                    facility - it saved lives.&rdquo;
                  </blockquote>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-sm text-slate-500">Reduction in incidents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">$2.3M</div>
                      <div className="text-sm text-slate-500">Saved in potential losses</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Before IntelliComply</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Manual permit processing took 4-6 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Lost permits and missing documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                        $500K in regulatory fines annually
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Safety incidents every 3 months
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass-card rounded-2xl p-6">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">After IntelliComply</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Instant permit approval in 15 minutes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                        100% digital audit trail compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Zero regulatory fines for 2 years
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                        Zero safety incidents in 18 months
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Future HSQE Compliance Manager Roadmap Section */}
        <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="compliance-future-roadmap-heading">
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
              <h2 id="compliance-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Future: HSQE Compliance Manager
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our roadmap for the future of compliance management. This advanced system will digitize the entire 
                compliance management lifecycle with AI-powered insights and comprehensive safety controls.
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
                      title: "AI-Powered Job Safety Analysis (JSA)",
                      description: "AI suggests hazards and controls for JSAs, speeding up completion and boosting quality.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["AI hazard suggestions", "Control recommendations", "Faster completion", "Quality improvement"]
                    },
                    {
                      title: "Permit to Work (PTW) Management",
                      description: "Digital management of all work permits, with real-time status tracking and approvals.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["Digital permit management", "Real-time tracking", "Status monitoring", "Automated approvals"]
                    },
                    {
                      title: "Lockout/Tagout (LOTO) Tracking",
                      description: "Tracks LOTO devices and activities, ensuring compliance with energy isolation requirements.",
                      icon: "★",
                      color: "from-accent to-accent",
                      features: ["LOTO device tracking", "Activity monitoring", "Energy isolation", "Compliance assurance"]
                    },
                    {
                      title: "AI-Assisted Incident & Near-Miss Reporting",
                      description: "Easy, mobile incident reporting with AI-generated summaries and root cause suggestions.",
                      icon: "★",
                      color: "from-primary to-primary",
                      features: ["Mobile reporting", "AI summaries", "Root cause analysis", "Near-miss tracking"]
                    },
                    {
                      title: "Corrective & Preventive Actions (CAPA)",
                      description: "Assigns, tracks, and verifies CAPA tasks to close safety and compliance gaps efficiently.",
                      icon: "★",
                      color: "from-secondary to-secondary",
                      features: ["CAPA assignment", "Task tracking", "Gap closure", "Efficient verification"]
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
                  Ready to Transform Your Safety Compliance?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join industry leaders who have revolutionized their safety compliance with IntelliComply. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary" aria-label="Start free trial of IntelliComply">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </button>
                  <Link href="/contact" className="btn-outline" aria-label="Contact sales for IntelliComply">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <LLMReadyBlock
          intent="Compliance Management FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'Which safety and regulatory standards does IntelliComply support (OSHA, ISO 45001, API) and how are site policies enforced?', a: 'OSHA, ISO 45001, API, and site‑specific policies are enforced via configurable checks.' },
            { q: 'Can Permit‑to‑Work and JSAs be fully digitized with prerequisites, routed approvals, and e‑signatures?', a: 'Yes. Digital PTW and JSAs enforce prerequisites and route approvals with e‑signatures.' },
            { q: 'Does IntelliComply support LOTO with device logs, lock status, verification steps, and evidence capture?', a: 'Yes. LOTO tracking includes device logs, status, verification steps, and captured evidence.' },
            { q: 'How are expiries and renewals handled for permits, certifications, and inspections?', a: 'Automated reminders and worklists track expiries and required renewals.' },
            { q: 'Is there a central repository with versioning, e‑signatures, and rapid retrieval for audits?', a: 'Yes. Versioned documents with e‑signatures support fast retrieval during audits.' },
            { q: 'What analytics are available, including compliance KPIs, trends, and CAPA heatmaps?', a: 'Dashboards visualize compliance KPIs, trends, and CAPA heatmaps.' },
            { q: 'Is mobile/offline completion supported for permits, JSAs, and verifications?', a: 'Yes. Field completion works offline with secure synchronization.' },
            { q: 'What evidence and trails are captured to ensure audit readiness by default?', a: 'Timestamped actions, e‑signatures, and evidence packs provide complete audit trails.' },
            { q: 'What integrations are available with safety systems and data stores?', a: 'API‑first integrations connect to existing safety systems and data repositories.' },
            { q: 'What security measures protect compliance data and access?', a: 'RBAC, encryption, SSO, and tamper‑evident logs secure the platform.' }
          ]}
        />

        <TLDRBlock
          summary={(
            <p>
              Achieve bulletproof safety compliance with digital permits, JSAs, LOTO, and real‑time monitoring—complete
              with audit‑ready evidence.
            </p>
          )}
          takeaways={[
            '85% fewer incidents; faster approvals',
            'Centralized audit trails and evidence',
            'Live compliance analytics and alerts',
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
            name: 'IntelliComply',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/comply',
            image: 'https://intellispec.com/images/modules/comply.jpg'
          })
        }}
      />
    </>
  )
} 