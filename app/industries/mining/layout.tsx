import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'Mining – Industry Solutions | Safety Monitoring, Equipment, Resource Management',
    description:
      'AI-powered safety monitoring, predictive maintenance, and resource optimization for mining operations.',
    canonicalPath: '/industries/mining',
    ogImageUrl: '/images/industries/mining.jpg',
  })
}

export default function MiningLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


