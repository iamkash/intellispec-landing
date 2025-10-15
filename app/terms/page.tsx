import { createPageMetadata } from "@/lib/seo";

export const generateMetadata = () =>
  createPageMetadata({
    title: "Terms of Service | intelliSPEC",
    description:
      "Review intelliSPEC's Terms of Service governing your use of our products and website.",
    canonicalPath: "/terms",
  });

export default function TermsPage() {
  return (
    <main className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground max-w-3xl">
        These terms govern your use of intelliSPEC&apos;s services. By accessing
        or using our website and products, you agree to these terms. For
        questions, please reach out via the Contact page.
      </p>
    </main>
  );
}
