import { Metadata } from 'next';
import { getWhitePapers } from '@/lib/sanity';
import WhitePapersClient from './WhitePapersClient';

export const metadata: Metadata = {
  title: 'White Papers - IntelliSpec',
  description: 'Download comprehensive white papers and technical resources on industrial safety and compliance solutions.',
};

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export default async function WhitePapersPage() {
  const whitePapers = await getWhitePapers();
  
  return <WhitePapersClient whitePapers={whitePapers} />;
} 