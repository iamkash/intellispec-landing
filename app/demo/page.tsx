"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Play,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Star,
  HardHat,
  BarChart3,
  Video,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const demoFeatures = [
  {
    title: "Live Platform Walkthrough",
    description: "See intelliSPEC in action with real data and workflows",
    icon: Play,
    color: "from-primary to-primary",
  },
  {
    title: "Industry-Specific Examples",
    description: "Tailored demonstrations for your specific industry",
    icon: HardHat,
    color: "from-secondary to-secondary",
  },
  {
    title: "ROI Analysis",
    description: "Understand the potential impact on your operations",
    icon: TrendingUp,
    color: "from-accent to-accent",
  },
  {
    title: "Q&A Session",
    description: "Get answers to your specific questions and concerns",
    icon: Users,
    color: "from-primary to-primary",
  },
];

const demoStats = [
  { label: "Average Demo Duration", value: "45 min", icon: Clock },
  { label: "Customization Level", value: "100%", icon: Zap },
  { label: "Follow-up Support", value: "Included", icon: Shield },
  { label: "Satisfaction Rate", value: "98%", icon: Star },
];

const contactMethods = [
  {
    title: "Schedule Online",
    description: "Book your demo through our calendar",
    icon: Calendar,
    action: "Book Demo",
    href: "#calendar",
    color: "from-primary to-primary",
  },
  {
    title: "Call Us",
    description: "Speak directly with our team",
    icon: Phone,
    action: "Call Now",
    href: "tel:+1-555-123-4567",
    color: "from-secondary to-secondary",
  },
  {
    title: "Email Us",
    description: "Send us your requirements",
    icon: Mail,
    action: "Send Email",
    href: "mailto:demo@intellispec.com",
    color: "from-accent to-accent",
  },
];

export default function DemoPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-muted/40 to-muted/60 animate-background-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
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
                  alt="intelliSPEC - Where Data Meets Ingenuity"
                  width={280}
                  height={63}
                  className="mx-auto"
                />
              </motion.div>

              <Badge className="mb-8 bg-primary text-primary-foreground border-0 shadow-lg">
                <Play className="w-4 h-4 mr-2" />
                Live Demo Experience
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                See Our Platform
                <br />
                <span className="gradient-text">In Action</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience how our{" "}
                <span className="text-primary font-semibold">
                  10 precision-engineered modules
                </span>{" "}
                transform industrial operations. From{" "}
                <span className="text-primary font-semibold">
                  intelliINSPECT
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">intelliNDT</span>{" "}
                to{" "}
                <span className="text-primary font-semibold">
                  intelliVISION
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  intelliSAFETY
                </span>{" "}
                - discover how our complete integrated platform can
                revolutionize your business.
              </p>

              {/* Demo Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {demoStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Schedule Demo</span>
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  <span>Watch Overview</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Demo Features */}
        <section id="features" className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What to Expect in Your{" "}
                <span className="gradient-text">Demo</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our demos are designed to show you exactly how intelliSPEC can
                solve your specific challenges with{" "}
                <span className="text-primary font-semibold">live data</span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  real workflows
                </span>
                .
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="section-padding glass-section">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Platform <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Get a quick overview of our{" "}
                <span className="text-primary font-semibold">
                  10 integrated modules
                </span>{" "}
                before your personalized demo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/80 rounded-2xl shadow-2xl flex items-center justify-center glass-card">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    intelliSPEC Platform Overview
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Watch our comprehensive platform walkthrough
                  </p>
                  <button className="btn-primary">
                    <Play className="w-5 h-5 mr-2" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Schedule Demo Section */}
        <section id="schedule" className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Schedule Your <span className="gradient-text">Demo</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your preferred time and we&apos;ll customize the demo for
                your specific needs and industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-morphism rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground mb-3">
                            {method.description}
                          </p>
                          <Link
                            href={method.href}
                            className="btn-primary inline-flex items-center"
                          >
                            <span>{method.action}</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Schedule Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Quick Schedule
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                  <button className="w-full btn-primary py-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Schedule Demo</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their
                industrial operations with our{" "}
                <span className="text-white font-semibold">
                  10 integrated modules
                </span>
                . Experience the difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#schedule"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span>Schedule Your Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 text-lg"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
