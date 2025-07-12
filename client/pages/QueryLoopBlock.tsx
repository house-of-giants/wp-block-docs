import React from "react";
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
  Search,
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
      "FSE dynamic content"
    ]
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Query Loop Block", url: "https://wpblockdocs.com/query-loop" }
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
            <h1 className="text-4xl font-bold text-foreground">Query Loop Block</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The Query Loop block is the powerhouse of dynamic content in WordPress block themes. 
            It displays lists of posts, pages, or custom post types with complete control over 
            queries, templates, and pagination.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
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
                The simplest Query Loop displays recent posts with default template
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
                code={`<!-- wp:query {"queryId":1,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query">
  <!-- wp:post-template -->
    <!-- wp:post-title {"isLink":true} -->
    <h2 class="wp-block-post-title"><a href="<?php echo get_permalink(); ?>" target="_self"><?php echo get_the_title(); ?></a></h2>
    <!-- /wp:post-title -->
    
    <!-- wp:post-excerpt -->
    <div class="wp-block-post-excerpt">
      <p class="wp-block-post-excerpt__excerpt"><?php echo get_the_excerpt(); ?></p>
    </div>
    <!-- /wp:post-excerpt -->
  <!-- /wp:post-template -->
  
  <!-- wp:query-pagination -->
  <div class="wp-block-query-pagination">
    <!-- wp:query-pagination-previous -->
    <div class="wp-block-query-pagination-previous">
      <a href="<?php echo get_previous_posts_page_link(); ?>">Previous</a>
    </div>
    <!-- /wp:query-pagination-previous -->
    
    <!-- wp:query-pagination-numbers -->
    <div class="wp-block-query-pagination-numbers"></div>
    <!-- /wp:query-pagination-numbers -->
    
    <!-- wp:query-pagination-next -->
    <div class="wp-block-query-pagination-next">
      <a href="<?php echo get_next_posts_page_link(); ?>">Next</a>
    </div>
    <!-- /wp:query-pagination-next -->
  </div>
  <!-- /wp:query-pagination -->
  
  <!-- wp:query-no-results -->
  <div class="wp-block-query-no-results">
    <!-- wp:paragraph -->
    <p>No posts were found.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->`}
                showLineNumbers={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* Advanced Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Advanced Query Patterns</h2>
          
          <Tabs defaultValue="custom-query" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="custom-query">Custom Query</TabsTrigger>
              <TabsTrigger value="featured-posts">Featured Posts</TabsTrigger>
              <TabsTrigger value="category-filter">Category Filter</TabsTrigger>
              <TabsTrigger value="custom-post-type">Custom Post Type</TabsTrigger>
            </TabsList>

            <TabsContent value="custom-query" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Query with Specific Parameters</CardTitle>
                  <CardDescription>
                    Query specific posts with custom ordering and filtering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:query {
  "queryId":2,
  "query":{
    "perPage":6,
    "pages":0,
    "offset":0,
    "postType":"post",
    "order":"desc",
    "orderBy":"meta_value_num",
    "meta_key":"post_views",
    "exclude":[],
    "sticky":"exclude"
  }
} -->
<div class="wp-block-query">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    <!-- wp:group {"style":{"spacing":{"padding":{"all":"1.5rem"}}},"backgroundColor":"white","className":"post-card"} -->
    <div class="wp-block-group post-card has-white-background-color has-background" style="padding:1.5rem">
      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} -->
      <div class="wp-block-post-featured-image">
        <a href="<?php echo get_permalink(); ?>">
          <?php echo get_the_post_thumbnail(null, 'large', ['style' => 'aspect-ratio:16/9;object-fit:cover']); ?>
        </a>
      </div>
      <!-- /wp:post-featured-image -->
      
      <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"large"} -->
      <h3 class="wp-block-post-title has-large-font-size">
        <a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a>
      </h3>
      <!-- /wp:post-title -->
      
      <!-- wp:post-date {"format":"M j, Y"} -->
      <div class="wp-block-post-date">
        <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date('M j, Y'); ?></time>
      </div>
      <!-- /wp:post-date -->
    </div>
    <!-- /wp:group -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->`}
                    showLineNumbers={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="featured-posts" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Featured Posts Query</CardTitle>
                  <CardDescription>
                    Display only featured posts using meta queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:query {
  "queryId":3,
  "query":{
    "perPage":4,
    "postType":"post",
    "meta_query":[{
      "key":"featured_post",
      "value":"1",
      "compare":"="
    }]
  }
} -->
<div class="wp-block-query featured-posts">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":2}} -->
    <!-- wp:group {"style":{"border":{"radius":"8px"}},"className":"featured-card"} -->
    <div class="wp-block-group featured-card" style="border-radius:8px">
      <!-- wp:post-featured-image {"isLink":true,"height":"200px"} -->
      <div class="wp-block-post-featured-image">
        <a href="<?php echo get_permalink(); ?>">
          <?php echo get_the_post_thumbnail(null, 'medium_large', ['style' => 'height:200px;object-fit:cover']); ?>
        </a>
      </div>
      <!-- /wp:post-featured-image -->
      
      <!-- wp:group {"style":{"spacing":{"padding":{"all":"1rem"}}}} -->
      <div class="wp-block-group" style="padding:1rem">
        <!-- wp:post-title {"level":4,"isLink":true} -->
        <h4 class="wp-block-post-title">
          <a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a>
        </h4>
        <!-- /wp:post-title -->
        
        <!-- wp:post-excerpt {"moreText":"Continue reading","excerptLength":20} -->
        <div class="wp-block-post-excerpt">
          <p class="wp-block-post-excerpt__excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
          <div class="wp-block-post-excerpt__more-text">
            <a href="<?php echo get_permalink(); ?>">Continue reading</a>
          </div>
        </div>
        <!-- /wp:post-excerpt -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->`}
                    showLineNumbers={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="category-filter" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Category-Specific Query</CardTitle>
                  <CardDescription>
                    Filter posts by specific categories or tags
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:query {
  "queryId":4,
  "query":{
    "perPage":5,
    "postType":"post",
    "taxQuery":{
      "category":[12,15,8]
    },
    "order":"desc",
    "orderBy":"date"
  }
} -->
<div class="wp-block-query category-posts">
  <!-- wp:post-template -->
    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"1rem"}}} -->
    <div class="wp-block-group">
      <!-- wp:post-featured-image {"width":"120px","height":"120px"} -->
      <div class="wp-block-post-featured-image" style="width:120px;height:120px">
        <?php echo get_the_post_thumbnail(null, 'thumbnail', ['style' => 'width:120px;height:120px;object-fit:cover']); ?>
      </div>
      <!-- /wp:post-featured-image -->
      
      <!-- wp:group {"layout":{"type":"constrained"},"style":{"spacing":{"blockGap":"0.5rem"}}} -->
      <div class="wp-block-group">
        <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"medium"} -->
        <h3 class="wp-block-post-title has-medium-font-size">
          <a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a>
        </h3>
        <!-- /wp:post-title -->
        
        <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"0.5rem"}}} -->
        <div class="wp-block-group">
          <!-- wp:post-date {"fontSize":"small"} -->
          <div class="wp-block-post-date has-small-font-size">
            <?php echo get_the_date(); ?>
          </div>
          <!-- /wp:post-date -->
          
          <!-- wp:post-terms {"term":"category","fontSize":"small"} -->
          <div class="wp-block-post-terms has-small-font-size">
            <?php echo get_the_category_list(', '); ?>
          </div>
          <!-- /wp:post-terms -->
        </div>
        <!-- /wp:group -->
        
        <!-- wp:post-excerpt {"excerptLength":15} -->
        <div class="wp-block-post-excerpt">
          <p class="wp-block-post-excerpt__excerpt"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
        </div>
        <!-- /wp:post-excerpt -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  <!-- /wp:post-template -->
  
  <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-query-pagination">
    <!-- wp:query-pagination-previous {"label":"← Previous"} -->
    <div class="wp-block-query-pagination-previous">
      <a href="<?php echo get_previous_posts_page_link(); ?>">← Previous</a>
    </div>
    <!-- /wp:query-pagination-previous -->
    
    <!-- wp:query-pagination-numbers -->
    <div class="wp-block-query-pagination-numbers"></div>
    <!-- /wp:query-pagination-numbers -->
    
    <!-- wp:query-pagination-next {"label":"Next →"} -->
    <div class="wp-block-query-pagination-next">
      <a href="<?php echo get_next_posts_page_link(); ?>">Next →</a>
    </div>
    <!-- /wp:query-pagination-next -->
  </div>
  <!-- /wp:query-pagination -->
</div>
<!-- /wp:query -->`}
                    showLineNumbers={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom-post-type" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Post Type Query</CardTitle>
                  <CardDescription>
                    Display custom post types like portfolios, products, or events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:query {
  "queryId":5,
  "query":{
    "perPage":8,
    "postType":"portfolio",
    "order":"desc",
    "orderBy":"menu_order",
    "meta_query":[{
      "key":"portfolio_featured",
      "value":"yes",
      "compare":"="
    }]
  }
} -->
<div class="wp-block-query portfolio-grid">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
    <!-- wp:group {"style":{"spacing":{"padding":{"all":"0"}}},"className":"portfolio-item"} -->
    <div class="wp-block-group portfolio-item" style="padding:0">
      <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"1","style":{"border":{"radius":"4px"}}} -->
      <div class="wp-block-post-featured-image" style="border-radius:4px">
        <a href="<?php echo get_permalink(); ?>">
          <?php echo get_the_post_thumbnail(null, 'large', ['style' => 'aspect-ratio:1;object-fit:cover;border-radius:4px']); ?>
        </a>
      </div>
      <!-- /wp:post-featured-image -->
      
      <!-- wp:group {"style":{"spacing":{"padding":{"top":"0.75rem","bottom":"0","left":"0","right":"0"}}}} -->
      <div class="wp-block-group" style="padding-top:0.75rem;padding-bottom:0;padding-left:0;padding-right:0">
        <!-- wp:post-title {"level":4,"isLink":true,"fontSize":"medium","style":{"spacing":{"margin":{"bottom":"0.25rem"}}}} -->
        <h4 class="wp-block-post-title has-medium-font-size" style="margin-bottom:0.25rem">
          <a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a>
        </h4>
        <!-- /wp:post-title -->
        
        <!-- wp:post-terms {"term":"portfolio_category","fontSize":"small"} -->
        <div class="wp-block-post-terms has-small-font-size">
          <?php echo get_the_term_list(get_the_ID(), 'portfolio_category', '', ', '); ?>
        </div>
        <!-- /wp:post-terms -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  <!-- /wp:post-template -->
  
  <!-- wp:query-no-results -->
  <div class="wp-block-query-no-results">
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">No portfolio items found.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->`}
                    showLineNumbers={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Key Concepts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Key Concepts & Gotchas</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-amber-500/10 border-amber-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300">
                      Query Loop vs Query Block
                    </h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      The Query Loop block replaced the older Query block. Always use Query Loop for new implementations. 
                      The main difference is that Query Loop includes the post template as a child block.
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
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Set <code>"inherit":true</code> to use the main query context (like on archive pages). 
                      This is essential for proper archive and search functionality.
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
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Post templates can use <code>"layout":{"type":"grid","columnCount":3}</code> for grid layouts
                      or <code>"layout":{"type":"default"}</code> for stacked layouts.
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
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Complex meta queries and large <code>perPage</code> values can impact performance. 
                      Always test with realistic data volumes and consider caching strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Properties Reference */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Query Loop Properties</h2>
          <PropertiesReference blockType="query-loop" />
        </div>
      </div>
    </>
  );
}