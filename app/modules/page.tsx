"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  HardHat, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Shield,
  Clock,
  Users,
  BarChart3,
  Play,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

import ModulesOverview from '@/components/sections/ModulesOverview'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const heroStats = [
  { label: 'Modules Available', value: '10+', icon: Zap, color: 'from-primary to-primary' },
  { label: 'Industries Served', value: '15+', icon: HardHat, color: 'from-secondary to-secondary' },
  { label: 'Years in Production', value: '5+', icon: Star, color: 'from-accent to-accent' },
  { label: 'Customer Satisfaction', value: '99%', icon: TrendingUp, color: 'from-primary to-primary' }
]

const valueProps = [
  {
    title: 'Start Small, Scale Smart',
    description: 'Deploy only the modules you need today. Add more as your operations grow.',
    icon: TrendingUp,
    color: 'from-primary to-primary'
  },
  {
    title: 'Seamless Integration',
    description: 'All modules work together as one unified platform. No data silos, no integration headaches.',
    icon: Shield,
    color: 'from-primary to-primary'
  },
  {
    title: 'Industry Proven',
    description: 'Built by industry veterans who understand your challenges. Tested in real-world operations.',
    icon: CheckCircle,
    color: 'from-secondary to-secondary'
  }
]

export default function ModulesPage() {
  const [activeValueProp, setActiveValueProp] = useState(0)

  return (
    <>
      <main className="min-h-screen">
       
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-5"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full opacity-5"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent rounded-full opacity-5"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge className="mb-8 bg-primary text-primary-foreground border-0 shadow-lg">
                  <Zap className="w-4 h-4 mr-2" />
                  Modular Excellence
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
              >
                The{" "}
                <span className="relative">
                  <span className="gradient-text">
                    Complete
                  </span>
                </span>
                {" "}Industrial Platform
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Ten precision-engineered modules. One unified ecosystem. From <span className="text-primary font-semibold">AI-powered safety monitoring</span> with intelliSAFETY to <span className="text-primary font-semibold">comprehensive scaffolding management</span> with intelliSCAFF - each module delivers measurable ROI while seamlessly integrating into your complete digital transformation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              >
                {heroStats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 aspect-square flex flex-col justify-center"
                  >
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="#modules">
                    <span>Explore All Modules</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    <span>Watch Demo</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">Modular?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unlike monolithic systems, our modular approach gives you the flexibility and power you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Modules Section */}
        <section id="modules" className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-secondary text-secondary-foreground border-0 shadow-lg">
                <HardHat className="w-4 h-4 mr-2" />
                Complete Suite
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your <span className="gradient-text">Complete</span> Toolkit
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From <span className="text-primary font-semibold">intelliSAFETY&apos;s AI-powered command center</span> to <span className="text-primary font-semibold">intelliSCAFF&apos;s scaffolding safety management</span> - each module solves specific industrial challenges while contributing to your unified digital ecosystem. Deploy individually or as a complete suite.
              </p>
            </motion.div>

            {/* Modules Overview Component */}
            <ModulesOverview />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform <span className="text-primary-foreground/80">Your Operations</span>?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Start with the modules you need most and watch your efficiency soar. Our team will guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Custom Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Talk to Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

       
      </main>
    </>
  )
} 