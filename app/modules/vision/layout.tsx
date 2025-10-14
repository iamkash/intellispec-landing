import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliVision – Visual Intelligence | CAD, Dashboards, BI',
    description:
      'Advanced business intelligence with 2D/3D CAD, interactive dashboards, and predictive analytics.',
    canonicalPath: '/modules/vision',
    ogImageUrl: '/images/modules/vision.jpg',
  })
}

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


