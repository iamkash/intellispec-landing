"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
              Let&apos;s Connect
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Contact <span className="gradient-text">IntelliSpec</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Speak with our team about <span className="text-primary font-semibold">pricing, products, or partnerships</span>. Discover how our <span className="text-primary font-semibold">10 integrated modules</span> can transform your operations.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[{
                icon: Mail,
                title: 'Email',
                value: 'hello@intellispec.ai',
                description: 'Response within 24 hours'
              },{
                icon: Phone,
                title: 'Phone',
                value: '+1 (555) 000‑0000',
                description: 'Mon-Fri, 8AM-6PM CST'
              },{
                icon: MapPin,
                title: 'Headquarters',
                value: 'Houston, TX',
                description: 'Global • Remote-First'
              }].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground font-medium mb-1">{item.value}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Custom <span className="gradient-text">Walkthrough</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-muted-foreground">Our team responds within one business day</p>
            </div>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  )
}