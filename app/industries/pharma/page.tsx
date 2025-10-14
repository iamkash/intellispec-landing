import React from 'react'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead

const pharmaIndustry = {
  name: 'Pharmaceutical',
  description: 'Transform pharmaceutical operations through our comprehensive framework: INSPECT manufacturing processes, ASSESS product quality, PLAN compliance strategies, EXECUTE GMP protocols, MONITOR batch integrity, and COMPLY with regulatory standards. Ensure product safety and operational excellence.',
  heroImage: '/images/industries/pharma.jpg',
  badge: 'GMP Compliance & Quality Assurance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Pharmaceutical Evolution',
    description: 'Transform your pharmaceutical operations from reactive quality control to predictive intelligence with comprehensive GMP compliance and batch monitoring.',
    phases: [
      {
        phase: 1,
        title: 'Manual Processes',
        period: '1990s-2000s',
        description: 'Paper-based batch records, manual quality checks, reactive compliance, and isolated systems.',
        icon: "AlertTriangle",
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Quality',
        period: '2000s-2010s',
        description: 'Electronic batch records, digital quality systems, scheduled audits, and connected equipment.',
        icon: "Settings",
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Manufacturing',
        period: '2010s-2020s',
        description: 'IoT sensors, real-time monitoring, predictive quality, and integrated platforms.',
        icon: "Activity",
        status: 'progress' as const
      },
      {
        phase: 4,
        title: 'Intelligent Pharma',
        period: '2020s+',
        description: 'AI-powered quality prediction, autonomous compliance, predictive intelligence, and complete visibility.',
        icon: "Pill",
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Pharmaceutical Solutions',
    description: 'How IntelliSpec addresses specific pharmaceutical challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Quality control failures causing product recalls and regulatory violations',
        solution: 'AI-powered predictive quality analytics with real-time batch monitoring and compliance tracking',
        result: '95% quality control improvement, zero product recalls',
        icon: "AlertTriangle"
      },
      {
        challenge: 'GMP compliance gaps leading to FDA warnings and audit failures',
        solution: 'Automated GMP compliance management with real-time monitoring and regulatory reporting',
        result: '100% GMP compliance rate, zero regulatory violations',
        icon: "Shield"
      },
      {
        challenge: 'Manual batch documentation leading to errors and audit issues',
        solution: 'Digital batch record system with automated documentation and validation',
        result: '99% documentation accuracy, 80% faster batch release',
        icon: "FileText"
      },
      {
        challenge: 'Lack of real-time visibility into manufacturing processes and quality metrics',
        solution: 'Real-time manufacturing intelligence with quality analytics and performance monitoring',
        result: '100% process visibility, 60% faster quality decisions',
        icon: "BarChart3"
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to pharmaceutical excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'GMP system integration, batch record digitization, and compliance framework establishment.',
        icon: "Shield",
        features: [
          'GMP system integration and setup',
          'Batch record digitization',
          'Compliance framework establishment',
          'Quality team training and onboarding'
        ],
        roi: '20% compliance efficiency gain'
      },
      {
        months: '3-6',
        title: 'Quality Optimization',
        description: 'Deploy predictive quality analytics, automate batch workflows, and optimize manufacturing processes.',
        icon: "Activity",
        features: [
          'Predictive quality analytics deployment',
          'Batch workflow automation',
          'Manufacturing process optimization',
          'Real-time quality monitoring'
        ],
        roi: '40% quality improvement'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete pharmaceutical excellence with AI-powered quality prediction, autonomous compliance, and predictive intelligence.',
        icon: "Pill",
        features: [
          'AI-powered quality prediction',
          'Autonomous compliance management',
          'Predictive manufacturing intelligence',
          'Complete operational visibility'
        ],
        roi: '60%+ operational excellence'
      }
    ]
  },
  metrics: [
    { label: 'GMP Compliance', value: '100%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Quality Control', value: '95%', icon: "Target", color: 'from-secondary to-secondary/80' },
    { label: 'Batch Release Speed', value: '80%', icon: "Clock", color: 'from-accent to-accent/80' },
    { label: 'Documentation Accuracy', value: '99%', icon: "FileText", color: 'from-destructive to-destructive/80' },
    { label: 'Process Visibility', value: '100%', icon: "Eye", color: 'from-muted to-muted/80' },
    { label: 'Regulatory Success', value: '100%', icon: "CheckCircle", color: 'from-primary to-primary/80' }
  ]
}

export default function PharmaPage() {
  // Pharma industry data for the template
  const pharmaData = {
    industryName: "Pharmaceutical",
    industryColor: "text-primary",
    industryGradient: "from-primary to-primary/80",
    
    roiJourney: [
      {
        months: "0-3",
        title: "Foundation Phase",
        subtitle: "GMP Compliance Implementation",
        phase: "Foundation",
        description: "Deploy pharmaceutical compliance management system with quality control capabilities and regulatory monitoring.",
        items: [
          { icon: "Shield", text: "GMP compliance baseline established", type: "success" as const }
        ]
      },
      {
        months: "3-6",
        title: "Optimization Phase", 
        subtitle: "Predictive Quality Deployment",
        phase: "Optimization",
        description: "Implement predictive quality analytics and automated batch systems for proactive quality failure prevention.",
        items: [
          { icon: "TrendingUp", text: "95% quality control improvement", type: "success" as const }
        ]
      },
      {
        months: "6-12",
        title: "Excellence Phase",
        subtitle: "Full Pharmaceutical Maturity",
        phase: "Excellence", 
        description: "Achieve complete pharmaceutical excellence with predictive quality management and 100% regulatory compliance.",
        items: [
          { icon: "Pill", text: "100% regulatory compliance achievement", type: "success" as const }
        ]
      }
    ],

    solutionsMatrix: [
      {
        challenge: {
          title: "Quality Control Failures",
          description: "Critical quality control failures causing product recalls and regulatory violations",
          icon: "AlertTriangle",
          color: "from-red-600 to-red-700",
          impact: "$100M+ per product recall"
        },
        solution: {
          title: "Predictive Quality Intelligence",
          description: "AI-powered predictive analytics for pharmaceutical quality control and compliance",
          icon: "Activity",
          color: "from-primary to-primary/80",
          modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
        },
        expertise: {
          title: "PK Industry Specialists",
          description: "Leveraging PK Industry's deep expertise in pharmaceutical quality and compliance",
          icon: "Pill",
          color: "from-primary to-primary/80",
          years: "Pharma Leaders"
        },
        outcome: {
          metric: "95%",
          label: "Quality control improvement",
          color: "text-primary",
          icon: "Shield",
          bgColor: "from-primary to-primary/80"
        }
      },
      {
        challenge: {
          title: "Regulatory Compliance Gaps",
          description: "FDA, EMA, and GMP requirements overwhelming manual processes",
          icon: "Search",
          color: "from-orange-600 to-orange-700",
          impact: "Regulatory fines and product approval delays"
        },
        solution: {
          title: "Digital Pharma Compliance",
          description: "Comprehensive compliance tracking with pharmaceutical regulatory requirements",
          icon: "Search",
          color: "from-green-600 to-green-700",
          modules: ["IntelliInspect", "IntelliTrack", "IntelliVision"]
        },
        expertise: {
          title: "PK Inspections Excellence",
          description: "Leveraging PK Inspections' expertise in pharmaceutical regulatory compliance",
          icon: "Search",
          color: "from-green-600 to-green-700",
          years: "Compliance Leaders"
        },
        outcome: {
          metric: "100%",
          label: "Regulatory compliance achieved",
          color: "text-green-400",
          icon: "CheckCircle",
          bgColor: "from-green-600 to-green-700"
        }
      },
      {
        challenge: {
          title: "Supply Chain Chaos",
          description: "Critical pharmaceutical materials and equipment lost in complex supply chains",
          icon: "MapPin",
          color: "from-yellow-600 to-yellow-700",
          impact: "Millions in lost materials and production delays"
        },
        solution: {
          title: "Real-Time Supply Chain Tracking",
          description: "Real-time tracking and management of pharmaceutical materials and equipment",
          icon: "MapPin",
          color: "from-blue-600 to-blue-700",
          modules: ["IntelliTrack", "IntelliCommand", "IntelliVision"]
        },
        expertise: {
          title: "PK Inspections Mastery",
          description: "Leveraging PK Inspections' expertise in RFID and IoT for pharmaceutical tracking",
          icon: "MapPin",
          color: "from-blue-600 to-blue-700",
          years: "Tracking Leaders"
        },
        outcome: {
          metric: "90%",
          label: "Supply chain visibility improvement",
          color: "text-blue-400",
          icon: "Eye",
          bgColor: "from-blue-600 to-blue-700"
        }
      },
      {
        challenge: {
          title: "Pharma Data Blind Spots",
          description: "Critical operational data buried in disconnected systems with no actionable insights",
          icon: "Eye",
          color: "from-indigo-600 to-indigo-700",
          impact: "Poor decision-making and quality risks"
        },
        solution: {
          title: "Advanced Pharma Analytics",
          description: "Advanced analytics and visualization for pharmaceutical operational insights",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          modules: ["IntelliVision", "IntelliCommand", "IntelliIntegrity"]
        },
        expertise: {
          title: "PK Industry Analytics",
          description: "Leveraging PK Industry's advanced analytics expertise for pharmaceutical operations",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          years: "Analytics Leaders"
        },
        outcome: {
          metric: "10x",
          label: "Faster data processing",
          color: "text-emerald-400",
          icon: "Zap",
          bgColor: "from-emerald-600 to-emerald-700"
        }
      }
    ],

    successMetrics: [
      { label: "Quality Inspection Accuracy", value: "98%", icon: "Shield", color: "text-primary" },
      { label: "Inspection Time Reduction", value: "80%", icon: "TrendingDown", color: "text-green-400" },
      { label: "Regulatory Compliance Achieved", value: "100%", icon: "CheckCircle", color: "text-blue-400" },
      { label: "Equipment Inspection Efficiency", value: "90%", icon: "Eye", color: "text-yellow-400" },
      { label: "Quality Control Improvement", value: "95%", icon: "Gauge", color: "text-indigo-400" },
      { label: "ROI within First Year", value: "300%", icon: "BarChart3", color: "text-orange-400" }
    ],

    personas: [
      {
        role: 'Pharmaceutical Quality Manager',
        focus: 'GMP compliance, quality assurance, batch integrity',
        icon: "Shield",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
          challenge: 'Critical quality control failures causing product recalls and regulatory violations across pharmaceutical operations.',
          solution: 'AI-powered pharmaceutical quality management with predictive analytics, real-time monitoring, and compliance automation.',
          outcome: 'Achieved 95% quality control improvement and zero product recalls.'
        },
        metrics: { quality: '95%', recalls: '0', compliance: '100%' },
        testimonial: {
          quote: "IntelliSpec's quality intelligence platform transformed our pharmaceutical operations from reactive to predictive. We now prevent quality issues before they impact patients.",
          author: "Dr. Sarah Chen",
          title: "Pharmaceutical Quality Director",
          company: "Global Pharma Excellence"
        },
        features: ['Predictive Quality Analytics', 'GMP Compliance Automation', 'Real-time Monitoring']
      },
      {
        role: 'Regulatory Compliance Officer',
        focus: 'FDA compliance, audit readiness, regulatory reporting',
        icon: "CheckCircle",
        color: 'from-secondary to-secondary/80',
        bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
          challenge: 'Complex FDA, EMA, and GMP requirements causing compliance gaps and potential regulatory violations.',
          solution: 'Automated regulatory compliance management with real-time monitoring, audit preparation, and regulatory reporting.',
          outcome: 'Achieved 100% regulatory compliance rate and zero violations across all audits.'
        },
        metrics: { compliance: '100%', violations: '0', audits: '100%' },
        testimonial: {
          quote: "The automated compliance system ensures we exceed every regulatory requirement. Our audit performance is now the pharmaceutical industry standard.",
          author: "Mike Rodriguez",
          title: "Pharmaceutical Compliance Director",
          company: "Pharma Regulatory Excellence"
        },
        features: ['Automated Compliance', 'Regulatory Reporting', 'Audit Preparation']
      },
      {
        role: 'Manufacturing Operations Manager',
        focus: 'Batch production, process optimization, operational efficiency',
        icon: "Factory",
        color: 'from-accent to-accent/80',
        bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
          challenge: 'Complex pharmaceutical manufacturing processes with limited visibility causing production delays and quality issues.',
          solution: 'Real-time manufacturing intelligence with batch monitoring, process optimization, and predictive analytics.',
          outcome: 'Improved manufacturing efficiency by 60% and reduced batch cycle time by 40%.'
        },
        metrics: { efficiency: '60%', cycle: '40%', quality: '99%' },
        testimonial: {
          quote: "The manufacturing intelligence system revolutionized our pharmaceutical production. We now have complete visibility and control over every batch.",
          author: "David Thompson",
          title: "Manufacturing Operations Director",
          company: "Precision Pharma Manufacturing"
        },
        features: ['Batch Monitoring', 'Process Optimization', 'Manufacturing Intelligence']
      },
      {
        role: 'Quality Control Inspector',
        focus: 'Product testing, batch release, quality documentation',
        icon: "Eye",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
          challenge: 'Manual pharmaceutical inspections and testing taking days to complete with potential for human error.',
          solution: 'Digital inspection platform with automated testing workflows, AI-powered analysis, and instant documentation.',
          outcome: 'Achieved 99% inspection accuracy and reduced testing time by 80%.'
        },
        metrics: { accuracy: '99%', speed: '80%', documentation: '100%' },
        testimonial: {
          quote: "I went from spending days on paperwork to focusing on what matters - ensuring pharmaceutical quality. The automated analysis is incredibly accurate.",
          author: "Dr. Lisa Park",
          title: "Senior Quality Control Inspector",
          company: "Pharmaceutical Quality Assurance"
        },
        features: ['Digital Testing Workflows', 'AI-Powered Analysis', 'Automated Documentation']
      },
      {
        role: 'Supply Chain Manager',
        focus: 'Material tracking, inventory management, supplier compliance',
        icon: "Package",
        color: 'from-secondary to-secondary/80',
        bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
          challenge: 'Critical pharmaceutical materials and components lost in complex supply chains causing production delays.',
          solution: 'Real-time supply chain tracking with material visibility, supplier monitoring, and inventory optimization.',
          outcome: 'Achieved 90% supply chain visibility improvement and reduced material shortages by 95%.'
        },
        metrics: { visibility: '90%', shortages: '95%', compliance: '100%' },
        testimonial: {
          quote: "The supply chain intelligence platform eliminated material shortages and supplier issues. Our pharmaceutical production runs smoothly without interruption.",
          author: "James Wilson",
          title: "Pharmaceutical Supply Chain Director",
          company: "Pharma Supply Excellence"
        },
        features: ['Material Tracking', 'Supplier Monitoring', 'Inventory Optimization']
      },
      {
        role: 'Validation Engineer',
        focus: 'System validation, process qualification, compliance verification',
        icon: "Settings",
        color: 'from-accent to-accent/80',
        bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
          challenge: 'Manual validation processes taking months to complete with extensive documentation requirements.',
          solution: 'Automated validation management with digital protocols, real-time verification, and compliance tracking.',
          outcome: 'Reduced validation time by 70% and achieved 100% validation compliance.'
        },
        metrics: { time: '70%', compliance: '100%', efficiency: '85%' },
        testimonial: {
          quote: "The automated validation system transformed our pharmaceutical qualification process. We now complete validations faster with better documentation.",
          author: "Maria Santos",
          title: "Senior Validation Engineer",
          company: "Pharmaceutical Validation Services"
        },
        features: ['Digital Validation Protocols', 'Real-time Verification', 'Compliance Tracking']
      },
      {
        role: 'Pharmaceutical Safety Officer',
        focus: 'Worker safety, process safety, incident prevention',
        icon: "HardHat",
        color: 'from-destructive to-destructive/80',
        bgColor: 'bg-gradient-to-br from-destructive/10 to-destructive/20',
        story: {
          challenge: 'Safety incidents and process hazards in pharmaceutical manufacturing causing regulatory concerns and production disruptions.',
          solution: 'Integrated safety management with hazard prediction, incident tracking, and preventive safety controls.',
          outcome: 'Achieved zero safety incidents and 100% safety compliance rating across all pharmaceutical operations.'
        },
        metrics: { incidents: '0', compliance: '100%', safety: '100%' },
        testimonial: {
          quote: "The integrated safety platform prevents hazards before they occur. Our pharmaceutical safety record is now the industry benchmark.",
          author: "Robert Johnson",
          title: "Pharmaceutical Safety Director",
          company: "Pharma Safety Excellence"
        },
        features: ['Hazard Prediction', 'Safety Compliance', 'Incident Prevention']
      }
    ],

  }

  return (
    <>
      <IndustryTemplate
        industryName={pharmaIndustry.name}
        industryDescription={pharmaIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={pharmaIndustry.heroImage}
        badge={pharmaIndustry.badge}
        successMetrics={pharmaIndustry.metrics}
        chaosToClarity={pharmaIndustry.chaosToClarity}
        challengeSolution={pharmaIndustry.challengeSolution}
        implementationProcess={pharmaIndustry.implementationProcess}
        roiJourney={pharmaData.roiJourney}
        solutionsMatrix={pharmaData.solutionsMatrix}
        personas={pharmaData.personas}
        timeline={[]}
        ctaTitle="Ready to Transform Your Pharmaceutical Operations?"
        ctaDescription="Join leading pharmaceutical companies achieving operational excellence with IntelliSpec's comprehensive quality and compliance solutions."
      />
      <LLMReadyBlock
        intent="Pharma FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How are electronic batch records (EBR) managed to meet 21 CFR Part 11?', a: 'EBR supports e‑signatures, audit trails, access controls, and validation evidence.' },
          { q: 'Can predictive quality analytics reduce deviations and speed batch release?', a: 'Yes. Models flag drift early and streamline review, cutting release times significantly.' },
          { q: 'How are GMP compliance checks automated across processes and equipment?', a: 'Configurable checks, sensors, and logs generate audit‑ready evidence automatically.' },
          { q: 'Do dashboards provide real‑time visibility across QC, manufacturing, and LIMS?', a: 'Yes. Unified views correlate QC metrics, batch status, and equipment health.' },
          { q: 'Is offline capability supported for floor data capture?', a: 'Yes. Offline capture syncs securely and preserves full traceability.' },
          { q: 'How are CAPA and change control handled with approvals?', a: 'Findings drive CAPA and change requests with routed approvals and e‑signatures.' },
          { q: 'Can you integrate with MES, LIMS, and ERP systems?', a: 'Yes. Standard APIs synchronize batch data, QC results, and materials.' },
          { q: 'What validation artifacts are provided for computer system validation (CSV)?', a: 'We provide validation plans, test scripts, traceability, and execution evidence.' },
          { q: 'How is data secured for regulated environments and external partners?', a: 'Encryption, RBAC/SSO, partner scoping, and immutable audit logs.' },
          { q: 'What rollout timeline is typical for initial sites and global scale?', a: 'Pilots in weeks; global rollouts use templates, training, and governance.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Speed batch release and ensure GMP with digital records, predictive quality analytics, and audit‑ready
            reporting.
          </p>
        )}
        takeaways={[
          'Faster, error‑free batch documentation',
          'Predictive quality reduces deviations',
          'Audit evidence and e‑signatures built in',
        ]}
      />
    </>
  )
} 