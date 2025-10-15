import React from 'react'
import type { Metadata } from 'next'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
import { createPageMetadata } from '@/lib/seo'
// Icon imports removed - using string names instead

const utilitiesIndustry = {
  name: 'Utilities & Power',
  description: 'Transform utility operations through our comprehensive framework: INSPECT infrastructure systems, ASSESS asset health, PLAN maintenance schedules, EXECUTE targeted interventions, MONITOR service performance, and COMPLY with utility standards. Ensure reliable service delivery and operational excellence.',
  heroImage: '/images/industries/utilities.jpg',
  badge: 'Asset Integrity & Compliance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Utilities Evolution',
    description: 'Transform your utility operations from reactive maintenance to predictive intelligence with comprehensive infrastructure management and service optimization.',
    phases: [
      {
        phase: 1,
        title: 'Legacy Systems',
        period: '1990s-2000s',
        description: 'Manual meter readings, reactive maintenance, paper-based records, and isolated systems.',
        icon: "AlertTriangle",
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Adoption',
        period: '2000s-2010s',
        description: 'Digital meters, scheduled maintenance, basic SCADA systems, and connected infrastructure.',
        icon: "Settings",
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Grid',
        period: '2010s-2020s',
        description: 'IoT sensors, real-time monitoring, predictive analytics, and integrated platforms.',
        icon: "Activity",
        status: 'progress' as const
      },
      {
        phase: 4,
        title: 'Intelligent Infrastructure',
        period: '2020s+',
        description: 'AI-powered optimization, autonomous systems, predictive intelligence, and complete visibility.',
        icon: "Globe",
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Utilities Solutions',
    description: 'How intelliSPEC addresses specific utility challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Grid failures and outages causing service disruptions and revenue loss',
        solution: 'AI-powered grid monitoring with predictive failure detection and automated response',
        result: '95% reduction in unplanned outages, 99.5% service reliability',
        icon: "AlertTriangle"
      },
      {
        challenge: 'Aging infrastructure requiring costly reactive maintenance',
        solution: 'Predictive maintenance with real-time asset health monitoring and optimization',
        result: '60% reduction in maintenance costs, 40% extended asset life',
        icon: "Wrench"
      },
      {
        challenge: 'Manual inspection processes leading to missed issues and delays',
        solution: 'Automated inspection workflows with AI-powered defect detection',
        result: '99% defect detection accuracy, 50% faster inspections',
        icon: "Search"
      },
      {
        challenge: 'Lack of real-time visibility into infrastructure performance',
        solution: 'Real-time monitoring with performance analytics and optimization',
        result: '100% infrastructure visibility, 35% improved efficiency',
        icon: "BarChart3"
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to utility excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'System integration, data migration, and initial training to establish your digital utility foundation.',
        icon: "Wrench",
        features: [
          'System integration and setup',
          'Data migration and validation',
          'Team training and onboarding',
          'Initial process digitization'
        ],
        roi: '15% efficiency gain'
      },
      {
        months: '3-6',
        title: 'Process Optimization',
        description: 'Deploy predictive analytics, automate workflows, and optimize infrastructure management.',
        icon: "Settings",
        features: [
          'Predictive maintenance deployment',
          'Grid monitoring automation',
          'Performance optimization',
          'Real-time analytics'
        ],
        roi: '35% productivity increase'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete operational excellence with AI-powered insights, autonomous systems, and predictive intelligence.',
        icon: "Globe",
        features: [
          'AI-powered optimization',
          'Autonomous grid management',
          'Predictive intelligence',
          'Complete visibility'
        ],
        roi: '50%+ operational excellence'
      }
    ]
  },
  solutionsMatrix: [
    {
      challenge: {
        title: "Utility Infrastructure Failures",
        description: "Critical utility infrastructure failures causing service outages and customer dissatisfaction",
        icon: "AlertTriangle",
        color: "from-destructive to-destructive/80",
        impact: "$50M+ average cost per major outage"
      },
      solution: {
        title: "Predictive Utility Asset Integrity Management",
        description: "AI-powered infrastructure health monitoring and predictive maintenance for critical utility assets",
        icon: "Shield",
        color: "from-primary to-primary/80",
        modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
      },
      expertise: {
        title: "Utility Asset Integrity Specialists",
        description: "Leveraging deep expertise in utility asset integrity and infrastructure maintenance standards",
        icon: "Shield",
        color: "from-primary to-primary/80",
        years: "Utility Asset Leaders"
      },
      outcome: {
        metric: "85%",
        label: "Reduction in service outages",
        color: "text-primary",
        icon: "TrendingUp",
        bgColor: "from-primary to-primary/80"
      }
    },
    {
      challenge: {
        title: "Utility Compliance Gaps",
        description: "Complex utility regulations and safety standards causing compliance failures and potential penalties",
        icon: "Search",
        color: "from-secondary to-secondary/80",
        impact: "Regulatory violations and service restrictions"
      },
      solution: {
        title: "Digital Utility Compliance",
        description: "Automated compliance management with real-time monitoring and regulatory reporting for utility standards",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        modules: ["IntelliInspect", "IntelliComply", "IntelliVision"]
      },
      expertise: {
        title: "Utility Compliance Excellence",
        description: "Leveraging expertise in utility regulatory compliance and safety standards",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        years: "Utility Compliance Leaders"
      },
      outcome: {
        metric: "100%",
        label: "Utility compliance achievement",
        color: "text-secondary",
        icon: "CheckCircle",
        bgColor: "from-secondary to-secondary/80"
      }
    },
    {
      challenge: {
        title: "Infrastructure Health Blindness",
        description: "Limited visibility into utility infrastructure condition leading to unexpected failures and service disruptions",
        icon: "Eye",
        color: "from-accent to-accent/80",
        impact: "Unexpected failures and service outages"
      },
      solution: {
        title: "Real-Time Infrastructure Health Monitoring",
        description: "Continuous monitoring of utility infrastructure with predictive analytics and early warning systems",
        icon: "Activity",
        color: "from-accent to-accent/80",
        modules: ["IntelliIntegrity", "IntelliVision", "IntelliCommand"]
      },
      expertise: {
        title: "Infrastructure Analytics Mastery",
        description: "Leveraging expertise in IoT sensors, predictive analytics, and infrastructure health monitoring",
        icon: "Activity",
        color: "from-accent to-accent/80",
        years: "Infrastructure Analytics Leaders"
      },
      outcome: {
        metric: "98%",
        label: "Early failure detection rate",
        color: "text-accent",
        icon: "TrendingUp",
        bgColor: "from-accent to-accent/80"
      }
    }
  ],
  roiJourney: [
    {
      months: "0-3",
      title: "Foundation Phase",
      subtitle: "Infrastructure Integrity Implementation",
      phase: "Foundation",
      description: "Deploy utility infrastructure integrity management system with predictive maintenance capabilities and compliance monitoring.",
      items: [
        { icon: "Shield", text: "Infrastructure integrity baseline established", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Optimization Phase", 
      subtitle: "Predictive Analytics Deployment",
      phase: "Optimization",
      description: "Implement predictive analytics and automated inspection systems for proactive infrastructure failure prevention.",
      items: [
        { icon: "TrendingUp", text: "85% reduction in service outages", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Excellence Phase",
      subtitle: "Full Infrastructure Integrity Maturity",
      phase: "Excellence", 
      description: "Achieve complete infrastructure integrity management with predictive maintenance and 100% utility compliance.",
      items: [
        { icon: "Globe", text: "98% infrastructure integrity achievement", type: "success" as const }
      ]
    }
  ],
  personas: [
    {
      role: 'Utility Asset Manager',
      focus: 'Infrastructure integrity, predictive maintenance, asset reliability',
      icon: "Shield",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Critical utility infrastructure failing unexpectedly, causing widespread service outages and customer dissatisfaction.',
        solution: 'AI-powered utility asset integrity management with predictive maintenance, real-time monitoring, and failure prevention.',
        outcome: 'Reduced service outages by 85% and achieved 99.5% infrastructure availability.'
      },
      metrics: { outages: '85%', availability: '99.5%', integrity: '98%' },
      testimonial: {
        quote: "intelliSPEC's infrastructure integrity platform transformed our utility operations from reactive to predictive. We now prevent outages before they impact customers.",
        author: "Robert Chen",
        title: "Utility Asset Manager",
        company: "Metropolitan Utility Services"
      },
      features: ['Predictive Infrastructure Health', 'Outage Prevention', 'Real-time Monitoring']
    },
    {
      role: 'Utility Compliance Officer',
      focus: 'Regulatory compliance, safety standards, audit readiness',
      icon: "CheckCircle",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
      story: {
        challenge: 'Complex utility regulations and compliance requirements causing audit failures and potential service restrictions.',
        solution: 'Automated utility compliance management with real-time monitoring, regulatory reporting, and safety tracking.',
        outcome: 'Achieved 100% compliance rate and zero regulatory violations across all utility operations.'
      },
      metrics: { compliance: '100%', violations: '0', audits: '100%' },
      testimonial: {
        quote: "The automated compliance system ensures we exceed every utility regulation. Our audit performance is now the industry standard.",
        author: "Dr. Sarah Martinez",
        title: "Utility Compliance Director",
        company: "Regional Utility Compliance"
      },
      features: ['Automated Compliance', 'Regulatory Reporting', 'Safety Standards Tracking']
    },
    {
      role: 'Chief Utility Inspector',
      focus: 'Infrastructure inspections, safety assessments, system integrity',
      icon: "Search",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
      story: {
        challenge: 'Manual utility infrastructure inspections taking weeks, missing critical defects, and failing safety standards.',
        solution: 'Digital inspection platform with AI-powered defect detection, automated reporting, and safety compliance tracking.',
        outcome: 'Achieved 100% inspection accuracy and reduced inspection time by 80%.'
      },
      metrics: { accuracy: '100%', speed: '80%', defects: '95%' },
      testimonial: {
        quote: "The digital inspection system revolutionized our utility safety program. We now catch every defect and maintain perfect safety records.",
        author: "Michael Rodriguez",
        title: "Chief Utility Inspector",
        company: "Utility Safety Solutions"
      },
      features: ['Digital Inspection Forms', 'AI Defect Detection', 'Automated Safety Reporting']
    },
    {
      role: 'Operations Manager',
      focus: 'Service reliability, operational efficiency, customer satisfaction',
      icon: "Globe",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Service interruptions and customer complaints due to unexpected infrastructure failures and poor system visibility.',
        solution: 'Real-time utility operations management with predictive analytics, service monitoring, and customer communication.',
        outcome: 'Improved service reliability by 99.5% and reduced customer complaints by 90%.'
      },
      metrics: { reliability: '99.5%', complaints: '90%', satisfaction: '95%' },
      testimonial: {
        quote: "The predictive operations system eliminated surprise service interruptions. Our customer satisfaction has never been higher.",
        author: "Jennifer Park",
        title: "Utility Operations Director",
        company: "Premier Utility Operations"
      },
      features: ['Service Monitoring', 'Predictive Analytics', 'Customer Communication']
    },
    {
      role: 'Utility Safety Director',
      focus: 'Worker safety, public safety, incident prevention',
      icon: "HardHat",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
      story: {
        challenge: 'Safety incidents and public hazards due to infrastructure failures and inadequate safety monitoring.',
        solution: 'Integrated safety and asset integrity management with hazard prediction, compliance monitoring, and preventive controls.',
        outcome: 'Achieved zero safety incidents and 100% safety compliance rating across all utility operations.'
      },
      metrics: { incidents: '0', compliance: '100%', safety: '100%' },
      testimonial: {
        quote: "The integrated safety platform prevents hazards before they occur. Our safety record is now the utility industry benchmark.",
        author: "Captain David Kim",
        title: "Utility Safety Director",
        company: "Secure Utility Systems"
      },
      features: ['Hazard Prediction', 'Safety Compliance', 'Preventive Safety Controls']
    },
    {
      role: 'Infrastructure Reliability Engineer',
      focus: 'System reliability, failure analysis, performance optimization',
      icon: "Activity",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
      story: {
        challenge: 'Recurring infrastructure failures with no clear root cause analysis, leading to repeated service disruptions.',
        solution: 'Advanced reliability engineering with failure mode analysis, infrastructure health modeling, and performance optimization.',
        outcome: 'Increased mean time between failures (MTBF) by 300% and reduced maintenance costs by 40%.'
      },
      metrics: { mtbf: '300%', costs: '40%', reliability: '99%' },
      testimonial: {
        quote: "The reliability insights revealed failure patterns we never understood. Our infrastructure now operates longer and more reliably than ever.",
        author: "Dr. Lisa Foster",
        title: "Chief Reliability Engineer",
        company: "Advanced Utility Reliability"
      },
      features: ['Failure Mode Analysis', 'Infrastructure Health Modeling', 'Performance Optimization']
    },
    {
      role: 'Maintenance Supervisor',
      focus: 'Preventive maintenance, asset longevity, cost optimization',
      icon: "Settings",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Reactive maintenance approach causing unexpected failures and high repair costs across utility infrastructure.',
        solution: 'Predictive maintenance system with asset health monitoring, failure prediction, and maintenance optimization.',
        outcome: 'Prevented 90% of infrastructure failures and achieved 99% asset availability.'
      },
      metrics: { failures: '90%', availability: '99%', costs: '35%' },
      testimonial: {
        quote: "The predictive maintenance system transformed our approach from reactive to proactive. We now maintain infrastructure health before problems occur.",
        author: "Mark Thompson",
        title: "Utility Maintenance Manager",
        company: "Proactive Utility Maintenance"
      },
      features: ['Asset Health Monitoring', 'Failure Prediction', 'Maintenance Optimization']
    }
  ],
  metrics: [
    { label: 'Asset Integrity', value: '98%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '85%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '80%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99.5%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ]
}

// Replace any icon function references with serializable string names for Client Components
function sanitizeIcons<T>(value: T): T {
  if (Array.isArray(value)) {
    // @ts-ignore
    return value.map(sanitizeIcons)
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (k === 'icon') {
        // @ts-ignore
        out[k] = typeof v === 'function' ? (v as Function).name : v
      } else {
        // @ts-ignore
        out[k] = sanitizeIcons(v as any)
      }
    }
    // @ts-ignore
    return out
  }
  return value
}

const safeIndustry = sanitizeIcons(utilitiesIndustry)

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Utilities & Power – Utilities Intelligence | AI Grid, Monitoring, Optimization',
    description:
      "Transform utility operations with AI-powered grid management, real-time infrastructure monitoring, and intelligent asset optimization.",
    canonicalPath: '/industries/utilities',
  })
}

export default function UtilitiesPage() {
  return (
    <>
      <IndustryTemplate
        industryName={safeIndustry.name}
        industryDescription={safeIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={safeIndustry.heroImage}
        badge={safeIndustry.badge}
        successMetrics={safeIndustry.metrics}
        chaosToClarity={safeIndustry.chaosToClarity}
        challengeSolution={safeIndustry.challengeSolution}
        implementationProcess={safeIndustry.implementationProcess}
        roiJourney={safeIndustry.roiJourney}
        solutionsMatrix={safeIndustry.solutionsMatrix}
        personas={safeIndustry.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Utility Operations?"
        ctaDescription="Join leading utility companies achieving operational excellence with intelliSPEC's comprehensive infrastructure solutions."
      />
      <LLMReadyBlock
        intent="Utilities & Power FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does the platform integrate with EAM/CMMS and SCADA/IoT sources?', a: 'APIs sync assets/work orders; SCADA/IoT tags are ingested for analytics.' },
          { q: 'Can predictive integrity reduce outages across lines, substations, and plants?', a: 'Yes. Models forecast failures and prioritize interventions to avoid outages.' },
          { q: 'How are digital inspections and permits managed with evidence?', a: 'Digital forms, PTW workflows, media, and signatures produce audit‑ready evidence.' },
          { q: 'Do dashboards give system‑wide visibility with risk heatmaps?', a: 'Yes. Integrity KPIs and heatmaps highlight risk by feeder, substation, and asset.' },
          { q: 'Is offline capture supported for field crews?', a: 'Yes. Work continues offline and syncs securely later.' },
          { q: 'Can CAPA and switching orders be orchestrated from findings?', a: 'Yes. Findings create tasks/CAPA and route approvals for switching orders.' },
          { q: 'What compliance frameworks are supported (NERC/FERC/state)?', a: 'Configurable mappings and evidence reports support NERC/FERC and state rules.' },
          { q: 'How is data segmented and secured across regions and crews?', a: 'RBAC by role/region, encryption, SSO, and immutable audit logs.' },
          { q: 'What are typical deployment timelines for pilots and scale?', a: 'Pilots in 4–6 weeks; scale region‑by‑region using templates and connectors.' },
          { q: 'Can alerts and automations trigger permits, crews, and notifications?', a: 'Yes. Rules trigger PTW, dispatch crews, and send multi‑channel alerts.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Improve reliability and safety with predictive asset integrity, digital inspections, and unified grid
            analytics for utilities.
          </p>
        )}
        takeaways={[
          'Outages cut via predictive analytics',
          'Automated compliance evidence',
          'SCADA + inspections in one view',
        ]}
      />
    </>
  )
}
