import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PK Companies - Industrial Excellence Since 1997 | Pioneering Mobile Inspection',
  description: 'Founded by the Turpin brothers in 1997, PK Companies delivers "Higher Level of Protection" through PK Safety, PK Technology, and PK Industrial. Leading mobile inspection with intelliSPEC™ platform.',
  keywords: 'PK Companies, Turpin brothers, industrial safety, mobile inspection, intelliSPEC, PK Technology, industrial excellence, 1997, higher level of protection',
  openGraph: {
    title: 'About PK Companies - Industrial Excellence Since 1997',
    description: 'Founded by the Turpin brothers in 1997, PK Companies delivers "Higher Level of Protection" through pioneering techniques and revolutionary innovation.',
    type: 'website',
    url: 'https://intellispec.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PK Companies - Industrial Excellence Since 1997',
    description: 'Founded by the Turpin brothers in 1997, PK Companies delivers "Higher Level of Protection" through pioneering techniques and revolutionary innovation.',
  },
  alternates: {
    canonical: 'https://intellispec.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 