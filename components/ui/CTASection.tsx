'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTAFeature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface CTABulletPoint {
  title: string
  description: string
}

interface CTASectionProps {
  mainHeading: string
  topFeatures: CTAFeature[]
  middleHeading: string
  bulletPoints: CTABulletPoint[]
  bottomText: string
  highlightedText: string
  primaryButton: {
    text: string
    href: string
    icon?: 'arrow' | 'play'
  }
  secondaryButton: {
    text: string
    href: string
    icon?: 'arrow' | 'play'
  }
}

export default function CTASection({
  mainHeading,
  topFeatures,
  middleHeading,
  bulletPoints,
  bottomText,
  highlightedText,
  primaryButton,
  secondaryButton
}: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
        <div className="max-w-5xl mx-auto">
          {/* Top Section: Main Heading and Three Value Propositions */}
          <h3 className="text-3xl font-bold text-slate-900 mb-8">
            {mainHeading}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-base text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Middle Section: Bullet Points */}
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {middleHeading}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6 text-left">
              {bulletPoints.slice(0, Math.ceil(bulletPoints.length / 2)).map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-2">{point.title}</h4>
                    <p className="text-sm text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 text-left">
              {bulletPoints.slice(Math.ceil(bulletPoints.length / 2)).map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-2">{point.title}</h4>
                    <p className="text-sm text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Informational Text and CTA */}
          <p className="text-base text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {bottomText}
            <span className="font-semibold text-green-600"> {highlightedText}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
              <Link href={primaryButton.href}>
                <span>{primaryButton.text}</span>
                {primaryButton.icon === 'arrow' && <ArrowRight className="w-5 h-5 ml-3" />}
                {primaryButton.icon === 'play' && <Play className="w-5 h-5 ml-3" />}
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50:bg-orange-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
              <Link href={secondaryButton.href}>
                {secondaryButton.icon === 'play' && <Play className="w-5 h-5 mr-3" />}
                <span>{secondaryButton.text}</span>
                {secondaryButton.icon === 'arrow' && <ArrowRight className="w-5 h-5 ml-3" />}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 