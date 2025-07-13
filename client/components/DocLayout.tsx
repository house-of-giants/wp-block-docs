import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Menu,
  Search,
  BookOpen,
  Code,
  Layers,
  Zap,
  Settings,
  FileText,
  ExternalLink,
  Database,
  Navigation,
  List,
  Quote,
  Images,
  Image,
  Type,
  MousePointer,
  Columns2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/SearchModal";
import { useGlobalSearch } from "@/hooks/useGlobalSearch";

interface DocLayoutProps {
  children: ReactNode;
}

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/", icon: BookOpen },
      { name: "Anatomy of WP Blocks", href: "/anatomy", icon: Code },
    ],
  },
  {
    title: "Core Blocks",
    items: [
      { name: "Block Index", href: "/blocks", icon: BookOpen },
      { name: "Query Loop Block", href: "/blocks/query-loop", icon: Database },
      {
        name: "Navigation Block",
        href: "/blocks/navigation",
        icon: Navigation,
      },
      { name: "Group Block", href: "/blocks/group", icon: Layers },
      { name: "Columns Block", href: "/blocks/columns", icon: Columns2 },
      { name: "List Block", href: "/blocks/list", icon: List },
      { name: "Quote Block", href: "/blocks/quote", icon: Quote },
      { name: "Gallery Block", href: "/blocks/gallery", icon: Images },
      { name: "Image Block", href: "/blocks/image", icon: Image },
      { name: "Heading Block", href: "/blocks/heading", icon: Type },
      { name: "Paragraph Block", href: "/blocks/paragraph", icon: FileText },
      { name: "Button Block", href: "/blocks/button", icon: MousePointer },
    ],
  },
  {
    title: "Patterns & Examples",
    items: [
      { name: "Pattern Library", href: "/patterns", icon: Layers },
      { name: "Properties Reference", href: "/properties", icon: FileText },
    ],
  },
  {
    title: "Developer Tools",
    items: [{ name: "Block Validator", href: "/validator", icon: Code }],
  },
  {
    title: "Advanced",
    items: [
      { name: "Custom Blocks", href: "/custom-blocks", icon: Zap },
      { name: "FSE Quirks", href: "/fse-quirks", icon: Settings },
      { name: "Best Practices", href: "/best-practices", icon: FileText },
    ],
  },
];

function SidebarContent() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b border-border px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple">
            <Code className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-foreground">WP Block Docs</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center rounded-lg px-2 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-gradient-to-tr from-neon-pink/10 to-neon-blue/10 text-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-gradient-to-tr hover:from-neon-pink/10 hover:to-neon-blue/10 hover:text-foreground",
                      )}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <a
          href="https://houseofgiants.com?utm_source=wp-block-docs&utm_medium=sidebar&utm_campaign=made-with-spite"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span>
            Born from spite by{" "}
            <span className="font-bold text-neon-pink">House of Giants</span>
          </span>
          <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export function DocLayout({ children }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple search logic - navigate to properties page with search
      navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-border">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <VisuallyHidden.Root asChild>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden.Root>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form onSubmit={handleSearch} className="flex flex-1 items-center">
              <div className="relative w-full max-w-lg">
                <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground pl-3" />
                <input
                  className="block h-full w-full border-0 bg-transparent py-0 pl-10 pr-0 text-foreground placeholder:text-muted-foreground focus:ring-0 sm:text-sm"
                  placeholder="Search documentation..."
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Page content */}
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
