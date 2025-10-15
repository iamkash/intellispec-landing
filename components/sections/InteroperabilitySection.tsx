'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Link as LinkIcon, 
  Database, 
  Zap, 
  Shield, 
  Settings, 
  ArrowRight,
  HardHat,
  Crown,
  Target,
  Globe,
  CheckCircle,
  Code,
  Network,
  Cpu,
  Cloud,
  Server,
  Wifi,
  Lock,
  Unlock,
  RefreshCw,
  Activity,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Eye,
  TestTube,
  UserCheck,
  Award,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CTASection from '@/components/ui/CTASection'

const integrationTypes = [
  {
    name: 'ERP Systems',
    description: 'Seamless integration with SAP, Oracle, Microsoft Dynamics, and other major ERP platforms.',
    icon: Database,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-100/50 to-blue-200/50',
    image: '/images/integrations/erp.jpg',
    features: ['Real-time Sync', 'Bidirectional Data', 'Custom Mappings'],
    competitive: 'vs. 30% industry average'
  },
  {
    name: 'SCADA Systems',
    description: 'Connect with Honeywell, Emerson, Schneider Electric, and other SCADA platforms.',
    icon: Cpu,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-100/50 to-green-200/50',
    image: '/images/integrations/sada.jpg',
    features: ['OPC UA Support', 'Modbus Integration', 'Real-time Monitoring'],
    competitive: 'vs. 25% industry average'
  },
  {
    name: 'MES Systems',
    description: 'Integrate with manufacturing execution systems for production optimization.',
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-100/50 to-purple-200/50',
    image: '/images/integrations/mes.JPG',
    features: ['Production Tracking', 'Quality Control', 'Process Optimization'],
    competitive: 'vs. 35% industry average'
  },
  {
    name: 'HSE Systems',
    description: 'Connect with safety management platforms for comprehensive compliance tracking.',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-gradient-to-br from-red-100/50 to-red-200/50',
    image: '/images/integrations/hse.jpg',
    features: ['Incident Tracking', 'Compliance Reporting', 'Risk Assessment'],
    competitive: 'vs. 40% industry average'
  },
  {
    name: 'Cloud Platforms',
    description: 'Native integration with AWS, Azure, Google Cloud, and hybrid environments.',
    icon: Cloud,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-cyan-100/50 to-cyan-200/50',
    image: '/images/integrations/cloud.jpg',
    features: ['Multi-Cloud Support', 'Auto-Scaling', 'Global Deployment'],
    competitive: 'vs. 20% industry average'
  },
  {
    name: 'CRM Systems',
    description: 'Connect customer relationship management systems for unified business operations.',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-100/50 to-orange-200/50',
    image: '/images/integrations/crm.jpg',
    features: ['Offline Sync', 'GPS Tracking', 'Photo Integration'],
    competitive: 'vs. 45% industry average'
  }
]

const apiFeatures = [
  {
    title: 'RESTful APIs',
    description: 'Modern REST APIs with comprehensive documentation and SDKs',
    icon: Code,
    color: 'text-blue-600'
  },
  {
    title: 'GraphQL Support',
    description: 'Flexible data querying for complex integration scenarios',
    icon: Network,
    color: 'text-purple-600'
  },
  {
    title: 'Webhook Integration',
    description: 'Real-time event notifications and automated workflows',
    icon: Activity,
    color: 'text-green-600'
  },
  {
    title: 'OAuth 2.0 Security',
    description: 'Enterprise-grade authentication and authorization',
    icon: Lock,
    color: 'text-red-600'
  }
]

const protocols = [
  { name: 'OPC UA', status: 'Full Support', icon: CheckCircle },
  { name: 'Modbus TCP/RTU', status: 'Full Support', icon: CheckCircle },
  { name: 'DNP3', status: 'Full Support', icon: CheckCircle },
  { name: 'IEC 61850', status: 'Full Support', icon: CheckCircle },
  { name: 'BACnet', status: 'Full Support', icon: CheckCircle },
  { name: 'MQTT', status: 'Full Support', icon: CheckCircle },
  { name: 'AMQP', status: 'Full Support', icon: CheckCircle },
  { name: 'HTTP/HTTPS', status: 'Full Support', icon: CheckCircle }
]

export default function InteroperabilitySection() {
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
          <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-sm font-medium mb-6">
            <Network className="w-4 h-4 text-cyan-500 mr-2" />
            <span className="text-slate-900">Universal Integration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Connect <span className="gradient-text">Everything</span> Seamlessly
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Built on open standards and API-first architecture, intelliSPEC integrates with your existing systems 
            <span className="font-semibold text-slate-700"> without disruption or data migration.</span> Connect ERP, SCADA, CMMS, and more in days, not months.
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
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Universal Compatibility</h3>
                  <p className="text-slate-600">Connect to any system with our comprehensive integration framework</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">50+</div>
                  <div className="text-sm text-slate-600">System Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-slate-600">Protocols</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2-4</div>
                  <div className="text-sm text-slate-600">Weeks to Connect</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrationTypes.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="group"
            >
              <motion.div 
                className={`glass-morphism rounded-xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-300/30 hover:border-slate-400/50:border-slate-500/50 relative overflow-hidden ${integration.bgColor}`}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                </div>

                {/* Integration Image */}
                <div className="relative mb-6 h-48 rounded-lg overflow-hidden">
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <integration.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                    {integration.competitive}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700:text-slate-200 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {integration.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* API Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                API-First Architecture
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Built on modern API standards with comprehensive documentation, SDKs, and developer tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Protocol Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Industry Standard Protocols
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Support for all major industrial communication protocols ensures compatibility with existing infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {protocols.map((protocol, index) => (
                <motion.div
                  key={protocol.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                >
                  <span className="font-semibold text-slate-900">{protocol.name}</span>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">{protocol.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          mainHeading="Ready to Transform Your Industry Operations?"
          topFeatures={[
            {
              icon: LinkIcon,
              title: "Seamless Integration",
              description: "Connect all your existing systems without disruption"
            },
            {
              icon: TrendingUp,
              title: "Operational Efficiency",
              description: "Eliminate data silos and automate cross-system workflows"
            },
            {
              icon: Globe,
              title: "Real-time Visibility",
              description: "Get complete visibility across all connected systems"
            }
          ]}
          middleHeading="How Interoperability Transforms Your Operations"
          bulletPoints={[
            {
              title: "Unified data flow",
              description: "Connect ERP, SCADA, MES, and IoT systems into one seamless platform"
            },
            {
              title: "Automated workflows",
              description: "Eliminate manual data entry and reduce operational errors by 90%"
            },
            {
              title: "Real-time decision making",
              description: "Access live data from all systems for instant operational insights"
            },
            {
              title: "Scalable architecture",
              description: "Add new systems and protocols as your operations grow"
            }
          ]}
          bottomText="Transform your disconnected systems into a unified, intelligent operation."
          highlightedText="Our interoperability platform connects your existing infrastructure, eliminates data silos, and delivers 20-40% operational improvements through seamless system integration."
          primaryButton={{
            text: "Contact Us",
            href: "/contact",
            icon: "arrow"
          }}
          secondaryButton={{
            text: "Request Demo",
            href: "/demo"
          }}
        />
      </div>
    </div>
  )
} 