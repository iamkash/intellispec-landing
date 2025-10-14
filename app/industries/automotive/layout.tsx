import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Automotive – Industry Solutions | Quality, Predictive Maintenance, Compliance',
    description:
      'AI-powered quality control, predictive maintenance, and compliance for automotive manufacturing operations.',
    canonicalPath: '/industries/automotive',
    ogImageUrl: '/images/industries/automotive.jpg',
  })
}

export default function AutomotiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


