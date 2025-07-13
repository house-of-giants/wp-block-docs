import React from "react";
import { LucideIcon } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import {
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";

interface BlockPageLayoutProps {
  blockName: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  category: string;
  tags: string[];
  canonicalPath: string;
  children: React.ReactNode;
  keywords?: string[];
  lastModified?: string;
}

export function BlockPageLayout({
  blockName,
  description,
  icon,
  iconColor = "text-neon-blue",
  iconBgColor = "bg-neon-blue/20",
  category,
  tags,
  canonicalPath,
  children,
  keywords = [],
  lastModified,
}: BlockPageLayoutProps) {
  const title = `WordPress ${blockName} - Complete HTML Markup Guide & Examples`;
  const seoDescription = `Master WordPress ${blockName} markup with comprehensive examples, attributes, and best practices. ${description}`;

  const fullKeywords = [
    `WordPress ${blockName}`,
    `${blockName} markup`,
    `WordPress ${blockName} examples`,
    `${blockName} best practices`,
    ...keywords,
  ];

  const blockSchema = generateDocumentationSchema(
    title,
    seoDescription,
    `https://wpblockdocs.com${canonicalPath}`,
    "WordPress Block Documentation",
    fullKeywords,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: blockName, url: `https://wpblockdocs.com${canonicalPath}` },
  ]);

  const badges = [
    {
      text: "Core Block",
      variant: "secondary" as const,
      className: `${iconBgColor} ${iconColor} border-${iconColor.replace("text-", "").replace("-", "/")}/30`,
    },
    ...tags.map((tag) => ({ text: tag, variant: "outline" as const })),
  ];

  return (
    <PageLayout
      seo={{
        title,
        description: seoDescription,
        keywords: fullKeywords.join(", "),
        canonical: canonicalPath,
        ogType: "article",
        schema: [blockSchema, breadcrumbSchema],
        lastModified,
      }}
    >
      <PageHeader
        icon={icon}
        iconColor={iconColor}
        iconBgColor={iconBgColor}
        title={blockName}
        description={description}
        badges={badges}
      />
      {children}
    </PageLayout>
  );
}
