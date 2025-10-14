import React from 'react'

import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead
import Link from 'next/link'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

const paintIndustry = {
  name: 'Paint & Coatings',
  description: 'Transform paint manufacturing operations through our comprehensive framework: INSPECT critical equipment and mixing systems, ASSESS corrosion and mechanical integrity, PLAN turnarounds and maintenance, EXECUTE precision interventions, MONITOR asset health in real-time, and COMPLY with regulatory standards. Empower your team with intelligent inspection, assessment, planning, execution, monitoring, and compliance capabilities.',
  heroImage: '/images/industries/paint.jpg',
  badge: 'Asset Integrity & Compliance',

  metrics: [
    { label: 'Asset Integrity Compliance', value: '98%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Corrosion Detection Accuracy', value: '95%', icon: "Eye", color: 'from-secondary to-secondary/80' },
    { label: 'Mechanical Integrity Assessments', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'QA/QC Inspection Coverage', value: '100%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Color Consistency', value: '99.9%', icon: "Target", color: 'from-muted to-muted/80' },
    { label: 'Turnaround Efficiency', value: '80%', icon: "Clock", color: 'from-primary to-primary/80' }
  ],

    roiJourney: [
      {
      months: "0-3",
      title: "Inspection Foundation",
      subtitle: "Asset Integrity Setup",
        phase: "Foundation",
      description: "Deploy comprehensive asset monitoring system with corrosion detection and mechanical integrity assessment capabilities.",
      items: [
        { icon: "Shield", text: "Asset integrity inspection baseline established", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Compliance Optimization",
      subtitle: "QA/QC Process Integration",
      phase: "Optimization",
      description: "Implement automated QA/QC workflows with real-time monitoring and compliance tracking across all inspection processes.",
      items: [
        { icon: "TrendingUp", text: "95% corrosion detection accuracy achieved", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Operational Excellence",
      subtitle: "Full Asset Integrity Mastery",
      phase: "Excellence",
      description: "Achieve complete asset integrity management with predictive maintenance, automated turnarounds, and 100% regulatory compliance.",
        items: [
        { icon: "CheckCircle", text: "100% mechanical integrity compliance achieved", type: "success" as const }
        ]
      }
    ],

    solutionsMatrix: [
      {
        challenge: {
        title: "Corrosion Catastrophe",
        description: "Hidden corrosion in paint manufacturing equipment causing unexpected failures and safety risks",
          icon: "AlertTriangle",
        color: "from-destructive to-destructive/80",
        impact: "$5M+ potential loss per undetected corrosion failure"
        },
        solution: {
        title: "Advanced Corrosion Monitoring",
        description: "AI-powered corrosion detection with automated inspection workflows and predictive failure prevention",
        icon: "Eye",
          color: "from-primary to-primary/80",
        modules: ["IntelliInspect", "IntelliIntegrity", "IntelliVision"]
        },
        expertise: {
        title: "Corrosion & Asset Integrity Specialists",
        description: "Leveraging deep expertise in corrosion monitoring and paint manufacturing asset integrity",
        icon: "Shield",
          color: "from-primary to-primary/80",
        years: "Asset Integrity Leaders"
        },
        outcome: {
        metric: "95%",
        label: "Corrosion detection accuracy",
          color: "text-primary",
        icon: "Shield",
          bgColor: "from-primary to-primary/80"
        }
      },
      {
        challenge: {
        title: "Mechanical Integrity Gaps",
        description: "Manual mechanical integrity assessments causing missed issues and compliance failures",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        impact: "Regulatory violations and equipment failures"
        },
        solution: {
        title: "Automated Mechanical Integrity",
        description: "Comprehensive mechanical integrity management with automated assessments and compliance tracking",
        icon: "Activity",
        color: "from-secondary to-secondary/80",
        modules: ["IntelliIntegrity", "IntelliInspect", "IntelliComply"]
        },
        expertise: {
        title: "Mechanical Integrity Experts",
        description: "Specializing in automated mechanical integrity assessments and regulatory compliance",
        icon: "CheckCircle",
        color: "from-secondary to-secondary/80",
        years: "Mechanical Integrity Leaders"
        },
        outcome: {
          metric: "100%",
        label: "Mechanical integrity compliance",
        color: "text-secondary",
        icon: "CheckCircle",
        bgColor: "from-secondary to-secondary/80"
        }
      },
      {
        challenge: {
        title: "Turnaround Complexity",
        description: "Complex paint manufacturing turnarounds causing delays, cost overruns, and safety risks due to poor planning",
        icon: "Clock",
        color: "from-accent to-accent/80",
        impact: "Millions in lost production and safety incidents"
        },
        solution: {
        title: "Intelligent Turnaround Management",
        description: "AI-powered turnaround planning with automated workflows and real-time execution monitoring",
          icon: "TrendingUp",
        color: "from-accent to-accent/80",
        modules: ["IntelliTurn", "IntelliCommand", "IntelliTrack"]
        },
        expertise: {
        title: "Turnaround & Reliability Specialists",
        description: "Expertise in turnaround planning, reliability-centered maintenance, and operational efficiency",
          icon: "TrendingUp",
        color: "from-accent to-accent/80",
        years: "Turnaround Excellence Leaders"
        },
        outcome: {
        metric: "80%",
        label: "Turnaround efficiency improvement",
        color: "text-accent",
          icon: "TrendingUp",
        bgColor: "from-accent to-accent/80"
      }
    }
  ],

    personas: [
      {
      role: 'Asset Integrity Manager',
      focus: 'Asset monitoring, corrosion detection, mechanical integrity assessments',
      icon: "Shield",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
        challenge: 'Hidden corrosion and mechanical integrity issues causing unexpected failures and safety risks in critical paint manufacturing equipment.',
        solution: 'Comprehensive asset integrity platform with AI-powered corrosion detection, automated mechanical integrity assessments, and real-time monitoring.',
        outcome: 'Achieved 98% asset integrity compliance and prevented catastrophic failures through predictive corrosion detection.'
      },
      metrics: { integrity: '98%', corrosion: '95%', compliance: '100%' },
        testimonial: {
        quote: "IntelliSpec transformed our asset integrity program. We now detect corrosion issues before they become disasters, ensuring the safety of our operations and preventing costly downtime.",
        author: "Dr. Sarah Chen",
        title: "Asset Integrity Director",
        company: "Paint Integrity Solutions"
      },
      features: ['Corrosion Detection', 'Mechanical Integrity', 'Asset Monitoring']
    },
    {
      role: 'QA/QC Director',
      focus: 'Quality assurance, quality control, inspection workflows',
      icon: "CheckCircle",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
        challenge: 'Manual QA/QC processes causing inconsistencies, missed defects, and compliance gaps in paint manufacturing.',
        solution: 'Digital QA/QC platform with automated inspection workflows, real-time quality monitoring, and comprehensive compliance tracking.',
        outcome: 'Achieved 100% QA/QC inspection coverage with 99.9% color accuracy and zero compliance violations.'
      },
      metrics: { coverage: '100%', accuracy: '99.9%', compliance: '100%' },
        testimonial: {
        quote: "The QA/QC platform revolutionized our inspection processes. We now catch every defect, maintain perfect compliance, and deliver consistent quality to our customers.",
        author: "Mike Rodriguez",
        title: "QA/QC Director",
        company: "Paint Quality Assurance"
      },
      features: ['Automated Inspections', 'Quality Monitoring', 'Compliance Tracking']
      },
      {
        role: 'Turnaround Coordinator',
      focus: 'Turnaround planning, execution management, resource optimization',
        icon: "Clock",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
        challenge: 'Complex paint manufacturing turnarounds causing delays, cost overruns, and safety risks due to poor planning and coordination.',
        solution: 'Intelligent turnaround management system with automated planning, real-time execution monitoring, and resource optimization.',
        outcome: 'Improved turnaround efficiency by 80% with reduced costs and enhanced safety through intelligent planning and monitoring.'
      },
      metrics: { efficiency: '80%', costs: '35%', safety: '100%' },
        testimonial: {
        quote: "Turnarounds used to be our biggest headache. Now with IntelliSpec, we plan and execute them with precision, saving millions and maintaining perfect safety records.",
        author: "David Thompson",
        title: "Turnaround Director",
        company: "Paint Turnaround Excellence"
      },
      features: ['Intelligent Planning', 'Execution Monitoring', 'Resource Optimization']
    },
    {
      role: 'Corrosion Engineer',
      focus: 'Corrosion monitoring, prevention strategies, integrity assessments',
      icon: "AlertTriangle",
      color: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
        challenge: 'Hidden corrosion in critical paint manufacturing equipment causing unexpected failures and safety hazards.',
        solution: 'Advanced corrosion monitoring system with predictive analytics, automated detection, and prevention strategy optimization.',
        outcome: 'Achieved 95% corrosion detection accuracy and prevented costly equipment failures through early intervention.'
      },
      metrics: { detection: '95%', prevention: '90%', safety: '100%' },
        testimonial: {
        quote: "Corrosion was our silent killer. IntelliSpec's monitoring system finds it before it becomes a disaster, saving lives and millions in potential losses.",
        author: "Dr. Lisa Park",
        title: "Corrosion Engineering Director",
        company: "Paint Corrosion Solutions"
      },
      features: ['Predictive Detection', 'Prevention Strategies', 'Integrity Assessments']
    },
    {
      role: 'Reliability Engineer',
      focus: 'Equipment reliability, predictive maintenance, failure analysis',
      icon: "Activity",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
        challenge: 'Unplanned equipment failures causing production downtime and safety risks due to poor reliability management.',
        solution: 'Advanced reliability engineering platform with predictive maintenance, failure analysis, and equipment performance optimization.',
        outcome: 'Increased equipment reliability by 95% and reduced unplanned shutdowns by 75% through predictive maintenance.'
      },
      metrics: { reliability: '95%', shutdowns: '75%', efficiency: '85%' },
        testimonial: {
        quote: "The reliability platform transformed our maintenance approach. We now predict and prevent failures before they occur, ensuring maximum uptime and operational safety.",
        author: "James Wilson",
        title: "Reliability Engineering Director",
        company: "Paint Reliability Excellence"
      },
      features: ['Predictive Maintenance', 'Failure Analysis', 'Performance Optimization']
    },
    {
      role: 'Mechanical Integrity Inspector',
      focus: 'Mechanical integrity assessments, equipment inspections, compliance verification',
      icon: "Eye",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
        challenge: 'Manual mechanical integrity assessments taking weeks to complete with potential for missed issues and compliance gaps.',
        solution: 'Digital mechanical integrity platform with automated assessments, AI-powered analysis, and comprehensive compliance tracking.',
        outcome: 'Achieved 100% mechanical integrity compliance and reduced assessment time by 70%.'
      },
      metrics: { compliance: '100%', speed: '70%', accuracy: '95%' },
        testimonial: {
        quote: "Mechanical integrity assessments used to take weeks. Now with IntelliSpec, we complete them in days with 100% compliance and perfect accuracy.",
        author: "Maria Santos",
        title: "Mechanical Integrity Director",
        company: "Paint Integrity Assessments"
      },
      features: ['Automated Assessments', 'AI-Powered Analysis', 'Compliance Tracking']
    },
    {
      role: 'Paint Compliance Officer',
      focus: 'Regulatory compliance, audit preparation, documentation management',
      icon: "CheckCircle",
      color: 'from-destructive to-destructive/80',
      bgColor: 'bg-gradient-to-br from-destructive/10 to-destructive/20',
      story: {
        challenge: 'Overwhelming paint regulatory requirements causing audit failures and compliance gaps.',
        solution: 'Automated paint compliance management with real-time monitoring, audit preparation, and regulatory reporting.',
        outcome: 'Achieved 100% compliance rate and passed all regulatory audits with zero findings.'
      },
      metrics: { compliance: '100%', audits: '100%', violations: '0' },
      testimonial: {
        quote: "The automated compliance system eliminated our regulatory nightmares. We now exceed every paint regulation with confidence.",
        author: "Robert Johnson",
        title: "Paint Compliance Director",
        company: "Paint Regulatory Excellence"
      },
      features: ['Regulatory Compliance', 'Audit Preparation', 'Documentation Management']
    }
  ]
}

export default function PaintIndustryPage() {
  return (
    <>
        <IndustryTemplate
          industryName={paintIndustry.name}
          industryDescription={paintIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
          heroImage={paintIndustry.heroImage}
          badge={paintIndustry.badge}
          successMetrics={paintIndustry.metrics}
        roiJourney={paintIndustry.roiJourney}
        solutionsMatrix={paintIndustry.solutionsMatrix}
        personas={paintIndustry.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Paint Operations?"
        ctaDescription="Join leading paint manufacturers achieving operational excellence with IntelliSpec's comprehensive quality control and compliance solutions."
      />
      <LLMReadyBlock
        intent="Paint & Coatings FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How are coating specs (DFT, cure, prep) tracked with evidence?', a: 'Digital logs validate surface prep, DFT, cure windows, with photos and signatures.' },
          { q: 'Can corrosion and MI programs reduce failures of mixers, vessels, and lines?', a: 'Yes. Integrity monitoring and AI detection prevent failures before they occur.' },
          { q: 'Is offline capture supported for plant and yard inspections?', a: 'Yes. Workflows run offline and sync securely when connected.' },
          { q: 'How are QA/QC checks standardized to reduce color and finish variability?', a: 'Rule‑based checks and tolerances standardize QA/QC with traceable records.' },
          { q: 'Can work packs be generated with step‑by‑step instructions and sign‑offs?', a: 'Yes. Work packs bundle tasks, steps, PPE, and require sign‑offs with media.' },
          { q: 'How do you integrate with production/MES, lab LIMS, and ERP?', a: 'APIs synchronize batches, lab results, and materials; dashboards unify KPIs.' },
          { q: 'Are CAPA and change control supported for deviations and spec drift?', a: 'Yes. Deviations generate CAPA and change requests with routed approvals.' },
          { q: 'Do dashboards provide visibility by line, colorway, and SKU?', a: 'Yes. KPIs and trends highlight issues by line/color/SKU for quick response.' },
          { q: 'What protections secure sensitive formulas and production data?', a: 'Encryption, RBAC/SSO, compartmentalization, and detailed audit logs.' },
          { q: 'How fast can we pilot and scale across plants?', a: 'Pilots in weeks; scale via templates, connectors, and governance playbooks.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Eliminate hidden corrosion and improve coating quality with AI detection, digital QA/QC, and intelligent
            turnaround planning.
          </p>
        )}
        takeaways={[
          'Higher detection accuracy; fewer failures',
          'QA/QC coverage and compliance automation',
          'Faster, predictable turnarounds',
        ]}
      />
    </>
  )
} 
