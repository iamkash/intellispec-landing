import React from "react";
import type { Metadata } from "next";
import PartnersPage from "../../components/sections/PartnersPage";

export const metadata: Metadata = {
  title:
    "Partners - intelliSPEC | Strategic Partnerships for Industrial Innovation",
  description:
    "Partner with intelliSPEC through System Integrator alliances, Value-Added Reseller programs, and Technology Vendor bundling to deliver comprehensive industrial solutions.",
  keywords:
    "industrial partnerships, system integrators, value-added resellers, technology vendors, industrial solutions, digital transformation",
  openGraph: {
    title:
      "Partners - intelliSPEC | Strategic Partnerships for Industrial Innovation",
    description:
      "Partner with intelliSPEC through System Integrator alliances, Value-Added Reseller programs, and Technology Vendor bundling to deliver comprehensive industrial solutions.",
    url: "https://intellispec.com/partners",
  },
  twitter: {
    title:
      "Partners - intelliSPEC | Strategic Partnerships for Industrial Innovation",
    description:
      "Partner with intelliSPEC through System Integrator alliances, Value-Added Reseller programs, and Technology Vendor bundling to deliver comprehensive industrial solutions.",
  },
};

export default function Partners() {
  return <PartnersPage />;
}
