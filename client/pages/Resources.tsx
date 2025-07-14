import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ExternalLink,
  BookOpen,
  Code,
  Palette,
  Users,
  Wrench,
  GraduationCap,
  Star,
  Github,
  FileText,
  Video,
  Layers,
  Database,
  Zap,
  Heart,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";
import { generateDocumentationSchema, SEO } from "@/components/SEO";

interface ResourceLink {
  title: string;
  url: string;
  description: string;
  type: "official" | "community" | "tool" | "tutorial" | "example";
  featured?: boolean;
}

interface ResourceCategory {
  title: string;
  description: string;
  icon: typeof BookOpen;
  iconColor: string;
  resources: ResourceLink[];
}

export default function Resources() {
  const resourcesSchema = generateDocumentationSchema(
    "WordPress Block Development Resources - Essential Links & Documentation",
    "Comprehensive collection of WordPress block development resources, official documentation, community tools, tutorials, and essential links for developers working with Gutenberg blocks and FSE themes.",
    "https://wpblockdocs.com/resources",
    "WordPress Resources",
    [
      "WordPress block development",
      "Gutenberg resources",
      "Block theme development",
      "WordPress FSE",
      "Block editor documentation",
      "WordPress developer resources",
    ],
  );

  const categories: ResourceCategory[] = [
    {
      title: "Official WordPress Documentation",
      description: "Primary documentation from WordPress.org",
      icon: BookOpen,
      iconColor: "text-blue-500",
      resources: [
        {
          title: "Block Editor Handbook",
          url: "https://developer.wordpress.org/block-editor/",
          description:
            "Official comprehensive guide to WordPress block development",
          type: "official",
          featured: true,
        },
        {
          title: "Theme Developer Handbook",
          url: "https://developer.wordpress.org/themes/",
          description: "Complete guide to WordPress theme development",
          type: "official",
          featured: true,
        },
        {
          title: "Block Theme Development",
          url: "https://developer.wordpress.org/themes/block-themes/",
          description: "Official documentation for creating block themes",
          type: "official",
        },
        {
          title: "Block API Reference",
          url: "https://developer.wordpress.org/block-editor/reference-guides/block-api/",
          description: "Complete API reference for block development",
          type: "official",
        },
        {
          title: "theme.json Documentation",
          url: "https://developer.wordpress.org/themes/advanced-topics/theme-json/",
          description: "Complete guide to theme.json configuration",
          type: "official",
        },
        {
          title: "Block Support APIs",
          url: "https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/",
          description: "Documentation for block support features",
          type: "official",
        },
      ],
    },
    {
      title: "Block Theme & FSE Resources",
      description:
        "Specialized resources for Full Site Editing and block themes",
      icon: Layers,
      iconColor: "text-purple-500",
      resources: [
        {
          title: "Full Site Editing",
          url: "https://fullsiteediting.com/",
          description:
            "The ultimate resource for WordPress FSE development and tutorials",
          type: "community",
          featured: true,
        },
        {
          title: "Block Theme Directory",
          url: "https://wordpress.org/themes/browse/block-themes/",
          description: "Official directory of WordPress block themes",
          type: "official",
        },
        {
          title: "WordPress Block Themes",
          url: "https://github.com/WordPress/block-themes",
          description: "Official collection of example block themes",
          type: "official",
        },
        {
          title: "FSE Outreach",
          url: "https://make.wordpress.org/test/handbook/full-site-editing-outreach-experiment/",
          description: "WordPress testing and feedback for FSE features",
          type: "community",
        },
        {
          title: "Block Theme Templates",
          url: "https://developer.wordpress.org/themes/block-themes/theme-templates/",
          description: "Guide to creating and using block theme templates",
          type: "official",
        },
        {
          title: "Global Styles & Style Variations",
          url: "https://developer.wordpress.org/themes/global-settings-and-styles/",
          description: "Documentation for global styles and style variations",
          type: "official",
        },
      ],
    },
    {
      title: "Developer Tools & Utilities",
      description: "Essential tools for block development workflow",
      icon: Wrench,
      iconColor: "text-green-500",
      resources: [
        {
          title: "@wordpress/create-block",
          url: "https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/",
          description: "Official scaffolding tool for creating custom blocks",
          type: "tool",
          featured: true,
        },
        {
          title: "Query Monitor",
          url: "https://querymonitor.com/",
          description: "Essential debugging plugin for WordPress development",
          type: "tool",
        },
        {
          title: "Theme Check",
          url: "https://wordpress.org/plugins/theme-check/",
          description:
            "Plugin to test themes for WordPress standards compliance",
          type: "tool",
        },
        {
          title: "Block Development Examples",
          url: "https://github.com/WordPress/block-development-examples",
          description: "Official examples and patterns for block development",
          type: "official",
        },
        {
          title: "Gutenberg Plugin",
          url: "https://wordpress.org/plugins/gutenberg/",
          description:
            "Latest Gutenberg features before they reach WordPress core",
          type: "official",
        },
        {
          title: "WP-CLI",
          url: "https://wp-cli.org/",
          description: "Command-line interface for WordPress development",
          type: "tool",
        },
        {
          title: "Local by Flywheel",
          url: "https://localwp.com/",
          description: "Local WordPress development environment",
          type: "tool",
        },
        {
          title: "wp-env",
          url: "https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/",
          description:
            "Official local WordPress environment for block development",
          type: "official",
        },
      ],
    },
    {
      title: "Community Resources & Blogs",
      description: "Expert insights and community-driven content",
      icon: Users,
      iconColor: "text-pink-500",
      resources: [
        {
          title: "WP Tavern",
          url: "https://wptavern.com/",
          description: "WordPress news and analysis, excellent FSE coverage",
          type: "community",
        },
        {
          title: "Rich Tabor's Blog",
          url: "https://richtabor.com/",
          description:
            "Block theme development insights from a WordPress expert",
          type: "community",
        },
        {
          title: "Carolina Nymark's Blog",
          url: "https://fullsiteediting.com/lessons/",
          description: "In-depth FSE tutorials and theme development guides",
          type: "community",
        },
        {
          title: "Block Editor Dev Blog",
          url: "https://make.wordpress.org/core/components/block-editor/",
          description: "Official WordPress block editor development updates",
          type: "official",
        },
        {
          title: "WordPress Developer Blog",
          url: "https://developer.wordpress.org/news/",
          description: "Latest news and updates for WordPress developers",
          type: "official",
        },
        {
          title: "Automattic Design Blog",
          url: "https://automattic.design/",
          description: "Design insights and patterns from the WordPress team",
          type: "community",
        },
      ],
    },
    {
      title: "Learning & Tutorials",
      description: "Courses, tutorials, and educational content",
      icon: GraduationCap,
      iconColor: "text-orange-500",
      resources: [
        {
          title: "Learn WordPress",
          url: "https://learn.wordpress.org/",
          description:
            "Official WordPress learning platform with structured courses",
          type: "official",
          featured: true,
        },
        {
          title: "WordPress Block Development Course",
          url: "https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/",
          description: "Comprehensive course on building custom blocks",
          type: "official",
        },
        {
          title: "Block Theme Development Workshop",
          url: "https://learn.wordpress.org/workshop/building-your-first-block-theme/",
          description: "Hands-on workshop for creating block themes",
          type: "official",
        },
        {
          title: "WordPress TV",
          url: "https://wordpress.tv/",
          description: "Video content from WordCamps and WordPress events",
          type: "community",
        },
        {
          title: "Gutenberg Times",
          url: "https://gutenbergtimes.com/",
          description: "Weekly newsletter covering Gutenberg development",
          type: "community",
        },
        {
          title: "WP Block Patterns",
          url: "https://wordpress.org/patterns/",
          description: "Official pattern directory with examples",
          type: "official",
        },
      ],
    },
    {
      title: "Code Examples & Patterns",
      description: "Real-world examples and code patterns",
      icon: Code,
      iconColor: "text-cyan-500",
      resources: [
        {
          title: "Block Pattern Library",
          url: "https://wordpress.org/patterns/",
          description: "Official collection of block patterns",
          type: "official",
        },
        {
          title: "Twenty Twenty-Four Theme",
          url: "https://github.com/WordPress/twentytwentyfour",
          description: "Reference implementation of a modern block theme",
          type: "example",
        },
        {
          title: "Gutenberg Examples",
          url: "https://github.com/WordPress/gutenberg-examples",
          description: "Official repository of block development examples",
          type: "official",
        },
        {
          title: "Block Editor Components",
          url: "https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page",
          description: "Storybook documentation for Gutenberg components",
          type: "official",
        },
        {
          title: "Theme Patterns",
          url: "https://github.com/WordPress/theme-experiments",
          description: "Experimental themes showcasing new features",
          type: "example",
        },
        {
          title: "Block Theme Patterns",
          url: "https://fullsiteediting.com/block-theme-patterns/",
          description: "Collection of useful block theme patterns",
          type: "community",
        },
      ],
    },
    {
      title: "Design & UI Resources",
      description: "Design systems, patterns, and UI guidelines",
      icon: Palette,
      iconColor: "text-violet-500",
      resources: [
        {
          title: "WordPress Design Handbook",
          url: "https://make.wordpress.org/design/handbook/",
          description: "Official WordPress design guidelines and principles",
          type: "official",
        },
        {
          title: "Gutenberg Design Specs",
          url: "https://www.figma.com/file/ZtN5xslEVYgzU7Dd5CxgGZwq/WordPress-Design-Library",
          description: "Figma design library for WordPress interfaces",
          type: "official",
        },
        {
          title: "WordPress Components",
          url: "https://wordpress.github.io/gutenberg/?path=/docs/components-introduction--docs",
          description: "Complete component library documentation",
          type: "official",
        },
        {
          title: "WordPress Icons",
          url: "https://developer.wordpress.org/resource/dashicons/",
          description: "Official WordPress icon font (Dashicons)",
          type: "official",
        },
      ],
    },
    {
      title: "Testing & Quality Assurance",
      description: "Testing tools and quality standards",
      icon: Zap,
      iconColor: "text-yellow-500",
      resources: [
        {
          title: "WordPress Coding Standards",
          url: "https://developer.wordpress.org/coding-standards/",
          description: "Official coding standards for WordPress development",
          type: "official",
        },
        {
          title: "PHP CodeSniffer WordPress Rules",
          url: "https://github.com/WordPress/WordPress-Coding-Standards",
          description: "Automated code quality checking for WordPress",
          type: "tool",
        },
        {
          title: "ESLint WordPress Config",
          url: "https://www.npmjs.com/package/@wordpress/eslint-plugin",
          description: "JavaScript linting rules for WordPress development",
          type: "tool",
        },
        {
          title: "WordPress Accessibility Guidelines",
          url: "https://make.wordpress.org/accessibility/handbook/",
          description: "Guidelines for creating accessible WordPress themes",
          type: "official",
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="WordPress Block Development Resources - Essential Links & Documentation"
        description="Comprehensive collection of WordPress block development resources, official documentation, community tools, tutorials, and essential links for developers working with Gutenberg blocks and FSE themes."
        keywords="WordPress block development, Gutenberg resources, Block theme development, WordPress FSE, Block editor documentation, WordPress developer resources"
        canonical="/resources"
        ogType="article"
        schema={[resourcesSchema]}
      />
      <div className="space-y-8">
        <PageHeader
          icon={BookOpen}
          iconColor="text-blue-500"
          iconBgColor="bg-blue-500/20"
          title="Developer Resources"
          description="Your comprehensive guide to WordPress block development resources. Discover official documentation, community tools, tutorials, and everything you need to master Gutenberg blocks and Full Site Editing."
          badges={[
            {
              text: "Essential Links",
              variant: "secondary",
              className: "bg-blue-500/20 text-blue-500 border-blue-500/30",
            },
            { text: "Documentation" },
            { text: "Tools" },
            { text: "Community" },
          ]}
        />

        {/* Featured Resources */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Featured Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .flatMap((cat) => cat.resources.filter((r) => r.featured))
              .map((resource, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <Badge
                        variant={
                          resource.type === "official" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {resource.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Visit Resource
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Resource Categories */}
        {categories.map((category, categoryIndex) => (
          <ContentSection
            key={categoryIndex}
            title={category.title}
            icon={category.icon}
            iconColor={category.iconColor}
          >
            <p className="text-muted-foreground mb-6">{category.description}</p>

            <div className="grid gap-4">
              {category.resources.map((resource, resourceIndex) => (
                <Card
                  key={resourceIndex}
                  className="bg-card/30 backdrop-blur border-border/50 hover:border-border/80 transition-all duration-200 group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <Badge
                            variant={
                              resource.type === "official"
                                ? "default"
                                : resource.type === "community"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {resource.type}
                          </Badge>
                          {resource.featured && (
                            <Star className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Visit Resource
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ContentSection>
        ))}

        {/* Contributing Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Heart className="mr-2 h-5 w-5 text-red-500" />
            Contributing to WordPress
          </h2>

          <Card className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <Github className="mr-2 h-5 w-5" />
                Get Involved in WordPress Development
              </CardTitle>
              <CardDescription>
                Help shape the future of WordPress by contributing to the
                project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Core Contribution</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://github.com/WordPress/gutenberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Gutenberg Repository
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://make.wordpress.org/core/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Core Team Blog
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://make.wordpress.org/test/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Testing Team
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Documentation & Design</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://make.wordpress.org/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Documentation Team
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://make.wordpress.org/design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Design Team
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://make.wordpress.org/accessibility/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        Accessibility Team
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
