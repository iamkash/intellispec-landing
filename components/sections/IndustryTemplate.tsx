"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Shield,
  Gauge,
  BarChart3,
  Zap,
  Clock,
  Eye,
  Download,
  Users,
  FileText,
  Calendar,
  Activity,
  Search,
  MapPin,
  Command,
  Database,
  Wifi,
  Building2,
  Quote,
  Target,
  Globe,
  Settings,
  Wrench,
  Pill,
  Factory,
  Package,
  BarChart3 as BarChart3Icon,
  Eye as EyeIcon,
  TrendingUp as TrendingUpIcon,
  AlertTriangle as AlertTriangleIcon,
  HardHat as HardHatIcon
} from 'lucide-react'
import Link from 'next/link'

const iconRegistry: Record<string, React.ElementType | undefined> = {
  CheckCircle,
  ArrowRight,
  AlertTriangle: AlertTriangleIcon,
  TrendingUp: TrendingUpIcon,
  TrendingDown,
  Shield,
  Gauge,
  BarChart3: BarChart3Icon,
  Zap,
  Clock,
  Eye: EyeIcon,
  Download,
  Users,
  FileText,
  Calendar,
  Activity,
  Search,
  MapPin,
  Command,
  Database,
  Wifi,
  Building2,
  Quote,
  Target,
  Globe,
  Settings,
  Wrench,
  Pill,
  Factory,
  Package,
  HardHat: HardHatIcon,
}

const resolveIcon = (icon?: string | React.ElementType) => {
  if (!icon) return undefined
  if (typeof icon === 'string') return iconRegistry[icon]
  return icon
}

interface ROIJourneyPhase {
  months: string
  title: string
  subtitle: string
  phase: string
  description: string
  items: {
    icon: string | React.ElementType
    text: string
    type: 'success' | 'warning'
  }[]
}

interface SolutionMatrixItem {
  challenge: {
    title: string
    description: string
    icon: string | React.ElementType
    color: string
    impact: string
  }
  solution: {
    title: string
    description: string
    icon: string | React.ElementType
    color: string
    modules: string[]
  }
  expertise: {
    title: string
    description: string
    icon: string | React.ElementType
    color: string
    years: string
  }
  outcome: {
    metric: string
    label: string
    color: string
    icon: string | React.ElementType
    bgColor: string
  }
}

interface SuccessMetric {
  label: string
  value: string
  icon: string | React.ElementType
  color: string
}

interface PersonaSolution {
  role: string
  focus: string
  icon: string | React.ElementType
  color: string
  bgColor: string
  story: {
    challenge: string
    solution: string
    outcome: string
  }
  metrics: Record<string, string>
  testimonial: {
    quote: string
    author: string
    title: string
    company: string
  }
  features: string[]
}

interface TimelinePhase {
  phase: number
  title: string
  subtitle: string
  period: string
  description: string
  features: {
    icon: string | React.ElementType
    title: string
    description: string
    type: 'success' | 'warning' | 'error'
  }[]
  image: {
    icon: string | React.ElementType
    title: string
    subtitle: string
    gradient: string
  }
}

interface IndustryTemplateProps {
  industryName: string
  industryDescription?: string
  industryColor: string
  industryGradient: string
  heroImage?: string
  badge?: string
  successMetrics: SuccessMetric[]
  chaosToClarity?: any
  challengeSolution?: any
  implementationProcess?: any
  roiJourney: ROIJourneyPhase[]
  solutionsMatrix: SolutionMatrixItem[]
  personas: PersonaSolution[]
  timeline: TimelinePhase[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText?: string
  ctaButtonLink?: string
}

export default function IndustryTemplate({
  industryName,
  industryDescription,
  industryColor,
  industryGradient,
  heroImage,
  badge,
  successMetrics,
  chaosToClarity,
  challengeSolution,
  implementationProcess,
  roiJourney,
  solutionsMatrix,
  personas,
  timeline,
  ctaTitle,
  ctaDescription,
  ctaButtonText = "Start Free Trial",
  ctaButtonLink = "/contact"
}: IndustryTemplateProps) {
  const [selectedPersona, setSelectedPersona] = useState(0);
  
  // Reset selectedPersona when personas change or if current index is out of bounds
  useEffect(() => {
    if (!personas || personas.length === 0 || selectedPersona >= personas.length) {
      setSelectedPersona(0);
    }
  }, [personas, selectedPersona]);
  
  return (
    <>
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
                <div className={`w-12 h-12 bg-gradient-to-br ${industryGradient} rounded-xl flex items-center justify-center`}>
                  {successMetrics[0]?.icon && resolveIcon(successMetrics[0].icon) && React.createElement(resolveIcon(successMetrics[0].icon)!, { className: "w-6 h-6 text-white" })}
            </div>
                <span className={`${industryColor} font-semibold`}>intelliSPEC {industryName}</span>
            </div>
            
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                {industryName} Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {industryDescription || `Transform your ${industryName.toLowerCase()} operations with AI-powered predictive analytics, 
                real-time monitoring, and intelligent automation across our comprehensive platform.`}
              </p>
            </motion.div>
                        
            {/* Hero Image */}
                          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/80 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    {successMetrics[0]?.icon && resolveIcon(successMetrics[0].icon) && React.createElement(resolveIcon(successMetrics[0].icon)!, { className: `w-16 h-16 ${industryColor} mx-auto mb-4` })}
                    <p className="text-muted-foreground">{industryName} Operations Dashboard</p>
                    <p className="text-sm text-muted-foreground/80 mt-2">Interactive platform preview</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
          </div>

        </div>
      </section>

      {/* Success Metrics Widgets */}
      {successMetrics && successMetrics.length > 0 && (
        <section className="bg-background/95 backdrop-blur-sm border-y border-border py-12">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {successMetrics.slice(0, 6).map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.icon ? 'from-primary to-primary/80' : 'from-muted to-muted/80'} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {resolveIcon(metric.icon) && React.createElement(resolveIcon(metric.icon)!, { className: 'w-6 h-6 text-white', 'aria-hidden': true })}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                  <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI Investment Journey */}
      <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="roi-journey-heading">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="roi-journey-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              The ROI Investment Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial investment to exponential returns - your path to measurable value creation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roiJourney.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${industryGradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-primary-foreground">{phase.months}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                <p className={`${industryColor} mb-4`}>{phase.subtitle}</p>
                <div className="glass-card rounded-xl p-6">
                  <div className={`text-3xl font-bold ${industryColor} mb-2`}>{phase.phase}</div>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-center gap-2">
                        {resolveIcon(item.icon) && React.createElement(resolveIcon(item.icon)!, { className: 'w-4 h-4 text-primary' })}
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Matrix */}
      <section className="section-padding glass-section relative overflow-hidden" aria-labelledby="solutions-matrix-heading">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="solutions-matrix-heading" className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Challenge-Solution Matrix
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How intelliSPEC addresses specific {industryName.toLowerCase()} challenges with proven solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {solutionsMatrix.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-4 gap-6"
              >
                {/* Challenge Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.challenge.color} rounded-lg flex items-center justify-center`}>
                      {resolveIcon(item.challenge.icon) && React.createElement(resolveIcon(item.challenge.icon)!, { className: 'w-4 h-4 text-white', 'aria-hidden': true })}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Challenge</h4>
                    </div>
                  </div>
                  <h5 className="text-sm font-semibold mb-2 text-foreground">{item.challenge.title}</h5>
                  <p className="text-xs text-muted-foreground mb-3">{item.challenge.description}</p>
                  <div className="text-xs text-destructive font-semibold">{item.challenge.impact}</div>
                </motion.div>

                {/* Solution Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.solution.color} rounded-lg flex items-center justify-center`}>
                      {resolveIcon(item.solution.icon) && React.createElement(resolveIcon(item.solution.icon)!, { className: 'w-4 h-4 text-white', 'aria-hidden': true })}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Solution</h4>
                    </div>
                  </div>
                  <h5 className="text-sm font-semibold mb-2 text-foreground">{item.solution.title}</h5>
                  <p className="text-xs text-muted-foreground mb-3">{item.solution.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.solution.modules.map((module, moduleIndex) => (
                      <span key={moduleIndex} className="px-2 py-1 bg-muted/60 rounded text-xs text-muted-foreground">
                        {module}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Expertise Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="glass-card rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.expertise.color} rounded-lg flex items-center justify-center`}>
                      {resolveIcon(item.expertise.icon) && React.createElement(resolveIcon(item.expertise.icon)!, { className: 'w-4 h-4 text-white', 'aria-hidden': true })}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Expertise</h4>
                    </div>
                  </div>
                  <h5 className="text-sm font-semibold mb-2 text-foreground">{item.expertise.title}</h5>
                  <p className="text-xs text-muted-foreground mb-3">{item.expertise.description}</p>
                  <div className="text-xs text-primary font-semibold">{item.expertise.years}</div>
                </motion.div>

                {/* Outcome Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.outcome.bgColor} rounded-lg flex items-center justify-center`}>
                      {resolveIcon(item.outcome.icon) && React.createElement(resolveIcon(item.outcome.icon)!, { className: 'w-4 h-4 text-white', 'aria-hidden': true })}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
                    </div>
                  </div>
                  <div className={`text-4xl font-black ${item.outcome.color} mb-2`}>{item.outcome.metric}</div>
                  <p className="text-xs text-muted-foreground">{item.outcome.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Role */}
      {personas && personas.length > 0 && (
      <section className="section-padding glass-section-alt relative overflow-hidden" aria-labelledby="personas-heading">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-accent/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 glass-card rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-foreground">Real Stories, Real Results</span>
            </div>
            <h2 id="personas-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              From <span className="text-destructive">Chaos</span> to{' '}
              <span className="gradient-text">Clarity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              See how intelliSPEC transforms the most challenging {industryName.toLowerCase()} workflows into streamlined, 
              efficient, and compliant operations through the eyes of those who live it every day.
            </p>
          </motion.div>

          {/* Interactive Persona Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Choose Your Role
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {personas.map((persona, index) => (
                  <motion.button
                    key={persona.role}
                    onClick={() => setSelectedPersona(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      selectedPersona === index 
                        ? `${persona.bgColor} border-2 border-white/50 shadow-lg` 
                        : 'bg-muted/30 border-2 border-transparent hover:bg-muted/40'
                    }`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${persona.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      {resolveIcon(persona.icon) && React.createElement(resolveIcon(persona.icon)!, { className: "w-4 h-4 text-white" })}
                    </div>
                    <p className="text-xs text-foreground text-center font-medium leading-tight">
                      {persona.role.split(' ')[0]}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Selected Persona Story */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPersona}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Story Content */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${personas[selectedPersona].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        {resolveIcon(personas[selectedPersona].icon) && React.createElement(resolveIcon(personas[selectedPersona].icon)!, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-1">{personas[selectedPersona].role}</h4>
                        <p className="text-muted-foreground">{personas[selectedPersona].focus}</p>
                      </div>
                    </div>

                    <div className="space-y-6 mb-6">
                      <div>
                        <h5 className="text-sm font-semibold text-destructive mb-3 uppercase tracking-wide flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          THE CHALLENGE
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">{personas[selectedPersona].story.challenge}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          THE SOLUTION
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">{personas[selectedPersona].story.solution}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          THE OUTCOME
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">{personas[selectedPersona].story.outcome}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">KEY FEATURES</h5>
                      <div className="flex flex-wrap gap-2">
                        {personas[selectedPersona].features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-muted/50 rounded-full text-xs text-foreground border border-border">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-medium flex items-center">
                      <span>See This Solution in Action</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>

                  {/* Metrics and Testimonial */}
                  <div className="space-y-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(personas[selectedPersona].metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-muted/50 rounded-xl">
                          <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <Quote className="w-6 h-6 text-muted-foreground mb-3" />
                      <p className="text-muted-foreground text-sm italic mb-4">
                        &ldquo;{personas[selectedPersona].testimonial.quote}&rdquo;
                      </p>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{personas[selectedPersona].testimonial.author}</div>
                        <div className="text-muted-foreground text-xs">{personas[selectedPersona].testimonial.title}</div>
                        <div className="text-primary text-xs font-medium">{personas[selectedPersona].testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
      )}

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
                {ctaTitle}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary" aria-label={`Start free trial for ${industryName.toLowerCase()}`}>
                  {ctaButtonText}
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </button>
                <Link href={ctaButtonLink} className="btn-outline" aria-label={`Contact sales for ${industryName.toLowerCase()}`}>
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 