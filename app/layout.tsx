import React from "react";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "intelliSPEC - Unify Inspections, Safety, and Turnarounds in One Field-Ready Platform",
  description:
    "Digitally transform your plant's most critical workflows with the only modular system proven in the field. Built by industry veterans, backed by real field experience.",
  authors: [{ name: "intelliSPEC" }],
  creator: "intelliSPEC",
  publisher: "intelliSPEC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://intellispec.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "intelliSPEC - Unify Inspections, Safety, and Turnarounds in One Field-Ready Platform",
    description:
      "Digitally transform your plant's most critical workflows with the only modular system proven in the field.",
    url: "https://intellispec.com",
    siteName: "intelliSPEC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "intelliSPEC - Industrial Inspection and Safety Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "intelliSPEC - Unify Inspections, Safety, and Turnarounds in One Field-Ready Platform",
    description:
      "Digitally transform your plant's most critical workflows with the only modular system proven in the field.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/images/logos/Logo.png", type: "image/png" }],
    apple: [{ url: "/images/logos/Logo.png" }],
    shortcut: [{ url: "/images/logos/Logo.png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="theme-color" content="#00B2A9" />
        <meta name="msapplication-TileColor" content="#00B2A9" />
        <meta name="color-scheme" content="light" />
        {/* Prevent flash of dark theme - force light theme immediately */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html, body {
              color-scheme: light !important;
              background: #ffffff !important;
            }
            html.dark { display: none !important; }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                  localStorage.removeItem('theme');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "intelliSPEC",
              url: "https://intellispec.com",
              sameAs: [
                "https://www.linkedin.com/company/intellispec/",
                "https://twitter.com/intellispec",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "intelliSPEC",
              url: "https://intellispec.com",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
