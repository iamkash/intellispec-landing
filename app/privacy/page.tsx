import { createPageMetadata } from '@/lib/seo';

export const generateMetadata = () =>
  createPageMetadata({
    title: 'Privacy Policy | IntelliSpec',
    description: 'Read IntelliSpec’s Privacy Policy to understand how we collect, use, and protect your data.',
    canonicalPath: '/privacy',
  });

export default function PrivacyPage() {
  return (
    <main className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground max-w-3xl">
        We respect your privacy. This page explains what data we collect, how we use it, and your rights. If you have
        questions, please contact us via the form on the Contact page.
      </p>
    </main>
  );
}


