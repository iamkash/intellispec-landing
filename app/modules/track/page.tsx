"use client"

import React from 'react'


import { motion } from 'framer-motion'
import { 
  MapPin, 
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
  Smartphone,
  Wifi,
  Download
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

export default function IntelliTrackPage() {
  const features = [
    {
      icon: MapPin,
      title: "Equipment Checkouts",
      description: "Track equipment assignments, returns, and usage history with digital signatures"
    },
    {
      icon: Database,
      title: "Inventory Logs",
      description: "Real-time inventory tracking with automated alerts and reorder notifications"
    },
    {
      icon: Calendar,
      title: "Maintenance Cycles",
      description: "Schedule and track preventive maintenance with automated reminders"
    },
    {
      icon: Activity,
      title: "Asset Movement History",
      description: "Complete audit trail of asset locations, transfers, and usage patterns"
    },
    {
      icon: QrCode,
      title: "RFID & QR Code Tracking",
      description: "Advanced tracking with RFID, QR codes, bar codes, and NFC tagging"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics on asset utilization, costs, and performance"
    }
  ]

  const benefits = [
    "Reduce equipment downtime by 50%",
    "Improve inventory accuracy by 95%",
    "Cut maintenance costs by 30%",
    "Increase asset utilization by 40%",
    "Reduce lost equipment by 80%",
    "Streamline audit processes by 70%"
  ]

  const advancedFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Tracking",
      description: "Mobile app for real-time asset tracking and management in the field"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Seamless integration with IoT sensors and smart devices for comprehensive tracking"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for asset utilization and performance"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Real-time updates and notifications for asset status and location changes"
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Advanced security features including access control and audit trails"
    },
    {
      icon: Settings,
      title: "Customizable Workflows",
      description: "Customizable workflows and processes to match your specific needs"
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

  const trackingCapabilities = [
    {
      title: "Asset Location Tracking",
      description: "Real-time tracking of asset locations and movement history",
      icon: MapPin
    },
    {
      title: "Inventory Management",
      description: "Comprehensive inventory management and optimization",
      icon: Database
    },
    {
      title: "Maintenance Scheduling",
      description: "Automated maintenance scheduling and reminder systems",
      icon: Calendar
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics and reporting for asset performance",
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      title: "Equipment Tracking",
      description: "Real-time tracking of equipment location and usage patterns",
      icon: MapPin
    },
    {
      title: "Inventory Management",
      description: "Comprehensive inventory management and optimization",
      icon: Database
    },
    {
      title: "Maintenance Planning",
      description: "Automated maintenance planning and scheduling",
      icon: Calendar
    },
    {
      title: "Asset Optimization",
      description: "Asset utilization optimization and performance improvement",
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
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-primary font-semibold">IntelliTrack Module</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Asset Tracking Excellence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Track every asset with precision using IoT sensors and AI-powered location intelligence. 
                Get instant alerts for asset movement, automated maintenance schedules, and predictive failure warnings. 
                <span className="text-primary font-semibold px-1">Zero asset loss</span> and 
                <span className="text-primary font-semibold px-1">50% maintenance cost savings</span> - know where everything is, always.
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
                    src="/images/modules/track.jpg"
                    alt="IntelliTrack - Asset Tracking"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">IntelliTrack</p>
                        <p className="text-indigo-200 text-sm">Asset Tracking</p>
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
              Comprehensive asset tracking capabilities
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
                Transform your asset management with measurable improvements and cost savings
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
                    <p className="text-slate-500">Asset Analytics Dashboard</p>
                    <p className="text-sm text-slate-600 mt-2">Stock image placeholder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracking Lifecycle Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Asset Tracking Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management across all phases of the asset tracking process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Asset Registration",
                description: "Initial asset registration with unique identification and metadata",
                icon: FileText
              },
              {
                title: "Location Tracking",
                description: "Real-time location monitoring and movement history",
                icon: MapPin
              },
              {
                title: "Maintenance Tracking",
                description: "Maintenance schedule tracking and service history",
                icon: Settings
              },
              {
                title: "Performance Analytics",
                description: "Asset utilization analysis and performance optimization",
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
              Advanced Tracking Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art tracking solutions for maximum visibility and control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "RFID Tagging",
                description: "Automatic identification and tracking with RFID technology",
                icon: QrCode
              },
              {
                title: "QR Code Scanning",
                description: "Quick asset identification and information retrieval",
                icon: QrCode
              },
              {
                title: "Bar Code Support",
                description: "Compatible with existing bar code systems and labels",
                icon: QrCode
              },
              {
                title: "NFC Tagging",
                description: "Near-field communication for secure asset tracking",
                icon: Shield
              },
              {
                title: "GPS Tracking",
                description: "Real-time location tracking for mobile assets",
                icon: MapPin
              },
              {
                title: "Digital Wall Charts",
                description: "Visual asset management with P6 integration",
                icon: BarChart3
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

      {/* Future Inventory Management & Tracking Roadmap Section */}
      <section className="section-padding bg-primary/5 relative overflow-hidden" aria-labelledby="tracking-future-roadmap-heading">
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
            <h2 id="tracking-future-roadmap-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Future: Inventory Management & Tracking
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our roadmap for the future of inventory management. This advanced system will 
              digitize the entire inventory management lifecycle with AI-powered insights and comprehensive tracking capabilities.
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
                    title: "Barcode/RFID-Based Tracking",
                    description: "Every asset is tagged for quick mobile check-in/out, enabling complete chain of custody tracking.",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["Mobile check-in/out", "Chain of custody", "Asset tagging", "Quick identification"]
                  },
                  {
                    title: "Technician Assignment & Verification",
                    description: "Equipment is only assigned to technicians whose certifications match equipment requirements, preventing misuse.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["Certification matching", "Equipment requirements", "Misuse prevention", "Technician verification"]
                  },
                  {
                    title: "Automated Calibration & Maintenance Reminders",
                    description: "System tracks calibration and maintenance dates, auto-generating alerts and work orders to ensure compliance.",
                    icon: "★",
                    color: "from-accent to-accent",
                    features: ["Calibration tracking", "Maintenance dates", "Auto alerts", "Work order generation"]
                  },
                  {
                    title: "AI-Powered Defect Detection",
                    description: "AI automatically detects and flags defects or damage during the process",
                    icon: "★",
                    color: "from-primary to-primary",
                    features: ["AI detection", "Defect flagging", "Damage identification", "Automated monitoring"]
                  },
                  {
                    title: "Inventory & Utilization Dashboards",
                    description: "Live dashboards show equipment inventory, location, and utilization to optimize fleet size and purchasing.",
                    icon: "★",
                    color: "from-secondary to-secondary",
                    features: ["Live dashboards", "Equipment inventory", "Location tracking", "Fleet optimization"]
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
                Ready to Track Your Assets?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join industry leaders who have revolutionized their asset tracking with IntelliTrack. 
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
        intent="Asset Tracking FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Which tagging technologies does IntelliTrack support for identifying and locating assets?', a: 'RFID, QR, bar codes, and NFC are supported for flexible identification and tracking.' },
          { q: 'Can the system provide cross‑facility visibility with location history and asset transfers?', a: 'Yes. You can view movements across sites with complete transfer and location history.' },
          { q: 'Is there offline mobile capability for field operations and audits?', a: 'Yes. Capture check‑ins/outs and inspections offline; data syncs automatically later.' },
          { q: 'How are preventive maintenance cycles planned and executed?', a: 'Automated schedules, reminders, and work order generation streamline PM programs.' },
          { q: 'Does IntelliTrack integrate with our CMMS/ERP systems?', a: 'Yes. API‑first integrations connect with common CMMS/ERP platforms.' },
          { q: 'How do you achieve high inventory accuracy and reduce shrinkage?', a: 'RFID/QR scans, exception audits, and reconciliation workflows reach 95%+ accuracy.' },
          { q: 'What analytics are available for utilization, costs, and exceptions?', a: 'Dashboards provide utilization trends, cost breakdowns, and exception alerts.' },
          { q: 'How is chain of custody enforced during check‑in/out?', a: 'Digital signatures, user attribution, and timestamps ensure accountability.' },
          { q: 'What hardware is required for scanning and tagging?', a: 'Use existing scanners/tags where possible or choose from recommended devices.' },
          { q: 'How are roles and permissions managed securely across sites?', a: 'RBAC scopes permissions by role, team, and site; all access is audited.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Get end‑to‑end asset visibility, eliminate losses, and cut maintenance costs with RFID/QR tracking,
            digital checkouts, and predictive schedules.
          </p>
        )}
        takeaways={[
          '80% fewer lost assets',
          '50% maintenance cost savings',
          '95%+ inventory accuracy',
        ]}
      />
      {/* Structured Data: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IntelliTrack',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, iOS',
            url: 'https://intellispec.com/modules/track',
            image: 'https://intellispec.com/images/modules/track.jpg'
          })
        }}
      />
    </main>
    </>
  )
} 