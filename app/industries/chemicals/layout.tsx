import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Chemicals – Industry Solutions | Integrity, Compliance, QA/QC, Turnarounds',
    description:
      'Asset integrity, QA/QC workflows, predictive maintenance, and regulatory compliance for chemical operations.',
    canonicalPath: '/industries/chemicals',
    ogImageUrl: '/images/industries/chem.jpg',
  })
}

export default function ChemicalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


