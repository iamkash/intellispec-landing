import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Pharmaceutical – Industry Solutions | GMP Compliance, Quality, Manufacturing',
    description:
      'AI-powered quality control, GMP compliance automation, and manufacturing intelligence for pharmaceutical operations.',
    canonicalPath: '/industries/pharma',
    ogImageUrl: '/images/industries/pharma.jpg',
  })
}

export default function PharmaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


