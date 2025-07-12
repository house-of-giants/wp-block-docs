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
      {
        name: "metadata.categories",
        type: "array",
        description: "Pattern categories for organization and filtering",
        example: '["category-sections","header","featured"]',
        since: "WordPress 6.0",
      },
      {
        name: "metadata.patternName",
        type: "string",
        description: "Unique identifier for block patterns",
        example: '"category/hero"',
        since: "WordPress 6.0",
      },
      {
        name: "metadata.name",
        type: "string",
        description: "Human-readable name for the pattern or block group",
        example: '"Hero Section - Light Theme"',
        since: "WordPress 6.0",
      },
      {
        name: "metadata.description",
        type: "string",
        description: "Description of the block group or pattern purpose",
        example: '"A hero section with call-to-action button"',
        since: "WordPress 6.0",
      },
      {
        name: "metadata.keywords",
        type: "array",
        description: "Keywords for pattern search and discovery",
        example: '["hero","banner","featured","cta"]',
        since: "WordPress 6.0",
      },
      {
        name: "align",
        type: "string",
        description: "Block alignment setting",
        example: '"wide"',
        values: ["left", "center", "right", "wide", "full"],
      },
      {
        name: "templateLock",
        type: "string|boolean",
        description: "Prevents modification of inner blocks",
        example: '"all"',
        values: ["all", "insert", "contentOnly", "false"],
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

// Block-specific properties for the Image block
export const imageBlockProperties: PropertyCategory[] = [
  {
    name: "Image-Specific",
    description: "Properties unique to the Image block",
    properties: [
      {
        name: "id",
        type: "number",
        description: "WordPress media library attachment ID",
        example: "123",
      },
      {
        name: "url",
        type: "string",
        description: "Image URL",
        example: '"https://example.com/image.jpg"',
      },
      {
        name: "alt",
        type: "string",
        description: "Alternative text for accessibility",
        example: '"A beautiful landscape photo"',
        defaultValue: '""',
      },
      {
        name: "caption",
        type: "string",
        description: "Image caption text",
        example: '"Photo taken in Yosemite National Park"',
      },
      {
        name: "title",
        type: "string",
        description: "Image title attribute",
        example: '"Yosemite Valley"',
      },
      {
        name: "href",
        type: "string",
        description: "Link URL when image is clickable",
        example: '"https://example.com/gallery"',
      },
      {
        name: "rel",
        type: "string",
        description: "Link relationship attribute",
        example: '"lightbox"',
      },
      {
        name: "linkClass",
        type: "string",
        description: "CSS class for the link wrapper",
        example: '"image-link"',
      },
      {
        name: "linkTarget",
        type: "string",
        description: "Link target attribute",
        example: '"_blank"',
        values: ["_self", "_blank", "_parent", "_top"],
      },
      {
        name: "width",
        type: "number",
        description: "Image width in pixels",
        example: "800",
      },
      {
        name: "height",
        type: "number",
        description: "Image height in pixels",
        example: "600",
      },
      {
        name: "sizeSlug",
        type: "string",
        description: "WordPress image size slug",
        example: '"large"',
        values: ["thumbnail", "medium", "large", "full"],
      },
      {
        name: "lightbox",
        type: "object",
        description: "Lightbox behavior settings",
        example: '{"enabled": true}',
        since: "WordPress 6.4",
      },
    ],
  },
];

// Block-specific properties for the Heading block
export const headingBlockProperties: PropertyCategory[] = [
  {
    name: "Heading-Specific",
    description: "Properties unique to the Heading block",
    properties: [
      {
        name: "level",
        type: "number",
        description: "Heading level (h1, h2, h3, h4, h5, h6)",
        example: "2",
        defaultValue: "2",
        values: ["1", "2", "3", "4", "5", "6"],
      },
      {
        name: "content",
        type: "string",
        description: "Heading text content",
        example: '"Welcome to Our Site"',
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text when heading is empty",
        example: '"Add heading..."',
      },
    ],
  },
];

// Block-specific properties for the Paragraph block
export const paragraphBlockProperties: PropertyCategory[] = [
  {
    name: "Paragraph-Specific",
    description: "Properties unique to the Paragraph block",
    properties: [
      {
        name: "content",
        type: "string",
        description: "Paragraph text content (HTML)",
        example: '"This is a <strong>paragraph</strong> with some text."',
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text when paragraph is empty",
        example: '"Start writing or type / to choose a block"',
      },
      {
        name: "dropCap",
        type: "boolean",
        description: "Enable drop cap styling for first letter",
        example: "true",
        defaultValue: "false",
      },
    ],
  },
];

// Block-specific properties for the Button block
export const buttonBlockProperties: PropertyCategory[] = [
  {
    name: "Button-Specific",
    description: "Properties unique to the Button block",
    properties: [
      {
        name: "text",
        type: "string",
        description: "Button text content",
        example: '"Click Me"',
      },
      {
        name: "url",
        type: "string",
        description: "Button link URL",
        example: '"https://example.com"',
      },
      {
        name: "title",
        type: "string",
        description: "Button title attribute",
        example: '"Learn more about our services"',
      },
      {
        name: "linkTarget",
        type: "string",
        description: "Link target attribute",
        example: '"_blank"',
        values: ["_self", "_blank", "_parent", "_top"],
      },
      {
        name: "rel",
        type: "string",
        description: "Link relationship attribute",
        example: '"noopener noreferrer"',
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text when button is empty",
        example: '"Add text..."',
      },
      {
        name: "width",
        type: "number",
        description: "Button width percentage",
        example: "50",
      },
    ],
  },
];

// Block-specific properties for the Query Loop block
export const queryLoopBlockProperties: PropertyCategory[] = [
  {
    name: "Query Loop Specific",
    description: "Properties for dynamic content queries",
    properties: [
      {
        name: "queryId",
        type: "number",
        description: "Unique identifier for the query instance",
        example: "1",
      },
      {
        name: "query",
        type: "object",
        description: "Query parameters for posts",
        example: '{"perPage": 3, "postType": "post", "order": "desc"}',
      },
      {
        name: "query.perPage",
        type: "number",
        description: "Number of posts to display per page",
        example: "6",
        defaultValue: "10",
      },
      {
        name: "query.postType",
        type: "string",
        description: "Post type to query",
        example: '"post"',
        values: ["post", "page", "product", "custom_post_type"],
      },
      {
        name: "query.order",
        type: "string",
        description: "Sort order for posts",
        example: '"desc"',
        values: ["asc", "desc"],
      },
      {
        name: "query.orderBy",
        type: "string",
        description: "Field to sort posts by",
        example: '"date"',
        values: ["date", "title", "menu_order", "meta_value", "rand"],
      },
      {
        name: "query.inherit",
        type: "boolean",
        description: "Whether to inherit the main query context",
        example: "true",
        defaultValue: "false",
      },
      {
        name: "query.sticky",
        type: "string",
        description: "How to handle sticky posts",
        example: '"exclude"',
        values: ["", "only", "exclude"],
      },
    ],
  },
];

// Block-specific properties for the Navigation block
export const navigationBlockProperties: PropertyCategory[] = [
  {
    name: "Navigation Specific",
    description: "Properties for site navigation menus",
    properties: [
      {
        name: "ref",
        type: "number",
        description: "WordPress menu ID to display",
        example: "123",
      },
      {
        name: "overlayMenu",
        type: "string",
        description: "When to show mobile overlay menu",
        example: '"mobile"',
        values: ["never", "mobile", "always"],
        defaultValue: '"mobile"',
      },
      {
        name: "hasIcon",
        type: "boolean",
        description: "Whether to show mobile menu icon",
        example: "true",
        defaultValue: "true",
      },
      {
        name: "overlayBackgroundColor",
        type: "string",
        description: "Background color for mobile overlay",
        example: '"background"',
      },
      {
        name: "overlayTextColor",
        type: "string",
        description: "Text color for mobile overlay",
        example: '"foreground"',
      },
      {
        name: "layout.justifyContent",
        type: "string",
        description: "Horizontal alignment of navigation items",
        example: '"left"',
        values: ["left", "center", "right", "space-between"],
      },
      {
        name: "layout.orientation",
        type: "string",
        description: "Navigation layout orientation",
        example: '"horizontal"',
        values: ["horizontal", "vertical"],
      },
    ],
  },
];

// Block-specific properties for the List block
export const listBlockProperties: PropertyCategory[] = [
  {
    name: "List Specific",
    description: "Properties for ordered and unordered lists",
    properties: [
      {
        name: "ordered",
        type: "boolean",
        description: "Whether the list is ordered (numbered) or unordered",
        example: "true",
        defaultValue: "false",
      },
      {
        name: "values",
        type: "string",
        description: "HTML content of list items",
        example: '"<li>First item</li><li>Second item</li>"',
      },
      {
        name: "type",
        type: "string",
        description: "List marker type for ordered lists",
        example: '"1"',
        values: ["1", "A", "a", "I", "i"],
      },
      {
        name: "start",
        type: "number",
        description: "Starting number for ordered lists",
        example: "5",
        defaultValue: "1",
      },
      {
        name: "reversed",
        type: "boolean",
        description: "Whether to reverse the numbering",
        example: "true",
        defaultValue: "false",
      },
    ],
  },
];

// Block-specific properties for the Quote block
export const quoteBlockProperties: PropertyCategory[] = [
  {
    name: "Quote Specific",
    description: "Properties for blockquotes and testimonials",
    properties: [
      {
        name: "value",
        type: "string",
        description: "The quote text content",
        example: '"This is an inspiring quote about WordPress."',
      },
      {
        name: "citation",
        type: "string",
        description: "Citation/attribution for the quote",
        example: '"John Doe, WordPress Developer"',
      },
      {
        name: "align",
        type: "string",
        description: "Quote alignment",
        example: '"center"',
        values: ["left", "center", "right", "wide", "full"],
      },
      {
        name: "className",
        type: "string",
        description: "CSS classes for quote styling",
        example: '"is-style-large"',
        values: [
          "is-style-default",
          "is-style-large",
          "is-style-plain",
          "is-style-pullquote",
        ],
      },
    ],
  },
];

// Block-specific properties for the Gallery block
export const galleryBlockProperties: PropertyCategory[] = [
  {
    name: "Gallery Specific",
    description: "Properties for image galleries and collections",
    properties: [
      {
        name: "images",
        type: "array",
        description: "Array of image objects in the gallery",
        example: '[{"id": 123, "url": "image1.jpg", "alt": "Description"}]',
      },
      {
        name: "ids",
        type: "array",
        description: "Array of image attachment IDs",
        example: "[123, 124, 125]",
      },
      {
        name: "columns",
        type: "number",
        description: "Number of columns in the gallery grid",
        example: "3",
        defaultValue: "3",
      },
      {
        name: "linkTo",
        type: "string",
        description: "Where gallery images should link",
        example: '"media"',
        values: ["none", "media", "attachment"],
        defaultValue: '"none"',
      },
      {
        name: "sizeSlug",
        type: "string",
        description: "WordPress image size to use",
        example: '"large"',
        values: ["thumbnail", "medium", "large", "full"],
        defaultValue: '"large"',
      },
      {
        name: "imageCrop",
        type: "boolean",
        description: "Whether to crop images to fit grid",
        example: "true",
        defaultValue: "true",
      },
      {
        name: "fixedHeight",
        type: "boolean",
        description: "Whether all images should have the same height",
        example: "false",
        defaultValue: "true",
      },
      {
        name: "allowResize",
        type: "boolean",
        description: "Whether to allow resizing of images",
        example: "false",
        defaultValue: "true",
      },
      {
        name: "caption",
        type: "string",
        description: "Gallery caption text",
        example: '"Portfolio gallery showcasing recent work"',
      },
    ],
  },
];

// Helper function to get all properties for a specific block
export function getBlockProperties(
  blockType:
    | "group"
    | "columns"
    | "image"
    | "heading"
    | "paragraph"
    | "button"
    | "query-loop"
    | "navigation"
    | "list"
    | "quote"
    | "gallery",
): PropertyCategory[] {
  const universal = universalBlockProperties;

  switch (blockType) {
    case "group":
      return [...universal, ...groupBlockProperties];
    case "columns":
      return [...universal, ...columnsBlockProperties];
    case "image":
      return [...universal, ...imageBlockProperties];
    case "heading":
      return [...universal, ...headingBlockProperties];
    case "paragraph":
      return [...universal, ...paragraphBlockProperties];
    case "button":
      return [...universal, ...buttonBlockProperties];
    case "query-loop":
      return [...universal, ...queryLoopBlockProperties];
    case "navigation":
      return [...universal, ...navigationBlockProperties];
    case "list":
      return [...universal, ...listBlockProperties];
    case "quote":
      return [...universal, ...quoteBlockProperties];
    case "gallery":
      return [...universal, ...galleryBlockProperties];
    default:
      return universal;
  }
}
