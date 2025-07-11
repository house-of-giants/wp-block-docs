import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
  showCopy?: boolean;
}

export function CodeBlock({
  code,
  language = "html",
  filename,
  className,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for when clipboard API is blocked
      try {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy text: ", err, fallbackErr);
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      {filename && (
        <div className="bg-muted/50 px-4 py-2 border-b border-border/50 rounded-t-lg">
          <span className="text-sm font-medium text-muted-foreground">
            {filename}
          </span>
        </div>
      )}
      <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto relative">
        {showCopy && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/10 hover:bg-background/20"
            title={copied ? "Copied!" : "Copy code"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
        <pre className="text-neon-cyan">
          <code className={language ? `language-${language}` : ""}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
