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
  Image,
  Code,
  Eye,
  Settings,
  Lightbulb,
  Accessibility,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import { generateDocumentationSchema, SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { ContentSection } from "@/components/ContentSection";

export default function ImageBlock() {
  const imageBlockSchema = generateDocumentationSchema(
    "WordPress Image Block - Complete HTML Markup Guide & Examples",
    "Master WordPress image block markup with comprehensive examples, attributes, and best practices. Learn how to display images with captions, alt text, and accessibility features.",
    "https://wpblockdocs.com/image-block",
    "WordPress Block Documentation",
    [
      "WordPress image block",
      "WordPress image block markup",
      "WordPress image block best practices",
      "WordPress image block examples",
    ],
  );
  return (
    <>
      <SEO
        title="WordPress Image Block - Complete HTML Markup Guide & Examples"
        description="Master WordPress image block markup with comprehensive examples, attributes, and best practices. Learn how to display images with captions, alt text, and accessibility features."
        keywords="WordPress image block, WordPress image block markup, WordPress image block best practices, WordPress image block examples"
        canonical="/image-block"
        ogType="article"
        schema={[imageBlockSchema]}
      />
      <PageHeader
        icon={Image}
        iconColor="text-neon-blue"
        iconBgColor="bg-neon-blue/20"
        title="Image Block"
        description="The Image block displays images from your media library or external URLs. It supports captions, alt text for accessibility, linking, and various display options including the new lightbox feature."
        badges={[
          { text: "Core Block", variant: "secondary", className: "bg-neon-blue/20 text-neon-blue border-neon-blue/30" },
          { text: "Media Content", variant: "outline" },
          { text: "Accessibility Ready", variant: "outline" },
          { text: "Lightbox Support", variant: "outline" },
        ]}
      />
      <div className="space-y-8">
        <ContentSection title="Basic Syntax" icon={Code} iconColor="text-neon-blue">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Simple Image Block</CardTitle>
              <CardDescription>
                Basic image with alt text for accessibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <WPBlockCodeBlock
                  code={`<!-- wp:image {"id":123,"width":800,"height":600} -->
<figure class="wp-block-image size-large is-resized">
  <img src="https://example.com/image.jpg" 
       alt="Beautiful landscape photo" 
       class="wp-image-123" 
       width="800" 
       height="600"/>
</figure>
<!-- /wp:image -->`}
                  
                />
              </div>
            </CardContent>
          </Card>
        </ContentSection>

        <ContentSection title="Common Configurations" icon={Settings} iconColor="text-neon-pink">
          <Tabs defaultValue="caption" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="caption">With Caption</TabsTrigger>
              <TabsTrigger value="linked">Linked Image</TabsTrigger>
              <TabsTrigger value="lightbox">Lightbox</TabsTrigger>
              <TabsTrigger value="alignment">Alignment</TabsTrigger>
            </TabsList>

            <TabsContent value="caption" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Image with Caption</CardTitle>
                  <CardDescription>
                    Adding descriptive text below the image
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:image {"id":123,"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">
  <img src="https://example.com/landscape.jpg" 
       alt="Yosemite Valley at sunset" 
       class="wp-image-123"/>
  <figcaption class="wp-element-caption">
    The iconic view of Yosemite Valley during golden hour
  </figcaption>
</figure>
<!-- /wp:image -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="linked" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Linked Image</CardTitle>
                  <CardDescription>
                    Making images clickable with custom URLs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:image {
  "id":123,
  "linkDestination":"custom",
  "href":"https://example.com/gallery",
  "linkTarget":"_blank",
  "rel":"noopener"
} -->
<figure class="wp-block-image size-large">
  <a href="https://example.com/gallery" 
     target="_blank" 
     rel="noopener">
    <img src="https://example.com/image.jpg" 
         alt="Gallery preview" 
         class="wp-image-123"/>
  </a>
</figure>
<!-- /wp:image -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lightbox" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Lightbox Support</CardTitle>
                  <CardDescription>
                    WordPress 6.4+ lightbox functionality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:image {
  "lightbox":{
    "enabled":true
  },
  "id":123,
  "width":"672px",
  "height":"auto",
  "aspectRatio":"1",
  "linkDestination":"none",
  "className":"size-large"
} -->
<figure class="wp-block-image is-resized size-large">
  <img src="https://example.com/image.jpg"
    alt="Click to view in lightbox"
    class="wp-image-123"
    style="aspect-ratio:1; width:672px; height:auto" />
</figure>
<!-- /wp:image -->`}
                      
                    />
                  </div>
                  <div className="mt-4 p-3 bg-neon-purple/10 rounded border border-neon-purple/30">
                    <p className="text-sm text-neon-purple">
                      <Lightbulb className="inline h-4 w-4 mr-1" />
                      Lightbox feature requires WordPress 6.4+ and theme support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alignment" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Image Alignment</CardTitle>
                  <CardDescription>
                    Center, wide, and full-width alignments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <WPBlockCodeBlock
                      code={`<!-- wp:image {"id":123,"align":"wide"} -->
<figure class="wp-block-image alignwide size-large">
  <img src="https://example.com/wide-image.jpg" 
       alt="Wide layout image" 
       class="wp-image-123"/>
</figure>
<!-- /wp:image -->

<!-- wp:image {"id":124,"align":"full"} -->
<figure class="wp-block-image alignfull size-large">
  <img src="https://example.com/hero-image.jpg" 
       alt="Full width hero image" 
       class="wp-image-124"/>
</figure>
<!-- /wp:image -->`}
                      
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ContentSection>

        <ContentSection title="Real-World Examples" icon={Eye} iconColor="text-neon-cyan">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Blog Post Featured Image</CardTitle>
                <CardDescription>
                  Typical featured image with caption and link
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:image {
  "id":456,
  "sizeSlug":"large",
  "className":"featured-image",
  "style":{"spacing":{"margin":{"bottom":"var:preset|spacing|50"}}}
} -->
<figure class="wp-block-image size-large featured-image" 
        style="margin-bottom:var(--wp--preset--spacing--50)">
  <img src="https://blog.example.com/wp-content/uploads/2024/01/article-hero.jpg" 
       alt="Step-by-step tutorial illustration" 
       class="wp-image-456"/>
  <figcaption class="wp-element-caption">
    Follow our comprehensive guide to master this technique
  </figcaption>
</figure>
<!-- /wp:image -->`}
                  
                />
              </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Product Gallery Image</CardTitle>
                <CardDescription>
                  E-commerce product image with lightbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <WPBlockCodeBlock
                    code={`<!-- wp:image {
  "id":789,
  "sizeSlug":"medium",
  "lightbox":{"enabled":true},
  "className":"product-image",
  "style":{"border":{"radius":"8px"}}
} -->
<figure class="wp-block-image size-medium product-image" 
        style="border-radius:8px">
  <img src="https://shop.example.com/product-photo.jpg" 
       alt="Premium leather handbag in brown" 
       class="wp-image-789"
       data-wp-on="click" 
       data-wp-on-click="lightbox::open"/>
</figure>
<!-- /wp:image -->`}
                  
                />
              </div>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <ContentSection title="Accessibility & Best Practices" icon={Accessibility} iconColor="text-green-500">
          <div className="space-y-4">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Accessibility className="mr-2 h-5 w-5" />
                  Accessibility Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Always include alt text</strong> - Describe the
                    image content and context
                  </li>
                  <li>• Use empty alt="" for purely decorative images</li>
                  <li>• Captions should add value, not repeat alt text</li>
                  <li>• Ensure sufficient color contrast in overlaid text</li>
                  <li>• Use descriptive file names for SEO benefits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Performance Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Choose appropriate image sizes for your layout</li>
                  <li>• Use WebP format when possible for better compression</li>
                  <li>• Consider lazy loading for images below the fold</li>
                  <li>• Optimize images before uploading to WordPress</li>
                  <li>• Use srcset for responsive images (auto-generated)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <ContentSection title="Gotchas & Tips" icon={AlertCircle} iconColor="text-yellow-500">
          <div className="space-y-4">
            <Card className="bg-red-500/10 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Common Gotchas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Lightbox feature requires theme support (WordPress 6.4+)
                  </li>
                  <li>• External images may not work with WordPress sizes</li>
                  <li>• Some themes override default image styling</li>
                  <li>• Caption styling varies significantly between themes</li>
                  <li>• Image alignment classes depend on theme CSS</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentSection>

        <PropertiesReference
          blockType="image"
          title="Image Block Properties"
          description="Complete reference of all properties available to the Image block, including universal block properties and Image-specific attributes"
        />

        <ContentSection title="Related Blocks" icon={Image} iconColor="text-neon-blue">
          <h2 className="text-2xl font-semibold text-foreground">
            Related Blocks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Gallery Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Display multiple images in a grid
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Media & Text</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Side-by-side image and content
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Cover Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Image with overlaid content
                </p>
              </CardContent>
            </Card>
          </div>
        </ContentSection>
      </div>
    </>
  );
}
