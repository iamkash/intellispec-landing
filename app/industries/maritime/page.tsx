import React from 'react'

import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead
import Link from 'next/link'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'

const maritimeIndustry = {
  name: 'Maritime',
  description: 'Transform maritime operations through our comprehensive framework: INSPECT vessel systems, ASSESS hull integrity, PLAN maintenance schedules, EXECUTE targeted repairs, MONITOR fleet performance, and COMPLY with maritime standards. Ensure safe navigation and operational excellence.',
  heroImage: '/images/industries/maritime.jpg',
  badge: 'Asset Integrity & Compliance',
  metrics: [
    { label: 'Asset Integrity', value: '96%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '80%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '85%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ]
}

export default function MaritimePage() {
  // Maritime industry data for the template
  const maritimeData = {
    industryName: "Maritime",
    industryColor: "text-primary",
    industryGradient: "from-primary to-primary/80",
    
    roiJourney: [
      {
        months: "1-3",
        title: "Foundation Phase",
        subtitle: "Implementation & Training",
        phase: "Foundation",
        description: "Deploy maritime asset integrity systems and establish baseline operations",
        items: [
          { icon: "CheckCircle", text: "Maritime inspection system deployment", type: "success" as const },
          { icon: "CheckCircle", text: "Fleet crew training and certification", type: "success" as const },
          { icon: "CheckCircle", text: "Hull and coating inspection processes", type: "success" as const }
        ],
        roi: '25%+ operational efficiency'
      },
      {
        months: "4-8",
        title: "Optimization Phase", 
        subtitle: "Scale & Integrate",
        phase: "Optimization",
        description: "Scale maritime operations and integrate predictive analytics across fleet",
        items: [
          { icon: "TrendingUp", text: "Predictive maintenance implementation", type: "success" as const },
          { icon: "Shield", text: "Advanced hull integrity monitoring", type: "success" as const },
          { icon: "Activity", text: "Fleet-wide compliance automation", type: "success" as const }
        ],
        roi: '45%+ asset reliability'
      },
      {
        months: "9-12",
        title: "Excellence Phase",
        subtitle: "Continuous Improvement",
        phase: "Excellence", 
        description: "Achieve maritime operational excellence with full predictive intelligence",
        items: [
          { icon: "BarChart3", text: "AI-powered coating life prediction", type: "success" as const },
          { icon: "Target", text: "Autonomous fleet optimization", type: "success" as const },
          { icon: "Gauge", text: "Continuous maritime intelligence", type: "success" as const }
        ],
        roi: '80%+ downtime prevention'
      }
    ],

    solutionsMatrix: [
      {
        challenge: {
          title: "Hull Inspection Failures",
          description: "Manual hull inspections missing critical structural defects and coating issues",
          icon: "AlertTriangle",
          color: "from-red-600 to-red-700",
          impact: "$5M+ per dry-dock incident"
        },
        solution: {
          title: "Advanced Hull Inspection System",
          description: "AI-powered hull inspection and structural integrity assessment",
          icon: "Activity",
          color: "from-primary to-primary/80",
          modules: ["IntelliInspect", "IntelliIntegrity", "IntelliVision"]
        },
        expertise: {
          title: "PK Industry Specialists",
          description: "Leveraging PK Industry's deep expertise in maritime hull inspections",
          icon: "Ship",
          color: "from-primary to-primary/80",
          years: "Hull Inspection Leaders"
        },
        outcome: {
          metric: "95%",
          label: "Hull inspection accuracy",
          color: "text-primary",
          icon: "Shield",
          bgColor: "from-primary to-primary/80"
        }
      },
      {
        challenge: {
          title: "Coating Inspection Inefficiency",
          description: "Manual coating inspections taking too long and missing critical defects",
          icon: "Search",
          color: "from-orange-600 to-orange-700",
          impact: "Premature coating failures and costly repairs"
        },
        solution: {
          title: "Advanced Coating Inspection System",
          description: "AI-powered coating inspection and life prediction analysis",
          icon: "Search",
          color: "from-green-600 to-green-700",
          modules: ["IntelliInspect", "IntelliVision", "IntelliIntegrity"]
        },
        expertise: {
          title: "PK Inspections Excellence",
          description: "Leveraging PK Inspections' expertise in maritime coating inspections",
          icon: "Search",
          color: "from-green-600 to-green-700",
          years: "Coating Inspection Leaders"
        },
        outcome: {
          metric: "90%",
          label: "Coating inspection efficiency",
          color: "text-green-400",
          icon: "CheckCircle",
          bgColor: "from-green-600 to-green-700"
        }
      },
      {
        challenge: {
          title: "Inspection Scheduling Chaos",
          description: "Manual inspection scheduling causing vessel downtime and operational delays",
          icon: "MapPin",
          color: "from-yellow-600 to-yellow-700",
          impact: "Millions in lost revenue from vessel downtime"
        },
        solution: {
          title: "Intelligent Inspection Scheduling",
          description: "AI-powered inspection scheduling and coordination across vessel fleet",
          icon: "MapPin",
          color: "from-purple-600 to-purple-700",
          modules: ["IntelliCommand", "IntelliTrack", "IntelliWork"]
        },
        expertise: {
          title: "PK Inspections Mastery",
          description: "Leveraging PK Inspections' expertise in maritime inspection coordination",
          icon: "MapPin",
          color: "from-purple-600 to-purple-700",
          years: "Inspection Scheduling Leaders"
        },
        outcome: {
          metric: "75%",
          label: "Inspection time reduction",
          color: "text-purple-400",
          icon: "Eye",
          bgColor: "from-purple-600 to-purple-700"
        }
      },
      {
        challenge: {
          title: "Coating Life Prediction Failures",
          description: "Manual coating assessment leading to premature failures and costly repairs",
          icon: "Eye",
          color: "from-indigo-600 to-indigo-700",
          impact: "Unexpected coating failures and dry-dock delays"
        },
        solution: {
          title: "Predictive Coating Analytics",
          description: "AI-powered coating life prediction and maintenance planning",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          modules: ["IntelliVision", "IntelliIntegrity", "IntelliCommand"]
        },
        expertise: {
          title: "PK Industry Analytics",
          description: "Leveraging PK Industry's advanced analytics expertise for coating life prediction",
          icon: "Eye",
          color: "from-emerald-600 to-emerald-700",
          years: "Coating Analytics Leaders"
        },
        outcome: {
          metric: "40%",
          label: "Coating life extension",
          color: "text-emerald-400",
          icon: "TrendingUp",
          bgColor: "from-emerald-600 to-emerald-700"
        }
      }
    ],

    successMetrics: [
      { label: "Hull Inspection Accuracy", value: "95%", icon: "Shield", color: "text-primary" },
      { label: "Coating Inspection Efficiency", value: "90%", icon: "CheckCircle", color: "text-green-400" },
      { label: "Regulatory Compliance Achieved", value: "100%", icon: "Eye", color: "text-purple-400" },
      { label: "Inspection Time Reduction", value: "75%", icon: "Gauge", color: "text-yellow-400" },
      { label: "Coating Life Extension", value: "40%", icon: "TrendingUp", color: "text-indigo-400" },
      { label: "ROI within First Year", value: "250%", icon: "BarChart3", color: "text-orange-400" }
    ],

    personas: [
      {
        role: 'Plant Owner / Ops Director',
        focus: 'Visibility, maritime fleet coordination',
        icon: "Building2",
        color: 'from-primary to-primary/80',
        bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10',
        story: {
          challenge: 'Managing multiple maritime vessels across facilities with limited visibility into progress and bottlenecks.',
          solution: 'Real-time dashboard with live fleet tracking, resource allocation, and predictive completion timelines.',
          outcome: 'Reduced vessel downtime by 25% and improved resource utilization by 40%.'
        },
        metrics: { visibility: '100%', efficiency: '40%', coordination: '60%' },
        testimonial: {
          quote: "IntelliSpec gave us the visibility we desperately needed. We can now track every maritime vessel in real-time and make informed decisions instantly.",
          author: "Sarah Chen",
          title: "Maritime Operations Director",
          company: "Global Maritime Solutions"
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
          challenge: 'Manual permit processes causing delays and compliance gaps in high-risk maritime environments.',
          solution: 'Automated permit-to-work system with real-time compliance tracking and incident management.',
          outcome: 'Zero compliance violations and 70% faster permit approvals.'
        },
        metrics: { compliance: '100%', safety: '70%', incidents: '0' },
        testimonial: {
          quote: "The automated permit system has transformed our maritime safety culture. Zero violations in 18 months speaks volumes about the impact.",
          author: "Mike Rodriguez",
          title: "Maritime HSE Manager",
          company: "Maritime SafetyFirst"
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
          challenge: 'Paper-based maritime inspections taking days to process and losing critical visual documentation.',
          solution: 'Digital maritime inspection forms with photo documentation, visual tagging, and instant report generation.',
          outcome: '60% faster maritime inspections with 95% accuracy and complete audit trail.'
        },
        metrics: { speed: '60%', accuracy: '95%', documentation: '100%' },
        testimonial: {
          quote: "I went from spending hours on paperwork to focusing on what matters - thorough maritime inspections. The photo documentation is a game-changer.",
          author: "David Thompson",
          title: "Senior Maritime Inspector",
          company: "Precision Maritime Inspections"
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
          challenge: 'Complex maritime job scopes and workforce coordination causing delays and cost overruns.',
          solution: 'Integrated maritime job scope management with automated closure workflows and workforce optimization.',
          outcome: '30% faster maritime job completion and 25% reduction in workforce coordination time.'
        },
        metrics: { completion: '30%', coordination: '25%', efficiency: '45%' },
        testimonial: {
          quote: "The automated workflows have eliminated the chaos. We now complete maritime operations on time, every time, with full visibility.",
          author: "Lisa Park",
          title: "Maritime Operations Manager",
          company: "Maritime Operations Dynamics"
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
          quote: "Knowing exactly who's on board and what equipment is available has revolutionized our maritime operations. Safety has never been better.",
          author: "James Wilson",
          title: "Maritime Operations Supervisor",
          company: "Maritime Height Safety Solutions"
        },
        features: ['Crew Tracking', 'Equipment Management', 'Shift Logging']
      },
      {
        role: 'Paint Manufacturer QC Lead',
        focus: 'Coating inspection logs, spec tracking',
        icon: "Paintbrush",
        color: 'from-pink-600 to-pink-700',
        bgColor: 'bg-gradient-to-br from-pink-500/10 to-pink-600/10',
        story: {
          challenge: 'Manual coating inspections and specification tracking causing quality control issues.',
          solution: 'Digital coating inspection logs with real-time specification tracking and quality assurance.',
          outcome: '90% improvement in coating quality control and 100% specification compliance.'
        },
        metrics: { quality: '90%', compliance: '100%', efficiency: '65%' },
        testimonial: {
          quote: "Our coating quality control has never been more precise. The digital tracking ensures every specification is met, every time.",
          author: "Maria Santos",
          title: "Maritime QC Manager",
          company: "Premium Maritime Coatings Inc."
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
          quote: "In emergency situations, every second counts. IntelliSpec ensures our maritime team is always ready and can respond instantly.",
          author: "Robert Johnson",
          title: "Maritime Emergency Team Lead",
          company: "Maritime Emergency Response Services"
        },
        features: ['Certification Tracking', 'Response Planning', 'Team Coordination']
      }
    ],

    timeline: [
      {
        phase: 1,
        title: "Manual Operations",
        subtitle: "Traditional Maritime Operations",
        period: "1994-2004",
        description: "Traditional manual processes dominated maritime operations",
        features: [
          {
            icon: "CheckCircle",
            title: "Manual Inspections",
            description: "Paper-based inspection processes with limited documentation",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Basic Fleet Tracking",
            description: "Simple vessel management with manual record keeping",
            type: "success" as const
          },
          {
            icon: "AlertTriangle",
            title: "Reactive Maintenance",
            description: "Vessel failures addressed only after they occurred",
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
        description: "Maritime industry begins digital transformation journey",
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
        description: "Maritime operations become connected with IoT and real-time monitoring",
        features: [
          {
            icon: "CheckCircle",
            title: "IoT Integration",
            description: "Real-time monitoring of critical vessel equipment and processes",
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
          gradient: "from-blue-900/50 to-blue-800/50"
        }
      },
      {
        phase: 4,
        title: "Intelligence",
        subtitle: "AI-Powered Predictive Intelligence",
        period: "2024-2034",
        description: "IntelliSpec delivers predictive maritime intelligence",
        features: [
          {
            icon: "CheckCircle",
            title: "Predictive Vessel Analytics",
            description: "AI algorithms predict vessel failures and safety issues before they occur",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Proactive Fleet Management",
            description: "Intelligent fleet control and automated safety monitoring",
            type: "success" as const
          },
          {
            icon: "CheckCircle",
            title: "Maritime Intelligence",
            description: "Data transformed into insights that drive maritime excellence",
            type: "success" as const
          }
        ],
        image: {
          icon: "Building2",
          title: "AI-Powered Intelligence",
          subtitle: "Predictive Analytics",
          gradient: "from-blue-900/50 to-blue-800/50"
        }
      }
    ],

    ctaTitle: "Ready to Transform Your Maritime Operations?",
    ctaDescription: "Join industry leaders who have revolutionized their maritime operations with IntelliSpec. Start your free trial today and see the difference predictive intelligence makes.",
    ctaButtonText: "Start Free Trial",
    ctaButtonLink: "/contact"
  }

  return (
    <>

        <IndustryTemplate
          industryName={maritimeIndustry.name}
          industryDescription={maritimeIndustry.description}
          industryColor={maritimeData.industryColor}
          industryGradient={maritimeData.industryGradient}
          heroImage={maritimeIndustry.heroImage}
          badge={maritimeIndustry.badge}
          successMetrics={maritimeIndustry.metrics}
          roiJourney={maritimeData.roiJourney}
          solutionsMatrix={maritimeData.solutionsMatrix}
          personas={maritimeData.personas}
          timeline={maritimeData.timeline}
          ctaTitle={maritimeData.ctaTitle}
          ctaDescription={maritimeData.ctaDescription}
          ctaButtonText={maritimeData.ctaButtonText}
          ctaButtonLink={maritimeData.ctaButtonLink}
        />
      <LLMReadyBlock
        intent="Maritime FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does AI hull and coating inspection improve class readiness?', a: 'Automated defect detection, life prediction, and evidence logs simplify class surveys.' },
          { q: 'Can the system optimize inspection scheduling to reduce vessel downtime?', a: 'Yes. Routing and sequencing minimize off‑hire time and coordinate resources.' },
          { q: 'Do dashboards provide fleet‑wide visibility for hull, coating, and machinery?', a: 'Yes. Fleet dashboards unify condition, risks, and due items across vessels.' },
          { q: 'Is offline capture supported for yard and at‑sea inspections?', a: 'Yes. Inspect offline with secure sync post‑connectivity.' },
          { q: 'How are coating specs and manufacturer requirements tracked?', a: 'Digital spec tracking validates surface prep, DFT, and cure with attachments.' },
          { q: 'Can we generate work packs and verify completion with media evidence?', a: 'Yes. Work packs bundle tasks, and completion requires media and sign‑off.' },
          { q: 'How do you integrate with PMS/ERP and logbooks?', a: 'APIs sync jobs, parts, and logs with PMS/ERP; entries remain traceable.' },
          { q: 'Are alerts available for class due items, permits, and overdue work?', a: 'Configurable alerts and escalations cover surveys, permits, and overdue tasks.' },
          { q: 'What data protections are applied for vessel operations?', a: 'Encryption, role scoping by vessel/fleet, and full audit logs.' },
          { q: 'Can yard reports and class submissions be generated automatically?', a: 'Yes. Templates export reports with timestamps, media, and certification data.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Accelerate hull/coating inspections, optimize scheduling, and maintain continuous compliance with a
            predictive, data-driven maritime framework.
          </p>
        )}
        takeaways={[
          'AI inspections improve accuracy and speed',
          'Smarter scheduling reduces downtime',
          'Unified fleet visibility and audit evidence',
        ]}
      />
    </>
  )
} 