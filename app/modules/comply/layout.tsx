import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliComply – HSQE Compliance | JSA, PTW, LOTO, CAPA',
    description:
      'HSQE compliance management with JSA, permit-to-work, LOTO tracking, incident reporting, and CAPA.',
    canonicalPath: '/modules/comply',
    ogImageUrl: '/images/modules/comply.jpg',
  })
}

export default function ComplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


