"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SupportForm from "@/components/sections/SupportForm";

export default function SupportPage() {
  return (
    <div className="min-h-screen">
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
              <HardHat className="w-4 h-4 mr-2" />
              Expert Support Team
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Support <span className="gradient-text">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Get the help you need to maximize your{" "}
              <span className="text-primary font-semibold">
                <span className="text-primary">intelli</span>
                <span className="text-secondary font-bold">SPEC</span>{" "}
                experience
              </span>
              . Our expert support team is here to ensure your success across
              all <span className="text-primary font-semibold">10 modules</span>
              .
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <div className="text-muted-foreground">Platform Uptime</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  &lt;4h
                </div>
                <div className="text-muted-foreground">Response Time</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Support Form */}
      <SupportForm />
    </div>
  );
}
