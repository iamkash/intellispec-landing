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
  ChevronLeft,
  Search,
  Calendar,
  Package,
  Eye,
  FileText,
  Map
} from 'lucide-react'

import SolutionsOverview from '@/components/sections/SolutionsOverview'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const heroStats = [
  { label: 'Solutions Available', value: '9+', icon: Zap, color: 'from-blue-500 to-cyan-600' },
  { label: 'Industries Served', value: '15+', icon: HardHat, color: 'from-orange-500 to-red-600' },
  { label: 'Years in Production', value: '5+', icon: Star, color: 'from-yellow-500 to-orange-600' },
  { label: 'Customer Satisfaction', value: '99%', icon: TrendingUp, color: 'from-green-500 to-emerald-600' }
]

const valueProps = [
  {
    title: 'Comprehensive Coverage',
    description: 'From inspections to safety management, we cover every critical aspect of industrial operations.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Proven Results',
    description: 'Real metrics from real implementations. See 40-80% efficiency gains across all solutions.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Built for API standards, OSHA requirements, and industry-specific regulations.',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-600'
  }
]

const solutionHighlights = [
  {
    name: 'Inspections',
    description: 'API 510, 570, 653, VT compliance with digital workflows',
    icon: Search,
    color: 'from-blue-600 to-blue-700',
    efficiency: '60%',
    accuracy: '95%'
  },
  {
    name: 'Turnaround Management',
    description: 'End-to-end planning and execution with real-time tracking',
    icon: Calendar,
    color: 'from-orange-600 to-orange-700',
    efficiency: '45%',
    accuracy: '90%'
  },
  {
    name: 'Safety & Permits',
    description: 'Automated permit-to-work and safety compliance tracking',
    icon: Shield,
    color: 'from-green-600 to-green-700',
    efficiency: '70%',
    accuracy: '98%'
  }
]

export default function SolutionsPage() {
  const [activeValueProp, setActiveValueProp] = useState(0)

  return (
    <>
      <main className="min-h-screen">
  
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                <Zap className="w-4 h-4 mr-2" />
                <span>Industrial Solutions</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Complete <span className="gradient-text">Industrial</span><br />
                Solutions Platform
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Nine comprehensive solutions designed to address every critical challenge in industrial operations.
                From inspections to safety management, we&apos;ve got you covered.
              </p>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="#solutions">
                    <span>Explore All Solutions</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50:bg-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    <span>Watch Demo</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Our <span className="gradient-text">Solutions?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Built by industry veterans who understand your challenges. Proven results across hundreds of implementations.
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{prop.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Highlights */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our most popular solutions delivering measurable results across industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {solutionHighlights.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass-morphism rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-300/30 hover:border-slate-400/50:border-slate-500/50">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.name}</h3>
                    <p className="text-slate-600 mb-4">{solution.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{solution.efficiency}</div>
                        <div className="text-sm text-slate-500">Efficiency Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{solution.accuracy}</div>
                        <div className="text-sm text-slate-500">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Solutions Section */}
        <section id="solutions" className="py-16 bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-900">Complete Suite</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                All <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to address the most critical challenges in industrial operations, 
                from inspection workflows to safety compliance.
              </p>
            </motion.div>

            {/* Solutions Overview Component */}
            <SolutionsOverview />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Start with the solutions you need most and watch your efficiency soar. Our team will guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-green-600 hover:bg-green-50 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="/demo">
                    <span>Schedule Custom Demo</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <Link href="/contact">
                    <span>Talk to Sales</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
} 