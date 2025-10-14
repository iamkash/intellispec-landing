'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  ArrowRight,
  Building2,
  Shield,
  TrendingUp,
  Crown,
  Rocket,
  Globe,
  Target,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const companies = [
  { name: 'PK Safety', logo: '/images/logos/pk-safety-logo.png', industry: 'Safety Equipment' },
  { name: 'PK Technology', logo: '/images/logos/pk-technology-logo.png', industry: 'Technology Solutions' },
  { name: 'Sherwin-Williams', logo: '/images/logos/sherwin-williams-logo.png', industry: 'Coatings & Paints' },
  { name: 'International Paint', logo: '/images/logos/international-paint-logo.png', industry: 'Marine Coatings' },
  { name: 'AkzoNobel', logo: '/images/logos/akzonobel-logo.png', industry: 'Chemicals & Coatings' },
  { name: 'CHS', logo: '/images/logos/chs-logo.png', industry: 'Agriculture & Energy' },
  { name: 'LyondellBassel', logo: '/images/logos/lyondell-bassel-logo.png', industry: 'Petrochemicals' },
  { name: 'ProSurve', logo: '/images/logos/prosurve-logo.png', industry: 'Surveying & Inspection' },
  { name: 'Steelmation', logo: '/images/logos/steelmation-logo.png', industry: 'Steel Manufacturing' },
  { name: 'Valkyrie', logo: '/images/logos/valkyrie-logo.png', industry: 'Aerospace & Defense' },
  { name: 'Anadarko', logo: '/images/logos/anadarko-logo.png', industry: 'Oil & Gas' },
  { name: 'Chevron GOM', logo: '/images/logos/chevron-gom-logo.png', industry: 'Offshore Oil & Gas' },
  { name: 'BASF', logo: '/images/logos/basf-logo.png', industry: 'Chemical Manufacturing' },
  { name: 'BP', logo: '/images/logos/bp-logo.png', industry: 'Energy & Petrochemicals' },
  { name: 'Chevron Pascagoula', logo: '/images/logos/chevron-pascagoula-logo.png', industry: 'Refining & Chemicals' }
]

export default function TrustedBySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-slate-900">Market Leaders Choose IntelliSpec</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            From Fortune 500 companies to specialized contractors, organizations across sectors trust IntelliSpec 
            to transform their industrial operations.{' '}
            <span className="font-semibold text-slate-700">Join the companies that are outperforming their competitors by 20-40%.</span>
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
          <div className="glass-panel rounded-2xl p-6 shadow-xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Industry-Leading Trust</h3>
                  <p className="text-slate-600">15+ Fortune 500 companies trust IntelliSpec for their operations</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-slate-600">Fortune 500 Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-slate-600">Industrial Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auto-Sliding Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-12 animate-slide">
                {[...companies, ...companies].map((company, index) => (
                  <motion.div
                    key={`${company.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer flex-shrink-0"
                  >
                    <div className="glass-card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-500/60 min-w-[140px]">
                      <div className="w-full h-16 flex items-center justify-center mb-3">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width={120}
                            height={60}
                            className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center';
                                fallback.innerHTML = `<div class="text-xs text-slate-500 font-semibold">${company.name}</div>`;
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-900 font-semibold text-xs leading-tight mb-1">
                          {company.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {company.industry}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Join the Market Leaders
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Market Leadership</h4>
                  <p className="text-base text-slate-600">
                    Trusted by Fortune 500 companies and industry leaders across all major sectors with proven results.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Scalable Solution</h4>
                  <p className="text-base text-slate-600">
                    From small contractors to global enterprises, our platform scales with your needs and outperforms competitors.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Enterprise Ready</h4>
                  <p className="text-base text-slate-600">
                    Built for enterprise-grade security, compliance, and performance requirements with global support.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Industry Leaders Choose IntelliSpec
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Proven results</p>
                      <p className="text-sm text-slate-600">20-40% better performance than competitors across all metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Enterprise security</p>
                      <p className="text-sm text-slate-600">SOC 2 compliant with bank-level security standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Global support</p>
                      <p className="text-sm text-slate-600">24/7 support and dedicated customer success teams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Rapid deployment</p>
                      <p className="text-sm text-slate-600">Average implementation time of 4-6 weeks</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Join the industry leaders who have already transformed their operations.</strong> 
                From oil & gas giants to chemical manufacturers, organizations trust IntelliSpec to deliver 
                <span className="font-semibold text-green-600"> measurable results and outperform their competitors by 20-40%.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/demo">
                    <span>See Market Leadership in Action</span>
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50:bg-orange-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/case-studies">
                    <span>View Success Stories</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 