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
  Heart,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Trophy,
  Eye,
  Brain,
  Users2
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Steward Records",
      title: "Chief Executive Officer",
      subtitle: "Visionary Leader & Industry Pioneer",
      image: "/images/leadership/ceo.jpg",
      bio: "Stewart Records serves as the Chief Executive Officer of PK Companies, leading the organization's strategic vision and driving innovation in industrial safety and technology. With extensive experience in executive leadership and industry transformation, Steward has been instrumental in positioning PK Companies as a leader in the industrial safety technology sector.",
      achievements: [
        "Led PK Companies' transformation into a technology-driven industry leader",
        "Expanded operations across 40+ states and 5 countries",
        "Pioneered the development of intelliSPEC™ platform",
        "Established strategic partnerships with major industrial corporations"
      ],
      expertise: ["Executive Leadership", "Strategic Planning", "Industry Relations", "Business Development"],
      education: "Executive Leadership Program, Harvard Business School",
      experience: "20+ Years in Executive Leadership",
      linkedin: "https://linkedin.com/in/steward-records",
      email: "steward.records@pkcompanies.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Kash Mohammed",
      title: "Vice President of Technology",
      subtitle: "Technology Visionary & Innovation Leader",
      image: "/images/leadership/vp-tech.jpg",
      bio: "Kash Mohammed leads PK Companies' technology division as Vice President of Technology, driving innovation and digital transformation across the organization. With deep expertise in software development, industrial IoT, and emerging technologies, Kash has been the architect behind the company's technological advancement and the development of cutting-edge safety solutions.",
      achievements: [
        "Architected and led development of intelliSPEC™ platform",
        "Built and manages team of 32+ in-house software developers",
        "Implemented advanced AI/ML capabilities for predictive analytics",
        "Spearheaded digital transformation initiatives across all divisions"
      ],
      expertise: ["Software Architecture", "Industrial IoT", "AI/ML Integration", "Digital Transformation"],
      education: "MS Computer Science, University of Texas",
      experience: "15+ Years in Technology Leadership",
      linkedin: "https://linkedin.com/in/kash-mohammed",
      email: "kash.mohammed@pkcompanies.com",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Matt Blankenship",
      title: "VP of Business Development",
      subtitle: "Strategic Growth & Market Expansion",
      image: "/images/leadership/vp-bd.jpg",
      bio: "Matt Blankenship serves as Vice President of Business Development, driving strategic growth initiatives and expanding PK Companies' market presence across diverse industrial sectors. With a proven track record in business development and client relations, Matt has been instrumental in establishing key partnerships and driving revenue growth.",
      achievements: [
        "Led expansion into 5 international markets",
        "Established partnerships with Fortune 500 industrial companies",
        "Achieved 40% year-over-year revenue growth",
        "Developed strategic alliances with technology partners"
      ],
      expertise: ["Business Development", "Strategic Partnerships", "Market Expansion", "Client Relations"],
      education: "MBA Business Administration, University of Houston",
      experience: "12+ Years in Business Development",
      linkedin: "https://linkedin.com/in/matt-blankenship",
      email: "matt.blankenship@pkcompanies.com",
      phone: "+1 (555) 123-4569"
    },
    {
      name: "Joshua Engelbrecht",
      title: "Head of Software Engineering",
      subtitle: "Engineering Excellence & Technical Leadership",
      image: "/images/leadership/head-eng.jpg",
      bio: "Joshua Engelbrecht leads PK Companies' software engineering team, overseeing the development and maintenance of the intelliSPEC™ platform and related technologies. With expertise in full-stack development, cloud architecture, and software engineering best practices, Joshua ensures the delivery of robust, scalable, and innovative software solutions.",
      achievements: [
        "Led development of intelliSPEC™ platform architecture",
        "Implemented DevOps and CI/CD pipelines for rapid deployment",
        "Reduced system downtime by 99.9% through robust engineering practices",
        "Mentored and developed engineering team of 20+ developers"
      ],
      expertise: ["Software Engineering", "Cloud Architecture", "DevOps", "Team Leadership"],
      education: "BS Computer Science, Texas A&M University",
      experience: "10+ Years in Software Engineering",
      linkedin: "https://linkedin.com/in/joshua-engelbrecht",
      email: "joshua.engelbrecht@pkcompanies.com",
      phone: "+1 (555) 123-4570"
    },
    {
      name: "Alex Umberger",
      title: "Head of Customer Success",
      subtitle: "Client Experience & Success Management",
      image: "/images/leadership/head-cs.jpg",
      bio: "Alex Umberger leads PK Companies' customer success initiatives, ensuring exceptional client experiences and driving customer satisfaction across all touchpoints. With a focus on building long-term relationships and maximizing client value, Alex has been instrumental in maintaining the company's 99.9% client satisfaction rate.",
      achievements: [
        "Maintained 99.9% client satisfaction rate across all services",
        "Implemented customer success programs for enterprise clients",
        "Reduced customer churn by 60% through proactive engagement",
        "Developed customer onboarding and training programs"
      ],
      expertise: ["Customer Success", "Client Relations", "Customer Experience", "Success Metrics"],
      education: "BS Business Administration, University of Texas",
      experience: "8+ Years in Customer Success",
      linkedin: "https://linkedin.com/in/alex-umberger",
      email: "alex.umberger@pkcompanies.com",
      phone: "+1 (555) 123-4571"
    },
    {
      name: "Shayna Marshall",
      title: "Head of Professional Services",
      subtitle: "Service Excellence & Implementation Leadership",
      image: "/images/leadership/head-ps.jpg",
      bio: "Shayna Marshall leads PK Companies' professional services division, overseeing the delivery of high-quality implementation, consulting, and support services to clients. With expertise in project management and service delivery, Shayna ensures successful deployments and optimal utilization of intelliSPEC™ solutions.",
      achievements: [
        "Led successful implementations for 200+ enterprise clients",
        "Developed standardized implementation methodologies",
        "Achieved 100% project delivery on time and within budget",
        "Established professional services best practices"
      ],
      expertise: ["Professional Services", "Project Management", "Implementation", "Service Delivery"],
      education: "MS Project Management, University of Houston",
      experience: "10+ Years in Professional Services",
      linkedin: "https://linkedin.com/in/shayna-marshall",
      email: "shayna.marshall@pkcompanies.com",
      phone: "+1 (555) 123-4572"
    }
  ]

  const leadershipValues = [
    {
      icon: Eye,
      title: "Visionary Leadership",
      description: "We see opportunities where others see challenges, driving innovation and transformation across the industry."
    },
    {
      icon: Brain,
      title: "Strategic Thinking",
      description: "Every decision is made with long-term impact in mind, ensuring sustainable growth and lasting value creation."
    },
    {
      icon: Users2,
      title: "Collaborative Approach",
      description: "We believe in the power of teamwork and partnership, both within our organization and with our clients."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We lead with honesty, transparency, and unwavering commitment to doing what's right for our people and clients."
    }
  ]

  const companyStats = [
    { number: "25+", label: "Years of Leadership", description: "Industry experience" },
    { number: "40+", label: "States Served", description: "National presence" },
    { number: "5", label: "Countries", description: "International reach" },
    { number: "99.9%", label: "Client Satisfaction", description: "Consistent excellence" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Overlays (match About) */}
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
              Leadership Team
            </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-8"
            >
              Meet Our{' '}
              <span className="relative">
                <span className="gradient-text">Leadership</span>
                
              </span>
            </motion.h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Visionary leaders driving innovation, safety, and excellence across the industrial landscape. 
              Our executive team combines decades of experience with forward-thinking strategies to transform 
              how industries approach safety and efficiency.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
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

      {/* Leadership Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-secondary text-secondary-foreground border-0">Our Leadership Philosophy</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Leading with <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team embodies the values that drive our success: vision, strategy, collaboration, and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
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

      {/* Executive Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary text-primary-foreground border-0">
              Executive Team
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Executives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seasoned professionals with decades of combined experience driving innovation and excellence across all aspects of our business.
            </p>
          </motion.div>

          {/* CEO and VP Technology - Side by Side Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {leadershipTeam.slice(0, 2).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-2xl h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Image */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block">
                        <div className="w-32 h-32 bg-primary rounded-3xl shadow-2xl overflow-hidden mx-auto">
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Users className="w-16 h-16 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 flex-grow">
                      <div className="text-center">
                        <Badge className="mb-4 bg-primary text-primary-foreground border-0">
                          {leader.title}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {leader.subtitle}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {leader.bio}
                      </p>



                      {/* Expertise */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Brain className="w-5 h-5 text-primary mr-2" />
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.slice(0, 3).map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-muted text-foreground text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="flex justify-center space-x-4 pt-4 border-t border-slate-200 mt-auto">
                        <a
                          href={`mailto:${leader.email}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </a>
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Leadership Team - Single Row */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
            <h3 className="text-2xl font-bold text-foreground mb-4">
                Leadership Team
              </h3>
            <p className="text-muted-foreground">
                Our dedicated leaders driving excellence across all aspects of our business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipTeam.slice(2).map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="mb-2 bg-primary text-primary-foreground border-0 text-xs">
                          {leader.title}
                        </Badge>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {leader.name}
                        </h4>
            <p className="text-sm text-muted-foreground mb-3">
                          {leader.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                        {leader.bio}
                      </p>



                      {/* Contact */}
                      <div className="flex justify-center space-x-3 pt-3 border-t border-border">
                        <a
                          href={`mailto:${leader.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Impact */}
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
              Leadership Impact
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Driving <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team&apos;s vision and strategic direction have positioned PK Companies as the industry leader in innovative safety solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Innovation Leadership", description: "Pioneering new technologies and approaches that set industry standards and drive competitive advantage.", color: "bg-primary" },
              { icon: Shield, title: "Safety Excellence", description: "Maintaining the highest safety standards while continuously improving processes and protocols.", color: "bg-secondary" },
              { icon: TrendingUp, title: "Sustainable Growth", description: "Building a foundation for long-term success through strategic planning and operational excellence.", color: "bg-accent" },
              { icon: Users, title: "Team Development", description: "Fostering a culture of excellence and empowering our people to reach their full potential.", color: "bg-primary" },
              { icon: Globe, title: "Global Expansion", description: "Expanding our reach and impact across borders while maintaining our commitment to quality.", color: "bg-secondary" },
              { icon: Award, title: "Industry Recognition", description: "Receiving accolades and recognition for our contributions to industrial safety and innovation.", color: "bg-accent" }
            ].map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <impact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {impact.description}
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
              Ready to Work with Our <span className="text-primary-foreground/80">Leadership Team</span>?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Connect with our executive team to discuss how PK Companies can transform your industrial operations 
              and drive success through innovative safety solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 
