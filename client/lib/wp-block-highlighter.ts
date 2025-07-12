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
    // Updated to handle multiline JSON attributes
    blockStart: /^<!--\s*wp:([a-zA-Z0-9\-\/]+)(\s+({[\s\S]*?}))?\s*-->/,
    // WordPress block closing comment: <!-- /wp:blockname -->
    blockEnd: /^<!--\s*\/wp:([a-zA-Z0-9\-\/]+)\s*-->/,
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
    let remaining = code;
    let currentLine = 1;
    let currentColumn = 1;

    while (remaining.length > 0) {
      const consumed = this.consumeNext(
        remaining,
        currentLine,
        currentColumn,
        tokens,
      );
      
      if (consumed === 0) {
        // If we can't match anything, consume one character as text
        const char = remaining[0];
        tokens.push({
          type: "text",
          content: char,
          line: currentLine,
          column: currentColumn,
        });
        
        if (char === '\n') {
          currentLine++;
          currentColumn = 1;
        } else {
          currentColumn++;
        }
        
        remaining = remaining.slice(1);
      } else {
        // Update position based on consumed content
        const consumedContent = remaining.slice(0, consumed);
        const newlines = consumedContent.split('\n').length - 1;
        
        if (newlines > 0) {
          currentLine += newlines;
          currentColumn = consumedContent.length - consumedContent.lastIndexOf('\n');
        } else {
          currentColumn += consumed;
        }
        
        remaining = remaining.slice(consumed);
      }
    }

    return tokens;
  }

  private static consumeNext(
    remaining: string,
    lineNum: number,
    col: number,
    tokens: HighlightToken[],
  ): number {
    // Try to match whitespace first
    const whitespaceMatch = remaining.match(this.PATTERNS.whitespace);
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
    const blockStartMatch = remaining.match(this.PATTERNS.blockStart);
    if (blockStartMatch) {
      const [fullMatch, blockName, , attributes] = blockStartMatch;
      let currentCol = col;

      // Add the comment start
      tokens.push({
        type: "block-comment-start",
        content: "<!-- wp:",
        line: lineNum,
        column: currentCol,
      });
      currentCol += 8;

      // Add the block name
      tokens.push({
        type: "block-name",
        content: blockName,
        line: lineNum,
        column: currentCol,
      });
      currentCol += blockName.length;

      // Add attributes if present
      if (attributes) {
        // Find the space before attributes
        const beforeAttributes = fullMatch.slice(8 + blockName.length, fullMatch.indexOf(attributes));
        if (beforeAttributes.trim() === '') {
          tokens.push({
            type: "whitespace",
            content: beforeAttributes,
            line: lineNum,
            column: currentCol,
          });
          currentCol += beforeAttributes.length;
        }

        // Try to parse JSON attributes
        try {
          JSON.parse(attributes);
          tokens.push({
            type: "block-attributes",
            content: attributes,
            line: lineNum,
            column: currentCol,
          });
        } catch {
          tokens.push({
            type: "error",
            content: attributes,
            line: lineNum,
            column: currentCol,
          });
        }
        currentCol += attributes.length;
      }

      // Add any whitespace before the closing -->
      const endPart = fullMatch.slice(fullMatch.lastIndexOf('-->') - fullMatch.length);
      const beforeEnd = fullMatch.slice(0, fullMatch.lastIndexOf(' -->'));
      const whitespaceBeforeEnd = fullMatch.slice(beforeEnd.length, fullMatch.lastIndexOf('-->'));
      
      if (whitespaceBeforeEnd) {
        tokens.push({
          type: "whitespace",
          content: whitespaceBeforeEnd,
          line: lineNum,
          column: currentCol,
        });
      }

      // Add the comment end
      tokens.push({
        type: "block-comment-start",
        content: "-->",
        line: lineNum,
        column: col + fullMatch.length - 3,
      });

      return fullMatch.length;
    }

    // Try to match WordPress block end comment
    const blockEndMatch = remaining.match(this.PATTERNS.blockEnd);
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
    const htmlSelfClosingMatch = remaining.match(this.PATTERNS.htmlSelfClosing);
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
    const htmlTagStartMatch = remaining.match(this.PATTERNS.htmlTagStart);
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
    const htmlTagEndMatch = remaining.match(this.PATTERNS.htmlTagEnd);
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
      "block-comment-start": "hsl(280, 10%, 60%)", // Muted foreground - subtle gray
      "block-comment-end": "hsl(280, 10%, 60%)", // Muted foreground - subtle gray
      "block-name": "hsl(320, 100%, 70%)", // Neon pink - WordPress block names
      "block-attributes": "hsl(180, 100%, 70%)", // Neon cyan - JSON attributes
      "html-tag": "hsl(200, 100%, 70%)", // Neon blue - HTML tags
      "html-attribute": "hsl(260, 100%, 75%)", // Neon purple - HTML attributes
      "html-value": "hsl(320, 60%, 60%)", // Retro pink - HTML attribute values
      text: "hsl(280, 30%, 90%)", // Foreground - regular text
      whitespace: "transparent",
      error: "hsl(0, 70%, 55%)", // Destructive - errors
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
