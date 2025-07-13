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
  Menu,
  Smartphone,
  Monitor,
  Settings,
  Lightbulb,
  Navigation,
} from "lucide-react";
import { PropertiesReference } from "@/components/PropertiesReference";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";
import {
  SEO,
  generateDocumentationSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NavigationBlock() {
  const navigationSchema = generateDocumentationSchema(
    "WordPress Navigation Block - Complete Site Navigation Guide",
    "Master WordPress Navigation block for responsive site navigation. Complete guide to menus, mobile navigation, dropdowns, and block theme navigation patterns.",
    "https://wpblockdocs.com/navigation",
    "WordPress Block Documentation",
    [
      "WordPress Navigation block",
      "WordPress menu block",
      "Site navigation WordPress",
      "Responsive navigation",
      "Mobile menu WordPress",
      "Navigation block theme",
      "WordPress dropdown menu",
      "FSE navigation",
      "Block theme menu",
      "WordPress navigation markup",
    ],
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "WP Block Docs", url: "https://wpblockdocs.com/" },
    { name: "Core Blocks", url: "https://wpblockdocs.com/#core-blocks" },
    { name: "Navigation Block", url: "https://wpblockdocs.com/navigation" },
  ]);

  return (
    <>
      <SEO
        title="WordPress Navigation Block - Complete Site Navigation Guide"
        description="Master WordPress Navigation block for responsive site navigation. Complete guide to menus, mobile navigation, dropdowns, and block theme navigation patterns with accessible markup."
        keywords="WordPress Navigation block, WordPress menu block, Site navigation WordPress, Responsive navigation, Mobile menu WordPress, Navigation block theme, WordPress dropdown menu"
        canonical="/navigation"
        ogType="article"
        schema={[navigationSchema, breadcrumbSchema]}
        lastModified="2024-01-15T10:00:00Z"
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-neon-cyan/20">
              <Navigation className="h-6 w-6 text-neon-cyan" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-0">
              Navigation Block
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The Navigation block creates responsive, accessible site navigation
            menus. Essential for block themes, it replaces traditional WordPress
            menus with a flexible, block-based approach.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
            >
              Site Navigation
            </Badge>
            <Badge variant="outline">Block Themes</Badge>
            <Badge variant="outline">Responsive</Badge>
            <Badge variant="outline">Accessibility</Badge>
            <Badge variant="outline">Mobile Menu</Badge>
          </div>
        </div>

        <Separator />

        {/* Basic Usage */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Menu className="mr-2 h-5 w-5 text-neon-cyan" />
                Basic Navigation
              </CardTitle>
              <CardDescription>
                Simple horizontal navigation with manual links
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-neon-cyan" />
                <span className="text-sm font-medium text-muted-foreground">
                  Perfect for Header Template Parts
                </span>
              </div>
              <WPBlockCodeBlock
                code={`<!-- wp:navigation {"layout":{"type":"flex","justifyContent":"left"}} -->
<nav class="wp-block-navigation" aria-label="Main navigation">
  <ul class="wp-block-navigation__container">
    <!-- wp:navigation-link {"label":"Home","url":"/"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/">Home</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"About","url":"/about"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/about">About</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"Services","url":"/services"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/services">Services</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"Contact","url":"/contact"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/contact">Contact</a>
    </li>
    <!-- /wp:navigation-link -->
  </ul>
</nav>
<!-- /wp:navigation -->`}
              />
              {/* Note about navigation block recovery and portability */}
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
                <AlertTitle>Warning: Navigation Block Portability</AlertTitle>
                <AlertDescription>
                  <b>After pasting this navigation block, using <i>"Attempt Recovery"</i> in WordPress will convert it to reference a menu by <code>ref</code> (menu ID).</b> <br />
                  This menu ID is unique to your site. If you copy the recovered block to another site, you will need to use <b>"Attempt Recovery"</b> again to generate a new menu. <br />
                  <span className="text-destructive">For best portability, always copy the original manual-link version, not the recovered <code>ref</code> version.</span>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Navigation Patterns
          </h2>

          <Tabs defaultValue="responsive" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
              <TabsTrigger value="dropdown">Dropdown</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Menu</TabsTrigger>
              <TabsTrigger value="styled">Styled Navigation</TabsTrigger>
            </TabsList>

            <TabsContent value="responsive" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Responsive Navigation with Breakpoints</CardTitle>
                  <CardDescription>
                    Navigation that adapts to different screen sizes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:navigation {"layout":{"type":"flex","justifyContent":"space-between","flexWrap":"wrap"},"overlayMenu":"mobile","overlayBackgroundColor":"background","overlayTextColor":"foreground"} -->
<nav class="wp-block-navigation has-background-background-color has-foreground-color" aria-label="Main navigation">
  <ul class="wp-block-navigation__container">
    <!-- wp:navigation-link {"label":"Home","url":"/"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/">Home</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"About","url":"/about"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/about">About</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"Blog","url":"/blog"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/blog">Blog</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"Contact","url":"/contact"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/contact">Contact</a>
    </li>
    <!-- /wp:navigation-link -->
  </ul>
  
  <!-- Mobile menu button (automatically generated) -->
  <button class="wp-block-navigation__responsive-container-open" aria-label="Open menu">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
    </svg>
  </button>
</nav>
<!-- /wp:navigation -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dropdown" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Dropdown Submenu Navigation</CardTitle>
                  <CardDescription>
                    Multi-level navigation with dropdown submenus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:navigation {"layout":{"type":"flex","justifyContent":"left"}} -->
<nav class="wp-block-navigation" aria-label="Main navigation">
  <ul class="wp-block-navigation__container">
    <!-- wp:navigation-link {"label":"Home","url":"/"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/">Home</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-submenu {"label":"Services","url":"/services"} -->
    <li class="wp-block-navigation-item has-child">
      <a class="wp-block-navigation-item__content" href="/services">Services</a>
      <button class="wp-block-navigation__submenu-icon" aria-label="Services submenu">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 4L6 8.5 10.5 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      </button>
      
      <ul class="wp-block-navigation__submenu-container">
        <!-- wp:navigation-link {"label":"Web Design","url":"/services/web-design"} -->
        <li class="wp-block-navigation-item">
          <a class="wp-block-navigation-item__content" href="/services/web-design">Web Design</a>
        </li>
        <!-- /wp:navigation-link -->
        
        <!-- wp:navigation-link {"label":"Development","url":"/services/development"} -->
        <li class="wp-block-navigation-item">
          <a class="wp-block-navigation-item__content" href="/services/development">Development</a>
        </li>
        <!-- /wp:navigation-link -->
        
        <!-- wp:navigation-link {"label":"SEO","url":"/services/seo"} -->
        <li class="wp-block-navigation-item">
          <a class="wp-block-navigation-item__content" href="/services/seo">SEO</a>
        </li>
        <!-- /wp:navigation-link -->
      </ul>
    </li>
    <!-- /wp:navigation-submenu -->
    
    <!-- wp:navigation-link {"label":"About","url":"/about"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/about">About</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {"label":"Contact","url":"/contact"} -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/contact">Contact</a>
    </li>
    <!-- /wp:navigation-link -->
  </ul>
</nav>
<!-- /wp:navigation -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Mobile-First Navigation</CardTitle>
                  <CardDescription>
                    Navigation optimized for mobile devices with overlay
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:navigation {
  "overlayMenu":"always",
  "hasIcon":true,
  "overlayBackgroundColor":"black",
  "overlayTextColor":"white",
  "layout":{"type":"flex","justifyContent":"right"}
} -->
<nav class="wp-block-navigation has-modal-open" aria-label="Main navigation">
  <!-- Mobile menu button -->
  <button 
    class="wp-block-navigation__responsive-container-open" 
    aria-label="Open menu"
    aria-expanded="false"
    aria-controls="modal-1"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
    </svg>
  </button>
  
  <!-- Mobile overlay menu -->
  <div 
    class="wp-block-navigation__responsive-container" 
    id="modal-1"
    aria-hidden="true"
  >
    <div class="wp-block-navigation__responsive-close">
      <div class="wp-block-navigation__responsive-dialog" role="dialog" aria-label="Menu">
        <button 
          class="wp-block-navigation__responsive-container-close" 
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>
        
        <div class="wp-block-navigation__responsive-container-content">
          <ul class="wp-block-navigation__container">
            <!-- wp:navigation-link {"label":"Home","url":"/"} -->
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/">Home</a>
            </li>
            <!-- /wp:navigation-link -->
            
            <!-- wp:navigation-link {"label":"About","url":"/about"} -->
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/about">About</a>
            </li>
            <!-- /wp:navigation-link -->
            
            <!-- wp:navigation-link {"label":"Services","url":"/services"} -->
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/services">Services</a>
            </li>
            <!-- /wp:navigation-link -->
            
            <!-- wp:navigation-link {"label":"Blog","url":"/blog"} -->
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/blog">Blog</a>
            </li>
            <!-- /wp:navigation-link -->
            
            <!-- wp:navigation-link {"label":"Contact","url":"/contact"} -->
            <li class="wp-block-navigation-item">
              <a class="wp-block-navigation-item__content" href="/contact">Contact</a>
            </li>
            <!-- /wp:navigation-link -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
<!-- /wp:navigation -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styled" className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle>Styled Navigation with Custom CSS</CardTitle>
                  <CardDescription>
                    Navigation with custom styling and spacing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WPBlockCodeBlock
                    code={`<!-- wp:navigation {
  "style":{
    "spacing":{
      "blockGap":"2rem"
    },
    "typography":{
      "fontSize":"1rem",
      "fontWeight":"500"
    }
  },
  "layout":{"type":"flex","justifyContent":"center"}
} -->
<nav class="wp-block-navigation" style="font-size:1rem;font-weight:500;gap:2rem" aria-label="Main navigation">
  <ul class="wp-block-navigation__container">
    <!-- wp:navigation-link {
      "label":"Home",
      "url":"/",
      "style":{
        "elements":{
          "link":{
            "color":{"text":"#ff6b6b"}
          }
        }
      }
    } -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/" style="color:#ff6b6b">Home</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {
      "label":"Portfolio",
      "url":"/portfolio",
      "style":{
        "elements":{
          "link":{
            "color":{"text":"#4ecdc4"}
          }
        }
      }
    } -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/portfolio" style="color:#4ecdc4">Portfolio</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {
      "label":"Blog",
      "url":"/blog",
      "style":{
        "elements":{
          "link":{
            "color":{"text":"#45b7d1"}
          }
        }
      }
    } -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/blog" style="color:#45b7d1">Blog</a>
    </li>
    <!-- /wp:navigation-link -->
    
    <!-- wp:navigation-link {
      "label":"Contact",
      "url":"/contact",
      "style":{
        "elements":{
          "link":{
            "color":{"text":"#f7b731"}
          }
        }
      }
    } -->
    <li class="wp-block-navigation-item">
      <a class="wp-block-navigation-item__content" href="/contact" style="color:#f7b731">Contact</a>
    </li>
    <!-- /wp:navigation-link -->
  </ul>
</nav>
<!-- /wp:navigation -->`}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Key Concepts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Navigation Concepts & Best Practices
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-amber-500/10 border-amber-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300">
                      Menu vs Navigation Block
                    </h3>
                    <p className="text-sm text-foreground">
                      Navigation blocks replace traditional WordPress menus in
                      block themes. They can reference existing menus via ref
                      attribute or use manual links.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                      Mobile Responsiveness
                    </h3>
                    <p className="text-sm text-foreground">
                      Use overlayMenu attribute for mobile behavior: "never",
                      "mobile", or "always". Mobile overlays provide better UX
                      on small screens.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">
                      Accessibility Features
                    </h3>
                    <p className="text-sm text-foreground">
                      Navigation blocks include proper ARIA labels, keyboard
                      navigation, and screen reader support. Always include
                      aria-label on the nav element.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300">
                      Template Part Integration
                    </h3>
                    <p className="text-sm text-foreground">
                      Navigation blocks are typically placed in header template
                      parts. Use consistent styling across all pages by
                      centralizing navigation in template parts.
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
            Navigation Properties
          </h2>
          <PropertiesReference blockType="navigation" />
        </div>
      </div>
    </>
  );
}
