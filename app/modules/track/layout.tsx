import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliTrack – Asset Tracking | Equipment, Inventory, RFID/QR, Analytics',
    description:
      'Real-time asset tracking with equipment checkouts, inventory logs, RFID/QR, and analytics to optimize utilization.',
    canonicalPath: '/modules/track',
    ogImageUrl: '/images/modules/track.jpg',
  })
}

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


