import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Layers,
  Code,
  Eye,
  Settings,
  Lightbulb,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import {
  SEO,
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

export default function GroupBlock() {
  const groupBlockSchema = generateDocumentationSchema(
    "WordPress Group Block - Complete HTML Markup Guide & Examples",
    "Master WordPress Group block markup with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML.",
    "https://wpblockdocs.com/group",
    "WordPress Block Documentation",
    [
      "WordPress Group block",
      "Group block markup",
      "WordPress layout blocks",
      "Group block HTML",
      "WordPress container blocks",
      "Group block styling",
      "WordPress block layout",
      "Group block attributes",
      "WordPress block nesting",
      "Group block semantic HTML",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Group Block", url: "https://wpblockdocs.com/group" },
  ]);

  return (
    <>
      <SEO
        title="WordPress Group Block - Complete HTML Markup Guide & Examples"
        description="Master WordPress Group block markup with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML tags."
        keywords="WordPress Group block, Group block markup, WordPress layout blocks, Group block HTML, WordPress container blocks, Group block styling, WordPress block layout, Group block attributes, WordPress block nesting"
        canonical="/group"
        ogType="article"
        schema={[groupBlockSchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <PageHeader
        icon={Layers}
        iconColor="text-neon-purple"
        iconBgColor="bg-neon-purple/20"
        title="Group Block"
        description="The Group block is a container block that allows you to group other blocks together and apply shared styling, spacing, and layout properties."
        badges={[
          { text: "Core Block", className: "bg-neon-purple/20 text-neon-purple border-neon-purple/30" },
          { text: "Layout Container", variant: "outline" },
          { text: "Styling Support", variant: "outline" },
        ]}
      />
      <ContentSection title="Basic Syntax" icon={Code} iconColor="text-neon-blue">
        {/* Basic Syntax */}
        <div className="space-y-4">

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Minimal Group Block</CardTitle>
              <CardDescription>
                The simplest form of a Group block
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <WPBlockCodeBlock
                code={`<!-- wp:group -->
<div class="wp-block-group">
  <!-- Inner blocks go here -->
</div>
<!-- /wp:group -->`}
              />
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      <ContentSection title="Common Attributes" icon={Settings} iconColor="text-neon-pink">
        {/* Common Attributes */}
        <div className="space-y-4">
          <Tabs defaultValue="spacing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="spacing">Spacing</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="spacing" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Padding & Margin</CardTitle>
                  <CardDescription>
                    Control spacing around and inside the group
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50",
        "left": "var:preset|spacing|30",
        "right": "var:preset|spacing|30"
      },
      "margin": {
        "top": "var:preset|spacing|40"
      }
    }
  }
} -->
<div class="wp-block-group" 
     style="margin-top:var(--wp--preset--spacing--40);
            padding-top:var(--wp--preset--spacing--50);
            padding-right:var(--wp--preset--spacing--30);
            padding-bottom:var(--wp--preset--spacing--50);
            padding-left:var(--wp--preset--spacing--30)">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="background" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Background Colors & Images</CardTitle>
                  <CardDescription>
                    Apply background styling to the group
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {
  "backgroundColor": "primary",
  "style": {
    "color": {
      "background": "#ff6b9d"
    }
  }
} -->
<div class="wp-block-group has-primary-background-color has-background" 
     style="background-color:#ff6b9d">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="layout" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Layout Settings</CardTitle>
                  <CardDescription>
                    Configure group layout behavior
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {
  "layout": {
    "type": "constrained",
    "contentSize": "800px",
    "wideSize": "1200px"
  }
} -->
<div class="wp-block-group">
  <!-- Content constrained to max-width -->
</div>
<!-- /wp:group -->`}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>CSS Classes & Anchor</CardTitle>
                  <CardDescription>
                    Custom CSS and anchor functionality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {
  "className": "custom-group-class",
  "anchor": "section-hero"
} -->
<div id="section-hero" class="wp-block-group custom-group-class">
  <!-- Content with custom ID and class -->
</div>
<!-- /wp:group -->`}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </ContentSection>
      <ContentSection title="Real-World Examples" icon={Eye} iconColor="text-neon-cyan">
        {/* Real-World Examples */}
        <div className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  A typical hero section with background and spacing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:group {
  "className": "hero-section",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|80",
        "bottom": "var:preset|spacing|80"
      }
    },
    "color": {
      "background": "#1a1a2e"
    }
  },
  "layout": {
    "type": "constrained"
  }
} -->
<div class="wp-block-group hero-section has-background" 
     style="background-color:#1a1a2e;
            padding-top:var(--wp--preset--spacing--80);
            padding-bottom:var(--wp--preset--spacing--80)">
  <!-- Hero content -->
</div>
<!-- /wp:group -->`}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Card Container</CardTitle>
                <CardDescription>
                  A card-style container with border and shadow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:group {
  "className": "card",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "right": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50",
        "left": "var:preset|spacing|50"
      }
    },
    "border": {
      "radius": "8px",
      "width": "1px",
      "color": "#e5e7eb"
    }
  }
} -->
<div class="wp-block-group card has-border-color" 
     style="border-color:#e5e7eb;
            border-width:1px;
            border-radius:8px;
            padding-top:var(--wp--preset--spacing--50);
            padding-right:var(--wp--preset--spacing--50);
            padding-bottom:var(--wp--preset--spacing--50);
            padding-left:var(--wp--preset--spacing--50)">
  <!-- Card content -->
</div>
<!-- /wp:group -->`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
      <ContentSection title="Tips & Gotchas" icon={Lightbulb} iconColor="text-yellow-500">
        {/* Gotchas & Tips */}
        <div className="space-y-4">
          <div className="space-y-4">
            <Card className="bg-yellow-500/10 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Theme Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Some themes override Group block styles - check your
                    theme's CSS
                  </li>
                  <li>
                    • Block spacing presets depend on theme.json configuration
                  </li>
                  <li>
                    �� Background colors may not display if theme lacks color
                    palette
                  </li>
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
                  <li>
                    • Use CSS classes instead of inline styles when possible
                  </li>
                  <li>• Prefer spacing presets over hardcoded values</li>
                  <li>• Test group blocks across different screen sizes</li>
                  <li>• Use semantic anchor IDs for navigation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
      <PropertiesReference
        blockType="group"
        title="Group Block Properties"
        description="Complete reference of all properties available to the Group block, including universal block properties and Group-specific attributes"
      />
      <ContentSection title="Related Blocks">
        {/* Related Blocks */}
        <div className="space-y-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Columns Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Create multi-column layouts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Stack Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vertical stacking container
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Row Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Horizontal flex container
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
