import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronDown,
  ChevronRight,
  Copy,
  Search,
  Info,
  Code,
  Type,
  Palette,
  Layout,
  Move,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  type PropertyCategory,
  type BlockProperty,
  universalBlockProperties,
  getBlockProperties,
} from "@/lib/block-properties";

interface PropertiesReferenceProps {
  blockType?:
    | "group"
    | "columns"
    | "image"
    | "heading"
    | "paragraph"
    | "button";
  title?: string;
  description?: string;
  showUniversalOnly?: boolean;
}

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "Core Attributes": Settings,
  "Styling & Appearance": Palette,
  Typography: Type,
  "Spacing & Layout": Move,
  "Border & Outline": Layout,
  Dimensions: Layout,
  "Group-Specific": Code,
  "Columns-Specific": Code,
  "Individual Column": Code,
};

function PropertyRow({ property }: { property: BlockProperty }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (propertyName: string, example: string) => {
    // Create proper JSON markup format for the property
    const markup = `"${propertyName}":${example}`;

    try {
      await navigator.clipboard.writeText(markup);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for when clipboard API is blocked
      try {
        const textArea = document.createElement("textarea");
        textArea.value = markup;
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
    <TableRow className="hover:bg-muted/50">
      <TableCell className="font-mono text-sm min-w-[200px]">
        <div className="flex flex-col space-y-2">
          <span className="text-neon-blue break-words">{property.name}</span>
          <div className="flex flex-wrap gap-1">
            {property.deprecated && (
              <Badge
                variant="outline"
                className="text-xs text-yellow-600 border-yellow-600"
              >
                Deprecated
              </Badge>
            )}
            {property.since && (
              <Badge variant="outline" className="text-xs">
                {property.since}
              </Badge>
            )}
          </div>
        </div>
      </TableCell>
      <TableCell className="min-w-[100px]">
        <Badge variant="secondary" className="font-mono text-xs">
          {property.type}
        </Badge>
      </TableCell>
      <TableCell className="text-sm text-muted-foreground min-w-[300px] max-w-[400px]">
        <div className="space-y-2">
          <p>{property.description}</p>
          {property.values && (
            <div>
              <span className="text-xs font-medium text-foreground">
                Values:{" "}
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {property.values.map((value) => (
                  <Badge
                    key={value}
                    variant="outline"
                    className="text-xs font-mono"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </TableCell>
      <TableCell className="min-w-[120px]">
        {property.defaultValue && (
          <Badge variant="outline" className="font-mono text-xs break-words">
            {property.defaultValue}
          </Badge>
        )}
      </TableCell>
      <TableCell className="min-w-[200px]">
        {property.example && (
          <div className="flex items-start space-x-2">
            <code className="bg-muted px-2 py-1 rounded text-xs font-mono text-neon-cyan break-words flex-1 min-w-0">
              {property.example}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopy(property.example!)}
              className="h-8 w-8 p-0 flex-shrink-0"
              title={copied ? "Copied!" : "Copy example"}
            >
              {copied ? (
                <span className="text-green-500 text-xs">✓</span>
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
        )}
      </TableCell>
    </TableRow>
  );
}

function PropertyCategory({ category }: { category: PropertyCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = categoryIcons[category.name] || Code;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start p-0 h-auto hover:bg-transparent"
        >
          <Card className="w-full bg-card/50 backdrop-blur border-border/50 hover:border-neon-purple/30 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-neon-purple/20">
                    <Icon className="h-5 w-5 text-neon-purple" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {category.properties.length} properties
                  </Badge>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-4">
        <Card className="bg-card/30 backdrop-blur border-border/30">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[200px]">Property</TableHead>
                    <TableHead className="min-w-[100px]">Type</TableHead>
                    <TableHead className="min-w-[300px]">Description</TableHead>
                    <TableHead className="min-w-[120px]">Default</TableHead>
                    <TableHead className="min-w-[250px]">Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {category.properties.map((property) => (
                    <PropertyRow key={property.name} property={property} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function PropertiesReference({
  blockType,
  title = "Block Properties Reference",
  description = "Complete reference of all available block properties and attributes",
  showUniversalOnly = false,
}: PropertiesReferenceProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Get properties based on block type or show universal only
  const allProperties = showUniversalOnly
    ? universalBlockProperties
    : blockType
      ? getBlockProperties(blockType)
      : universalBlockProperties;

  // Filter properties based on search
  const filteredProperties = allProperties
    .map((category) => ({
      ...category,
      properties: category.properties.filter(
        (prop) =>
          prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.properties.length > 0);

  // Separate universal and block-specific properties
  const universalProps = filteredProperties.filter((cat) =>
    universalBlockProperties.some((univCat) => univCat.name === cat.name),
  );

  const blockSpecificProps = filteredProperties.filter(
    (cat) =>
      !universalBlockProperties.some((univCat) => univCat.name === cat.name),
  );

  const hasBlockSpecific = blockSpecificProps.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-neon-cyan/20">
            <Info className="h-6 w-6 text-neon-cyan" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Properties */}
      {hasBlockSpecific && !showUniversalOnly ? (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Properties</TabsTrigger>
            <TabsTrigger value="universal">Universal Only</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-6">
            {blockSpecificProps.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Block-Specific Properties
                </h3>
                {blockSpecificProps.map((category) => (
                  <PropertyCategory key={category.name} category={category} />
                ))}
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Universal Properties
              </h3>
              <p className="text-sm text-muted-foreground">
                These properties are available to all WordPress blocks
              </p>
              {universalProps.map((category) => (
                <PropertyCategory key={category.name} category={category} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="universal" className="space-y-4 mt-6">
            <p className="text-sm text-muted-foreground">
              These properties are available to all WordPress blocks
            </p>
            {universalProps.map((category) => (
              <PropertyCategory key={category.name} category={category} />
            ))}
          </TabsContent>
        </Tabs>
      ) : (
        <div className="space-y-4">
          {filteredProperties.map((category) => (
            <PropertyCategory key={category.name} category={category} />
          ))}
        </div>
      )}

      {filteredProperties.length === 0 && searchTerm && (
        <Card className="bg-muted/20 border-border/50">
          <CardContent className="py-8 text-center">
            <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              No properties found matching "{searchTerm}"
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
