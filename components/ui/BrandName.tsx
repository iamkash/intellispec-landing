"use client";

import React from "react";

interface BrandNameProps {
  className?: string;
}

/**
 * BrandName component displays the intelliSPEC brand name with correct styling:
 * - "intelli" in navy (theme primary color)
 * - "SPEC" in bold blue (theme secondary color)
 */
export default function BrandName({ className = "" }: BrandNameProps) {
  return (
    <span className={className}>
      <span className="text-primary">intelli</span>
      <span className="text-secondary font-bold">SPEC</span>
    </span>
  );
}

/**
 * Inline version for use in text strings
 */
export function BrandNameInline({ className = "" }: BrandNameProps) {
  return (
    <span className={`inline ${className}`}>
      <span className="text-primary">intelli</span>
      <span className="text-secondary font-bold">SPEC</span>
    </span>
  );
}
