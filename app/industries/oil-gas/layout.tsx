import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Oil & Gas – Intelligence | Asset Integrity, Predictive Maintenance, Safety',
    description:
      'AI-powered predictive analytics, real-time asset integrity monitoring, and intelligent safety management for oil & gas operations.',
    canonicalPath: '/industries/oil-gas',
    ogImageUrl: '/images/industries/oil.jpg',
  })
}

export default function OilGasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


