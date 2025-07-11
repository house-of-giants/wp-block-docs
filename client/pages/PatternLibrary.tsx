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
  Eye,
  Palette,
  Layout,
  Zap,
  Star,
  Download,
  Code,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

export default function PatternLibrary() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-pink/20">
            <Palette className="h-6 w-6 text-neon-pink" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Pattern Library
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Production-ready block patterns you can copy and paste directly into
          your WordPress block themes. Each pattern is optimized for
          performance, accessibility, and modern design principles.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-pink/20 text-neon-pink border-neon-pink/30"
          >
            Copy & Paste Ready
          </Badge>
          <Badge variant="outline">Responsive</Badge>
          <Badge variant="outline">Accessible</Badge>
          <Badge variant="outline">Performance Optimized</Badge>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="hero">Hero Sections</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="cta">Call-to-Action</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        {/* Hero Sections */}
        <TabsContent value="hero" className="space-y-6 mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Centered Hero with CTA
                    </CardTitle>
                    <CardDescription>
                      Clean, centered hero section with heading, description,
                      and call-to-action buttons
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Hero Section - Centered",
    "categories": ["hero", "landing"]
  },
  "align": "full",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|80",
        "bottom": "var:preset|spacing|80"
      }
    },
    "color": {
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  }
} -->
<section class="wp-block-group alignfull has-background"
         style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding-top:var(--wp--preset--spacing--80);
                padding-bottom:var(--wp--preset--spacing--80)">

  <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
  <div class="wp-block-group">
    
    <!-- wp:heading {"textAlign":"center","level":1,"fontSize":"huge"} -->
    <h1 class="wp-block-heading has-text-align-center has-huge-font-size">
      Build Amazing WordPress Sites
    </h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
    <p class="has-text-align-center has-large-font-size">
      The ultimate block theme toolkit for modern WordPress development. 
      Fast, flexible, and built for the future of the web.
    </p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button {"className":"is-style-fill"} -->
      <div class="wp-block-button is-style-fill">
        <a class="wp-block-button__link wp-element-button" href="/get-started">
          Get Started Free
        </a>
      </div>
      <!-- /wp:button -->
      
      <!-- wp:button {"className":"is-style-outline"} -->
      <div class="wp-block-button is-style-outline">
        <a class="wp-block-button__link wp-element-button" href="/demo">
          View Demo
        </a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
    
  </div>
  <!-- /wp:group -->
  
</section>
<!-- /wp:group -->`}
                  language="html"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Responsive
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Gradient Background
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Button Groups
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Split Hero with Image</CardTitle>
                    <CardDescription>
                      Two-column hero with content on left, image on right
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`<!-- wp:group {
  "align": "full",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|70",
        "bottom": "var:preset|spacing|70"
      }
    }
  }
} -->
<section class="wp-block-group alignfull"
         style="padding-top:var(--wp--preset--spacing--70);
                padding-bottom:var(--wp--preset--spacing--70)">

  <!-- wp:columns {"verticalAlignment":"center"} -->
  <div class="wp-block-columns are-vertically-aligned-center">
    
    <!-- wp:column {"verticalAlignment":"center","width":"60%"} -->
    <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:60%">
      
      <!-- wp:heading {"level":1,"fontSize":"x-large"} -->
      <h1 class="wp-block-heading has-x-large-font-size">
        The Future of WordPress Development
      </h1>
      <!-- /wp:heading -->
      
      <!-- wp:paragraph {"fontSize":"medium"} -->
      <p class="has-medium-font-size">
        Build lightning-fast, accessible websites with our comprehensive 
        block theme framework. No coding required.
      </p>
      <!-- /wp:paragraph -->
      
      <!-- wp:button -->
      <div class="wp-block-button">
        <a class="wp-block-button__link wp-element-button" href="/start">
          Start Building Today
        </a>
      </div>
      <!-- /wp:button -->
      
    </div>
    <!-- /wp:column -->
    
    <!-- wp:column {"verticalAlignment":"center","width":"40%"} -->
    <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%">
      
      <!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
      <figure class="wp-block-image size-large">
        <img src="/hero-image.jpg" alt="Modern WordPress dashboard" />
      </figure>
      <!-- /wp:image -->
      
    </div>
    <!-- /wp:column -->
    
  </div>
  <!-- /wp:columns -->
  
</section>
<!-- /wp:group -->`}
                  language="html"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Two Column
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Image + Text
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Vertical Alignment
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Features Section */}
        <TabsContent value="features" className="space-y-6 mt-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-neon-blue" />
                Three-Column Feature Grid
              </CardTitle>
              <CardDescription>
                Showcase key features with icons, headings, and descriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`<!-- wp:group {
  "metadata": {
    "name": "Features Grid - 3 Column",
    "categories": ["features", "grid"]
  },
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|60",
        "bottom": "var:preset|spacing|60"
      }
    }
  }
} -->
<section class="wp-block-group"
         style="padding-top:var(--wp--preset--spacing--60);
                padding-bottom:var(--wp--preset--spacing--60)">

  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="wp-block-heading has-text-align-center">
    Why Choose Our Platform
  </h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"columnCount":3} -->
  <div class="wp-block-columns">
    
    <!-- Feature 1 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"feature-card"} -->
      <div class="wp-block-group feature-card">
        
        <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
        <p class="has-text-align-center has-large-font-size">⚡</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Lightning Fast
        </h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          Optimized performance that loads in under 1 second. 
          Your visitors will love the speed.
        </p>
        <!-- /wp:paragraph -->
        
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
    
    <!-- Feature 2 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"feature-card"} -->
      <div class="wp-block-group feature-card">
        
        <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
        <p class="has-text-align-center has-large-font-size">🔒</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Secure by Default
        </h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          Built-in security features and best practices. 
          Sleep soundly knowing your site is protected.
        </p>
        <!-- /wp:paragraph -->
        
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
    
    <!-- Feature 3 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"feature-card"} -->
      <div class="wp-block-group feature-card">
        
        <!-- wp:paragraph {"align":"center","fontSize":"large"} -->
        <p class="has-text-align-center has-large-font-size">📱</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Mobile First
        </h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          Responsive design that looks perfect on every device, 
          from phones to desktops.
        </p>
        <!-- /wp:paragraph -->
        
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
    
  </div>
  <!-- /wp:columns -->
  
</section>
<!-- /wp:group -->`}
                language="html"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testimonials Section */}
        <TabsContent value="testimonials" className="space-y-6 mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Single Testimonial Card
                    </CardTitle>
                    <CardDescription>
                      Individual testimonial with quote, author, and photo
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Testimonial Card",
    "categories": ["testimonials", "social-proof"]
  },
  "className": "testimonial-card",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50",
        "left": "var:preset|spacing|40",
        "right": "var:preset|spacing|40"
      }
    },
    "border": {
      "radius": "12px"
    }
  },
  "backgroundColor": "base"
} -->
<div class="wp-block-group testimonial-card has-base-background-color has-background"
     style="border-radius:12px;
            padding:var(--wp--preset--spacing--50) var(--wp--preset--spacing--40)">

  <!-- wp:paragraph {"fontSize":"medium","style":{"typography":{"lineHeight":"1.6"}}} -->
  <p class="has-medium-font-size" style="line-height:1.6">
    "This platform completely transformed how we build WordPress sites.
    The block patterns are incredible and saved us weeks of development time."
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
  <div class="wp-block-group">

    <!-- wp:image {"width":60,"height":60,"sizeSlug":"thumbnail","linkDestination":"none","className":"is-style-rounded"} -->
    <figure class="wp-block-image size-thumbnail is-resized is-style-rounded">
      <img src="/testimonial-avatar.jpg"
           alt="Sarah Johnson, Lead Developer"
           width="60"
           height="60"/>
    </figure>
    <!-- /wp:image -->

    <!-- wp:group -->
    <div class="wp-block-group">

      <!-- wp:paragraph {"fontSize":"small","style":{"typography":{"fontWeight":"600"}}} -->
      <p class="has-small-font-size" style="font-weight:600">
        Sarah Johnson
      </p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"fontSize":"small","style":{"color":{"text":"var:preset|color|contrast-2"}}} -->
      <p class="has-small-font-size has-contrast-2-color">
        Lead Developer, TechCorp
      </p>
      <!-- /wp:paragraph -->

    </div>
    <!-- /wp:group -->

  </div>
  <!-- /wp:group -->

</div>
<!-- /wp:group -->`}
                  language="html"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Profile Image
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Flex Layout
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Custom Styling
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Testimonials Grid</CardTitle>
                    <CardDescription>
                      Three-column testimonials layout with star ratings
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Testimonials Grid",
    "categories": ["testimonials", "grid"]
  },
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|60",
        "bottom": "var:preset|spacing|60"
      }
    }
  }
} -->
<section class="wp-block-group"
         style="padding-top:var(--wp--preset--spacing--60);
                padding-bottom:var(--wp--preset--spacing--60)">

  <!-- wp:heading {"textAlign":"center","level":2} -->
  <h2 class="wp-block-heading has-text-align-center">
    What Our Customers Say
  </h2>
  <!-- /wp:heading -->

  <!-- wp:columns {"columnCount":3} -->
  <div class="wp-block-columns">

    <!-- Testimonial 1 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"testimonial-card"} -->
      <div class="wp-block-group testimonial-card">

        <!-- Star Rating -->
        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          ⭐⭐⭐⭐⭐
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          "Incredible tool that made our development process 10x faster.
          Highly recommended!"
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"typography":{"fontWeight":"600"}}} -->
        <p class="has-text-align-center has-small-font-size" style="font-weight:600">
          — Alex Chen, Designer
        </p>
        <!-- /wp:paragraph -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Testimonial 2 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"testimonial-card"} -->
      <div class="wp-block-group testimonial-card">

        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          ⭐⭐⭐⭐⭐
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          "The documentation is phenomenal. Everything I needed to know
          was right there."
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"typography":{"fontWeight":"600"}}} -->
        <p class="has-text-align-center has-small-font-size" style="font-weight:600">
          — Maria Rodriguez, Developer
        </p>
        <!-- /wp:paragraph -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Testimonial 3 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"testimonial-card"} -->
      <div class="wp-block-group testimonial-card">

        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          ⭐⭐⭐⭐⭐
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">
          "Best block theme toolkit I've used. Clean, fast,
          and incredibly well designed."
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"typography":{"fontWeight":"600"}}} -->
        <p class="has-text-align-center has-small-font-size" style="font-weight:600">
          — James Wilson, Agency Owner
        </p>
        <!-- /wp:paragraph -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->

</section>
<!-- /wp:group -->`}
                  language="html"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Star Ratings
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Three Columns
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Centered Text
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6 mt-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="py-8 text-center">
              <Code className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Pricing table patterns with various layouts and feature
                comparisons.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cta" className="space-y-6 mt-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="py-8 text-center">
              <Code className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Call-to-action patterns optimized for conversions and
                engagement.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6 mt-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="py-8 text-center">
              <Code className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Content layout patterns for blogs, portfolios, and editorial
                sites.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Usage Instructions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          How to Use These Patterns
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-500/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-400">
                Copy & Paste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Copy the HTML markup from any pattern above</li>
                <li>
                  Paste it into your WordPress block editor's "Code editor" view
                </li>
                <li>Switch back to visual editor to see the result</li>
                <li>Customize colors, text, and spacing as needed</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">
                Template Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>
                  Save patterns as .html files in your theme/patterns/ folder
                </li>
                <li>Add pattern headers for WordPress recognition</li>
                <li>Register patterns in your theme's functions.php</li>
                <li>Access via Patterns library in block editor</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
