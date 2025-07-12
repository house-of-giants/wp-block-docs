/**
 * Custom syntax highlighter for WordPress block markup
 * Handles the unique structure of WP blocks with comments, JSON attributes, and HTML
 */

export interface HighlightToken {
  type:
    | "block-comment-start"
    | "block-comment-end"
    | "block-name"
    | "block-attributes"
    | "html-tag"
    | "html-attribute"
    | "html-value"
    | "text"
    | "whitespace"
    | "error";
  content: string;
  line: number;
  column: number;
}

export class WPBlockHighlighter {
  private static readonly PATTERNS = {
    // WordPress block opening comment: <!-- wp:blockname {attributes} -->
    blockStart: /^<!--\s*wp:(\w+)(\s+({[\s\S]*?}))?\s*-->/,
    // WordPress block closing comment: <!-- /wp:blockname -->
    blockEnd: /^<!--\s*\/wp:(\w+)\s*-->/,
    // HTML tag opening: <tagname attributes>
    htmlTagStart: /^<(\w+)([^>]*)>/,
    // HTML tag closing: </tagname>
    htmlTagEnd: /^<\/(\w+)>/,
    // HTML self-closing tag: <tagname attributes />
    htmlSelfClosing: /^<(\w+)([^>]*?)\/>/,
    // HTML attribute: name="value" or name='value' or name=value
    htmlAttribute: /(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g,
    // Whitespace
    whitespace: /^\s+/,
  };

  public static highlight(code: string): HighlightToken[] {
    const tokens: HighlightToken[] = [];
    const lines = code.split("\n");

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      let line = lines[lineIndex];
      let column = 0;

      while (line.length > 0) {
        const consumed = this.consumeNext(
          line,
          lineIndex + 1,
          column + 1,
          tokens,
        );
        if (consumed === 0) {
          // If we can't match anything, consume one character as text
          tokens.push({
            type: "text",
            content: line[0],
            line: lineIndex + 1,
            column: column + 1,
          });
          line = line.slice(1);
          column += 1;
        } else {
          line = line.slice(consumed);
          column += consumed;
        }
      }

      // Add newline if not the last line
      if (lineIndex < lines.length - 1) {
        tokens.push({
          type: "whitespace",
          content: "\n",
          line: lineIndex + 1,
          column: column + 1,
        });
      }
    }

    return tokens;
  }

  private static consumeNext(
    line: string,
    lineNum: number,
    col: number,
    tokens: HighlightToken[],
  ): number {
    // Try to match whitespace first
    const whitespaceMatch = line.match(this.PATTERNS.whitespace);
    if (whitespaceMatch) {
      tokens.push({
        type: "whitespace",
        content: whitespaceMatch[0],
        line: lineNum,
        column: col,
      });
      return whitespaceMatch[0].length;
    }

    // Try to match WordPress block start comment
    const blockStartMatch = line.match(this.PATTERNS.blockStart);
    if (blockStartMatch) {
      const [fullMatch, blockName, , attributes] = blockStartMatch;

      // Add the comment start
      tokens.push({
        type: "block-comment-start",
        content: "<!-- wp:",
        line: lineNum,
        column: col,
      });

      // Add the block name
      tokens.push({
        type: "block-name",
        content: blockName,
        line: lineNum,
        column: col + 8,
      });

      // Add attributes if present
      if (attributes) {
        tokens.push({
          type: "whitespace",
          content: " ",
          line: lineNum,
          column: col + 8 + blockName.length,
        });

        // Try to parse JSON attributes
        try {
          JSON.parse(attributes);
          tokens.push({
            type: "block-attributes",
            content: attributes,
            line: lineNum,
            column: col + 9 + blockName.length,
          });
        } catch {
          tokens.push({
            type: "error",
            content: attributes,
            line: lineNum,
            column: col + 9 + blockName.length,
          });
        }
      }

      // Add the comment end
      tokens.push({
        type: "block-comment-start",
        content: " -->",
        line: lineNum,
        column: col + fullMatch.length - 4,
      });

      return fullMatch.length;
    }

    // Try to match WordPress block end comment
    const blockEndMatch = line.match(this.PATTERNS.blockEnd);
    if (blockEndMatch) {
      const [fullMatch, blockName] = blockEndMatch;

      tokens.push({
        type: "block-comment-end",
        content: "<!-- /wp:",
        line: lineNum,
        column: col,
      });

      tokens.push({
        type: "block-name",
        content: blockName,
        line: lineNum,
        column: col + 10,
      });

      tokens.push({
        type: "block-comment-end",
        content: " -->",
        line: lineNum,
        column: col + fullMatch.length - 4,
      });

      return fullMatch.length;
    }

    // Try to match HTML self-closing tag
    const htmlSelfClosingMatch = line.match(this.PATTERNS.htmlSelfClosing);
    if (htmlSelfClosingMatch) {
      const [fullMatch, tagName, attributes] = htmlSelfClosingMatch;

      tokens.push({
        type: "html-tag",
        content: "<",
        line: lineNum,
        column: col,
      });

      tokens.push({
        type: "html-tag",
        content: tagName,
        line: lineNum,
        column: col + 1,
      });

      if (attributes.trim()) {
        this.parseHtmlAttributes(
          attributes,
          lineNum,
          col + 1 + tagName.length,
          tokens,
        );
      }

      tokens.push({
        type: "html-tag",
        content: " />",
        line: lineNum,
        column: col + fullMatch.length - 3,
      });

      return fullMatch.length;
    }

    // Try to match HTML opening tag
    const htmlTagStartMatch = line.match(this.PATTERNS.htmlTagStart);
    if (htmlTagStartMatch) {
      const [fullMatch, tagName, attributes] = htmlTagStartMatch;

      tokens.push({
        type: "html-tag",
        content: "<",
        line: lineNum,
        column: col,
      });

      tokens.push({
        type: "html-tag",
        content: tagName,
        line: lineNum,
        column: col + 1,
      });

      if (attributes.trim()) {
        this.parseHtmlAttributes(
          attributes,
          lineNum,
          col + 1 + tagName.length,
          tokens,
        );
      }

      tokens.push({
        type: "html-tag",
        content: ">",
        line: lineNum,
        column: col + fullMatch.length - 1,
      });

      return fullMatch.length;
    }

    // Try to match HTML closing tag
    const htmlTagEndMatch = line.match(this.PATTERNS.htmlTagEnd);
    if (htmlTagEndMatch) {
      const [fullMatch, tagName] = htmlTagEndMatch;

      tokens.push({
        type: "html-tag",
        content: "</",
        line: lineNum,
        column: col,
      });

      tokens.push({
        type: "html-tag",
        content: tagName,
        line: lineNum,
        column: col + 2,
      });

      tokens.push({
        type: "html-tag",
        content: ">",
        line: lineNum,
        column: col + fullMatch.length - 1,
      });

      return fullMatch.length;
    }

    return 0;
  }

  private static parseHtmlAttributes(
    attributeString: string,
    lineNum: number,
    startCol: number,
    tokens: HighlightToken[],
  ) {
    let remaining = attributeString;
    let currentCol = startCol;

    while (remaining.trim()) {
      // Skip whitespace
      const whitespaceMatch = remaining.match(/^\s+/);
      if (whitespaceMatch) {
        tokens.push({
          type: "whitespace",
          content: whitespaceMatch[0],
          line: lineNum,
          column: currentCol,
        });
        remaining = remaining.slice(whitespaceMatch[0].length);
        currentCol += whitespaceMatch[0].length;
        continue;
      }

      // Match attribute
      const attrMatch = remaining.match(
        /^(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/,
      );
      if (attrMatch) {
        const [
          fullMatch,
          name,
          doubleQuotedValue,
          singleQuotedValue,
          unquotedValue,
        ] = attrMatch;

        // Attribute name
        tokens.push({
          type: "html-attribute",
          content: name,
          line: lineNum,
          column: currentCol,
        });

        currentCol += name.length;

        if (
          doubleQuotedValue !== undefined ||
          singleQuotedValue !== undefined ||
          unquotedValue !== undefined
        ) {
          // Add = sign and any whitespace
          const equalSignMatch = remaining.slice(name.length).match(/^\s*=\s*/);
          if (equalSignMatch) {
            tokens.push({
              type: "html-tag",
              content: equalSignMatch[0],
              line: lineNum,
              column: currentCol,
            });
            currentCol += equalSignMatch[0].length;
          }

          // Add value
          const value = doubleQuotedValue ?? singleQuotedValue ?? unquotedValue;
          const quote =
            doubleQuotedValue !== undefined
              ? '"'
              : singleQuotedValue !== undefined
                ? "'"
                : "";

          if (quote) {
            tokens.push({
              type: "html-tag",
              content: quote,
              line: lineNum,
              column: currentCol,
            });
            currentCol += 1;
          }

          tokens.push({
            type: "html-value",
            content: value,
            line: lineNum,
            column: currentCol,
          });
          currentCol += value.length;

          if (quote) {
            tokens.push({
              type: "html-tag",
              content: quote,
              line: lineNum,
              column: currentCol,
            });
            currentCol += 1;
          }
        }

        remaining = remaining.slice(fullMatch.length);
      } else {
        // If we can't match an attribute, consume one character
        tokens.push({
          type: "text",
          content: remaining[0],
          line: lineNum,
          column: currentCol,
        });
        remaining = remaining.slice(1);
        currentCol += 1;
      }
    }
  }

  public static tokensToHtml(tokens: HighlightToken[]): string {
    const colorMap: Record<HighlightToken["type"], string> = {
      "block-comment-start": "#6b7280", // Gray for comment syntax
      "block-comment-end": "#6b7280",
      "block-name": "#10b981", // Emerald for block names
      "block-attributes": "#f59e0b", // Amber for JSON attributes
      "html-tag": "#3b82f6", // Blue for HTML tags
      "html-attribute": "#8b5cf6", // Purple for attributes
      "html-value": "#ef4444", // Red for attribute values
      text: "#e5e7eb", // Light gray for regular text
      whitespace: "transparent",
      error: "#dc2626", // Red for errors
    };

    return tokens
      .map((token) => {
        const color = colorMap[token.type];
        const escapedContent = token.content
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");

        if (token.type === "whitespace" || color === "transparent") {
          return escapedContent;
        }

        const className = `wp-highlight-${token.type}`;
        return `<span class="${className}" style="color: ${color};">${escapedContent}</span>`;
      })
      .join("");
  }
}
