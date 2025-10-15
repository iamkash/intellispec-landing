import React from 'react'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
// Icon imports removed - using string names instead

const aerospaceIndustry = {
  name: 'Aerospace',
  description: 'Transform aerospace operations through our comprehensive framework: INSPECT aircraft systems, ASSESS structural integrity, PLAN maintenance cycles, EXECUTE precision repairs, MONITOR flight performance, and COMPLY with aviation standards. Ensure safety and reliability in mission-critical environments.',
  heroImage: '/images/industries/aerospace.jpg',
  badge: 'Asset Integrity & Compliance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Aerospace Evolution',
    description: 'Transform your aerospace operations from reactive maintenance to predictive intelligence with comprehensive asset management and safety protocols.',
    phases: [
      {
        phase: 1,
        title: 'Manual Systems',
        period: '1990s-2000s',
        description: 'Paper-based maintenance logs, manual inspections, reactive repairs, and isolated safety protocols.',
        icon: "AlertTriangle",
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Adoption',
        period: '2000s-2010s',
        description: 'Digital documentation, scheduled maintenance, basic tracking, and connected systems.',
        icon: "Settings",
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Aerospace',
        period: '2010s-2020s',
        description: 'IoT sensors, real-time monitoring, predictive analytics, and integrated platforms.',
        icon: "Activity",
        status: 'progress' as const
      },
      {
        phase: 4,
        title: 'Intelligent Operations',
        period: '2020s+',
        description: 'AI-powered optimization, autonomous systems, predictive intelligence, and complete visibility.',
        icon: "Rocket",
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Aerospace Solutions',
    description: 'How intelliSPEC addresses specific aerospace challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Critical aircraft component failures causing safety risks and flight delays',
        solution: 'AI-powered predictive maintenance with real-time component health monitoring',
        result: '95% reduction in unplanned maintenance, 99.9% safety compliance',
        icon: "AlertTriangle"
      },
      {
        challenge: 'Complex regulatory compliance across multiple aviation authorities',
        solution: 'Automated compliance management with digital documentation and audit trails',
        result: '100% audit pass rate, 60% faster compliance reporting',
        icon: "FileText"
      },
      {
        challenge: 'Manual inspection processes leading to missed defects and delays',
        solution: 'AI-powered visual inspection with automated defect detection',
        result: '99.8% defect detection accuracy, 50% faster inspections',
        icon: "Search"
      },
      {
        challenge: 'Lack of real-time visibility into aircraft and component status',
        solution: 'Real-time asset tracking with performance analytics and optimization',
        result: '100% asset visibility, 40% improved operational efficiency',
        icon: "BarChart3"
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to aerospace excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'System integration, data migration, and initial training to establish your digital aerospace foundation.',
        icon: "Wrench",
        features: [
          'System integration and setup',
          'Data migration and validation',
          'Team training and onboarding',
          'Initial process digitization'
        ],
        roi: '20% efficiency gain'
      },
      {
        months: '3-6',
        title: 'Process Optimization',
        description: 'Deploy predictive analytics, automate workflows, and optimize maintenance processes for maximum safety.',
        icon: "Settings",
        features: [
          'Predictive maintenance deployment',
          'Automated inspection workflows',
          'Compliance automation',
          'Performance monitoring'
        ],
        roi: '45% productivity increase'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete operational excellence with AI-powered insights, autonomous systems, and predictive intelligence.',
        icon: "Rocket",
        features: [
          'AI-powered optimization',
          'Autonomous quality control',
          'Predictive intelligence',
          'Complete visibility'
        ],
        roi: '60%+ operational excellence'
      }
    ]
  },
  solutionsMatrix: [
    {
      challenge: {
        title: "Aircraft Component Failures",
        description: "Critical aircraft component failures causing flight delays, safety risks, and costly unscheduled maintenance",
        icon: "AlertTriangle",
        color: "from-destructive to-destructive/80",
        impact: "$10M+ average cost per aircraft grounding"
      },
      solution: {
        title: "Predictive Aircraft Integrity Management",
        description: "AI-powered component health monitoring and predictive maintenance for critical aircraft systems",
        icon: "Shield",
        color: "from-primary to-primary/80",
        modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
      },
      expertise: {
        title: "Aviation Integrity Specialists",
        description: "Leveraging deep expertise in aerospace asset integrity and aviation maintenance standards",
        icon: "Shield",
        color: "from-primary to-primary/80",
        years: "Aviation Leaders"
      },
      outcome: {
        metric: "85%",
        label: "Reduction in unscheduled maintenance",
        color: "text-primary",
        icon: "TrendingUp",
        bgColor: "from-primary to-primary/80"
      }
    },
    {
      challenge: {
        title: "Aviation Compliance Gaps",
        description: "Complex aviation regulations and safety standards causing compliance failures and potential groundings",
        icon: "Search",
        color: "from-secondary to-secondary/80",
        impact: "Regulatory violations and flight restrictions"
      },
      solution: {
        title: "Digital Aviation Compliance",
        description: "Automated compliance management with real-time monitoring and regulatory reporting for aviation standards",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        modules: ["IntelliInspect", "IntelliComply", "IntelliVision"]
      },
      expertise: {
        title: "Aviation Compliance Excellence",
        description: "Leveraging expertise in FAA, EASA, and international aviation compliance standards",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        years: "Compliance Leaders"
      },
      outcome: {
        metric: "100%",
        label: "Aviation compliance achievement",
        color: "text-secondary",
        icon: "CheckCircle",
        bgColor: "from-secondary to-secondary/80"
      }
    },
    {
      challenge: {
        title: "Aircraft Health Blindness",
        description: "Limited visibility into aircraft system health leading to unexpected failures and safety incidents",
        icon: "Eye",
        color: "from-accent to-accent/80",
        impact: "Unexpected failures and safety risks"
      },
      solution: {
        title: "Real-Time Aircraft Health Monitoring",
        description: "Continuous monitoring of aircraft systems with predictive analytics and early warning systems",
        icon: "Activity",
        color: "from-accent to-accent/80",
        modules: ["IntelliIntegrity", "IntelliVision", "IntelliCommand"]
      },
      expertise: {
        title: "Aviation Analytics Mastery",
        description: "Leveraging expertise in aircraft sensors, predictive analytics, and flight system monitoring",
        icon: "Activity",
        color: "from-accent to-accent/80",
        years: "Aviation Analytics Leaders"
      },
      outcome: {
        metric: "99.5%",
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
      subtitle: "Aircraft Integrity Implementation",
      phase: "Foundation",
      description: "Deploy aircraft integrity management system with predictive maintenance capabilities and aviation compliance monitoring.",
      items: [
        { icon: "Shield", text: "Aircraft integrity baseline established", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Optimization Phase", 
      subtitle: "Predictive Analytics Deployment",
      phase: "Optimization",
      description: "Implement predictive analytics and automated inspection systems for proactive component failure prevention.",
      items: [
        { icon: "TrendingUp", text: "85% reduction in unscheduled maintenance", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Excellence Phase",
      subtitle: "Full Aviation Integrity Maturity",
      phase: "Excellence", 
      description: "Achieve complete aircraft integrity management with predictive maintenance and 100% aviation compliance.",
      items: [
        { icon: "Rocket", text: "99.9% aircraft integrity achievement", type: "success" as const }
      ]
    }
  ],
  personas: [
    {
      role: 'Aircraft Maintenance Manager',
      focus: 'Aircraft integrity, predictive maintenance, airworthiness compliance',
      icon: "Shield",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Critical aircraft components failing unexpectedly, causing flight delays, safety risks, and costly unscheduled maintenance.',
        solution: 'AI-powered aircraft integrity management with predictive maintenance, real-time monitoring, and failure prevention.',
        outcome: 'Reduced unscheduled maintenance by 85% and achieved 99.9% aircraft availability.'
      },
      metrics: { maintenance: '85%', availability: '99.9%', integrity: '99%' },
      testimonial: {
        quote: "intelliSPEC's aircraft integrity platform transformed our maintenance from reactive to predictive. We now prevent failures before they ground aircraft.",
        author: "Captain Sarah Mitchell",
        title: "Aircraft Maintenance Director",
        company: "Global Aviation Services"
      },
      features: ['Predictive Aircraft Health', 'Failure Prevention', 'Real-time Monitoring']
    },
    {
      role: 'Aviation Compliance Officer',
      focus: 'FAA/EASA compliance, audit readiness, airworthiness standards',
      icon: "CheckCircle",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
      story: {
        challenge: 'Complex aviation regulations and compliance requirements causing audit failures and potential aircraft groundings.',
        solution: 'Automated aviation compliance management with real-time monitoring, regulatory reporting, and airworthiness tracking.',
        outcome: 'Achieved 100% compliance rate and zero regulatory violations across entire fleet.'
      },
      metrics: { compliance: '100%', violations: '0', audits: '100%' },
      testimonial: {
        quote: "The automated compliance system ensures we exceed every FAA and EASA requirement. Our audit performance is industry-leading.",
        author: "Dr. Michael Chen",
        title: "Aviation Compliance Director",
        company: "Aerospace Regulatory Excellence"
      },
      features: ['Automated Compliance', 'Regulatory Reporting', 'Airworthiness Tracking']
    },
    {
      role: 'Chief Aircraft Inspector',
      focus: 'Aircraft inspections, NDT testing, structural integrity',
      icon: "Search",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
      story: {
        challenge: 'Manual aircraft inspections taking weeks, missing critical defects, and failing to meet aviation safety standards.',
        solution: 'Digital inspection platform with AI-powered defect detection, automated reporting, and compliance tracking.',
        outcome: 'Achieved 100% inspection accuracy and reduced inspection time by 70%.'
      },
      metrics: { accuracy: '100%', speed: '70%', defects: '95%' },
      testimonial: {
        quote: "The digital inspection system revolutionized our aircraft safety program. We now catch every defect and maintain perfect safety records.",
        author: "Captain Jennifer Rodriguez",
        title: "Chief Aircraft Inspector",
        company: "Aviation Safety Solutions"
      },
      features: ['Digital Inspection Forms', 'AI Defect Detection', 'Automated Safety Reporting']
    },
    {
      role: 'Flight Operations Manager',
      focus: 'Flight safety, operational efficiency, fleet management',
      icon: "Rocket",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Flight delays and cancellations due to unexpected maintenance issues and poor fleet visibility.',
        solution: 'Real-time fleet management with predictive analytics, maintenance scheduling, and operational optimization.',
        outcome: 'Improved on-time performance by 95% and reduced flight cancellations by 80%.'
      },
      metrics: { onTime: '95%', cancellations: '80%', efficiency: '90%' },
      testimonial: {
        quote: "The predictive fleet management system eliminated surprise maintenance issues. Our operational reliability has never been better.",
        author: "Captain Lisa Park",
        title: "Flight Operations Director",
        company: "Premier Aviation Operations"
      },
      features: ['Fleet Management', 'Predictive Scheduling', 'Operational Optimization']
    },
    {
      role: 'Aviation Safety Director',
      focus: 'Flight safety, incident prevention, safety compliance',
      icon: "HardHat",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
      story: {
        challenge: 'Safety incidents and near-misses due to equipment failures and inadequate safety monitoring.',
        solution: 'Integrated safety and asset integrity management with hazard prediction, compliance monitoring, and preventive controls.',
        outcome: 'Achieved zero safety incidents and 100% safety compliance rating across all operations.'
      },
      metrics: { incidents: '0', compliance: '100%', safety: '99.9%' },
      testimonial: {
        quote: "The integrated safety platform prevents hazards before they occur. Our safety record is now the industry benchmark.",
        author: "Captain Robert Kim",
        title: "Aviation Safety Director",
        company: "Secure Aviation Systems"
      },
      features: ['Hazard Prediction', 'Safety Compliance', 'Preventive Safety Controls']
    },
    {
      role: 'Aircraft Reliability Engineer',
      focus: 'Component reliability, failure analysis, integrity optimization',
      icon: "Activity",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
      story: {
        challenge: 'Recurring aircraft component failures with no clear root cause analysis, leading to repeated groundings.',
        solution: 'Advanced reliability engineering with failure mode analysis, component health modeling, and integrity optimization.',
        outcome: 'Increased mean time between failures (MTBF) by 400% and reduced maintenance costs by 50%.'
      },
      metrics: { mtbf: '400%', costs: '50%', reliability: '99.5%' },
      testimonial: {
        quote: "The reliability insights revealed failure patterns we never understood. Our aircraft now fly longer and more reliably than ever.",
        author: "Dr. Amanda Foster",
        title: "Chief Reliability Engineer",
        company: "Advanced Aviation Reliability"
      },
      features: ['Failure Mode Analysis', 'Component Health Modeling', 'Reliability Optimization']
    },
    {
      role: 'Quality Assurance Manager',
      focus: 'Manufacturing quality, aviation standards, defect prevention',
      icon: "Target",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Quality control gaps in aircraft manufacturing leading to defective components and safety risks.',
        solution: 'Comprehensive quality assurance with automated inspection, statistical process control, and aviation compliance monitoring.',
        outcome: 'Achieved aerospace quality standards with 99.99% defect-free production and zero safety violations.'
      },
      metrics: { quality: '99.99%', defects: '99%', compliance: '100%' },
      testimonial: {
        quote: "The quality assurance platform elevated our standards to aerospace excellence. We now set the quality benchmark for the industry.",
        author: "Dr. Maria Santos",
        title: "Aviation Quality Director",
        company: "Precision Aerospace Quality"
      },
      features: ['Automated Inspection', 'Statistical Process Control', 'Aviation Compliance Monitoring']
    }
  ],
  metrics: [
    { label: 'Asset Integrity', value: '99.9%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '85%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '90%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99.5%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ]
}

export default function AerospacePage() {
  return (
    <>
      <IndustryTemplate
        industryName={aerospaceIndustry.name}
        industryDescription={aerospaceIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={aerospaceIndustry.heroImage}
        badge={aerospaceIndustry.badge}
        successMetrics={aerospaceIndustry.metrics}
        chaosToClarity={aerospaceIndustry.chaosToClarity}
        challengeSolution={aerospaceIndustry.challengeSolution}
        implementationProcess={aerospaceIndustry.implementationProcess}
        roiJourney={aerospaceIndustry.roiJourney}
        solutionsMatrix={aerospaceIndustry.solutionsMatrix}
        personas={aerospaceIndustry.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Aerospace Operations?"
        ctaDescription="Join leading aerospace companies achieving operational excellence with intelliSPEC's comprehensive aviation solutions."
      />
      <LLMReadyBlock
        intent="Aerospace FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does the platform support FAA and EASA compliance with auditable evidence?', a: 'It automates evidence capture, generates audit‑ready reports, and maps controls to FAA/EASA requirements.' },
          { q: 'Can predictive maintenance reduce aircraft groundings by monitoring critical systems?', a: 'Yes. We model component health and flag early risks to prevent unscheduled maintenance.' },
          { q: 'How are digital inspections managed and validated for airworthiness?', a: 'Digital forms with validations, photo markup, signatures, and traceable approvals ensure airworthiness.' },
          { q: 'Do you integrate with fleet systems, CMMS/ERP, and MRO data sources?', a: 'Yes. API adapters synchronize work orders, parts, and status with MRO and ERP/CMMS.' },
          { q: 'Is real‑time aircraft and component status visible across the fleet?', a: 'Fleet dashboards show live status, integrity KPIs, and utilization for every tail and subassembly.' },
          { q: 'Can technicians work offline on the ramp or hangar and sync later?', a: 'Yes. Mobile workflows operate offline and securely sync when connectivity returns.' },
          { q: 'How are defect detections from NDT and visual inspections analyzed?', a: 'AI‑assisted vision and signal analysis categorize, size, and trend defects for action.' },
          { q: 'What is the approach to configuration control and change traceability?', a: 'Every edit is versioned with user, time, rationale, and linked approvals for full traceability.' },
          { q: 'Can the system generate and track corrective actions and service bulletins?', a: 'Yes. Findings create tasks/CAPAs, linked to bulletins or directives with due‑date tracking.' },
          { q: 'How is sensitive operational and maintenance data secured?', a: 'Encryption in transit/at rest, RBAC, SSO, and detailed audit logs protect all data.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Increase availability and safety with predictive aircraft integrity, digital inspections, and automated
            compliance—while improving visibility from component to fleet.
          </p>
        )}
        takeaways={[
          'Predictive integrity reduces unscheduled maintenance',
          'Digital inspections speed audits and reporting',
          'Fleet dashboards provide end-to-end visibility',
        ]}
      />
    </>
  )
}
