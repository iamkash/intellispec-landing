"use client"

import React from 'react'
import IndustryTemplate from './IndustryTemplate'
import { 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Shield,
  Gauge,
  BarChart3,
  Zap,
  Clock,
  Eye,
  Download,
  Users,
  FileText,
  Calendar,
  Activity,
  Search,
  MapPin,
  Command,
  FlaskConical,
  Database,
  Wifi,
  Building2,
  Wrench
} from 'lucide-react'

// Example data for Chemical Industry
const chemicalIndustryData = {
  industryName: "Chemical",
  industryColor: "text-cyan-400",
  industryGradient: "from-cyan-600 to-teal-700",
  
  roiJourney: [
    {
      months: "1-3",
      title: "Foundation Phase",
      subtitle: "Implementation & Training",
      phase: "Foundation",
      description: "Implementation Phase",
      items: [
        { icon: CheckCircle, text: "System deployment", type: "success" as const },
        { icon: CheckCircle, text: "Team training", type: "success" as const },
        { icon: CheckCircle, text: "Process optimization", type: "success" as const }
      ]
    }
  ],

  solutionsMatrix: [
    {
      challenge: {
        title: "Process Safety Failures",
        description: "Unpredictable equipment failures and process anomalies causing safety incidents",
        icon: AlertTriangle,
        color: "from-red-600 to-red-700",
        impact: "Safety incidents and production losses"
      },
      solution: {
        title: "Predictive Process Intelligence",
        description: "AI-powered predictive analytics for equipment and process monitoring",
        icon: Activity,
        color: "from-cyan-600 to-cyan-700",
        modules: ["IntelliIntegrity", "IntelliVision", "IntelliCommand"]
      },
      expertise: {
        title: "PK Chemical Specialists",
        description: "Leveraging PK Industry's deep expertise in chemical process safety and optimization",
        icon: FlaskConical,
        color: "from-cyan-600 to-cyan-700",
        years: "Chemical Leaders"
      },
      outcome: {
        metric: "90%",
        label: "Reduction in process incidents",
        color: "text-cyan-400",
        icon: TrendingDown,
        bgColor: "from-cyan-600 to-cyan-700"
      }
    },
    {
      challenge: {
        title: "Compliance Management Chaos",
        description: "Manual EPA and OSHA compliance tracking with high risk of violations",
        icon: Shield,
        color: "from-orange-600 to-orange-700",
        impact: "Regulatory fines and safety risks"
      },
      solution: {
        title: "Automated Compliance Management",
        description: "Digital compliance workflows with real-time monitoring and reporting",
        icon: Shield,
        color: "from-blue-600 to-blue-700",
        modules: ["IntelliInspect", "IntelliComply", "IntelliTrack"]
      },
      expertise: {
        title: "PK Safety Excellence",
        description: "Leveraging PK Safety's expertise in EPA, OSHA, and chemical industry regulations",
        icon: Shield,
        color: "from-blue-600 to-blue-700",
        years: "Safety Leaders"
      },
      outcome: {
        metric: "100%",
        label: "Compliance achievement",
        color: "text-blue-400",
        icon: CheckCircle,
        bgColor: "from-blue-600 to-blue-700"
      }
    }
  ],

  successMetrics: [
    { label: "Reduction in Process Incidents", value: "90%", icon: TrendingDown, color: "text-cyan-400" },
    { label: "Maintenance Cost Savings", value: "50%", icon: TrendingUp, color: "text-blue-400" },
    { label: "Compliance Achievement", value: "100%", icon: Shield, color: "text-green-400" },
    { label: "Operational Efficiency Gain", value: "85%", icon: Gauge, color: "text-purple-400" },
    { label: "ROI within First Year", value: "400%", icon: BarChart3, color: "text-orange-400" },
    { label: "Asset Visibility Improvement", value: "85%", icon: Eye, color: "text-indigo-400" }
  ],

  personas: [
    {
      role: "Plant Manager",
      focus: "Operational Excellence",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      story: {
        challenge: "Managing complex chemical processes across multiple facilities while ensuring regulatory compliance",
        solution: "IntelliCommand provides real-time visibility and IntelliIntegrity ensures predictive maintenance",
        outcome: "85% improvement in operational efficiency with 60% reduction in compliance violations"
      },
      metrics: {
        "Efficiency Gain": "85%",
        "Compliance Rate": "98%",
        "Downtime Reduction": "40%"
      },
      testimonial: {
        quote: "IntelliSpec transformed our plant operations. We now have complete visibility and predictive capabilities.",
        author: "Sarah Chen",
        title: "Plant Manager",
        company: "ChemCorp Industries"
      },
      features: [
        "Real-time process monitoring",
        "Predictive maintenance scheduling",
        "Automated compliance reporting",
        "Multi-facility coordination"
      ]
    },
    {
      role: "Safety Engineer",
      focus: "Safety Excellence",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
      story: {
        challenge: "Manual safety inspections and delayed response to safety incidents",
        solution: "IntelliInspect digitizes workflows while IntelliComply automates compliance tracking",
        outcome: "90% faster incident response with 95% reduction in safety violations"
      },
      metrics: {
        "Response Time": "90% faster",
        "Safety Violations": "95% reduction",
        "Inspection Efficiency": "80%"
      },
      testimonial: {
        quote: "The digital inspection workflows have revolutionized our safety protocols.",
        author: "Mike Rodriguez",
        title: "Safety Engineer",
        company: "SafeChem Solutions"
      },
      features: [
        "Digital inspection workflows",
        "Real-time safety monitoring",
        "Automated compliance documentation",
        "Incident response automation"
      ]
    },
    {
      role: "Process Engineer",
      focus: "Process Optimization",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      story: {
        challenge: "Limited visibility into process performance and manual data analysis",
        solution: "IntelliVision provides advanced analytics while IntelliIntegrity offers real-time monitoring",
        outcome: "75% improvement in process optimization with 50% reduction in analysis time"
      },
      metrics: {
        "Process Optimization": "75%",
        "Analysis Time": "50% reduction",
        "Data Accuracy": "99%"
      },
      testimonial: {
        quote: "The advanced analytics capabilities have given us insights we never had before.",
        author: "Dr. Emily Watson",
        title: "Process Engineer",
        company: "ProcessTech Labs"
      },
      features: [
        "Advanced process analytics",
        "Real-time performance monitoring",
        "Data-driven optimization insights",
        "Automated reporting"
      ]
    },
    {
      role: "Maintenance Supervisor",
      focus: "Predictive Maintenance",
      icon: Wrench,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      story: {
        challenge: "Reactive maintenance causing unplanned downtime and poor asset tracking",
        solution: "IntelliTrack provides real-time asset tracking while IntelliIntegrity enables predictive maintenance",
        outcome: "70% reduction in unplanned downtime with 85% improvement in asset utilization"
      },
      metrics: {
        "Unplanned Downtime": "70% reduction",
        "Asset Utilization": "85%",
        "Maintenance Cost": "45% reduction"
      },
      testimonial: {
        quote: "Predictive maintenance has completely changed how we approach asset management.",
        author: "Tom Anderson",
        title: "Maintenance Supervisor",
        company: "MaintainPro Services"
      },
      features: [
        "Predictive maintenance scheduling",
        "Real-time asset tracking",
        "Reduced unplanned downtime",
        "Inventory optimization"
      ]
    }
  ],

  timeline: [
    {
      phase: 1,
      title: "The Legacy Era",
      subtitle: "Manual & Reactive",
      period: "1994-2004",
      description: "Traditional chemical processes with paper-based safety management",
      features: [
        {
          icon: FileText,
          title: "Manual Safety Records",
          description: "Handwritten safety logs, manual compliance tracking, and paper-based procedures",
          type: "error" as const
        },
        {
          icon: AlertTriangle,
          title: "Reactive Incident Response",
          description: "Safety incidents discovered after they occur, leading to costly consequences",
          type: "error" as const
        },
        {
          icon: AlertTriangle,
          title: "Compliance Management Chaos",
          description: "Manual tracking of EPA and OSHA standards with no real-time monitoring",
          type: "error" as const
        }
      ],
      image: {
        icon: FileText,
        title: "Paper-based workflows",
        subtitle: "Manual processes",
        gradient: "from-red-900/50 to-red-800/50"
      }
    },
          {
        phase: 2,
        title: "Digitalization",
        subtitle: "Basic Digital Tools",
        period: "2004-2014",
        description: "Introduction of basic digital chemical management systems",
      features: [
        {
          icon: CheckCircle,
          title: "Digital Safety Systems",
          description: "Basic safety management, digital procedures, and electronic compliance tracking",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Scheduled Safety Inspections",
          description: "Time-based safety inspection schedules reducing some incidents",
          type: "success" as const
        },
        {
          icon: AlertTriangle,
          title: "Limited Intelligence",
          description: "Still reactive, with basic data collection but no predictive capabilities",
          type: "warning" as const
        }
      ],
      image: {
        icon: Database,
        title: "Digital systems",
        subtitle: "Basic connectivity",
        gradient: "from-blue-900/50 to-blue-800/50"
      }
    },
          {
        phase: 3,
        title: "Connectivity",
        subtitle: "Real-Time Monitoring",
        period: "2014-2024",
        description: "IoT and real-time data collection in chemical operations",
      features: [
        {
          icon: CheckCircle,
          title: "Process Sensors",
          description: "Real-time data collection from chemical sensors, safety monitors, and process meters",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Safety Dashboards",
          description: "Real-time visibility into chemical operations with basic alerting systems",
          type: "success" as const
        },
        {
          icon: AlertTriangle,
          title: "Process Data Overload",
          description: "Too much process data without intelligence to make it actionable",
          type: "warning" as const
        }
      ],
      image: {
        icon: Wifi,
        title: "IoT connectivity",
        subtitle: "Real-time data",
        gradient: "from-purple-900/50 to-purple-800/50"
      }
    },
          {
        phase: 4,
        title: "Intelligence",
        subtitle: "AI-Powered Predictive Intelligence",
        period: "2024-2034",
        description: "IntelliSpec delivers predictive chemical process intelligence",
      features: [
        {
          icon: CheckCircle,
          title: "Predictive Process Analytics",
          description: "AI algorithms predict process failures and safety issues before they occur",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Proactive Safety Management",
          description: "Intelligent safety monitoring and automated compliance tracking",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Process Intelligence",
          description: "Data transformed into insights that drive chemical manufacturing excellence",
          type: "success" as const
        }
      ],
      image: {
        icon: Building2,
        title: "AI-Powered Intelligence",
        subtitle: "Predictive Analytics",
        gradient: "from-cyan-900/50 to-cyan-800/50"
      }
    }
  ],

  ctaTitle: "Ready to Transform Your Chemical Operations?",
  ctaDescription: "Join industry leaders who have revolutionized their chemical manufacturing operations with IntelliSpec. Start your free trial today and see the difference predictive intelligence makes.",
  ctaButtonText: "Start Free Trial",
  ctaButtonLink: "/contact"
}

// Example data for Oil & Gas Industry
const oilGasIndustryData = {
  industryName: "Oil & Gas",
  industryColor: "text-orange-400",
  industryGradient: "from-orange-600 to-red-700",
  
  roiJourney: [
    {
      months: "1-3",
      title: "Foundation Phase",
      subtitle: "Implementation & Training",
      phase: "Foundation",
      description: "Implementation Phase",
      items: [
        { icon: CheckCircle, text: "System deployment", type: "success" as const },
        { icon: CheckCircle, text: "Team training", type: "success" as const },
        { icon: CheckCircle, text: "Process optimization", type: "success" as const }
      ]
    }
  ],

  solutionsMatrix: [
    {
      challenge: {
        title: "Asset Integrity Failures",
        description: "Critical equipment breakdowns causing catastrophic production losses and safety incidents",
        icon: AlertTriangle,
        color: "from-red-600 to-red-700",
        impact: "$5M+ average cost per failure"
      },
      solution: {
        title: "Asset Integrity Management",
        description: "Predictive monitoring and maintenance for critical equipment and infrastructure",
        icon: Activity,
        color: "from-orange-600 to-orange-700",
        modules: ["IntelliIntegrity", "IntelliInspect", "IntelliVision"]
      },
      expertise: {
        title: "PK Industry Excellence",
        description: "Leveraging PK Industry's deep expertise in corrosion management and failure prediction",
        icon: Activity,
        color: "from-orange-600 to-orange-700",
        years: "Industry Leaders"
      },
      outcome: {
        metric: "75%",
        label: "Reduction in unplanned downtime",
        color: "text-orange-400",
        icon: TrendingDown,
        bgColor: "from-orange-600 to-orange-700"
      }
    }
  ],

  successMetrics: [
    { label: "Reduction in Unplanned Downtime", value: "75%", icon: TrendingDown, color: "text-green-400" },
    { label: "Maintenance Cost Savings", value: "40%", icon: TrendingUp, color: "text-blue-400" },
    { label: "Safety Incident Reduction", value: "60%", icon: Shield, color: "text-yellow-400" },
    { label: "Operational Efficiency Gain", value: "85%", icon: Gauge, color: "text-purple-400" },
    { label: "ROI within First Year", value: "300%", icon: BarChart3, color: "text-orange-400" },
    { label: "Data Processing Speed", value: "10x Faster", icon: Zap, color: "text-red-400" }
  ],

  personas: [
    {
      role: "Operations Manager",
      focus: "Operational Excellence",
      icon: Building2,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      story: {
        challenge: "Managing complex well operations across multiple sites while ensuring safety compliance",
        solution: "IntelliCommand provides real-time visibility and IntelliIntegrity ensures predictive maintenance",
        outcome: "80% improvement in operational efficiency with 70% reduction in safety incidents"
      },
      metrics: {
        "Efficiency Gain": "80%",
        "Safety Incidents": "70% reduction",
        "Production Uptime": "95%"
      },
      testimonial: {
        quote: "IntelliSpec has revolutionized our well operations. We now have complete visibility and predictive capabilities.",
        author: "John Smith",
        title: "Operations Manager",
        company: "OilTech Solutions"
      },
      features: [
        "Real-time operational visibility",
        "Predictive maintenance scheduling",
        "Automated safety compliance",
        "Multi-site coordination"
      ]
    },
    {
      role: "Well Engineer",
      focus: "Well Performance",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      story: {
        challenge: "Limited visibility into well performance data and difficulty predicting well failures",
        solution: "IntelliVision provides advanced analytics while IntelliIntegrity offers predictive monitoring",
        outcome: "85% improvement in well performance prediction with 60% reduction in analysis time"
      },
      metrics: {
        "Performance Prediction": "85%",
        "Analysis Time": "60% reduction",
        "Failure Detection": "90%"
      },
      testimonial: {
        quote: "The advanced well analytics have given us insights we never had before.",
        author: "Dr. Lisa Johnson",
        title: "Well Engineer",
        company: "WellTech Engineering"
      },
      features: [
        "Advanced well analytics",
        "Real-time performance monitoring",
        "Predictive failure detection",
        "Automated reporting"
      ]
    }
  ],

  timeline: [
    {
      phase: 1,
      title: "The Legacy Era",
      subtitle: "Manual & Reactive",
      period: "1994-2004",
      description: "Traditional oil & gas operations with paper-based asset management",
      features: [
        {
          icon: FileText,
          title: "Manual Asset Records",
          description: "Handwritten inspection logs, manual maintenance tracking, and paper-based procedures",
          type: "error" as const
        },
        {
          icon: AlertTriangle,
          title: "Reactive Equipment Failures",
          description: "Equipment failures discovered after they occur, leading to costly downtime",
          type: "error" as const
        },
        {
          icon: AlertTriangle,
          title: "Safety Compliance Chaos",
          description: "Manual tracking of safety standards with no real-time monitoring",
          type: "error" as const
        }
      ],
      image: {
        icon: FileText,
        title: "Paper-based workflows",
        subtitle: "Manual processes",
        gradient: "from-red-900/50 to-red-800/50"
      }
    },
          {
        phase: 2,
        title: "Digitalization",
        subtitle: "Basic Digital Tools",
        period: "2004-2014",
        description: "Introduction of basic digital oil & gas management systems",
      features: [
        {
          icon: CheckCircle,
          title: "Digital Asset Systems",
          description: "Basic asset management, digital procedures, and electronic compliance tracking",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Scheduled Maintenance",
          description: "Time-based maintenance schedules reducing some equipment failures",
          type: "success" as const
        },
        {
          icon: AlertTriangle,
          title: "Limited Intelligence",
          description: "Still reactive, with basic data collection but no predictive capabilities",
          type: "warning" as const
        }
      ],
      image: {
        icon: Database,
        title: "Digital systems",
        subtitle: "Basic connectivity",
        gradient: "from-blue-900/50 to-blue-800/50"
      }
    },
          {
        phase: 3,
        title: "Connectivity",
        subtitle: "Real-Time Monitoring",
        period: "2014-2024",
        description: "IoT and real-time data collection in oil & gas operations",
      features: [
        {
          icon: CheckCircle,
          title: "Equipment Sensors",
          description: "Real-time data collection from equipment sensors, safety monitors, and process meters",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Operational Dashboards",
          description: "Real-time visibility into oil & gas operations with basic alerting systems",
          type: "success" as const
        },
        {
          icon: AlertTriangle,
          title: "Operational Data Overload",
          description: "Too much operational data without intelligence to make it actionable",
          type: "warning" as const
        }
      ],
      image: {
        icon: Wifi,
        title: "IoT connectivity",
        subtitle: "Real-time data",
        gradient: "from-purple-900/50 to-purple-800/50"
      }
    },
          {
        phase: 4,
        title: "Intelligence",
        subtitle: "AI-Powered Predictive Intelligence",
        period: "2024-2034",
        description: "IntelliSpec delivers predictive oil & gas operations intelligence",
      features: [
        {
          icon: CheckCircle,
          title: "Predictive Asset Analytics",
          description: "AI algorithms predict equipment failures and safety issues before they occur",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Proactive Asset Management",
          description: "Intelligent asset monitoring and automated maintenance scheduling",
          type: "success" as const
        },
        {
          icon: CheckCircle,
          title: "Operational Intelligence",
          description: "Data transformed into insights that drive oil & gas operational excellence",
          type: "success" as const
        }
      ],
      image: {
        icon: Building2,
        title: "AI-Powered Intelligence",
        subtitle: "Predictive Analytics",
        gradient: "from-orange-900/50 to-orange-800/50"
      }
    }
  ],

  ctaTitle: "Ready to Transform Your Operations?",
  ctaDescription: "Join industry leaders who have revolutionized their oil & gas operations with IntelliSpec. Start your free trial today and see the difference predictive intelligence makes.",
  ctaButtonText: "Start Free Trial",
  ctaButtonLink: "/contact"
}

// Example usage component
export default function IndustryTemplateExample() {
  // You can switch between industries by changing this variable
  const currentIndustry = "chemical" // or "oilGas"
  
  const data = currentIndustry === "chemical" ? chemicalIndustryData : oilGasIndustryData

  return (
    <IndustryTemplate
      industryName={data.industryName}
      industryColor={data.industryColor}
      industryGradient={data.industryGradient}
      roiJourney={data.roiJourney}
      solutionsMatrix={data.solutionsMatrix}
      successMetrics={data.successMetrics}
      personas={data.personas}
      timeline={data.timeline}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      ctaButtonLink={data.ctaButtonLink}
    />
  )
}

// Usage instructions:
/*
To use the IndustryTemplate in your industry pages:

1. Import the template:
   import IndustryTemplate from '@/components/sections/IndustryTemplate'

2. Define your industry data:
   const industryData = {
     industryName: "Your Industry",
     industryColor: "text-your-color-400",
     industryGradient: "from-your-color-600 to-your-color-700",
     roiJourney: [...],
     solutionsMatrix: [...],
     successMetrics: [...],
     personas: [...],
     ctaTitle: "Your CTA Title",
     ctaDescription: "Your CTA description",
     ctaButtonText: "Your Button Text",
     ctaButtonLink: "/your-link"
   }

3. Use the template:
   <IndustryTemplate {...industryData} />

This will render a complete industry page with:
- ROI Investment Journey
- Challenge-Solution Matrix  
- Success Metrics
- Solutions by Role
- CTA Section

All sections will be consistently styled and animated.
*/ 