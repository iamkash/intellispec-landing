import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'intelliSAFETY – Safety Command Center | Real-Time Dashboards, Predictive Alerts',
    description:
      'Industrial safety command center with real-time dashboards, AI-monitored feeds, and predictive alerting.',
    canonicalPath: '/modules/command',
    ogImageUrl: '/images/modules/command.jpg',
  })
}

export default function CommandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


