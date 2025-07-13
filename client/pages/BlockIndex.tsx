import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Layers,
  Database,
  Navigation,
  List,
  Quote,
  Images,
  Type,
  Image,
  MousePointer,
  Grid3X3,
  FileText,
  Zap,
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";
import {
  SEO,
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

const coreBlocks = [
  {
    name: "Group Block",
    href: "/blocks/group",
    icon: Layers,
    description: "Container block for organizing and styling content layouts",
    category: "Layout",
    difficulty: "Beginner",
    essential: true,
    features: [
      "Semantic HTML",
      "Custom Styling",
      "Nested Blocks",
      "Layout Control",
    ],
  },
  {
    name: "Columns Block",
    href: "/blocks/columns",
    icon: Grid3X3,
    description: "Responsive grid system for multi-column layouts",
    category: "Layout",
    difficulty: "Beginner",
    essential: true,
    features: [
      "Responsive Grid",
      "Nested Content",
      "Custom Widths",
      "Mobile Stacking",
    ],
  },
  {
    name: "Query Loop Block",
    href: "/blocks/query-loop",
    icon: Database,
    description:
      "Dynamic content display for posts, pages, and custom post types",
    category: "Dynamic",
    difficulty: "Advanced",
    essential: true,
    features: [
      "Dynamic Content",
      "Custom Queries",
      "Pagination",
      "Template Parts",
    ],
  },
  {
    name: "Navigation Block",
    href: "/blocks/navigation",
    icon: Navigation,
    description: "Responsive site navigation with mobile menu support",
    category: "Navigation",
    difficulty: "Intermediate",
    essential: true,
    features: ["Mobile Menu", "Dropdowns", "Accessibility", "Custom Styling"],
  },
  {
    name: "Image Block",
    href: "/blocks/image",
    icon: Image,
    description:
      "Media display with responsive sizing and accessibility features",
    category: "Media",
    difficulty: "Beginner",
    essential: false,
    features: ["Responsive Images", "Alt Text", "Lightbox", "Custom Sizing"],
  },
  {
    name: "Gallery Block",
    href: "/blocks/gallery",
    icon: Images,
    description:
      "Image collections with grid layouts and lightbox functionality",
    category: "Media",
    difficulty: "Intermediate",
    essential: false,
    features: ["Image Grid", "Lightbox", "Captions", "Responsive Layout"],
  },
  {
    name: "Heading Block",
    href: "/blocks/heading",
    icon: Type,
    description: "SEO-optimized headings with proper hierarchy and styling",
    category: "Typography",
    difficulty: "Beginner",
    essential: false,
    features: [
      "SEO Hierarchy",
      "Anchor Links",
      "Custom Styling",
      "Accessibility",
    ],
  },
  {
    name: "Paragraph Block",
    href: "/blocks/paragraph",
    icon: FileText,
    description: "Rich text content with formatting and typography options",
    category: "Typography",
    difficulty: "Beginner",
    essential: false,
    features: ["Rich Text", "Drop Caps", "Typography", "Text Alignment"],
  },
  {
    name: "List Block",
    href: "/blocks/list",
    icon: List,
    description: "Ordered and unordered lists with nested structure support",
    category: "Content",
    difficulty: "Beginner",
    essential: false,
    features: [
      "Nested Lists",
      "Custom Styling",
      "Rich Content",
      "Semantic HTML",
    ],
  },
  {
    name: "Quote Block",
    href: "/blocks/quote",
    icon: Quote,
    description: "Blockquotes and testimonials with citation support",
    category: "Content",
    difficulty: "Beginner",
    essential: false,
    features: ["Citations", "Custom Styling", "Testimonials", "Pull Quotes"],
  },
  {
    name: "Button Block",
    href: "/blocks/button",
    icon: MousePointer,
    description: "Call-to-action buttons with styling and link options",
    category: "Interactive",
    difficulty: "Beginner",
    essential: false,
    features: [
      "Custom Styling",
      "Link Options",
      "Accessibility",
      "Hover Effects",
    ],
  },
];

const categories = [
  {
    name: "All Blocks",
    count: coreBlocks.length,
    color: "bg-neon-blue/20 text-neon-blue border-neon-blue/30",
  },
  {
    name: "Layout",
    count: coreBlocks.filter((b) => b.category === "Layout").length,
    color: "bg-neon-purple/20 text-neon-purple border-neon-purple/30",
  },
  {
    name: "Dynamic",
    count: coreBlocks.filter((b) => b.category === "Dynamic").length,
    color: "bg-neon-pink/20 text-neon-pink border-neon-pink/30",
  },
  {
    name: "Media",
    count: coreBlocks.filter((b) => b.category === "Media").length,
    color: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
  },
  {
    name: "Typography",
    count: coreBlocks.filter((b) => b.category === "Typography").length,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    name: "Content",
    count: coreBlocks.filter((b) => b.category === "Content").length,
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    name: "Interactive",
    count: coreBlocks.filter((b) => b.category === "Interactive").length,
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
];

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function BlockIndex() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All Blocks");

  const indexSchema = generateDocumentationSchema(
    "WordPress Blocks Overview - Complete Block Reference Index",
    "Browse all documented WordPress core blocks with descriptions, difficulty levels, and features. Complete block index for developers building block themes and custom layouts.",
    "https://wpblockdocs.com/blocks",
    "WordPress Block Documentation",
    [
      "WordPress blocks overview",
      "Block reference index",
      "WordPress core blocks",
      "Block documentation index",
      "WordPress block types",
      "Block theme development",
      "WordPress block catalog",
      "Block development guide",
      "WordPress FSE blocks",
      "Block editor reference",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Block Index", url: "https://wpblockdocs.com/blocks" },
  ]);

  const filteredBlocks = coreBlocks.filter((block) => {
    const matchesSearch =
      block.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      block.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      block.features.some((feature) =>
        feature.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All Blocks" || block.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const essentialBlocks = coreBlocks.filter((block) => block.essential);

  return (
    <>
      <SEO
        title="WordPress Blocks Overview - Complete Block Reference Index"
        description="Browse all documented WordPress core blocks with descriptions, difficulty levels, and features. Complete block index for developers building block themes and custom layouts."
        keywords="WordPress blocks overview, Block reference index, WordPress core blocks, Block documentation index, WordPress block types, Block theme development, WordPress block catalog"
        canonical="/blocks"
        ogType="article"
        schema={[indexSchema]}
      />
      <PageHeader
        icon={Layers}
        iconColor="text-neon-blue"
        iconBgColor="bg-neon-blue/20"
        title="Block Index"
        description="Browse all documented WordPress core blocks with descriptions, difficulty levels, and features. Complete block index for developers building block themes and custom layouts."
        badges={categories.map(cat => ({ text: cat.name, variant: "outline", className: cat.color }))}
      />
      <div className="space-y-8">
        <ContentSection title="All Blocks" icon={Layers} iconColor="text-neon-blue">
          {/* Essential Blocks Spotlight */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-neon-pink" />
              <h2 className="text-2xl font-semibold text-foreground mt-4">
                Essential Blocks
              </h2>
              <Badge
                variant="secondary"
                className="bg-neon-pink/20 text-neon-pink border-neon-pink/30"
              >
                Start Here
              </Badge>
            </div>
            <p className="text-muted-foreground">
              These are the most important blocks for WordPress block theme
              development. Master these first for a solid foundation.
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {essentialBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <Link key={block.name} to={block.href}>
                    <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-all duration-200 group">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="h-5 w-5 text-neon-blue" />
                            <span className="group-hover:text-neon-blue transition-colors">
                              {block.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="outline"
                              className={difficultyColors[block.difficulty]}
                            >
                              {block.difficulty}
                            </Badge>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="mb-3">
                          {block.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1">
                          {block.features.slice(0, 3).map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {block.features.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{block.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Search and Filter */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-neon-cyan" />
              <h2 className="text-2xl font-semibold text-foreground">
                Browse All Blocks
              </h2>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blocks, features, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCategory === category.name
                      ? category.color
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Blocks Grid */}
          <div className="space-y-4">
            {filteredBlocks.length === 0 ? (
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-8 text-center">
                  <Search className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No blocks found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or selecting a different
                    category.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <Link key={block.name} to={block.href}>
                      <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-all duration-200 group h-full">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Icon className="h-5 w-5 text-neon-blue" />
                              <span className="group-hover:text-neon-blue transition-colors">
                                {block.name}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                          <CardDescription>{block.description}</CardDescription>

                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className={difficultyColors[block.difficulty]}
                            >
                              {block.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {block.category}
                            </Badge>
                            {block.essential && (
                              <Badge
                                variant="secondary"
                                className="bg-neon-pink/20 text-neon-pink border-neon-pink/30 text-xs"
                              >
                                Essential
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {block.features.map((feature) => (
                              <Badge
                                key={feature}
                                variant="secondary"
                                className="text-xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </ContentSection>

        {/* Learning Path */}
        <ContentSection title="Recommended Learning Path" icon={TrendingUp} iconColor="text-neon-purple">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <span className="bg-green-500/20 text-green-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                    1
                  </span>
                  Foundation Blocks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Start with basic content and layout blocks
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Group Block (layouts)</div>
                  <div>• Columns Block (grid system)</div>
                  <div>• Heading & Paragraph (content)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-400">
                  <span className="bg-yellow-500/20 text-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                    2
                  </span>
                  Interactive Elements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Add navigation and interactive components
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Navigation Block (site menus)</div>
                  <div>• Button Block (CTAs)</div>
                  <div>• Image & Gallery (media)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-red-400">
                  <span className="bg-red-500/20 text-red-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                    3
                  </span>
                  Dynamic Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Master dynamic content and advanced features
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Query Loop Block (dynamic posts)</div>
                  <div>• Template Parts</div>
                  <div>• Custom Block Patterns</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        {/* Quick Actions */}
        <ContentSection title="Quick Actions" icon={Zap} iconColor="text-neon-cyan">
          <div className="grid gap-4 md:grid-cols-3">
            <Link to="/patterns">
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-cyan/50 transition-all duration-200 group">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 mx-auto mb-3 text-neon-cyan group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                    Browse Patterns
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ready-made block combinations for common layouts
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/properties">
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-purple/50 transition-all duration-200 group">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-neon-purple group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 group-hover:text-neon-purple transition-colors">
                    Properties Reference
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete guide to block attributes and properties
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/validator">
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-pink/50 transition-all duration-200 group">
                <CardContent className="p-6 text-center">
                  <Search className="h-8 w-8 mx-auto mb-3 text-neon-pink group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 group-hover:text-neon-pink transition-colors">
                    Validate Markup
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Test your block markup for errors and best practices
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </ContentSection>
      </div>
    </>
  );
}
