import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
  lastModified?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "/og-image.png",
  schema,
  noindex = false,
  lastModified,
}: SEOProps) {
  const fullTitle = title.includes("WP Block Docs")
    ? title
    : `${title} | WP Block Docs`;
  const siteUrl = "https://wpblockdocs.com"; // Replace with your actual domain
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  // Default schema for the site
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WP Block Docs",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "The ultimate resource for WordPress Gutenberg block markup, syntax, and documentation for developers.",
    sameAs: [
      "https://github.com/wpblockdocs",
      "https://twitter.com/wpblockdocs",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WP Block Docs",
    url: siteUrl,
    description:
      "Comprehensive WordPress Gutenberg block documentation with examples, syntax highlighting, and developer tools.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/properties?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const combinedSchema = schema
    ? [organizationSchema, websiteSchema, schema]
    : [organizationSchema, websiteSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta
        property="og:image:alt"
        content={`${title} - WordPress Block Documentation`}
      />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content="WP Block Docs" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@wpblockdocs" />
      <meta name="twitter:creator" content="@wpblockdocs" />

      {/* Article specific */}
      {ogType === "article" && lastModified && (
        <meta property="article:modified_time" content={lastModified} />
      )}

      {/* Technical Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ff66cc" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Schema.org JSON-LD */}
      {[organizationSchema, websiteSchema, ...(schema ? [schema] : [])].map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}

// Helper function to generate breadcrumb schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper function to generate documentation schema
export function generateDocumentationSchema(
  title: string,
  description: string,
  url: string,
  category: string,
  keywords: string[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: url,
    author: {
      "@type": "Organization",
      name: "WP Block Docs",
    },
    publisher: {
      "@type": "Organization",
      name: "WP Block Docs",
      logo: {
        "@type": "ImageObject",
        url: "https://wpblockdocs.com/logo.png",
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: "WordPress",
      applicationCategory: "Content Management System",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Developers",
    },
    educationalLevel: "Intermediate",
    genre: category,
    keywords: keywords,
    isAccessibleForFree: true,
    learningResourceType: "Documentation",
  };
}

// Helper function to generate FAQ schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
