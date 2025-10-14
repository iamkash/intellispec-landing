import { createPageMetadata } from '@/lib/seo';

export const generateMetadata = () =>
  createPageMetadata({
    title: 'Cookie Policy | IntelliSpec',
    description: 'Learn how IntelliSpec uses cookies and similar technologies to improve your experience.',
    canonicalPath: '/cookies',
  });

export default function CookiesPage() {
  return (
    <main className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-muted-foreground max-w-3xl">
        We use cookies to provide essential functionality, analyze usage, and improve performance. You can manage your
        cookie preferences in your browser settings.
      </p>
    </main>
  );
}


