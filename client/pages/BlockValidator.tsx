import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Code,
  Lightbulb,
  Zap,
  Copy,
  RefreshCw,
  FileText,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { WPBlockCodeBlock } from "@/components/WPBlockCodeBlock";

interface ValidationResult {
  type: "error" | "warning" | "success" | "info";
  message: string;
  line?: number;
  suggestion?: string;
  fixedCode?: string;
}

interface BlockInfo {
  blockType: string;
  attributes: Record<string, any>;
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export default function BlockValidator() {
  const [inputCode, setInputCode] = useState("");
  const [results, setResults] = useState<ValidationResult[]>([]);
  const [blockInfo, setBlockInfo] = useState<BlockInfo[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // Sample code for demonstration
  const sampleCode = `<!-- wp:group {
  "metadata": {
    "name": "Hero Section",
    "categories": ["hero"]
  },
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|80"
      }
    }
  }
} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--80)">
  <!-- wp:heading {"level":1} -->
  <h1 class="wp-block-heading">Welcome to Our Site</h1>
  <!-- /wp:heading -->
  
    <!-- wp:paragraph -->
  <p>This is a sample paragraph in our hero section.</p>
  <!-- /wp:paragraph -->

  <!-- wp:image {"url":"https://example.com/image.jpg"} -->
  <figure class="wp-block-image">
    <img src="https://example.com/image.jpg" alt="Sample image" />
  </figure>
  <!-- /wp:image -->

  <!-- wp:button {"linkTarget":"_blank","url":"https://external-site.com"} -->
  <div class="wp-block-button">
    <a class="wp-block-button__link" href="https://external-site.com" target="_blank">Click Here</a>
  </div>
  <!-- /wp:button -->
</div>
<!-- /wp:group -->`;

  // Advanced block parser that handles complex multi-line structures
  const parseBlocks = (code: string) => {
    const blocks: Array<{
      type: string;
      attributes: string;
      startLine: number;
      endLine?: number;
      isValid: boolean;
      errors: string[];
    }> = [];

    const lines = code.split("\n");
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      // Match opening block comment
      const openMatch = line.match(/^<!--\s*wp:(\w+)(?:\s|$)/);
      if (openMatch) {
        const blockType = openMatch[1];
        let attributesStr = "";
        let currentLine = i;
        let fullComment = lines[i];

        // Handle multi-line block comments
        while (!fullComment.includes("-->") && currentLine < lines.length - 1) {
          currentLine++;
          fullComment += "\n" + lines[currentLine];
        }

        // Extract attributes if present
        const attrMatch = fullComment.match(
          /<!--\s*wp:\w+\s+({[\s\S]*?})\s*-->/,
        );
        if (attrMatch) {
          attributesStr = attrMatch[1];
        }

        blocks.push({
          type: blockType,
          attributes: attributesStr,
          startLine: i + 1,
          isValid: true,
          errors: [],
        });

        i = currentLine;
      }
      i++;
    }

    return blocks;
  };

  const validateBlockMarkup = (code: string): ValidationResult[] => {
    const results: ValidationResult[] = [];
    const lines = code.split("\n");

    // Check for basic WordPress block structure
    if (!code.includes("<!-- wp:")) {
      results.push({
        type: "error",
        message: "No WordPress block comments found",
        suggestion: "WordPress blocks must start with <!-- wp:blockname -->",
      });
      return results;
    }

    // Parse all blocks first
    const parsedBlocks = parseBlocks(code);

    // Track opened and closed blocks with enhanced logic
    const blockStack: Array<{ type: string; line: number }> = [];
    let lineNumber = 0;

    lines.forEach((line, index) => {
      lineNumber = index + 1;
      const trimmed = line.trim();

      // Handle opening block comments (including multi-line)
      const openMatch = trimmed.match(/^<!--\s*wp:(\w+)/);
      if (openMatch) {
        const blockType = openMatch[1];
        blockStack.push({ type: blockType, line: lineNumber });

        // Find the complete block definition
        let fullComment = line;
        let checkLine = index;
        while (!fullComment.includes("-->") && checkLine < lines.length - 1) {
          checkLine++;
          fullComment += "\n" + lines[checkLine];
        }

        // Extract and validate JSON attributes
        const attrMatch = fullComment.match(
          /<!--\s*wp:\w+\s+({[\s\S]*?})\s*-->/,
        );
        if (attrMatch) {
          const attributesStr = attrMatch[1];
          try {
            const parsed = JSON.parse(attributesStr);
            results.push({
              type: "success",
              message: `Valid ${blockType} block with proper JSON attributes`,
              line: lineNumber,
            });

            // Block-specific validations with parsed attributes
            if (blockType === "heading" && parsed.level === 1) {
              const h1Count = parsedBlocks.filter((b) => {
                try {
                  const attrs = JSON.parse(b.attributes || "{}");
                  return b.type === "heading" && attrs.level === 1;
                } catch {
                  return false;
                }
              }).length;

              if (h1Count > 1) {
                results.push({
                  type: "warning",
                  message:
                    "Multiple H1 headings found - only one H1 per page is recommended for SEO",
                  line: lineNumber,
                  suggestion: "Consider using H2-H6 for subsequent headings",
                });
              }
            }

            if (blockType === "image") {
              if (!parsed.alt && !fullComment.includes("alt=")) {
                results.push({
                  type: "warning",
                  message: "Image block missing alt text",
                  line: lineNumber,
                  suggestion:
                    'Add alt text for accessibility: {"alt":"Descriptive text"}',
                });
              }
            }

            if (blockType === "button") {
              if (parsed.linkTarget === "_blank" && !parsed.rel) {
                results.push({
                  type: "warning",
                  message: "External button link missing rel attribute",
                  line: lineNumber,
                  suggestion: 'Add rel="noopener noreferrer" for security',
                });
              }
            }
          } catch (e) {
            results.push({
              type: "error",
              message: `Invalid JSON in ${blockType} block attributes`,
              line: lineNumber,
              suggestion:
                "Check for missing quotes, commas, or brackets in block attributes. JSON must be valid.",
              fixedCode: attributesStr
                .replace(/([{,])\s*(\w+)\s*:/g, '$1"$2":')
                .replace(/:\s*([^\s"\[\{][^,}\]]*)/g, ':"$1"'),
            });
          }
        }
      }

      // Handle closing block comments
      const closeMatch = trimmed.match(/^<!--\s*\/wp:(\w+)\s*-->$/);
      if (closeMatch) {
        const blockType = closeMatch[1];
        const lastOpened = blockStack.pop();

        if (!lastOpened) {
          results.push({
            type: "error",
            message: `Unexpected closing block: ${blockType} (no matching opening block)`,
            line: lineNumber,
            suggestion:
              "Remove this closing comment or add the corresponding opening block comment",
          });
        } else if (lastOpened.type !== blockType) {
          results.push({
            type: "error",
            message: `Mismatched block closing: expected ${lastOpened.type} (opened at line ${lastOpened.line}), found ${blockType}`,
            line: lineNumber,
            suggestion:
              "Check that all blocks are properly nested and closed in the correct order",
          });
          // Put the unmatched block back on the stack
          blockStack.push(lastOpened);
        }
      }

      // Additional validation checks
      if (trimmed.includes("<img") && !trimmed.includes("alt=")) {
        results.push({
          type: "error",
          message: "Image missing alt attribute",
          line: lineNumber,
          suggestion: "Add alt attribute for screen reader accessibility",
        });
      }

      // Check for proper spacing preset format
      if (trimmed.includes("var:preset|spacing|")) {
        const spacingMatches = trimmed.match(
          /var:preset\|spacing\|([^"\s)]+)/g,
        );
        if (spacingMatches) {
          spacingMatches.forEach((spacing) => {
            if (!spacing.match(/var:preset\|spacing\|[0-9]+[a-z]*$/)) {
              results.push({
                type: "warning",
                message: "Non-standard spacing preset format",
                line: lineNumber,
                suggestion:
                  "Use standard spacing presets like var:preset|spacing|50",
              });
            }
          });
        }
      }

      // Semantic HTML suggestions
      if (trimmed.includes('<div class="wp-block-group"')) {
        const groupBlock = parsedBlocks.find(
          (b) => b.type === "group" && Math.abs(b.startLine - lineNumber) <= 3,
        );
        if (groupBlock && groupBlock.attributes) {
          try {
            const attrs = JSON.parse(groupBlock.attributes);
            if (
              !attrs.tagName &&
              (code.includes("nav") || code.includes("navigation"))
            ) {
              results.push({
                type: "info",
                message: "Consider using semantic HTML",
                line: lineNumber,
                suggestion: 'Add "tagName":"nav" for navigation sections',
              });
            }
          } catch {
            // Ignore parsing errors for this check
          }
        }
      }
    });

    // Check for unclosed blocks
    if (blockStack.length > 0) {
      blockStack.forEach((block) => {
        results.push({
          type: "error",
          message: `Unclosed block: ${block.type} (opened at line ${block.line})`,
          line: block.line,
          suggestion: `Add closing comment: <!-- /wp:${block.type} -->`,
        });
      });
    }

    // Performance suggestions
    const inlineStyleCount = (code.match(/style="/g) || []).length;
    if (inlineStyleCount > 5) {
      results.push({
        type: "info",
        message: `${inlineStyleCount} inline styles found`,
        suggestion:
          "Consider using CSS classes instead of inline styles for better performance",
      });
    }

    // Success message if no errors
    if (results.filter((r) => r.type === "error").length === 0) {
      results.push({
        type: "success",
        message: "Block markup validation passed! No critical errors found.",
      });
    }

    return results;
  };

  const generateFixedCode = (code: string): string => {
    let fixed = code;

    // Fix common issues automatically
    // Add alt attributes to images without them
    fixed = fixed.replace(
      /<img([^>]*?)src="([^"]*)"([^>]*?)(?!.*alt=)([^>]*?)>/g,
      '<img$1src="$2"$3 alt="Image description needed"$4>',
    );

    // Add rel attributes to external buttons
    fixed = fixed.replace(
      /"linkTarget":"_blank"(?!.*"rel":)/g,
      '"linkTarget":"_blank","rel":"noopener noreferrer"',
    );

    return fixed;
  };

  const handleValidate = () => {
    setIsValidating(true);

    // Simulate async validation
    setTimeout(() => {
      const validationResults = validateBlockMarkup(inputCode);
      setResults(validationResults);

      // Extract block information using improved parser
      const parsedBlocks = parseBlocks(inputCode);
      const blocks: BlockInfo[] = parsedBlocks.map((block) => {
        let attributes = {};
        let isValid = true;
        const errors: string[] = [];
        const warnings: string[] = [];

        if (block.attributes) {
          try {
            attributes = JSON.parse(block.attributes);
          } catch (e) {
            isValid = false;
            errors.push("Invalid JSON syntax in attributes");
          }
        }

        return {
          blockType: block.type,
          attributes,
          isValid,
          errors,
          warnings,
        };
      });

      setBlockInfo(blocks);
      setIsValidating(false);
    }, 500);
  };

  const updateLineNumbers = () => {
    if (!lineNumbersRef.current || !textareaRef.current) return;

    const lines = inputCode.split("\n");
    const lineNumbers = lines.map((_, index) => index + 1).join("\n");
    lineNumbersRef.current.textContent = lineNumbers;

    // Sync scroll
    lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
  };

  const handleScroll = () => {
    updateLineNumbers();
  };

  const handleInputChange = (value: string) => {
    setInputCode(value);
    setTimeout(updateLineNumbers, 0);
  };

  useEffect(() => {
    updateLineNumbers();
  }, [inputCode]);

  const loadSample = () => {
    setInputCode(sampleCode);
  };

  const clearInput = () => {
    setInputCode("");
    setResults([]);
    setBlockInfo([]);
  };

  const getResultIcon = (type: ValidationResult["type"]) => {
    switch (type) {
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "info":
        return <Lightbulb className="h-4 w-4 text-blue-500" />;
    }
  };

  const getResultColor = (type: ValidationResult["type"]) => {
    switch (type) {
      case "error":
        return "border-red-500/30 bg-red-500/10";
      case "warning":
        return "border-yellow-500/30 bg-yellow-500/10";
      case "success":
        return "border-green-500/30 bg-green-500/10";
      case "info":
        return "border-blue-500/30 bg-blue-500/10";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-blue/20">
            <Code className="h-6 w-6 text-neon-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Block Validator
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Validate your WordPress block markup with custom syntax highlighting
          designed specifically for WP blocks. Get real-time feedback on syntax
          errors, accessibility issues, and best practices.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-blue/20 text-neon-blue border-neon-blue/30"
          >
            Real-time Validation
          </Badge>
          <Badge variant="outline">Custom Syntax Highlighting</Badge>
          <Badge variant="outline">Accessibility Checks</Badge>
          <Badge variant="outline">Performance Tips</Badge>
          <Badge variant="outline">Auto-fix Suggestions</Badge>
        </div>
      </div>

      <Separator />

      {/* Validator Interface */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Block Markup Input</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={loadSample}>
                  Load Sample
                </Button>
                <Button variant="outline" size="sm" onClick={clearInput}>
                  Clear
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Paste your WordPress block markup here for validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {/* Input Editor */}
              <div className="relative">
                <div className="flex border rounded-md overflow-hidden">
                  <div
                    ref={lineNumbersRef}
                    className="bg-muted/50 px-2 py-3 text-xs font-mono text-muted-foreground select-none overflow-hidden whitespace-pre min-w-[3rem] text-right border-r"
                    style={{ lineHeight: "1.5" }}
                  />
                  <Textarea
                    ref={textareaRef}
                    placeholder='<!-- wp:group -->
<div class="wp-block-group">
  <!-- wp:heading -->
  <h2>Your content here</h2>
  <!-- /wp:heading -->
</div>
<!-- /wp:group -->'
                    value={inputCode}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onScroll={handleScroll}
                    className={cn(
                      "min-h-[400px] font-mono text-sm border-0 resize-none focus:ring-0 rounded-none",
                      "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
                    )}
                    style={{ lineHeight: "1.5" }}
                  />
                </div>
              </div>

              {/* Live Preview with Syntax Highlighting */}
              {inputCode.trim() && (
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Live Preview with Custom WP Block Syntax Highlighting
                  </h4>
                  <WPBlockCodeBlock
                    code={inputCode}
                    showCopy={false}
                    showLineNumbers={true}
                    maxHeight="300px"
                    className="border-2 border-neon-blue/20 shadow-lg shadow-neon-blue/10"
                  />
                </div>
              )}
            </div>
            <Button
              onClick={handleValidate}
              disabled={!inputCode.trim() || isValidating}
              className="w-full"
            >
              {isValidating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Validating...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Validate Markup
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Validation Results</CardTitle>
            <CardDescription>
              Errors, warnings, and suggestions for your block markup
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Code className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <p>Validation results will appear here</p>
                <p className="text-sm mt-1">
                  Enter block markup above and click validate
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {results.map((result, index) => (
                  <Card key={index} className={getResultColor(result.type)}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {getResultIcon(result.type)}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">
                              {result.message}
                            </p>
                            {result.line && (
                              <Badge variant="outline" className="text-xs">
                                Line {result.line}
                              </Badge>
                            )}
                          </div>
                          {result.suggestion && (
                            <p className="text-xs text-muted-foreground">
                              💡 {result.suggestion}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Results */}
      {results.length > 0 && (
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="blocks">Block Analysis</TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-4 mt-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-green-500/10 border-green-500/30">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">
                    {results.filter((r) => r.type === "success").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Passed</p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30">
                <CardContent className="p-4 text-center">
                  <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-red-600">
                    {results.filter((r) => r.type === "error").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Errors</p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-500/10 border-yellow-500/30">
                <CardContent className="p-4 text-center">
                  <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-yellow-600">
                    {results.filter((r) => r.type === "warning").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Warnings</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-500/10 border-blue-500/30">
                <CardContent className="p-4 text-center">
                  <Lightbulb className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">
                    {results.filter((r) => r.type === "info").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Info</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blocks" className="space-y-4 mt-6">
            {blockInfo.length > 0 ? (
              <div className="space-y-4">
                {blockInfo.map((block, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur border-border/50"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          {block.isValid ? (
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="mr-2 h-4 w-4 text-red-500" />
                          )}
                          {block.blockType} Block
                        </span>
                        <Badge
                          variant={block.isValid ? "default" : "destructive"}
                        >
                          {block.isValid ? "Valid" : "Invalid"}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {Object.keys(block.attributes).length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Attributes:</p>
                          <CodeBlock
                            code={JSON.stringify(block.attributes, null, 2)}
                            language="json"
                            showCopy={false}
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <p>No blocks detected in the provided markup</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4 mt-6">
            <div className="space-y-4">
              {results.filter((r) => r.suggestion).length > 0 ? (
                results
                  .filter((r) => r.suggestion)
                  .map((result, index) => (
                    <Card
                      key={index}
                      className="bg-blue-500/10 border-blue-500/30"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5" />
                          <div className="space-y-2">
                            <p className="font-medium text-sm">
                              {result.message}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {result.suggestion}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Lightbulb className="h-8 w-8 mx-auto mb-3 opacity-50" />
                  <p>No suggestions available</p>
                  <p className="text-sm mt-1">Your markup looks good!</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Quick Tips */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-neon-cyan" />
            Validation Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Common Issues to Check:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Proper opening and closing block comments</li>
                <li>• Valid JSON syntax in block attributes</li>
                <li>• Alt text for all images</li>
                <li>• Semantic HTML structure</li>
                <li>• Only one H1 heading per page</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Best Practices:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Use CSS classes instead of inline styles</li>
                <li>• Include metadata for block patterns</li>
                <li>• Add rel="noopener noreferrer" for external links</li>
                <li>• Use semantic tagName attributes</li>
                <li>• Follow WordPress coding standards</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
