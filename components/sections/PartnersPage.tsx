"use client"

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Users, 
  Building2, 
  Target, 
  Shield, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Award,
  Briefcase,
  Network,
  Settings,
  Palette,
  Cpu,
  Camera,
  Plane,
  Gauge,
  Sparkles,
  Star,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Simple Animated Gradient Text Component
const AnimatedGradientText = ({ children, className = "" }) => {
  return (
    <span className={`text-primary ${className}`}>{children}</span>
  )
}

interface PartnershipProgram {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ElementType
  color: string
  gradient: string
  benefits: {
    title: string
    items: string[]
  }
  features: {
    title: string
    description: string
    icon: React.ElementType
  }[]
  cta: {
    text: string
    link: string
  }
}

const partnershipPrograms: PartnershipProgram[] = [
  {
    id: 'si-alliances',
    title: 'System Integrator (SI) Alliances',
    subtitle: 'Embed our platform in large-scale enterprise digital transformation programs',
    description: 'Partner with leading System Integrators to deliver comprehensive industrial solutions that integrate seamlessly with existing enterprise infrastructure and workflows.',
    icon: Building2,
    color: 'text-primary',
    gradient: '',
    benefits: {
      title: 'Why Partner with intelliSPEC?',
      items: [
        'Access to proven field-ready industrial platform',
        'Comprehensive API and integration capabilities',
        'Enterprise-grade security and compliance',
        'Dedicated technical support and training',
        'Joint go-to-market opportunities',
        'Revenue sharing and incentive programs'
      ]
    },
    features: [
      {
        title: 'Enterprise Integration',
        description: 'Seamless integration with existing ERP, MES, and CMMS systems through robust APIs and connectors.',
        icon: Settings
      },
      {
        title: 'Scalable Architecture',
        description: 'Cloud-native platform designed to handle enterprise-scale deployments and complex workflows.',
        icon: Network
      },
      {
        title: 'Compliance Ready',
        description: 'Built-in compliance frameworks for ISO, OSHA, API, and industry-specific regulations.',
        icon: Shield
      }
    ],
    cta: {
      text: 'Become an SI Partner',
      link: '/contact?type=si-partnership'
    }
  },
  {
    id: 'var-program',
    title: 'Value-Added Resellers (VARs)',
    subtitle: 'Enable niche-market expansion through white-labeled solutions and reseller-led outreach',
    description: 'Expand your market reach with white-labeled intelliSPEC solutions tailored to specific industry verticals and regional markets.',
    icon: Users,
    color: 'text-secondary',
    gradient: '',
    benefits: {
      title: 'VAR Program Benefits',
      items: [
        'White-label and rebranding capabilities',
        'Customizable solution packages',
        'Regional market exclusivity options',
        'Comprehensive sales enablement',
        'Marketing support and materials',
        'Competitive pricing and margins'
      ]
    },
    features: [
      {
        title: 'White-Label Solutions',
        description: 'Fully customizable branding and packaging to match your company identity and market positioning.',
        icon: Palette
      },
      {
        title: 'Niche Market Focus',
        description: 'Specialized solutions for specific industries, regions, or use cases with targeted go-to-market support.',
        icon: Target
      },
      {
        title: 'Sales Enablement',
        description: 'Complete sales toolkit including demos, presentations, case studies, and technical documentation.',
        icon: Briefcase
      }
    ],
    cta: {
      text: 'Join VAR Program',
      link: '/contact?type=var-partnership'
    }
  },
  {
    id: 'tech-vendor-bundling',
    title: 'Technology Vendor Bundling',
    subtitle: 'Co-sell with sensor, drone, and camera OEMs to offer a unified hardware-software solution',
    description: 'Create integrated hardware-software solutions by bundling intelliSPEC software with leading sensor, drone, and camera technologies.',
    icon: Cpu,
    color: 'text-accent',
    gradient: '',
    benefits: {
      title: 'Technology Partnership Advantages',
      items: [
        'Integrated hardware-software solutions',
        'Joint product development opportunities',
        'Shared marketing and sales initiatives',
        'Technical integration support',
        'Certified solution validation',
        'Enhanced customer value proposition'
      ]
    },
    features: [
      {
        title: 'Hardware Integration',
        description: 'Pre-configured solutions with sensors, drones, cameras, and other industrial IoT devices.',
        icon: Gauge
      },
      {
        title: 'Unified Platform',
        description: 'Single software platform that manages all connected devices and data streams seamlessly.',
        icon: Cpu
      },
      {
        title: 'Certified Solutions',
        description: 'Jointly tested and certified solutions ensuring compatibility and optimal performance.',
        icon: Award
      }
    ],
    cta: {
      text: 'Explore Technology Partnerships',
      link: '/contact?type=tech-partnership'
    }
  }
]

export default function PartnersPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero Section (match About/Careers/Leadership style) */}
      <section className="relative pt-24 pb-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-5"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent rounded-full opacity-5"></div>

        {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto text-center text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 sm:px-6 py-3 glass-morphism rounded-full text-sm sm:text-base font-medium mb-6 sm:mb-8 shadow-lg backdrop-blur-xl border border-border"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mr-3" />
              <span className="font-semibold">Strategic Partnerships</span>
              <Sparkles className="w-4 h-4 text-yellow-400 ml-2" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-center"
            >
              Partner with{' '}
              <span className="gradient-text">intelliSPEC</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4 text-center"
            >
              Grow your business with intelliSPEC. Co-sell and deliver proven outcomes for your clients across{' '}
              <span className="font-semibold text-foreground">inspections, safety, and turnarounds</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="btn-outline">
                <Link href="#programs" className="flex items-center">
                  Explore Programs
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center backdrop-blur-sm bg-primary/5">
  <div className="w-1 h-3 bg-primary/40 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Partnership Programs */}
      <section id="programs" className="py-24">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partnership Programs
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Choose the partnership model that best fits your business strategy and market focus.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {partnershipPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-panel p-8 rounded-3xl">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div className="space-y-8">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
  <div className={`rounded-full bg-primary p-3`}>
                        <program.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h3 className={`text-2xl font-bold ${program.color}`}>
                            {program.title}
                          </h3>
                        </div>
                        <p className="mb-4 text-lg font-medium text-foreground">
                          {program.subtitle}
                        </p>
                        <p className="text-muted-foreground">
                          {program.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-foreground">
                          {program.benefits.title}
                        </h4>
                        <ul className="space-y-3">
                          {program.benefits.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
  <Button asChild size="lg" className={`bg-primary hover:opacity-90`}>
                        <Link href={program.cta.link}>
                          {program.cta.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Features Cards */}
                    <div className="space-y-6">
                      {program.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="glass-card border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                  <feature.icon className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-lg">
                                  {feature.title}
                                </CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-base">
                                {feature.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Showcase */}
      <section className="py-24 glass-section-alt">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                <Cpu className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technology Integration Partners
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We integrate with leading hardware manufacturers to deliver complete industrial solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Sensor Manufacturers',
                description: 'IoT sensors for temperature, pressure, vibration, and environmental monitoring',
                icon: Gauge,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Drone OEMs',
                description: 'Industrial drones for aerial inspections and monitoring applications',
                icon: Plane,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Camera Systems',
                description: 'High-resolution cameras for visual inspections and quality control',
                icon: Camera,
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full border-0">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
  <div className={`rounded-full bg-primary p-3`}>
                        <tech.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-center">
                      {tech.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {tech.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Partner with intelliSPEC?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Join our partner network to co-sell, integrate, and deliver measurable results for your customers.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/contact">
                    Start Partnership Discussion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300">
                  <Link href="/contact?type=partnership-info" className="flex items-center">
                    Request Partnership Info
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 
