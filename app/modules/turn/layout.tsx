import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliTurn – Turnaround Management | Digital Execution, Crew, Flange',
    description:
      'Turnaround management with digital execution, crew management, critical path and flange tracking, and analytics.',
    canonicalPath: '/modules/turn',
    ogImageUrl: '/images/modules/turn.jpg',
  })
}

export default function TurnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


