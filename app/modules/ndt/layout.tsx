import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliNDT – NDT Management | Multi-Method, AI Interpretation, QA',
    description:
      'Non-destructive testing platform with multi-method support, AI signal interpretation, and QA automation.',
    canonicalPath: '/modules/ndt',
    ogImageUrl: '/images/modules/ndt.jpg',
  })
}

export default function NdtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


