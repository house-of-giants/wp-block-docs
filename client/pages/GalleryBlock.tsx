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
  Images,
  Grid3X3,
  Smartphone,
  Monitor,
  Lightbulb,
  Eye,
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
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

export default function GalleryBlock() {
  const gallerySchema = generateDocumentationSchema(
    "WordPress Gallery Block - Image Galleries & Grid Layouts Guide",
    "Master WordPress Gallery block for image collections. Complete guide to responsive galleries, grid layouts, lightbox functionality, and image optimization with accessibility features.",
    "https://wpblockdocs.com/gallery",
    "WordPress Block Documentation",
    [
      "WordPress Gallery block",
      "Image gallery WordPress",
      "WordPress image grid",
      "Gallery block responsive",
      "WordPress photo gallery",
      "Gallery block lightbox",
      "Image collection WordPress",
      "Gallery block columns",
      "WordPress media gallery",
      "Gallery accessibility",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Gallery Block", url: "https://wpblockdocs.com/gallery" },
  ]);

  return (
    <>
      <SEO
        title="WordPress Gallery Block - Image Galleries & Grid Layouts Guide"
        description="Master WordPress Gallery block for image collections. Complete guide to responsive galleries, grid layouts, lightbox functionality, and image optimization with accessibility features for stunning photo displays."
        keywords="WordPress Gallery block, Image gallery WordPress, WordPress image grid, Gallery block responsive, WordPress photo gallery, Gallery block lightbox, Image collection WordPress"
        canonical="/gallery"
        ogType="article"
        schema={[gallerySchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <PageHeader
        icon={Images}
        iconColor="text-neon-purple"
        iconBgColor="bg-neon-purple/20"
        title="Gallery Block"
        description="The Gallery block creates responsive image collections with flexible grid layouts. Perfect for portfolios, photo galleries, and visual storytelling with built-in lightbox and optimization features."
        badges={[
          { text: "Image Collections", className: "bg-neon-purple/20 text-neon-purple border-neon-purple/30" },
          { text: "Responsive Grid", variant: "outline" },
          { text: "Lightbox", variant: "outline" },
          { text: "Portfolio", variant: "outline" },
          { text: "Visual Content", variant: "outline" },
        ]}
      />
      <ContentSection title="Basic Gallery" icon={Grid3X3} iconColor="text-neon-purple">
        <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">
                Simple responsive gallery with automatic grid layout
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Perfect for Portfolios and Photo Collections
                </span>
              </div>
              <WPBlockCodeBlock
                code={`<!-- wp:gallery {"columns":3,"linkTo":"media","sizeSlug":"large","ids":[123,124,125,126,127,128]} -->
<figure class="wp-block-gallery has-nested-images columns-3 is-cropped">
  <!-- wp:image {"id":123,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-1-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-1-1024x768.jpg" alt="Modern website design showcase" class="wp-image-123"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":124,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-2-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-2-1024x768.jpg" alt="E-commerce platform interface" class="wp-image-124"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":125,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-3-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-3-1024x768.jpg" alt="Mobile app design concept" class="wp-image-125"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":126,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-4-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-4-1024x768.jpg" alt="Brand identity design package" class="wp-image-126"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":127,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-5-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-5-1024x768.jpg" alt="Dashboard UI design" class="wp-image-127"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":128,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/portfolio-6-large.jpg">
      <img src="/wp-content/uploads/2024/01/portfolio-6-1024x768.jpg" alt="Print design collection" class="wp-image-128"/>
    </a>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                
              />
              {/* Note about gallery image IDs and portability */}
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                <AlertTitle>Warning: Gallery Block Portability</AlertTitle>
                <AlertDescription>
                  <b>Image IDs in this gallery block are unique to your WordPress site.</b> <br />
                  If you copy this block to another site, the images may not appear until you re-select them or use the WordPress editor's recovery tools. <br />
                  <span className="text-destructive">For best results, always check and update images after pasting on a new site.</span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
      </ContentSection>

      <ContentSection title="Gallery Layouts & Styles">
        <Tabs defaultValue="masonry" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="masonry">Masonry Layout</TabsTrigger>
              <TabsTrigger value="captions">With Captions</TabsTrigger>
              <TabsTrigger value="responsive">Responsive Grid</TabsTrigger>
              <TabsTrigger value="styled">Custom Styling</TabsTrigger>
            </TabsList>

            <TabsContent value="masonry" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Masonry Gallery Layout</CardTitle>
                  <CardDescription>
                    Pinterest-style layout that preserves aspect ratios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:gallery {
  "columns":0,
  "linkTo":"none",
  "sizeSlug":"large",
  "allowResize":false,
  "className":"is-style-masonry"
} -->
<figure class="wp-block-gallery has-nested-images is-style-masonry columns-0 is-cropped">
  <!-- wp:image {"id":201,"sizeSlug":"large","linkDestination":"none"} -->
  <figure class="wp-block-image size-large">
    <img src="/wp-content/uploads/2024/01/nature-1-vertical.jpg" alt="Mountain landscape at sunrise" class="wp-image-201"/>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":202,"sizeSlug":"large","linkDestination":"none"} -->
  <figure class="wp-block-image size-large">
    <img src="/wp-content/uploads/2024/01/nature-2-horizontal.jpg" alt="Ocean waves crashing on rocks" class="wp-image-202"/>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":203,"sizeSlug":"large","linkDestination":"none"} -->
  <figure class="wp-block-image size-large">
    <img src="/wp-content/uploads/2024/01/nature-3-square.jpg" alt="Forest path in autumn" class="wp-image-203"/>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":204,"sizeSlug":"large","linkDestination":"none"} -->
  <figure class="wp-block-image size-large">
    <img src="/wp-content/uploads/2024/01/nature-4-vertical.jpg" alt="Waterfall in tropical forest" class="wp-image-204"/>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                    
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="captions" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Gallery with Image Captions</CardTitle>
                  <CardDescription>
                    Individual captions for each image with detailed
                    descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:gallery {"columns":2,"linkTo":"media","sizeSlug":"large","className":"gallery-with-captions"} -->
<figure class="wp-block-gallery has-nested-images columns-2 is-cropped gallery-with-captions">
  <!-- wp:image {"id":301,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/team-member-1-large.jpg">
      <img src="/wp-content/uploads/2024/01/team-member-1-medium.jpg" alt="Sarah Johnson, Lead Designer" class="wp-image-301"/>
    </a>
    <figcaption class="wp-element-caption">
      <strong>Sarah Johnson</strong><br>
      Lead Designer with 8+ years of experience in user interface design and brand development.
    </figcaption>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":302,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/team-member-2-large.jpg">
      <img src="/wp-content/uploads/2024/01/team-member-2-medium.jpg" alt="Michael Chen, Senior Developer" class="wp-image-302"/>
    </a>
    <figcaption class="wp-element-caption">
      <strong>Michael Chen</strong><br>
      Senior Developer specializing in WordPress and React development for enterprise solutions.
    </figcaption>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":303,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/team-member-3-large.jpg">
      <img src="/wp-content/uploads/2024/01/team-member-3-medium.jpg" alt="Elena Rodriguez, Project Manager" class="wp-image-303"/>
    </a>
    <figcaption class="wp-element-caption">
      <strong>Elena Rodriguez</strong><br>
      Project Manager ensuring seamless delivery and client satisfaction across all projects.
    </figcaption>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":304,"sizeSlug":"large","linkDestination":"media"} -->
  <figure class="wp-block-image size-large">
    <a href="/wp-content/uploads/2024/01/team-member-4-large.jpg">
      <img src="/wp-content/uploads/2024/01/team-member-4-medium.jpg" alt="David Park, UX Researcher" class="wp-image-304"/>
    </a>
    <figcaption class="wp-element-caption">
      <strong>David Park</strong><br>
      UX Researcher focused on user behavior analysis and conversion optimization.
    </figcaption>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                    
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="responsive" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Responsive Gallery Grid</CardTitle>
                  <CardDescription>
                    Adaptive columns that adjust to screen size
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:gallery {
  "columns":4,
  "linkTo":"media",
  "sizeSlug":"medium",
  "className":"responsive-gallery",
  "style":{
    "spacing":{
      "blockGap":{"top":"1rem","left":"1rem"}
    }
  }
} -->
<figure class="wp-block-gallery has-nested-images columns-4 is-cropped responsive-gallery">
  <!-- wp:image {"id":401,"sizeSlug":"medium","linkDestination":"media"} -->
  <figure class="wp-block-image size-medium">
    <a href="/wp-content/uploads/2024/01/product-1-large.jpg">
      <img src="/wp-content/uploads/2024/01/product-1-medium.jpg" alt="Wireless headphones" class="wp-image-401"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":402,"sizeSlug":"medium","linkDestination":"media"} -->
  <figure class="wp-block-image size-medium">
    <a href="/wp-content/uploads/2024/01/product-2-large.jpg">
      <img src="/wp-content/uploads/2024/01/product-2-medium.jpg" alt="Laptop computer" class="wp-image-402"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":403,"sizeSlug":"medium","linkDestination":"media"} -->
  <figure class="wp-block-image size-medium">
    <a href="/wp-content/uploads/2024/01/product-3-large.jpg">
      <img src="/wp-content/uploads/2024/01/product-3-medium.jpg" alt="Smartphone device" class="wp-image-403"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":404,"sizeSlug":"medium","linkDestination":"media"} -->
  <figure class="wp-block-image size-medium">
    <a href="/wp-content/uploads/2024/01/product-4-large.jpg">
      <img src="/wp-content/uploads/2024/01/product-4-medium.jpg" alt="Smart watch" class="wp-image-404"/>
    </a>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                  />
                  <Card className="bg-card/50 backdrop-blur border-border/50 mt-4">
                    <CardHeader>
                      <CardTitle>Custom CSS for responsive behavior</CardTitle>
                    </CardHeader>
                  </Card>
                  <WPBlockCodeBlock
                    code={`
.responsive-gallery {
  --columns: 4;
}

@media (max-width: 768px) {
  .responsive-gallery {
    --columns: 2;
  }
}

@media (max-width: 480px) {
  .responsive-gallery {
    --columns: 1;
  }
}

.responsive-gallery .wp-block-image {
  width: calc((100% - (var(--columns) - 1) * 1rem) / var(--columns));
}`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styled" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Custom Styled Gallery</CardTitle>
                  <CardDescription>
                    Gallery with custom borders, shadows, and hover effects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:gallery {
  "columns":3,
  "linkTo":"media",
  "className":"styled-gallery",
  "style":{
    "spacing":{
      "blockGap":{"top":"2rem","left":"2rem"}
    },
    "border":{
      "radius":"12px"
    }
  }
} -->
<figure class="wp-block-gallery has-nested-images columns-3 is-cropped styled-gallery" style="border-radius:12px">
  <!-- wp:image {"id":501,"sizeSlug":"large","linkDestination":"media","className":"gallery-item-styled"} -->
  <figure class="wp-block-image size-large gallery-item-styled">
    <a href="/wp-content/uploads/2024/01/artwork-1-large.jpg">
      <img src="/wp-content/uploads/2024/01/artwork-1-medium.jpg" alt="Abstract digital art piece" class="wp-image-501"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":502,"sizeSlug":"large","linkDestination":"media","className":"gallery-item-styled"} -->
  <figure class="wp-block-image size-large gallery-item-styled">
    <a href="/wp-content/uploads/2024/01/artwork-2-large.jpg">
      <img src="/wp-content/uploads/2024/01/artwork-2-medium.jpg" alt="Minimalist geometric design" class="wp-image-502"/>
    </a>
  </figure>
  <!-- /wp:image -->
  
  <!-- wp:image {"id":503,"sizeSlug":"large","linkDestination":"media","className":"gallery-item-styled"} -->
  <figure class="wp-block-image size-large gallery-item-styled">
    <a href="/wp-content/uploads/2024/01/artwork-3-large.jpg">
      <img src="/wp-content/uploads/2024/01/artwork-3-medium.jpg" alt="Colorful modern painting" class="wp-image-503"/>
    </a>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                  />
                  <Card className="bg-card/50 backdrop-blur border-border/50 mt-4">
                    <CardHeader>
                      <CardTitle>Custom CSS for gallery item styling</CardTitle>
                    </CardHeader>
                  </Card>
                  <WPBlockCodeBlock
                    code={`
.styled-gallery .gallery-item-styled img {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.styled-gallery .gallery-item-styled:hover img {
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.styled-gallery .gallery-item-styled a {
  display: block;
  overflow: hidden;
  border-radius: 8px;
}`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
      </ContentSection>

      <ContentSection title="Gallery Best Practices & Guidelines">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Images className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                      Image Optimization
                    </h3>
                    <p className="text-sm text-foreground">
                      Use appropriate image sizes (medium for thumbnails, large
                      for lightbox). WordPress automatically generates multiple
                      sizes for responsive display and faster loading.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Monitor className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">
                      Responsive Design
                    </h3>
                    <p className="text-sm text-foreground">
                      Gallery columns automatically adapt to screen size. Use
                      CSS custom properties and media queries for fine-tuned
                      responsive behavior across devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300">
                      Accessibility Features
                    </h3>
                    <p className="text-sm text-foreground">
                      Always include meaningful alt text for each image.
                      Consider keyboard navigation for lightbox functionality
                      and provide adequate color contrast for captions.
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
                      Performance Considerations
                    </h3>
                    <p className="text-sm text-foreground">
                      Large galleries can impact page load time. Consider lazy
                      loading, image compression, and limiting the number of
                      images per gallery for better performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </ContentSection>

      <ContentSection title="Common Gallery Use Cases">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-4 w-4 text-neon-cyan" />
                  Portfolio Showcase
                </CardTitle>
                <CardDescription>
                  Professional portfolio with project previews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WPBlockCodeBlock
                  code={`<!-- wp:gallery {"columns":3,"linkTo":"attachment","className":"portfolio-gallery"} -->
<figure class="wp-block-gallery has-nested-images columns-3 is-cropped portfolio-gallery">
  <!-- Images with descriptive alt text -->
  <!-- wp:image {"linkDestination":"attachment"} -->
  <figure class="wp-block-image">
    <a href="/project-1">
      <img src="project-preview.jpg" alt="E-commerce website redesign project"/>
    </a>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                  
                />
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-4 w-4 text-neon-purple" />
                  Team Gallery
                </CardTitle>
                <CardDescription>
                  Team member photos with captions and roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WPBlockCodeBlock
                  code={`<!-- wp:gallery {"columns":4,"linkTo":"none","className":"team-gallery"} -->
<figure class="wp-block-gallery has-nested-images columns-4 is-cropped team-gallery">
  <!-- wp:image -->
  <figure class="wp-block-image">
    <img src="team-member.jpg" alt="Sarah Johnson, Lead Designer"/>
    <figcaption>Sarah Johnson<br>Lead Designer</figcaption>
  </figure>
  <!-- /wp:image -->
</figure>
<!-- /wp:gallery -->`}
                  
                />
              </CardContent>
            </Card>
          </div>
      </ContentSection>

      <PropertiesReference blockType="gallery" />
    </>
  );
}
