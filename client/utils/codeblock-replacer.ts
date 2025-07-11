// Utility functions to help systematically replace inline code blocks
// This is a temporary helper for the refactoring process

export function createCodeBlockUsage(
  code: string,
  language: string = "html",
  filename?: string,
) {
  return `<CodeBlock
  code={\`${code}\`}
  language="${language}"${filename ? `\n  filename="${filename}"` : ""}
/>`;
}

export function extractCodeFromInlinePre(inlinePreContent: string): string {
  // Extract code from {`template string`} format
  const match = inlinePreContent.match(/{\s*`([^`]+)`\s*}/);
  return match ? match[1] : inlinePreContent;
}

// Common patterns to replace:
export const INLINE_PRE_PATTERNS = {
  htmlBlock: /\{`<!-- wp:.*?-->`\}/gs,
  cssBlock: /\{`\/\* .*? \*\/.*?\}`/gs,
  jsBlock: /\{`\/\/ .*?\n.*?\}`/gs,
};
