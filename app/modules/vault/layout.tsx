import React from 'react'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const generateMetadata = async (): Promise<Metadata> => {
  return createPageMetadata({
    title: 'IntelliSCAFF – Scaffolding Management | Safety, Compliance, Docs',
    description:
      'Scaffolding management with AI safety monitoring, compliance tracking, and secure document storage.',
    canonicalPath: '/modules/vault',
    ogImageUrl: '/images/modules/vault.jpg',
  })
}

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


