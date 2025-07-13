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
  AlertTriangle,
  Bug,
  Zap,
  Code,
  Eye,
  Settings,
  Lightbulb,
  FileText,
  Layout,
  Smartphone,
} from "lucide-react";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";

export default function FSEQuirks() {
  const fseQuirksSchema = generateDocumentationSchema(
    "WordPress FSE Quirks - Complete HTML Markup Guide & Examples",
    "Master WordPress FSE quirks with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML.",
    "https://wpblockdocs.com/fse-quirks",
    "WordPress Block Documentation",
    [
      "WordPress FSE quirks",
      "WordPress FSE quirks markup",
      "WordPress FSE quirks best practices",
      "WordPress FSE quirks examples",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress FSE Quirks - Complete HTML Markup Guide & Examples"
        description="Master WordPress FSE quirks with comprehensive examples, attributes, and best practices. Learn how to create flexible layouts using Group blocks with custom styling and semantic HTML."
        keywords="WordPress FSE quirks, WordPress FSE quirks markup, WordPress FSE quirks best practices, WordPress FSE quirks examples"
        canonical="/fse-quirks"
        ogType="article"
        schema={[fseQuirksSchema]}
      />
      <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-yellow-500/20">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-0">FSE Quirks</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Full Site Editing (FSE) introduces powerful capabilities but also
          brings unique challenges and unexpected behaviors. This guide covers
          the most important quirks, gotchas, and workarounds you need to know
          when working with WordPress block themes and FSE features.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
          >
            Full Site Editing
          </Badge>
          <Badge variant="outline">Block Themes</Badge>
          <Badge variant="outline">Template Parts</Badge>
          <Badge variant="outline">Global Styles</Badge>
        </div>
      </div>

      <Separator />

      {/* Template Quirks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Layout className="mr-2 h-5 w-5 text-neon-pink" />
          Template & Template Part Quirks
        </h2>

        <div className="space-y-6">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <Bug className="mr-2 h-5 w-5" />
                Template Hierarchy Confusion
              </CardTitle>
              <CardDescription>
                FSE template hierarchy doesn't always follow traditional
                WordPress patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Block themes use a different template hierarchy that can be
                confusing for developers used to classic themes.
              </p>
              <WPBlockCodeBlock
                code={`<!-- Traditional expectation -->
single-product.php → single.php → index.php

<!-- FSE reality -->
single-product.html → single.html → index.html
↓ (but also...)
Customized templates in database override file-based templates`}
                
              />
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <Lightbulb className="inline h-4 w-4 mr-1" />
                  <strong>Workaround:</strong> Always check the Site Editor for
                  customized templates that might be overriding your theme
                  files.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Template Part Sync Issues
              </CardTitle>
              <CardDescription>
                Template parts don't always update consistently across the site
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Changes to template parts may not reflect immediately on all
                pages, or may show differently in the editor vs. frontend.
              </p>
              <WPBlockCodeBlock
                code={`<!-- Template part that might not sync -->
<!-- wp:template-part {"slug":"header","area":"header"} /-->

<!-- Sometimes requires clearing caches or editing the template part directly -->`}
                
              />
              <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                <p className="text-sm text-green-600 dark:text-green-400">
                  <Zap className="inline h-4 w-4 mr-1" />
                  <strong>Solution:</strong> Clear all caches, check for
                  customized template parts in the database, and sometimes
                  re-save the template part.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Global Styles Quirks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Settings className="mr-2 h-5 w-5 text-neon-blue" />
          Global Styles & Theme.json Quirks
        </h2>

        <div className="space-y-6">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <Bug className="mr-2 h-5 w-5" />
                CSS Custom Properties Conflicts
              </CardTitle>
              <CardDescription>
                WordPress generates CSS custom properties that can conflict with
                your theme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                WordPress auto-generates CSS custom properties from theme.json
                that might override your existing CSS variables.
              </p>
              <WPBlockCodeBlock
                code={`/* Your theme CSS */
:root {
  --wp--preset--color--primary: #your-color;
}

/* WordPress might generate */
:root {
  --wp--preset--color--primary: #theme-json-color; /* This wins */
}

/* Block markup */
<!-- wp:group {"backgroundColor":"primary"} -->
<div class="wp-block-group has-primary-background-color">
  <!-- Uses WordPress-generated value, not your CSS -->
</div>
<!-- /wp:group -->`}
                
              />
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <Lightbulb className="inline h-4 w-4 mr-1" />
                  <strong>Solution:</strong> Use theme.json to define your
                  colors instead of CSS, or use higher specificity selectors.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Spacing Scale Inconsistencies
              </CardTitle>
              <CardDescription>
                Spacing presets don't always generate the expected CSS
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The spacing scale in theme.json might not generate the CSS
                custom properties you expect, especially with complex values.
              </p>
              <WPBlockCodeBlock
                code={`// theme.json
{
  "spacing": {
    "spacingSizes": [
      {"size": "clamp(1rem, 2.5vw, 2rem)", "slug": "medium", "name": "Medium"}
    ]
  }
}

/* Expected CSS */
--wp--preset--spacing--medium: clamp(1rem, 2.5vw, 2rem);

/* Sometimes generated instead */
--wp--preset--spacing--medium: 1rem; /* Simplified/broken */`}
                
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Block Rendering Quirks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Eye className="mr-2 h-5 w-5 text-neon-cyan" />
          Block Rendering Quirks
        </h2>

        <div className="space-y-6">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <Bug className="mr-2 h-5 w-5" />
                Editor vs Frontend Differences
              </CardTitle>
              <CardDescription>
                Blocks look different in the editor compared to the frontend
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The block editor applies different CSS styles than the frontend,
                leading to inconsistent appearances.
              </p>
              <WPBlockCodeBlock
                code={`<!-- Same block markup -->
<!-- wp:group {"style":{"spacing":{"padding":"2rem"}}} -->
<div class="wp-block-group" style="padding:2rem">Content</div>
<!-- /wp:group -->

/* Editor styles (simplified) */
.wp-block-group {
  padding: 2rem; /* Works as expected */
}

/* Frontend might have conflicting styles */
.wp-block-group {
  padding: 1rem !important; /* Theme override */
}`}
                
              />
              <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                <p className="text-sm text-green-600 dark:text-green-400">
                  <Zap className="inline h-4 w-4 mr-1" />
                  <strong>Solution:</strong> Use browser dev tools to compare
                  editor and frontend CSS, add editor styles to match frontend
                  appearance.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Mobile Responsive Issues
              </CardTitle>
              <CardDescription>
                FSE responsive controls don't cover all use cases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                WordPress doesn't provide granular responsive controls for all
                properties, leading to mobile layout issues.
              </p>
              <WPBlockCodeBlock
                code={`<!-- Desktop: Large padding works great -->
<!-- wp:group {"style":{"spacing":{"padding":"4rem"}}} -->
<div class="wp-block-group" style="padding:4rem">
  <!-- Mobile: 4rem padding is too much! -->
</div>
<!-- /wp:group -->

/* No built-in responsive padding controls */
/* You need custom CSS */
@media (max-width: 768px) {
  .wp-block-group {
    padding: 1rem !important;
  }
}`}
                
              />
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <Smartphone className="inline h-4 w-4 mr-1" />
                  <strong>Workaround:</strong> Use CSS custom properties and
                  media queries, or add responsive block style variations in
                  your theme.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Performance Quirks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-500" />
          Performance & Loading Quirks
        </h2>

        <div className="space-y-6">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <Bug className="mr-2 h-5 w-5" />
                Excessive CSS Generation
              </CardTitle>
              <CardDescription>
                WordPress generates a lot of inline CSS for block styles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Each block with custom styles generates inline CSS, which can
                significantly increase page size and reduce performance.
              </p>
              <WPBlockCodeBlock
                code={`<!-- Each styled block generates CSS like this -->
<style id="wp-block-library-inline-css">
.wp-block-group.is-layout-flow > .alignleft { float: left; }
.wp-block-group.is-layout-flow > .alignright { float: right; }
/* ... hundreds more lines for each block */
</style>

<!-- Multiple blocks = lots of repeated CSS -->
<!-- Consider: 20 blocks × 50 lines CSS = 1000 lines of inline CSS -->`}
                
              />
              <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                <p className="text-sm text-green-600 dark:text-green-400">
                  <Zap className="inline h-4 w-4 mr-1" />
                  <strong>Optimization:</strong> Use consistent CSS classes
                  instead of inline styles, implement CSS concatenation, or use
                  a performance plugin.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Block Editor Loading Performance
              </CardTitle>
              <CardDescription>
                Complex block patterns and reusable blocks can slow down the
                editor
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Pages with many blocks, especially complex ones like Groups with
                many nested blocks, can cause editor performance issues.
              </p>
              <div className="p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <Lightbulb className="inline h-4 w-4 mr-1" />
                  <strong>Best Practices:</strong> Limit nesting depth, use
                  pattern libraries instead of complex reusable blocks, break
                  large pages into smaller template parts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* WordPress Version Quirks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Code className="mr-2 h-5 w-5 text-neon-purple" />
          Version-Specific Quirks
        </h2>

        <div className="space-y-6">
          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <FileText className="mr-2 h-5 w-5" />
                WordPress 6.0 - 6.4 Changes
              </CardTitle>
              <CardDescription>
                Major FSE changes between versions that affect existing sites
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>6.0:</strong> Introduced FSE for all themes, changed
                  template loading
                </li>
                <li>
                  • <strong>6.1:</strong> Major changes to spacing controls and
                  layout
                </li>
                <li>
                  • <strong>6.2:</strong> New block styling features, some broke
                  existing patterns
                </li>
                <li>
                  • <strong>6.3:</strong> Enhanced template parts, changes to
                  global styles inheritance
                </li>
                <li>
                  • <strong>6.4:</strong> New lightbox feature, changes to image
                  block behavior
                </li>
              </ul>
              <div className="p-3 bg-yellow-500/10 rounded border border-yellow-500/30">
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  <AlertTriangle className="inline h-4 w-4 mr-1" />
                  <strong>Important:</strong> Always test FSE features after
                  WordPress updates. Backup before major version updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Common Solutions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-green-500" />
          Common Solutions & Workarounds
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-green-500/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-400">
                Debug Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Query Monitor plugin for template debugging</li>
                <li>• Browser dev tools for CSS conflicts</li>
                <li>• WordPress debug logging for template loading</li>
                <li>• Block editor's "Code editor" view</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">
                Prevention Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Use semantic CSS classes over inline styles</li>
                <li>• Test in multiple WordPress versions</li>
                <li>• Keep template customizations minimal</li>
                <li>• Document your FSE customizations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Additional Resources
        </h2>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardContent className="py-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Official Documentation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WordPress Block Editor Handbook</li>
                  <li>• Full Site Editing documentation</li>
                  <li>• Theme.json reference guide</li>
                  <li>• WordPress developer blog updates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  Community Resources
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WordPress.org support forums</li>
                  <li>• GitHub Gutenberg repository issues</li>
                  <li>• WordPress Slack #core-editor channel</li>
                  <li>• FSE-focused WordPress blogs and tutorials</li>
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
