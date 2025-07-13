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
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

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
                <PageHeader
          icon={CheckCircle}
          iconColor="text-green-500"
          iconBgColor="bg-green-500/20"
          title="Best Practices"
          description="Follow these proven best practices to create maintainable, accessible, and performant WordPress block themes. These guidelines will help you avoid common pitfalls and build sites that work well for everyone."
          badges={[
            {
              text: "Best Practices",
              variant: "secondary",
              className: "bg-green-500/20 text-green-500 border-green-500/30",
            },
            { text: "Performance" },
            { text: "Accessibility" },
            { text: "SEO" },
          ]}
        />

                <ContentSection
          title="Block Structure & Semantic HTML"
          icon={Code}
          iconColor="text-neon-blue"
                >

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
                    <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">
                      ❌ Avoid Generic Divs
                    </h4>
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {"tagName":"div"} -->
  <div class="wp-block-group">
    <div class="wp-block-group">
      <div>Navigation items</div>
    </div>
  </div>
  <!-- /wp:group -->`}
                      showCopy={false}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">
                      ✅ Use Semantic Elements
                    </h4>
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {"tagName":"nav"} -->
  <nav class="wp-block-group">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  <!-- /wp:group -->`}
                      showCopy={false}
                    />
                  </div>
                </div>
                <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    <Lightbulb className="inline h-4 w-4 mr-1" />
                    Always use appropriate HTML5 semantic elements: nav, main,
                    article, section, aside, header, footer
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Target className="mr-2 h-5 w-5" />
                  Logical Heading Hierarchy
                </CardTitle>
                <CardDescription>
                  Maintain proper heading order for accessibility and SEO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <WPBlockCodeBlock
                  code={`<!-- ✅ Proper hierarchy -->
  <!-- wp:heading {"level":1} -->
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
  <h2>Next Main Section</h2>
  <!-- /wp:heading -->`}
                />
                <ul className="space-y-1 text-sm">
                  <li>• Only one H1 per page</li>
                  <li>• Don't skip heading levels (H2 → H4)</li>
                  <li>• Use headings for structure, not styling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Zap className="mr-2 h-5 w-5 text-yellow-500" />
            Performance Optimization
          </h2>

          <div className="space-y-6">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Zap className="mr-2 h-5 w-5" />
                  Minimize Inline Styles
                </CardTitle>
                <CardDescription>
                  Use CSS classes instead of inline styles for better performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">
                      ❌ Excessive Inline Styles
                    </h4>
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {
    "style": {
      "spacing": {"padding": {"top": "2rem"}},
      "color": {"background": "#ff6b9d"},
      "border": {"radius": "8px"}
    }
  } -->`}
                      showCopy={false}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">
                      ✅ Reusable CSS Classes
                    </h4>
                    <WPBlockCodeBlock
                      code={`<!-- wp:group {"className":"hero-section"} -->
  <div class="wp-block-group hero-section">
    <!-- Styles defined in theme CSS -->
  </div>
  <!-- /wp:group -->`}
                      showCopy={false}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Optimize Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Always include descriptive alt text</li>
                  <li>
                    • Use appropriate image sizes (not full-size for thumbnails)
                  </li>
                  <li>• Consider WebP format for better compression</li>
                  <li>• Use WordPress's responsive image features (srcset)</li>
                  <li>• Lazy load images below the fold</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accessibility */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Accessibility className="mr-2 h-5 w-5 text-green-500" />
            Accessibility Excellence
          </h2>

          <div className="space-y-6">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Accessibility className="mr-2 h-5 w-5" />
                  Color Contrast & Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Contrast Requirements</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Normal text: 4.5:1 minimum</li>
                      <li>• Large text (18px+): 3:1 minimum</li>
                      <li>• UI components: 3:1 minimum</li>
                      <li>• Focus indicators: 3:1 minimum</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Typography Guidelines</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Minimum 16px font size for body text</li>
                      <li>• Line height 1.4-1.6 for readability</li>
                      <li>• Adequate letter spacing</li>
                      <li>• Avoid justified text</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Target className="mr-2 h-5 w-5" />
                  Interactive Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <WPBlockCodeBlock
                  code={`<!-- ✅ Accessible button with proper attributes -->
  <!-- wp:button {
    "url": "/contact",
    "title": "Contact us for more information"
  } -->
  <div class="wp-block-button">
    <a class="wp-block-button__link wp-element-button" 
      href="/contact"
      title="Contact us for more information">
      Get in Touch
    </a>
  </div>
  <!-- /wp:button -->`}
                />
                <ul className="space-y-1 text-sm">
                  <li>• Use descriptive link text (avoid "click here")</li>
                  <li>• Include title attributes for additional context</li>
                  <li>• Ensure touch targets are at least 44px</li>
                  <li>• Provide focus indicators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Best Practices */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Search className="mr-2 h-5 w-5 text-neon-cyan" />
            SEO Optimization
          </h2>

          <div className="space-y-6">
            <Card className="bg-cyan-500/10 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-cyan-600 dark:text-cyan-400">
                  <Search className="mr-2 h-5 w-5" />
                  Content Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>
                    • Use descriptive, keyword-rich headings that reflect content
                    hierarchy
                  </li>
                  <li>
                    • Include target keywords naturally in headings and content
                  </li>
                  <li>• Use anchor links for long-form content navigation</li>
                  <li>• Structure content with proper paragraph breaks</li>
                  <li>• Include internal links to related content</li>
                </ul>
                <WPBlockCodeBlock
                  code={`<!-- ✅ SEO-friendly heading with anchor -->
  <!-- wp:heading {
    "level": 2,
    "anchor": "wordpress-block-editor-guide"
  } -->
  <h2 id="wordpress-block-editor-guide">
    Complete WordPress Block Editor Guide
  </h2>
  <!-- /wp:heading -->`}
                />
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Image SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Use descriptive file names before uploading</li>
                  <li>
                    • Write meaningful alt text that describes the image content
                  </li>
                  <li>• Add captions when they add value</li>
                  <li>• Use structured data for important images</li>
                  <li>• Optimize image file sizes for faster loading</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile & Responsive Design */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Smartphone className="mr-2 h-5 w-5 text-neon-pink" />
            Mobile & Responsive Design
          </h2>

          <div className="space-y-6">
            <Card className="bg-pink-500/10 border-pink-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-600 dark:text-pink-400">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Mobile-First Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Content Considerations</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Test all blocks on mobile devices</li>
                      <li>• Ensure text remains readable at small sizes</li>
                      <li>• Check touch target sizes (44px minimum)</li>
                      <li>• Verify horizontal scrolling doesn't occur</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Layout Strategies</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Use flexible layouts (avoid fixed widths)</li>
                      <li>• Implement responsive spacing</li>
                      <li>• Stack columns appropriately on mobile</li>
                      <li>• Hide non-essential content when needed</li>
                    </ul>
                  </div>
                </div>
                <WPBlockCodeBlock
                  code={`/* Mobile-first responsive spacing */
  .custom-section {
    padding: 1rem; /* Mobile default */
  }

  @media (min-width: 768px) {
    .custom-section {
      padding: 2rem; /* Tablet and up */
    }
  }

  @media (min-width: 1024px) {
    .custom-section {
      padding: 4rem; /* Desktop */
    }
  }`}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security & Best Practices */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Shield className="mr-2 h-5 w-5 text-red-500" />
            Security Considerations
          </h2>

          <div className="space-y-6">
            <Card className="bg-red-500/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <Shield className="mr-2 h-5 w-5" />
                  Content Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Always use rel="noopener noreferrer" for external links
                  </li>
                  <li>• Validate and sanitize any user-generated content</li>
                  <li>• Avoid inline JavaScript in block content</li>
                  <li>• Use HTTPS for all external resources</li>
                  <li>• Regularly update WordPress and plugins</li>
                </ul>
                <WPBlockCodeBlock
                  code={`<!-- ✅ Secure external link -->
  <!-- wp:button {
    "url": "https://external-site.com",
    "linkTarget": "_blank",
    "rel": "noopener noreferrer"
  } -->
  <div class="wp-block-button">
    <a href="https://external-site.com" 
      target="_blank" 
      rel="noopener noreferrer">
      Visit External Site
    </a>
  </div>
  <!-- /wp:button -->`}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Development Workflow */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground flex items-center">
            <Palette className="mr-2 h-5 w-5 text-neon-purple" />
            Development Workflow
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-purple-600 dark:text-purple-400">
                  Version Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Keep customized templates in version control</li>
                  <li>• Document FSE customizations</li>
                  <li>• Test changes in staging environment</li>
                  <li>• Backup before major WordPress updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">
                  Testing Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Cross-browser compatibility</li>
                  <li>• Mobile responsiveness</li>
                  <li>• Accessibility with screen readers</li>
                  <li>• Page load performance</li>
                  <li>• SEO optimization checks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Quick Reference Checklist
          </h2>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="py-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    <CheckCircle className="inline h-4 w-4 mr-2 text-green-500" />
                    Content Structure
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>□ Proper heading hierarchy</li>
                    <li>□ Semantic HTML elements</li>
                    <li>□ Descriptive link text</li>
                    <li>□ Alt text for images</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    <Zap className="inline h-4 w-4 mr-2 text-yellow-500" />
                    Performance
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>□ Optimized images</li>
                    <li>□ Minimal inline styles</li>
                    <li>□ Fast loading times</li>
                    <li>□ Mobile performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    <Accessibility className="inline h-4 w-4 mr-2 text-green-500" />
                    Accessibility
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>□ Color contrast compliance</li>
                    <li>□ Keyboard navigation</li>
                    <li>□ Focus indicators</li>
                    <li>□ Screen reader testing</li>
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