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
  Layers,
  Code,
  Eye,
  Settings,
  Lightbulb,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";

export default function GroupBlock() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-purple/20">
            <Layers className="h-6 w-6 text-neon-purple" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Group Block</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          The Group block is a container block that allows you to group other
          blocks together and apply shared styling, spacing, and layout
          properties.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-purple/20 text-neon-purple border-neon-purple/30"
          >
            Core Block
          </Badge>
          <Badge variant="outline">Layout Container</Badge>
          <Badge variant="outline">Styling Support</Badge>
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
            <CardTitle className="text-lg">Minimal Group Block</CardTitle>
            <CardDescription>
              The simplest form of a Group block
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-neon-cyan">
                {`<!-- wp:group -->
<div class="wp-block-group">
  <!-- Inner blocks go here -->
</div>
<!-- /wp:group -->`}
              </pre>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Basic group container
              </span>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Common Attributes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Settings className="mr-2 h-5 w-5 text-neon-pink" />
          Common Attributes
        </h2>

        <Tabs defaultValue="spacing" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="spacing" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Padding & Margin</CardTitle>
                <CardDescription>
                  Control spacing around and inside the group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:group {
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50",
        "left": "var:preset|spacing|30",
        "right": "var:preset|spacing|30"
      },
      "margin": {
        "top": "var:preset|spacing|40"
      }
    }
  }
} -->
<div class="wp-block-group" 
     style="margin-top:var(--wp--preset--spacing--40);
            padding-top:var(--wp--preset--spacing--50);
            padding-right:var(--wp--preset--spacing--30);
            padding-bottom:var(--wp--preset--spacing--50);
            padding-left:var(--wp--preset--spacing--30)">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="background" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Background Colors & Images</CardTitle>
                <CardDescription>
                  Apply background styling to the group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:group {
  "backgroundColor": "primary",
  "style": {
    "color": {
      "background": "#ff6b9d"
    }
  }
} -->
<div class="wp-block-group has-primary-background-color has-background" 
     style="background-color:#ff6b9d">
  <!-- Content -->
</div>
<!-- /wp:group -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layout" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>Layout Settings</CardTitle>
                <CardDescription>
                  Configure group layout behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:group {
  "layout": {
    "type": "constrained",
    "contentSize": "800px",
    "wideSize": "1200px"
  }
} -->
<div class="wp-block-group">
  <!-- Content constrained to max-width -->
</div>
<!-- /wp:group -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle>CSS Classes & Anchor</CardTitle>
                <CardDescription>
                  Custom CSS and anchor functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-neon-cyan">
                    {`<!-- wp:group {
  "className": "custom-group-class",
  "anchor": "section-hero"
} -->
<div id="section-hero" class="wp-block-group custom-group-class">
  <!-- Content with custom ID and class -->
</div>
<!-- /wp:group -->`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>
                A typical hero section with background and spacing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:group {
  "className": "hero-section",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|80",
        "bottom": "var:preset|spacing|80"
      }
    },
    "color": {
      "background": "#1a1a2e"
    }
  },
  "layout": {
    "type": "constrained"
  }
} -->
<div class="wp-block-group hero-section" 
     style="background-color:#1a1a2e;
            padding-top:var(--wp--preset--spacing--80);
            padding-bottom:var(--wp--preset--spacing--80)">
  <!-- Hero content -->
</div>
<!-- /wp:group -->`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle>Card Container</CardTitle>
              <CardDescription>
                A card-style container with border and shadow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-neon-cyan text-xs">
                  {`<!-- wp:group {
  "className": "card",
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|50",
        "right": "var:preset|spacing|50",
        "bottom": "var:preset|spacing|50",
        "left": "var:preset|spacing|50"
      }
    },
    "border": {
      "radius": "8px",
      "width": "1px",
      "color": "#e5e7eb"
    }
  }
} -->
<div class="wp-block-group card" 
     style="border-color:#e5e7eb;
            border-width:1px;
            border-radius:8px;
            padding:var(--wp--preset--spacing--50)">
  <!-- Card content -->
</div>
<!-- /wp:group -->`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Gotchas & Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          Tips & Gotchas
        </h2>

        <div className="space-y-4">
          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <AlertCircle className="mr-2 h-5 w-5" />
                Theme Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  • Some themes override Group block styles - check your theme's
                  CSS
                </li>
                <li>
                  • Block spacing presets depend on theme.json configuration
                </li>
                <li>
                  • Background colors may not display if theme lacks color
                  palette
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Lightbulb className="mr-2 h-5 w-5" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  • Use CSS classes instead of inline styles when possible
                </li>
                <li>• Prefer spacing presets over hardcoded values</li>
                <li>• Test group blocks across different screen sizes</li>
                <li>• Use semantic anchor IDs for navigation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Blocks */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Related Blocks
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Columns Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create multi-column layouts
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Stack Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Vertical stacking container
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Row Block</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Horizontal flex container
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
