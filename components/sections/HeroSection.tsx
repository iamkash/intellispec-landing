'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight, ChevronDown, Sparkles, Zap, Shield, HardHat, Cog, CheckCircle, TrendingUp, Users, Database, Search, FileText, Calendar, Settings, Eye, TestTube, UserCheck, Award, Target, Globe, Rocket, Scale, BarChart3, Layers, Workflow, Brain, Crown, Wrench, Factory, Cpu, Microscope, BarChart, Activity, Monitor, Camera, Radio, Cpu as CpuIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Typing Animation Component
const TypewriterText = ({ texts, speed = 100, delay = 2000 }: { texts: string[], speed?: number, delay?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setCurrentTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, isDeleting, currentTextIndex, texts, speed, delay])

  return (
    <span className="inline-block w-full h-[1.5em] leading-[1.5em] text-center">
      {texts[currentTextIndex].slice(0, currentCharIndex)}
      <span className="animate-pulse">|</span>
    </span>
  )
}


// Dynamic Workflow Showcase Component
const WorkflowShowcase = () => {
  const [currentWorkflow, setCurrentWorkflow] = useState(0)
  
  const workflows = [
    {
      title: "Real-Time Field Integration",
      description: "Live field-to-office sync, instant updates, mobile workflows",
      icon: Shield,
      color: "from-blue-600 to-blue-700",
      metric: "Real-Time Sync"
    },
    {
      title: "Unified Data Platform", 
      description: "Eliminate silos, cross-functional visibility, integrated workflows",
      icon: Settings,
      color: "from-purple-600 to-purple-700",
      metric: "100% Integration"
    },
    {
      title: "Digital Specification Management",
      description: "Live spec updates, compliance tracking, field verification",
      icon: Calendar,
      color: "from-orange-600 to-orange-700",
      metric: "100% Compliance"
    },
    {
      title: "Seamless Module Integration",
      description: "Connected workflows, shared data, unified reporting",
      icon: Eye,
      color: "from-cyan-600 to-cyan-700",
      metric: "Zero Silos"
    },
    {
      title: "Cross-Functional Visibility",
      description: "Executive dashboards, role-based views, real-time KPIs",
      icon: TestTube,
      color: "from-emerald-600 to-emerald-700",
      metric: "Complete Visibility"
    },
    {
      title: "Paperless Transformation",
      description: "Digital workflows, automated processes, instant reporting",
      icon: UserCheck,
      color: "from-indigo-600 to-indigo-700",
      metric: "100% Digital"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkflow(prev => (prev + 1) % workflows.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [workflows.length])

  return (
    <motion.div
      key={currentWorkflow}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="backdrop-blur-md bg-white/80 rounded-xl p-4 max-w-3xl mx-auto shadow-lg border border-slate-200/50"
    >
      <div className="flex items-center justify-center space-x-4">
        <div className={`w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md`}>
          {React.createElement(workflows[currentWorkflow].icon, { className: "w-5 h-5 text-white" })}
        </div>
        <div className="text-center">
          <div className="font-bold text-lg text-slate-800 mb-1">
            {workflows[currentWorkflow].title}
          </div>
          <div className="text-sm text-slate-600">
            {workflows[currentWorkflow].description}
          </div>
        </div>
        <div className="inline-flex items-center px-2 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">
          <TrendingUp className="w-3 h-3 mr-1" />
          {workflows[currentWorkflow].metric}
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('modules')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const typingTexts = [
    "Digital Transformation",
    "Predictive Intelligence",
    "Unified Operations",
    "Advanced Analytics",
    "Smart Automation",
    "Enterprise Integration"
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Modern Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-teal-50/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100/10 rounded-full blur-2xl"
          />
        </div>

        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Enhanced Floating Module & Industry Icons Across Whole Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left side - Manufacturing & Engineering */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-8 opacity-8"
          >
            <Factory className="w-8 h-8 text-secondary/40" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 left-16 opacity-6"
          >
            <Cog className="w-6 h-6 text-primary/50" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -15, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-2/3 left-12 opacity-7"
          >
            <Wrench className="w-7 h-7 text-accent/45" />
          </motion.div>

          {/* Center area - AI & Analytics */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/6 left-1/2 transform -translate-x-1/2 opacity-6"
          >
            <Brain className="w-9 h-9 text-primary/35" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 18, 0],
              x: [0, 12, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 opacity-5"
          >
            <BarChart className="w-7 h-7 text-secondary/40" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 0.8, 1],
              y: [0, -12, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 opacity-7"
          >
            <Activity className="w-6 h-6 text-accent/50" />
          </motion.div>

          {/* Right side - Safety & Monitoring */}
          <motion.div
            animate={{
              y: [0, 22, 0],
              rotate: [0, -12, 0]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/5 right-16 opacity-6"
          >
            <Shield className="w-8 h-8 text-secondary/45" />
          </motion.div>

          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, -18, 0]
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-2/5 right-12 opacity-5"
          >
            <Monitor className="w-7 h-7 text-primary/40" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -16, 0],
              rotate: [0, 25, 0]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2
            }}
            className="absolute bottom-1/4 right-20 opacity-6"
          >
            <Camera className="w-6 h-6 text-accent/45" />
          </motion.div>

          {/* Bottom area - Energy & Transport */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
            className="absolute bottom-1/4 left-1/4 opacity-7"
          >
            <Zap className="w-7 h-7 text-primary/40" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute bottom-1/5 right-1/4 opacity-5"
          >
            <Globe className="w-8 h-8 text-accent/35" />
          </motion.div>

          {/* Top right - Innovation */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 18, 0]
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
            className="absolute top-16 right-8 opacity-6"
          >
            <Rocket className="w-7 h-7 text-secondary/40" />
          </motion.div>
        </div>
      </div>

      {/* Modern Asymmetrical Layout */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 xl:px-16 py-20">

        {/* Left Column - Main Content */}
        <div className="flex-1 lg:pr-12 xl:pr-16 relative">
          {/* Subtle background enhancement */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-secondary/5 rounded-3xl -m-4 pointer-events-none"></div>

          {/* Dynamic Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 relative z-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 leading-tight">
                <span className="block">Industrial</span>
                <span className="block text-secondary">
                  Intelligence
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-700 mt-2">
                  Platform
                </span>
              </h1>
              {/* Concise Subline */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl"
              >
                Modular. Scalable. Enterprise‑Ready. Future‑Proof.
              </motion.p>
            </div>
          </motion.div>

          {/* Modern CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 mb-10 relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold px-8 py-4 rounded-2xl relative overflow-hidden inline-flex items-center"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link href="/demo" className="flex items-center relative z-10 px-8 py-4">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Rocket className="w-5 h-5 mr-3" />
                </motion.div>
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 hover:bg-white border-2 border-slate-200 hover:border-secondary/50 text-slate-700 hover:text-secondary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 rounded-2xl inline-flex items-center ml-3"
            >
              <Link href="/modules" className="flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Play className="w-5 h-5 mr-3" />
                </motion.div>
                <span>Explore Platform</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Concise Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-8 relative z-10"
          >
            <motion.div
              className="backdrop-blur-md bg-white/80 rounded-2xl p-5 border border-slate-200/50 shadow-xl"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Beyond CMMS/EAM. A unified intelligence platform that orchestrates your industrial ecosystem with modular precision.
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive Typewriter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-8 relative z-10"
          >
            <motion.div
              className="backdrop-blur-md bg-white/60 rounded-2xl p-4 border border-slate-200/40"
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(255, 255, 255, 0.8)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2 text-lg font-medium text-slate-700">
                <span>Orchestrate</span>
                <motion.span
                  className="text-secondary font-bold px-1 rounded"
                  animate={{
                    backgroundColor: ["rgba(251, 146, 60, 0.1)", "rgba(251, 146, 60, 0.05)", "rgba(251, 146, 60, 0.1)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <TypewriterText texts={typingTexts} speed={80} delay={3000} />
                </motion.span>
                <span>at Scale</span>
              </div>
            </motion.div>
          </motion.div>
        </div>


        {/* Right Column - Unified Platform Value Proposition */}
        <div className="flex-1 lg:pl-12 xl:pl-16 mt-12 lg:mt-0">

          {/* Main Value Proposition Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative bg-gradient-to-br from-white via-white to-slate-50/50 rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* Floating Module Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top left - Manufacturing/Aerospace */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-4 opacity-10"
              >
                <Wrench className="w-6 h-6 text-secondary" />
              </motion.div>

              {/* Top right - AI/Vision */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-6 right-6 opacity-10"
              >
                <Brain className="w-5 h-5 text-primary" />
              </motion.div>

              {/* Middle left - Safety */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 opacity-10"
              >
                <Shield className="w-5 h-5 text-secondary" />
              </motion.div>

              {/* Bottom left - Energy/Oil&Gas */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-6 left-4 opacity-10"
              >
                <Zap className="w-5 h-5 text-primary" />
              </motion.div>

              {/* Bottom right - Analytics */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-4 right-4 opacity-10"
              >
                <BarChart3 className="w-5 h-5 text-accent" />
              </motion.div>

              {/* Center right - Monitoring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
                className="absolute top-1/3 right-8 opacity-10"
              >
                <Monitor className="w-4 h-4 text-secondary" />
              </motion.div>

              {/* Top center - Chemical/Pharma */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
                className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-8"
              >
                <Microscope className="w-4 h-4 text-primary" />
              </motion.div>

              {/* Middle right - Transportation */}
              <motion.div
                animate={{
                  x: [0, 6, 0],
                  y: [0, -4, 0]
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8
                }}
                className="absolute top-2/3 right-12 opacity-10"
              >
                <Globe className="w-4 h-4 text-accent" />
              </motion.div>
            </div>

            {/* Hero Icon and Main Headline */}
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  rotate: { duration: 0.6, delay: 1.2 }
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
              >
                {/* Animated pulse ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="absolute inset-0 bg-secondary rounded-2xl"
                />
                <Target className="w-8 h-8 text-white relative z-10" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-3xl font-bold text-slate-800 leading-tight flex-1"
              >
                The Only Advanced Software That <span className="text-secondary underline decoration-secondary decoration-2 underline-offset-2">Breaks the Silos</span>
              </motion.h3>
            </div>

            {/* Solution Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">Unified Solution</div>
                  <div className="text-sm text-slate-700">
                    Single platform that orchestrates your entire industrial ecosystem with breakthrough <span className="text-secondary font-semibold">AI intelligence</span>.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workflow Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-slate-700">6-Step Asset Lifecycle</h4>
                <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">End-to-End Control</div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { step: 'INSPECT', desc: 'Digital capture' },
                  { step: 'ASSESS', desc: 'AI analysis' },
                  { step: 'PLAN', desc: 'Smart scheduling' },
                  { step: 'EXECUTE', desc: 'Workflow orchestration' },
                  { step: 'COMPLY', desc: 'Regulatory assurance' },
                  { step: 'MONITOR', desc: 'Real-time insights' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.1
                    }}
                    className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                  >
                    <div className="text-xs font-bold text-slate-800 mb-1">
                      {item.step}
                    </div>
                    <div className="text-xs text-slate-600">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Core Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mb-6"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Unified Intelligence</div>
                    <div className="text-xs text-slate-600">Single source of truth</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Zero Silos</div>
                    <div className="text-xs text-slate-600">Connected workflows</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center"
            >
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-3">
                <Link href="/demo">
                  <Play className="w-4 h-4 mr-2" />
                  See Live Demo
                </Link>
              </Button>

              <div className="mt-3">
                <Link href="/modules" className="inline-flex items-center text-secondary font-medium text-sm hover:text-primary transition-colors">
                  <span>Explore Platform Capabilities</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/5 rounded-3xl pointer-events-none"></div>
          </motion.div>
        </div>
        </div>

        {/* Modern Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 hover:text-slate-800 transition-colors duration-200 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="backdrop-blur-md bg-white/80 rounded-full p-3 shadow-lg border border-slate-200/50"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
    </div>
  )
}
