"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Shield, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  TrendingDown,
  CheckCircle,
  Building2,
  Smartphone,
  Code,
  Clock,
  DollarSign,
  AlertTriangle,
  MapPin,
  Calendar,
  Zap,
  Rocket,
  Lightbulb,
  Star,
  Flag,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Heart
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "GOOD PEOPLE",
      description: "We are honest and ethical people who do the right thing and address difficult situations tactfully with a firm, fair and consistent approach.",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "TEAMMATES",
      description: "We work together to create and maintain a positive and supportive work environment, while at all times, holding each other accountable through open, respectful and straight-forward communication.",
      color: "bg-secondary"
    },
    {
      icon: Target,
      title: "COMMITTED",
      description: "We show up, every day, for each other and our customers. With integrity and conviction, we are driven to perform at a higher level in order to fuel success and fulfillment for our coworkers, customers and vendors.",
      color: "bg-accent"
    },
    {
      icon: Award,
      title: "OWN IT",
      description: "We accept personal accountability to ensure that each assignment is completed professionally, efficiently and safely, while pursuing the constant goal of producing successful projects and satisfied customers.",
      color: "bg-primary"
    }
  ]

  const stats = [
    { icon: Globe, label: "States Served", value: "40+", description: "Across the United States" },
    { icon: Building2, label: "Countries", value: "5", description: "International presence" },
    { icon: Users, label: "Years of Excellence", value: "25+", description: "Since 1997" },
    { icon: Code, label: "Developers", value: "32+", description: "In-house software team" }
  ]

  const services = [
    "Oil & Gas",
    "Petrochemical",
    "Heavy Industrial",
    "Manufacturing",
    "Pharmaceuticals",
    "Construction"
  ]

  const standards = [
    "API Standards",
    "NACE Standards", 
    "CWI Standards",
    "OSHA Standards"
  ]

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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
<Badge className="mb-8 bg-primary text-primary-foreground border-0 shadow-lg">
                  <Rocket className="w-4 h-4 mr-2" />
                  About PK Companies
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
              >
                Pioneering{" "}
                <span className="relative">
<span className="gradient-text">
                    Industrial Excellence
                  </span>
                  
                </span>
                {" "}Since 1997
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Founded and operated by the Turpin brothers, PK Companies has been delivering
<span className="font-semibold text-foreground"> &ldquo;Higher Level of Protection&rdquo; </span>
                through pioneering techniques and revolutionary innovation for over 25 years.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {stats.slice(0, 3).map((stat, index) => (
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
            </motion.div>
          </div>
        </section>

        {/* Our Story - Timeline Summary */}
<section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
          <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">
                intelliSPEC™ Journey
              </Badge>
<h2 className="text-4xl font-bold text-foreground mb-6">
                The <span className="gradient-text">Evolution</span> of intelliSPEC™
              </h2>
<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From a simple mobile vision to the industry-leading platform, discover how intelliSPEC™ 
                revolutionized industrial inspection and data management through continuous innovation.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
<Button asChild className="bg-primary hover:opacity-90 text-primary-foreground border-0 shadow-lg hover:shadow-xl">
                  <Link href="/about/evolution">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    View Full Timeline
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Key Milestones Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  year: "2010",
                  title: "Vision Begins",
                  description: "Mobile technology recognition and in-house development decision",
                  icon: Lightbulb,
    color: "bg-primary"
                },
                {
                  year: "2012",
                  title: "Platform Born",
                  description: "intelliSPEC™ launched with inFIRE™ & intelliSAFETY™ modules",
                  icon: Smartphone,
    color: "bg-secondary"
                },
                {
                  year: "2019-2021",
                  title: "Market Leader",
                  description: "Became industry standard for mobile inspection and data management",
                  icon: Star,
    color: "bg-accent"
                },
                {
                  year: "2025+",
                  title: "Future Ready",
                  description: "AI-powered insights and Industry 4.0 integration preparation",
                  icon: Rocket,
    color: "bg-primary"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200/50 text-center h-full flex flex-col">
              <div className={`w-16 h-16 ${milestone.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
              <div className="text-2xl font-bold text-foreground mb-2">{milestone.year}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
              <p className="text-sm text-muted-foreground flex-grow">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
<section className="relative section-padding bg-primary/5 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20px_20px,rgba(156,146,172,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
      <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
                Our Vision
              </Badge>
      <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
<span className="gradient-text">
                  VISION
                </span>
              </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The future we&apos;re building
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden max-w-6xl mx-auto">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
        <h3 className="text-3xl font-bold text-foreground mb-6">
                        TO BECOME THE GLOBAL STANDARD
                      </h3>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        We envision a world where data-driven asset management transforms how industries operate. 
                        Where every decision is informed by intelligence, every process is optimized by innovation, 
                        and every outcome exceeds expectations.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <span className="text-muted-foreground">Global leadership in industrial innovation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
<span className="text-muted-foreground">World-class solutions that set new standards</span>
                        </div>
                        <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <span className="text-muted-foreground">Transformation of industrial operations</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6">
                        <Target className="w-10 h-10 text-white" />
                      </div>
<div className="text-8xl font-bold text-primary/20 mb-4">2030</div>
<p className="text-lg text-muted-foreground">Our journey to global leadership</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
<section className="relative section-padding bg-background overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20px_20px,rgba(156,146,172,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
      <Badge className="mb-6 bg-secondary text-secondary-foreground border-0 shadow-lg">
                Our Mission
              </Badge>
      <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                <span className="gradient-text">MISSION</span>
              </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                How we make it happen
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden max-w-6xl mx-auto">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
<h3 className="text-3xl font-bold text-foreground mb-6">
                        EMPOWERING THROUGH INTELLIGENCE
                      </h3>
<p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Every day, we wake up with one purpose: to empower our partners and clients through 
                        intelligent, customer-centric, data-driven solutions. We enhance safety, optimize 
                        performance, and eliminate inefficiencies—one innovation at a time.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
<span className="text-muted-foreground">Intelligent solutions that empower</span>
                        </div>
                        <div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-primary rounded-full"></div>
<span className="text-muted-foreground">Customer-centric approach to every challenge</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
<span className="text-muted-foreground">Performance optimization through data</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-8xl font-bold text-foreground/20 mb-4">DAILY</div>
                      <p className="text-lg text-muted-foreground">Our commitment to excellence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
<section className="relative section-padding bg-primary/5 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20px_20px,rgba(156,146,172,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
                Our Core Values
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                <span className="gradient-text">
                  CORE VALUES
                </span>
              </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide us
              </p>
            </motion.div>

            {/* State-of-the-Art Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "GOOD PEOPLE",
                  description: "We are honest and ethical people who do the right thing and address difficult situations tactfully with a firm, fair and consistent approach.",
                  icon: Shield,
              color: "bg-primary",
              gradient: "",
              bgGradient: "bg-muted",
              borderColor: "border-slate-200/50",
              iconColor: "text-primary"
            },
            {
              title: "TEAMMATES",
                  description: "We work together to create and maintain a positive and supportive work environment, while at all times, holding each other accountable through open, respectful and straight-forward communication.",
                  icon: Users,
              color: "bg-secondary",
              gradient: "",
              bgGradient: "bg-muted",
              borderColor: "border-slate-200/50",
              iconColor: "text-secondary"
            },
            {
              title: "COMMITTED",
                  description: "We show up, every day, for each other and our customers. With integrity and conviction, we are driven to perform at a higher level in order to fuel success and fulfillment for our coworkers, customers and vendors.",
                  icon: Target,
              color: "bg-accent",
              gradient: "",
              bgGradient: "bg-muted",
              borderColor: "border-slate-200/50",
              iconColor: "text-accent"
            },
            {
              title: "OWN IT",
                  description: "We accept personal accountability to ensure that each assignment is completed professionally, efficiently and safely, while pursuing the constant goal of producing successful projects and satisfied customers.",
                  icon: Award,
              color: "bg-primary",
              gradient: "",
              bgGradient: "bg-muted",
              borderColor: "border-slate-200/50",
              iconColor: "text-primary"
            }
          ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Floating Background Elements */}
                  <div className="absolute inset-0 bg-muted/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main Card */}
                  <Card className="relative glass-morphism border-slate-300/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden h-full">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Icon Background with Glow Effect */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative h-full flex flex-col">
                      {/* Icon Section */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                          <value.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-muted-foreground">Value #{index + 1}</div>
                          <div className="text-2xl font-bold text-foreground">{index + 1}</div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {value.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {value.description}
                      </p>
                      
                      {/* Bottom Accent */}
                      <div className="mt-6 pt-4 border-t border-slate-200/50">
                        <div className="flex justify-center">
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Our Purpose Section */}
<section className="relative section-padding bg-background overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.03)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-6 bg-primary text-primary-foreground border-0 shadow-lg">
                Our Purpose
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                OUR <span className="gradient-text">PURPOSE</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                To revolutionize industrial safety and efficiency through innovative technology, 
                empowering organizations to achieve the highest level of protection while driving 
                sustainable growth and operational excellence.
              </p>
            </motion.div>

            {/* Main Purpose Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="glass-morphism border-slate-300/30 shadow-2xl overflow-hidden">
                <CardContent className="p-12 relative">
            <div className="absolute inset-0 bg-muted/50"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                    </div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-6">
                      Transforming Industrial Operations Through Innovation
                    </h3>
            <p className="text-xl text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                      We exist to bridge the gap between traditional industrial practices and cutting-edge technology, 
                      creating solutions that not only protect assets and personnel but also drive measurable business outcomes. 
                      Our purpose is to be the catalyst for industry transformation, one innovation at a time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Purpose Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
<h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
<Shield className="w-8 h-8 text-primary mr-3" />
                  Safety First, Always
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Protect What Matters Most</h4>
<p className="text-muted-foreground">Ensuring the safety of personnel and protecting critical infrastructure through advanced monitoring and predictive analytics.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Prevent Before React</h4>
<p className="text-muted-foreground">Proactive identification of potential risks and vulnerabilities before they become critical issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Compliance Excellence</h4>
<p className="text-muted-foreground">Maintaining the highest standards of regulatory compliance while exceeding industry benchmarks.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
<h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
<Zap className="w-8 h-8 text-primary mr-3" />
                  Innovation-Driven Growth
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Technology Leadership</h4>
<p className="text-muted-foreground">Pioneering next-generation solutions that set new industry standards and drive competitive advantage.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Operational Excellence</h4>
<p className="text-muted-foreground">Streamlining processes and maximizing efficiency through intelligent automation and data-driven insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
<h4 className="font-semibold text-foreground mb-2">Sustainable Impact</h4>
<p className="text-muted-foreground">Creating lasting value that benefits not just our clients, but the industry and communities we serve.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
<h3 className="text-2xl font-bold text-foreground mb-12">
                Our Purpose in Action
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                number: "40%",
                    label: "Reduction in Safety Incidents",
                    description: "Through proactive monitoring and predictive analytics",
                    icon: TrendingDown,
                    color: "bg-secondary"
                  },
                  {
                    number: "60%",
                    label: "Increase in Operational Efficiency",
                    description: "Streamlined processes and intelligent automation",
                    icon: Zap,
                    color: "bg-primary"
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction Rate",
                    description: "Consistent delivery of exceptional value and results",
                    icon: Heart,
                    color: "bg-accent"
                  }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.number}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>



        {/* Future Roadmap */}
<section className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">
                Future Vision
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Roadmap</span> to the Future
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building on our legacy of innovation, we&apos;re charting a course toward even greater
                impact in industrial safety and technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "AI-Powered Insights",
                  timeframe: "2024-2025",
                  description: "Integrating artificial intelligence and machine learning into intelliSPEC™ to provide predictive analytics and automated decision-making capabilities.",
                  icon: Zap,
                  color: "bg-primary",
                  features: ["Predictive maintenance", "AI-driven analytics", "Automated reporting"]
                },
                {
                  phase: "Phase 2",
                  title: "Global Expansion",
                  timeframe: "2025-2026",
                  description: "Expanding our reach to serve clients in 10+ countries, establishing regional hubs and local partnerships.",
                  icon: Globe,
                  color: "bg-secondary",
                  features: ["10+ countries", "Regional hubs", "Local partnerships"]
                },
                {
                  phase: "Phase 3",
                  title: "Industry 4.0 Integration",
                  timeframe: "2026-2027",
                  description: "Full integration with Industry 4.0 standards, IoT connectivity, and real-time monitoring across entire industrial ecosystems.",
                  icon: Rocket,
                  color: "bg-accent",
                  features: ["IoT connectivity", "Real-time monitoring", "Industry 4.0 standards"]
                },
                {
                  phase: "Phase 4",
                  title: "Sustainability Focus",
                  timeframe: "2027-2028",
                  description: "Leading the charge in sustainable industrial practices with green technology solutions and carbon footprint reduction tools.",
                  icon: Shield,
                  color: "bg-secondary",
                  features: ["Green technology", "Carbon reduction", "Sustainable practices"]
                },
                {
                  phase: "Phase 5",
                  title: "Global Standard",
                  timeframe: "2028-2030",
                  description: "Achieving our vision of becoming the global standard for data-driven asset management across all industrial sectors.",
                  icon: Star,
                  color: "bg-primary",
                  features: ["Global standard", "All sectors", "Industry leadership"]
                },
                {
                  phase: "Phase 6",
                  title: "Next Generation",
                  timeframe: "2030+",
                  description: "Pioneering the next generation of industrial technology with cutting-edge innovations that transform how industries operate.",
                  icon: Lightbulb,
                  color: "bg-accent",
                  features: ["Next-gen technology", "Cutting-edge innovation", "Industry transformation"]
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <phase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-foreground">{phase.phase}</div>
                          <div className="text-xs text-muted-foreground">{phase.timeframe}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {phase.description}
                      </p>
                      
                      <div className="space-y-2">
                        {phase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                              <ArrowRight className="w-3 h-3 text-primary" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* The Story Continues */}
<section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
      <Badge className="mb-6 bg-primary text-primary-foreground border-0">
                Our Narrative
              </Badge>
      <h2 className="text-4xl font-bold text-foreground mb-6">The <span className="gradient-text">Story</span> Continues</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every chapter of our story is written by the people who believe in our mission,
                the challenges we&apos;ve overcome, and the innovations we&apos;ve pioneered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Beginning",
                  subtitle: "Where It All Started",
                  description: "In 1997, two brothers with a vision saw an opportunity to transform industrial safety. They didn't just want to provide services—they wanted to set new standards for what was possible in the industry.",
                  icon: Flag,
                  color: "bg-primary",
                  stats: "25+ Years"
                },
                {
                  title: "The Transformation",
                  subtitle: "Innovation Meets Industry",
                  description: "As technology evolved, so did our approach. We didn't just adapt to change—we became the change. intelliSPEC™ wasn't just a product; it was a revolution in how industries think about data and safety.",
                  icon: Zap,
                  color: "bg-secondary",
                  stats: "40% Efficiency"
                },
                {
                  title: "The Future",
                  subtitle: "What's Next",
                  description: "Today, we're not just following industry trends—we're creating them. Our roadmap extends beyond technology to encompass sustainability, global impact, and the next generation of industrial excellence.",
                  icon: Rocket,
                  color: "bg-accent",
                  stats: "Global Vision"
                }
              ].map((chapter, index) => (
                <motion.div
                  key={chapter.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 ${chapter.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <chapter.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-2">
                          {chapter.stats}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                        {chapter.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                        {chapter.subtitle}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-center">
                        {chapter.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}
  <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
  Ready to Experience the <span className="text-primary-foreground/80">Higher Level of Protection</span>?
              </h2>
  <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Join the hundreds of companies that trust PK Companies and intelliSPEC™ 
                to transform their industrial operations and drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="/demo"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Schedule a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

   
      </main>
    </>
  )
} 
