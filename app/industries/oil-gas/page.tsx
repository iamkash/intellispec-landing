import React from 'react'

import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead
import Link from 'next/link'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

const oilGasIndustry = {
  name: 'Oil & Gas',
  description: 'Transform oil and gas operations through our comprehensive framework: INSPECT critical infrastructure, ASSESS equipment health, PLAN predictive maintenance, EXECUTE targeted interventions, MONITOR asset performance, and COMPLY with regulatory standards. Prevent catastrophic failures and ensure operational excellence.',
  heroImage: '/images/industries/oil.jpg',
  badge: 'Asset Integrity & Compliance',
  metrics: [
    { label: 'Asset Integrity', value: '95%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '75%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '70%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ]
}

export default function OilGasPage() {
  // Oil & Gas industry data for the template
  const oilGasData = {
    industryName: "Oil & Gas",
    industryColor: "text-primary",
    industryGradient: "from-primary to-primary/80",
    
    roiJourney: [
      {
        months: "0-3",
        title: "Foundation Phase",
        subtitle: "Asset Integrity Implementation",
        phase: "Foundation",
        description: "Deploy asset integrity management system with predictive maintenance capabilities and compliance monitoring.",
        items: [
          { icon: "Shield", text: "Asset integrity baseline established", type: "success" as const }
        ]
      },
      {
        months: "3-6",
        title: "Optimization Phase", 
        subtitle: "Predictive Analytics Deployment",
        phase: "Optimization",
        description: "Implement predictive analytics and automated inspection systems for proactive failure prevention.",
        items: [
          { icon: "TrendingUp", text: "50% reduction in unplanned downtime", type: "success" as const }
        ]
      },
      {
        months: "6-12",
        title: "Excellence Phase",
        subtitle: "Full Asset Integrity Maturity",
        phase: "Excellence", 
        description: "Achieve complete asset integrity management with predictive maintenance and 100% compliance.",
        items: [
          { icon: "Award", text: "95% asset integrity achievement", type: "success" as const }
        ]
      }
    ],

    solutionsMatrix: [
                {
                  challenge: {
                    title: "Asset Integrity Failures",
          description: "Critical equipment breakdowns causing catastrophic production losses and safety incidents",
                    icon: "AlertTriangle",
                    color: "from-destructive to-destructive/80",
                    impact: "$5M+ average cost per failure"
                  },
                  solution: {
          title: "Predictive Asset Integrity Management",
          description: "AI-powered predictive monitoring and maintenance for critical equipment and infrastructure",
                    icon: "Activity",
          color: "from-primary to-primary/80",
                    modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
                  },
                  expertise: {
          title: "PK Industry Specialists",
          description: "Leveraging PK Industry's deep expertise in oil & gas operations and asset integrity",
          icon: "Flame",
                    color: "from-primary to-primary/80",
          years: "Oil & Gas Leaders"
                  },
                  outcome: {
                    metric: "75%",
                    label: "Reduction in unplanned downtime",
          color: "text-primary",
                    icon: "TrendingDown",
          bgColor: "from-primary to-primary/80"
                  }
                },
                {
                  challenge: {
                    title: "Inspection Compliance Gaps",
          description: "Manual inspection processes failing to meet regulatory requirements and safety standards",
                    icon: "Search",
          color: "from-secondary to-secondary/80",
                    impact: "Regulatory fines and safety risks"
                  },
                  solution: {
                    title: "Digital Inspection & Compliance",
          description: "Comprehensive inspection management with regulatory compliance and safety protocols",
                    icon: "Search",
          color: "from-secondary to-secondary/80",
                    modules: ["IntelliInspect", "IntelliTrack", "IntelliVision"]
                  },
                  expertise: {
          title: "PK Inspections Excellence",
          description: "Leveraging PK Inspections' expertise in regulatory compliance and safety protocols",
          icon: "Search",
          color: "from-secondary to-secondary/80",
          years: "Inspection Leaders"
                  },
                  outcome: {
          metric: "60%",
          label: "Safety incident reduction",
          color: "text-secondary",
          icon: "Shield",
          bgColor: "from-secondary to-secondary/80"
                  }
                },
                {
                  challenge: {
                    title: "Asset Tracking Chaos",
          description: "Equipment and materials lost in complex facility networks with no real-time visibility",
                    icon: "MapPin",
          color: "from-primary to-primary/80",
                    impact: "Millions in lost assets and downtime"
                  },
                  solution: {
          title: "Real-Time Asset Tracking & Visibility",
          description: "Real-time tracking and management of equipment, materials, and personnel across facilities",
                    icon: "MapPin",
                    color: "from-accent to-accent/80",
                    modules: ["IntelliTrack", "IntelliCommand", "IntelliVision"]
                  },
                  expertise: {
                    title: "PK Inspections Mastery",
                    description: "Leveraging PK Inspections' expertise in RFID and IoT implementation for asset tracking",
                    icon: "MapPin",
                    color: "from-accent to-accent/80",
          years: "Tracking Leaders"
                  },
                  outcome: {
          metric: "85%",
          label: "Operational efficiency gain",
                    color: "text-accent",
          icon: "Gauge",
                    bgColor: "from-accent to-accent/80"
                  }
                },
                {
                  challenge: {
                    title: "Data Visualization Blind Spots",
          description: "Critical operational data buried in disconnected systems with no actionable insights",
                    icon: "Eye",
          color: "from-accent to-accent/80",
                    impact: "Poor decision-making and missed opportunities"
                  },
                  solution: {
          title: "Advanced Data Intelligence & Visualization",
          description: "Advanced analytics and visualization for operational insights and decision support",
                    icon: "Eye",
                    color: "from-secondary to-secondary/80",
                    modules: ["IntelliVision", "IntelliCommand", "IntelliIntegrity"]
                  },
                  expertise: {
                    title: "PK Industry Analytics",
          description: "Leveraging PK Industry's advanced analytics expertise for oil & gas operations",
                    icon: "Eye",
                    color: "from-secondary to-secondary/80",
                    years: "Analytics Leaders"
                  },
                  outcome: {
          metric: "10x",
          label: "Faster data processing",
          color: "text-secondary",
                    icon: "Zap",
          bgColor: "from-secondary to-secondary/80"
        }
      }
    ],

    successMetrics: [
      { label: "Equipment Inspection Accuracy", value: "95%", icon: "Shield", color: "text-secondary" },
      { label: "Inspection Time Reduction", value: "70%", icon: "TrendingDown", color: "text-primary" },
      { label: "Safety Incident Reduction", value: "60%", icon: "Shield", color: "text-secondary" },
      { label: "Predictive Maintenance Accuracy", value: "90%", icon: "Gauge", color: "text-accent" },
      { label: "Unplanned Downtime Reduction", value: "75%", icon: "TrendingUp", color: "text-accent" },
      { label: "ROI within First Year", value: "300%", icon: "BarChart3", color: "text-primary" }
    ],

    personas: [
      {
        role: 'Asset Integrity Manager',
        focus: 'Equipment reliability, failure prevention, downtime elimination',
        icon: "Shield",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
          challenge: 'Critical oil & gas equipment failing unexpectedly, causing catastrophic production losses and safety incidents.',
          solution: 'AI-powered asset integrity management with predictive maintenance, real-time monitoring, and failure prevention.',
          outcome: 'Reduced unplanned downtime by 75% and prevented 90% of potential equipment failures.'
        },
        metrics: { downtime: '75%', failures: '90%', integrity: '95%' },
        testimonial: {
          quote: "intelliSPEC's asset integrity platform transformed our approach from reactive to predictive. We now prevent failures before they cause catastrophic damage.",
          author: "James Mitchell",
          title: "Oil & Gas Asset Integrity Director",
          company: "Upstream Asset Solutions"
        },
        features: ['Predictive Asset Health', 'Failure Prevention', 'Real-time Monitoring']
      },
      {
        role: 'Compliance & Safety Director',
        focus: 'Regulatory compliance, safety standards, audit readiness',
        icon: "CheckCircle",
        color: 'from-secondary to-secondary/80',
        bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/20',
        story: {
          challenge: 'Complex regulatory requirements and safety standards causing compliance gaps and potential shutdowns.',
          solution: 'Automated compliance management with real-time monitoring, regulatory reporting, and safety protocol enforcement.',
          outcome: 'Achieved 100% compliance rate and zero regulatory violations across all facilities.'
        },
        metrics: { compliance: '100%', violations: '0', audits: '100%' },
        testimonial: {
          quote: "The automated compliance system ensures we exceed every regulatory requirement. Our safety record and audit performance are industry-leading.",
          author: "Dr. Maria Rodriguez",
          title: "Oil & Gas Compliance Director",
          company: "Regulatory Excellence Energy"
        },
        features: ['Automated Compliance', 'Regulatory Reporting', 'Safety Protocol Enforcement']
      },
      {
        role: 'Inspector (API/NDT)',
        focus: 'Field forms, report generation, visual tagging',
        icon: "Eye",
        color: 'from-accent to-accent/80',
        bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
          challenge: 'Paper-based oil & gas inspections taking days to process and losing critical visual documentation.',
          solution: 'Digital oil & gas inspection forms with photo documentation, visual tagging, and instant report generation.',
          outcome: '60% faster oil & gas inspections with 95% accuracy and complete audit trail.'
        },
        metrics: { speed: '60%', accuracy: '95%', documentation: '100%' },
        testimonial: {
          quote: "I went from spending hours on paperwork to focusing on what matters - thorough oil & gas inspections. The photo documentation is a game-changer.",
          author: "David Thompson",
          title: "Senior Oil & Gas Inspector",
          company: "Precision Oil & Gas Inspections"
        },
        features: ['Digital Forms', 'Photo Documentation', 'Instant Reports']
      },
      {
        role: 'Turnaround Coordinator',
        focus: 'Job scope, closure workflows, workforce mgmt',
                    icon: "Clock",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-primary/10 to-primary/20',
        story: {
          challenge: 'Complex oil & gas job scopes and workforce coordination causing delays and cost overruns.',
          solution: 'Integrated oil & gas job scope management with automated closure workflows and workforce optimization.',
          outcome: '30% faster oil & gas job completion and 25% reduction in workforce coordination time.'
        },
        metrics: { completion: '30%', coordination: '25%', efficiency: '45%' },
        testimonial: {
          quote: "The automated workflows have eliminated the chaos. We now complete oil & gas production on time, every time, with full visibility.",
          author: "Lisa Park",
          title: "Oil & Gas Production Manager",
          company: "Oil & Gas Production Dynamics"
        },
        features: ['Job Scope Management', 'Automated Workflows', 'Workforce Optimization']
      },
      {
        role: 'Scaffolding Manager',
        focus: 'Crew readiness, gear tracking, shift logging',
        icon: "HardHat",
        color: 'from-muted to-muted/80',
        bgColor: 'bg-gradient-to-br from-muted/10 to-muted/20',
        story: {
          challenge: 'Manual crew tracking and equipment management leading to safety risks and inefficiencies.',
          solution: 'Digital crew readiness tracking with equipment inventory and automated shift logging.',
          outcome: '100% crew compliance and 50% reduction in equipment tracking time.'
        },
        metrics: { compliance: '100%', tracking: '50%', safety: '90%' },
        testimonial: {
          quote: "Knowing exactly who's on site and what equipment is available has revolutionized our oil & gas operations. Safety has never been better.",
          author: "James Wilson",
          title: "Oil & Gas Production Supervisor",
          company: "Oil & Gas Height Safety Solutions"
        },
        features: ['Crew Tracking', 'Equipment Management', 'Shift Logging']
      },
      {
        role: 'Paint Manufacturer QC Lead',
        focus: 'Coating inspection logs, spec tracking',
        icon: "Activity",
        color: 'from-accent to-accent/80',
        bgColor: 'bg-gradient-to-br from-accent/10 to-accent/20',
        story: {
          challenge: 'Manual oil & gas inspections and specification tracking causing quality control issues.',
          solution: 'Digital oil & gas inspection logs with real-time specification tracking and quality assurance.',
          outcome: '90% improvement in oil & gas quality control and 100% specification compliance.'
        },
        metrics: { quality: '90%', compliance: '100%', efficiency: '65%' },
        testimonial: {
          quote: "Our oil & gas quality control has never been more precise. The digital tracking ensures every specification is met, every time.",
          author: "Maria Santos",
          title: "Oil & Gas QC Manager",
          company: "Premium Oil & Gas Quality Control Inc."
        },
        features: ['Digital Logs', 'Spec Tracking', 'Quality Assurance']
      },
      {
        role: 'Rescue Ops Lead',
        focus: 'Emergency response planning, cert tracking',
        icon: "Users",
        color: 'from-destructive to-destructive/80',
        bgColor: 'bg-gradient-to-br from-destructive/10 to-destructive/20',
        story: {
          challenge: 'Manual certification tracking and emergency response planning causing critical delays.',
          solution: 'Automated certification management with emergency response planning and team coordination.',
          outcome: '100% team readiness and 80% faster emergency response times.'
        },
        metrics: { readiness: '100%', response: '80%', compliance: '100%' },
        testimonial: {
          quote: "In emergency situations, every second counts. intelliSPEC ensures our oil & gas team is always ready and can respond instantly.",
          author: "Robert Johnson",
          title: "Oil & Gas Emergency Team Lead",
          company: "Oil & Gas Emergency Response Services"
        },
        features: ['Certification Tracking', 'Response Planning', 'Team Coordination']
      }
    ],

    timeline: [
      {
        phase: 1,
        title: "Manual Operations",
        subtitle: "Traditional Oil & Gas Operations",
        period: "1994-2004",
        description: "Traditional manual processes dominated oil & gas operations",
        features: [
          {
            icon: "CheckCircle",
            title: "Manual Inspections",
            description: "Paper-based inspection processes with limited documentation",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Basic Asset Tracking",
            description: "Simple inventory management with manual record keeping",
            type: "success" as const
          },
          {
            icon: "AlertTriangle",
            title: "Reactive Maintenance",
            description: "Equipment failures addressed only after they occurred",
            type: "warning" as const
          }
        ],
        image: {
          icon: "FileText",
          title: "Manual processes",
          subtitle: "Paper-based systems",
          gradient: "from-muted/50 to-muted/40"
        }
      },
      {
        phase: 2,
        title: "Digital Transition",
        subtitle: "Early Digital Adoption",
        period: "2004-2014",
        description: "Oil & gas industry begins digital transformation journey",
        features: [
          {
            icon: "CheckCircle",
            title: "Digital Inspections",
            description: "Basic digital inspection tools with electronic documentation",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Computerized Maintenance",
            description: "CMMS systems for basic maintenance management",
            type: "success" as const
          },
          {
            icon: "AlertTriangle",
            title: "Data Silos",
            description: "Multiple disconnected systems creating operational blind spots",
            type: "warning" as const
          }
        ],
        image: {
          icon: "Database",
          title: "Digital systems",
          subtitle: "Basic automation",
          gradient: "from-primary/50 to-primary/40"
        }
      },
      {
        phase: 3,
        title: "Connected Operations",
        subtitle: "IoT and Real-Time Monitoring",
        period: "2014-2024",
        description: "Oil & gas operations become connected with IoT and real-time monitoring",
        features: [
          {
            icon: "CheckCircle",
            title: "IoT Integration",
            description: "Real-time monitoring of critical equipment and processes",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Real-Time Dashboards",
            description: "Operational visibility with basic alerting systems",
            type: "success" as const
          },
          {
            icon: "AlertTriangle",
            title: "Data Overload",
            description: "Too much operational data without intelligence to make it actionable",
            type: "warning" as const
          }
        ],
        image: {
          icon: "Wifi",
          title: "IoT connectivity",
          subtitle: "Real-time data",
          gradient: "from-primary/50 to-primary/40"
        }
      },
      {
        phase: 4,
        title: "Intelligence",
        subtitle: "AI-Powered Predictive Intelligence",
        period: "2024-2034",
        description: "intelliSPEC delivers predictive oil & gas intelligence",
        features: [
          {
            icon: "CheckCircle",
            title: "Predictive Asset Integrity",
            description: "AI algorithms predict equipment failures and integrity issues before they occur",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Proactive Operations Management",
            description: "Intelligent operational control and automated safety monitoring",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Operational Intelligence",
            description: "Data transformed into insights that drive oil & gas excellence",
            type: "success" as const
          }
        ],
        image: {
          icon: "Building2",
          title: "AI-Powered Intelligence",
          subtitle: "Predictive Analytics",
          gradient: "from-primary/50 to-primary/40"
        }
      }
    ],

    ctaTitle: "Ready to Transform Your Oil & Gas Operations?",
    ctaDescription: "Join industry leaders who have revolutionized their oil & gas operations with intelliSPEC. Start your free trial today and see the difference predictive intelligence makes.",
    ctaButtonText: "Start Free Trial",
    ctaButtonLink: "/contact"
  }

  return (
    <>

      <main className="min-h-screen">
    
        
        {/* Use the IndustryTemplate for consistent sections */}
        <IndustryTemplate
          industryName={oilGasIndustry.name}
          industryDescription={oilGasIndustry.description}
          industryColor={oilGasData.industryColor}
          industryGradient={oilGasData.industryGradient}
          heroImage={oilGasIndustry.heroImage}
          badge={oilGasIndustry.badge}
          successMetrics={oilGasIndustry.metrics}
          roiJourney={oilGasData.roiJourney}
          solutionsMatrix={oilGasData.solutionsMatrix}
          personas={oilGasData.personas}
          timeline={oilGasData.timeline}
          ctaTitle={oilGasData.ctaTitle}
          ctaDescription={oilGasData.ctaDescription}
          ctaButtonText={oilGasData.ctaButtonText}
          ctaButtonLink={oilGasData.ctaButtonLink}
        />


      </main>
      <LLMReadyBlock
        intent="Oil & Gas FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'Which standards and practices are supported (API, NBIC, OSHA, site SOPs)?', a: 'Configurable checks align to API/NBIC/OSHA and your SOPs with audit evidence.' },
          { q: 'How does predictive integrity reduce unplanned downtime at critical units?', a: 'Models score risk, forecast failures, and schedule interventions before outages.' },
          { q: 'Can inspections be digitized with photo/video evidence and signatures?', a: 'Yes. Digital workflows capture media, signatures, and approvals for audits.' },
          { q: 'Do dashboards provide unit/loop/equipment risk heatmaps?', a: 'Yes. Integrity KPIs highlight risk by unit, loop, and equipment class.' },
          { q: 'Is offline operation available for field work in hazardous areas?', a: 'Yes. Offline capture syncs securely when connectivity is restored.' },
          { q: 'Can CAPA be generated from findings with SLA and escalation?', a: 'Yes. Findings create CAPA tasks with owners, due dates, and escalations.' },
          { q: 'How do you integrate with CMMS/ERP and historians/SCADA?', a: 'APIs synchronize assets and work orders; tags and SCADA streams feed analytics.' },
          { q: 'Are permits, blinds, and hot‑work workflows supported?', a: 'Yes. PTW, blinds, and hot‑work processes with prerequisites and validations.' },
          { q: 'How is data secured across sites and contractors?', a: 'RBAC by role/site, encryption, SSO, and tamper‑evident logs.' },
          { q: 'What onboarding timeline is typical from pilot to multi‑site rollouts?', a: 'Pilots in 4–6 weeks; scale site‑by‑site using templates and connectors.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Reduce downtime and prevent failures with predictive integrity, digital inspections, and automated
            compliance across upstream, midstream, and downstream assets.
          </p>
        )}
        takeaways={[
          'Predictive analytics prevents costly outages',
          'Digital inspections speed execution and reporting',
          'Unified dashboards provide end-to-end visibility',
        ]}
      />
    </>
  )
}

 