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
  CheckCircle,
  Target,
  Zap,
  Code,
  Accessibility,
  Search,
  Lightbulb,
  Shield,
  Palette,
  Smartphone,
} from "lucide-react";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";

export default function BestPractices() {
  const bestPracticesSchema = generateDocumentationSchema(
    "WordPress Best Practices - Complete HTML Markup Guide & Examples",
    "Master WordPress best practices with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML.",
    "https://wpblockdocs.com/best-practices",
    "WordPress Block Documentation",
    [
      "WordPress best practices",
      "WordPress block best practices",
      "WordPress block theme best practices",
      "WordPress block theme best practices",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress Best Practices - Complete HTML Markup Guide & Examples"
        description="Master WordPress best practices with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML."
        keywords="WordPress best practices, WordPress block best practices, WordPress block theme best practices, WordPress block theme best practices"
        canonical="/best-practices"
        ogType="article"
        schema={[bestPracticesSchema]}
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-green-500/20">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-0">
              Best Practices
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Follow these proven best practices to create maintainable,
            accessible, and performant WordPress block themes. These guidelines
            will help you avoid common pitfalls and build sites that work well
            for everyone.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-500 border-green-500/30"
            >
              Best Practices
            </Badge>
            <Badge variant="outline">Performance</Badge>
            <Badge variant="outline">Accessibility</Badge>
            <Badge variant="outline">SEO</Badge>
          </div>
        </div>

        <Separator />

        {/* Block Structure & Semantic HTML */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Code className="mr-2 h-5 w-5 text-neon-blue" />
            Block Structure & Semantic HTML
          </h2>

          <div className="space-y-6">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Use Semantic HTML Elements
                </CardTitle>
                <CardDescription>
                  Choose the right HTML tags for better accessibility and SEO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      ✅ Good Practice
                    </h4>
                    <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <WPBlockCodeBlock
                        code={`<!-- wp:group {"tagName":"section"} -->
<section class="wp-block-group">
  <!-- wp:heading {"level":2} -->
  <h2 class="wp-block-heading">Article Title</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Article content...</p>
  <!-- /wp:paragraph -->
</section>
<!-- /wp:group -->`}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                      ❌ Avoid This
                    </h4>
                    <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <WPBlockCodeBlock
                        code={`<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading {"level":1} -->
  <h1 class="wp-block-heading">Article Title</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Article content...</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->`}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use appropriate semantic elements like{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">
                    &lt;section&gt;
                  </code>
                  ,{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">
                    &lt;article&gt;
                  </code>
                  ,{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">
                    &lt;nav&gt;
                  </code>
                  , and{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">
                    &lt;main&gt;
                  </code>{" "}
                  through the Group block's tagName attribute.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Target className="mr-2 h-5 w-5" />
                  Proper Heading Hierarchy
                </CardTitle>
                <CardDescription>
                  Maintain logical document outline for accessibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:heading {"level":1} -->
<h1>Page Title</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":2} -->
<h2>Main Section</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>Subsection</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3>Another Subsection</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":2} -->
<h2>Another Main Section</h2>
<!-- /wp:heading -->`}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Never skip heading levels (h1 → h3) and use only one h1 per
                  page for optimal SEO and accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Best Practices */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Zap className="mr-2 h-5 w-5 text-yellow-500" />
            Performance Best Practices
          </h2>

          <div className="space-y-6">
            <Card className="bg-yellow-500/10 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Optimize Images and Media
                </CardTitle>
                <CardDescription>
                  Improve loading times with proper image handling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      ✅ Optimized Image Block
                    </h4>
                    <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <WPBlockCodeBlock
                        code={`<!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large">
  <img src="example-1024x768.webp" 
       alt="Descriptive alt text for accessibility"
       class="wp-image-123" 
       width="1024" 
       height="768"
       loading="lazy" />
</figure>
<!-- /wp:image -->`}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                      ⚠️ Considerations
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        • Use appropriate image sizes (large, medium, thumbnail)
                      </li>
                      <li>• Always include descriptive alt text</li>
                      <li>• Prefer WebP format when supported</li>
                      <li>• Enable lazy loading for below-fold images</li>
                      <li>
                        • Set explicit width/height to prevent layout shift
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600 dark:text-purple-400">
                  <Code className="mr-2 h-5 w-5" />
                  Minimize Inline Styles
                </CardTitle>
                <CardDescription>
                  Use CSS classes instead of inline styles when possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      ✅ CSS Classes (Preferred)
                    </h4>
                    <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <WPBlockCodeBlock
                        code={`<!-- wp:group {"className":"hero-section"} -->
<div class="wp-block-group hero-section">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                      ⚠️ Inline Styles (When Necessary)
                    </h4>
                    <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                      <WPBlockCodeBlock
                        code={`<!-- wp:group {"style":{"spacing":{"padding":"2rem"}}} -->
<div class="wp-block-group" style="padding:2rem">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prefer CSS classes for reusable styles. Use inline styles
                  sparingly for unique, one-off customizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accessibility Best Practices */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Accessibility className="mr-2 h-5 w-5 text-blue-500" />
            Accessibility Best Practices
          </h2>

          <div className="space-y-6">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Shield className="mr-2 h-5 w-5" />
                  Focus Management and Navigation
                </CardTitle>
                <CardDescription>
                  Ensure keyboard navigation and screen reader compatibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:navigation {"className":"skip-link-target"} -->
<nav class="wp-block-navigation skip-link-target" aria-label="Main navigation">
  <!-- wp:navigation-link {"label":"Home","url":"/"} -->
  <a class="wp-block-navigation-item__content" href="/">Home</a>
  <!-- /wp:navigation-link -->
  
  <!-- wp:navigation-link {"label":"About","url":"/about"} -->
  <a class="wp-block-navigation-item__content" href="/about">About</a>
  <!-- /wp:navigation-link -->
</nav>
<!-- /wp:navigation -->`}
                  />
                </div>
                <ul className="text-sm space-y-2">
                  <li>
                    • Always provide descriptive aria-labels for navigation
                  </li>
                  <li>• Implement skip links for keyboard users</li>
                  <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
                  <li>
                    • Test with screen readers and keyboard-only navigation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Palette className="mr-2 h-5 w-5" />
                  Color and Typography
                </CardTitle>
                <CardDescription>
                  Ensure readable and accessible design choices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      Color Contrast Guidelines
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Normal text: 4.5:1 contrast ratio</li>
                      <li>• Large text (18pt+): 3:1 contrast ratio</li>
                      <li>• Don't rely on color alone for meaning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Typography Best Practices
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Minimum 16px font size for body text</li>
                      <li>• 1.4-1.6 line-height for readability</li>
                      <li>• 45-75 characters per line optimal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile & Responsive Design */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Smartphone className="mr-2 h-5 w-5 text-purple-500" />
            Mobile & Responsive Design
          </h2>

          <div className="space-y-6">
            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600 dark:text-purple-400">
                  <Target className="mr-2 h-5 w-5" />
                  Mobile-First Approach
                </CardTitle>
                <CardDescription>
                  Design for mobile devices first, then enhance for larger
                  screens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:columns {"className":"mobile-stack"} -->
<div class="wp-block-columns mobile-stack">
  <!-- wp:column {"width":"66.66%"} -->
  <div class="wp-block-column" style="flex-basis:66.66%">
    <!-- Main content -->
  </div>
  <!-- /wp:column -->
  
  <!-- wp:column {"width":"33.33%"} -->
  <div class="wp-block-column" style="flex-basis:33.33%">
    <!-- Sidebar content -->
  </div>
  <!-- /wp:column -->
</div>
<!-- /wp:columns -->`}
                  />
                </div>
                <ul className="text-sm space-y-2">
                  <li>
                    • Test on actual mobile devices, not just browser tools
                  </li>
                  <li>• Ensure touch targets are at least 44px × 44px</li>
                  <li>• Optimize for thumb navigation on mobile</li>
                  <li>• Consider data usage and loading speed on mobile</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Best Practices */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Search className="mr-2 h-5 w-5 text-green-500" />
            SEO Best Practices
          </h2>

          <div className="space-y-6">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Code className="mr-2 h-5 w-5" />
                  Structured Data and Schema
                </CardTitle>
                <CardDescription>
                  Help search engines understand your content structure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:group {"tagName":"article"} -->
<article class="wp-block-group">
  <!-- wp:heading {"level":1} -->
  <h1 class="wp-block-heading">Article Title</h1>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph {"className":"article-meta"} -->
  <p class="article-meta">
    Published on <time datetime="2024-01-15">January 15, 2024</time>
  </p>
  <!-- /wp:paragraph -->
  
  <!-- Article content -->
</article>
<!-- /wp:group -->`}
                  />
                </div>
                <ul className="text-sm space-y-2">
                  <li>
                    • Use semantic HTML5 elements (article, section, time)
                  </li>
                  <li>• Include proper meta descriptions and titles</li>
                  <li>• Implement structured data for rich snippets</li>
                  <li>• Optimize URL structure and internal linking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Quick Reference Checklist
          </h2>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Before Publishing</CardTitle>
              <CardDescription>
                Essential checks for every WordPress block theme page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                    Technical Checklist
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Proper heading hierarchy (h1 → h2 → h3)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Semantic HTML elements used correctly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>All images have descriptive alt text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Color contrast meets WCAG guidelines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Responsive design tested on mobile</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                    Performance Checklist
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Images optimized for web (WebP when possible)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Minimal use of inline styles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Lazy loading enabled for below-fold content</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>CSS classes used for reusable styles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Page loads quickly on mobile networks</span>
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
