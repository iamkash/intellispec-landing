"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Smartphone, 
  Users, 
  MapPin, 
  Code, 
  Star, 
  Zap, 
  Rocket,
  ArrowLeft,
  ChevronRight,
  Badge,
  Target,
  Award,
  CheckCircle
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const milestones = [
  {
    year: "2010",
    title: "The Vision Begins",
    subtitle: "Mobile Technology Recognition",
    description: "PK Companies recognized the opportunity to innovate and create consistency using mobile technology to sustain growth. Realizing the value and power of mobile access to information and receiving field data in real-time, PK initially hired a 3rd party company to build applications. However, contracted developers didn't understand the industry or have the same passion for success, leading to the decision to hire in-house development.",
    icon: Lightbulb,
    color: "bg-primary",
    achievements: ["Mobile technology vision", "Real-time field data concept", "In-house development decision"]
  },
  {
    year: "2012",
    title: "intelliSPEC™ is Born",
    subtitle: "First Mobile Platform Launch",
    description: "PK made the decision to invest in development to create mobile technology that worked with tablets. With a strong pool of developers trained locally in writing applications specifically for Apple at the time, PK developed its first product - intelliSPEC™ - with internal solutions inFIRE™ & intelliSAFETY™ for use by PK Industrial and PK Safety divisions.",
    icon: Smartphone,
    color: "bg-secondary",
    achievements: ["intelliSPEC™ platform launched", "inFIRE™ & intelliSAFETY™ modules", "Tablet-based mobile solution"]
  },
  {
    year: "2013",
    title: "Operations Integration",
    subtitle: "Certified Inspector Training",
    description: "PK Technology established an operations department to provide certified inspectors properly trained on intelliSPEC™. The platform went to market to merge inspection processes with mobile data collection, using PK's experience running successful service companies to efficiently manage inspection operations and push data into legacy systems.",
    icon: Users,
    color: "bg-accent",
    achievements: ["Operations department created", "Certified inspector training", "Legacy system integration"]
  },
  {
    year: "2014-2016",
    title: "Rapid Expansion",
    subtitle: "Geographic Growth & Features",
    description: "intelliSPEC™ enabled PK Companies to grow 100% each year while providing consistency across operations. Services expanded into 22 states and the offshore market. Customers began noticing the technology PK employees were using and started inquiring about external use, marking the beginning of intelliSPEC™ as a commercial product.",
    icon: MapPin,
    color: "bg-primary",
    achievements: ["22 states coverage", "Offshore market entry", "Customer interest in technology"]
  },
  {
    year: "2017-2018",
    title: "Technology Evolution",
    subtitle: "Platform Enhancement & Team Growth",
    description: "The development team continued to grow as intelliSPEC™ evolved from an internal tool to a comprehensive commercial platform. PK was quickly becoming recognized as a technology company, with intelliSPEC™ at the core of its digital transformation strategy.",
    icon: Code,
    color: "bg-secondary",
    achievements: ["Development team growth", "Commercial platform evolution", "Technology company recognition"]
  },
  {
    year: "2019-2021",
    title: "Market Leadership",
    subtitle: "Industry Standard Establishment",
    description: "intelliSPEC™ became the industry standard for mobile inspection and data management in industrial settings. The platform's capabilities expanded to include comprehensive inspection workflows, real-time reporting, and advanced data analytics, serving clients across multiple industries.",
    icon: Star,
    color: "bg-accent",
    achievements: ["Industry standard recognition", "Advanced analytics", "Multi-industry adoption"]
  },
  {
    year: "2022-2023",
    title: "Innovation Acceleration",
    subtitle: "Advanced Features & AI Integration",
    description: "intelliSPEC™ continued to evolve with advanced features, improved user experience, and early AI integration capabilities. The platform maintained its position as the leading mobile inspection solution while preparing for the next generation of industrial technology.",
    icon: Zap,
    color: "bg-primary",
    achievements: ["AI integration preparation", "Advanced UX features", "Next-gen technology focus"]
  },
  {
    year: "2024",
    title: "Future-Ready Platform",
    subtitle: "Next Generation Development",
    description: "With DC Capital Partners investment, intelliSPEC™ is positioned for accelerated development and market expansion. The platform continues to lead the industry in mobile inspection technology while preparing for AI-powered insights, predictive analytics, and Industry 4.0 integration.",
    icon: Rocket,
    color: "bg-secondary",
    achievements: ["Investment partnership", "AI-powered roadmap", "Industry 4.0 preparation"]
  }
]

export default function EvolutionPage() {
  return (
    <>
      <main className="min-h-screen">
  
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-muted"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button asChild variant="outline" className="mb-8 border-slate-300">
                  <Link href="/about">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to About
                  </Link>
                </Button>
              </motion.div>
              
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-slate-700 text-white border-0">
                intelliSPEC™ Journey
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                The <span className="gradient-text">Evolution</span> of intelliSPEC™
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From a simple mobile vision to the industry-leading platform, discover how intelliSPEC™ 
                revolutionized industrial inspection and data management through continuous innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:gap-12 gap-8`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                    
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200/50">
                          <div className="flex items-center justify-between mb-6">
                            <div className={`w-16 h-16 ${milestone.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <milestone.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-muted-foreground">{milestone.subtitle}</div>
                              <div className="text-3xl font-bold text-foreground">{milestone.year}</div>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {milestone.description}
                          </p>
                          
                          <div className="space-y-2">
                            {milestone.achievements.map((achievement, achievementIndex) => (
                              <div key={achievementIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer for mobile */}
                    <div className="lg:hidden w-full h-8"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Be Part of the <span className="text-yellow-300">Next Chapter</span>?
              </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Join the hundreds of companies that trust intelliSPEC™ to transform their industrial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-primary hover:bg-gray-50 border-0 shadow-lg hover:shadow-xl">
                  <Link href="/demo">Schedule a Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

       
      </main>
    </>
  )
} 
