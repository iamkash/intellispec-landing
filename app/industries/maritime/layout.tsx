import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Maritime – Industry Solutions | Fleet, Predictive Maintenance, Compliance',
    description:
      'Fleet management, predictive maintenance, and safety compliance for maritime operations.',
    canonicalPath: '/industries/maritime',
    ogImageUrl: '/images/industries/maritime.jpg',
  })
}

export default function MaritimeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


