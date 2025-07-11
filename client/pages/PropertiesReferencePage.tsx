import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertiesReference } from "@/components/PropertiesReference";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Book, Info, Zap, Code } from "lucide-react";

export default function PropertiesReferencePage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    // If there's a search query, we can scroll to search or highlight results
    if (searchQuery) {
      // The PropertiesReference component will handle the search internally
      document.title = `Properties Reference - Search: ${searchQuery}`;
    } else {
      document.title = "Properties Reference";
    }
  }, [searchQuery]);
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-neon-cyan/20">
            <Book className="h-6 w-6 text-neon-cyan" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Properties Reference
          </h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Complete API-style documentation for all WordPress block properties
          and attributes. Learn what each property does, its data type, default
          values, and see real examples.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
          >
            Universal Properties
          </Badge>
          <Badge variant="outline">Block-Specific</Badge>
          <Badge variant="outline">Searchable</Badge>
          <Badge variant="outline">Copy Examples</Badge>
        </div>
      </div>

      <Separator />

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-pink/20">
                <Info className="h-5 w-5 text-neon-pink" />
              </div>
              <CardTitle className="text-lg">Universal Properties</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Properties available to every WordPress block including styling,
              spacing, borders, and core attributes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-blue/20">
                <Code className="h-5 w-5 text-neon-blue" />
              </div>
              <CardTitle className="text-lg">Block-Specific</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Unique properties available only to specific block types like
              Group layout settings or Columns configuration.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-purple/20">
                <Zap className="h-5 w-5 text-neon-purple" />
              </div>
              <CardTitle className="text-lg">Copy & Use</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Every property includes real examples you can copy and paste
              directly into your block markup.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How to Use */}
      <Card className="bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border-neon-pink/20">
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <Info className="mr-2 h-5 w-5 text-neon-pink" />
            How to Use This Reference
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">
                🔍 Search Properties
              </h4>
              <p className="text-muted-foreground">
                Use the search box to quickly find specific properties by name
                or description.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                📋 Copy Examples
              </h4>
              <p className="text-muted-foreground">
                Click the copy button next to any example to copy the code to
                your clipboard.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                🏷️ Property Types
              </h4>
              <p className="text-muted-foreground">
                Each property shows its data type (string, number, boolean,
                object) and available values.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">📖 Context</h4>
              <p className="text-muted-foreground">
                Properties are organized by category to help you understand
                their purpose and usage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Properties Reference */}
      <PropertiesReference
        title="Universal Block Properties"
        description="These properties are available to all WordPress blocks and provide the foundation for styling, spacing, and core functionality."
        showUniversalOnly={true}
        initialSearch={searchQuery}
      />

      {/* Block-Specific Note */}
      <Card className="bg-muted/20 border-border/50">
        <CardContent className="py-6 text-center">
          <Code className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Looking for Block-Specific Properties?
          </h3>
          <p className="text-muted-foreground">
            Each block documentation page includes its specific properties along
            with universal properties. Visit the individual block pages for
            complete property references.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
