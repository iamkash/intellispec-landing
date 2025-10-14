import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Paint & Coatings – Industry Solutions | Integrity, QA/QC, Turnarounds',
    description:
      'Asset integrity, QA/QC automation, predictive maintenance, and turnaround optimization for paint manufacturing.',
    canonicalPath: '/industries/paint',
    ogImageUrl: '/images/industries/paint.jpg',
  })
}

export default function PaintLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


