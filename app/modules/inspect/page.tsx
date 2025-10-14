"use client"

import React from 'react'

import { motion } from 'framer-motion'
import { 
  Search, 
  FileText, 
  Camera, 
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
  Settings,
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliInspectPage() {
  const features = [
    {
      icon: Search,
      title: "Digital Checklists",
      description: "Create and manage comprehensive inspection checklists with photo markups and comments"
    },
    {
      icon: Camera,
      title: "Photo Markups & Comments",
      description: "Capture high-resolution photos with annotations, markups, and detailed comments"
    },
    {
      icon: FileText,
      title: "Traceable Sign-offs",
      description: "Digital signatures and approval workflows with complete audit trails"
    },
    {
      icon: Shield,
      title: "API Compliance",
      description: "Ensure adherence to API 510, 570, 653, and VT standards with built-in compliance tracking"
    },
    {
      icon: TrendingUp,
      title: "Real-time Reporting",
      description: "Generate comprehensive inspection reports instantly with automated data compilation"
    },
    {
      icon: Users,
      title: "Field Workflow Management",
      description: "Streamline field inspection processes with mobile-first design and offline capabilities"
    }
  ]

  const benefits = [
    "Reduce inspection time by 60%",
    "Improve accuracy by 95%",
    "Cut reporting time by 80%",
    "Ensure 100% compliance",
    "Increase team productivity by 40%",
    "Reduce rework by 75%"
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
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-primary font-semibold">IntelliInspect Module</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                  Intelligent Inspection Management
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Revolutionize your inspection workflow with AI-powered mobile inspections that work offline. 
                  Complete inspections 5x faster with automated report generation and real-time compliance tracking. 
                  <span className="text-primary font-semibold px-1">400% productivity increase</span> and 
                  <span className="text-primary font-semibold px-1">zero paperwork</span> guaranteed.
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
                      src="/images/modules/inspect.jpg"
                      alt="IntelliInspect - Digital Inspection Management"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">IntelliInspect</p>
                          <p className="text-primary-foreground/80 text-sm">Digital Inspection Management</p>
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
                Powerful Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to streamline your inspection processes and ensure compliance
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
              {[
                {
                  title: "Cloud-Based Software",
                  description: "Secure cloud infrastructure with 99.9% uptime guarantee",
                  icon: Database
                },
                {
                  title: "iOS Compatibility",
                  description: "Native iOS app with full offline functionality",
                  icon: Zap
                },
                {
                  title: "Bluetooth Connectivity",
                  description: "Seamless integration with inspection equipment and sensors",
                  icon: HardHat
                },
                {
                  title: "Real-Time Sync",
                  description: "Instant data synchronization across all devices",
                  icon: Clock
                },
                {
                  title: "Legacy Integration",
                  description: "Connect with Meridium, Visions, Capstone, Maximo, SAP, Primavera",
                  icon: FileText
                },
                {
                  title: "Offline Mode",
                  description: "Full functionality in disconnected state with sync when online",
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

        {/* Integration & Workflow Section */}
        <section className="section-padding glass-section-alt relative overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Seamless Integration
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Connect with your existing systems and workflows for maximum efficiency
                </p>
                
                <div className="space-y-6">
                  {[
                    "Send/Receive data to and from legacy databases in near real-time",
                    "Compatible with major CMMS systems including Maximo and SAP",
                    "API-first architecture for custom integrations",
                    "Standardized work processes across all inspection types",
                    "RFID, QR Codes, Bar Codes & NFC Tagging support",
                    "Configurable reporting with custom templates"
                  ].map((integration, index) => (
                    <motion.div
                      key={integration}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{integration}</span>
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
                      <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-slate-500">System Integration Dashboard</p>
                      <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases & Industries Section */}
        <section className="section-padding glass-section relative overflow-hidden">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Industries & Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proven solutions across diverse industrial sectors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Oil & Gas",
                  description: "Upstream, midstream, and downstream operations",
                  icon: Shield
                },
                {
                  title: "Chemical Processing",
                  description: "Chemical plants and processing facilities",
                  icon: HardHat
                },
                {
                  title: "Power Generation",
                  description: "Nuclear, thermal, and renewable energy plants",
                  icon: Zap
                },
                {
                  title: "Manufacturing",
                  description: "Heavy industrial manufacturing facilities",
                  icon: Settings
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Roadmap Section */}
        <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="roadmap-heading">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                The Future of Inspection Intelligence
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                A comprehensive roadmap to revolutionize inspection processes through AI-powered automation, 
                real-time compliance monitoring, and intelligent data processing. Each component works together 
                to create a unified ecosystem for the future of industrial inspections.
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
                      title: "Digital Inspection Workflows",
                      description: "Revolutionary mobile-first application supporting all major inspection standards including API 510, 570, 653, NBIC, CUI, and CUF. Features dynamic form generation, real-time photo capture with GPS tagging, seamless offline synchronization, and intelligent workflow routing. Eliminates paper-based processes and reduces inspection time by up to 60%.",
                      icon: "01",
                      color: "from-primary to-primary",
                      features: ["Dynamic form generation", "GPS photo tagging", "Offline sync", "Workflow automation"]
                    },
                    {
                      title: "AI Copilot for Documentation",
                      description: "Advanced voice-to-text technology with natural language processing that transforms field dictations into structured, standards-compliant reports instantly. Supports multiple languages, technical terminology recognition, and automatic formatting according to industry standards. Reduces report generation time from hours to minutes.",
                      icon: "02",
                      color: "from-secondary to-secondary",
                      features: ["Voice-to-text conversion", "NLP processing", "Multi-language support", "Auto-formatting"]
                    },
                    {
                      title: "P&ID Digitization & Circuit Mapping",
                      description: "Cutting-edge AI technology that converts legacy P&IDs and technical diagrams into interactive digital assets. Enables instant access to component inspection history, maintenance records, and real-time data through simple touch interactions. Supports all major CAD formats and provides intelligent component recognition.",
                      icon: "03",
                      color: "from-accent to-accent",
                      features: ["AI digitization", "Interactive components", "CAD format support", "History tracking"]
                    },
                    {
                      title: "Real-Time Compliance Engine",
                      description: "Intelligent compliance monitoring system that continuously validates inspection data against regulatory standards as it's entered. Provides instant alerts for non-conformities, missing information, or overdue actions. Integrates with major compliance frameworks and maintains comprehensive audit trails for regulatory reporting.",
                      icon: "04",
                      color: "from-primary to-primary",
                      features: ["Live compliance checking", "Instant alerts", "Audit trails", "Regulatory integration"]
                    },
                    {
                      title: "Visual Intelligence Engine",
                      description: "Advanced computer vision technology that automatically detects, measures, and categorizes defects from images and videos captured on any device. Provides precise measurements, defect classification, and trend analysis. Integrates with existing camera systems and supports thermal imaging for comprehensive defect detection.",
                      icon: "05",
                      color: "from-secondary to-secondary",
                      features: ["Computer vision", "Defect detection", "Precise measurements", "Thermal imaging"]
                    }
                  ].map((component, index) => (
                    <motion.div
                      key={component.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {component.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-3 text-foreground">
                            {component.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {component.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {component.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100/60 text-muted-foreground border border-slate-200/30"
                              >
                                {feature}
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
        <section className="section-padding glass-section-alt relative overflow-hidden">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Ready to Transform Your Inspections?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have revolutionized their inspection processes 
                  with IntelliInspect. Start your free trial today.
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
          intent="Inspection FAQs"
          renderUI={false}
          showCoreSections={false}
          faq={[
            { q: 'Does IntelliInspect support offline field inspections with reliable synchronization?', a: 'Yes. Inspectors can work fully offline; data syncs automatically when connectivity is restored.' },
            { q: 'Which inspection standards and programs are available out of the box?', a: 'API 510/570/653, NBIC, VT, and CUI/CUF are supported, with customizable templates.' },
            { q: 'Can photos be annotated with markups, comments, and GPS context?', a: 'Yes. Annotate photos with markups and notes; GPS tagging can be captured when available.' },
            { q: 'How are sign‑offs and approvals captured and audited?', a: 'Digital signatures with routed approvals and tamper‑evident audit trails are built‑in.' },
            { q: 'Is inspection reporting automated, and what does it include?', a: 'One‑click reports include checklists, findings, images, signatures, and evidence packs.' },
            { q: 'Can IntelliInspect integrate with our CMMS/ERP systems?', a: 'Yes. API‑first integrations support Maximo, SAP, and other enterprise systems.' },
            { q: 'How is regulatory compliance enforced during data entry?', a: 'Live validations, mandatory fields, and policy checks reduce omissions and errors.' },
            { q: 'Which devices/platforms are supported for field use?', a: 'Web and iOS with mobile‑first UX designed for glove‑friendly field operation.' },
            { q: 'Can our team create custom forms and templates?', a: 'Yes. Dynamic form builders and templates enable program‑specific configurations.' },
            { q: 'What security measures protect inspection records?', a: 'Encryption, role‑based access control, and tamper‑evident audit logging.' }
          ]}
        />
        <TLDRBlock
          summary={(
            <p>
              Digitize inspections with AI documentation and defect detection. Close loops faster with automated
              reporting, permits, and evidence packs.
            </p>
          )}
          takeaways={[
            'AI accelerates inspections and improves accuracy',
            'Automated reports and audits reduce admin time',
            'Mobile-first workflows ensure field-to-office sync',
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
            name: 'IntelliInspect',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/inspect',
            image: 'https://intellispec.com/images/modules/inspect.jpg'
          })
        }}
      />
    </>
  )
} 