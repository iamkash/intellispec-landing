import { Metadata } from 'next';
import { getPressItems } from '@/lib/sanity';
import PressClient from './PressClient';

export const metadata: Metadata = {
  title: 'Press & Media - intelliSPEC',
  description: 'Stay updated with the latest news, press releases, and media coverage about PK Companies and our mission to revolutionize industrial safety through technology.',
  keywords: 'press releases, media coverage, news, awards, PK Companies, intelliSPEC, industrial safety',
  openGraph: {
    title: 'Press & Media - intelliSPEC',
    description: 'Latest news, press releases, and media coverage about PK Companies and industrial safety technology.',
    type: 'website',
  },
};

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export default async function PressPage() {
  const pressItems = await getPressItems();
  
  return <PressClient pressItems={pressItems} />;
} 