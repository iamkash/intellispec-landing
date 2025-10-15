import React from 'react'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import TLDRBlock from '@/components/sections/TLDRBlock'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead

const automotiveIndustry = {
  name: 'Automotive',
  description: 'Transform automotive operations through our comprehensive framework: INSPECT production equipment, ASSESS component quality, PLAN maintenance cycles, EXECUTE precision interventions, MONITOR assembly performance, and COMPLY with automotive standards. Ensure manufacturing excellence and quality assurance.',
  heroImage: '/images/industries/automotive.jpg',
  badge: 'Asset Integrity & Compliance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Automotive Evolution',
    description: 'Transform your automotive operations from reactive quality control to predictive intelligence with comprehensive manufacturing optimization.',
    phases: [
      {
        phase: 1,
        title: 'Manual Systems',
        period: '1990s-2000s',
        description: 'Manual quality checks, paper-based tracking, reactive maintenance, and isolated production lines.',
        icon: "AlertTriangle",
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Adoption',
        period: '2000s-2010s',
        description: 'Digital documentation, automated testing, scheduled maintenance, and connected systems.',
        icon: "Settings",
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Manufacturing',
        period: '2010s-2020s',
        description: 'IoT sensors, real-time monitoring, predictive analytics, and integrated platforms.',
        icon: "Activity",
        status: 'progress' as const
      },
      {
        phase: 4,
        title: 'Intelligent Production',
        period: '2020s+',
        description: 'AI-powered optimization, autonomous systems, predictive intelligence, and complete visibility.',
        icon: "Target",
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Automotive Solutions',
    description: 'How intelliSPEC addresses specific automotive challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Quality defects discovered late in production causing recalls and warranty claims',
        solution: 'AI-powered quality control with real-time defect detection and prevention',
        result: '99.8% quality rate, 80% reduction in warranty claims',
        icon: "AlertTriangle"
      },
      {
        challenge: 'Production line downtime causing delivery delays and revenue loss',
        solution: 'Predictive maintenance with real-time equipment health monitoring',
        result: '70% reduction in unplanned downtime, 95% on-time delivery',
        icon: "Wrench"
      },
      {
        challenge: 'Manual inspection processes missing critical safety defects',
        solution: 'Automated inspection workflows with AI-powered defect detection',
        result: '99.9% defect detection accuracy, 60% faster inspections',
        icon: "Search"
      },
      {
        challenge: 'Lack of real-time visibility into production performance and quality',
        solution: 'Real-time monitoring with performance analytics and optimization',
        result: '100% production visibility, 45% improved efficiency',
        icon: "BarChart3"
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to automotive excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'System integration, data migration, and initial training to establish your digital automotive foundation.',
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
        description: 'Deploy predictive analytics, automate workflows, and optimize production processes.',
        icon: "Cog",
        features: [
          'Predictive maintenance deployment',
          'Quality control automation',
          'Production optimization',
          'Performance monitoring'
        ],
        roi: '45% productivity increase'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete operational excellence with AI-powered insights, autonomous systems, and predictive intelligence.',
        icon: "Target",
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
  metrics: [
    { label: 'Asset Integrity', value: '99.8%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '70%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '90%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ],

  roiJourney: [
    {
      months: "0-3",
      title: "Inspection Foundation",
      subtitle: "Quality Control Setup",
      phase: "Foundation",
      description: "Deploy comprehensive quality control systems with automated inspection capabilities and defect detection across production lines.",
      items: [
        { icon: "Shield", text: "Quality control baseline established with 99% defect detection", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Compliance Optimization",
      subtitle: "Predictive Quality Integration",
      phase: "Optimization",
      description: "Implement predictive quality analytics and automated inspection systems for proactive defect prevention and compliance tracking.",
      items: [
        { icon: "TrendingUp", text: "70% reduction in quality defects through predictive analytics", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Operational Excellence",
      subtitle: "Full Quality Intelligence Mastery",
      phase: "Excellence",
      description: "Achieve complete automotive quality excellence with AI-powered inspection systems, predictive maintenance, and 100% compliance assurance.",
      items: [
        { icon: "CheckCircle", text: "100% quality compliance achieved with autonomous inspection systems", type: "success" as const }
      ]
    }
  ]
}

export default function AutomotivePage() {
  return (
    <>
      <IndustryTemplate
        industryName={automotiveIndustry.name}
        industryDescription={automotiveIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={automotiveIndustry.heroImage}
        badge={automotiveIndustry.badge}
        successMetrics={automotiveIndustry.metrics}
        chaosToClarity={automotiveIndustry.chaosToClarity}
        challengeSolution={automotiveIndustry.challengeSolution}
        implementationProcess={automotiveIndustry.implementationProcess}
        roiJourney={automotiveIndustry.roiJourney}
        solutionsMatrix={[
          {
            challenge: {
              title: "Production Quality Failures",
              description: "Manual quality inspections missing critical defects causing recalls and warranty claims",
              icon: "AlertTriangle",
              color: "from-red-600 to-red-700",
              impact: "$10M+ per major recall incident"
            },
            solution: {
              title: "AI-Powered Quality Control System",
              description: "Advanced quality inspection and defect prediction for automotive manufacturing",
              icon: "Shield",
              color: "from-primary to-primary/80",
              modules: ["IntelliInspect", "IntelliVision", "IntelliIntegrity"]
            },
            expertise: {
              title: "Automotive Quality Specialists",
              description: "Leveraging deep expertise in automotive quality control and manufacturing standards",
              icon: "Target",
              color: "from-primary to-primary/80",
              years: "Quality Control Leaders"
            },
            outcome: {
              metric: "99.8%",
              label: "Quality rate achieved",
              color: "text-primary",
              icon: "Shield",
              bgColor: "from-primary to-primary/80"
            }
          },
          {
            challenge: {
              title: "Production Line Downtime",
              description: "Unexpected equipment failures causing production delays and revenue loss",
              icon: "AlertTriangle",
              color: "from-orange-600 to-orange-700",
              impact: "Millions in lost production per hour"
            },
            solution: {
              title: "Predictive Maintenance System",
              description: "AI-powered equipment health monitoring and failure prediction",
              icon: "Activity",
              color: "from-green-600 to-green-700",
              modules: ["IntelliIntegrity", "IntelliCommand", "IntelliVision"]
            },
            expertise: {
              title: "Manufacturing Excellence Team",
              description: "Leveraging expertise in automotive manufacturing and predictive maintenance",
              icon: "Wrench",
              color: "from-green-600 to-green-700",
              years: "Manufacturing Leaders"
            },
            outcome: {
              metric: "70%",
              label: "Downtime reduction",
              color: "text-green-400",
              icon: "TrendingUp",
              bgColor: "from-green-600 to-green-700"
            }
          },
          {
            challenge: {
              title: "Manual Inspection Inefficiency",
              description: "Slow manual inspections creating production bottlenecks and missing defects",
              icon: "Search",
              color: "from-yellow-600 to-yellow-700",
              impact: "Production delays and quality issues"
            },
            solution: {
              title: "Automated Inspection Workflows",
              description: "AI-powered automated inspection with real-time defect detection",
              icon: "Eye",
              color: "from-purple-600 to-purple-700",
              modules: ["IntelliVision", "IntelliInspect", "IntelliWork"]
            },
            expertise: {
              title: "Inspection Automation Experts",
              description: "Leveraging expertise in automotive inspection automation and AI vision",
              icon: "Eye",
              color: "from-purple-600 to-purple-700",
              years: "Inspection Leaders"
            },
            outcome: {
              metric: "60%",
              label: "Faster inspections",
              color: "text-purple-400",
              icon: "Clock",
              bgColor: "from-purple-600 to-purple-700"
            }
          }
        ]}
        personas={[
          {
            role: 'Plant Manager / Operations Director',
            focus: 'Production visibility, manufacturing coordination',
            icon: "Building2",
            color: 'from-primary to-primary/80',
            bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10',
            story: {
              challenge: 'Managing multiple production lines with limited visibility into quality metrics and production bottlenecks.',
              solution: 'Real-time dashboard with live production tracking, quality monitoring, and predictive completion timelines.',
              outcome: 'Reduced production delays by 30% and improved quality metrics by 45%.'
            },
            metrics: { visibility: '100%', efficiency: '45%', quality: '30%' },
            testimonial: {
              quote: "intelliSPEC transformed our production visibility. We can now track every line in real-time and make data-driven decisions instantly.",
              author: "Jennifer Martinez",
              title: "Automotive Plant Manager",
              company: "Global Auto Manufacturing"
            },
            features: ['Production Dashboards', 'Quality Analytics', 'Resource Optimization']
          },
          {
            role: 'Quality Control Manager',
            focus: 'Quality assurance, defect prevention, compliance',
            icon: "Shield",
            color: 'from-green-600 to-green-700',
            bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
            story: {
              challenge: 'Manual quality inspections missing critical defects and causing warranty claims and recalls.',
              solution: 'AI-powered quality control system with automated defect detection and prevention.',
              outcome: 'Achieved 99.8% quality rate and eliminated warranty claims.'
            },
            metrics: { quality: '99.8%', defects: '95%', recalls: '0' },
            testimonial: {
              quote: "The AI quality system has revolutionized our approach. We now catch defects before they become problems, not after.",
              author: "Michael Chen",
              title: "Quality Control Director",
              company: "Precision Auto Quality"
            },
            features: ['Automated Quality Control', 'Defect Prevention', 'Compliance Tracking']
          },
          {
            role: 'Production Line Inspector',
            focus: 'Component inspection, quality documentation',
            icon: "Eye",
            color: 'from-purple-600 to-purple-700',
            bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10',
            story: {
              challenge: 'Manual component inspections taking too long and missing critical quality issues.',
              solution: 'Digital inspection workflows with AI-powered defect detection and instant documentation.',
              outcome: '60% faster inspections with 99.9% defect detection accuracy.'
            },
            metrics: { speed: '60%', accuracy: '99.9%', documentation: '100%' },
            testimonial: {
              quote: "I can now focus on what matters - thorough inspections. The AI catches things I might miss and documents everything perfectly.",
              author: "Sarah Johnson",
              title: "Senior Production Inspector",
              company: "Automotive Quality Solutions"
            },
            features: ['Digital Inspection Forms', 'AI Defect Detection', 'Instant Documentation']
          },
          {
            role: 'Maintenance Supervisor',
            focus: 'Equipment reliability, preventive maintenance',
            icon: "Wrench",
            color: 'from-orange-600 to-orange-700',
            bgColor: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10',
            story: {
              challenge: 'Reactive maintenance approach causing unexpected production line failures and costly downtime.',
              solution: 'Predictive maintenance system with equipment health monitoring and failure prediction.',
              outcome: 'Prevented 70% of equipment failures and achieved 99% production line availability.'
            },
            metrics: { failures: '70%', availability: '99%', costs: '40%' },
            testimonial: {
              quote: "Predictive maintenance changed everything. We now maintain equipment health before problems occur, keeping production running smoothly.",
              author: "Robert Davis",
              title: "Maintenance Manager",
              company: "Automotive Maintenance Excellence"
            },
            features: ['Equipment Health Monitoring', 'Failure Prediction', 'Maintenance Optimization']
          },
          {
            role: 'Production Coordinator',
            focus: 'Workflow optimization, resource allocation',
            icon: "Settings",
            color: 'from-slate-600 to-slate-700',
            bgColor: 'bg-gradient-to-br from-slate-500/10 to-slate-600/10',
            story: {
              challenge: 'Complex production workflows and resource coordination causing delays and inefficiencies.',
              solution: 'Integrated workflow management with automated resource allocation and optimization.',
              outcome: '35% faster production cycles and 50% better resource utilization.'
            },
            metrics: { cycles: '35%', utilization: '50%', efficiency: '40%' },
            testimonial: {
              quote: "Workflow optimization has eliminated bottlenecks. We now coordinate resources seamlessly and hit production targets consistently.",
              author: "Lisa Wang",
              title: "Production Coordinator",
              company: "Streamlined Auto Production"
            },
            features: ['Workflow Management', 'Resource Allocation', 'Production Optimization']
          },
          {
            role: 'Safety Manager',
            focus: 'Workplace safety, compliance, incident prevention',
            icon: "HardHat",
            color: 'from-red-600 to-red-700',
            bgColor: 'bg-gradient-to-br from-red-500/10 to-red-600/10',
            story: {
              challenge: 'Manual safety monitoring and compliance tracking creating risks and regulatory gaps.',
              solution: 'Automated safety monitoring with real-time compliance tracking and incident prevention.',
              outcome: '100% safety compliance and 80% reduction in workplace incidents.'
            },
            metrics: { compliance: '100%', incidents: '80%', safety: '95%' },
            testimonial: {
              quote: "Safety automation has transformed our culture. We now prevent incidents before they happen and maintain perfect compliance.",
              author: "David Wilson",
              title: "Safety Director",
              company: "Automotive Safety First"
            },
            features: ['Safety Monitoring', 'Compliance Automation', 'Incident Prevention']
          },
          {
            role: 'Supply Chain Manager',
            focus: 'Inventory management, supplier coordination',
            icon: "Package",
            color: 'from-indigo-600 to-indigo-700',
            bgColor: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/10',
            story: {
              challenge: 'Manual inventory tracking and supplier coordination causing production delays and stockouts.',
              solution: 'Intelligent supply chain management with automated inventory tracking and supplier optimization.',
              outcome: '90% reduction in stockouts and 25% improvement in supplier performance.'
            },
            metrics: { stockouts: '90%', performance: '25%', efficiency: '35%' },
            testimonial: {
              quote: "Supply chain intelligence has eliminated surprises. We now have perfect visibility and coordination across all suppliers.",
              author: "Amanda Rodriguez",
              title: "Supply Chain Director",
              company: "Automotive Supply Excellence"
            },
            features: ['Inventory Tracking', 'Supplier Management', 'Supply Chain Optimization']
          }
        ]}
        timeline={[]}
        ctaTitle="Ready to Transform Your Automotive Operations?"
        ctaDescription="Join leading automotive manufacturers achieving operational excellence with intelliSPEC's comprehensive production solutions."
      />
      <LLMReadyBlock
        intent="Automotive FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does AI defect detection integrate with existing MES/PLC systems on the line?', a: 'API adapters stream vision/test data, surface defects, and create work in MES/CMMS.' },
          { q: 'Can predictive maintenance reduce unplanned downtime for critical stations?', a: 'Yes. Models forecast failures and trigger planned interventions to avoid stoppages.' },
          { q: 'How are automated inspections documented to support PPAP and regulatory needs?', a: 'Digital records store images, measurements, signatures, and approvals for audits.' },
          { q: 'Do dashboards provide live production visibility with bottleneck alerts?', a: 'Yes. Line‑to‑plant dashboards highlight throughput, quality drift, and bottlenecks.' },
          { q: 'Is offline operation available for handheld inspections or yard checks?', a: 'Yes. Field workflows operate offline and sync securely when reconnected.' },
          { q: 'How are recalls and warranty risks mitigated with traceability?', a: 'End‑to‑end traceability links parts, inspections, and stations for rapid root cause.' },
          { q: 'Can CAPA be driven from inspection findings with due‑date tracking?', a: 'Yes. Findings generate CAPA tasks with owners, SLAs, and escalation rules.' },
          { q: 'How do you secure production data and limit access by role or cell?', a: 'RBAC, encryption, SSO, and audit logs enforce least‑privilege access.' },
          { q: 'What rollout timelines should we expect for pilots and multi‑line scale‑up?', a: 'Pilots in weeks; scale line‑by‑line with reusable templates and connectors.' },
          { q: 'Can we customize quality thresholds and sampling plans per model or line?', a: 'Yes. Rules per model/line define sampling, thresholds, and alert policies.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Hit quality and delivery targets with AI defect prevention, predictive maintenance, and automated
            inspection workflows.
          </p>
        )}
        takeaways={[
          'Quality rate to 99.8%+',
          'Downtime reduced via predictive maintenance',
          'Faster inspections with audit evidence',
        ]}
      />
    </>
  )
}
