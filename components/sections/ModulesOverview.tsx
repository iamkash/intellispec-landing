'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Shield, 
  Settings, 
  Calendar, 
  Briefcase, 
  MapPin, 
  FileText, 
  Command, 
  Database, 
  Eye,
  ArrowRight,
  HardHat,
  Zap,
  Cog,
  TrendingUp,
  Crown,
  Rocket,
  Globe,
  Target,
  Award,
  Network
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import ModuleLogo from '@/components/ui/ModuleLogo'

const modules = [
  {
    name: 'intelliINSPECT',
    description: 'Digital workflows reduce inspection time by 60% with 100% compliance.',
    icon: Search,
    image: '/images/modules/inspect.jpg',
    value: 'Eliminate paper trails & ensure compliance',
    link: '/modules/inspect'
  },
  {
    name: 'intelliNDT',
    description: 'Centralize all NDT data with automated analysis and reporting.',
    icon: Shield,
    image: '/images/modules/ndt.jpg',
    value: 'Unified NDT data management',
    link: '/modules/ndt'
  },
  {
    name: 'intelliINTEGRITY',
    description: 'Track asset health and prevent failures with predictive analytics.',
    icon: Settings,
    image: '/images/modules/integrity.jpg',
    value: 'Prevent costly asset failures',
    link: '/modules/integrity'
  },
  {
    name: 'intelliTURN',
    description: 'Optimize shutdowns with real-time tracking and crew management.',
    icon: Calendar,
    image: '/images/modules/turn.jpg',
    value: 'Complete shutdown optimization',
    link: '/modules/turn'
  },
  {
    name: 'intelliWORK',
    description: 'Manage workforce readiness with skill tracking and shift planning.',
    icon: Briefcase,
    image: '/images/modules/work.jpg',
    value: 'Ensure workforce readiness',
    link: '/modules/work'
  },
  {
    name: 'intelliTRACK',
    description: 'Track equipment and assets with complete lifecycle management.',
    icon: MapPin,
    image: '/images/modules/track.jpg',
    value: 'Complete asset visibility',
    link: '/modules/track'
  },
  {
    name: 'intelliCOMPLY',
    description: 'Automate safety compliance with digital workflows and audit trails.',
    icon: FileText,
    image: '/images/modules/comply.jpg',
    value: 'Automated safety compliance',
    link: '/modules/comply'
  },
  {
    name: 'intelliSAFETY',
    description: 'Real-time safety monitoring with AI-powered surveillance and predictive alerting.',
    icon: Shield,
    image: '/images/modules/command.jpg',
    value: 'AI-powered safety monitoring',
    link: '/modules/command'
  },
  {
    name: 'intelliSCAFF',
    description: 'Comprehensive scaffolding management with safety compliance and inspection tracking.',
    icon: HardHat,
    image: '/images/modules/vault.jpg',
    value: 'Complete scaffolding management',
    link: '/modules/vault'
  },
  {
    name: 'intelliVISION',
    description: 'Visual intelligence hub with 2D/3D mapping and custom dashboards.',
    icon: Eye,
    image: '/images/modules/vision.jpg',
    value: 'Complete facility intelligence',
    link: '/modules/vision'
  }
]

export default function ModulesOverview() {
  const { theme } = useTheme()

  return (
    <div id="modules" className="section-padding bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted))]/20 to-[hsl(var(--background))]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[hsl(var(--secondary))]/10 border border-[hsl(var(--secondary))]/20 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4 text-[hsl(var(--secondary))] mr-2" />
            <span className="text-[hsl(var(--foreground))]">Market-Leading Platform</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[hsl(var(--foreground))] mb-6">
            The World&apos;s Most <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">Advanced Modular Suite</span>
          </h2>
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto">
            Choose the modules you need. Each designed for specific industrial workflows with seamless integration.{' '}
            <span className="font-semibold text-[hsl(var(--foreground))]">All modules work together as one unified platform, eliminating data silos and enabling real-time field-to-office communication.</span> Outperform competitors by 20-40% with industry-leading modules.
          </p>
          {/* Lifecycle Value Proposition: Inspect → Assess → Plan → Execute → Comply → Monitor */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3" aria-label="Platform lifecycle">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-sm md:text-base font-semibold shadow-lg border-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="w-4 h-4 mr-2" /> Inspect
            </motion.div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm md:text-base font-semibold border border-[hsl(var(--border))]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Eye className="w-4 h-4 mr-2" /> Assess
            </motion.div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--accent))] text-white text-sm md:text-base font-semibold shadow-lg border-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-4 h-4 mr-2" /> Plan
            </motion.div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm md:text-base font-semibold border border-[hsl(var(--border))]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Cog className="w-4 h-4 mr-2" /> Execute
            </motion.div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] text-white text-sm md:text-base font-semibold shadow-lg border-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="w-4 h-4 mr-2" /> Comply
            </motion.div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-sm md:text-base font-semibold shadow-lg border-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <TrendingUp className="w-4 h-4 mr-2" /> Monitor
            </motion.div>
          </div>
        </motion.div>

        {/* Removed inline link cloud; module cards below handle internal linking cleanly. */}

        {/* Competitive Advantage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl p-6 shadow-xl bg-gradient-to-r from-[hsl(var(--card))] to-[hsl(var(--muted))]/50 border border-[hsl(var(--border))]">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/5 to-[hsl(var(--secondary))]/5"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">Unified Platform Integration</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">All modules work together seamlessly, eliminating data silos and enabling real-time field-to-office sync</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">10</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Specialized Modules</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-[hsl(var(--secondary))]">100%</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Integration</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-[hsl(var(--accent))]">4-6</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">Weeks to Deploy</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: {
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="group"
            >
              <Link href={module.link} className="block h-full">
                <motion.div
                  className="bg-[hsl(var(--card))] rounded-xl p-4 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/30 relative overflow-hidden cursor-pointer"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Module Image */}
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={module.image}
                      alt={module.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/80 to-transparent"></div>
                    <div className="absolute bottom-2 right-2">
                      <div className="w-8 h-8 bg-[hsl(var(--primary))]/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <module.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Module Logo */}
                  <div className="mb-4">
                    <ModuleLogo name={module.name} size="md" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4 leading-relaxed">
                      {module.description}
                    </p>

                    {/* Value Proposition */}
                    <div className="mb-2">
                      <div className="flex items-center gap-2 p-2 bg-[hsl(var(--muted))] rounded-lg border border-[hsl(var(--border))]">
                        <div className="w-5 h-5 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-2.5 h-2.5 text-white" />
                        </div>
                        <p className="text-xs text-[hsl(var(--foreground))] font-semibold leading-tight">
                          {module.value}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 via-transparent to-[hsl(var(--secondary))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Build Your Perfect Industrial Platform
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Market Leadership</h4>
                  <p className="text-base text-slate-600">
                    Industry-leading modules that consistently outperform competitors by 20-40% across all metrics.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Seamless Integration</h4>
                  <p className="text-base text-slate-600">
                    All modules work together seamlessly. Share data, workflows, and insights across your entire operation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Enterprise Security</h4>
                  <p className="text-base text-slate-600">
                    Bank-level security with role-based access, audit trails, and compliance-ready architecture.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Choose intelliSPEC Modules?
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Seamless module integration</p>
                      <p className="text-sm text-slate-600">All modules work together as one unified platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Real-time field sync</p>
                      <p className="text-sm text-slate-600">Live field-to-office communication eliminates delays</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Zero data silos</p>
                      <p className="text-sm text-slate-600">Unified data platform eliminates fragmented systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Cross-functional visibility</p>
                      <p className="text-sm text-slate-600">Complete visibility across all roles and departments</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Don't let fragmented systems and data silos hold you back.</strong> Our industry-leading unified platform approach lets you 
                solve specific problems with targeted solutions while building toward complete field-to-office integration. 
                <span className="font-semibold text-green-600"> Start with your biggest pain point and achieve seamless integration from day one.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/demo">
                    <span>See Market Leadership in Action</span>
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50:bg-orange-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/modules">
                    <span>Compare All Modules</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
} 