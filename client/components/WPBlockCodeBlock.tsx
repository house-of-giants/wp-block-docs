import React, { useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WPBlockHighlighter } from "@/lib/wp-block-highlighter";
import { cn } from "@/lib/utils";

interface WPBlockCodeBlockProps {
  code: string;
  showCopy?: boolean;
  showLineNumbers?: boolean;
  className?: string;
  maxHeight?: string;
}

export function WPBlockCodeBlock({
  code,
  showCopy = true,
  showLineNumbers = false,
  className,
  maxHeight = "400px",
}: WPBlockCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const highlightedHtml = useMemo(() => {
    const tokens = WPBlockHighlighter.highlight(code);
    return WPBlockHighlighter.tokensToHtml(tokens);
  }, [code]);

  const lineNumbers = useMemo(() => {
    if (!showLineNumbers) return null;
    const lines = code.split("\n");
    return lines.map((_, index) => index + 1).join("\n");
  }, [code, showLineNumbers]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy text: ", fallbackErr);
      }
      document.body.removeChild(textArea);
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
        </div>
      )}

      <div className="flex">
        {showLineNumbers && (
          <div className="bg-gray-900/50 px-3 py-4 text-xs font-mono text-gray-500 select-none border-r border-gray-800 min-w-[3rem] text-right">
            <pre style={{ lineHeight: "1.5" }}>{lineNumbers}</pre>
          </div>
        )}

        <div className="flex-1 overflow-auto" style={{ maxHeight }}>
          <pre className="p-4 text-sm font-mono leading-relaxed m-0">
            <code
              className="wp-block-code"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </pre>
        </div>
      </div>

      <style jsx global>{`
        .wp-block-code {
          font-family:
            "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono",
            Consolas, "Courier New", monospace;
        }

        .wp-highlight-block-comment-start,
        .wp-highlight-block-comment-end {
          color: #6b7280;
          font-style: italic;
        }

        .wp-highlight-block-name {
          color: #10b981;
          font-weight: 600;
        }

        .wp-highlight-block-attributes {
          color: #f59e0b;
        }

        .wp-highlight-html-tag {
          color: #3b82f6;
        }

        .wp-highlight-html-attribute {
          color: #8b5cf6;
          font-style: italic;
        }

        .wp-highlight-html-value {
          color: #ef4444;
        }

        .wp-highlight-text {
          color: #e5e7eb;
        }

        .wp-highlight-error {
          color: #dc2626;
          background-color: rgba(220, 38, 38, 0.1);
          text-decoration: underline wavy #dc2626;
        }

        /* Enhanced styling for better readability */
        .wp-block-code .wp-highlight-block-comment-start::before,
        .wp-block-code .wp-highlight-block-comment-end::before {
          content: "";
          position: absolute;
          left: -2px;
          right: -2px;
          height: 100%;
          background: rgba(107, 114, 128, 0.05);
          border-radius: 2px;
          z-index: -1;
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
          background: currentColor;
          opacity: 0.3;
        }

        /* JSON syntax highlighting within block attributes */
        .wp-highlight-block-attributes {
          position: relative;
        }

        /* Hover effects */
        .wp-block-code .wp-highlight-block-name:hover {
          color: #34d399;
          text-shadow: 0 0 8px rgba(52, 211, 153, 0.3);
        }

        .wp-block-code .wp-highlight-html-tag:hover {
          color: #60a5fa;
        }

        .wp-block-code .wp-highlight-html-attribute:hover {
          color: #a78bfa;
        }
      `}</style>
    </div>
  );
}
