import React, { useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { WPBlockHighlighter } from "@/lib/wp-block-highlighter";
import { cn } from "@/lib/utils";

interface WPBlockCodeBlockProps {
  code: string;
  showCopy?: boolean;
  className?: string;
  maxHeight?: string;
}

/**
 * Minifies WordPress block syntax for copying by removing unnecessary whitespace
 * while preserving the block structure for WordPress compatibility
 */
function minifyWPBlockSyntax(code: string): string {
  let result = code;
  
  // First, handle WordPress block comments with JSON attributes
  result = result.replace(/<!--\s*wp:([^{]*?)(\{[\s\S]*?\})?\s*-->/g, (match, blockName, jsonAttributes) => {
    const cleanBlockName = blockName.trim();
    
    if (jsonAttributes) {
      try {
        // Parse and re-stringify the JSON to minify it
        const parsed = JSON.parse(jsonAttributes);
        const minifiedJson = JSON.stringify(parsed);
        return `<!-- wp:${cleanBlockName} ${minifiedJson} -->`;
      } catch {
        // If JSON parsing fails, just remove extra whitespace
        const minifiedJson = jsonAttributes.replace(/\s+/g, ' ').trim();
        return `<!-- wp:${cleanBlockName} ${minifiedJson} -->`;
      }
    }
    
    return `<!-- wp:${cleanBlockName} -->`;
  });
  
  // Remove documentation comments that are not WordPress block comments
  // Match comments that contain common documentation phrases
  result = result.replace(/<!--\s*(Content|Inner blocks go here|Hero content|Card content|Button content)[^>]*?-->/g, '');
  
  // Remove any remaining comments that are clearly not WordPress block comments
  result = result.replace(/<!--\s*(?!wp:)(?!\/wp:)[A-Za-z\s]+-->/g, '');
  
  // Handle multi-line HTML tags by joining them into single lines
  // This handles cases where HTML tags span multiple lines
  result = result.replace(/<([^>]*?)\s*\n\s*([^>]*?)>/g, (match, part1, part2) => {
    // Combine multi-line tags into single line, removing extra whitespace
    const combined = `${part1} ${part2}`.replace(/\s+/g, ' ').trim();
    return `<${combined}>`;
  });
  
  // Handle cases where there might be multiple line breaks within a tag
  result = result.replace(/<([^>]*?)(\s*\n\s*[^>]*?)+>/g, (match) => {
    // Remove the opening < and closing >
    const content = match.slice(1, -1);
    // Clean up all whitespace and newlines
    const cleaned = content.replace(/\s+/g, ' ').trim();
    return `<${cleaned}>`;
  });
  
  // Clean up the HTML content while preserving line structure
  const lines = result.split('\n');
  const cleanedLines = lines.map(line => {
    const trimmedLine = line.trim();
    
    // Skip empty lines
    if (!trimmedLine) return '';
    
    // WordPress block comments are already handled, just return them
    if (trimmedLine.startsWith('<!--') && trimmedLine.includes('wp:')) {
      return trimmedLine;
    }
    
    // Clean up HTML content and ensure single line
    return trimmedLine
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*=\s*/g, '=') // Remove spaces around equals signs
      .replace(/\s*>\s*/g, '>') // Remove spaces around closing brackets  
      .replace(/\s*<\s*/g, '<'); // Remove spaces around opening brackets
  });
  
  // Filter out empty lines and join
  return cleanedLines.filter(line => line.length > 0).join('\n');
}

export function WPBlockCodeBlock({
  code,
  showCopy = true,
  className,
  maxHeight = "400px",
}: WPBlockCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const highlightedHtml = useMemo(() => {
    const tokens = WPBlockHighlighter.highlight(code);
    return WPBlockHighlighter.tokensToHtml(tokens);
  }, [code]);

  const handleCopy = async () => {
    try {
      const minifiedCode = minifyWPBlockSyntax(code);
      await navigator.clipboard.writeText(minifiedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "relative group bg-gray-950 rounded-lg border border-gray-800 overflow-hidden",
        className,
      )}
    >
      {showCopy && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8 w-8 p-0 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700"
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3 text-gray-400" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy minified code (WordPress-ready)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      <div className="overflow-auto" style={{ maxHeight }}>
        <pre className="p-4 text-sm font-mono leading-relaxed m-0">
          <code
            className="wp-block-code"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </pre>
      </div>

      <style>{`
        .wp-block-code {
          font-family:
            "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono",
            Consolas, "Courier New", monospace;
        }

        .wp-highlight-block-comment-start,
        .wp-highlight-block-comment-end {
          color: hsl(280, 10%, 60%);
          font-style: italic;
          opacity: 0.8;
        }

        .wp-highlight-block-name {
          color: hsl(320, 100%, 70%);
          font-weight: 600;
          text-shadow: 0 0 10px hsla(320, 100%, 70%, 0.5);
        }

        .wp-highlight-block-attributes {
          color: hsl(180, 100%, 70%);
          text-shadow: 0 0 8px hsla(180, 100%, 70%, 0.4);
        }

        .wp-highlight-html-tag {
          color: hsl(200, 100%, 70%);
          text-shadow: 0 0 6px hsla(200, 100%, 70%, 0.3);
        }

        .wp-highlight-html-attribute {
          color: hsl(260, 100%, 75%);
          font-style: italic;
          text-shadow: 0 0 6px hsla(260, 100%, 75%, 0.3);
        }

        .wp-highlight-html-value {
          color: hsl(320, 60%, 60%);
          text-shadow: 0 0 4px hsla(320, 60%, 60%, 0.3);
        }

        .wp-highlight-text {
          color: hsl(280, 30%, 90%);
        }

        .wp-highlight-error {
          color: hsl(0, 70%, 55%);
          background-color: hsla(0, 70%, 55%, 0.1);
          text-decoration: underline wavy hsl(0, 70%, 55%);
          text-shadow: 0 0 8px hsla(0, 70%, 55%, 0.5);
        }


        .wp-block-code .wp-highlight-block-name {
          position: relative;
        }

        .wp-block-code .wp-highlight-block-name::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, hsl(320, 100%, 70%), transparent);
          opacity: 0.6;
        }

        /* JSON syntax highlighting within block attributes */
        .wp-highlight-block-attributes {
          position: relative;
          background: hsla(180, 100%, 70%, 0.05);
          border-radius: 3px;
          padding: 1px 2px;
        }

        /* Enhanced hover effects with retrowave glow */
        .wp-block-code .wp-highlight-block-name:hover {
          color: hsl(320, 100%, 80%);
          text-shadow: 0 0 15px hsla(320, 100%, 70%, 0.8);
          transition: all 0.2s ease-in-out;
        }

        .wp-block-code .wp-highlight-html-tag:hover {
          color: hsl(200, 100%, 80%);
          text-shadow: 0 0 12px hsla(200, 100%, 70%, 0.6);
          transition: all 0.2s ease-in-out;
        }

        .wp-block-code .wp-highlight-html-attribute:hover {
          color: hsl(260, 100%, 85%);
          text-shadow: 0 0 12px hsla(260, 100%, 75%, 0.6);
          transition: all 0.2s ease-in-out;
        }

        .wp-block-code .wp-highlight-block-attributes:hover {
          color: hsl(180, 100%, 80%);
          text-shadow: 0 0 12px hsla(180, 100%, 70%, 0.6);
          background: hsla(180, 100%, 70%, 0.08);
          transition: all 0.2s ease-in-out;
        }

        .wp-block-code .wp-highlight-html-value:hover {
          color: hsl(320, 60%, 70%);
          text-shadow: 0 0 8px hsla(320, 60%, 60%, 0.5);
          transition: all 0.2s ease-in-out;
        }

        /* Pulse animation for block names */
        @keyframes neon-pulse {
          0%, 100% { text-shadow: 0 0 10px hsla(320, 100%, 70%, 0.5); }
          50% { text-shadow: 0 0 20px hsla(320, 100%, 70%, 0.8); }
        }

        .wp-block-code .wp-highlight-block-name:focus {
          animation: neon-pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
