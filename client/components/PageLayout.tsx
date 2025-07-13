import React from "react";
import { SEO } from "@/components/SEO";

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType?: string;
  schema?: any[];
  lastModified?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  seo: SEOData;
  className?: string;
}

export function PageLayout({
  children,
  seo,
  className = "space-y-8",
}: PageLayoutProps) {
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogType={seo.ogType || "article"}
        schema={seo.schema}
        lastModified={seo.lastModified}
      />
      <div className={className}>{children}</div>
    </>
  );
}
