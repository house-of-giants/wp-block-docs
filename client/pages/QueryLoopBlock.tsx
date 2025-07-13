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
  AlertCircle,
  Database,
  Filter,
  Layout,
  Lightbulb,
  Zap,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import {
  SEO,
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function QueryLoopBlock() {
  const queryLoopSchema = generateDocumentationSchema(
    "WordPress Query Loop Block - Dynamic Content Display Guide",
    "Master WordPress Query Loop block for dynamic content display. Complete guide to post queries, pagination, custom post types, and template parts with real-world examples.",
    "https://wpblockdocs.com/query-loop",
    "WordPress Block Documentation",
    [
      "WordPress Query Loop",
      "Dynamic content WordPress",
      "WordPress post query",
      "Query Loop block",
      "WordPress block themes",
      "Dynamic post display",
      "WordPress pagination",
      "Custom post types WordPress",
      "WordPress template parts",
      "FSE dynamic content",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Query Loop Block", url: "https://wpblockdocs.com/query-loop" },
  ]);

  return (
    <>
      <SEO
        title="WordPress Query Loop Block - Dynamic Content Display Guide"
        description="Master WordPress Query Loop block for dynamic content display. Complete guide to post queries, pagination, custom post types, and template parts with real-world examples for block themes and FSE."
        keywords="WordPress Query Loop, Dynamic content WordPress, WordPress post query, Query Loop block, WordPress block themes, Dynamic post display, WordPress pagination, Custom post types WordPress"
        canonical="/query-loop"
        ogType="article"
        schema={[queryLoopSchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-neon-purple/20">
              <Database className="h-6 w-6 text-neon-purple" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Query Loop Block
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The Query Loop block is the powerhouse of dynamic content in
            WordPress block themes. It displays lists of posts, pages, or custom
            post types with complete control over queries, templates, and
            pagination.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-neon-purple/20 text-neon-purple border-neon-purple/30"
            >
              Dynamic Content
            </Badge>
            <Badge variant="outline">Block Themes</Badge>
            <Badge variant="outline">FSE Essential</Badge>
            <Badge variant="outline">Template Parts</Badge>
            <Badge variant="outline">Custom Queries</Badge>
          </div>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5 text-neon-purple" />
                Basic Query Loop
              </CardTitle>
              <CardDescription>
                The simplest Query Loop displays recent posts with default
                template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Essential for Blog Pages and Archive Templates
                </span>
              </div>
              <WPBlockCodeBlock
                code={`<!-- wp:query {"queryId":19,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":null,"parents":[],"format":[]}} -->
<div class="wp-block-query">
  <!-- wp:post-template -->
    <!-- wp:post-title /-->
    <!-- wp:post-date /-->
    <!-- wp:post-excerpt /-->
  <!-- /wp:post-template -->
  <!-- wp:query-pagination -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
  <!-- /wp:query-pagination -->
  <!-- wp:query-no-results -->
    <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
      <p>No results found.</p>
    <!-- /wp:paragraph -->
  <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->`}
              />
              {/* Note about copying the block and using 'Attempt to fix' */}
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                <AlertTitle>Warning: Block Copy Issues</AlertTitle>
                <AlertDescription>
                  <b>Copying this Query Loop block may break!</b> <br />
                  The <b>queryId</b> and <b>postType</b> values are often unique to each site or template. If you paste this block into your WordPress editor and see a warning, <b>click the "Attempt to fix" button</b> to automatically resolve these issues. <br />
                  <span className="text-destructive">If you skip this step, the block may not display posts correctly.</span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Key Concepts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Key Concepts & Gotchas
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-amber-500/10 border-amber-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300">
                      Query Loop vs Query Block
                    </h3>
                    <p className="text-sm text-foreground">
                      The Query Loop block replaced the older Query block.
                      Always use Query Loop for new implementations. The main
                      difference is that Query Loop includes the post template
                      as a child block.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                      Inherit Query Context
                    </h3>
                    <p className="text-sm text-foreground">
                      Set inherit:true to use the main query context (like on
                      archive pages). This is essential for proper archive and
                      search functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Layout className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">
                      Template Layouts
                    </h3>
                    <p className="text-sm text-foreground">
                      Post templates can use grid layouts with columnCount or
                      default stacked layouts. Essential for creating flexible
                      post displays.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Filter className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300">
                      Performance Considerations
                    </h3>
                    <p className="text-sm text-foreground">
                      Complex meta queries and large perPage values can impact
                      performance. Always test with realistic data volumes and
                      consider caching strategies.
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
            Query Loop Properties
          </h2>
          <PropertiesReference blockType="query-loop" />
        </div>
      </div>
    </>
  );
}
