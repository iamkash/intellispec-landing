'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Database, Shield, Settings, Users, FileText, Calendar, Eye, TestTube, UserCheck, Award, Target, Globe, Rocket, Zap, HardHat, Cog, Search, TrendingUp, Crown, CheckCircle, Network } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CTASection from '@/components/ui/CTASection'

const solutions = [
  {
    name: 'Field Operations Management',
    description: 'Streamline field workflows with digital forms, real-time tracking, and automated processes.',
    icon: HardHat,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-100/50 to-blue-200/50',
    image: '/images/placeholder-field-operations.jpg',
    features: ['Digital Forms', 'GPS Tracking', 'Real-time Sync'],
    metric: '60% Faster',
    competitive: 'vs. traditional methods'
  },
  {
    name: 'Asset Management',
    description: 'Comprehensive asset lifecycle management with predictive maintenance and performance analytics.',
    icon: Cog,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-100/50 to-green-200/50',
    image: '/images/placeholder-asset-management.jpg',
    features: ['Predictive Maintenance', 'Performance Analytics', 'Lifecycle Tracking'],
    metric: '40% Cost Reduction',
    competitive: 'vs. reactive maintenance'
  },
  {
    name: 'Safety & Compliance',
    description: 'Ensure regulatory compliance and maintain the highest safety standards across all operations.',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-gradient-to-br from-red-100/50 to-red-200/50',
    image: '/images/placeholder-safety-compliance..jpg',
    features: ['Incident Tracking', 'Compliance Reporting', 'Risk Assessment'],
    metric: '100% Compliance',
    competitive: 'vs. manual processes'
  },
  {
    name: 'Maintenance Management',
    description: 'Optimize maintenance schedules and reduce downtime with predictive maintenance.',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-100/50 to-purple-200/50',
    image: '/images/placeholder-maintenance.jpg',
    features: ['Predictive Maintenance', 'Scheduled Maintenance', 'Downtime Reduction'],
    metric: '50% Efficiency Gain',
    competitive: 'vs. reactive maintenance'
  },
  {
    name: 'Data Analytics & Reporting',
    description: 'Transform raw data into actionable insights with advanced analytics and real-time dashboards.',
    icon: TrendingUp,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-100/50 to-orange-200/50',
    image: '/images/placeholder-analytics..jpg',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
    metric: 'Real-time Insights',
    competitive: 'vs. batch reporting'
  },
  {
    name: 'Compliance Management',
    description: 'Streamline compliance processes and ensure regulatory adherence across all operations.',
    icon: FileText,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-cyan-100/50 to-cyan-200/50',
    image: '/images/placeholder-compliance.jpg',
    features: ['Regulatory Compliance', 'Document Management', 'Audit Trails'],
    metric: '100% Compliance',
    competitive: 'vs. manual processes'
  }
]

export default function SolutionsOverview() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-slate-900">Comprehensive Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Solutions for <span className="gradient-text">Every Challenge</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            From field operations to executive dashboards, IntelliSpec provides end-to-end solutions that 
            <span className="font-semibold text-slate-700"> transform how industrial organizations operate, maintain, and grow.</span>
          </p>
        </motion.div>

        {/* Solutions Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
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
              <motion.div 
                className={`glass-morphism rounded-xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-300/30 hover:border-slate-400/50:border-slate-500/50 relative overflow-hidden ${solution.bgColor}`}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                </div>

                {/* Solution Image */}
                <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700:text-slate-200 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-slate-600">
                      <span className="font-semibold text-slate-900">{solution.metric}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                      {solution.competitive}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <CTASection
          mainHeading="Ready to Transform Your Operations?"
          topFeatures={[
            {
              icon: Target,
              title: "Comprehensive Solutions",
              description: "End-to-end solutions for every industrial challenge"
            },
            {
              icon: TrendingUp,
              title: "Proven Results",
              description: "20-40% performance improvements across all metrics"
            },
            {
              icon: Globe,
              title: "Industry Expertise",
              description: "Decades of experience across all industrial sectors"
            }
          ]}
          middleHeading="How Our Solutions Transform Your Operations"
          bulletPoints={[
            {
              title: "Streamlined workflows",
              description: "Automate complex processes and eliminate manual bottlenecks"
            },
            {
              title: "Real-time visibility",
              description: "Get instant insights into all aspects of your operations"
            },
            {
              title: "Predictive capabilities",
              description: "Anticipate issues before they impact your operations"
            },
            {
              title: "Scalable architecture",
              description: "Grow your operations without worrying about system limitations"
            }
          ]}
          bottomText="Transform your industrial operations with comprehensive solutions that deliver measurable results."
          highlightedText="Our platform provides end-to-end solutions that revolutionize how you operate, maintain, and grow your business with 20-40% performance improvements."
          primaryButton={{
            text: "See Solutions in Action",
            href: "/demo",
            icon: "arrow"
          }}
          secondaryButton={{
            text: "Explore All Solutions",
            href: "/solutions",
            icon: "play"
          }}
        />
      </div>
    </div>
  )
} 