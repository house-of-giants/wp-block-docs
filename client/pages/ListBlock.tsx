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
  List,
  ListOrdered,
  CheckCircle,
  Hash,
  Type,
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

export default function ListBlock() {
  const listSchema = generateDocumentationSchema(
    "WordPress List Block - Ordered & Unordered Lists Guide",
    "Master WordPress List block for structured content. Complete guide to ordered lists, unordered lists, nested lists, and custom styling with semantic HTML markup.",
    "https://wpblockdocs.com/list",
    "WordPress Block Documentation",
    [
      "WordPress List block",
      "Ordered list WordPress",
      "Unordered list WordPress",
      "Nested lists WordPress",
      "List block markup",
      "WordPress ul ol",
      "List styling WordPress",
      "WordPress list formatting",
      "Semantic lists",
      "Content structure WordPress",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "List Block", url: "https://wpblockdocs.com/list" },
  ]);

  return (
    <>
      <SEO
        title="WordPress List Block - Ordered & Unordered Lists Guide"
        description="Master WordPress List block for structured content. Complete guide to ordered lists, unordered lists, nested lists, and custom styling with semantic HTML markup and accessibility features."
        keywords="WordPress List block, Ordered list WordPress, Unordered list WordPress, Nested lists WordPress, List block markup, WordPress ul ol, List styling WordPress"
        canonical="/list"
        ogType="article"
        schema={[listSchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <PageHeader
        icon={List}
        iconColor="text-neon-blue"
        iconBgColor="bg-neon-blue/20"
        title="List Block"
        description="The List block creates semantic ordered and unordered lists with full control over styling, nesting, and formatting. Essential for structured content and improved SEO."
        badges={[
          { text: "Content Structure", variant: "secondary", className: "bg-neon-blue/20 text-neon-blue border-neon-blue/30" },
          { text: "Semantic HTML", variant: "outline" },
          { text: "Nested Lists", variant: "outline" },
          { text: "SEO Friendly", variant: "outline" },
          { text: "Accessible", variant: "outline" },
        ]}
      />
      <div className="space-y-8">
        <ContentSection title="Basic Usage" icon={List} iconColor="text-neon-blue">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">
                Simple bullet-point list for related items
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Perfect for Features, Benefits, and Bullet Points
                </span>
              </div>
              <WPBlockCodeBlock
                code={`<!-- wp:list -->
<ul class="wp-block-list">
  <!-- wp:list-item -->
  <li>First list item with important information</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Second item explaining key concepts</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Third item with additional details</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Fourth item completing the list</li>
  <!-- /wp:list-item -->
</ul>
<!-- /wp:list -->`}
              />
            </CardContent>
          </Card>
        </ContentSection>

        <ContentSection title="List Types & Variations" icon={Hash} iconColor="text-neon-purple">
          <Tabs defaultValue="ordered" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ordered">Ordered Lists</TabsTrigger>
              <TabsTrigger value="nested">Nested Lists</TabsTrigger>
              <TabsTrigger value="styled">Custom Styling</TabsTrigger>
              <TabsTrigger value="rich">Rich Content</TabsTrigger>
            </TabsList>

            <TabsContent value="ordered" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ListOrdered className="mr-2 h-5 w-5 text-neon-purple" />
                    Ordered Lists with Numbers
                  </CardTitle>
                  <CardDescription>
                    Step-by-step processes and sequential information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list">
  <!-- wp:list-item -->
  <li>Download and install WordPress on your server</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Choose and activate a block theme</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Create your site content using the block editor</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Customize your theme using the Site Editor</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Launch your website and monitor performance</li>
  <!-- /wp:list-item -->
</ol>
<!-- /wp:list -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nested" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Nested Lists with Sub-items</CardTitle>
                  <CardDescription>
                    Complex hierarchical content structure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:list -->
<ul class="wp-block-list">
  <!-- wp:list-item -->
  <li>WordPress Development
    <!-- wp:list -->
    <ul>
      <!-- wp:list-item -->
      <li>Theme Development
        <!-- wp:list -->
        <ul>
          <!-- wp:list-item -->
          <li>Block Themes</li>
          <!-- /wp:list-item -->
          
          <!-- wp:list-item -->
          <li>Classic Themes</li>
          <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->
      </li>
      <!-- /wp:list-item -->
      
      <!-- wp:list-item -->
      <li>Plugin Development</li>
      <!-- /wp:list-item -->
      
      <!-- wp:list-item -->
      <li>Custom Block Creation</li>
      <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->
  </li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Frontend Technologies
    <!-- wp:list -->
    <ul>
      <!-- wp:list-item -->
      <li>HTML & CSS</li>
      <!-- /wp:list-item -->
      
      <!-- wp:list-item -->
      <li>JavaScript & React</li>
      <!-- /wp:list-item -->
      
      <!-- wp:list-item -->
      <li>PHP & MySQL</li>
      <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->
  </li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Deployment & Hosting</li>
  <!-- /wp:list-item -->
</ul>
<!-- /wp:list -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styled" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Styled Lists</CardTitle>
                  <CardDescription>
                    Lists with custom colors, spacing, and typography
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:list {
  "className":"custom-feature-list",
  "style":{
    "spacing":{
      "padding":{
        "left":"2rem"
        },
      "blockGap":"1rem"
    },
    "typography":{
      "fontSize":"1.1rem",
      "lineHeight":"1.6"
    },
    "color":{
      "text":"#2563eb"
    }
  }
} -->
<ul style="color:#2563eb;padding-left:2rem;font-size:1.1rem;line-height:1.6"
  class="wp-block-list custom-feature-list has-text-color">
  <!-- wp:list-item {
    "style":{
      "color":{
        "text":"#059669"
      }
    }
  } -->
  <li class="has-text-color" style="color:#059669">
    ✅ Responsive design across all devices
  </li>
  <!-- /wp:list-item -->

  <!-- wp:list-item {"style":{"color":{"text":"#7c3aed"}}} -->
  <li class="has-text-color" style="color:#7c3aed">
    🚀 Fast loading and optimized performance
  </li>
  <!-- /wp:list-item -->

  <!-- wp:list-item {"style":{"color":{"text":"#dc2626"}}} -->
  <li class="has-text-color" style="color:#dc2626">
    🎨 Customizable design system
  </li>
  <!-- /wp:list-item -->

  <!-- wp:list-item {"style":{"color":{"text":"#ea580c"}}} -->
  <li class="has-text-color" style="color:#ea580c">
    🔧 Easy content management
  </li>
  <!-- /wp:list-item --></ul>
<!-- /wp:list -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rich" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Rich Content Lists</CardTitle>
                  <CardDescription>
                    Lists with formatted text, links, and emphasis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:list -->
<ul class="wp-block-list">
  <!-- wp:list-item -->
  <li><strong>WordPress Official Documentation</strong> - 
    <a href="https://developer.wordpress.org/">developer.wordpress.org</a> 
    provides comprehensive guides for theme and plugin development</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><em>Advanced Custom Fields</em> - 
    Popular plugin for creating <code>custom fields</code> and 
    <strong>meta boxes</strong> in WordPress</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><a href="https://github.com/WordPress/gutenberg">Gutenberg Repository</a> - 
    Open source block editor with active community contributions</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>WordPress Coding Standards - Follow 
    <strong>PHP_CodeSniffer</strong> rules for 
    <em>consistent</em> and <strong>maintainable</strong> code</li>
  <!-- /wp:list-item -->
</ul>
<!-- /wp:list -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ContentSection>

        {/* Key Concepts */}
        <ContentSection title="List Best Practices & Guidelines" icon={AlertCircle} iconColor="text-amber-500">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">
                      Semantic HTML Structure
                    </h3>
                    <p className="text-sm text-foreground">
                      List blocks generate proper semantic HTML (ul/ol) that
                      improves SEO and accessibility. Search engines understand
                      list structure better than manual formatting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Hash className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                      Ordered vs Unordered
                    </h3>
                    <p className="text-sm text-foreground">
                      Use ordered lists (ol) for sequential steps or ranked
                      items. Use unordered lists (ul) for related items without
                      specific order. This affects both styling and SEO.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Type className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300">
                      Rich Text Support
                    </h3>
                    <p className="text-sm text-foreground">
                      List items support rich text formatting including bold,
                      italic, links, and inline code. Use keyboard shortcuts for
                      faster formatting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-500/10 border-amber-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300">
                      Nesting Limitations
                    </h3>
                    <p className="text-sm text-foreground">
                      While WordPress supports unlimited nesting, consider
                      usability and readability. Deep nesting (more than 3
                      levels) can confuse users and search engines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <PropertiesReference blockType="list" />
      </div>
    </>
  );
}
