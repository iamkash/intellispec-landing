"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Clock,
  Shield,
  Users,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Crown,
  Rocket,
  Globe,
  Target,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  competitive: string;
}

const metrics: Metric[] = [
  {
    id: "time-savings",
    value: 65,
    suffix: "%",
    label: "Faster Inspections",
    description:
      "Reduced inspection time from days to hours with digital workflows",
    icon: Clock,
    color: "text-[hsl(var(--primary))]",
    competitive: "vs. 40% industry average",
  },
  {
    id: "compliance",
    value: 100,
    suffix: "%",
    label: "Audit Ready",
    description: "Complete document traceability and regulatory compliance",
    icon: Shield,
    color: "text-[hsl(var(--accent))]",
    competitive: "vs. 85% industry average",
  },
  {
    id: "cost-reduction",
    value: 40,
    suffix: "%",
    label: "Cost Reduction",
    description: "Lower operational costs through streamlined processes",
    icon: TrendingUp,
    color: "text-[hsl(var(--secondary))]",
    competitive: "vs. 25% industry average",
  },
  {
    id: "productivity",
    value: 75,
    suffix: "%",
    label: "Productivity Gain",
    description: "Increased team productivity with automated workflows",
    icon: Users,
    color: "text-[hsl(var(--primary))]",
    competitive: "vs. 45% industry average",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsMetrics() {
  return (
    <div className="section-padding relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-24 h-24 bg-[hsl(var(--primary))]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-[hsl(var(--muted))]/5 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4 text-[hsl(var(--primary))] mr-2" />
            <span className="text-[hsl(var(--foreground))]">
              Market-Leading Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))] mb-6">
            Results That{" "}
            <span className="text-[hsl(var(--primary))]">
              Dominate the Market
            </span>
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto leading-relaxed">
            Measurable results from real implementations across industries. See
            how <span className="text-primary">intelli</span>
            <span className="text-secondary font-bold">SPEC</span> consistently
            outperforms competitors
            <span className="font-semibold text-[hsl(var(--foreground))]">
              {" "}
              by 20-40% across all metrics
            </span>{" "}
            and delivers quantifiable ROI.
          </p>
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
                    Consistently outperform industry averages by 20-40%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">
                    50+
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Fortune 500 Companies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--accent))]">
                    100%
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Compliance Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--secondary))]">
                    4-6
                  </div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))]">
                    Weeks to Deploy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA with Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-[hsl(var(--border))]">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-8">
                Ready to Achieve Market-Leading Results?
              </h3>

              {/* Proven Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--primary))]/10 flex items-center justify-center mx-auto mb-3 shadow-lg border border-[hsl(var(--primary))]/20">
                      <metric.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div className="mb-2">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </div>
                    <h4 className="text-sm font-bold text-[hsl(var(--foreground))] mb-1">
                      {metric.label}
                    </h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-tight mb-2">
                      {metric.description}
                    </p>
                    <div className="inline-flex items-center px-2 py-1 bg-[hsl(var(--primary))]/10 rounded-full text-xs font-semibold text-[hsl(var(--primary))]">
                      <TrendingUp className="w-2 h-2 mr-1" />
                      {metric.competitive}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-[hsl(var(--primary))]/20">
                    <Crown className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                    Market Leadership
                  </h4>
                  <p className="text-base text-[hsl(var(--muted-foreground))]">
                    Real results from 50+ industrial facilities with 20-40%
                    better performance than competitors.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-[hsl(var(--accent))]/20">
                    <Rocket className="w-6 h-6 text-[hsl(var(--accent))]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                    Rapid Implementation
                  </h4>
                  <p className="text-base text-[hsl(var(--muted-foreground))]">
                    Average deployment time of 4-6 weeks with immediate
                    productivity gains and cost savings.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--secondary))]/10 rounded-lg flex items-center justify-center mx-auto mb-3 border border-[hsl(var(--secondary))]/20">
                    <Globe className="w-6 h-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                    Risk-Free Start
                  </h4>
                  <p className="text-base text-[hsl(var(--muted-foreground))]">
                    Start with a pilot program and scale based on proven results
                    and measurable outcomes.
                  </p>
                </div>
              </div>

              <div className="bg-[hsl(var(--muted))]/50 rounded-xl p-6 mb-8 border border-[hsl(var(--border))]">
                <h4 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                  What Sets <span className="text-primary">intelli</span>
                  <span className="text-secondary font-bold">SPEC</span> Apart
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                        20-40% better performance
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        Consistently outperform industry averages across all
                        metrics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[hsl(var(--accent))] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                        Industry-specific expertise
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        Built by industrial experts, not generic software
                        developers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                        Proven track record
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        50+ Fortune 500 companies trust{" "}
                        <span className="text-primary">intelli</span>
                        <span className="text-secondary font-bold">SPEC</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-[hsl(var(--secondary))] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                        Rapid time-to-value
                      </p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        See results in 4-6 weeks vs. 6-12 months with
                        competitors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base text-[hsl(var(--muted-foreground))] mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>
                  Don&apos;t wait to see these results in your operations.
                </strong>{" "}
                Join the 50+ facilities that have already transformed their
                processes with <span className="text-primary">intelli</span>
                <span className="text-secondary font-bold">SPEC</span> and are
                seeing
                <span className="font-semibold text-[hsl(var(--primary))]">
                  {" "}
                  20-40% better results than their competitors.
                </span>
                Calculate your potential ROI and see exactly how much you could
                save.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4"
                >
                  <Link href="/pricing">
                    <span>See Pricing & Estimate ROI</span>
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4"
                >
                  <Link href="/demo">
                    <span>See Market Leadership in Action</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
