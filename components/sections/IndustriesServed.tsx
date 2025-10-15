"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  HardHat,
  Zap,
  Shield,
  Settings,
  Users,
  FileText,
  Calendar,
  Eye,
  TestTube,
  UserCheck,
  Award,
  Target,
  Globe,
  Rocket,
  Crown,
  CheckCircle,
  TrendingUp,
  Database,
  Cog,
  Search,
  Network,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";

const industryCategories = [
  {
    name: "Energy & Resources",
    description:
      "From resource extraction to power generation, we optimize critical infrastructure operations with predictive maintenance and regulatory compliance.",
    icon: Zap,
    keyChallenges: [
      "Asset integrity",
      "Safety compliance",
      "Regulatory reporting",
      "Operational efficiency",
    ],
    valueProposition:
      "Unified operations management across energy value chains",
    metrics: { efficiency: "35-50%", compliance: "100%", roi: "250-400%" },
    industries: ["Oil & Gas", "Mining", "Power Generation", "Utilities"],
  },
  {
    name: "Transportation & Aerospace",
    description:
      "Precision operations for aerospace manufacturing and transportation logistics, ensuring safety, compliance, and operational excellence.",
    icon: Rocket,
    keyChallenges: [
      "Quality assurance",
      "Supply chain optimization",
      "Maintenance planning",
      "Regulatory compliance",
    ],
    valueProposition:
      "End-to-end solutions for transportation and aerospace ecosystems",
    metrics: { efficiency: "40-60%", compliance: "100%", roi: "300-500%" },
    industries: ["Aerospace", "Automotive", "Maritime", "Logistics"],
  },
  {
    name: "Manufacturing & Process Industries",
    description:
      "Comprehensive manufacturing intelligence for process industries requiring strict quality control and operational optimization.",
    icon: Cog,
    keyChallenges: [
      "Quality control",
      "Process optimization",
      "Asset management",
      "Regulatory compliance",
    ],
    valueProposition:
      "Intelligent manufacturing operations across all process sectors",
    metrics: { efficiency: "25-45%", compliance: "100%", roi: "200-350%" },
    industries: [
      "Manufacturing",
      "Pharmaceutical",
      "Chemical",
      "Food Processing",
    ],
  },
];

const industryStats = [
  { label: "Industries Served", value: "11+", icon: Globe },
  { label: "Fortune 500 Companies", value: "50+", icon: Award },
  { label: "Average Efficiency Gain", value: "35%", icon: TrendingUp },
  { label: "Compliance Rate", value: "100%", icon: Shield },
];

const successStories = [
  {
    category: "Energy",
    stat: "40% reduction in unplanned downtime",
    industry: "Oil & Gas Refineries",
  },
  {
    category: "Aerospace",
    stat: "60% faster compliance reporting",
    industry: "Aircraft Manufacturing",
  },
  {
    category: "Manufacturing",
    stat: "25% cost reduction in quality control",
    industry: "Process Manufacturing",
  },
];

export default function IndustriesServed() {
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
          <h2 className="text-5xl md:text-6xl font-extrabold text-[hsl(var(--foreground))] mb-4">
            Industry{" "}
            <span className="text-[hsl(var(--primary))]">Transformation</span>{" "}
            at Scale
          </h2>
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] max-w-5xl mx-auto leading-relaxed">
            Whether you&apos;re in energy production, transportation logistics,
            or complex manufacturing,
            <span className="font-semibold text-[hsl(var(--foreground))]">
              {" "}
              <span className="text-primary">intelli</span>
              <span className="text-secondary font-bold">SPEC</span> adapts to
              your industry&apos;s unique challenges and regulatory
              requirements.
            </span>
          </p>

          {/* Industry Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industryStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-[hsl(var(--primary))]/5 rounded-xl border border-[hsl(var(--primary))]/10"
                >
                  <stat.icon className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[hsl(var(--foreground))] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-[hsl(var(--accent))]/5 rounded-xl border border-[hsl(var(--accent))]/10 min-w-[200px]"
                >
                  <div className="text-lg font-bold text-[hsl(var(--accent))] mb-1">
                    {story.stat}
                  </div>
                  <div className="text-sm font-semibold text-[hsl(var(--foreground))] mb-1">
                    {story.category}
                  </div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))]">
                    {story.industry}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lifecycle message */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4"
            aria-label="Lifecycle"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-sm md:text-base font-semibold border border-[hsl(var(--secondary))]/20">
              Inspect
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm md:text-base font-semibold border border-[hsl(var(--border))]">
              Assess
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm md:text-base font-semibold border border-[hsl(var(--primary))]/20">
              Plan
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm md:text-base font-semibold border border-[hsl(var(--border))]">
              Execute
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-sm md:text-base font-semibold border border-[hsl(var(--accent))]/20">
              Comply
            </div>
            <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm md:text-base font-semibold border border-[hsl(var(--border))]">
              Monitor
            </div>
          </div>
        </motion.div>

        {/* Competitive Advantage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[hsl(var(--border))]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[hsl(var(--primary-foreground))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                    Industry-Leading Performance
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    AI-powered transformation across all industrial sectors
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                    11+
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Industries Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--accent))]">
                    50+
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Fortune 500 Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--secondary))]">
                    35%
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Avg Efficiency Gain
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                    200-500%
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    ROI Range
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {industryCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: {
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="group"
            >
              <motion.div
                className="glass-morphism rounded-xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/30 relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-12 translate-x-12 bg-[hsl(var(--muted))]"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full translate-y-10 -translate-x-10 bg-[hsl(var(--muted))]"></div>
                </div>

                {/* Category Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mx-auto ${
                      index === 0
                        ? "bg-[hsl(var(--primary))]"
                        : index === 1
                          ? "bg-[hsl(var(--accent))]"
                          : "bg-[hsl(var(--secondary))]"
                    }`}
                  >
                    <category.icon className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed text-sm">
                    {category.description}
                  </p>

                  {/* Industries Served */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center mb-3">
                      {category.industries.map((industry) => (
                        <span
                          key={industry}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[hsl(var(--muted))]/20 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--muted))]/30"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-[hsl(var(--primary))]/10 rounded-lg">
                      <div className="text-xs font-semibold text-[hsl(var(--primary))]">
                        {category.metrics.efficiency}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        Efficiency
                      </div>
                    </div>
                    <div className="text-center p-2 bg-[hsl(var(--accent))]/10 rounded-lg">
                      <div className="text-xs font-semibold text-[hsl(var(--accent))]">
                        {category.metrics.roi}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        ROI
                      </div>
                    </div>
                    <div className="text-center p-2 bg-[hsl(var(--secondary))]/10 rounded-lg">
                      <div className="text-xs font-semibold text-[hsl(var(--secondary))]">
                        {category.metrics.compliance}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))]">
                        Compliance
                      </div>
                    </div>
                  </div>

                  {/* Value Proposition */}
                  <div className="p-3 bg-[hsl(var(--primary))]/5 rounded-lg border border-[hsl(var(--primary))]/10">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[hsl(var(--primary))]">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs leading-tight">
                        {category.valueProposition}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[hsl(var(--primary))]/5 rounded-3xl p-8 md:p-12 border border-[hsl(var(--primary))]/20 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
                  Ready to{" "}
                  <span className="text-[hsl(var(--primary))]">
                    Transform Your Industry?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed">
                  Join 50+ Fortune 500 companies achieving{" "}
                  <span className="font-semibold text-[hsl(var(--primary))]">
                    35% average efficiency gains
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[hsl(var(--accent))]">
                    100% compliance rates
                  </span>{" "}
                  with <span className="text-primary">intelli</span>
                  <span className="text-secondary font-bold">SPEC</span>&apos;s
                  industry-leading platform.
                </p>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                <div className="text-center p-4 bg-[hsl(var(--background))]/80 backdrop-blur-sm rounded-xl border border-[hsl(var(--border))]">
                  <Award className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    Fortune 500 Trusted
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    50+ enterprise deployments
                  </p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--background))]/80 backdrop-blur-sm rounded-xl border border-[hsl(var(--border))]">
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--accent))] mx-auto mb-2" />
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    Proven ROI
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    200-500% returns within 12-18 months
                  </p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--background))]/80 backdrop-blur-sm rounded-xl border border-[hsl(var(--border))]">
                  <Shield className="w-8 h-8 text-[hsl(var(--secondary))] mx-auto mb-2" />
                  <h3 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                    100% Compliance
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Zero regulatory violations
                  </p>
                </div>
              </motion.div>

              {/* Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Schedule Industry Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 hover:text-[hsl(var(--primary))] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/industries">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Explore All Industries
                  </Link>
                </Button>
              </motion.div>

              {/* Urgency/Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-[hsl(var(--border))]/50"
              >
                <p className="text-sm text-[hsl(var(--muted-foreground))] italic">
                  &ldquo;Don&apos;t let outdated systems hold your industry
                  back. Join the digital transformation leaders today.&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
