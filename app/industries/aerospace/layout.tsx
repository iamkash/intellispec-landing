import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Aerospace – Industry Solutions | Predictive Maintenance, Compliance, Visual Inspection',
    description:
      'AI-powered predictive maintenance, real-time monitoring, and visual inspection for aerospace operations with strict compliance.',
    canonicalPath: '/industries/aerospace',
    ogImageUrl: '/images/industries/aerospace.jpg',
  })
}

export default function AerospaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


