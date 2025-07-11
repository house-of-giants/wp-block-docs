import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  AlertCircle,
  FileText,
  Code,
  Eye,
  Settings,
  Lightbulb,
  Accessibility,
  Type,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { CodeBlock } from "@/components/CodeBlock";

export default function ParagraphBlock() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-cyan/20">
            <FileText className="h-6 w-6 text-neon-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Paragraph Block
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          The Paragraph block is the most fundamental content block in
          WordPress. It handles rich text editing, typography styling, drop
          caps, and serves as the foundation for most written content on your
          site.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
          >
            Core Block
          </Badge>
          <Badge variant="outline">Rich Text</Badge>
          <Badge variant="outline">Typography</Badge>
          <Badge variant="outline">Drop Cap Support</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Syntax */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Code className="mr-2 h-5 w-5 text-neon-blue" />
          Basic Syntax
        </h2>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Simple Paragraph</CardTitle>
            <CardDescription>
              The most basic form of content in WordPress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`<!-- wp:paragraph -->
<p>This is a simple paragraph with some text content.</p>
<!-- /wp:paragraph -->`}
              language="html"
            />
            <div className="mt-4">
              <span className="text-sm text-muted-foreground">
                Basic paragraph block
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rich Text Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Settings className="mr-2 h-5 w-5 text-neon-pink" />
          Rich Text Features
        </h2>

        <Tabs defaultValue="formatting" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="formatting">Text Formatting</TabsTrigger>
            <TabsTrigger value="dropcap">Drop Cap</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="links">Links & HTML</TabsTrigger>
          </TabsList>

          <TabsContent value="formatting" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Rich Text Formatting</CardTitle>
                <CardDescription>
                  Bold, italic, and other inline formatting options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:paragraph -->
<p>This paragraph contains <strong>bold text</strong>, 
<em>italic text</em>, and <mark>highlighted text</mark>. 
You can also use <del>strikethrough</del> and 
<sup>superscript</sup> or <sub>subscript</sub>.</p>
<!-- /wp:paragraph -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dropcap" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Drop Cap Styling</CardTitle>
                <CardDescription>
                  Large decorative first letter for elegant typography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:paragraph {"dropCap":true} -->
<p class="has-drop-cap">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. The first letter will be 
styled as a large drop cap that spans multiple lines 
of text for an elegant typography effect.</p>
<!-- /wp:paragraph -->`}
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-neon-purple/10 rounded border border-neon-purple/30">
                  <p className="text-sm text-neon-purple">
                    <Type className="inline h-4 w-4 mr-1" />
                    Drop cap styling depends on your theme's CSS implementation
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Custom Typography</CardTitle>
                <CardDescription>
                  Font sizes, colors, and spacing customization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:paragraph {
  "fontSize":"large",
  "style": {
    "color": {
      "text": "#ff6b9d"
    },
    "typography": {
      "lineHeight": "1.6",
      "letterSpacing": "0.02em",
      "fontWeight": "500"
    },
    "spacing": {
      "margin": {
        "bottom": "var:preset|spacing|50"
      }
    }
  }
} -->
<p class="has-large-font-size" 
   style="color:#ff6b9d;
          line-height:1.6;
          letter-spacing:0.02em;
          font-weight:500;
          margin-bottom:var(--wp--preset--spacing--50)">
  This paragraph has custom typography styling.
</p>
<!-- /wp:paragraph -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Links and HTML Elements</CardTitle>
                <CardDescription>
                  Hyperlinks and allowed HTML within paragraphs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:paragraph -->
<p>Visit our <a href="https://example.com" target="_blank" 
rel="noopener">website</a> for more information. 
You can also use <code>inline code</code> and 
<kbd>keyboard shortcuts</kbd> within paragraphs.</p>
<!-- /wp:paragraph -->`}
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-yellow-500/10 rounded border border-yellow-500/30">
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    <AlertCircle className="inline h-4 w-4 mr-1" />
                    Only certain HTML tags are allowed in paragraph blocks for
                    security
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Real-World Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Eye className="mr-2 h-5 w-5 text-neon-cyan" />
          Real-World Examples
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Blog Post Introduction</CardTitle>
              <CardDescription>
                Opening paragraph with drop cap and custom styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:paragraph {
  "dropCap":true,
  "fontSize":"medium",
  "className":"intro-paragraph",
  "style": {
    "spacing": {
      "margin": {"bottom": "var:preset|spacing|60"}
    },
    "typography": {
      "lineHeight": "1.7"
    }
  }
} -->
<p class="has-drop-cap has-medium-font-size intro-paragraph" 
   style="line-height:1.7;
          margin-bottom:var(--wp--preset--spacing--60)">
  Welcome to our comprehensive guide on mastering 
  WordPress block development. In this article, we'll 
  explore the fundamental concepts and advanced 
  techniques that will transform your approach to 
  content creation.
</p>
<!-- /wp:paragraph -->`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Call-to-Action Text</CardTitle>
              <CardDescription>
                Styled paragraph for conversions and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:paragraph {
  "align":"center",
  "fontSize":"large",
  "className":"cta-text",
  "style": {
    "color": {
      "text": "#ffffff"
    },
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50"
      }
    },
    "typography": {
      "fontWeight": "600"
    }
  },
  "backgroundColor":"primary"
} -->
<p class="has-text-align-center has-large-font-size 
   has-primary-background-color has-background cta-text" 
   style="color:#ffffff;
          font-weight:600;
          padding-top:var(--wp--preset--spacing--50);
          padding-bottom:var(--wp--preset--spacing--50)">
  Ready to transform your business? 
  <strong>Get started today</strong> and see the difference.
</p>
<!-- /wp:paragraph -->`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Guidelines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Accessibility className="mr-2 h-5 w-5 text-green-500" />
          Content & Accessibility Guidelines
        </h2>

        <div className="space-y-4">
          <Card className="bg-green-500/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                <Accessibility className="mr-2 h-5 w-5" />
                Writing Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Keep paragraphs concise (3-4 sentences max for web)</li>
                <li>
                  • Use clear, simple language appropriate for your audience
                </li>
                <li>• Ensure good color contrast for text readability</li>
                <li>• Break up long content with headings and white space</li>
                <li>• Write descriptive link text instead of "click here"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Type className="mr-2 h-5 w-5" />
                Typography Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Maintain consistent line height (1.5-1.6 is ideal)</li>
                <li>• Use theme font sizes when possible for consistency</li>
                <li>• Limit the use of drop caps to special content</li>
                <li>• Test readability on mobile devices</li>
                <li>
                  • Consider font weight and letter spacing for readability
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Common Issues */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
          Common Issues & Solutions
        </h2>

        <div className="space-y-4">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <AlertCircle className="mr-2 h-5 w-5" />
                Formatting Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Drop cap styles vary greatly between themes</li>
                <li>• Some themes override paragraph margins and spacing</li>
                <li>• Pasted content may include unwanted formatting</li>
                <li>• Link colors might not match your design system</li>
                <li>• Custom font sizes may not be responsive</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Lightbulb className="mr-2 h-5 w-5" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Use "Paste as plain text" to avoid formatting issues</li>
                <li>• Create reusable paragraph styles with CSS classes</li>
                <li>• Use spacing presets instead of custom margins</li>
                <li>• Test your content with screen readers</li>
                <li>
                  • Consider using the Spacer block instead of empty paragraphs
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Properties Reference */}
      <div className="space-y-4">
        <Separator />
        <PropertiesReference
          blockType="paragraph"
          title="Paragraph Block Properties"
          description="Complete reference of all properties available to the Paragraph block, including universal block properties and Paragraph-specific attributes"
        />
      </div>

      {/* Related Blocks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Related Blocks
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Heading Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Semantic headings for content structure
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
                Blockquotes and citations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
