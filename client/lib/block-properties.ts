export interface BlockProperty {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  example?: string;
  since?: string;
  deprecated?: boolean;
  values?: string[];
}

export interface PropertyCategory {
  name: string;
  description: string;
  properties: BlockProperty[];
}

// Universal properties available to ALL blocks
export const universalBlockProperties: PropertyCategory[] = [
  {
    name: "Core Attributes",
    description: "Essential attributes available to every WordPress block",
    properties: [
      {
        name: "className",
        type: "string",
        description: "CSS class name(s) to add to the block wrapper",
        example: '"my-custom-class another-class"',
        defaultValue: '""',
      },
      {
        name: "anchor",
        type: "string",
        description: "HTML anchor/ID attribute for the block element",
        example: '"section-hero"',
        defaultValue: '""',
      },
      {
        name: "lock",
        type: "object",
        description: "Controls whether the block can be moved or removed",
        example: '{"move": false, "remove": true}',
        since: "WordPress 5.9",
      },
    ],
  },
  {
    name: "Styling & Appearance",
    description: "Visual styling properties supported by most blocks",
    properties: [
      {
        name: "style.color.text",
        type: "string",
        description: "Text color (hex, rgb, or CSS custom property)",
        example: '"#ff6b9d"',
      },
      {
        name: "style.color.background",
        type: "string",
        description: "Background color",
        example: '"var:preset|color|primary"',
      },
      {
        name: "style.color.gradient",
        type: "string",
        description: "CSS gradient background",
        example: '"linear-gradient(45deg, #ff6b9d, #c44569)"',
      },
      {
        name: "textColor",
        type: "string",
        description: "Theme color palette slug for text",
        example: '"primary"',
      },
      {
        name: "backgroundColor",
        type: "string",
        description: "Theme color palette slug for background",
        example: '"secondary"',
      },
      {
        name: "gradient",
        type: "string",
        description: "Theme gradient palette slug",
        example: '"vivid-cyan-blue-to-vivid-purple"',
      },
    ],
  },
  {
    name: "Typography",
    description: "Text formatting and typography controls",
    properties: [
      {
        name: "style.typography.fontSize",
        type: "string",
        description: "Font size (CSS unit or preset)",
        example: '"var:preset|font-size|large"',
      },
      {
        name: "style.typography.fontFamily",
        type: "string",
        description: "Font family (CSS or preset)",
        example: '"var:preset|font-family|heading"',
      },
      {
        name: "style.typography.fontWeight",
        type: "string",
        description: "Font weight",
        example: '"700"',
        values: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      },
      {
        name: "style.typography.lineHeight",
        type: "string",
        description: "Line height",
        example: '"1.5"',
      },
      {
        name: "style.typography.letterSpacing",
        type: "string",
        description: "Letter spacing",
        example: '"0.1em"',
      },
      {
        name: "style.typography.textDecoration",
        type: "string",
        description: "Text decoration",
        example: '"underline"',
        values: ["none", "underline", "line-through", "overline"],
      },
      {
        name: "style.typography.textTransform",
        type: "string",
        description: "Text transformation",
        example: '"uppercase"',
        values: ["none", "uppercase", "lowercase", "capitalize"],
      },
      {
        name: "fontSize",
        type: "string",
        description: "Theme font size palette slug",
        example: '"large"',
      },
    ],
  },
  {
    name: "Spacing & Layout",
    description: "Margin, padding, and layout spacing controls",
    properties: [
      {
        name: "style.spacing.margin.top",
        type: "string",
        description: "Top margin",
        example: '"var:preset|spacing|50"',
      },
      {
        name: "style.spacing.margin.right",
        type: "string",
        description: "Right margin",
        example: '"var:preset|spacing|30"',
      },
      {
        name: "style.spacing.margin.bottom",
        type: "string",
        description: "Bottom margin",
        example: '"var:preset|spacing|50"',
      },
      {
        name: "style.spacing.margin.left",
        type: "string",
        description: "Left margin",
        example: '"var:preset|spacing|30"',
      },
      {
        name: "style.spacing.padding.top",
        type: "string",
        description: "Top padding",
        example: '"var:preset|spacing|40"',
      },
      {
        name: "style.spacing.padding.right",
        type: "string",
        description: "Right padding",
        example: '"var:preset|spacing|40"',
      },
      {
        name: "style.spacing.padding.bottom",
        type: "string",
        description: "Bottom padding",
        example: '"var:preset|spacing|40"',
      },
      {
        name: "style.spacing.padding.left",
        type: "string",
        description: "Left padding",
        example: '"var:preset|spacing|40"',
      },
      {
        name: "style.spacing.blockGap",
        type: "string",
        description: "Gap between child blocks",
        example: '"var:preset|spacing|30"',
      },
    ],
  },
  {
    name: "Border & Outline",
    description: "Border styling and outline properties",
    properties: [
      {
        name: "style.border.color",
        type: "string",
        description: "Border color",
        example: '"#e5e7eb"',
      },
      {
        name: "style.border.width",
        type: "string",
        description: "Border width",
        example: '"2px"',
      },
      {
        name: "style.border.style",
        type: "string",
        description: "Border style",
        example: '"solid"',
        values: [
          "none",
          "solid",
          "dashed",
          "dotted",
          "double",
          "groove",
          "ridge",
          "inset",
          "outset",
        ],
      },
      {
        name: "style.border.radius",
        type: "string",
        description: "Border radius",
        example: '"8px"',
      },
      {
        name: "style.border.top.color",
        type: "string",
        description: "Top border color",
        example: '"#ff6b9d"',
      },
      {
        name: "style.border.top.width",
        type: "string",
        description: "Top border width",
        example: '"1px"',
      },
      {
        name: "style.border.top.style",
        type: "string",
        description: "Top border style",
        example: '"solid"',
      },
    ],
  },
  {
    name: "Dimensions",
    description: "Width, height, and sizing properties",
    properties: [
      {
        name: "style.dimensions.minHeight",
        type: "string",
        description: "Minimum height",
        example: '"400px"',
      },
      {
        name: "width",
        type: "string",
        description: "Block width (for applicable blocks)",
        example: '"50%"',
      },
      {
        name: "height",
        type: "string",
        description: "Block height (for applicable blocks)",
        example: '"300px"',
      },
    ],
  },
];

// Block-specific properties for the Group block
export const groupBlockProperties: PropertyCategory[] = [
  {
    name: "Group-Specific",
    description: "Properties unique to the Group block",
    properties: [
      {
        name: "tagName",
        type: "string",
        description: "HTML tag to use for the group wrapper",
        example: '"section"',
        defaultValue: '"div"',
        values: [
          "div",
          "section",
          "article",
          "aside",
          "header",
          "footer",
          "main",
          "nav",
        ],
      },
      {
        name: "layout.type",
        type: "string",
        description: "Layout type for the group",
        example: '"constrained"',
        defaultValue: '"default"',
        values: ["default", "constrained", "flow"],
      },
      {
        name: "layout.contentSize",
        type: "string",
        description: "Maximum content width for constrained layout",
        example: '"800px"',
      },
      {
        name: "layout.wideSize",
        type: "string",
        description: "Maximum wide content width",
        example: '"1200px"',
      },
      {
        name: "layout.justifyContent",
        type: "string",
        description: "Horizontal alignment of content",
        example: '"center"',
        values: ["left", "center", "right", "space-between"],
      },
    ],
  },
];

// Block-specific properties for the Columns block
export const columnsBlockProperties: PropertyCategory[] = [
  {
    name: "Columns-Specific",
    description: "Properties unique to the Columns block",
    properties: [
      {
        name: "columnCount",
        type: "number",
        description: "Number of columns to create",
        example: "3",
        defaultValue: "2",
      },
      {
        name: "isStackedOnMobile",
        type: "boolean",
        description: "Whether columns stack on mobile devices",
        example: "true",
        defaultValue: "true",
      },
      {
        name: "verticalAlignment",
        type: "string",
        description: "Vertical alignment of columns",
        example: '"center"',
        values: ["top", "center", "bottom"],
      },
    ],
  },
  {
    name: "Individual Column",
    description: "Properties for individual Column blocks within Columns",
    properties: [
      {
        name: "width",
        type: "string",
        description: "Column width as percentage or CSS value",
        example: '"33.33%"',
      },
      {
        name: "verticalAlignment",
        type: "string",
        description: "Vertical alignment of this specific column",
        example: '"top"',
        values: ["top", "center", "bottom"],
      },
      {
        name: "templateLock",
        type: "string|boolean",
        description: "Prevents modification of column content",
        example: '"all"',
        values: ["all", "insert", "false"],
      },
    ],
  },
];

// Helper function to get all properties for a specific block
export function getBlockProperties(
  blockType: "group" | "columns",
): PropertyCategory[] {
  const universal = universalBlockProperties;

  switch (blockType) {
    case "group":
      return [...universal, ...groupBlockProperties];
    case "columns":
      return [...universal, ...columnsBlockProperties];
    default:
      return universal;
  }
}
