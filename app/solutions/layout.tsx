import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IntelliSpec Solutions - Complete Industrial Solutions Platform | 9+ Solutions',
  description: 'Discover IntelliSpec\'s complete industrial solutions platform with 9+ comprehensive solutions. From inspections to safety management, address every critical challenge in industrial operations.',
  keywords: 'industrial solutions, inspection management, turnaround planning, safety permit management, equipment tracking, work order closure, corrosion monitoring, workforce management, documentation reporting, CAD facility mapping, industrial software',
  openGraph: {
    title: 'IntelliSpec Solutions - Complete Industrial Solutions Platform',
    description: 'Nine comprehensive solutions designed to address every critical challenge in industrial operations. From inspections to safety management.',
    type: 'website',
    url: 'https://intellispec.com/solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelliSpec Solutions - Complete Industrial Solutions Platform',
    description: 'Nine comprehensive solutions designed to address every critical challenge in industrial operations. From inspections to safety management.',
  },
  alternates: {
    canonical: 'https://intellispec.com/solutions',
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 