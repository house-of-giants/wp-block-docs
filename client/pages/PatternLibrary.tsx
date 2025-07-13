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
  Eye,
  Palette,
  Layout,
  Zap,
  Star,
  Download,
} from "lucide-react";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";

export default function PatternLibrary() {
  const patternLibrarySchema = generateDocumentationSchema(
    "WordPress Pattern Library - Complete HTML Markup Guide & Examples",
    "Master WordPress pattern library markup with comprehensive examples, attributes, and best practices. Learn how to create production-ready block patterns for your WordPress block themes.",
    "https://wpblockdocs.com/pattern-library",
    "WordPress Block Documentation",
    [
      "WordPress pattern library",
      "WordPress pattern library markup",
      "WordPress pattern library best practices",
      "WordPress pattern library examples",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress Pattern Library - Complete HTML Markup Guide & Examples"
        description="Master WordPress pattern library markup with comprehensive examples, attributes, and best practices. Learn how to create production-ready block patterns for your WordPress block themes."
        keywords="WordPress pattern library, WordPress pattern library markup, WordPress pattern library best practices, WordPress pattern library examples"
        canonical="/pattern-library"
        ogType="article"
        schema={[patternLibrarySchema]}
      />
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
                <WPBlockCodeBlock
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
                <WPBlockCodeBlock
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
              <WPBlockCodeBlock
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
                <WPBlockCodeBlock
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
                <WPBlockCodeBlock
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
          <div className="grid lg:grid-cols-1 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      Three-Tier Pricing Table
                    </CardTitle>
                    <CardDescription>
                      Complete pricing section with features comparison and
                      popular badge
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
                <WPBlockCodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Pricing Table - 3 Tier",
    "categories": ["pricing", "comparison"]
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
    Choose Your Plan
  </h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
  <p class="has-text-align-center has-medium-font-size">
    Select the perfect plan for your needs. Upgrade or downgrade at any time.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:columns {"columnCount":3,"className":"pricing-table"} -->
  <div class="wp-block-columns pricing-table">

    <!-- Starter Plan -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"pricing-card","style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}}} -->
      <div class="wp-block-group pricing-card has-background"
           style="border-radius:12px;padding:var(--wp--preset--spacing--50) var(--wp--preset--spacing--40)">

        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Starter
        </h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          Perfect for personal projects
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"huge","style":{"typography":{"fontWeight":"700"}}} -->
        <p class="has-text-align-center has-huge-font-size" style="font-weight:700">
          $9<span style="font-size:0.5em;font-weight:400">/month</span>
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:list {"className":"pricing-features"} -->
        <ul class="wp-block-list pricing-features">
          <!-- wp:list-item -->
          <li>✅ 5 Block Themes</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Basic Support</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Pattern Library Access</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>❌ Premium Patterns</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>❌ Priority Support</li>
          <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->

        <!-- wp:button {"width":100,"className":"is-style-outline"} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline">
          <a class="wp-block-button__link wp-element-button" href="/pricing/starter">
            Get Started
          </a>
        </div>
        <!-- /wp:button -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Pro Plan (Popular) -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"pricing-card popular","style":{"border":{"radius":"12px","color":"var:preset|color|primary","width":"2px"},"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}}} -->
      <div class="wp-block-group pricing-card popular has-background"
           style="border-radius:12px;border-color:var(--wp--preset--color--primary);border-width:2px;padding:var(--wp--preset--spacing--50) var(--wp--preset--spacing--40)">

        <!-- Popular Badge -->
        <!-- wp:paragraph {"align":"center","fontSize":"small","className":"popular-badge","style":{"color":{"background":"var:preset|color|primary","text":"var:preset|color|base"},"spacing":{"padding":{"top":"0.25rem","bottom":"0.25rem","left":"0.75rem","right":"0.75rem"}},"border":{"radius":"20px"}}} -->
        <p class="has-text-align-center has-small-font-size popular-badge has-base-color has-primary-background-color has-text-color has-background"
           style="border-radius:20px;padding:0.25rem 0.75rem">
          Most Popular
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Pro
        </h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          Best for growing businesses
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"huge","style":{"typography":{"fontWeight":"700"}}} -->
        <p class="has-text-align-center has-huge-font-size" style="font-weight:700">
          $29<span style="font-size:0.5em;font-weight:400">/month</span>
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:list {"className":"pricing-features"} -->
        <ul class="wp-block-list pricing-features">
          <!-- wp:list-item -->
          <li>✅ Unlimited Block Themes</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Priority Support</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ All Pattern Libraries</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Premium Patterns</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Advanced Tools</li>
          <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->

        <!-- wp:button {"width":100,"style":{"color":{"background":"var:preset|color|primary"}}} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100">
          <a class="wp-block-button__link wp-element-button has-primary-background-color has-background" href="/pricing/pro">
            Start Free Trial
          </a>
        </div>
        <!-- /wp:button -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Enterprise Plan -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"pricing-card","style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}}} -->
      <div class="wp-block-group pricing-card has-background"
           style="border-radius:12px;padding:var(--wp--preset--spacing--50) var(--wp--preset--spacing--40)">

        <!-- wp:heading {"textAlign":"center","level":3} -->
        <h3 class="wp-block-heading has-text-align-center">
          Enterprise
        </h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size">
          For large teams and agencies
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","fontSize":"huge","style":{"typography":{"fontWeight":"700"}}} -->
        <p class="has-text-align-center has-huge-font-size" style="font-weight:700">
          $99<span style="font-size:0.5em;font-weight:400">/month</span>
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:list {"className":"pricing-features"} -->
        <ul class="wp-block-list pricing-features">
          <!-- wp:list-item -->
          <li>✅ Everything in Pro</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Custom Development</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ White Label Options</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ Dedicated Support</li>
          <!-- /wp:list-item -->

          <!-- wp:list-item -->
          <li>✅ SLA Guarantee</li>
          <!-- /wp:list-item -->
        </ul>
        <!-- /wp:list -->

        <!-- wp:button {"width":100,"className":"is-style-outline"} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline">
          <a class="wp-block-button__link wp-element-button" href="/contact">
            Contact Sales
          </a>
        </div>
        <!-- /wp:button -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->

</section>
<!-- /wp:group -->`}
                  
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Three Columns
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Popular Badge
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Feature Lists
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Different CTAs
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cta" className="space-y-6 mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-neon-blue" />
                      Newsletter Signup
                    </CardTitle>
                    <CardDescription>
                      Email capture section with compelling copy and form
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
                <WPBlockCodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Newsletter CTA",
    "categories": ["cta", "newsletter"]
  },
  "align": "full",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|60",
        "bottom": "var:preset|spacing|60"
      }
    },
    "color": {
      "background": "var:preset|color|primary"
    }
  }
} -->
<section class="wp-block-group alignfull has-primary-background-color has-background"
         style="padding-top:var(--wp--preset--spacing--60);
                padding-bottom:var(--wp--preset--spacing--60)">

  <!-- wp:group {"layout":{"type":"constrained","contentSize":"600px"}} -->
  <div class="wp-block-group">

    <!-- wp:heading {"textAlign":"center","level":2,"textColor":"base"} -->
    <h2 class="wp-block-heading has-text-align-center has-base-color">
      Stay Updated with WordPress Trends
    </h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"base","fontSize":"medium"} -->
    <p class="has-text-align-center has-base-color has-medium-font-size">
      Get the latest block patterns, themes, and WordPress development
      tips delivered straight to your inbox. No spam, unsubscribe anytime.
    </p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
    <div class="wp-block-group">

      <!-- Email Input (Note: Use actual form in production) -->
      <!-- wp:paragraph {"className":"email-input-placeholder","style":{"spacing":{"padding":{"top":"0.75rem","bottom":"0.75rem","left":"1rem","right":"1rem"}},"border":{"radius":"6px"},"color":{"background":"var:preset|color|base"}}} -->
      <p class="email-input-placeholder has-base-background-color has-background"
         style="border-radius:6px;padding:0.75rem 1rem">
        your@email.com
      </p>
      <!-- /wp:paragraph -->

      <!-- wp:button {"className":"newsletter-submit"} -->
      <div class="wp-block-button newsletter-submit">
        <a class="wp-block-button__link wp-element-button" href="#subscribe">
          Subscribe
        </a>
      </div>
      <!-- /wp:button -->

    </div>
    <!-- /wp:group -->

    <!-- wp:paragraph {"align":"center","fontSize":"small","textColor":"base","style":{"color":{"text":"rgba(255,255,255,0.8)"}}} -->
    <p class="has-text-align-center has-small-font-size"
       style="color:rgba(255,255,255,0.8)">
      Join 10,000+ developers already subscribed
    </p>
    <!-- /wp:paragraph -->

  </div>
  <!-- /wp:group -->

</section>
<!-- /wp:group -->`}
                  
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Email Capture
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Social Proof
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Flex Layout
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Free Trial CTA</CardTitle>
                    <CardDescription>
                      Conversion-focused section with urgency and benefits
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
                <WPBlockCodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Free Trial CTA",
    "categories": ["cta", "conversion"]
  },
  "className": "trial-cta",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|70",
        "bottom": "var:preset|spacing|70"
      }
    },
    "border": {
      "radius": "16px"
    },
    "color": {
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  }
} -->
<section class="wp-block-group trial-cta has-background"
         style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius:16px;
                padding-top:var(--wp--preset--spacing--70);
                padding-bottom:var(--wp--preset--spacing--70)">

  <!-- wp:group {"layout":{"type":"constrained","contentSize":"700px"}} -->
  <div class="wp-block-group">

    <!-- wp:heading {"textAlign":"center","level":2,"fontSize":"x-large","textColor":"base"} -->
    <h2 class="wp-block-heading has-text-align-center has-x-large-font-size has-base-color">
      Ready to Transform Your WordPress Development?
    </h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"base","fontSize":"medium"} -->
    <p class="has-text-align-center has-base-color has-medium-font-size">
      Start your 14-day free trial today. No credit card required.
      Cancel anytime. Join thousands of developers already building better sites.
    </p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">

      <!-- wp:button {"className":"trial-primary","style":{"color":{"background":"var:preset|color|base","text":"var:preset|color|primary"},"typography":{"fontWeight":"600"},"spacing":{"padding":{"top":"1rem","bottom":"1rem","left":"2rem","right":"2rem"}}}} -->
      <div class="wp-block-button trial-primary">
        <a class="wp-block-button__link wp-element-button has-primary-color has-base-background-color has-text-color has-background"
           style="font-weight:600;padding:1rem 2rem"
           href="/start-trial">
          Start Free Trial
        </a>
      </div>
      <!-- /wp:button -->

      <!-- wp:button {"className":"is-style-outline trial-secondary","textColor":"base"} -->
      <div class="wp-block-button is-style-outline trial-secondary">
        <a class="wp-block-button__link wp-element-button has-base-color" href="/demo">
          Watch Demo
        </a>
      </div>
      <!-- /wp:button -->

    </div>
    <!-- /wp:buttons -->

    <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"center"}} -->
    <div class="wp-block-group">

      <!-- wp:paragraph {"fontSize":"small","textColor":"base","style":{"color":{"text":"rgba(255,255,255,0.9)"}}} -->
      <p class="has-small-font-size" style="color:rgba(255,255,255,0.9)">
        ✅ 14-day free trial
      </p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"fontSize":"small","textColor":"base","style":{"color":{"text":"rgba(255,255,255,0.9)"}}} -->
      <p class="has-small-font-size" style="color:rgba(255,255,255,0.9)">
        ✅ No credit card required
      </p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"fontSize":"small","textColor":"base","style":{"color":{"text":"rgba(255,255,255,0.9)"}}} -->
      <p class="has-small-font-size" style="color:rgba(255,255,255,0.9)">
        ✅ Cancel anytime
      </p>
      <!-- /wp:paragraph -->

    </div>
    <!-- /wp:group -->

  </div>
  <!-- /wp:group -->

</section>
<!-- /wp:group -->`}
                  
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Gradient Background
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Multiple CTAs
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Trust Signals
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6 mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Layout className="mr-2 h-4 w-4 text-neon-pink" />
                      Blog Post Layout
                    </CardTitle>
                    <CardDescription>
                      Article layout with sidebar, meta information, and content
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
                <WPBlockCodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Blog Post Layout",
    "categories": ["content", "blog"]
  },
  "tagName": "article",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|80"
      }
    }
  }
} -->
<article class="wp-block-group"
         style="padding-top:var(--wp--preset--spacing--50);
                padding-bottom:var(--wp--preset--spacing--80)">

  <!-- wp:columns {"className":"blog-layout"} -->
  <div class="wp-block-columns blog-layout">

    <!-- Main Content -->
    <!-- wp:column {"width":"70%"} -->
    <div class="wp-block-column" style="flex-basis:70%">

      <!-- Article Header -->
      <!-- wp:group {"className":"article-header"} -->
      <div class="wp-block-group article-header">

        <!-- wp:paragraph {"fontSize":"small","className":"post-meta"} -->
        <p class="has-small-font-size post-meta">
          <time datetime="2024-01-15">January 15, 2024</time> •
          <span>By John Doe</span> •
          <span>5 min read</span>
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"level":1} -->
        <h1 class="wp-block-heading">
          The Complete Guide to WordPress Block Development
        </h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"className":"post-excerpt","fontSize":"medium"} -->
        <p class="post-excerpt has-medium-font-size">
          Learn everything you need to know about building custom WordPress
          blocks from scratch, including best practices and real-world examples.
        </p>
        <!-- /wp:paragraph -->

      </div>
      <!-- /wp:group -->

      <!-- Featured Image -->
      <!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"featured-image"} -->
      <figure class="wp-block-image size-large featured-image">
        <img src="/blog-featured-image.jpg"
             alt="WordPress block development illustration" />
      </figure>
      <!-- /wp:image -->

      <!-- Article Content -->
      <!-- wp:group {"className":"article-content"} -->
      <div class="wp-block-group article-content">

        <!-- wp:paragraph {"dropCap":true} -->
        <p class="has-drop-cap">
          WordPress block development has revolutionized how we build websites.
          In this comprehensive guide, we'll explore everything from basic
          concepts to advanced techniques.
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"level":2} -->
        <h2 class="wp-block-heading">
          Getting Started with Block Development
        </h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph -->
        <p>
          The WordPress block editor, also known as Gutenberg, provides a
          powerful framework for creating rich, interactive content...
        </p>
        <!-- /wp:paragraph -->

        <!-- wp:quote -->
        <blockquote class="wp-block-quote">
          <p>"The future of WordPress is blocks. Understanding how to create
          and customize them is essential for modern web development."</p>
          <cite>WordPress Core Team</cite>
        </blockquote>
        <!-- /wp:quote -->

      </div>
      <!-- /wp:group -->

    </div>
    <!-- /wp:column -->

    <!-- Sidebar -->
    <!-- wp:column {"width":"30%"} -->
    <div class="wp-block-column" style="flex-basis:30%">

      <!-- wp:group {"className":"sidebar sticky-sidebar"} -->
      <div class="wp-block-group sidebar sticky-sidebar">

        <!-- Author Bio -->
        <!-- wp:group {"className":"author-bio"} -->
        <div class="wp-block-group author-bio">

          <!-- wp:heading {"level":3,"fontSize":"medium"} -->
          <h3 class="wp-block-heading has-medium-font-size">
            About the Author
          </h3>
          <!-- /wp:heading -->

          <!-- wp:image {"width":80,"height":80,"sizeSlug":"thumbnail","className":"is-style-rounded"} -->
          <figure class="wp-block-image size-thumbnail is-resized is-style-rounded">
            <img src="/author-avatar.jpg" alt="John Doe" width="80" height="80"/>
          </figure>
          <!-- /wp:image -->

          <!-- wp:paragraph {"fontSize":"small"} -->
          <p class="has-small-font-size">
            John is a senior WordPress developer with 10+ years of experience
            building custom themes and plugins.
          </p>
          <!-- /wp:paragraph -->

        </div>
        <!-- /wp:group -->

        <!-- Related Posts -->
        <!-- wp:group {"className":"related-posts"} -->
        <div class="wp-block-group related-posts">

          <!-- wp:heading {"level":3,"fontSize":"medium"} -->
          <h3 class="wp-block-heading has-medium-font-size">
            Related Articles
          </h3>
          <!-- /wp:heading -->

          <!-- wp:list {"className":"related-list"} -->
          <ul class="wp-block-list related-list">
            <!-- wp:list-item -->
            <li><a href="/article-1">WordPress Security Best Practices</a></li>
            <!-- /wp:list-item -->

            <!-- wp:list-item -->
            <li><a href="/article-2">Building Your First Block Theme</a></li>
            <!-- /wp:list-item -->

            <!-- wp:list-item -->
            <li><a href="/article-3">Advanced Gutenberg Techniques</a></li>
            <!-- /wp:list-item -->
          </ul>
          <!-- /wp:list -->

        </div>
        <!-- /wp:group -->

      </div>
      <!-- /wp:group -->

    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->

</article>
<!-- /wp:group -->`}
                  
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Sidebar Layout
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Author Bio
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Related Posts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Drop Cap
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Portfolio Grid</CardTitle>
                    <CardDescription>
                      Showcase work with image gallery and project details
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
                <WPBlockCodeBlock
                  code={`<!-- wp:group {
  "metadata": {
    "name": "Portfolio Grid",
    "categories": ["content", "portfolio"]
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
    Recent Projects
  </h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
  <p class="has-text-align-center has-medium-font-size">
    A selection of our latest work across web design, development, and branding.
  </p>
  <!-- /wp:paragraph -->

  <!-- wp:columns {"columnCount":3,"className":"portfolio-grid"} -->
  <div class="wp-block-columns portfolio-grid">

    <!-- Project 1 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"portfolio-item"} -->
      <div class="wp-block-group portfolio-item">

        <!-- wp:image {"sizeSlug":"medium","linkDestination":"custom","className":"portfolio-image"} -->
        <figure class="wp-block-image size-medium portfolio-image">
          <a href="/project-1">
            <img src="/portfolio-1.jpg" alt="E-commerce redesign project" />
          </a>
        </figure>
        <!-- /wp:image -->

        <!-- wp:group {"className":"portfolio-content"} -->
        <div class="wp-block-group portfolio-content">

          <!-- wp:heading {"level":3,"fontSize":"medium"} -->
          <h3 class="wp-block-heading has-medium-font-size">
            <a href="/project-1">E-commerce Redesign</a>
          </h3>
          <!-- /wp:heading -->

          <!-- wp:paragraph {"fontSize":"small"} -->
          <p class="has-small-font-size">
            Complete redesign of online store with improved UX and conversion optimization.
          </p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"fontSize":"small","className":"project-tags"} -->
          <p class="has-small-font-size project-tags">
            <span class="tag">WordPress</span> •
            <span class="tag">WooCommerce</span> •
            <span class="tag">UI/UX</span>
          </p>
          <!-- /wp:paragraph -->

        </div>
        <!-- /wp:group -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Project 2 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"portfolio-item"} -->
      <div class="wp-block-group portfolio-item">

        <!-- wp:image {"sizeSlug":"medium","linkDestination":"custom","className":"portfolio-image"} -->
        <figure class="wp-block-image size-medium portfolio-image">
          <a href="/project-2">
            <img src="/portfolio-2.jpg" alt="Mobile app interface design" />
          </a>
        </figure>
        <!-- /wp:image -->

        <!-- wp:group {"className":"portfolio-content"} -->
        <div class="wp-block-group portfolio-content">

          <!-- wp:heading {"level":3,"fontSize":"medium"} -->
          <h3 class="wp-block-heading has-medium-font-size">
            <a href="/project-2">Mobile App Design</a>
          </h3>
          <!-- /wp:heading -->

          <!-- wp:paragraph {"fontSize":"small"} -->
          <p class="has-small-font-size">
            Native iOS and Android app design with focus on user experience.
          </p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"fontSize":"small","className":"project-tags"} -->
          <p class="has-small-font-size project-tags">
            <span class="tag">UI Design</span> •
            <span class="tag">Mobile</span> •
            <span class="tag">Prototyping</span>
          </p>
          <!-- /wp:paragraph -->

        </div>
        <!-- /wp:group -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- Project 3 -->
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"className":"portfolio-item"} -->
      <div class="wp-block-group portfolio-item">

        <!-- wp:image {"sizeSlug":"medium","linkDestination":"custom","className":"portfolio-image"} -->
        <figure class="wp-block-image size-medium portfolio-image">
          <a href="/project-3">
            <img src="/portfolio-3.jpg" alt="Brand identity design" />
          </a>
        </figure>
        <!-- /wp:image -->

        <!-- wp:group {"className":"portfolio-content"} -->
        <div class="wp-block-group portfolio-content">

          <!-- wp:heading {"level":3,"fontSize":"medium"} -->
          <h3 class="wp-block-heading has-medium-font-size">
            <a href="/project-3">Brand Identity</a>
          </h3>
          <!-- /wp:heading -->

          <!-- wp:paragraph {"fontSize":"small"} -->
          <p class="has-small-font-size">
            Complete brand identity system including logo, guidelines, and collateral.
          </p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"fontSize":"small","className":"project-tags"} -->
          <p class="has-small-font-size project-tags">
            <span class="tag">Branding</span> •
            <span class="tag">Logo Design</span> •
            <span class="tag">Print</span>
          </p>
          <!-- /wp:paragraph -->

        </div>
        <!-- /wp:group -->

      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

  </div>
  <!-- /wp:columns -->

</section>
<!-- /wp:group -->`}
                  
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Grid Layout
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Linked Images
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Project Tags
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Three Columns
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
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
    </>
  );
}
