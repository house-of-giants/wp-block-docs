import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Copy,
  AlertCircle,
  Type,
  Code,
  Eye,
  Settings,
  Lightbulb,
  Accessibility,
  Search,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

export default function HeadingBlock() {
  const headingBlockSchema = generateDocumentationSchema(
    "WordPress Heading Block - Complete HTML Markup Guide & Examples",
    "Master WordPress heading block markup with comprehensive examples, attributes, and best practices. Learn how to create semantic HTML headings with customizable styling.",
    "https://wpblockdocs.com/heading-block",
    "WordPress Block Documentation",
    [
      "WordPress heading block",
      "WordPress heading block markup",
      "WordPress heading block best practices",
      "WordPress heading block examples",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress Heading Block - Complete HTML Markup Guide & Examples"
        description="Master WordPress heading block markup with comprehensive examples, attributes, and best practices. Learn how to create semantic HTML headings with customizable styling."
        keywords="WordPress heading block, WordPress heading block markup, WordPress heading block best practices, WordPress heading block examples"
        canonical="/heading-block"
        ogType="article"
        schema={[headingBlockSchema]}
      />
      <PageHeader
        icon={Type}
        iconColor="text-neon-pink"
        iconBgColor="bg-neon-pink/20"
        title="Heading Block"
        description="The Heading block creates semantic HTML headings (h1-h6) with customizable styling. It's essential for content hierarchy, SEO, and accessibility, helping screen readers and search engines understand your content structure."
        badges={[
          { text: "Core Block", variant: "secondary", className: "bg-neon-pink/20 text-neon-pink border-neon-pink/30" },
          { text: "Typography", variant: "outline" },
          { text: "SEO Critical", variant: "outline" },
          { text: "Accessibility", variant: "outline" },
        ]}
      />
      <div className="space-y-8">
        <ContentSection title="Basic Syntax" icon={Code} iconColor="text-neon-blue">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Default Heading (H2)</CardTitle>
              <CardDescription>
                The most common heading level for content sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <WPBlockCodeBlock
                  code={`<!-- wp:heading -->
<h2 class="wp-block-heading">Your Heading Text</h2>
<!-- /wp:heading -->`}
                  
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Default level 2 heading
                </span>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </ContentSection>

        <ContentSection title="Heading Levels & Hierarchy" icon={Settings} iconColor="text-neon-pink">
          <Tabs defaultValue="levels" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="levels">All Levels</TabsTrigger>
              <TabsTrigger value="styling">Custom Styling</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="anchor">Anchor Links</TabsTrigger>
            </TabsList>

            <TabsContent value="levels" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>All Heading Levels (H1-H6)</CardTitle>
                  <CardDescription>
                    Different heading levels for content hierarchy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Page Title (H1)</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Main Section (H2)</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Subsection (H3)</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Sub-subsection (H4)</h4>
<!-- /wp:heading -->

<!-- wp:heading {"level":5} -->
<h5 class="wp-block-heading">Minor Heading (H5)</h5>
<!-- /wp:heading -->

<!-- wp:heading {"level":6} -->
<h6 class="wp-block-heading">Smallest Heading (H6)</h6>
<!-- /wp:heading -->`}
                      
                    />
                  </div>
                  <div className="mt-4 p-3 bg-yellow-500/10 rounded border border-yellow-500/30">
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      <Accessibility className="inline h-4 w-4 mr-1" />
                      Use only one H1 per page for optimal SEO and accessibility
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styling" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Styling</CardTitle>
                  <CardDescription>
                    Typography colors, backgrounds, and spacing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:heading {
  "style":{
    "color":{
      "text":"#ff6b9d"
    },
    "typography":{
      "fontSize":"clamp(2rem, 5vw, 3rem)",
      "fontWeight":"700",
      "lineHeight":"1.2",
      "fontStyle":"normal"
    },
    "spacing":{
      "margin":{
        "bottom":"var:preset|spacing|50"
      }
    }
  }
} -->
<h2 class="wp-block-heading has-text-color"
  style="color:#ff6b9d;
         margin-bottom:var(--wp--preset--spacing--50);
         font-size:clamp(2rem, 5vw, 3rem);
         font-style:normal;
         font-weight:700;
         line-height:1.2">
  Styled Heading
</h2>
<!-- /wp:heading -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="typography" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Typography Presets</CardTitle>
                  <CardDescription>
                    Using theme font sizes and families
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:heading {
  "level":2,
  "fontSize":"large",
  "style": {
    "typography": {
      "fontFamily": "var:preset|font-family|heading",
      "textTransform": "uppercase",
      "letterSpacing": "0.1em"
    }
  }
} -->
<h2 class="wp-block-heading has-large-font-size" 
    style="font-family:var(--wp--preset--font-family--heading);
           text-transform:uppercase;
           letter-spacing:0.1em">
  Typography Heading
</h2>
<!-- /wp:heading -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="anchor" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Anchor Links</CardTitle>
                  <CardDescription>
                    Creating jumpable sections and table of contents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:heading {
  "level":2,
  "anchor":"getting-started"
} -->
<h2 id="getting-started" class="wp-block-heading">
  Getting Started
</h2>
<!-- /wp:heading -->`}
                      
                    />
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/10 rounded border border-blue-500/30">
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      <Search className="inline h-4 w-4 mr-1" />
                      Anchor IDs are automatically generated from heading text if
                      not specified
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ContentSection>

        <ContentSection title="Real-World Examples" icon={Eye} iconColor="text-neon-cyan">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Blog Post Structure</CardTitle>
                <CardDescription>
                  Proper heading hierarchy for content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- Main article title -->
<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">
  Complete Guide to WordPress Blocks
</h1>
<!-- /wp:heading -->

<!-- Major sections -->
<!-- wp:heading {"level":2,"anchor":"introduction"} -->
<h2 id="introduction" class="wp-block-heading">
  Introduction
</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":2,"anchor":"getting-started"} -->
<h2 id="getting-started" class="wp-block-heading">
  Getting Started
</h2>
<!-- /wp:heading -->

<!-- Subsections -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">
  Installing WordPress
</h3>
<!-- /wp:heading -->`}
                    
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Landing Page Hero</CardTitle>
                <CardDescription>
                  Large, styled heading for marketing pages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:heading {
  "level":1,
  "className":"hero-title",
  "style":{
    "typography":{
      "fontSize":"clamp(3rem, 8vw, 6rem)",
      "fontWeight":"900",
      "lineHeight":"0.9",
      "textTransform":"uppercase",
      "fontStyle":"normal"
    },
    "color":{
      "gradient":"linear-gradient(45deg, #ff6b9d, #c44569)"
    },
    "spacing":{
      "margin":{"bottom":"var:preset|spacing|60"}
    }
  } 
} -->
<h1 class="wp-block-heading hero-title has-background"
  style="background:linear-gradient(45deg, #ff6b9d, #c44569);
         margin-bottom:var(--wp--preset--spacing--60);
         font-size:clamp(3rem, 8vw, 6rem);
         font-style:normal;
         font-weight:900;
         line-height:0.9;
         text-transform:uppercase">
  Transform Your Business
</h1>
<!-- /wp:heading -->`}
                    
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <ContentSection title="SEO & Accessibility" icon={Accessibility} iconColor="text-green-500">
          <div className="space-y-4">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Search className="mr-2 h-5 w-5" />
                  SEO Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Use only one H1 per page</strong> - Usually the page
                    title
                  </li>
                  <li>
                    • Follow logical hierarchy (H1 → H2 → H3, don't skip levels)
                  </li>
                  <li>• Include target keywords naturally in headings</li>
                  <li>• Keep headings descriptive and meaningful</li>
                  <li>• Use headings to break up long content sections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Accessibility className="mr-2 h-5 w-5" />
                  Accessibility Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Headings create a content outline for screen readers</li>
                  <li>• Users navigate by headings with keyboard shortcuts</li>
                  <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
                  <li>• Don't use headings solely for visual styling</li>
                  <li>• Consider font size and readability on mobile devices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <ContentSection title="Common Issues" icon={AlertCircle} iconColor="text-yellow-500">
          <div className="space-y-4">
            <Card className="bg-red-500/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Common Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Using multiple H1 tags on a single page</li>
                  <li>• Skipping heading levels (H2 → H4 without H3)</li>
                  <li>
                    • Using headings for visual styling instead of semantics
                  </li>
                  <li>• Making headings too long or unclear</li>
                  <li>• Poor color contrast in custom styled headings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Plan your heading structure before writing content</li>
                  <li>• Use CSS classes for consistent heading styles</li>
                  <li>• Test with screen readers or accessibility tools</li>
                  <li>• Consider mobile readability for large headings</li>
                  <li>• Use meaningful anchor IDs for internal linking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <PropertiesReference
          blockType="heading"
          title="Heading Block Properties"
          description="Complete reference of all properties available to the Heading block, including universal block properties and Heading-specific attributes"
        />

        <ContentSection title="Related Blocks" icon={Type} iconColor="text-neon-blue">
          <h2 className="text-2xl font-semibold text-foreground">
            Related Blocks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Paragraph Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Body text content blocks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">List Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ordered and unordered lists
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quote Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Highlighted quotations
                </p>
              </CardContent>
            </Card>
          </div>
        </ContentSection>
      </div>
    </>
  );
}
