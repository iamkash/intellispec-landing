import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact IntelliSpec - Get Your Custom Industrial Platform Demo | Houston, TX',
  description: 'Contact IntelliSpec for a personalized demo of our industrial platform. Get expert guidance on transforming your operations. Call +1 (555) 123-4567 or email info@intellispec.com',
  keywords: 'contact IntelliSpec, industrial platform demo, Houston TX, industrial software contact, IntelliSpec support, schedule demo',
  openGraph: {
    title: 'Contact IntelliSpec - Get Your Custom Industrial Platform Demo',
    description: 'Contact IntelliSpec for a personalized demo of our industrial platform. Get expert guidance on transforming your operations.',
    type: 'website',
    url: 'https://intellispec.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact IntelliSpec - Get Your Custom Industrial Platform Demo',
    description: 'Contact IntelliSpec for a personalized demo of our industrial platform. Get expert guidance on transforming your operations.',
  },
  alternates: {
    canonical: 'https://intellispec.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 