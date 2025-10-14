import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Manufacturing – Industry Solutions | Predictive Maintenance, Quality, Compliance',
    description:
      'Predictive maintenance, real-time monitoring, and compliance for manufacturing operations.',
    canonicalPath: '/industries/manufacturing',
    ogImageUrl: '/images/industries/manufacturing.JPG',
  })
}

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


