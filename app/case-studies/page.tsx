import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/sanity';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies - intelliSPEC',
  description: 'Explore real-world success stories and case studies from industries using intelliSPEC solutions.',
};

// Disable caching for this page to ensure fresh data
export const revalidate = 0;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  
  return <CaseStudiesClient caseStudies={caseStudies} />;
} 