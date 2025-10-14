"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Activity, 
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
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliNDTPage() {
  const features = [
    {
      icon: Activity,
      title: "Multi-Method NDT",
      description: "Support for UT, RT, MT, PT, ET, and advanced inspection methods"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Centralized storage and analysis of all NDT data and results"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate detailed NDT reports with findings and recommendations"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Ensure compliance with ASNT, ISO, and industry standards"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Track defect progression and predict maintenance needs"
    },
    {
      icon: Users,
      title: "Technician Management",
      description: "Manage certifications, qualifications, and work assignments"
    }
  ]

  const benefits = [
    "Improve NDT accuracy by 90%",
    "Reduce testing time by 50%",
    "Cut reporting time by 75%",
    "Ensure 100% compliance",
    "Increase technician productivity by 35%",
    "Reduce rework by 80%"
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
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-primary font-semibold">IntelliNDT Module</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Advanced NDT Management
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Detect invisible defects before catastrophic failure with AI-enhanced NDT analysis. 
                Get instant defect classification, predictive failure alerts, and automated compliance reports. 
                <span className="text-primary font-semibold px-1">99.9% defect detection accuracy</span> and 
                <span className="text-primary font-semibold px-1">70% faster analysis</span> - prevent disasters before they happen.
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
                    src="/images/modules/ndt.jpg"
                    alt="IntelliNDT - Advanced NDT Management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliNDT</p>
                        <p className="text-primary-foreground/80 text-sm">Advanced NDT Management</p>
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
              Comprehensive NDT Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage non-destructive testing operations with precision and efficiency
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-36 h-36 bg-orange-600/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

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
                See dramatic improvements in your NDT operations with measurable outcomes
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
                    <p className="text-slate-500">NDT Analytics Dashboard</p>
                    <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NDT Lifecycle Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              NDT Testing Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management across all phases of the NDT testing process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Test Planning",
                description: "Comprehensive test planning and procedure development",
                icon: FileText
              },
              {
                title: "Test Execution",
                description: "Systematic test execution with data collection",
                icon: Activity
              },
              {
                title: "Data Analysis",
                description: "Advanced data analysis and defect evaluation",
                icon: BarChart3
              },
              {
                title: "Reporting & Documentation",
                description: "Comprehensive reporting and documentation management",
                icon: Database
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

      {/* Use Cases Section */}
      <section className="section-padding glass-section relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              NDT Methods Supported
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support for all major non-destructive testing techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ultrasonic Testing (UT)",
                description: "Advanced UT data analysis and defect characterization",
                icon: Activity
              },
              {
                title: "Radiographic Testing (RT)",
                description: "Digital radiography and image analysis",
                icon: Shield
              },
              {
                title: "Magnetic Particle (MT)",
                description: "Surface and near-surface defect detection",
                icon: Zap
              },
              {
                title: "Penetrant Testing (PT)",
                description: "Liquid penetrant inspection management",
                icon: Database
              },
              {
                title: "Eddy Current (ET)",
                description: "Conductive material testing and analysis",
                icon: TrendingUp
              },
              {
                title: "Visual Testing (VT)",
                description: "Enhanced visual inspection documentation",
                icon: Users
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future NDT AI Assistant Roadmap Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="ndt-future-roadmap-heading">
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
            <h2 id="ndt-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Future: The NDT AI Assistant
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our roadmap for the future of NDT automation. The NDT AI Assistant will automate and augment 
              the NDT workflow with advanced AI capabilities for comprehensive non-destructive testing 
              analysis and interpretation.
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
                    title: "Multi-Modal Data Ingestion",
                    description: "Standardizes and ingests data from all major NDT techniques, including UT, PAUT, AUT, MFL, RT, RTR, LPT, and MPT, into one unified platform.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["UT, PAUT, AUT", "MFL, RT, RTR", "LPT, MPT", "Unified platform"]
                  },
                  {
                    title: "AI Signal Interpretation",
                    description: "Automatically detects, classifies, and sizes flaws from NDT scans using deep learning, reducing interpretation time and improving accuracy.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["Deep learning", "Flaw detection", "Automatic sizing", "Accuracy improvement"]
                  },
                  {
                    title: "Historical Comparison Engine",
                    description: "Aligns current scans with historical data to highlight changes, calculate defect propagation, and support data-driven RBI scheduling.",
                    icon: "★",
                    color: "from-accent to-accent",
                    features: ["Historical alignment", "Defect propagation", "RBI scheduling", "Change detection"]
                  },
                  {
                    title: "Defect Severity Classification",
                    description: "Classifies detected defects per ASME standards and company risk matrices, auto-prioritizing them for engineering review.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["ASME standards", "Risk matrices", "Auto-prioritization", "Engineering review"]
                  },
                  {
                    title: "Rope Access & QA Integration",
                    description: "Provides specialized logging and QA/QC checks for rope access inspections, comparing technician findings against AI-driven analysis.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["Rope access", "QA/QC checks", "Technician comparison", "AI analysis"]
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
                Ready to Elevate Your NDT Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join leading companies that have transformed their NDT processes with IntelliNDT. 
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
        intent="NDT FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Which NDT methods does IntelliNDT support, and how are workflows unified across methods?', a: 'UT, RT, MT, PT, ET, and VT are supported with a common data model and consistent review/reporting workflows.' },
          { q: 'Can IntelliNDT automatically analyze images and signals to detect, classify, and size flaws?', a: 'Yes. AI-assisted analysis accelerates detection, classification, and sizing to reduce interpretation time.' },
          { q: 'Does the platform align to ASNT/ISO practices, and can we configure report templates to our standards?', a: 'Yes. It supports ASNT/ISO practices, and report templates can be tailored to your requirements.' },
          { q: 'How are device scans and field data imported (formats, ingestion, and DICONDE-like support)?', a: 'Technicians upload from field devices; the platform ingests common NDT formats and DICONDE-like files.' },
          { q: 'Can the system trend defects over time to support risk‑based inspection (RBI) decisions?', a: 'Yes. Historical trending tracks progression to support RBI planning and targeted re‑inspection.' },
          { q: 'What reporting formats are available, and which evidence artifacts are included by default?', a: 'Auto-generated PDF/Excel include findings, annotated images, reviewer notes, signatures, and logs.' },
          { q: 'What assisted detection accuracy has been achieved in production deployments?', a: 'Benchmarked programs report 99%+ assisted detection, contingent on data quality and method.' },
          { q: 'How does IntelliNDT maintain traceability and auditability during review and approval cycles?', a: 'Comprehensive audit trails capture scan lineage, reviewers, changes, timestamps, and approvals.' },
          { q: 'Is there mobile support for technicians working in the field and offline environments?', a: 'Yes. Field capture and review work offline with secure synchronization when connectivity returns.' },
          { q: 'What security controls protect NDT data at rest, in transit, and during access?', a: 'Encryption in transit/at rest, RBAC, and tamper‑evident logs protect sensitive inspection data.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Accelerate NDT with AI analysis, unified methods, and automated reporting—boosting accuracy while cutting
            cycle times.
          </p>
        )}
        takeaways={[
          '99%+ detection with AI assistance',
          '50–70% faster analysis and reporting',
          'Unified UT/RT/MT/PT/ET/VT data model',
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
          name: 'IntelliNDT',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS',
          url: 'https://intellispec.com/modules/ndt',
          image: 'https://intellispec.com/images/modules/ndt.jpg'
        })
      }}
    />
    </>
  )
} 