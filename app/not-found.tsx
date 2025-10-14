'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/logos/light-logo.png"
              alt="IntelliSpec - Where Data Meets Ingenuity"
              width={240}
              height={54}
              className="mx-auto opacity-80"
            />
          </motion.div>

          {/* 404 Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back to exploring our industrial platform solutions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/modules">
                <Search className="w-5 h-5 mr-2" />
                Explore Modules
              </Link>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/modules" className="text-primary hover:text-primary/80 transition-colors">
                All Modules
              </Link>
              <Link href="/industries" className="text-primary hover:text-primary/80 transition-colors">
                Industries
              </Link>
              <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                Contact
              </Link>
              <Link href="/demo" className="text-primary hover:text-primary/80 transition-colors">
                Book Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


