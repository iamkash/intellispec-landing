import React from 'react'
import TLDRBlock from '@/components/sections/TLDRBlock'
import LLMReadyBlock from '@/components/sections/LLMReadyBlock'
import IndustryTemplate from '@/components/sections/IndustryTemplate'
// Icon imports removed - using string names instead

const miningIndustry = {
  name: 'Mining',
  description: 'Transform mining operations through our comprehensive framework: INSPECT mining equipment, ASSESS structural integrity, PLAN maintenance schedules, EXECUTE safety interventions, MONITOR extraction performance, and COMPLY with mining standards. Ensure safe operations and operational excellence.',
  heroImage: '/images/industries/mining.jpg',
  badge: 'Asset Integrity & Compliance',
  chaosToClarity: {
    title: 'From Chaos to Clarity',
    subtitle: 'Mining Evolution',
    description: 'Transform your mining operations from reactive safety management to predictive intelligence with comprehensive operational optimization.',
    phases: [
      {
        phase: 1,
        title: 'Manual Systems',
        period: '1990s-2000s',
        description: 'Paper-based safety logs, manual equipment tracking, reactive maintenance, and isolated operations.',
        icon: "AlertTriangle",
        status: 'chaos' as const
      },
      {
        phase: 2,
        title: 'Digital Adoption',
        period: '2000s-2010s',
        description: 'Digital documentation, GPS tracking, scheduled maintenance, and connected systems.',
        icon: "Settings",
        status: 'progress' as const
      },
      {
        phase: 3,
        title: 'Smart Mining',
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
        icon: "Building2",
        status: 'clarity' as const
      }
    ]
  },
  challengeSolution: {
    title: 'Challenge-Solution Matrix',
    subtitle: 'Mining Solutions',
    description: 'How IntelliSpec addresses specific mining challenges with proven solutions and measurable results.',
    matrix: [
      {
        challenge: 'Safety incidents and equipment failures causing injuries and production losses',
        solution: 'AI-powered safety monitoring with real-time hazard detection and prevention',
        result: '90% reduction in safety incidents, 99.5% equipment uptime',
        icon: "AlertTriangle"
      },
      {
        challenge: 'Equipment breakdowns causing costly production delays',
        solution: 'Predictive maintenance with real-time equipment health monitoring',
        result: '75% reduction in unplanned downtime, 50% maintenance cost savings',
        icon: "Wrench"
      },
      {
        challenge: 'Manual inspection processes in hazardous environments',
        solution: 'Automated inspection workflows with AI-powered defect detection',
        result: '99% defect detection accuracy, 80% safer inspections',
        icon: "Search"
      },
      {
        challenge: 'Lack of real-time visibility into mining operations and resource allocation',
        solution: 'Real-time monitoring with performance analytics and optimization',
        result: '100% operational visibility, 35% improved resource efficiency',
        icon: "BarChart3"
      }
    ]
  },
  implementationProcess: {
    title: 'Implementation Process',
    subtitle: 'Your Journey to Excellence',
    description: 'From initial assessment to full transformation - your structured path to mining excellence with measurable ROI at every phase.',
    phases: [
      {
        months: '0-3',
        title: 'Foundation Setup',
        description: 'System integration, data migration, and initial training to establish your digital mining foundation.',
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
        description: 'Deploy predictive analytics, automate workflows, and optimize mining processes for maximum safety.',
        icon: "Settings",
        features: [
          'Predictive maintenance deployment',
          'Safety monitoring automation',
          'Performance optimization',
          'Real-time analytics'
        ],
        roi: '35% productivity increase'
      },
      {
        months: '6-12',
        title: 'Full Transformation',
        description: 'Achieve complete operational excellence with AI-powered insights, autonomous systems, and predictive intelligence.',
        icon: "Building2",
        features: [
          'AI-powered optimization',
          'Autonomous safety systems',
          'Predictive intelligence',
          'Complete visibility'
        ]
      }
    ]
  },
  metrics: [
    { label: 'Asset Integrity', value: '97%', icon: "Shield", color: 'from-primary to-primary/80' },
    { label: 'Downtime Prevention', value: '90%', icon: "TrendingUp", color: 'from-secondary to-secondary/80' },
    { label: 'Compliance Rate', value: '100%', icon: "CheckCircle", color: 'from-accent to-accent/80' },
    { label: 'Inspection Efficiency', value: '85%', icon: "Search", color: 'from-destructive to-destructive/80' },
    { label: 'Equipment Reliability', value: '99.5%', icon: "Activity", color: 'from-muted to-muted/80' },
    { label: 'Safety Performance', value: '100%', icon: "HardHat", color: 'from-primary to-primary/80' }
  ],

  roiJourney: [
    {
      months: "0-3",
      title: "Inspection Foundation",
      subtitle: "Mining Safety Setup",
      phase: "Foundation",
      description: "Deploy comprehensive mining inspection systems with automated safety compliance monitoring and real-time hazard assessment capabilities.",
      items: [
        { icon: "Shield", text: "Safety compliance baseline established with 97% asset integrity coverage", type: "success" as const }
      ]
    },
    {
      months: "3-6",
      title: "Compliance Optimization",
      subtitle: "Predictive Safety Integration",
      phase: "Optimization",
      description: "Implement predictive safety analytics and automated inspection systems for proactive hazard prevention and compliance tracking.",
      items: [
        { icon: "TrendingUp", text: "90% reduction in safety incidents through predictive monitoring", type: "success" as const }
      ]
    },
    {
      months: "6-12",
      title: "Operational Excellence",
      subtitle: "Full Mining Intelligence Mastery",
      phase: "Excellence",
      description: "Achieve complete mining operational excellence with AI-powered inspection systems, predictive maintenance, and 100% regulatory compliance.",
      items: [
        { icon: "CheckCircle", text: "100% regulatory compliance achieved with autonomous safety systems", type: "success" as const }
      ]
    }
  ]
}

export default function MiningPage() {
  return (
    <>
      <IndustryTemplate
        industryName={miningIndustry.name}
        industryDescription={miningIndustry.description}
        industryColor="text-primary"
        industryGradient="from-primary to-primary/80"
        heroImage={miningIndustry.heroImage}
        badge={miningIndustry.badge}
        successMetrics={miningIndustry.metrics}
        chaosToClarity={miningIndustry.chaosToClarity}
        challengeSolution={miningIndustry.challengeSolution}
        implementationProcess={miningIndustry.implementationProcess}
        roiJourney={miningIndustry.roiJourney}
        solutionsMatrix={[
          {
            challenge: {
              title: "Mining Safety Incidents",
              description: "Critical safety hazards and equipment failures causing injuries and production shutdowns",
              icon: "AlertTriangle",
              color: "from-red-600 to-red-700",
              impact: "$50M+ per major safety incident"
            },
            solution: {
              title: "AI-Powered Safety Monitoring System",
              description: "Advanced hazard detection and safety management for mining operations",
              icon: "Shield",
              color: "from-primary to-primary/80",
              modules: ["IntelliSafety", "IntelliVision", "IntelliIntegrity"]
            },
            expertise: {
              title: "Mining Safety Specialists",
              description: "Leveraging deep expertise in mining safety protocols and hazard prevention",
              icon: "HardHat",
              color: "from-primary to-primary/80",
              years: "Mining Safety Leaders"
            },
            outcome: {
              metric: "90%",
              label: "Safety incident reduction",
              color: "text-primary",
              icon: "Shield",
              bgColor: "from-primary to-primary/80"
            }
          },
          {
            challenge: {
              title: "Equipment Breakdown Failures",
              description: "Unexpected mining equipment failures causing production delays and revenue loss",
              icon: "AlertTriangle",
              color: "from-orange-600 to-orange-700",
              impact: "Millions in lost extraction per day"
            },
            solution: {
              title: "Predictive Equipment Maintenance",
              description: "AI-powered equipment health monitoring and failure prediction for mining assets",
              icon: "Activity",
              color: "from-green-600 to-green-700",
              modules: ["IntelliIntegrity", "IntelliCommand", "IntelliVision"]
            },
            expertise: {
              title: "Mining Equipment Experts",
              description: "Leveraging expertise in mining equipment maintenance and predictive analytics",
              icon: "Wrench",
              color: "from-green-600 to-green-700",
              years: "Equipment Leaders"
            },
            outcome: {
              metric: "75%",
              label: "Downtime reduction",
              color: "text-green-400",
              icon: "TrendingUp",
              bgColor: "from-green-600 to-green-700"
            }
          },
          {
            challenge: {
              title: "Hazardous Manual Inspections",
              description: "Dangerous manual inspections in hazardous mining environments risking worker safety",
              icon: "Search",
              color: "from-yellow-600 to-yellow-700",
              impact: "Worker safety risks and inspection delays"
            },
            solution: {
              title: "Automated Mining Inspection System",
              description: "AI-powered automated inspection with remote hazard detection capabilities",
              icon: "Eye",
              color: "from-purple-600 to-purple-700",
              modules: ["IntelliVision", "IntelliInspect", "IntelliSafety"]
            },
            expertise: {
              title: "Mining Inspection Specialists",
              description: "Leveraging expertise in mining inspection automation and remote monitoring",
              icon: "Eye",
              color: "from-purple-600 to-purple-700",
              years: "Inspection Leaders"
            },
            outcome: {
              metric: "80%",
              label: "Safer inspections",
              color: "text-purple-400",
              icon: "HardHat",
              bgColor: "from-purple-600 to-purple-700"
            }
          }
        ]}
        personas={[
          {
            role: 'Mine Manager / Operations Director',
            focus: 'Site safety, extraction coordination, resource management',
            icon: "Building2",
            color: 'from-primary to-primary/80',
            bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-600/10',
            story: {
              challenge: 'Managing multiple extraction sites with limited visibility into safety metrics and production bottlenecks.',
              solution: 'Real-time dashboard with live site monitoring, safety tracking, and predictive resource allocation.',
              outcome: 'Reduced safety incidents by 40% and improved extraction efficiency by 35%.'
            },
            metrics: { safety: '40%', efficiency: '35%', visibility: '100%' },
            testimonial: {
              quote: "IntelliSpec transformed our mining visibility. We can now monitor every site in real-time and ensure safety while maximizing production.",
              author: "Marcus Thompson",
              title: "Mining Operations Director",
              company: "Global Mining Solutions"
            },
            features: ['Site Monitoring', 'Safety Analytics', 'Resource Optimization']
          },
          {
            role: 'Safety Manager',
            focus: 'Worker safety, hazard prevention, compliance',
            icon: "Shield",
            color: 'from-green-600 to-green-700',
            bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
            story: {
              challenge: 'Manual safety monitoring in hazardous mining environments causing incidents and regulatory violations.',
              solution: 'AI-powered safety monitoring system with real-time hazard detection and prevention.',
              outcome: 'Achieved 90% reduction in safety incidents and 100% regulatory compliance.'
            },
            metrics: { incidents: '90%', compliance: '100%', hazards: '95%' },
            testimonial: {
              quote: "The AI safety system has revolutionized our approach. We now prevent incidents before they happen, not react after they occur.",
              author: "Sarah Mitchell",
              title: "Mining Safety Director",
              company: "SafeMining Operations"
            },
            features: ['Hazard Detection', 'Safety Monitoring', 'Compliance Tracking']
          },
          {
            role: 'Equipment Inspector',
            focus: 'Equipment inspection, maintenance planning, defect detection',
            icon: "Eye",
            color: 'from-purple-600 to-purple-700',
            bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-600/10',
            story: {
              challenge: 'Dangerous manual equipment inspections in hazardous mining environments risking worker safety.',
              solution: 'Remote inspection capabilities with AI-powered defect detection and automated documentation.',
              outcome: '80% safer inspections with 99% defect detection accuracy.'
            },
            metrics: { safety: '80%', accuracy: '99%', efficiency: '65%' },
            testimonial: {
              quote: "I can now inspect equipment safely from a distance. The AI catches defects I might miss and keeps detailed records automatically.",
              author: "David Rodriguez",
              title: "Senior Mining Inspector",
              company: "Mining Inspection Services"
            },
            features: ['Remote Inspection', 'AI Defect Detection', 'Automated Documentation']
          },
          {
            role: 'Maintenance Supervisor',
            focus: 'Equipment reliability, preventive maintenance, asset integrity',
            icon: "Wrench",
            color: 'from-orange-600 to-orange-700',
            bgColor: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10',
            story: {
              challenge: 'Reactive maintenance approach causing unexpected mining equipment failures and costly production shutdowns.',
              solution: 'Predictive maintenance system with equipment health monitoring and failure prediction.',
              outcome: 'Prevented 75% of equipment failures and achieved 99.5% equipment uptime.'
            },
            metrics: { failures: '75%', uptime: '99.5%', costs: '50%' },
            testimonial: {
              quote: "Predictive maintenance transformed our operations. We now maintain equipment health proactively, keeping extraction running smoothly.",
              author: "James Wilson",
              title: "Mining Maintenance Manager",
              company: "Mining Equipment Excellence"
            },
            features: ['Equipment Health Monitoring', 'Failure Prediction', 'Maintenance Optimization']
          },
          {
            role: 'Production Coordinator',
            focus: 'Extraction planning, resource allocation, workflow optimization',
            icon: "Settings",
            color: 'from-slate-600 to-slate-700',
            bgColor: 'bg-gradient-to-br from-slate-500/10 to-slate-600/10',
            story: {
              challenge: 'Complex extraction workflows and resource coordination causing delays and inefficiencies.',
              solution: 'Integrated workflow management with automated resource allocation and extraction optimization.',
              outcome: '30% faster extraction cycles and 45% better resource utilization.'
            },
            metrics: { cycles: '30%', utilization: '45%', efficiency: '35%' },
            testimonial: {
              quote: "Workflow optimization eliminated bottlenecks. We now coordinate resources seamlessly and hit extraction targets consistently.",
              author: "Lisa Chen",
              title: "Mining Production Coordinator",
              company: "Optimized Mining Operations"
            },
            features: ['Workflow Management', 'Resource Allocation', 'Extraction Optimization']
          },
          {
            role: 'Environmental Compliance Officer',
            focus: 'Environmental monitoring, regulatory compliance, impact assessment',
            icon: "HardHat",
            color: 'from-red-600 to-red-700',
            bgColor: 'bg-gradient-to-br from-red-500/10 to-red-600/10',
            story: {
              challenge: 'Manual environmental monitoring and compliance tracking creating regulatory risks and environmental gaps.',
              solution: 'Automated environmental monitoring with real-time compliance tracking and impact assessment.',
              outcome: '100% environmental compliance and 70% reduction in environmental incidents.'
            },
            metrics: { compliance: '100%', incidents: '70%', monitoring: '95%' },
            testimonial: {
              quote: "Environmental automation has transformed our compliance culture. We now prevent environmental issues and maintain perfect regulatory standing.",
              author: "Michael Davis",
              title: "Environmental Manager",
              company: "Sustainable Mining Solutions"
            },
            features: ['Environmental Monitoring', 'Compliance Automation', 'Impact Assessment']
          },
          {
            role: 'Supply Chain Manager',
            focus: 'Equipment logistics, inventory management, supplier coordination',
            icon: "Package",
            color: 'from-indigo-600 to-indigo-700',
            bgColor: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/10',
            story: {
              challenge: 'Manual inventory tracking and supplier coordination causing equipment shortages and extraction delays.',
              solution: 'Intelligent supply chain management with automated inventory tracking and supplier optimization.',
              outcome: '85% reduction in equipment shortages and 30% improvement in supplier performance.'
            },
            metrics: { shortages: '85%', performance: '30%', efficiency: '40%' },
            testimonial: {
              quote: "Supply chain intelligence eliminated surprises. We now have perfect visibility and coordination across all mining suppliers.",
              author: "Amanda Johnson",
              title: "Mining Supply Chain Director",
              company: "Mining Supply Excellence"
            },
            features: ['Inventory Tracking', 'Supplier Management', 'Supply Chain Optimization']
          }
        ]}
        timeline={[]}
        ctaTitle="Ready to Transform Your Mining Operations?"
        ctaDescription="Join leading mining companies achieving operational excellence with IntelliSpec's comprehensive extraction solutions."
      />
      <LLMReadyBlock
        intent="Mining FAQs"
        renderUI={false}
        showCoreSections={false}
        faq={[
          { q: 'How does AI hazard detection improve safety in hazardous mining environments?', a: 'Vision/sensor analytics detect hazards early and trigger preventive actions.' },
          { q: 'Can predictive maintenance reduce breakdowns for haul trucks, shovels, and conveyors?', a: 'Yes. Models forecast failures and schedule planned maintenance to avoid downtime.' },
          { q: 'Is offline support available for underground and remote sites?', a: 'Yes. Workflows run offline and securely sync when connectivity returns.' },
          { q: 'How are inspections digitized with media evidence and supervisor sign‑off?', a: 'Digital forms capture photos/videos, notes, and signatures with full traceability.' },
          { q: 'Do dashboards provide multi‑site visibility for equipment, crews, and output?', a: 'Yes. Fleet and site dashboards reveal utilization, availability, and risks.' },
          { q: 'Can CAPA and permits be driven from findings with SLA tracking?', a: 'Yes. Findings generate CAPA and PTW workflows with owners and due dates.' },
          { q: 'How do you integrate with maintenance and planning systems?', a: 'APIs synchronize assets/work orders and share KPIs with planning systems.' },
          { q: 'Are environmental monitoring and compliance supported?', a: 'Yes. Environmental metrics and evidence support regulatory compliance.' },
          { q: 'How is crew access and data protected across contractors and sites?', a: 'RBAC scopes access by role/site; encryption and audit logs protect data.' },
          { q: 'What rollout timeline is typical from pilot to full site adoption?', a: 'Pilots in weeks; expand by area/asset class with templates and training.' }
        ]}
      />
      <TLDRBlock
        summary={(
          <p>
            Improve mine safety and uptime with AI hazard detection, predictive maintenance, and multi-site dashboards
            for real-time visibility and action.
          </p>
        )}
        takeaways={[
          'Fewer incidents via predictive monitoring',
          'Lower downtime with equipment health analytics',
          'Site-to-fleet visibility for decisions',
        ]}
      />
    </>
  )
}
