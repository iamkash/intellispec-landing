import React from 'react'

import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead
import Link from 'next/link'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

const powerIndustry = {
  name: 'Power',
  description: 'Transform power operations through our comprehensive framework: INSPECT grid infrastructure, ASSESS equipment health, PLAN maintenance outages, EXECUTE targeted repairs, MONITOR system performance, and COMPLY with utility standards. Ensure reliable power delivery and operational excellence.',
  heroImage: '/images/industries/power.jpg',
  badge: 'Asset Integrity & Compliance',
  metrics: [
    { label: 'Asset Integrity', value: '95%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '80%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '75%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ]
}

export default function PowerPage() {
  // Power industry data for the template
  const powerData = {
    industryName: "Power",
    industryColor: "text-primary",
    industryGradient: "from-primary to-primary/80",
    
    roiJourney: [
      {
        months: "0-3",
        title: "Foundation Phase",
        subtitle: "Grid Integrity Implementation",
        phase: "Foundation",
        description: "Deploy grid integrity management system with predictive maintenance capabilities and utility compliance monitoring.",
        items: [
          { icon: "Shield", text: "Grid integrity baseline established", type: "success" as const }
        ]
      },
      {
        months: "3-6",
        title: "Optimization Phase", 
        subtitle: "Predictive Analytics Deployment",
        phase: "Optimization",
        description: "Implement predictive analytics and automated inspection systems for proactive equipment failure prevention.",
        items: [
          { icon: "TrendingUp", text: "80% reduction in unplanned outages", type: "success" as const }
        ]
      },
      {
        months: "6-12",
        title: "Excellence Phase",
        subtitle: "Full Grid Integrity Maturity",
        phase: "Excellence", 
        description: "Achieve complete grid integrity management with predictive maintenance and 100% utility compliance.",
        items: [
          { icon: "Zap", text: "95% grid integrity achievement", type: "success" as const }
        ]
      }
    ],

    solutionsMatrix: [
      {
        challenge: {
          title: "Power Asset Integrity Failures",
          description: "Critical power generation and transmission equipment failures causing widespread outages and economic losses",
          icon: "AlertTriangle",
          color: "from-destructive to-destructive/80",
          impact: "$100M+ per hour of outage"
        },
        solution: {
          title: "Predictive Power Asset Integrity Management",
          description: "AI-powered asset health monitoring and predictive maintenance for critical power infrastructure",
          icon: "Shield",
          color: "from-primary to-primary/80",
          modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
        },
        expertise: {
          title: "Power Asset Integrity Specialists",
          description: "Leveraging deep expertise in power asset integrity and utility maintenance standards",
          icon: "Shield",
          color: "from-primary to-primary/80",
          years: "Power Asset Leaders"
        },
        outcome: {
          metric: "80%",
          label: "Reduction in unplanned outages",
          color: "text-primary",
          icon: "TrendingUp",
          bgColor: "from-primary to-primary/80"
        }
      },
      {
        challenge: {
          title: "Utility Compliance Gaps",
          description: "NERC, FERC, and state utility requirements causing compliance failures and potential penalties",
          icon: "Search",
          color: "from-secondary to-secondary/80",
          impact: "Regulatory fines and grid access restrictions"
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
          description: "Leveraging expertise in NERC, FERC, and state utility compliance standards",
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
          title: "Asset Management Chaos",
          description: "Critical power equipment and materials lost in complex grid networks",
          icon: "MapPin",
          color: "from-blue-600 to-blue-700",
          impact: "Millions in lost assets and service delays"
        },
        solution: {
          title: "Real-Time Asset Tracking",
          description: "Real-time tracking and management of power equipment across the grid",
          icon: "MapPin",
          color: "from-purple-600 to-purple-700",
          modules: ["IntelliTrack", "IntelliCommand", "IntelliVision"]
        },
        expertise: {
          title: "PK Inspections Mastery",
          description: "Leveraging PK Inspections' expertise in RFID and IoT for power asset tracking",
          icon: "MapPin",
          color: "from-purple-600 to-purple-700",
          years: "Tracking Leaders"
        },
        outcome: {
          metric: "85%",
          label: "Asset visibility improvement",
          color: "text-purple-400",
          icon: "Eye",
          bgColor: "from-purple-600 to-purple-700"
        }
      },
      {
        challenge: {
          title: "Grid Data Blind Spots",
          description: "Critical operational data buried in disconnected SCADA and maintenance systems",
          icon: "Eye",
          color: "from-indigo-600 to-indigo-700",
          impact: "Poor decision-making and grid instability"
        },
        solution: {
          title: "Advanced Grid Analytics",
          description: "Advanced analytics and visualization for grid operational insights",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          modules: ["IntelliVision", "IntelliCommand", "IntelliIntegrity"]
        },
        expertise: {
          title: "PK Industry Analytics",
          description: "Leveraging PK Industry's advanced analytics expertise for power grid operations",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          years: "Analytics Leaders"
        },
        outcome: {
          metric: "12x",
          label: "Faster data processing",
          color: "text-emerald-400",
          icon: "Zap",
          bgColor: "from-emerald-600 to-emerald-700"
        }
      }
    ],

    successMetrics: [
      { label: "Grid Equipment Inspection Accuracy", value: "95%", icon: "Shield", color: "text-primary" },
      { label: "Inspection Time Reduction", value: "75%", icon: "TrendingDown", color: "text-green-400" },
      { label: "Regulatory Compliance Achieved", value: "100%", icon: "Shield", color: "text-purple-400" },
      { label: "Predictive Maintenance Accuracy", value: "90%", icon: "Eye", color: "text-blue-400" },
      { label: "Grid Reliability Improvement", value: "90%", icon: "TrendingUp", color: "text-indigo-400" },
      { label: "ROI within First Year", value: "350%", icon: "BarChart3", color: "text-orange-400" }
    ],

    personas: [
      {
        role: 'Plant Owner / Ops Director',
        focus: 'Visibility, power grid coordination',
        icon: "Building2",
        color: 'from-blue-600 to-blue-700',
        bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10',
        story: {
          challenge: 'Managing multiple power grid operations across facilities with limited visibility into progress and bottlenecks.',
          solution: 'Real-time dashboard with live grid tracking, resource allocation, and predictive completion timelines.',
          outcome: 'Reduced grid downtime by 25% and improved resource utilization by 40%.'
        },
        metrics: { visibility: '100%', efficiency: '40%', coordination: '60%' },
        testimonial: {
          quote: "intelliSPEC gave us the visibility we desperately needed. We can now track every power grid operation in real-time and make informed decisions instantly.",
          author: "Sarah Chen",
          title: "Power Grid Operations Director",
          company: "Global Power Solutions"
        },
        features: ['Real-time Dashboards', 'Predictive Analytics', 'Resource Optimization']
      },
      {
        role: 'Safety Contractor / HSE Lead',
        focus: 'Compliance, permit-to-work, incident mgmt',
        icon: "Shield",
        color: 'from-green-600 to-green-700',
        bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
        story: {
          challenge: 'Manual permit processes causing delays and compliance gaps in high-risk power environments.',
          solution: 'Automated permit-to-work system with real-time compliance tracking and incident management.',
          outcome: 'Zero compliance violations and 70% faster permit approvals.'
        },
        metrics: { compliance: '100%', safety: '70%', incidents: '0' },
        testimonial: {
          quote: "The automated permit system has transformed our power safety culture. Zero violations in 18 months speaks volumes about the impact.",
          author: "Mike Rodriguez",
          title: "Power HSE Manager",
          company: "Power SafetyFirst"
        },
        features: ['Automated Permits', 'Compliance Tracking', 'Incident Prevention']
      },
      {
        role: 'Inspector (API/NDT)',
        focus: 'Field forms, report generation, visual tagging',
        icon: "Eye",
        color: 'from-purple-600 to-purple-700',
        bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10',
        story: {
          challenge: 'Paper-based power inspections taking days to process and losing critical visual documentation.',
          solution: 'Digital power inspection forms with photo documentation, visual tagging, and instant report generation.',
          outcome: '60% faster power inspections with 95% accuracy and complete audit trail.'
        },
        metrics: { speed: '60%', accuracy: '95%', documentation: '100%' },
        testimonial: {
          quote: "I went from spending hours on paperwork to focusing on what matters - thorough power inspections. The photo documentation is a game-changer.",
          author: "David Thompson",
          title: "Senior Power Inspector",
          company: "Precision Power Inspections"
        },
        features: ['Digital Forms', 'Photo Documentation', 'Instant Reports']
      },
      {
        role: 'Turnaround Coordinator',
        focus: 'Job scope, closure workflows, workforce mgmt',
        icon: "Clock",
        color: 'from-orange-600 to-orange-700',
        bgColor: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10',
        story: {
          challenge: 'Complex power job scopes and workforce coordination causing delays and cost overruns.',
          solution: 'Integrated power job scope management with automated closure workflows and workforce optimization.',
          outcome: '30% faster power job completion and 25% reduction in workforce coordination time.'
        },
        metrics: { completion: '30%', coordination: '25%', efficiency: '45%' },
        testimonial: {
          quote: "The automated workflows have eliminated the chaos. We now complete power operations on time, every time, with full visibility.",
          author: "Lisa Park",
          title: "Power Operations Manager",
          company: "Power Operations Dynamics"
        },
        features: ['Job Scope Management', 'Automated Workflows', 'Workforce Optimization']
      },
      {
        role: 'Scaffolding Manager',
        focus: 'Crew readiness, gear tracking, shift logging',
        icon: "HardHat",
        color: 'from-slate-600 to-slate-700',
        bgColor: 'bg-gradient-to-br from-slate-500/10 to-slate-600/10',
        story: {
          challenge: 'Manual crew tracking and equipment management leading to safety risks and inefficiencies.',
          solution: 'Digital crew readiness tracking with equipment inventory and automated shift logging.',
          outcome: '100% crew compliance and 50% reduction in equipment tracking time.'
        },
        metrics: { compliance: '100%', tracking: '50%', safety: '90%' },
        testimonial: {
          quote: "Knowing exactly who's on site and what equipment is available has revolutionized our power operations. Safety has never been better.",
          author: "James Wilson",
          title: "Power Operations Supervisor",
          company: "Power Height Safety Solutions"
        },
        features: ['Crew Tracking', 'Equipment Management', 'Shift Logging']
      },
      {
        role: 'Paint Manufacturer QC Lead',
        focus: 'Coating inspection logs, spec tracking',
        icon: "Activity",
        color: 'from-pink-600 to-pink-700',
        bgColor: 'bg-gradient-to-br from-pink-500/10 to-pink-600/10',
        story: {
          challenge: 'Manual power inspections and specification tracking causing quality control issues.',
          solution: 'Digital power inspection logs with real-time specification tracking and quality assurance.',
          outcome: '90% improvement in power quality control and 100% specification compliance.'
        },
        metrics: { quality: '90%', compliance: '100%', efficiency: '65%' },
        testimonial: {
          quote: "Our power quality control has never been more precise. The digital tracking ensures every specification is met, every time.",
          author: "Maria Santos",
          title: "Power QC Manager",
          company: "Premium Power Quality Control Inc."
        },
        features: ['Digital Logs', 'Spec Tracking', 'Quality Assurance']
      },
      {
        role: 'Rescue Ops Lead',
        focus: 'Emergency response planning, cert tracking',
        icon: "Users",
        color: 'from-red-600 to-red-700',
        bgColor: 'bg-gradient-to-br from-red-500/10 to-red-600/10',
        story: {
          challenge: 'Manual certification tracking and emergency response planning causing critical delays.',
          solution: 'Automated certification management with emergency response planning and team coordination.',
          outcome: '100% team readiness and 80% faster emergency response times.'
        },
        metrics: { readiness: '100%', response: '80%', compliance: '100%' },
        testimonial: {
          quote: "In emergency situations, every second counts. intelliSPEC ensures our power team is always ready and can respond instantly.",
          author: "Robert Johnson",
          title: "Power Emergency Team Lead",
          company: "Power Emergency Response Services"
        },
        features: ['Certification Tracking', 'Response Planning', 'Team Coordination']
      }
    ],

    timeline: [
      {
        phase: 1,
        title: "Manual Operations",
        subtitle: "Traditional Power Operations",
        period: "1994-2004",
        description: "Traditional manual processes dominated power operations",
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
          gradient: "from-gray-900/50 to-gray-800/50"
        }
      },
      {
        phase: 2,
        title: "Digital Transition",
        subtitle: "Early Digital Adoption",
        period: "2004-2014",
        description: "Power industry begins digital transformation journey",
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
          gradient: "from-blue-900/50 to-blue-800/50"
        }
      },
      {
        phase: 3,
        title: "Connected Operations",
        subtitle: "IoT and Real-Time Monitoring",
        period: "2014-2024",
        description: "Power operations become connected with IoT and real-time monitoring",
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
          gradient: "from-yellow-900/50 to-yellow-800/50"
        }
      },
      {
        phase: 4,
        title: "Intelligence",
        subtitle: "AI-Powered Predictive Intelligence",
        period: "2024-2034",
        description: "intelliSPEC delivers predictive power intelligence",
        features: [
          {
            icon: "CheckCircle",
            title: "Predictive Grid Analytics",
            description: "AI algorithms predict grid failures and reliability issues before they occur",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Proactive Grid Management",
            description: "Intelligent grid control and automated reliability monitoring",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Grid Intelligence",
            description: "Data transformed into insights that drive power excellence",
            type: "success" as const
          }
        ],
        image: {
          icon: "Building2",
          title: "AI-Powered Intelligence",
          subtitle: "Predictive Analytics",
          gradient: "from-yellow-900/50 to-yellow-800/50"
        }
      }
    ],

    ctaTitle: "Ready to Transform Your Power Operations?",
    ctaDescription: "Join industry leaders who have revolutionized their power operations with intelliSPEC. Start your free trial today and see the difference predictive intelligence makes.",
    ctaButtonText: "Start Free Trial",
    ctaButtonLink: "/contact"
  }

  return (
    <>

        <IndustryTemplate
          industryName={powerIndustry.name}
          industryDescription={powerIndustry.description}
          industryColor={powerData.industryColor}
          industryGradient={powerData.industryGradient}
          heroImage={powerIndustry.heroImage}
          badge={powerIndustry.badge}
          successMetrics={powerIndustry.metrics}
          roiJourney={powerData.roiJourney}
          solutionsMatrix={powerData.solutionsMatrix}
          personas={powerData.personas}
          timeline={powerData.timeline}
          ctaTitle={powerData.ctaTitle}
          ctaDescription={powerData.ctaDescription}
          ctaButtonText={powerData.ctaButtonText}
          ctaButtonLink={powerData.ctaButtonLink}
        />
      <LLMReadyBlock
        intent="Power Industry FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How do you integrate with utility EAM/CMMS and SCADA/AMI data?', a: 'APIs sync assets/work orders; SCADA/AMI tags feed predictive analytics.' },
          { q: 'Can predictive analytics reduce unplanned outages at substations and feeders?', a: 'Yes. Models detect emerging failures and prioritize plans to avoid outages.' },
          { q: 'How are inspections and PTW digitized with evidence for NERC/FERC audits?', a: 'Digital inspections and PTW capture media, signatures, and audit‑ready logs.' },
          { q: 'Do dashboards provide reliability KPIs and risk heatmaps across the grid?', a: 'Yes. Reliability KPIs and heatmaps highlight risk by asset class and region.' },
          { q: 'Is offline capability available for crews in the field?', a: 'Yes. Crews operate offline with secure synchronization post‑work.' },
          { q: 'Can CAPA and switching be orchestrated from detected issues?', a: 'Yes. Issues drive CAPA and route approvals for switching and work orders.' },
          { q: 'What regulatory frameworks are supported out of the box?', a: 'Mappings and reports support NERC, FERC, and state‑level requirements.' },
          { q: 'How is data secured and access controlled across utilities and vendors?', a: 'RBAC, encryption, SSO, vendor scoping, and immutable audit logs.' },
          { q: 'What are typical pilot and scale timelines?', a: 'Pilots go live in weeks; scale regionally with templates and connectors.' },
          { q: 'Can alerts auto‑trigger permits, notifications, and dispatch?', a: 'Yes. Rules trigger PTW, notify stakeholders, and dispatch crews automatically.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Prevent outages and ensure compliance with predictive grid analytics, digital inspections, and unified
            operational dashboards.
          </p>
        )}
        takeaways={[
          'Fewer unplanned outages with predictive integrity',
          'Faster inspections and automated reporting',
          'Unified SCADA + maintenance visibility',
        ]}
      />
    </>
  )
} 