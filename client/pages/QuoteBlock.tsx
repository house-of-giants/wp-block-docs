
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Quote,
  User,
  MessageSquare,
  Lightbulb,
  Type,
  Sparkles,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import {
  SEO,
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";

export default function QuoteBlock() {
  const quoteSchema = generateDocumentationSchema(
    "WordPress Quote Block - Blockquotes & Citations Guide",
    "Master WordPress Quote block for testimonials, blockquotes, and citations. Complete guide to quote styling, attribution, and semantic markup for better content presentation.",
    "https://wpblockdocs.com/quote",
    "WordPress Block Documentation",
    [
      "WordPress Quote block",
      "Blockquote WordPress",
      "WordPress testimonials",
      "Quote block styling",
      "Citation WordPress",
      "Quote attribution",
      "WordPress pullquote",
      "Quote block markup",
      "Semantic quotes",
      "WordPress quote formatting",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Quote Block", url: "https://wpblockdocs.com/quote" },
  ]);

  return (
    <>
      <SEO
        title="WordPress Quote Block - Blockquotes & Citations Guide"
        description="Master WordPress Quote block for testimonials, blockquotes, and citations. Complete guide to quote styling, attribution, and semantic markup for better content presentation and accessibility."
        keywords="WordPress Quote block, Blockquote WordPress, WordPress testimonials, Quote block styling, Citation WordPress, Quote attribution, WordPress pullquote"
        canonical="/quote"
        ogType="article"
        schema={[quoteSchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-neon-pink/20">
              <Quote className="h-6 w-6 text-neon-pink" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Quote Block</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The Quote block creates semantic blockquotes for testimonials,
            citations, and highlighted text. Perfect for adding emphasis and
            credibility to your content with proper attribution.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-neon-pink/20 text-neon-pink border-neon-pink/30"
            >
              Content Emphasis
            </Badge>
            <Badge variant="outline">Testimonials</Badge>
            <Badge variant="outline">Citations</Badge>
            <Badge variant="outline">Semantic HTML</Badge>
            <Badge variant="outline">Attribution</Badge>
          </div>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Quote className="mr-2 h-5 w-5 text-neon-pink" />
                Basic Quote
              </CardTitle>
              <CardDescription>
                Simple blockquote with optional citation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Perfect for Testimonials and Highlighted Content
                </span>
              </div>
              <WPBlockCodeBlock
                code={`<!-- wp:quote -->
<blockquote class="wp-block-quote">
  <!-- wp:paragraph -->
  <p>Great content has the power to inspire, inform, and connect people across the world.</p>
  <!-- /wp:paragraph -->
  
  <cite>Anonymous</cite>
</blockquote>
<!-- /wp:quote -->`}
                
              />
            </CardContent>
          </Card>
        </div>

        {/* Quote Variations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Quote Styles & Variations
          </h2>

          <Tabs defaultValue="large" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="large">Large Quote</TabsTrigger>
              <TabsTrigger value="styled">Styled Quote</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
              <TabsTrigger value="pullquote">Pull Quote</TabsTrigger>
            </TabsList>

            <TabsContent value="large" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Large Quote Style</CardTitle>
                  <CardDescription>
                    Emphasized quote with larger typography
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:quote {"className":"is-style-large"} -->
<blockquote class="wp-block-quote is-style-large">
  <!-- wp:paragraph -->
  <p>Design should never say, 'Look at me.' It should always say, 'Look at this.'</p>
  <!-- /wp:paragraph -->
  
  <cite>Anonymous</cite>
</blockquote>
<!-- /wp:quote -->`}
                    
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styled" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Styled Quote</CardTitle>
                  <CardDescription>
                    Quote with custom colors and typography
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:quote {
  "style":{
    "border":{
      "left":{
        "color":"var:preset|color|vivid-purple",
        "width":"4px"
      },
      "top":{},
      "right":{},
      "bottom":{}
    },
    "spacing":{
      "padding":{
        "left":"2rem",
        "top":"1rem",
        "bottom":"1rem"
      }
    },
    "color":{
      "background":"#f8fafc",
      "text":"#1e293b"
    },
    "typography":{
      "fontSize":"1.125rem",
      "fontStyle":"italic",
      "fontWeight":"600"
    }
  }
} -->
<blockquote class="wp-block-quote has-text-color has-background" 
  style="border-left-color:var(--wp--preset--color--vivid-purple);border-left-width:4px;color:#1e293b;background-color:#f8fafc;padding-top:1rem;padding-bottom:1rem;padding-left:2rem;font-size:1.125rem;font-style:italic;font-weight:600">
  <!-- wp:paragraph -->
    <p>Creativity is intelligence having fun.</p>
  <!-- /wp:paragraph -->
  <cite>Anonymous</cite>
</blockquote>
<!-- /wp:quote -->

`}
                    
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testimonial" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Customer Testimonial</CardTitle>
                  <CardDescription>
                    Structured testimonial with author details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:quote {
  "className": "testimonial-quote",
  "style": {
    "border": { "radius": "8px" },
    "spacing": { "padding": { "all": "2rem" } },
    "color": { "background": "#fefefe" }
  }
} -->
<blockquote class="wp-block-quote testimonial-quote has-background" style="border-radius:8px;background-color:#fefefe">
  <!-- wp:paragraph -->
  <p>This team delivered a fast, beautiful, and user-friendly website that exceeded our expectations.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
  <div class="wp-block-group">
    <!-- wp:image {"width":"60px","height":"60px","className":"testimonial-avatar"} -->
    <figure class="wp-block-image is-resized testimonial-avatar">
      <img src="/images/client-avatar.jpg" alt="Client" style="width:60px;height:60px"/>
    </figure>
    <!-- /wp:image -->
    
    <!-- wp:group -->
    <div class="wp-block-group"></div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</blockquote>
<!-- /wp:quote -->`}
                    
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pullquote" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Pull Quote Style</CardTitle>
                  <CardDescription>
                    Highlighted quote that stands out from main content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:quote {
  "align":"wide",
  "className":"is-style-pullquote",
  "style":{
    "typography":{
      "fontSize":"2rem",
      "lineHeight":"1.3",
      "fontWeight":"300",
      "fontStyle":"normal"
    },
    "color":{
      "text":"#3b82f6"
    },
    "spacing":{
      "margin":{"top":"3rem","bottom":"3rem"}
    }
  }
} -->
<blockquote class="wp-block-quote alignwide is-style-pullquote has-text-color" style="color:#3b82f6;font-size:2rem;font-weight:300;font-style:normal;line-height:1.3;margin-top:3rem;margin-bottom:3rem">
  <!-- wp:paragraph -->
  <p>Change is the end result of all true learning.</p>
  <!-- /wp:paragraph -->
  
  <cite>Anonymous</cite>
</blockquote>
<!-- /wp:quote -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Key Concepts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Quote Best Practices & Guidelines
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                      Semantic HTML Structure
                    </h3>
                    <p className="text-sm text-foreground">
                      Quote blocks generate proper &lt;blockquote&gt; and
                      &lt;cite&gt; elements. This semantic structure improves
                      SEO and helps search engines understand quoted content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">
                      Attribution Best Practices
                    </h3>
                    <p className="text-sm text-foreground">
                      Always include attribution using the &lt;cite&gt; element
                      for credibility. Include the person's name, title, and
                      organization when possible for better context.
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
                      Typography Considerations
                    </h3>
                    <p className="text-sm text-foreground">
                      Use larger font sizes and distinct styling to make quotes
                      stand out. Consider italic text, different colors, or
                      borders to visually separate quotes from body content.
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
                      Quote vs Pullquote
                    </h3>
                    <p className="text-sm text-foreground">
                      Use regular quotes for external citations and
                      testimonials. Use pullquotes (larger, centered) to
                      highlight key points from your own content.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Properties Reference */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Quote Properties
          </h2>
          <PropertiesReference blockType="quote" />
        </div>
      </div>
    </>
  );
}
