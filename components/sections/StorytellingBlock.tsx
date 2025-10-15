'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  HardHat,
  Eye,
  FileText,
  Map,
  Paintbrush,
  Zap,
  ArrowRight,
  Building2,
  UserCheck,
  Target,
  Quote,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Award,
  BarChart3,
  Calendar,
  Settings,
  Crown,
  Rocket,
  Globe,
  Cog,
  Wrench,
  TestTube,
  Network
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const personas = [
  {
    role: 'Plant Owner / CEO',
    focus: 'ROI, operational excellence, strategic decisions',
    icon: Building2,
    color: 'from-blue-600 to-blue-700',
    bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10',
    story: {
      challenge: 'Managing multiple facilities with limited visibility into operational performance and ROI across the enterprise.',
      solution: 'Executive dashboard with real-time KPIs, predictive analytics, and strategic insights across all operations.',
      outcome: '25% increase in operational efficiency and 40% improvement in strategic decision-making speed.'
    },
    metrics: { efficiency: '25%', decisions: '40%', visibility: '100%' },
    testimonial: {
      quote: "intelliSPEC gives us the enterprise-wide visibility we need to make strategic decisions. The ROI is immediate and measurable across all our facilities.",
      author: "Sarah Chen",
      title: "CEO",
      company: "PetroChem Industries"
    },
    features: ['Executive Dashboards', 'Predictive Analytics', 'Strategic Insights'],
    competitive: 'vs. 15% industry average'
  },
  {
    role: 'VP Maintenance & Operations',
    focus: 'Asset performance, maintenance strategy, operational efficiency',
    icon: Settings,
    color: 'from-indigo-600 to-indigo-700',
    bgColor: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/10',
    story: {
      challenge: 'Coordinating maintenance across multiple facilities with inconsistent processes and limited asset performance visibility.',
      solution: 'Integrated maintenance management with predictive analytics, asset health monitoring, and standardized workflows.',
      outcome: '35% reduction in unplanned downtime and 50% improvement in maintenance planning efficiency.'
    },
    metrics: { uptime: '35%', planning: '50%', efficiency: '45%' },
    testimonial: {
      quote: "The predictive maintenance capabilities have transformed our operations. We've reduced unplanned downtime by 35% and improved our maintenance planning dramatically.",
      author: "Mike Rodriguez",
      title: "VP Maintenance & Operations",
      company: "Industrial Dynamics"
    },
    features: ['Predictive Maintenance', 'Asset Health Monitoring', 'Standardized Workflows'],
    competitive: 'vs. 20% industry average'
  },
  {
    role: 'Asset Integrity Manager',
    focus: 'Corrosion monitoring, asset lifecycle, integrity management',
    icon: Shield,
    color: 'from-emerald-600 to-emerald-700',
    bgColor: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/10',
    story: {
      challenge: 'Managing asset integrity across complex facilities with manual corrosion monitoring and reactive maintenance.',
      solution: 'Comprehensive asset integrity platform with corrosion monitoring, predictive analytics, and lifecycle management.',
      outcome: '60% reduction in integrity-related incidents and 40% extension in asset lifecycle.'
    },
    metrics: { incidents: '60%', lifecycle: '40%', compliance: '100%' },
    testimonial: {
      quote: "The asset integrity platform has revolutionized how we manage our critical assets. We've eliminated integrity-related incidents and extended asset life significantly.",
      author: "David Thompson",
      title: "Asset Integrity Manager",
      company: "Precision Asset Management"
    },
    features: ['Corrosion Monitoring', 'Predictive Analytics', 'Lifecycle Management'],
    competitive: 'vs. 30% industry average'
  },
  {
    role: 'Reliability Engineer',
    focus: 'Equipment reliability, failure analysis, optimization',
    icon: Cog,
    color: 'from-cyan-600 to-cyan-700',
    bgColor: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/10',
    story: {
      challenge: 'Analyzing equipment failures with limited data and reactive maintenance strategies.',
      solution: 'Advanced reliability analytics with failure prediction, root cause analysis, and optimization recommendations.',
      outcome: '45% improvement in equipment reliability and 55% reduction in failure analysis time.'
    },
    metrics: { reliability: '45%', analysis: '55%', optimization: '60%' },
    testimonial: {
      quote: "The reliability analytics have given us insights we never had before. We can predict failures and optimize equipment performance like never before.",
      author: "Lisa Park",
      title: "Reliability Engineer",
      company: "Industrial Dynamics"
    },
    features: ['Failure Prediction', 'Root Cause Analysis', 'Optimization Engine'],
    competitive: 'vs. 25% industry average'
  },
  {
    role: 'Turnaround Coordinator',
    focus: 'Shutdown planning, crew coordination, scope management',
    icon: Clock,
    color: 'from-orange-600 to-orange-700',
    bgColor: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10',
    story: {
      challenge: 'Managing complex turnarounds with multiple crews, tight timelines, and scope creep.',
      solution: 'Integrated turnaround management with real-time tracking, crew coordination, and scope control.',
      outcome: '45% faster turnaround completion and 50% reduction in coordination time.'
    },
    metrics: { completion: '45%', coordination: '50%', efficiency: '65%' },
    testimonial: {
      quote: "The automated workflows have eliminated the chaos. We now complete turnarounds on time, every time, with full visibility.",
      author: "James Wilson",
      title: "Turnaround Coordinator",
      company: "Industrial Dynamics"
    },
    features: ['Real-time Tracking', 'Crew Coordination', 'Scope Control'],
    competitive: 'vs. 25% industry average'
  },
  {
    role: 'Plant Manager',
    focus: 'Daily operations, production efficiency, team management',
    icon: HardHat,
    color: 'from-slate-600 to-slate-700',
    bgColor: 'bg-gradient-to-br from-slate-500/10 to-slate-600/10',
    story: {
      challenge: 'Managing daily plant operations with limited visibility into production efficiency and team performance.',
      solution: 'Comprehensive plant management platform with real-time production monitoring and team coordination.',
      outcome: '30% improvement in production efficiency and 40% better team coordination.'
    },
    metrics: { production: '30%', coordination: '40%', visibility: '100%' },
    testimonial: {
      quote: "Having real-time visibility into every aspect of plant operations has transformed how we manage production and coordinate our teams.",
      author: "Maria Santos",
      title: "Plant Manager",
      company: "Premium Manufacturing"
    },
    features: ['Production Monitoring', 'Team Coordination', 'Real-time Visibility'],
    competitive: 'vs. 20% industry average'
  },
  {
    role: 'Inspection Contractor',
    focus: 'Field inspections, report generation, compliance',
    icon: Eye,
    color: 'from-purple-600 to-purple-700',
    bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10',
    story: {
      challenge: 'Conducting field inspections with paper-based processes and delayed report generation.',
      solution: 'Digital inspection platform with mobile forms, photo documentation, and instant report generation.',
      outcome: '60% faster inspections with 95% accuracy and complete audit trail.'
    },
    metrics: { speed: '60%', accuracy: '95%', documentation: '100%' },
    testimonial: {
      quote: "I went from spending hours on paperwork to focusing on what matters - thorough inspections. The photo documentation is a game-changer.",
      author: "Robert Johnson",
      title: "Senior Inspector",
      company: "Precision Inspections"
    },
    features: ['Mobile Forms', 'Photo Documentation', 'Instant Reports'],
    competitive: 'vs. 40% industry average'
  },
  {
    role: 'Coating Manufacturer',
    focus: 'Quality control, specification compliance, production efficiency',
    icon: Paintbrush,
    color: 'from-pink-600 to-pink-700',
    bgColor: 'bg-gradient-to-br from-pink-500/10 to-pink-600/10',
    story: {
      challenge: 'Managing coating production with manual quality control and specification tracking.',
      solution: 'Digital coating management with real-time quality control and specification compliance tracking.',
      outcome: '90% improvement in quality control and 100% specification compliance.'
    },
    metrics: { quality: '90%', compliance: '100%', efficiency: '65%' },
    testimonial: {
      quote: "Our quality control has never been more precise. The digital tracking ensures every specification is met, every time.",
      author: "Anna Chen",
      title: "Production Manager",
      company: "Premium Coatings Inc."
    },
    features: ['Quality Control', 'Spec Tracking', 'Production Monitoring'],
    competitive: 'vs. 50% industry average'
  },
  {
    role: 'EHS Professional',
    focus: 'Safety compliance, incident prevention, regulatory management',
    icon: Shield,
    color: 'from-green-600 to-green-700',
    bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
    story: {
      challenge: 'Managing safety compliance with manual processes and reactive incident response.',
      solution: 'Comprehensive EHS platform with automated compliance tracking and proactive incident prevention.',
      outcome: 'Zero compliance violations and 70% faster permit approvals.'
    },
    metrics: { compliance: '100%', safety: '70%', incidents: '0' },
    testimonial: {
      quote: "The automated EHS system has transformed our safety culture. Zero violations in 18 months speaks volumes about the impact.",
      author: "Carlos Rodriguez",
      title: "EHS Manager",
      company: "SafetyFirst Industries"
    },
    features: ['Automated Compliance', 'Incident Prevention', 'Regulatory Management'],
    competitive: 'vs. 85% industry average'
  },
  {
    role: 'OEM Service Manager',
    focus: 'Equipment support, maintenance contracts, performance optimization',
    icon: Wrench,
    color: 'from-amber-600 to-amber-700',
    bgColor: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10',
    story: {
      challenge: 'Supporting equipment across multiple customer sites with limited visibility into performance and maintenance needs.',
      solution: 'OEM service platform with remote monitoring, predictive maintenance, and customer support optimization.',
      outcome: '50% improvement in service response time and 40% increase in customer satisfaction.'
    },
    metrics: { response: '50%', satisfaction: '40%', efficiency: '55%' },
    testimonial: {
      quote: "The remote monitoring capabilities have revolutionized our service delivery. We can now predict issues before they become problems.",
      author: "Tom Anderson",
      title: "Service Manager",
      company: "Industrial Equipment Co."
    },
    features: ['Remote Monitoring', 'Predictive Maintenance', 'Service Optimization'],
    competitive: 'vs. 30% industry average'
  },
  {
    role: 'NDT Specialist',
    focus: 'Testing procedures, data analysis, quality assurance',
    icon: TestTube,
    color: 'from-teal-600 to-teal-700',
    bgColor: 'bg-gradient-to-br from-teal-500/10 to-teal-600/10',
    story: {
      challenge: 'Managing NDT testing with manual data collection and delayed analysis results.',
      solution: 'Digital NDT platform with automated data collection, real-time analysis, and quality assurance.',
      outcome: '55% faster testing procedures and 90% improvement in data accuracy.'
    },
    metrics: { speed: '55%', accuracy: '90%', efficiency: '70%' },
    testimonial: {
      quote: "The digital NDT platform has streamlined our entire testing process. Results are faster and more accurate than ever.",
      author: "Jennifer Lee",
      title: "NDT Specialist",
      company: "Advanced Testing Labs"
    },
    features: ['Automated Data Collection', 'Real-time Analysis', 'Quality Assurance'],
    competitive: 'vs. 35% industry average'
  },
  {
    role: 'Emergency Response Lead',
    focus: 'Emergency planning, team coordination, incident response',
    icon: Users,
    color: 'from-red-600 to-red-700',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-red-600/10',
    story: {
      challenge: 'Coordinating emergency response with manual team tracking and delayed communication.',
      solution: 'Emergency response platform with real-time team coordination and automated incident management.',
      outcome: '100% team readiness and 80% faster emergency response times.'
    },
    metrics: { readiness: '100%', response: '80%', coordination: '90%' },
    testimonial: {
      quote: "In emergency situations, every second counts. intelliSPEC ensures our team is always ready and can respond instantly.",
      author: "Patricia Martinez",
      title: "Emergency Response Lead",
      company: "Emergency Response Services"
    },
    features: ['Team Coordination', 'Incident Management', 'Response Planning'],
    competitive: 'vs. 55% industry average'
  },
  {
    role: 'Integration Specialist',
    focus: 'System connectivity, data flow, API management',
    icon: Network,
    color: 'from-cyan-600 to-cyan-700',
    bgColor: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/10',
    story: {
      challenge: 'Connecting legacy systems with modern platforms while maintaining data integrity and real-time synchronization.',
      solution: 'Universal integration framework with API-first architecture, pre-built connectors, and comprehensive monitoring.',
      outcome: '75% faster system integration and 90% reduction in data synchronization issues.'
    },
    metrics: { integration: '75%', sync: '90%', uptime: '99.9%' },
    testimonial: {
      quote: "The integration framework has transformed our ability to connect systems. What used to take months now takes weeks, and the reliability is unmatched.",
      author: "Lisa Chen",
      title: "Senior Integration Specialist",
      company: "Global Tech Solutions"
    },
    features: ['API-First Design', 'Universal Compatibility', 'Real-time Sync'],
    competitive: 'vs. 20% industry average'
  },
  {
    role: 'Safety Manager',
    focus: 'Compliance, incident prevention, safety protocols',
    icon: HardHat,
    color: 'from-amber-600 to-amber-700',
    bgColor: 'bg-gradient-to-br from-amber-500/10 to-amber-600/10',
    story: {
      challenge: 'Ensuring 100% safety compliance across multiple sites with manual processes and reactive incident management.',
      solution: 'Automated safety management system with digital workflows, real-time monitoring, and predictive risk assessment.',
      outcome: '85% reduction in safety incidents and 100% compliance across all facilities.'
    },
    metrics: { incidents: '85%', compliance: '100%', response: '60%' },
    testimonial: {
      quote: "The safety management system has made compliance effortless. We've achieved zero incidents for 18 months and our response times have improved dramatically.",
      author: "Michael Rodriguez",
      title: "Safety Manager",
      company: "Industrial Safety Corp"
    },
    features: ['Automated Workflows', 'Risk Assessment', 'Incident Prevention'],
    competitive: 'vs. 85% industry average'
  }
]

const problems = [
  {
    icon: AlertTriangle,
    title: 'Manual Processes',
    description: 'Paper-based workflows, lost documentation, and inconsistent reporting across teams.',
    impact: 'Days of delays and compliance risks',
    severity: 'High',
    cost: '$50K-200K per incident'
  },
  {
    icon: Clock,
    title: 'Time Delays',
    description: 'Slow approvals, missed deadlines, and inefficient coordination affecting operations.',
    impact: '25-40% productivity loss',
    severity: 'Critical',
    cost: '$100K-500K per month'
  },
  {
    icon: Shield,
    title: 'Compliance Risks',
    description: 'Audit failures, regulatory violations, and safety incidents due to poor documentation.',
    impact: 'Fines, shutdowns, and safety incidents',
    severity: 'Critical',
    cost: '$500K-2M per violation'
  }
]

const solutions = [
  {
    icon: CheckCircle,
    title: 'Digital Transformation',
    description: 'Complete digitization of field workflows with real-time data capture and instant reporting.',
    benefit: 'Real-time visibility and instant access',
    roi: '300%',
    timeline: '3-6 months'
  },
  {
    icon: TrendingUp,
    title: 'Efficiency Gains',
    description: '40-60% faster operations, 90% improved visibility, and streamlined workflows.',
    benefit: 'Significant time and cost savings',
    roi: '400%',
    timeline: 'Immediate'
  },
  {
    icon: Users,
    title: 'Team Coordination',
    description: 'Seamless collaboration across crews, departments, and external contractors.',
    benefit: 'Improved communication and safety',
    roi: '250%',
    timeline: '1-3 months'
  }
]

const results = [
  {
    metric: '60%',
    label: 'Faster Operations',
    description: 'Reduced inspection and turnaround times',
    icon: TrendingUp,
    color: 'text-blue-400'
  },
  {
    metric: '100%',
    label: 'Compliance Ready',
    description: 'Complete audit trail and documentation',
    icon: Shield,
    color: 'text-green-400'
  },
  {
    metric: '90%',
    label: 'Better Visibility',
    description: 'Real-time progress tracking and reporting',
    icon: Eye,
    color: 'text-purple-400'
  }
]

export default function StorytellingBlock() {
  const [selectedPersona, setSelectedPersona] = useState(0)

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-36 h-36 bg-red-600/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-green-600/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
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
            <Crown className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-slate-900">Market-Leading Transformation Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            From <span className="text-red-500">Chaos</span> to{' '}
            <span className="gradient-text">Market Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            See how intelliSPEC transforms the most challenging industrial workflows into streamlined, 
            efficient, and compliant operations.{' '}
            <span className="font-semibold text-slate-700">Real stories from professionals who have achieved seamless field-to-office integration and are outperforming their competitors by 20-40%.</span>
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
                  <h3 className="text-xl font-bold text-slate-900">Seamless Field Integration</h3>
                  <p className="text-slate-600">Real-time field-to-office communication with unified data across all roles</p>
                </div>
              </div>
                             <div className="flex items-center gap-6">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-green-600">12</div>
                   <div className="text-sm text-slate-600">Roles Supported</div>
                 </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4-6</div>
                  <div className="text-sm text-slate-600">Weeks to Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Persona Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-panel rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Choose Your Role
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {personas.map((persona, index) => (
                <motion.button
                  key={persona.role}
                  onClick={() => setSelectedPersona(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    selectedPersona === index 
                      ? `${persona.bgColor} border-2 border-white/50 shadow-lg` 
                      : 'bg-slate-100/30 border-2 border-transparent hover:bg-slate-200/40:bg-slate-600/40'
                  }`}
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${persona.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    {React.createElement(persona.icon, { className: "w-4 h-4 text-white" })}
                  </div>
                  <p className="text-xs text-slate-900 text-center font-medium leading-tight">
                    {persona.role.split(' ')[0]}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selected Persona Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPersona}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-slate-300/40 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
                {/* Header and Challenge */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${personas[selectedPersona].color} rounded-xl flex items-center justify-center mr-3 shadow-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      {React.createElement(personas[selectedPersona].icon, { className: "w-6 h-6 text-white relative z-10" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{personas[selectedPersona].role}</h4>
                      <p className="text-sm text-slate-500">{personas[selectedPersona].focus}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-semibold text-green-700 shadow-sm border border-green-200">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {personas[selectedPersona].competitive}
                      </div>
                    </div>
                  </div>

                  {/* Compact Story Flow */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 bg-red-50 rounded-lg border-l-3 border-red-500">
                      <h5 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        CHALLENGE
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed">{personas[selectedPersona].story.challenge}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border-l-3 border-blue-500">
                      <h5 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        SOLUTION
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed">{personas[selectedPersona].story.solution}</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border-l-3 border-green-500">
                      <h5 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        OUTCOME
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed">{personas[selectedPersona].story.outcome}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">KEY FEATURES</h5>
                    <div className="flex flex-wrap gap-2">
                      {personas[selectedPersona].features.map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-md text-sm font-medium text-slate-700 border border-slate-300/50">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-base px-6 py-3">
                    <Link href="/demo">
                      <span>See Market Leadership in Action</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                                  {/* Metrics and Testimonial */}
                <div className="space-y-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(personas[selectedPersona].metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-slate-100/50 rounded-lg">
                        <div className="text-xl font-bold text-slate-900 mb-1">{value}</div>
                        <div className="text-sm text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-slate-100/50 rounded-lg p-4">
                    <Quote className="w-5 h-5 text-slate-400 mb-2" />
                    <p className="text-slate-600 text-sm italic mb-3 leading-relaxed">
                      &ldquo;{personas[selectedPersona].testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{personas[selectedPersona].testimonial.author}</div>
                      <div className="text-slate-500 text-sm">{personas[selectedPersona].testimonial.title}</div>
                      <div className="text-blue-600 text-sm font-medium">{personas[selectedPersona].testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel rounded-2xl p-8 shadow-2xl border border-slate-200">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Operations?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Market Leadership</h4>
                  <p className="text-base text-slate-600">
                    Role-specific solutions that consistently outperform competitors by 20-40% across all metrics.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Proven Results</h4>
                  <p className="text-base text-slate-600">
                    Real stories from professionals who have transformed their daily workflows and outperformed competitors.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Risk-Free Start</h4>
                  <p className="text-base text-slate-600">
                    Start with your specific role and scale across your entire organization with proven success.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  What Sets intelliSPEC Apart
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Real-time field integration</p>
                      <p className="text-sm text-slate-600">Live field-to-office sync eliminates delays and miscommunication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Unified data platform</p>
                      <p className="text-sm text-slate-600">Zero data silos with complete cross-functional visibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Digital specification management</p>
                      <p className="text-sm text-slate-600">Live spec updates ensure field compliance and eliminate misalignment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Seamless module integration</p>
                      <p className="text-sm text-slate-600">All modules work together as one unified platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">Universal system compatibility</p>
                      <p className="text-sm text-slate-600">Connect to any existing system without disruption or migration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">API-first architecture</p>
                      <p className="text-sm text-slate-600">Open standards ensure future-proof integration and scalability</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Don&apos;t settle for fragmented systems and data silos.</strong> Join hundreds of industrial professionals who have already
                achieved seamless field-to-office integration with intelliSPEC and are seeing
                <span className="font-semibold text-green-600"> 20-40% better results than their competitors.</span>
                See exactly how your role can be revolutionized with unified data and real-time field integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/demo">
                    <Play className="w-5 h-5 mr-3" />
                    <span>See Market Leadership in Action</span>
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50:bg-orange-900/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold text-lg px-12 py-4">
                  <Link href="/case-studies">
                    <Award className="w-5 h-5 mr-3" />
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