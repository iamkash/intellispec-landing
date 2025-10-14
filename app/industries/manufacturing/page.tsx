"use client"

import React from 'react'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
import { 
  Cog, 
  Shield, 
  Settings, 
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Clock,
  Award,
  Search,
  FileText,
  Database,
  Activity,
  BarChart3,
  AlertTriangle,
  Package,
  TrendingDown,
  Wrench,
  Building2,
  Calendar,
  HardHat,
  Eye,
  Zap,
  Rocket
} from 'lucide-react'

const manufacturingIndustry = {
  name: 'Manufacturing',
  description: 'Transform manufacturing operations through our comprehensive framework: INSPECT critical equipment and assets, ASSESS corrosion and mechanical integrity, PLAN maintenance and turnarounds, EXECUTE precision interventions, MONITOR asset health in real-time, and COMPLY with regulatory standards. Empower your team with intelligent inspection, assessment, planning, execution, monitoring, and compliance capabilities.',
  heroImage: '/images/industries/manufacturing.JPG',
  badge: 'Asset Integrity & Compliance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Manufacturing Evolution',
    description: 'Transform your manufacturing operations from reactive chaos to predictive clarity with intelligent automation and data-driven insights.',
    phases: [
      {
        phase: 1,
        title: 'Legacy Systems',
        period: '1990s-2000s',
        description: 'Manual processes, paper-based tracking, reactive maintenance, and isolated systems.',
          icon: AlertTriangle,
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Adoption',
        period: '2000s-2010s',
        description: 'Basic automation, digital documentation, scheduled maintenance, and connected systems.',
        icon: Settings,
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Manufacturing',
        period: '2010s-2020s',
        description: 'IoT sensors, real-time monitoring, predictive analytics, and integrated platforms.',
          icon: Activity,
        status: 'progress' as const
      },
      {
        phase: 4,
        title: 'Intelligent Operations',
        period: '2020s+',
        description: 'AI-powered optimization, autonomous systems, predictive intelligence, and complete visibility.',
          icon: Zap,
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Manufacturing Solutions',
    description: 'How IntelliSpec addresses specific manufacturing challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Unplanned equipment downtime causing production delays and revenue loss',
        solution: 'AI-powered predictive maintenance with real-time equipment health monitoring',
        result: '60% reduction in unplanned downtime, $2M+ annual savings',
        icon: AlertTriangle
      },
      {
        challenge: 'Quality defects discovered late in production causing waste and rework',
        solution: 'Automated quality control with real-time inspection and immediate alerts',
        result: '99% quality rate achievement, 25% waste reduction',
        icon: Target
      },
      {
        challenge: 'Manual compliance tracking leading to audit failures and penalties',
        solution: 'Automated compliance management with digital documentation and audit trails',
        result: '100% audit pass rate, 50% faster compliance reporting',
        icon: FileText
      },
      {
        challenge: 'Lack of production visibility causing inefficient resource allocation',
        solution: 'Real-time production monitoring with performance analytics and optimization',
        result: '35% efficiency increase, optimized resource utilization',
        icon: BarChart3
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to manufacturing excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'System integration, data migration, and initial training to establish your digital manufacturing foundation.',
        icon: Wrench,
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
        description: 'Deploy predictive analytics, automate workflows, and optimize production processes for maximum efficiency.',
        icon: Cog,
        features: [
          'Predictive maintenance deployment',
          'Quality control automation',
          'Workflow optimization',
          'Performance monitoring'
        ],
        roi: '35% productivity increase'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete operational excellence with AI-powered insights, autonomous systems, and predictive intelligence.',
        icon: Rocket,
        features: [
          'AI-powered optimization',
          'Autonomous quality control',
          'Predictive intelligence',
          'Complete visibility'
        ],
        roi: '50%+ operational excellence'
      }
    ]
  },
  roiJourney: [
    {
      months: "0-3",
      title: "Inspection Foundation",
      subtitle: "Asset Integrity Setup",
      phase: "Foundation",
      description: "Deploy comprehensive asset monitoring system with corrosion detection and mechanical integrity assessment capabilities.",
      items: [
        { icon: Shield, text: "Asset integrity inspection baseline established", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Compliance Optimization",
      subtitle: "QA/QC Process Integration",
      phase: "Optimization",
      description: "Implement automated QA/QC workflows with real-time monitoring and compliance tracking across all inspection processes.",
      items: [
        { icon: TrendingUp, text: "95% corrosion detection accuracy achieved", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Operational Excellence",
      subtitle: "Full Asset Integrity Mastery",
      phase: "Excellence",
      description: "Achieve complete asset integrity management with predictive maintenance, automated turnarounds, and 100% regulatory compliance.",
      items: [
        { icon: CheckCircle, text: "100% mechanical integrity compliance achieved", type: "success" as const }
      ]
    }
  ],
  solutionsMatrix: [
      {
        challenge: {
        title: "Corrosion Catastrophe",
        description: "Hidden corrosion in manufacturing equipment causing unexpected failures and safety risks",
        icon: AlertTriangle,
        color: "from-destructive to-destructive/80",
        impact: "$3M+ potential loss per undetected corrosion failure"
        },
        solution: {
        title: "Advanced Corrosion Monitoring",
        description: "AI-powered corrosion detection with automated inspection workflows and predictive failure prevention",
        icon: Eye,
        color: "from-primary to-primary/80",
        modules: ["IntelliInspect", "IntelliIntegrity", "IntelliVision"]
        },
        expertise: {
        title: "Corrosion & Asset Integrity Specialists",
        description: "Leveraging deep expertise in corrosion monitoring and manufacturing asset integrity",
        icon: Shield,
        color: "from-primary to-primary/80",
        years: "Asset Integrity Leaders"
        },
        outcome: {
        metric: "95%",
        label: "Corrosion detection accuracy",
        color: "text-primary",
        icon: Shield,
        bgColor: "from-primary to-primary/80"
        }
      },
      {
        challenge: {
        title: "QA/QC Process Inefficiency",
        description: "Manual QA/QC processes causing inconsistencies, missed defects, and compliance gaps",
        icon: Search,
        color: "from-secondary to-secondary/80",
        impact: "Quality issues, customer complaints, and regulatory violations"
        },
        solution: {
        title: "Automated QA/QC Workflows",
        description: "Digital QA/QC platform with automated inspection workflows, real-time quality monitoring, and compliance tracking",
        icon: CheckCircle,
        color: "from-secondary to-secondary/80",
        modules: ["IntelliInspect", "IntelliComply", "IntelliVision"]
        },
        expertise: {
        title: "QA/QC Excellence Specialists",
        description: "Leveraging expertise in automated QA/QC processes and quality management systems",
        icon: CheckCircle,
        color: "from-secondary to-secondary/80",
        years: "Quality Assurance Leaders"
        },
        outcome: {
        metric: "100%",
        label: "QA/QC inspection coverage",
        color: "text-secondary",
        icon: CheckCircle,
        bgColor: "from-secondary to-secondary/80"
        }
      },
      {
        challenge: {
        title: "Turnaround Complexity",
        description: "Complex manufacturing turnarounds causing delays, cost overruns, and safety risks due to poor planning",
        icon: Clock,
        color: "from-accent to-accent/80",
        impact: "Millions in lost production and safety incidents"
        },
        solution: {
        title: "Intelligent Turnaround Management",
        description: "AI-powered turnaround planning with automated workflows and real-time execution monitoring",
        icon: TrendingUp,
        color: "from-accent to-accent/80",
        modules: ["IntelliTurn", "IntelliCommand", "IntelliTrack"]
        },
        expertise: {
        title: "Turnaround & Reliability Specialists",
        description: "Expertise in turnaround planning, reliability-centered maintenance, and operational efficiency",
        icon: TrendingUp,
        color: "from-accent to-accent/80",
        years: "Turnaround Excellence Leaders"
        },
        outcome: {
        metric: "80%",
        label: "Turnaround efficiency improvement",
        color: "text-accent",
        icon: TrendingUp,
        bgColor: "from-accent to-accent/80"
        }
      }
  ],
    personas: [
      {
      role: 'Asset Integrity Manager',
      focus: 'Asset monitoring, corrosion detection, mechanical integrity assessments',
      icon: Shield,
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
        challenge: 'Hidden corrosion and mechanical integrity issues causing unexpected failures and safety risks in critical manufacturing equipment.',
        solution: 'Comprehensive asset integrity platform with AI-powered corrosion detection, automated mechanical integrity assessments, and real-time monitoring.',
        outcome: 'Achieved 98% asset integrity compliance and prevented catastrophic failures through predictive corrosion detection.'
      },
      metrics: { integrity: '98%', corrosion: '95%', compliance: '100%' },
        testimonial: {
        quote: "IntelliSpec transformed our asset integrity program. We now detect corrosion issues before they become disasters, ensuring the safety of our operations and preventing costly downtime.",
        author: "Michael Chen",
        title: "Asset Integrity Manager",
        company: "Precision Manufacturing Corp"
      },
      features: ['Corrosion Detection', 'Mechanical Integrity', 'Asset Monitoring']
      },
    {
      role: 'Chief Inspector / NDT Lead',
      focus: 'Equipment inspections, regulatory compliance, safety standards',
      icon: Search,
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
        challenge: 'Manual equipment inspections taking weeks, missing critical defects, and failing regulatory compliance.',
        solution: 'Digital inspection platform with AI-powered defect detection, automated reporting, and compliance tracking.',
        outcome: 'Achieved 100% compliance rate and reduced inspection time by 70%.'
      },
      metrics: { compliance: '100%', speed: '70%', accuracy: '95%' },
        testimonial: {
        quote: "The digital inspection system revolutionized our compliance program. We now catch every defect and maintain perfect regulatory standing.",
        author: "Sarah Rodriguez",
        title: "Chief Manufacturing Inspector",
        company: "Industrial Compliance Solutions"
      },
      features: ['Digital Inspection Forms', 'AI Defect Detection', 'Automated Compliance Reporting']
    },
    {
      role: 'Maintenance Supervisor',
      focus: 'Asset reliability, preventive maintenance, equipment integrity',
      icon: Wrench,
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
        challenge: 'Critical equipment failures causing production shutdowns and safety hazards due to reactive maintenance approach.',
        solution: 'Predictive maintenance system with asset health monitoring, failure prediction, and integrity-based maintenance scheduling.',
        outcome: 'Prevented 85% of equipment failures and achieved 99.5% asset availability.'
      },
      metrics: { availability: '99.5%', failures: '85%', integrity: '98%' },
        testimonial: {
        quote: "The asset integrity insights transformed our maintenance from reactive to predictive. We now maintain equipment health proactively.",
        author: "David Kim",
        title: "Manufacturing Maintenance Manager",
        company: "Advanced Asset Solutions"
      },
      features: ['Asset Health Monitoring', 'Failure Prediction', 'Integrity-Based Scheduling']
    },
    {
      role: 'Compliance Manager',
      focus: 'Regulatory compliance, audit readiness, standards adherence',
      icon: CheckCircle,
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Manual compliance tracking leading to audit failures, regulatory fines, and production shutdowns.',
        solution: 'Automated compliance management with real-time monitoring, audit trail generation, and regulatory reporting.',
        outcome: 'Achieved 100% audit success rate and eliminated regulatory violations.'
      },
      metrics: { compliance: '100%', audits: '100%', violations: '0' },
      testimonial: {
        quote: "The automated compliance system ensures we never miss a requirement. Our auditors are impressed with our documentation.",
        author: "Jennifer Park",
        title: "Manufacturing Compliance Director",
        company: "Regulatory Excellence Corp"
      },
      features: ['Automated Compliance Tracking', 'Audit Trail Generation', 'Regulatory Reporting']
    },
    {
      role: 'Safety & Integrity Manager',
      focus: 'Equipment safety, integrity compliance, hazard prevention',
      icon: HardHat,
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
      story: {
        challenge: 'Equipment-related safety incidents and integrity failures causing worker injuries and regulatory violations.',
        solution: 'Integrated safety and asset integrity management with hazard prediction, compliance monitoring, and preventive controls.',
        outcome: 'Achieved zero equipment-related incidents and 100% safety compliance rating.'
      },
      metrics: { incidents: '0', compliance: '100%', integrity: '98%' },
      testimonial: {
        quote: "The integrated safety and integrity platform prevents hazards before they occur. Our safety record has never been better.",
        author: "Maria Santos",
        title: "Safety & Asset Integrity Director",
        company: "Secure Manufacturing Systems"
      },
      features: ['Hazard Prediction', 'Integrity Compliance', 'Preventive Safety Controls']
    },
    {
      role: 'Equipment Reliability Engineer',
      focus: 'Asset reliability, failure analysis, integrity optimization',
      icon: Activity,
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
      story: {
        challenge: 'Recurring equipment failures with no clear root cause analysis, leading to repeated downtime and high maintenance costs.',
        solution: 'Advanced reliability engineering with failure mode analysis, asset health modeling, and integrity optimization.',
        outcome: 'Increased mean time between failures (MTBF) by 300% and reduced maintenance costs by 40%.'
      },
      metrics: { mtbf: '300%', costs: '40%', reliability: '99%' },
      testimonial: {
        quote: "The reliability insights revealed failure patterns we never understood. Our equipment now runs longer and more reliably than ever.",
        author: "Dr. Amanda Foster",
        title: "Chief Reliability Engineer",
        company: "Advanced Reliability Solutions"
      },
      features: ['Failure Mode Analysis', 'Asset Health Modeling', 'Reliability Optimization']
    },
    {
      role: 'QA/QC Director',
      focus: 'Quality assurance, quality control, inspection workflows',
      icon: CheckCircle,
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
      story: {
        challenge: 'Manual QA/QC processes causing inconsistencies, missed defects, and compliance gaps in manufacturing operations.',
        solution: 'Digital QA/QC platform with automated inspection workflows, real-time quality monitoring, and comprehensive compliance tracking.',
        outcome: 'Achieved 100% QA/QC inspection coverage with 99.99% quality rate and zero compliance violations.'
      },
      metrics: { coverage: '100%', quality: '99.99%', compliance: '100%' },
      testimonial: {
        quote: "The QA/QC platform revolutionized our inspection processes. We now catch every defect, maintain perfect compliance, and deliver consistent quality to our customers.",
        author: "Dr. Robert Kim",
        title: "QA/QC Director",
        company: "Precision Quality Systems"
      },
      features: ['Automated Inspections', 'Quality Monitoring', 'Compliance Tracking']
    }
  ],
  metrics: [
    { label: 'Asset Integrity Compliance', value: '98%', icon: Shield, color: 'from-primary to-primary/80' },
    { label: 'Corrosion Detection Accuracy', value: '95%', icon: Eye, color: 'from-secondary to-secondary/80' },
    { label: 'Mechanical Integrity Assessments', value: '100%', icon: CheckCircle, color: 'from-accent to-accent/80' },
    { label: 'QA/QC Inspection Coverage', value: '100%', icon: Search, color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99%', icon: Activity, color: 'from-muted to-muted/80' },
    { label: 'Turnaround Efficiency', value: '80%', icon: Clock, color: 'from-primary to-primary/80' }
  ]
}

export default function ManufacturingPage() {
  return (
    <>
        <IndustryTemplate
        industryName={manufacturingIndustry.name}
        industryDescription={manufacturingIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={manufacturingIndustry.heroImage}
        badge={manufacturingIndustry.badge}
        successMetrics={manufacturingIndustry.metrics}
        chaosToClarity={manufacturingIndustry.chaosToClarity}
        challengeSolution={manufacturingIndustry.challengeSolution}
        implementationProcess={manufacturingIndustry.implementationProcess}
        roiJourney={manufacturingIndustry.roiJourney}
        solutionsMatrix={manufacturingIndustry.solutionsMatrix}
        personas={manufacturingIndustry.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Manufacturing?"
        ctaDescription="Join leading manufacturers achieving operational excellence with IntelliSpec's comprehensive production solutions."
      />
      <LLMReadyBlock
        intent="Manufacturing FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does predictive maintenance integrate with our CMMS and historian?', a: 'APIs synchronize assets/work orders and ingest historian tags for model features.' },
          { q: 'Can AI quality control prevent escapes before shipment?', a: 'Yes. Real‑time defect detection halts escapes and triggers line corrections.' },
          { q: 'How are QA/QC evidences recorded for audits and certifications?', a: 'Digital records store images, measurements, signatures, and full audit trails.' },
          { q: 'Do dashboards reveal bottlenecks across lines, cells, and shifts?', a: 'Yes. Throughput, OEE factors, and alerts pinpoint constraints by cell/shift.' },
          { q: 'Is offline support available for floor inspections and rework stations?', a: 'Yes. Offline capture syncs securely once connectivity is restored.' },
          { q: 'How are CAPA and non‑conformances tracked to closure?', a: 'Findings create CAPA with owners, SLAs, verification steps, and e‑signatures.' },
          { q: 'What rollout timeline is typical from pilot to multi‑site scale?', a: 'Pilots in weeks; scale using templates, connectors, and governance patterns.' },
          { q: 'Can rules, thresholds, and sampling plans be set per product/line?', a: 'Yes. Per‑product/line rules configure sampling, tolerances, and alerts.' },
          { q: 'How do you ensure data security on the factory network and cloud?', a: 'RBAC, encryption, SSO, network allow‑lists, and comprehensive audit logs.' },
          { q: 'What KPIs demonstrate ROI in the first 90 days?', a: 'Downtime ↓, scrap/rework ↓, OEE ↑, and audit findings ↓ are standard KPIs.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Boost throughput and quality with predictive maintenance, automated inspections, and real-time production
            analytics—delivering faster cycles and fewer defects.
          </p>
        )}
        takeaways={[
          'Predictive maintenance reduces unplanned downtime',
          'Automated inspections improve quality and speed',
          'Dashboards provide line-to-factory visibility',
        ]}
      />
    </>
  )
} 