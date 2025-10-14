"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
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
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliWorkPage() {
  const features = [
    {
      icon: Users,
      title: "Rescue Team Management",
      description: "Assign and manage rescue teams with readiness indicators and skill matrices"
    },
    {
      icon: Activity,
      title: "Readiness Indicators",
      description: "Real-time monitoring of team availability, certifications, and equipment status"
    },
    {
      icon: Shield,
      title: "Skill Matrices",
      description: "Track individual and team competencies, certifications, and training requirements"
    },
    {
      icon: Calendar,
      title: "Shift Planning",
      description: "Intelligent scheduling with workload balancing and skill-based assignments"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Monitor team productivity, response times, and operational efficiency"
    },
    {
      icon: Database,
      title: "Resource Optimization",
      description: "Optimize workforce allocation and reduce operational costs"
    }
  ]

  const benefits = [
    "Improve team response time by 60%",
    "Increase workforce productivity by 45%",
    "Reduce scheduling conflicts by 80%",
    "Ensure 100% compliance with certifications",
    "Optimize resource allocation by 35%",
    "Reduce overtime costs by 25%"
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
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-primary font-semibold">IntelliWork Module</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Workforce Excellence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Maximize workforce efficiency with AI-powered scheduling and real-time performance tracking. 
                Optimize resource allocation, automate shift planning, and eliminate productivity bottlenecks. 
                <span className="text-primary font-semibold px-1">50% productivity increase</span> and 
                <span className="text-primary font-semibold px-1">30% cost reduction</span> - get more done with less.
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
                    src="/images/modules/work.jpg"
                    alt="IntelliWork - Workforce Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliWork</p>
                        <p className="text-orange-200 text-sm">Workforce Management</p>
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
              Comprehensive workforce management capabilities
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
                Measurable Impact
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your workforce management with proven results and quantifiable improvements
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
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
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
                    <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-slate-500">Workforce Analytics Dashboard</p>
                    <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workforce Lifecycle Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Workforce Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management across all phases of the workforce lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Planning & Scheduling",
                description: "Strategic workforce planning and intelligent scheduling",
                icon: Calendar
              },
              {
                title: "Task Assignment",
                description: "Skill-based task assignment and work order management",
                icon: Users
              },
              {
                title: "Execution & Monitoring",
                description: "Real-time work execution monitoring and progress tracking",
                icon: Activity
              },
              {
                title: "Performance Review",
                description: "Workforce performance analysis and continuous improvement",
                icon: BarChart3
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
              Cutting-edge technology for comprehensive workforce management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Work Packs / Work Orders",
                description: "Digital work order management with task assignment and tracking",
                icon: FileText
              },
              {
                title: "Time on Tools",
                description: "Track actual work time vs. planned time for productivity analysis",
                icon: Clock
              },
              {
                title: "Maintenance Schedule",
                description: "Intelligent scheduling based on equipment needs and team availability",
                icon: Calendar
              },
              {
                title: "Budget Tracking",
                description: "Monitor labor costs and budget allocation across teams",
                icon: BarChart3
              },
              {
                title: "Real-Time Updates",
                description: "Live status updates and communication across all team members",
                icon: Activity
              },
              {
                title: "Digital Forms",
                description: "Customizable digital forms for work completion and reporting",
                icon: Shield
              }
            ].map((feature, index) => (
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

      {/* Technical Specifications Section */}
      <section className="section-padding glass-section relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with enterprise-grade technology for reliability and performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud-Based Software",
                description: "Secure cloud infrastructure with 99.9% uptime guarantee",
                icon: Database
              },
              {
                title: "Mobile Compatibility",
                description: "Native mobile apps with full offline functionality",
                icon: Zap
              },
              {
                title: "Real-Time Data Collection",
                description: "Instant data synchronization across all devices",
                icon: Activity
              },
              {
                title: "Legacy Integration",
                description: "Connect with existing HR and workforce management systems",
                icon: Settings
              },
              {
                title: "Configurable Reporting",
                description: "Custom reports and analytics for workforce insights",
                icon: BarChart3
              },
              {
                title: "Standardized Processes",
                description: "Consistent workflows across all teams and locations",
                icon: Shield
              }
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{spec.title}</h3>
                <p className="text-muted-foreground">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Rescue & Technician Workforce Manager Roadmap Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="work-future-roadmap-heading">
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
            <h2 id="work-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Future: The Rescue & Technician Workforce Manager
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our roadmap for the future of workforce optimization. This advanced system will provide specialized 
              safety personnel management with AI-powered deployment optimization and comprehensive skill tracking.
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
                    title: "Real-Time Availability Dashboards",
                    description: "Shows live status and location of all rescue and safety technicians across projects.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["Live status tracking", "Location monitoring", "Project visibility", "Real-time updates"]
                  },
                  {
                    title: "Certification & Skills Matrix",
                    description: "Tracks technician certifications, flags expiries, and prevents non-certified task assignments.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["Certification tracking", "Expiry flagging", "Task validation", "Skills matrix"]
                  },
                  {
                    title: "Personnel-Equipment Pairing",
                    description: "Ensures each technician is dispatched with the correct, certified equipment for every job.",
                    icon: "★",
                    color: "from-accent to-accent",
                    features: ["Equipment pairing", "Certified equipment", "Job-specific dispatch", "Safety compliance"]
                  },
                  {
                    title: "Job Performance Analytics",
                    description: "Analyzes job data to track team and individual performance, highlight training needs, and improve deployment.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["Performance tracking", "Training needs", "Deployment improvement", "Data analysis"]
                  },
                  {
                    title: "AI-Powered Deployment Optimization",
                    description: "AI recommends optimal team composition and deployment plan to maximize efficiency and coverage.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["AI recommendations", "Team composition", "Deployment planning", "Efficiency maximization"]
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
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Optimize Your Workforce?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join industry leaders who have revolutionized their workforce management with IntelliWork. 
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
        intent="Workforce FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Does IntelliWork integrate with our HRIS and directory systems, and what data is synchronized?', a: 'Yes. API adapters synchronize people, org units, roles, and availability from common HRIS/IDP systems.' },
          { q: 'How are AI‑generated rosters created using skills, constraints, labor rules, and readiness signals?', a: 'AI scheduling balances skills and constraints, complies with labor rules, and accounts for readiness.' },
          { q: 'Can certifications be tracked with expiries and automatically validated at assignment time?', a: 'Yes. Certification records track expiries and block non‑qualified task assignments.' },
          { q: 'What analytics are provided for readiness, time‑on‑tools, productivity, and utilization?', a: 'Dashboards visualize readiness, time‑on‑tools, productivity trends, and utilization rates.' },
          { q: 'Is mobile support available for updates, shift swaps, and approvals on the go?', a: 'Yes. Mobile apps support updates, shift swaps, and approvals with responsive UI.' },
          { q: 'How does the system detect schedule conflicts and suggest optimal reassignments?', a: 'The planner flags conflicts and proposes reassignments based on skills and availability.' },
          { q: 'Are digital forms and e‑signatures supported with automatic report filing?', a: 'Yes. Custom forms with e‑signatures auto‑file to the record for audits.' },
          { q: 'Can access be restricted by role, team, and site to protect sensitive data?', a: 'RBAC scopes access by role, team, and site with fine‑grained permissions.' },
          { q: 'Is offline mode supported for field teams, and how is synchronization handled?', a: 'Yes. Offline operation with secure background synchronization is supported.' },
          { q: 'What security controls protect workforce data and authentication?', a: 'Encryption in transit/at rest, centralized audit logs, and SSO/IDP integration.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Optimize workforce scheduling and performance with AI rosters, readiness dashboards, and time‑on‑tools
            analytics.
          </p>
        )}
        takeaways={[
          'Faster response; fewer conflicts',
          'Productivity↑; overtime↓',
          'Skills, readiness, and analytics in one view',
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
          name: 'IntelliWork',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS',
          url: 'https://intellispec.com/modules/work',
          image: 'https://intellispec.com/images/modules/work.jpg'
        })
      }}
    />
    </>
  )
} 