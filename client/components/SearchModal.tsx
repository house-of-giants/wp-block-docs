import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  BookOpen,
  Database,
  Navigation,
  List,
  Quote,
  Images,
  Image,
  Type,
  FileText,
  MousePointer,
  Layers,
  Grid3X3,
  Zap,
  Settings,
  Code,
  ArrowRight,
  Command,
  Hash,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ComponentType<any>;
  keywords: string[];
  priority: number; // Higher = more important
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Comprehensive search data
const searchData: SearchResult[] = [
  // Pages
  {
    id: "home",
    title: "Introduction",
    description: "Getting started with WordPress block documentation",
    url: "/",
    category: "Getting Started",
    icon: BookOpen,
    keywords: ["home", "introduction", "getting started", "overview", "blocks"],
    priority: 10,
  },
  {
    id: "block-index",
    title: "Block Index",
    description: "Browse all documented WordPress core blocks",
    url: "/blocks",
    category: "Overview",
    icon: BookOpen,
    keywords: ["blocks", "index", "overview", "catalog", "reference"],
    priority: 9,
  },

  // Essential Blocks
  {
    id: "query-loop",
    title: "Query Loop Block",
    description:
      "Dynamic content display for posts, pages, and custom post types",
    url: "/blocks/query-loop",
    category: "Dynamic",
    icon: Database,
    keywords: [
      "query",
      "loop",
      "dynamic",
      "posts",
      "pages",
      "custom post types",
      "pagination",
      "template parts",
    ],
    priority: 9,
  },
  {
    id: "navigation",
    title: "Navigation Block",
    description: "Responsive site navigation with mobile menu support",
    url: "/blocks/navigation",
    category: "Navigation",
    icon: Navigation,
    keywords: [
      "navigation",
      "menu",
      "nav",
      "mobile",
      "responsive",
      "dropdown",
      "site navigation",
    ],
    priority: 9,
  },
  {
    id: "group",
    title: "Group Block",
    description: "Container block for organizing and styling content layouts",
    url: "/blocks/group",
    category: "Layout",
    icon: Layers,
    keywords: ["group", "container", "layout", "wrapper", "semantic", "div"],
    priority: 8,
  },
  {
    id: "columns",
    title: "Columns Block",
    description: "Responsive grid system for multi-column layouts",
    url: "/blocks/columns",
    category: "Layout",
    icon: Grid3X3,
    keywords: [
      "columns",
      "grid",
      "layout",
      "responsive",
      "multi-column",
      "flexbox",
    ],
    priority: 8,
  },

  // Content Blocks
  {
    id: "list",
    title: "List Block",
    description: "Ordered and unordered lists with nested structure support",
    url: "/blocks/list",
    category: "Content",
    icon: List,
    keywords: [
      "list",
      "ordered",
      "unordered",
      "nested",
      "bullets",
      "numbers",
      "ul",
      "ol",
    ],
    priority: 7,
  },
  {
    id: "quote",
    title: "Quote Block",
    description: "Blockquotes and testimonials with citation support",
    url: "/blocks/quote",
    category: "Content",
    icon: Quote,
    keywords: ["quote", "blockquote", "testimonial", "citation", "pullquote"],
    priority: 7,
  },
  {
    id: "gallery",
    title: "Gallery Block",
    description:
      "Image collections with grid layouts and lightbox functionality",
    url: "/blocks/gallery",
    category: "Media",
    icon: Images,
    keywords: ["gallery", "images", "photos", "grid", "lightbox", "portfolio"],
    priority: 7,
  },
  {
    id: "image",
    title: "Image Block",
    description:
      "Media display with responsive sizing and accessibility features",
    url: "/blocks/image",
    category: "Media",
    icon: Image,
    keywords: [
      "image",
      "photo",
      "media",
      "responsive",
      "alt text",
      "accessibility",
    ],
    priority: 6,
  },
  {
    id: "heading",
    title: "Heading Block",
    description: "SEO-optimized headings with proper hierarchy and styling",
    url: "/blocks/heading",
    category: "Typography",
    icon: Type,
    keywords: [
      "heading",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "seo",
      "hierarchy",
      "title",
    ],
    priority: 6,
  },
  {
    id: "paragraph",
    title: "Paragraph Block",
    description: "Rich text content with formatting and typography options",
    url: "/blocks/paragraph",
    category: "Typography",
    icon: FileText,
    keywords: [
      "paragraph",
      "text",
      "content",
      "rich text",
      "formatting",
      "typography",
    ],
    priority: 6,
  },
  {
    id: "button",
    title: "Button Block",
    description: "Call-to-action buttons with styling and link options",
    url: "/blocks/button",
    category: "Interactive",
    icon: MousePointer,
    keywords: [
      "button",
      "cta",
      "call to action",
      "link",
      "click",
      "interactive",
    ],
    priority: 6,
  },

  // Tools & References
  {
    id: "properties",
    title: "Properties Reference",
    description: "Complete guide to block attributes and properties",
    url: "/properties",
    category: "Reference",
    icon: FileText,
    keywords: [
      "properties",
      "attributes",
      "reference",
      "api",
      "documentation",
      "parameters",
    ],
    priority: 8,
  },
  {
    id: "patterns",
    title: "Pattern Library",
    description: "Ready-made block combinations for common layouts",
    url: "/patterns",
    category: "Examples",
    icon: Zap,
    keywords: [
      "patterns",
      "templates",
      "examples",
      "layouts",
      "combinations",
      "library",
    ],
    priority: 7,
  },
  {
    id: "validator",
    title: "Block Validator",
    description: "Test your block markup for errors and best practices",
    url: "/validator",
    category: "Tools",
    icon: Code,
    keywords: [
      "validator",
      "validation",
      "test",
      "errors",
      "markup",
      "syntax",
      "check",
    ],
    priority: 7,
  },

  // Advanced
  {
    id: "fse-quirks",
    title: "FSE Quirks",
    description: "Full Site Editing quirks, known issues, and workarounds",
    url: "/fse-quirks",
    category: "Advanced",
    icon: Settings,
    keywords: [
      "fse",
      "full site editing",
      "quirks",
      "issues",
      "workarounds",
      "troubleshooting",
    ],
    priority: 5,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    description: "WordPress block development best practices and guidelines",
    url: "/best-practices",
    category: "Advanced",
    icon: FileText,
    keywords: [
      "best practices",
      "guidelines",
      "recommendations",
      "standards",
      "development",
    ],
    priority: 6,
  },
];

// Recent searches storage
const RECENT_SEARCHES_KEY = "wp-block-docs-recent-searches";
const MAX_RECENT_SEARCHES = 5;

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const navigate = useNavigate();

  // Load recent searches on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch (error) {
      console.warn("Could not load recent searches:", error);
    }
  }, []);

  // Save recent search
  const saveRecentSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) return;

      try {
        const updated = [
          searchQuery,
          ...recentSearches.filter((s) => s !== searchQuery),
        ].slice(0, MAX_RECENT_SEARCHES);

        setRecentSearches(updated);
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch (error) {
        console.warn("Could not save recent search:", error);
      }
    },
    [recentSearches],
  );

  // Search functionality
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(" ").filter(Boolean);

    return searchData
      .map((item) => {
        let score = 0;
        const searchableText = [
          item.title,
          item.description,
          item.category,
          ...item.keywords,
        ]
          .join(" ")
          .toLowerCase();

        // Calculate relevance score
        searchTerms.forEach((term) => {
          // Exact title match (highest priority)
          if (item.title.toLowerCase().includes(term)) {
            score += 10;
          }
          // Category match
          if (item.category.toLowerCase().includes(term)) {
            score += 8;
          }
          // Keywords match
          if (item.keywords.some((keyword) => keyword.includes(term))) {
            score += 6;
          }
          // Description match
          if (item.description.toLowerCase().includes(term)) {
            score += 4;
          }
          // General content match
          if (searchableText.includes(term)) {
            score += 2;
          }
        });

        // Boost by item priority
        score += item.priority;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Limit results
  }, [query]);

  // Handle navigation
  const handleSelect = useCallback(
    (url: string) => {
      saveRecentSearch(query);
      navigate(url);
      onClose();
      setQuery("");
      setSelectedIndex(0);
    },
    [query, navigate, onClose, saveRecentSearch],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < searchResults.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : searchResults.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            handleSelect(searchResults[selectedIndex].url);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, searchResults, selectedIndex, handleSelect, onClose]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Reset when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Platform detection for keyboard shortcut display
  const isMac =
    typeof navigator !== "undefined" &&
    navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  // Highlight search terms in text
  const highlightSearchTerms = useCallback((text: string, terms: string[]) => {
    if (!terms.length) return text;

    let highlighted = text;
    terms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi");
      highlighted = highlighted.replace(
        regex,
        '<mark class="bg-yellow-200 dark:bg-yellow-900 rounded px-0.5">$1</mark>',
      );
    });
    return highlighted;
  }, []);

  const searchTerms = useMemo(() => {
    return query.toLowerCase().split(" ").filter(Boolean);
  }, [query]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xl border-border/50">
        <DialogHeader className="sr-only">
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <Input
            placeholder="Search blocks, properties, patterns..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-base placeholder:text-muted-foreground bg-transparent"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
          <div className="flex items-center gap-1 ml-3">
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 flex">
              {isMac ? "⌘" : "Ctrl"}
            </kbd>
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 flex">
              K
            </kbd>
          </div>
        </div>

        {/* Search Results or Recent Searches */}
        <div className="max-h-[400px] overflow-y-auto">
          {!query.trim() && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Recent Searches
                </span>
              </div>
              <div className="space-y-1">
                {recentSearches.map((recentQuery, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(recentQuery)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    {recentQuery}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!query.trim() && recentSearches.length === 0 && (
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Search for blocks, properties, patterns, and more...
              </p>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
                <span>Try:</span>
                <Badge variant="outline" className="text-xs">
                  query loop
                </Badge>
                <Badge variant="outline" className="text-xs">
                  navigation
                </Badge>
                <Badge variant="outline" className="text-xs">
                  properties
                </Badge>
              </div>
            </div>
          )}

          {query.trim() && searchResults.length === 0 && (
            <div className="p-8 text-center">
              <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm font-medium">No results found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for blocks, properties, or documentation topics
              </p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="p-2">
              {searchResults.map((result, index) => {
                const Icon = result.icon;
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result.url)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                      isSelected
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-muted/50",
                    )}
                  >
                    <div
                      className={cn(
                        "p-2 rounded-md",
                        isSelected ? "bg-background/50" : "bg-muted",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-medium truncate"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerms(
                              result.title,
                              searchTerms,
                            ),
                          }}
                        />
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {result.category}
                        </Badge>
                      </div>
                      <p
                        className="text-sm text-muted-foreground truncate"
                        dangerouslySetInnerHTML={{
                          __html: highlightSearchTerms(
                            result.description,
                            searchTerms,
                          ),
                        }}
                      />
                    </div>

                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isSelected ? "translate-x-1" : "",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="h-4 select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-[10px] font-medium opacity-100 flex">
                  ↑↓
                </kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="h-4 select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-[10px] font-medium opacity-100 flex">
                  ↵
                </kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="h-4 select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-[10px] font-medium opacity-100 flex">
                  Esc
                </kbd>
                <span>Close</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span>Powered by</span>
              <Hash className="h-3 w-3" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
