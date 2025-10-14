import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliInspect – Intelligent Inspection Management | Digital Workflows, AI Documentation, Compliance',
    description:
      'Revolutionary mobile-first inspection platform with AI-powered documentation, real-time compliance monitoring, P&ID digitization, and visual intelligence.',
    canonicalPath: '/modules/inspect',
  })
}

export default function InspectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


