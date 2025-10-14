"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Shield, 
  Target, 
  Award, 
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  Lightbulb,
  Heart,
  Briefcase,
  GraduationCap,
  Eye,
  Users2,
  ExternalLink,
  Send
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function CareersPage() {

  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs to keep you healthy and happy.",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive salaries, 401(k) matching, stock options, and performance-based bonuses.",
      color: "bg-secondary"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and remote work options to support your lifestyle.",
      color: "bg-accent"
    },
    {
      icon: GraduationCap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, training programs, and career advancement paths.",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment, team events, and a supportive community of professionals.",
      color: "bg-secondary"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Work with cutting-edge technology and be part of transforming industrial safety.",
      color: "bg-accent"
    }
  ]

  const companyValues = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety in everything we do, both for our clients and our team members."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering the highest quality solutions."
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster a collaborative work environment."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to solve complex industrial challenges with technology."
    }
  ]



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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/images/logos/light-logo.png"
                alt="IntelliSpec - Where Data Meets Ingenuity"
                width={280}
                height={63}
                className="mx-auto"
              />
            </motion.div>

            <Badge className="mb-8 bg-primary text-primary-foreground border-0 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build the <span className="gradient-text">Future</span><br />
              of Industrial Safety
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Join a team of innovators, problem-solvers, and industry pioneers. Help us transform 
              how industries approach safety and efficiency through our <span className="text-primary font-semibold">10 integrated modules</span>.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "99%", label: "Employee Satisfaction", description: "Happy team members" },
                { number: "10", label: "Integrated Modules", description: "Complete platform" },
                { number: "25+", label: "Years Combined", description: "Industry experience" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0">
              Why Work With Us
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join a <span className="gradient-text">Mission-Driven</span> Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re not just building software—we&apos;re building a safer, more efficient future for industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Make a Real Impact
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every line of code you write, every feature you build, directly contributes to making industrial workplaces safer. 
                Our <span className="text-primary font-semibold">10 integrated modules</span> help prevent accidents, save lives, and protect workers across multiple industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Safety First</h4>
                    <p className="text-muted-foreground">Your work directly prevents workplace accidents and injuries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Industry Leader</h4>
                    <p className="text-muted-foreground">Work with cutting-edge technology in industrial IoT and safety</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Reach</h4>
                    <p className="text-muted-foreground">Your solutions impact workers across multiple countries and industries</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-card shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Rocket className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Fast-Growing Company
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join us at an exciting time of rapid growth and expansion. Your contributions will shape the future of our platform and company.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Industries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">1000+</div>
                      <div className="text-sm text-muted-foreground">Lives Protected</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-accent text-accent-foreground border-0">
              Benefits & Perks
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Take Care of <span className="gradient-text">Our People</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    {(() => {
                      const solids = [
                        "bg-primary",   // NAVY
                        "bg-secondary", // BLUE
                        "bg-accent"     // TEAL
                      ]
                      const s = solids[index % solids.length]
                      return (
                        <div className={`w-16 h-16 ${s} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>
                      )
                    })()}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">
              Open Positions
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your skills and career goals.
            </p>
          </motion.div>

          {/* Job Portal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Briefcase className="w-12 h-12 text-accent-foreground" />
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  View All Open Positions
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  We use ADP Workforce Now to manage our recruitment process. Click below to access our official job portal where you can browse all current openings, submit applications, and track your application status.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Badge className="bg-muted text-foreground px-4 py-2 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Secure Application Portal
                  </Badge>
                  <Badge className="bg-muted text-foreground px-4 py-2 text-sm font-medium">
                    <Shield className="w-4 h-4 mr-2" />
                    Official Company Portal
                  </Badge>
                  <Badge className="bg-muted text-foreground px-4 py-2 text-sm font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    Real-time Updates
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=7a9b5f5c-53b0-4726-ac49-b9bb7880a9f5&ccId=9200566689546_2&lang=en_US" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Access Job Portal</span>
                  </a>
                  
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll be redirected to our secure ADP Workforce Now recruitment portal
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0">Application Process</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How to <span className="gradient-text">Apply</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our simple and transparent application process ensures you have the best experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application through our online portal with your resume and cover letter.",
                icon: Send
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our team reviews your application and reaches out within 48 hours.",
                icon: Eye
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Meet with our team through technical and cultural fit interviews.",
                icon: Users
              },
              {
                step: "04",
                title: "Offer & Onboarding",
                description: "Receive your offer and join our team with a comprehensive onboarding program.",
                icon: Award
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
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
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our <span className="text-primary-foreground/80">Team</span>?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Don&apos;t see the perfect role? Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=7a9b5f5c-53b0-4726-ac49-b9bb7880a9f5&ccId=9200566689546_2&lang=en_US" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>View All Positions</span>
              </a>
              <a 
                href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=7a9b5f5c-53b0-4726-ac49-b9bb7880a9f5&ccId=9200566689546_2&lang=en_US" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                <span>Submit Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 
