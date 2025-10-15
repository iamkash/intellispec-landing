'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star,
  Users,
  Building2,
  Shield,
  MessageCircle,
  Award,
  TrendingUp
} from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  industry: string
  rating: number
  metrics: {
    efficiency: string
    compliance: string
    time: string
  }
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "intelliSPEC transformed our turnaround process. We went from paper-based chaos to real-time visibility across all crews. The 40% time savings is real.",
    author: "Mike Johnson",
    title: "Turnaround Manager",
    company: "PK Companies",
    industry: "Oil & Gas",
    rating: 5,
    metrics: { efficiency: '40%', compliance: '100%', time: '60%' },
    avatar: "MJ"
  },
  {
    id: 2,
    quote: "The inspection workflows are intuitive and the photo documentation feature has eliminated all our compliance issues. It's exactly what we needed.",
    author: "Sarah Chen",
    title: "HSE Director",
    company: "PK Safety",
    industry: "Safety Services",
    rating: 5,
    metrics: { efficiency: '35%', compliance: '100%', time: '50%' },
    avatar: "SC"
  },
  {
    id: 3,
    quote: "Using IntelliVision and IntelliVault, our QC team linked DFT readings with CAD maps and stored all reports by asset zone. Game changer.",
    author: "David Rodriguez",
    title: "QC Lead",
    company: "Sherwin-Williams",
    industry: "Paint Manufacturing",
    rating: 5,
    metrics: { efficiency: '45%', compliance: '100%', time: '55%' },
    avatar: "DR"
  },
  {
    id: 4,
    quote: "I used IntelliTurn to close out a 7-day STO with 24-hour visibility across crews. We haven't missed a critical permit since.",
    author: "Lisa Thompson",
    title: "Operations Director",
    company: "Chevron GOM",
    industry: "Oil & Gas",
    rating: 5,
    metrics: { efficiency: '50%', compliance: '100%', time: '70%' },
    avatar: "LT"
  },
  {
    id: 5,
    quote: "The rescue team management features are outstanding. We can track certifications, plan responses, and maintain readiness like never before.",
    author: "Robert Kim",
    title: "Rescue Ops Lead",
    company: "Valkyrie",
    industry: "Emergency Services",
    rating: 5,
    metrics: { efficiency: '60%', compliance: '100%', time: '80%' },
    avatar: "RK"
  }
]

const trustMetrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Users',
    description: 'Professionals using intelliSPEC daily',
    color: 'from-slate-600 to-slate-700',
    bgColor: 'bg-gradient-to-br from-slate-500/10 to-slate-600/10'
  },
  {
    icon: Building2,
    value: '20+',
    label: 'Sites Deployed',
    description: 'Industrial facilities transformed',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable platform availability',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10'
  }
]

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding glass-section-alt relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-slate-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-orange-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
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
          <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
                            <MessageCircle className="w-4 h-4 text-slate-500 mr-2" />
            <span className="text-slate-900">Customer Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Real feedback from industry professionals who have transformed their operations with intelliSPEC.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-300/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Quote Content */}
                  <div>
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl text-slate-900 mb-8 leading-relaxed italic">
                      &ldquo;{testimonials[currentIndex].quote}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{testimonials[currentIndex].author}</div>
                        <div className="text-slate-500 text-sm">{testimonials[currentIndex].title}</div>
                        <div className="text-blue-600 text-sm font-medium">{testimonials[currentIndex].company}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    {/* Industry */}
                    <div className="inline-flex items-center px-3 py-1 bg-slate-100/50 rounded-full text-xs text-slate-600">
                      {testimonials[currentIndex].industry}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Results Achieved</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center justify-between p-4 bg-slate-100/50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-slate-600">Efficiency Gain</span>
                        </div>
                        <span className="text-lg font-bold text-blue-600">{testimonials[currentIndex].metrics.efficiency}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-100/50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-slate-600">Compliance</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">{testimonials[currentIndex].metrics.compliance}</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-100/50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-orange-600" />
                          <span className="text-slate-600">Time Saved</span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">{testimonials[currentIndex].metrics.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900:text-white transition-colors duration-200 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${metric.bgColor} backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-300/30`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{metric.value}</div>
                  <div className="text-slate-600 font-medium mb-1">{metric.label}</div>
                  <div className="text-slate-500 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 