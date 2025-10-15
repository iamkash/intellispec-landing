import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "intelliSPEC Modules - Complete Modular Industrial Platform | 10+ Modules",
  description:
    "Explore intelliSPEC's complete modular industrial platform with 10+ specialized modules. From IntelliInspect to IntelliVision, transform your operations with precision-built solutions.",
  keywords:
    "industrial modules, IntelliInspect, IntelliNDT, IntelliIntegrity, IntelliTurn, IntelliWork, IntelliTrack, IntelliComply, IntelliCommand, IntelliVault, IntelliVision, industrial software, modular platform",
  openGraph: {
    title: "intelliSPEC Modules - Complete Modular Industrial Platform",
    description:
      "Transform your industrial operations with our complete modular platform. 10+ specialized modules designed for specific workflows.",
    type: "website",
    url: "https://intellispec.com/modules",
  },
  twitter: {
    card: "summary_large_image",
    title: "intelliSPEC Modules - Complete Modular Industrial Platform",
    description:
      "Transform your industrial operations with our complete modular platform. 10+ specialized modules designed for specific workflows.",
  },
  alternates: {
    canonical: "https://intellispec.com/modules",
  },
};

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
