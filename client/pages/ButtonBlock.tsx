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
  AlertCircle,
  MousePointer,
  Code,
  Eye,
  Settings,
  Lightbulb,
  Accessibility,
  ExternalLink,
  Palette,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";

export default function ButtonBlock() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-purple/20">
            <MousePointer className="h-6 w-6 text-neon-purple" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Button Block</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          The Button block creates call-to-action elements with customizable
          styling, links, and accessibility features. It's essential for
          conversions, navigation, and user interaction throughout your site.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-purple/20 text-neon-purple border-neon-purple/30"
          >
            Core Block
          </Badge>
          <Badge variant="outline">Interactive</Badge>
          <Badge variant="outline">Call-to-Action</Badge>
          <Badge variant="outline">Customizable</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Syntax */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Code className="mr-2 h-5 w-5 text-neon-blue" />
          Basic Syntax
        </h2>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Simple Button</CardTitle>
            <CardDescription>
              Basic button with text and link destination
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-neon-cyan">
                {`<!-- wp:button -->
<div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button" 
     href="https://example.com">
    Click Me
  </a>
</div>
<!-- /wp:button -->`}
              </pre>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Basic button with link
              </span>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Configurations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Settings className="mr-2 h-5 w-5 text-neon-pink" />
          Button Configurations
        </h2>

        <Tabs defaultValue="styling" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="links">Links & Targets</TabsTrigger>
            <TabsTrigger value="width">Width & Size</TabsTrigger>
            <TabsTrigger value="groups">Button Groups</TabsTrigger>
          </TabsList>

          <TabsContent value="styling" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Custom Button Styling</CardTitle>
                <CardDescription>
                  Colors, borders, and typography customization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:button {
  "backgroundColor":"vivid-red",
  "textColor":"white",
  "style": {
    "border": {
      "radius": "25px"
    },
    "typography": {
      "fontSize": "18px",
      "fontWeight": "600"
    },
    "spacing": {
      "padding": {
        "top": "15px",
        "bottom": "15px",
        "left": "30px",
        "right": "30px"
      }
    }
  },
  "className":"custom-button"
} -->
<div class="wp-block-button custom-button">
  <a class="wp-block-button__link wp-element-button 
            has-white-color has-vivid-red-background-color 
            has-text-color has-background" 
     href="https://example.com"
     style="border-radius:25px;
            font-size:18px;
            font-weight:600;
            padding-top:15px;
            padding-bottom:15px;
            padding-left:30px;
            padding-right:30px">
    Get Started Now
  </a>
</div>
<!-- /wp:button -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>External Links & Targets</CardTitle>
                <CardDescription>
                  Link destinations, new tabs, and rel attributes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:button {
  "url":"https://external-site.com",
  "title":"Visit our partner site",
  "linkTarget":"_blank",
  "rel":"noopener noreferrer"
} -->
<div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button" 
     href="https://external-site.com"
     target="_blank"
     rel="noopener noreferrer"
     title="Visit our partner site">
    Visit Partner Site
  </a>
</div>
<!-- /wp:button -->

<!-- Internal link example -->
<!-- wp:button {"url":"#contact-form"} -->
<div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button" 
     href="#contact-form">
    Contact Us
  </a>
</div>
<!-- /wp:button -->`}
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 rounded border border-green-500/30">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <ExternalLink className="inline h-4 w-4 mr-1" />
                    Always use rel="noopener noreferrer" for external links
                    opening in new tabs
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="width" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Button Width & Alignment</CardTitle>
                <CardDescription>
                  Control button sizing and positioning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- Full width button -->
<!-- wp:button {"width":100} -->
<div class="wp-block-button has-custom-width wp-block-button__width-100">
  <a class="wp-block-button__link wp-element-button" 
     href="https://example.com">
    Full Width Button
  </a>
</div>
<!-- /wp:button -->

<!-- 50% width button -->
<!-- wp:button {"width":50,"align":"center"} -->
<div class="wp-block-button aligncenter has-custom-width wp-block-button__width-50">
  <a class="wp-block-button__link wp-element-button" 
     href="https://example.com">
    Half Width Button
  </a>
</div>
<!-- /wp:button -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Button Groups</CardTitle>
                <CardDescription>
                  Multiple buttons with shared styling and layout
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons">
  <!-- wp:button {"backgroundColor":"primary"} -->
  <div class="wp-block-button">
    <a class="wp-block-button__link wp-element-button 
              has-primary-background-color has-background" 
       href="/signup">
      Get Started
    </a>
  </div>
  <!-- /wp:button -->
  
  <!-- wp:button {"className":"is-style-outline"} -->
  <div class="wp-block-button is-style-outline">
    <a class="wp-block-button__link wp-element-button" 
       href="/learn-more">
      Learn More
    </a>
  </div>
  <!-- /wp:button -->
</div>
<!-- /wp:buttons -->`}
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-blue-500/10 rounded border border-blue-500/30">
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    <Lightbulb className="inline h-4 w-4 mr-1" />
                    Button groups use the "Buttons" block which contains
                    individual "Button" blocks
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Button Styles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Palette className="mr-2 h-5 w-5 text-neon-cyan" />
          Built-in Button Styles
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Outline Style</CardTitle>
              <CardDescription>
                Transparent background with colored border
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline">
  <a class="wp-block-button__link wp-element-button" 
     href="https://example.com">
    Outline Button
  </a>
</div>
<!-- /wp:button -->`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Fill Style (Default)</CardTitle>
              <CardDescription>
                Solid background color with contrasting text
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:button {"backgroundColor":"primary","textColor":"white"} -->
<div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button 
            has-white-color has-primary-background-color 
            has-text-color has-background" 
     href="https://example.com">
    Filled Button
  </a>
</div>
<!-- /wp:button -->`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Real-World Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Eye className="mr-2 h-5 w-5 text-neon-cyan" />
          Real-World Examples
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Hero Section CTA</CardTitle>
              <CardDescription>
                Primary call-to-action for landing pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:button {
  "url":"/signup",
  "className":"hero-cta",
  "width":50,
  "style": {
    "color": {
      "background": "linear-gradient(45deg, #ff6b9d, #c44569)",
      "text": "#ffffff"
    },
    "border": {
      "radius": "50px"
    },
    "typography": {
      "fontSize": "20px",
      "fontWeight": "700",
      "textTransform": "uppercase"
    },
    "spacing": {
      "padding": {
        "top": "20px",
        "bottom": "20px"
      }
    }
  }
} -->
<div class="wp-block-button has-custom-width 
            wp-block-button__width-50 hero-cta">
  <a class="wp-block-button__link wp-element-button" 
     href="/signup"
     style="background:linear-gradient(45deg, #ff6b9d, #c44569);
            color:#ffffff;
            border-radius:50px;
            font-size:20px;
            font-weight:700;
            text-transform:uppercase;
            padding-top:20px;
            padding-bottom:20px">
    Start Free Trial
  </a>
</div>
<!-- /wp:button -->`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Download Button</CardTitle>
              <CardDescription>
                File download with accessibility attributes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:button {
  "url":"/files/guide.pdf",
  "title":"Download Complete WordPress Guide (PDF, 2.3MB)",
  "className":"download-button",
  "style": {
    "color": {
      "background": "#4a90e2",
      "text": "#ffffff"
    },
    "border": {
      "radius": "4px"
    }
  }
} -->
<div class="wp-block-button download-button">
  <a class="wp-block-button__link wp-element-button" 
     href="/files/guide.pdf"
     title="Download Complete WordPress Guide (PDF, 2.3MB)"
     download
     style="background-color:#4a90e2;
            color:#ffffff;
            border-radius:4px">
    📥 Download Guide
  </a>
</div>
<!-- /wp:button -->`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* UX & Accessibility */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Accessibility className="mr-2 h-5 w-5 text-green-500" />
          UX & Accessibility Best Practices
        </h2>

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
                  • Use descriptive button text (avoid "click here", "read
                  more")
                </li>
                <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
                <li>• Make buttons large enough for touch targets (44px+)</li>
                <li>• Include focus states for keyboard navigation</li>
                <li>
                  • Use title attributes for additional context when needed
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <MousePointer className="mr-2 h-5 w-5" />
                User Experience Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  • Use action-oriented language ("Get", "Start", "Download")
                </li>
                <li>• Limit the number of primary CTAs per page</li>
                <li>• Make primary actions visually prominent</li>
                <li>• Test button placement and colors for conversions</li>
                <li>• Consider loading states for form submissions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Common Issues */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
          Common Issues & Solutions
        </h2>

        <div className="space-y-4">
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                <AlertCircle className="mr-2 h-5 w-5" />
                Styling Conflicts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Theme styles may override button block styling</li>
                <li>• Button groups may not align properly on mobile</li>
                <li>• Custom gradients might not work in all browsers</li>
                <li>• Focus states may be missing or poorly styled</li>
                <li>• Button widths may behave unexpectedly in containers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Lightbulb className="mr-2 h-5 w-5" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Create custom button styles as theme variations</li>
                <li>
                  • Use CSS custom properties for consistent button themes
                </li>
                <li>• Test buttons with long text content</li>
                <li>• Consider hover and active states in your designs</li>
                <li>• Use analytics to track button performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Properties Reference */}
      <div className="space-y-4">
        <Separator />
        <PropertiesReference
          blockType="button"
          title="Button Block Properties"
          description="Complete reference of all properties available to the Button block, including universal block properties and Button-specific attributes"
        />
      </div>

      {/* Related Blocks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Related Blocks
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Buttons Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Container for multiple button groups
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Paragraph Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rich text with inline links
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Navigation Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Site navigation and menus
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
