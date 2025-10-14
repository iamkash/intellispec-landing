import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IntelliSpec Demo - Schedule Your Personalized Platform Demo | Live Walkthrough',
  description: 'Schedule a personalized IntelliSpec demo and see our industrial platform in action. Live walkthrough, industry-specific examples, ROI analysis, and Q&A session included.',
  keywords: 'IntelliSpec demo, industrial software demo, platform walkthrough, live demo, schedule demo, industrial solutions demo, ROI analysis',
  openGraph: {
    title: 'IntelliSpec Demo - Schedule Your Personalized Platform Demo',
    description: 'See IntelliSpec in action with a personalized demo. Live platform walkthrough, industry-specific examples, and ROI analysis.',
    type: 'website',
    url: 'https://intellispec.com/demo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelliSpec Demo - Schedule Your Personalized Platform Demo',
    description: 'See IntelliSpec in action with a personalized demo. Live platform walkthrough, industry-specific examples, and ROI analysis.',
  },
  alternates: {
    canonical: 'https://intellispec.com/demo',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 