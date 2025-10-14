"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Construction, 
  Clock, 
  ArrowLeft,
  Mail,
  Phone
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ComingSoonPage() {
  return (
    <>
      <main className="min-h-screen">
     
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-blue-600 to-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Construction className="w-12 h-12 text-white" />
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Coming <span className="gradient-text">Soon</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                We&apos;re working hard to bring you this content. Stay tuned for updates!
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-4 mb-8"
              >
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-slate-600">Expected: Q1 2024</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white border-0 shadow-lg hover:shadow-xl">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Need Help Now?
              </h2>
              <p className="text-slate-600 mb-8">
                While we&apos;re building this page, our team is here to help you with any questions or immediate needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Support</h3>
                  <p className="text-slate-600 mb-4">Get help via email</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:support@intellispec.com">support@intellispec.com</a>
                  </Button>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-6">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone Support</h3>
                  <p className="text-slate-600 mb-4">Call us directly</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </main>
    </>
  )
} 