import {
  Search,
  Target,
  Factory,
  Wrench,
  FileText,
  Users,
  Building2,
  Briefcase,
  Calculator,
  Newspaper,
  Info,
  Phone,
  Headphones,
  Zap,
  Shield,
  TrendingUp,
  Crown,
  Globe,
  Rocket,
  Database,
  CheckCircle,
  Award,
  AlertTriangle,
  HardHat
} from 'lucide-react'

export interface NavItem {
  label: string
  labelParts?: { prefix: string; suffix: string }
  href?: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    label: 'Products',
    description: 'Complete platform modules',
    icon: Database,
    children: [
      {
        label: 'Core Modules',
        children: [
          { label: 'intelliINSPECT', labelParts: { prefix: 'intelli', suffix: 'INSPECT' }, href: '/modules/inspect', description: 'AI-powered digital inspection workflows', icon: Search },
          { label: 'intelliNDT', labelParts: { prefix: 'intelli', suffix: 'NDT' }, href: '/modules/ndt', description: 'Advanced non-destructive testing platform', icon: Zap },
          { label: 'intelliINTEGRITY', labelParts: { prefix: 'intelli', suffix: 'INTEGRITY' }, href: '/modules/integrity', description: 'Predictive asset integrity management', icon: Shield },
          { label: 'intelliTURN', labelParts: { prefix: 'intelli', suffix: 'TURN' }, href: '/modules/turn', description: 'Intelligent turnaround optimization', icon: Wrench }
        ]
      },
      {
        label: 'Operations',
        children: [
          { label: 'intelliWORK', labelParts: { prefix: 'intelli', suffix: 'WORK' }, href: '/modules/work', description: 'Smart workforce management system', icon: Users },
          { label: 'intelliTRACK', labelParts: { prefix: 'intelli', suffix: 'TRACK' }, href: '/modules/track', description: 'Real-time asset tracking & monitoring', icon: TrendingUp },
          { label: 'intelliCOMPLY', labelParts: { prefix: 'intelli', suffix: 'COMPLY' }, href: '/modules/comply', description: 'Automated safety compliance platform', icon: CheckCircle },
          { label: 'intelliSAFETY', labelParts: { prefix: 'intelli', suffix: 'SAFETY' }, href: '/modules/command', description: 'AI-powered safety command center', icon: Crown }
        ]
      },
      {
        label: 'Advanced',
        children: [
          { label: 'intelliSCAFF', labelParts: { prefix: 'intelli', suffix: 'SCAFF' }, href: '/modules/vault', description: 'Comprehensive scaffolding safety platform', icon: Database },
          { label: 'intelliVISION', labelParts: { prefix: 'intelli', suffix: 'VISION' }, href: '/modules/vision', description: 'AI-powered visual intelligence hub', icon: Rocket }
        ]
      }
    ]
  },
  {
    label: 'Industries',
    description: 'Sector expertise',
    icon: Factory,
    children: [
      {
        label: 'Energy & Resources',
        children: [
          { label: 'Oil & Gas', href: '/industries/oil-gas', description: 'Upstream & downstream operations', icon: Zap },
          { label: 'Mining', href: '/industries/mining', description: 'Mining & extraction operations', icon: Building2 },
          { label: 'Power Generation', href: '/industries/power', description: 'Energy production facilities', icon: TrendingUp },
          { label: 'Utilities & Power', href: '/industries/utilities', description: 'Utility infrastructure', icon: Globe },
          { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial manufacturing operations', icon: Wrench }
        ]
      },
      {
        label: 'Transportation & Aerospace',
        children: [
          { label: 'Aerospace', href: '/industries/aerospace', description: 'Aviation & space industry', icon: Rocket },
          { label: 'Automotive', href: '/industries/automotive', description: 'Vehicle manufacturing', icon: Target },
          { label: 'Logistics/Maritime', href: '/industries/maritime', description: 'Marine & shipping operations', icon: Globe }
        ]
      },
      {
        label: 'Specialized Industries',
        children: [
          { label: 'Pharmaceutical', href: '/industries/pharma', description: 'GMP compliance solutions', icon: Shield },
          { label: 'Chemical/Petrochemical', href: '/industries/chemicals', description: 'Process industry solutions', icon: Factory },
          { label: 'Paint Manufacturing', href: '/industries/paint', description: 'Quality control systems', icon: Search }
        ]
      }
    ]
  },
  {
    label: 'Resources',
    description: 'Learn & explore',
    icon: FileText,
    children: [
      {
        label: 'Tools',
        children: [
          { label: 'Case Studies', href: '/case-studies', description: 'Real-world implementations', icon: Building2 },
          { label: 'White Papers', href: '/white-papers', description: 'Industry insights & research', icon: FileText }
        ]
      },
      {
        label: 'Content',
        children: [
          { label: 'Blog', href: '/blog', description: 'Latest industry news & insights', icon: Newspaper },
          { label: 'Press', href: '/press', description: 'Media coverage & announcements', icon: Info }
        ]
      }
    ]
  },
  {
    label: 'Company',
    description: 'About IntelliSpec',
    icon: Users,
    children: [
      {
        label: 'About',
        children: [
          { label: 'About Us', href: '/about', description: 'Our mission & vision', icon: Info },
          { label: 'Leadership', href: '/leadership', description: 'Executive team & board', icon: Crown },
          { label: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: Users }
        ]
      },
      {
        label: 'Connect',
        children: [
          { label: 'Careers', href: '/careers', description: 'Join our team', icon: Briefcase },
          { label: 'Contact', href: '/contact', description: 'Get in touch', icon: Phone },
          { label: 'Support', href: '/support', description: 'Customer support', icon: Headphones }
        ]
      }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
    description: 'Plans & pricing',
    icon: TrendingUp
  },
]


