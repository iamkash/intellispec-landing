import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliIntegrity – Asset Integrity | Mechanical Integrity, Corrosion, Coatings, AI Prediction',
    description:
      'Comprehensive asset integrity platform with mechanical integrity & coating manager, CML data management, AI recoating prediction, and corrosion control.',
    canonicalPath: '/modules/integrity',
    ogImageUrl: '/images/modules/integrity.jpg',
  })
}

export default function IntegrityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
