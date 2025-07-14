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
  Columns,  
  Code,
  Eye,
  Settings,
  Lightbulb,
  Smartphone,
  Monitor,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

export default function ColumnsBlock() {
  const columnsBlockSchema = generateDocumentationSchema(
    "WordPress Columns Block - Complete HTML Markup Guide & Examples",
    "Master WordPress columns block markup with comprehensive examples, attributes, and best practices. Learn how to create responsive multi-column layouts using CSS Grid and Flexbox.",
    "https://wpblockdocs.com/columns-block",
    "WordPress Block Documentation",
    [
      "WordPress columns block",
      "WordPress columns block markup",
      "WordPress columns block best practices",
      "WordPress columns block examples",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress Columns Block - Complete HTML Markup Guide & Examples"
        description="Master WordPress columns block markup with comprehensive examples, attributes, and best practices. Learn how to create responsive multi-column layouts using CSS Grid and Flexbox."
        keywords="WordPress columns block, WordPress columns block markup, WordPress columns block best practices, WordPress columns block examples"
        canonical="/columns-block"
        ogType="article"
        schema={[columnsBlockSchema]}
      />
      <PageHeader
        icon={Columns}
        iconColor="text-neon-blue"
        iconBgColor="bg-neon-blue/20"
        title="Columns Block"
        description="The Columns block creates responsive multi-column layouts using CSS Grid and Flexbox. It automatically generates individual Column blocks as containers for your content."
        badges={[
          { text: "Core Block", className: "bg-neon-blue/20 text-neon-blue border-neon-blue/30" },
          { text: "Layout Container", variant: "outline" },
          { text: "Responsive", variant: "outline" },
          { text: "CSS Grid", variant: "outline" },
        ]}
      />
      <ContentSection title="Basic Syntax" icon={Code} iconColor="text-neon-blue">
        {/* Basic Syntax */}
        <div className="space-y-4">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Two-Column Layout</CardTitle>
              <CardDescription>
                The most common columns configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <WPBlockCodeBlock
                  code={`<!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                  
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      <ContentSection title="Column Configurations" icon={Settings} iconColor="text-neon-pink">
        {/* Column Configurations */}
        <div className="space-y-4">
          <Tabs defaultValue="equal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="equal">Equal Width</TabsTrigger>
              <TabsTrigger value="custom">Custom Width</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
              <TabsTrigger value="nested">Nested</TabsTrigger>
            </TabsList>

            <TabsContent value="equal" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Three Equal Columns</CardTitle>
                  <CardDescription>
                    Each column takes 33.33% of available width
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:columns {"columnCount":3} -->
  <div class="wp-block-columns">
    <!-- wp:column -->
    <div class="wp-block-column"><!-- Content --></div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column"><!-- Content --></div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column"><!-- Content --></div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Column Widths</CardTitle>
                  <CardDescription>
                    Specify exact percentages for each column
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column {"width":"70%"} -->
    <div class="wp-block-column" style="flex-basis:70%">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column {"width":"30%"} -->
    <div class="wp-block-column" style="flex-basis:30%">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="responsive" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Responsive Behavior</CardTitle>
                  <CardDescription>
                    How columns behave on different screen sizes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm font-medium">
                        <Monitor className="h-4 w-4 text-neon-blue" />
                        <span>Desktop (782px+)</span>
                      </div>
                      <div className="bg-retro-darker rounded p-2 text-xs text-neon-cyan">
                        Side-by-side columns
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm font-medium">
                        <Smartphone className="h-4 w-4 text-neon-pink" />
                        <span>Mobile (&lt;782px)</span>
                      </div>
                      <div className="bg-retro-darker rounded p-2 text-xs text-neon-cyan">
                        Stacked vertically
                      </div>
                    </div>
                  </div>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`/* Generated CSS */
  .wp-block-columns {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 781px) {
    .wp-block-columns {
      display: block;
    }
    .wp-block-column {
      flex-basis: 100% !important;
    }
  }`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nested" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Nested Columns</CardTitle>
                  <CardDescription>
                    Columns blocks can be nested for complex layouts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- wp:column {"width":"60%"} -->
    <div class="wp-block-column" style="flex-basis:60%">
      <!-- wp:columns -->
      <div class="wp-block-columns">
        <!-- wp:column -->
        <div class="wp-block-column"><!-- Content --></div>
        <!-- /wp:column -->
        <!-- wp:column -->
        <div class="wp-block-column"><!-- Content --></div>
        <!-- /wp:column -->
      </div>
      <!-- /wp:columns -->
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column {"width":"40%"} -->
    <div class="wp-block-column" style="flex-basis:40%">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </ContentSection>
      <ContentSection title="Advanced Features" icon={Eye} iconColor="text-neon-cyan">
        {/* Advanced Features */}
        <div className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Column Spacing</CardTitle>
                <CardDescription>Control gap between columns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:columns {
    "style": {
      "spacing": {
        "blockGap": "var:preset|spacing|50"
      }
    }
  } -->
  <div class="wp-block-columns">
    <!-- Content -->
  </div>
  <!-- /wp:columns -->`}
                    
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Vertical Alignment</CardTitle>
                <CardDescription>Align column content vertically</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:columns {"verticalAlignment":"center"} -->
  <div class="wp-block-columns are-vertically-aligned-center">
    <!-- wp:column {"verticalAlignment":"top"} -->
    <div class="wp-block-column is-vertically-aligned-top">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                    
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
      <ContentSection title="Common Layout Patterns">
        {/* Common Patterns */}
        <div className="space-y-4">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Sidebar Layout (70/30)</CardTitle>
                <CardDescription>
                  Main content with sidebar - popular blog layout
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:columns {"className":"sidebar-layout"} -->
  <div class="wp-block-columns sidebar-layout">
    <!-- wp:column {"width":"70%"} -->
    <div class="wp-block-column" style="flex-basis:70%">
      <!-- Content -->
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column {"width":"30%"} -->
    <div class="wp-block-column" style="flex-basis:30%">
      <!-- wp:group {"className":"sticky-sidebar"} -->
      <div class="wp-block-group sticky-sidebar">
        <!-- Content -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->`}
                    
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Feature Grid (33/33/33)</CardTitle>
                <CardDescription>
                  Three equal columns for features or services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:columns {"columnCount":3,"className":"feature-grid"} -->
  <div class="wp-block-columns feature-grid">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"feature-card"} -->
      <div class="wp-block-group feature-card">
        <!-- wp:image -->
          <figure class="wp-block-image"><img alt=""/></figure>
        <!-- /wp:image -->
        <!-- wp:heading {"level":3} -->
          <h3>Feature Title</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
          <p>Feature Description</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
    
    <!-- Content -->
  </div>
  <!-- /wp:columns -->`}
                    
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
            <Card className="bg-red-500/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Common Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Mobile breakpoint is hardcoded at 782px (not customizable)
                  </li>
                  <li>• Nested columns can create layout issues on mobile</li>
                  <li>• Column widths must add up to 100% or layout may break</li>
                  <li>• Some themes override default column styles</li>
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
                  <li>• Test your column layouts on different screen sizes</li>
                  <li>• Use consistent column gaps throughout your site</li>
                  <li>• Consider content length when setting column widths</li>
                  <li>• Add semantic CSS classes for styling hooks</li>
                  <li>• Avoid too many nested column levels</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>

      <PropertiesReference
        blockType="columns"
        title="Columns Block Properties"
        description="Complete reference of all properties available to the Columns block and individual Column blocks, including universal block properties and Columns-specific attributes"
      />

      <ContentSection title="Related Blocks">
        {/* Related Blocks */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Related Blocks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Group Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Container for grouping blocks
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

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Media & Text</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Side-by-side media and content
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
