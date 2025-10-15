import React from 'react'

import IndustryTemplate from '@/components/sections/IndustryTemplate'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
// Icon imports removed - using string names instead
import Link from 'next/link'

const chemicalsIndustry = {
  name: 'Chemicals',
  description: 'Transform chemical operations through our comprehensive framework: INSPECT critical equipment and pipelines, ASSESS corrosion and mechanical integrity, PLAN turnarounds and maintenance, EXECUTE precision interventions, MONITOR asset health in real-time, and COMPLY with PSM and regulatory standards. Empower your team with intelligent inspection, assessment, planning, execution, monitoring, and compliance capabilities.',
  heroImage: '/images/industries/chem.jpg',
  badge: 'Asset Integrity & Compliance',

  metrics: [
    { label: 'Asset Integrity Compliance', value: '99.8%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Corrosion Detection Accuracy', value: '95%', icon: "Eye", color: 'from-secondary to-secondary/80' },
    { label: 'Mechanical Integrity Assessments', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Turnaround Efficiency', value: '80%', icon: "TrendingUp", color: 'from-destructive to-destructive/80' },
    { label: 'QA/QC Inspection Coverage', value: '100%', icon: "Search", color: 'from-muted to-muted/80' },
    { label: 'Regulatory Compliance Rate', value: '100%', icon: "Target", color: 'from-primary to-primary/80' }
  ],
    
    roiJourney: [
      {
      months: "0-3",
      title: "Inspection Foundation",
      subtitle: "Asset Integrity Assessment Setup",
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
        description: "Hidden corrosion in critical equipment causing unexpected failures and safety risks",
          icon: "AlertTriangle",
          color: "from-destructive to-destructive/80",
        impact: "$50M+ potential loss per undetected failure"
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
        description: "Leveraging deep expertise in corrosion monitoring, NDT inspections, and mechanical integrity",
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
        title: "Turnaround Chaos",
        description: "Complex turnarounds causing delays, cost overruns, and safety risks due to poor planning",
        icon: "Clock",
          color: "from-accent to-accent/80",
        impact: "Millions in lost production and safety incidents"
        },
        solution: {
        title: "Intelligent Turnaround Management",
        description: "AI-powered turnaround planning with automated workflows and real-time monitoring",
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
        challenge: 'Hidden corrosion and mechanical integrity issues causing unexpected failures and safety risks in critical chemical equipment.',
        solution: 'Comprehensive asset integrity platform with AI-powered corrosion detection, automated mechanical integrity assessments, and real-time monitoring.',
        outcome: 'Achieved 99.8% asset integrity compliance and prevented catastrophic failures through predictive corrosion detection.'
      },
      metrics: { integrity: '99.8%', corrosion: '95%', compliance: '100%' },
        testimonial: {
        quote: "intelliSPEC transformed our asset integrity program. We now detect corrosion issues before they become disasters, ensuring the safety of our operations and preventing costly downtime.",
        author: "Dr. Sarah Chen",
        title: "Asset Integrity Director",
        company: "Global Chemical Integrity"
      },
      features: ['Corrosion Detection', 'Mechanical Integrity', 'Asset Monitoring']
    },
    {
      role: 'QA/QC Inspector',
      focus: 'Quality assurance, quality control, inspection workflows',
      icon: "CheckCircle",
        color: 'from-secondary to-secondary/80',
        bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
        challenge: 'Manual QA/QC processes causing inconsistencies, missed defects, and compliance gaps in chemical manufacturing.',
        solution: 'Digital QA/QC platform with automated inspection workflows, real-time quality monitoring, and comprehensive compliance tracking.',
        outcome: 'Achieved 100% QA/QC inspection coverage with 95% defect detection accuracy and zero compliance violations.'
      },
      metrics: { coverage: '100%', accuracy: '95%', compliance: '100%' },
        testimonial: {
        quote: "The QA/QC platform revolutionized our inspection processes. We now catch every defect, maintain perfect compliance, and deliver consistent quality to our customers.",
          author: "Mike Rodriguez",
        title: "QA/QC Director",
        company: "Chemical Quality Assurance"
      },
      features: ['Automated Inspections', 'Quality Monitoring', 'Compliance Tracking']
    },
    {
      role: 'Reliability Engineer',
      focus: 'Equipment reliability, predictive maintenance, failure analysis',
      icon: "Activity",
        color: 'from-accent to-accent/80',
        bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
        challenge: 'Unplanned equipment failures causing production downtime and safety risks due to poor reliability management.',
        solution: 'Advanced reliability engineering platform with predictive maintenance, failure analysis, and equipment performance optimization.',
        outcome: 'Increased equipment reliability by 99% and reduced unplanned shutdowns by 75% through predictive maintenance.'
      },
      metrics: { reliability: '99%', shutdowns: '75%', efficiency: '85%' },
        testimonial: {
        quote: "The reliability platform transformed our maintenance approach. We now predict and prevent failures before they occur, ensuring maximum uptime and operational safety.",
          author: "David Thompson",
        title: "Reliability Engineering Director",
        company: "Chemical Reliability Excellence"
      },
      features: ['Predictive Maintenance', 'Failure Analysis', 'Performance Optimization']
      },
      {
        role: 'Turnaround Coordinator',
      focus: 'Turnaround planning, execution management, resource optimization',
        icon: "Clock",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
        challenge: 'Complex chemical turnarounds causing delays, cost overruns, and safety risks due to poor planning and coordination.',
        solution: 'Intelligent turnaround management system with automated planning, real-time execution monitoring, and resource optimization.',
        outcome: 'Improved turnaround efficiency by 80% with reduced costs and enhanced safety through intelligent planning and monitoring.'
      },
      metrics: { efficiency: '80%', costs: '35%', safety: '100%' },
        testimonial: {
        quote: "Turnarounds used to be our biggest headache. Now with intelliSPEC, we plan and execute them with precision, saving millions and maintaining perfect safety records.",
        author: "Dr. Lisa Park",
        title: "Turnaround Director",
        company: "Chemical Turnaround Excellence"
      },
      features: ['Intelligent Planning', 'Execution Monitoring', 'Resource Optimization']
    },
    {
      role: 'NDT Inspection Specialist',
      focus: 'Non-destructive testing, inspection data analysis, compliance verification',
      icon: "Eye",
      color: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
        challenge: 'Manual NDT inspections taking weeks to complete with inconsistent data analysis and compliance verification issues.',
        solution: 'Advanced NDT inspection platform with automated data analysis, real-time compliance monitoring, and comprehensive reporting.',
        outcome: 'Achieved 95% inspection accuracy with instant reporting and 100% compliance verification across all NDT processes.'
      },
      metrics: { accuracy: '95%', reporting: '100%', compliance: '100%' },
        testimonial: {
        quote: "NDT inspections are now fast, accurate, and fully compliant. intelliSPEC's platform analyzes data instantly and ensures we meet every regulatory requirement.",
          author: "James Wilson",
        title: "NDT Director",
        company: "Chemical NDT Excellence"
      },
      features: ['Automated Analysis', 'Compliance Monitoring', 'Instant Reporting']
    },
    {
      role: 'Corrosion Engineer',
      focus: 'Corrosion monitoring, prevention strategies, integrity assessments',
      icon: "AlertTriangle",
      color: 'from-accent to-accent/80',
      bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
        challenge: 'Hidden corrosion in critical equipment causing unexpected failures and safety hazards in chemical operations.',
        solution: 'Advanced corrosion monitoring system with predictive analytics, automated detection, and prevention strategy optimization.',
        outcome: 'Achieved 95% corrosion detection accuracy and prevented costly equipment failures through early intervention.'
      },
      metrics: { detection: '95%', prevention: '90%', safety: '100%' },
        testimonial: {
        quote: "Corrosion was our silent killer. intelliSPEC's monitoring system finds it before it becomes a disaster, saving lives and millions in potential losses.",
          author: "Maria Santos",
        title: "Corrosion Engineering Director",
        company: "Chemical Corrosion Solutions"
      },
      features: ['Predictive Detection', 'Prevention Strategies', 'Integrity Assessments']
    },
    {
      role: 'Compliance Auditor',
      focus: 'Regulatory compliance, audit management, risk assessment',
      icon: "Search",
        color: 'from-destructive to-destructive/80',
        bgColor: 'bg-gradient-to-br from-destructive/10 to-destructive/20',
        story: {
        challenge: 'Complex regulatory requirements causing audit failures and compliance gaps across chemical operations.',
        solution: 'Automated compliance management platform with real-time risk assessment, audit preparation, and regulatory reporting.',
        outcome: 'Achieved 100% regulatory compliance with zero audit findings and automated risk assessment across all operations.'
      },
      metrics: { compliance: '100%', audits: '100%', risk: '95%' },
      testimonial: {
        quote: "Regulatory compliance used to be a nightmare. Now intelliSPEC handles it automatically, ensuring we pass every audit with flying colors.",
        author: "Robert Johnson",
        title: "Compliance Director",
        company: "Chemical Regulatory Compliance"
      },
      features: ['Automated Compliance', 'Risk Assessment', 'Audit Management']
    }
  ]
}

export default function ChemicalsPage() {
  return (
    <>
      

        <IndustryTemplate
          industryName={chemicalsIndustry.name}
          industryDescription={chemicalsIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
          heroImage={chemicalsIndustry.heroImage}
          badge={chemicalsIndustry.badge}
          successMetrics={chemicalsIndustry.metrics}
        roiJourney={chemicalsIndustry.roiJourney}
        solutionsMatrix={chemicalsIndustry.solutionsMatrix}
        personas={chemicalsIndustry.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Chemical Operations?"
        ctaDescription="Join leading chemical companies achieving operational excellence with intelliSPEC's comprehensive process safety and compliance solutions."
        />
      <LLMReadyBlock
        intent="Chemicals FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does the platform support OSHA PSM and related chemical process safety frameworks?', a: 'Configurable checks, evidence capture, and audit reports align to PSM elements.' },
          { q: 'Which data sources are ingested for corrosion and integrity (NDT, sensors, manual)?', a: 'NDT signals, IoT sensors, and manual findings are normalized into one model.' },
          { q: 'Can corrosion trends be analyzed to prioritize repairs and plan recoating?', a: 'Yes. Trend analysis scores risk, proposes actions, and supports recoating plans.' },
          { q: 'How are MI (mechanical integrity) assessments automated and verified?', a: 'Digital MI with required evidence, reviewer sign‑off, and compliance dashboards.' },
          { q: 'Do turnarounds benefit from intelligent scope planning and live monitoring?', a: 'Yes. AI helps scope, sequence, and monitor TA execution with variance alerts.' },
          { q: 'Is offline capture supported for field inspections in hazardous areas?', a: 'Yes. Field apps work offline with secure synchronization later.' },
          { q: 'Can CAPA be generated from inspection findings with SLA tracking?', a: 'Yes. Findings create CAPA tasks with owners, due dates, and escalations.' },
          { q: 'How do we integrate with CMMS/ERP and historian systems?', a: 'API connectors synchronize assets, work orders, and tags/historian data.' },
          { q: 'What visibility do dashboards provide for units, loops, and systems?', a: 'Integrity KPIs and heatmaps highlight risk by unit, loop, and equipment type.' },
          { q: 'How is chemical operations data secured and governed?', a: 'Encryption, RBAC/SSO, and audit logs enforce security and governance.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Prevent failures and pass audits with predictive integrity, automated QA/QC, and intelligent turnaround
            planning for chemical operations.
          </p>
        )}
        takeaways={[
          'Predictive integrity and corrosion monitoring',
          'Digital QA/QC with automated compliance',
          'Smarter, faster turnarounds',
        ]}
      />
    </>
  )
} 
