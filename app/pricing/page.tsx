'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HardHat, 
  CheckCircle, 
  Search,
  Shield,
  Settings,
  Calendar,
  Briefcase,
  MapPin,
  FileText,
  Database,
  Eye,
  Users,
  TrendingUp,
  Check,
  X,
  DollarSign,
  Wallet,
  Percent,
  Server,
  Boxes,
  Crown,
  Rocket,
  Layers,
  XCircle,
  Wrench,
  Package,
  BarChart3,
  Link2,
  ShieldCheck,
  Timer,
  ChevronDown,
  BarChart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ContactForm from '@/components/sections/ContactForm'

const features = [
  {
    icon: Search,
    title: "Modular Design",
    description: "Choose only the modules you need. Start small and scale as your operations grow."
  },
  {
    icon: Shield,
    title: "Scalable Solution",
    description: "From single-site operations to multi-plant enterprises, IntelliSpec grows with you."
  },
  {
    icon: Settings,
    title: "Flexible Implementation",
    description: "Deploy at your own pace. Integrate with existing systems or start fresh."
  }
]

const modules = [
  {
    name: "intelliINSPECT",
    description: "AI-powered digital inspection workflows: mobile forms, data capture, automated analysis",
    icon: Search,
    features: ["Custom inspection forms", "Real-time reporting", "Compliance tracking", "Photo/video capture"]
  },
  {
    name: "intelliNDT",
    description: "AI-powered non-destructive testing QA: auto-tag indications, coverage maps, reporting",
    icon: Shield,
    features: ["NDT workflow management", "Quality control", "Defect tracking", "Certification management"]
  },
  {
    name: "intelliINTEGRITY",
    description: "AI-powered mechanical/asset integrity: RBI, corrosion monitoring, predictive dashboards",
    icon: Settings,
    features: ["Risk assessment", "Asset monitoring", "Predictive analytics", "Maintenance planning"]
  },
  {
    name: "intelliTURN",
    description: "AI-powered turnaround management: planning, scheduling, risk alerts",
    icon: Calendar,
    features: ["Project planning", "Resource allocation", "Progress tracking", "Cost management"]
  },
  {
    name: "intelliWORK",
    description: "AI-powered crew management/workforce orchestration: plan crews, assign shifts, track productivity",
    icon: Briefcase,
    features: ["Work order creation", "Task assignment", "Progress tracking", "Performance analytics"]
  },
  {
    name: "intelliTRACK",
    description: "AI-powered real-time asset tracking software: location, utilization, loss prevention",
    icon: MapPin,
    features: ["Asset lifecycle", "Location tracking", "Maintenance history", "Utilization analytics"]
  },
  {
    name: "intelliCOMPLY",
    description: "AI-powered automated compliance: policy tracking, evidence vault, audit prep",
    icon: FileText,
    features: ["Compliance monitoring", "Document management", "Audit trails", "Regulatory reporting"]
  },
  {
    name: "intelliSAFETY",
    description: "AI-powered safety command & control: incident prediction, emergency response",
    icon: Shield,
    features: ["Emergency protocols", "Communication tools", "Response coordination", "Incident management"]
  },
  {
    name: "intelliSCAFF",
    description: "AI-powered scaffolding management: material usage, cost tracking, compliance",
    icon: Database,
    features: ["Secure storage", "Data encryption", "Access control", "Backup & recovery"]
  },
  {
    name: "intelliVISION",
    description: "AI-powered cross-module analytics: predictive insights, unified KPIs",
    icon: Eye,
    features: ["Predictive analytics", "Performance insights", "Trend analysis", "Decision support"]
  }
]

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade encryption and security protocols to protect your data"
  },
  {
    icon: Users,
    title: "Unlimited Users",
    description: "No per-user fees. Add as many team members as you need"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 300% ROI within 12 months of implementation"
  },
  {
    icon: Settings,
    title: "Custom Integration",
    description: "Seamless integration with your existing systems and workflows"
  }
]

// Enhanced pricing plans with detailed modules and ROI highlights
// Monthly prices with psychological pricing (close to annual ÷ 12)
const plans = [
  {
    name: "IntelliCore",
    tagline: "Essential inspection power",
    description: "Core for inspections. Fast. Accurate. Compliant. Includes digital forms, automated evidence capture, and audit‑ready records.",
    priceLabel: "Starts at $3,749",
    period: "month/site",
    onboardingLabel: "Starts at $9,999",
    onboardingPeriod: "one time",
    highlight: false,
    icon: Layers,
    roiHighlights: [
      "40-60% faster inspections with digital workflows",
      "$500K-$1.2M annual savings from labor and rework",
      "90-100% digital compliance trail, audit-ready",
      "20-35% fewer rework and return-to-work orders"
    ],
    modules: [
      "intelliINSPECT",
      "intelliNDT",
      "intelliINTEGRITY"
    ]
  },
  {
    name: "IntelliEdge",
    tagline: "Complete operational intelligence",
    description: "Plan and execute faster. Data‑driven decisions. Turnaround planning, workforce orchestration, and asset tracking in one command view.",
    priceLabel: "Starts at $5,499",
    period: "month/site",
    onboardingLabel: "Starts at $14,999",
    onboardingPeriod: "one time",
    highlight: true,
    icon: Rocket,
    roiHighlights: [
      "30-45% shorter turnarounds; $1M+/event savings",
      "20-30% contractor cost reduction via orchestration",
      "80% fewer planning errors with single source of truth",
      "95% reduction in lost tools through real-time tracking"
    ],
    modules: [
      "intelliTURN",
      "intelliWORK",
      "intelliTRACK"
    ]
  },
  {
    name: "IntelliEnterprise",
    tagline: "Enterprise-wide transformation",
    description: "Full facility intelligence. Secure. Scalable. Predictive. Multi‑site governance with AI analytics, SSO, SLAs, and premium support.",
    priceLabel: "Contact Sales",
    period: "",
    onboardingLabel: "Custom",
    onboardingPeriod: "one time",
    highlight: false,
    icon: Crown,
    roiHighlights: [
      "Consolidate 10–20 tools; 25–40% total cost reduction",
      "15–25% uptime improvement from predictive programs",
      "300%+ ROI within 12–18 months at scale, proven",
      "99.9% uptime SLAs and enterprise-grade security"
    ],
    modules: [
      "All modules"
    ]
  }
]

// Compact blurbs for modules used in plan summaries
const moduleBlurb: Record<string, string> = {
  "intelliINSPECT": "Digital inspection workflows",
  "intelliNDT": "Non-destructive testing QA",
  "intelliINTEGRITY": "Asset integrity & reliability",
  "intelliTURN": "Turnaround management",
  "intelliWORK": "Crew management & workforce",
  "intelliTRACK": "Real-time asset tracking",
  "All IntelliSpec Modules": "Full platform access",
  "intelliVISION": "Cross-module analytics",
  "SSO & Enterprise Security": "Single sign-on, governance",
  "Premium Support": "Priority support & services",
  "SLAs": "Uptime & response guarantees"
}

const includedInAll = [
  "Secure cloud hosting",
  "Role-based access control",
  "Audit logs",
  "API access",
  "Unlimited viewers",
  "Theme & branding"
]

const faqs = [
  {
    q: "How do modules affect pricing?",
    a: "Pricing scales with the number of modules activated per site or project. Start with essentials and add modules any time."
  },
  {
    q: "Do you charge per user?",
    a: "No. IntelliSpec is usage-based and built for collaboration with unlimited users."
  },
  {
    q: "Can I mix annual and project pricing?",
    a: "Yes. Run project-based deployments alongside annual site licenses within the same account."
  },
  {
    q: "Do you offer pilots or proofs of value?",
    a: "Yes. Our team can structure short-term pilots to validate outcomes before scale-up."
  },
  {
    q: "What is IntelliFlex?",
    a: "A custom engagement for complex programs, bespoke integrations, or unique commercial structures."
  }
]

// Comparison data (values: true=Included, false=Not included, string=note)
const comparisonColumns = ["Core", "Edge", "Enterprise", "Flex"]

const comparison = [
  {
    title: "Usage",
    rows: [
      { label: "Users", values: ["Limited", "Limited", "Unlimited", "Limited"] },
      { label: "Sites", values: ["Per site (pay‑as‑you‑go)", "Per site (pay‑as‑you‑go)", "Per site (pay‑as‑you‑go)", "Per site (pay‑as‑you‑go)"] },
      
    ]
  },
  
  {
    title: "Integrations",
    rows: [
      { label: "Single sign‑on (SSO)", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "ERP/CMMS integration", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "IoT connectors", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "Webhooks / REST API", values: [false, true, true, true] }
    ]
  },
  {
    title: "Admin and support",
    rows: [
      { label: "Email support", values: [false, true, true, true] },
      { label: "Phone support", values: [false, false, true, true] },
      { label: "Integrations", values: [false, false, true, true] },
      { label: "Templates", values: [false, false, true, true] },
      { label: "Dedicated account manager", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "Training programs", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "API access", values: [false, "Contact sales", "Contact sales", "Contact sales"] },
      { label: "Security & audit logs", values: [true, true, true, true] }
    ]
  }
]

// Icons for comparison groups
const groupIconMap: Record<string, any> = {
  'Usage': Users,
  'Asset management': Database,
  'Work management': Wrench,
  'Inventory & procurement': Package,
  'Analytics & reporting': BarChart3,
  'Integrations': Link2,
  'Admin and support': Shield
}

// Flex calculator pricing (per facility, per month for display, annual for ROI) - public "Starts at" guidance
type ModulePrice = { id: string; name: string; startsAt: number; blurb: string }

// Monthly prices with psychological pricing (ending in 99/999, close to annual ÷ 12)
// Original annual amounts maintained approximately: Base=$15k, Min=$25k
const FLEX_BASE_STARTS_AT = 1249 // Platform base, per facility/month (~$15k/year)
const MIN_PER_FACILITY = 2099 // Minimum commitment (per facility/month ~$25k/year)

const modulePricing: ModulePrice[] = [
  { id: 'inspect', name: 'intelliINSPECT', startsAt: 1249, blurb: 'Digital inspection workflows' }, // ~$15k/year
  { id: 'ndt', name: 'intelliNDT', startsAt: 1699, blurb: 'Non-destructive testing QA' }, // ~$20k/year
  { id: 'integrity', name: 'intelliINTEGRITY', startsAt: 2099, blurb: 'Asset integrity & reliability' }, // ~$25k/year
  { id: 'turn', name: 'intelliTURN', startsAt: 1699, blurb: 'Turnaround management' }, // ~$20k/year
  { id: 'work', name: 'intelliWORK', startsAt: 1249, blurb: 'Crew management & workforce' }, // ~$15k/year
  { id: 'track', name: 'intelliTRACK', startsAt: 999, blurb: 'Real-time asset tracking' }, // ~$12k/year
  { id: 'comply', name: 'intelliCOMPLY', startsAt: 849, blurb: 'Automated compliance' }, // ~$10k/year
  { id: 'command', name: 'intelliSAFETY', startsAt: 1249, blurb: 'Safety command & control' }, // ~$15k/year
  { id: 'vault', name: 'intelliSCAFF', startsAt: 699, blurb: 'Scaffolding management' }, // ~$8k/year
  { id: 'vision', name: 'intelliVISION', startsAt: 2499, blurb: 'Cross-module analytics' } // ~$30k/year
]

export default function PricingPage() {
  // Lifted state to share between Flex calculator and ROI estimate
  const [calcSelected, setCalcSelected] = useState<string[]>(["inspect", "vault"]) 
  const [calcFacilities, setCalcFacilities] = useState<number>(1)
  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }), [])

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <HardHat className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900">
              Flexible Pricing
            </h1>
            </div>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              IntelliSpec is designed for enterprise flexibility. Choose the modules you need, scale as you grow, and pay only for what you use. Pricing shown monthly; ROI calculated annually.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/10 border border-primary/20">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              AI-powered plans that grow with you
            </h2>
            <p className="text-slate-600 text-lg">
              Monthly per‑site pricing with one‑time onboarding. Enterprise is custom—contact sales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <Card className={`glass-morphism shadow-xl h-full border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${plan.highlight ? 'border-primary/30 bg-primary/5' : 'border-slate-300/30'} flex flex-col`}>

                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                        <plan.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-slate-900 leading-tight mb-2 flex items-center gap-2 flex-wrap">
                          <span>{plan.name}</span>
                        </CardTitle>
                        <p className="text-sm text-slate-600 leading-relaxed">{plan.tagline}</p>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200 min-h-[160px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-slate-900 mb-1">{plan.priceLabel}</div>
                        {plan.period && plan.period !== "" && (
                          <div className="text-sm text-slate-600 font-medium">{plan.period}</div>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 pt-0 flex-1 flex flex-col">
                    {/* What you get */}
                    <div className="mb-6 flex flex-col" aria-label="What you get">
                      <div className="flex items-center gap-2 mb-3 flex-shrink-0">
                        <div className="w-1 h-4 bg-secondary rounded-full"></div>
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <h4 className="text-base font-semibold text-slate-900">What you get</h4>
                      </div>

                      {/* Value Proposition Box */}
                      <div className="bg-slate-50 rounded-lg p-2 mb-3 border border-slate-200 h-[110px] overflow-y-auto">
                        <p className="text-sm text-slate-800 leading-normal">{plan.description}</p>
                      </div>

                      {/* Included Modules */}
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1 h-3 bg-secondary rounded-full"></div>
                          Power-Packed Modules:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.modules.map((module, moduleIdx) => (
                            <span key={moduleIdx} className="inline-flex items-center px-2 py-1.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/15 transition-colors">
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ROI Highlights */}
                    <div className="mb-8 flex-1 min-h-[320px]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-[#54BAA0] rounded-full"></div>
                        <BarChart3 className="w-4 h-4 text-[#54BAA0]" />
                        <h4 className="text-base font-semibold text-slate-900">Proven ROI Impact</h4>
                      </div>
                      <div className="space-y-3">
                        {plan.roiHighlights.map((highlight, highlightIdx) => {
                          const Icon = [TrendingUp, Wallet, ShieldCheck, Timer][highlightIdx % 4]
                          return (
                            <div key={highlightIdx} className="rounded-lg p-4 border border-[#54BAA0]/30 bg-[#54BAA0]/10">
                              <div className="flex items-center gap-4">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-[#54BAA0]/20 flex items-center justify-center">
                                  <Icon className="w-6 h-6 text-[#54BAA0]" />
                                </div>
                                <div className="text-sm text-slate-800 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: highlight.replace('• ', '') }} />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      {plan.priceLabel === 'Contact Sales' ? (
                        <>
                          <Button asChild className="w-full bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg transition-all duration-200 text-sm font-medium py-3">
                            <a href="#contact">Contact Sales</a>
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button asChild className="w-full bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg transition-all duration-200 text-sm font-medium py-3">
                            <a href="#contact">Request Quote</a>
                          </Button>
                          <p className="mt-3 text-xs text-slate-600 text-center">
                            Need both inspection and planning? <span className="text-[#54BAA0] font-medium">Enterprise</span> combines all modules for maximum ROI.
                          </p>
                        </>
                      )}
                      {plan.priceLabel === 'Contact Sales' && (
                        <p className="mt-3 text-xs text-slate-600 text-center">
                          Volume discounts and add-on modules available via <span className="text-[#54BAA0] font-medium">IntelliFlex</span> plan.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 mb-4">
              All plans include unlimited users, secure cloud hosting, and role-based access control.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="/demo">Book a demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Flex pricing calculator */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Build your Flex plan</h2>
            <p className="text-slate-600 text-lg">Pick modules and see your monthly per‑facility starts‑at estimate.</p>
          </div>

          <FlexCalculator 
            selected={calcSelected}
            onSelectedChange={setCalcSelected}
            facilityCount={calcFacilities}
            onFacilityCountChange={setCalcFacilities}
          />
        </div>
      </section>

      {/* Quick ROI estimate (auto-updates with selected modules) */}
      <section className="py-12">
        <div className="container-custom">
          <SimpleROI selected={calcSelected} facilityCount={calcFacilities} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Compare plans and features</h2>
            <p className="text-slate-600 text-lg">A quick overview of what&apos;s included across Core, Edge, Enterprise, and Flex.</p>
          </div>

          <Card className="glass-morphism shadow-2xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto rounded-2xl">
                <table className="min-w-[900px] w-full text-base">
              <thead>
                <tr className="bg-primary text-primary-foreground sticky top-0 z-10 shadow-sm">
                  <th scope="col" className="text-right py-3 px-4 font-semibold sticky left-0 z-20 bg-primary text-primary-foreground rounded-tl-2xl">Feature</th>
                  {comparisonColumns.map((c) => (
                    <th key={c} scope="col" className="py-3 px-4 text-center font-semibold text-primary-foreground last:rounded-tr-2xl">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((group, gIdx) => (
                  <React.Fragment key={group.title}>
                    <tr className={`${gIdx > 0 ? 'border-t-2 border-secondary/20' : ''}`}>
                      <td colSpan={comparisonColumns.length + 1} className="pt-8 pb-3 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        <span className="inline-flex items-center gap-2">
                          {(() => { const I = groupIconMap[group.title]; return I ? <I className="w-4 h-4 text-secondary" /> : null })()}
                          {group.title}
                          {group.title === 'Admin and support' && (
                            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary normal-case">Support & Security</span>
                          )}
                          {group.title === 'Usage' && (
                            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary normal-case">Pay‑as‑you‑go</span>
                          )}
                          {group.title === 'Integrations' && (
                            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary normal-case">SSO & APIs</span>
                          )}
                        </span>
                      </td>
                    </tr>
                    {group.rows.map((row, rowIdx) => (
                      <tr key={row.label} className={`border-t border-slate-200/50 ${rowIdx % 2 === 0 ? 'bg-card/40' : ''}`}>
                        <th scope="row" className="py-3 px-4 text-right text-slate-900 text-sm md:text-base font-medium sticky left-0 z-10 bg-card/80 backdrop-blur">
                          {row.label}
                        </th>
                        {row.values.map((val: any, i: number) => (
                          <td key={i} className="py-3 px-4 text-center">
                            {typeof val === 'boolean' ? (
                              val ? (
                                <span title="Included">
                                  <CheckCircle className="w-5 h-5 text-emerald-500 inline-block" aria-label="Included" />
                                </span>
                              ) : (
                                <span title="Not included">
                                  <XCircle className="w-5 h-5 text-rose-500 inline-block" aria-label="Not included" />
                                </span>
                              )
                            ) : (
                              <span className={`text-sm md:text-base ${String(val).toLowerCase().includes('contact') ? 'inline-flex items-center gap-2 text-secondary' : 'text-slate-700'}`}>
                                {String(val).toLowerCase().includes('contact') ? <Wallet className="w-4 h-4 text-secondary" /> : null}
                                {String(val).toLowerCase().includes('pay‑as‑you‑go') || String(val).toLowerCase().includes('pay-as-you-go') ? (
                                  <span className="px-2 py-0.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary">{val}</span>
                                ) : (
                                  val
                                )}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for enterprise-scale operations with the flexibility to meet your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-slate-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-secondary/10 border border-secondary/20">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Services & Consulting */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
              title: 'Custom Development',
              icon: Settings,
              subtitle: 'Tailored product extensions delivered by senior engineers',
              badges: ['SOW or T&M', 'Design System', 'Security Reviewed'],
              bullets: [
                'Custom forms & advanced reports',
                'Dashboards & workflow automations',
                'Data model & API extensions',
                'Design system & theming',
                'Performance & security reviews'
              ],
              cta: { label: 'Speak to a Solutions Architect', href: '/demo' }
            }, {
              title: 'Professional Services & Consulting',
              icon: Briefcase,
              subtitle: 'Expert guidance from discovery to enterprise rollout',
              badges: ['Enterprise', 'Change Mgmt', 'Governance'],
              bullets: [
                'Onboarding & training programs',
                'System integrations (CRM/ERP/SSO)',
                'Data migration & cleansing',
                'Change management & rollout',
                'Solution architecture & advisory',
                'Program management & governance'
              ],
              cta: { label: 'Book a consulting session', href: '/demo' }
            }].map((card) => (
              <Card key={card.title} className="glass-morphism h-full border border-slate-300/40 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {card.icon ? <card.icon className="w-5 h-5 text-primary" /> : null}
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-sm text-slate-600 mt-1">{card.subtitle}</p>
                    )}
                    {card.badges && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {card.badges.map((b: string) => (
                          <span key={b} className="text-xs px-2 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary">{b}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <ul className="space-y-2">
                      {card.bullets.slice(0, Math.ceil(card.bullets.length/2)).map((b: string) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5" />
                          <span className="text-slate-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2 mt-2 md:mt-0">
                      {card.bullets.slice(Math.ceil(card.bullets.length/2)).map((b: string) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5" />
                          <span className="text-slate-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                  {card.cta && (
                    <div className="mt-5">
                      <Button asChild className="bg-primary text-primary-foreground">
                        <a href={card.cta.href}>{card.cta.label}</a>
                  </Button>
                </div>
                  )}
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Pricing FAQs</h2>
            <p className="text-slate-600">Straight answers to common questions.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-slate-300/40 rounded-xl p-4 bg-card">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary border border-primary/20 group-open:rotate-45 transition-transform">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          </div>
        </div>
      </section>

      

      {/* Embedded Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
} 

// Local tiny icon to avoid importing another dependency just for plus
function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M11 11V5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6z" />
    </svg>
  )
}

// Simple ROI widget — bold theme colors, quick estimate, strong CTA
function SimpleROI({ selected, facilityCount }: { selected: string[]; facilityCount: number }) {
  // Heuristic: each module can contribute incremental annual savings potential based on ROI highlights
  const moduleValueMap: Record<string, number> = useMemo(() => ({
    inspect: 150000, // 40–60% faster inspections; 90–100% digital compliance trail
    ndt: 200000, // Cut inspector hours 30–50%; fewer re-inspections
    integrity: 300000, // Prevent unplanned downtime; extend asset life
    turn: 250000, // 30–45% shorter turnarounds; $1M+ per-event savings
    work: 120000, // 20–30% contractor cost reduction; improved labor utilization; fewer scheduling errors
    track: 100000, // 95% reduction in lost tools; better asset utilization
    comply: 100000, // Fewer fines; audit prep time cut from weeks to days
    command: 180000, // Prevent incidents worth $250k+ per claim; faster response
    vault: 80000, // 10–20% reduction in scaffolding rental and labor costs
    vision: 350000 // 15–25% uptime improvement; 300%+ ROI within 12–18 months
  }), [])

  const estimatedSavings = useMemo(() => {
    const perFacilitySavings = selected.reduce((sum, id) => sum + (moduleValueMap[id] || 0), 0)
    // Diminishing returns curve for many modules
    const diminishing = selected.length >= 6 ? 0.8 : selected.length >= 3 ? 0.9 : 1
    return Math.round(perFacilitySavings * diminishing * Math.max(1, facilityCount))
  }, [selected, facilityCount, moduleValueMap])

  // Compute annual cost using same pricing logic as Flex calculator (convert monthly to annual for ROI)
  const { annualCost, savings, discountRate } = useMemo(() => {
    const moduleSum = selected.reduce((sum, id) => {
      const m = modulePricing.find(mp => mp.id === id)
      return sum + (m ? m.startsAt : 0)
    }, 0)
    const bundleCount = selected.length
    // Module-driven discount: 2–5 modules = 5%, 6–10 modules = 10%, else 0%
    const discountRate = bundleCount >= 6 ? 0.10 : bundleCount >= 2 ? 0.05 : 0
    const discountedModules = Math.round(moduleSum * (1 - discountRate))
    const perFacilityMonthly = Math.max(FLEX_BASE_STARTS_AT + discountedModules, MIN_PER_FACILITY)
    const perFacilityAnnual = perFacilityMonthly * 12 // Convert to annual for ROI
    const total = perFacilityAnnual * Math.max(1, facilityCount)
    const saved = Math.max(0, moduleSum - discountedModules) * Math.max(1, facilityCount) * 12 // Annual savings
    return { annualCost: total, savings: saved, discountRate }
  }, [selected, facilityCount])

  const roiPercent = useMemo(() => {
    if (annualCost <= 0) return 0
    const net = estimatedSavings - annualCost
    return Math.round((net / annualCost) * 100)
  }, [estimatedSavings, annualCost])

  return (
    <Card className="border-2 border-primary/30 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold text-primary">Projected ROI</h3>
            <p className="text-slate-700 max-w-xl mt-2">Based on your Flex selection, this is a conservative annual savings estimate across your facilities. Actuals vary by workflows, data quality, and adoption.</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-extrabold text-primary">${estimatedSavings.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Estimated annual savings</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 border border-accent/30 bg-accent/10 text-accent">
              <span className="text-xs font-semibold">ROI</span>
              <span className="text-lg font-bold">{roiPercent}%</span>
            </div>
          </div>
        </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
          <div className="rounded-xl bg-muted p-3 border border-slate-300/40">
            <div className="text-slate-500">Annual cost for ROI (starts at)</div>
            <div className="font-semibold">${annualCost.toLocaleString()}</div>
          </div>
          <div className="rounded-xl bg-muted p-3 border border-slate-300/40">
            <div className="text-slate-500">Net benefit</div>
            <div className="font-semibold">${(estimatedSavings - annualCost).toLocaleString()}</div>
          </div>
          <div className="rounded-xl bg-muted p-3 border border-slate-300/40">
            <div className="text-slate-500">Facilities</div>
            <div className="font-semibold">{facilityCount}</div>
          </div>
          <div className="rounded-xl p-3 border border-accent/30 bg-accent/10">
            <div className="text-accent flex items-center justify-between">
              <span>Module bundle savings</span>
              {discountRate > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full border border-accent/40">{Math.round(discountRate * 100)}%</span>
              )}
            </div>
            <div className="text-2xl font-bold text-accent">${savings.toLocaleString()}</div>
          </div>
        </div>

        {/* ROI Calculation Explanation */}
        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <details className="group">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                How is ROI calculated?
              </span>
              <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-primary" />
                  ROI Formula:
                </div>
                <div className="font-mono text-xs bg-muted p-3 rounded mb-2 border border-border">
                  ROI % = (Net Benefit ÷ Annual Cost) × 100
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <div><strong>Net Benefit:</strong> ${(estimatedSavings - annualCost).toLocaleString()} = Estimated Savings (${estimatedSavings.toLocaleString()}) - Annual Cost (${annualCost.toLocaleString()})</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <div><strong>ROI %:</strong> {roiPercent}% = (${(estimatedSavings - annualCost).toLocaleString()} ÷ ${annualCost.toLocaleString()}) × 100</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  Annual Cost Breakdown:
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                    <div><strong>Monthly cost per facility:</strong> ${(annualCost / 12 / Math.max(1, facilityCount)).toLocaleString()} (from calculator above)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                    <div><strong>Annual cost:</strong> ${annualCost.toLocaleString()} = Monthly cost × 12 months × {facilityCount} {facilityCount === 1 ? 'facility' : 'facilities'}</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  Estimated Annual Savings:
                </div>
                <div className="text-xs">
                  Based on industry benchmarks and customer data, each module contributes measurable savings. Your selected modules estimate <strong className="text-accent">${estimatedSavings.toLocaleString()}/year</strong> in operational efficiency, reduced downtime, faster inspections, and compliance automation.
                </div>
              </div>

              <div className="bg-warning/10 rounded-lg p-3 border border-warning/30">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-foreground/80">
                    <strong>Important:</strong> These are conservative estimates. Actual ROI varies by facility size, current processes, data quality, and adoption rates. Contact our team for a customized ROI analysis based on your specific operations.
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-accent text-accent-foreground px-8 py-6 text-lg">
            <a href="/demo">Start free trial — risk‑free</a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground px-8 py-6 text-lg">
            <a href="#contact">Get a tailored ROI breakdown</a>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg">
            <a href="/demo">Review assumptions with an expert</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Flex Calculator Component (client-side only logic, no external deps)
type FlexProps = {
  selected: string[]
  onSelectedChange: (ids: string[]) => void
  facilityCount: number
  onFacilityCountChange: (n: number) => void
}

function FlexCalculator({ selected, onSelectedChange, facilityCount, onFacilityCountChange }: FlexProps) {

  const toggle = (id: string) => {
    onSelectedChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id])
  }

  const totals = useMemo(() => {
    const moduleSum = selected.reduce((sum, id) => {
      const m = modulePricing.find(mp => mp.id === id)
      return sum + (m ? m.startsAt : 0)
    }, 0)
    // Module-driven discount: 2–5 modules = 5%, 6–10 modules = 10%, else 0%
    const bundleCount = selected.length
    const discountRate = bundleCount >= 6 ? 0.10 : bundleCount >= 2 ? 0.05 : 0
    const modulesWithVolume = Math.round(moduleSum * (1 - discountRate))
    const listPerFacility = FLEX_BASE_STARTS_AT + moduleSum
    const discountedPerFacility = FLEX_BASE_STARTS_AT + modulesWithVolume
    const perFacility = Math.max(discountedPerFacility, MIN_PER_FACILITY) // enforce min/site/month
    const facilities = Math.max(1, facilityCount)
    const monthly = perFacility * facilities // Monthly total
    const savingsPerFacility = Math.max(0, listPerFacility - perFacility)
    const savingsTotal = savingsPerFacility * facilities
    const minFloorApplied = discountedPerFacility < MIN_PER_FACILITY
    return { perFacility, annual: monthly, savingsPerFacility, savingsTotal, listPerFacility, discountedPerFacility, discountRate, minFloorApplied }
  }, [selected, facilityCount])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="glass-morphism lg:col-span-2">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">Select modules</h3>
            <p className="text-sm text-slate-600">Monthly pricing shown is &ldquo;starts at&rdquo; guidance. Final quotes may vary based on scale and scope.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {modulePricing.map(m => {
              const active = selected.includes(m.id)
              return (
                <button key={m.id} onClick={() => toggle(m.id)} className={`w-full text-left rounded-xl border px-4 py-3 transition ${active ? 'border-primary/40 bg-primary/10' : 'border-slate-300/30 bg-card hover:bg-muted/50'}`} aria-pressed={active}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{m.name}</div>
                      <div className="text-xs text-slate-600 mt-1">{m.blurb}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-slate-500">Starts at</div>
                      <div className="text-sm font-bold text-slate-900">${m.startsAt.toLocaleString()}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-morphism animate-[fadeIn_0.6s_ease-out]">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><DollarSign className="w-5 h-5 text-secondary" />Your estimate</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 flex items-center gap-2"><Server className="w-4 h-4 text-slate-500" />Platform base (per facility)</span>
              <span className="font-medium">${FLEX_BASE_STARTS_AT.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 flex items-center gap-2"><Boxes className="w-4 h-4 text-slate-500" />Modules selected</span>
              <span className="font-medium">{selected.length}</span>
            </div>
            {(totals.listPerFacility !== totals.perFacility) && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">List price (per facility)</span>
                <span className="font-medium line-through text-slate-400">${totals.listPerFacility.toLocaleString()}</span>
              </div>
            )}
            {totals.discountRate > 0 && (
              <div className="flex items-center justify-between text-accent">
                <span className="text-sm flex items-center gap-2"><Percent className="w-4 h-4" />Discount per facility</span>
                <span className="font-medium">-{Math.round(totals.discountRate * 100)}% (${totals.savingsPerFacility.toLocaleString()})</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Per facility/month (starts at)</span>
              <span className="text-3xl font-bold">${totals.perFacility.toLocaleString()}</span>
            </div>
            {totals.minFloorApplied && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-600 font-medium">✓ Minimum commitment met</span>
                <span className="text-xs text-slate-500">${MIN_PER_FACILITY.toLocaleString()} min/month</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <label htmlFor="facilityCount" className="text-sm text-slate-600">Facilities</label>
              <input id="facilityCount" value={facilityCount} onChange={e => onFacilityCountChange(Math.max(1, Number(e.target.value) || 1))} type="number" min={1} className="ios-input w-24 text-right" />
            </div>
            {totals.discountRate > 0 && (
              <div className="flex items-center justify-between border-t border-slate-300/30 pt-3">
                <span className="text-sm text-secondary">Total module bundle savings</span>
                <span className="text-2xl font-bold text-secondary">${totals.savingsTotal.toLocaleString()}</span>
              </div>
            )}
            <div className="flex items-center justify-between border-t border-slate-300/30 pt-3">
              <span className="text-sm text-slate-600">Monthly estimate (starts at)</span>
              <span className="text-2xl font-bold">${totals.annual.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Button asChild className="bg-primary text-primary-foreground">
              <a href="#contact">Request tailored quote</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/demo">Discuss with sales</a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">Estimates exclude taxes. {selected.length === 0 ? `Minimum ${MIN_PER_FACILITY.toLocaleString()}/site/month applies.` : ''} Final pricing depends on scope, integrations, and SLAs.</p>
        </CardContent>
      </Card>
    </div>
  )
} 