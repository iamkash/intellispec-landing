import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Power – Industry Intelligence | Grid Reliability, Predictive Maintenance, Compliance',
    description:
      'AI-powered predictive analytics, grid reliability monitoring, and intelligent asset management for power operations.',
    canonicalPath: '/industries/power',
    ogImageUrl: '/images/industries/power.jpg',
  })
}

export default function PowerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


