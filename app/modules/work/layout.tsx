import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliWork – Workforce Manager | Scheduling, Skills, Performance',
    description:
      'Rescue and technician workforce manager with real-time availability, certification tracking, and AI deployment.',
    canonicalPath: '/modules/work',
    ogImageUrl: '/images/modules/work.jpg',
  })
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


