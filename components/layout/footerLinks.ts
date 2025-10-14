export interface FooterLink {
  name: string
  nameParts?: { prefix: string; suffix: string }
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

import { navigation, NavItem } from '@/components/layout/navigation'

const flatten = (items: NavItem[], parentIcon?: React.ComponentType<{ className?: string }>): FooterLink[] => {
  const out: FooterLink[] = []
  for (const item of items) {
    const resolvedIcon = item.icon || parentIcon
    if (item.href) {
      out.push({
        name: item.labelParts ? `${item.labelParts.prefix}${item.labelParts.suffix}` : item.label,
        nameParts: item.labelParts ? { ...item.labelParts } : undefined,
        href: item.href,
        icon: resolvedIcon,
      })
    }
    if (item.children?.length) out.push(...flatten(item.children, resolvedIcon))
  }
  return out
}

const pick = (label: string): FooterLink[] => {
  const root = navigation.find(n => n.label === label)
  if (!root) return []
  return flatten(root.children || [], root.icon)
}

export const footerLinks: {
  solutions: FooterLink[]
  industries: FooterLink[]
  resources: FooterLink[]
  company: FooterLink[]
} = {
  solutions: pick('Products'),
  industries: pick('Industries'),
  resources: pick('Resources'),
  company: pick('Company'),
}


