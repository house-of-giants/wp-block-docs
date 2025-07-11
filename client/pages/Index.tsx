import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  BookOpen,
  Zap,
  Search,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

export default function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium">
          <Sparkles className="mr-2 h-4 w-4 text-neon-pink" />
          The definitive WordPress blocks documentation
        </div>

        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
          WordPress Block
          <br />
          HTML Reference
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Demystify the often obscure and under-documented block comment syntax.
          Your complete guide to understanding the HTML markup of WordPress core
          blocks used in block themes and patterns.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/anatomy">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
          </Link>
          <Link to="/blocks/group">
            <Button variant="outline" size="lg">
              View Examples
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Example Block Syntax */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Code className="mr-2 h-5 w-5 text-neon-blue" />
              Example Block Syntax
            </CardTitle>
            <CardDescription>
              Ever wondered what this cryptic WordPress block syntax means?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-retro-darker rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <CodeBlock
                code={`<!-- wp:group {
  "style": {
    "spacing": {
      "padding": {
        "top": "var:preset|spacing|4xl"
      }
    }
  }
} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--4-xl)">
  <!-- wp:heading {"level":2} -->
  <h2 class="wp-block-heading">Your content here</h2>
  <!-- /wp:heading -->
</div>
<!-- /wp:group -->`}
                language="html"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-pink/50 transition-colors">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-pink/20">
                <Code className="h-5 w-5 text-neon-pink" />
              </div>
              <CardTitle className="text-lg">Block Anatomy</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Learn the structure of WordPress block comments, attributes, and
              how they translate to HTML.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-blue/50 transition-colors">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-blue/20">
                <Search className="h-5 w-5 text-neon-blue" />
              </div>
              <CardTitle className="text-lg">Searchable Reference</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Quickly find documentation for any WordPress core block with our
              comprehensive search.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-neon-purple/50 transition-colors">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-neon-purple/20">
                <Zap className="h-5 w-5 text-neon-purple" />
              </div>
              <CardTitle className="text-lg">Copy & Paste Ready</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Real-world patterns and snippets you can use immediately in your
              WordPress themes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Why This Exists */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why This Site Exists
          </h2>
          <p className="text-muted-foreground text-lg">
            WordPress block documentation often focuses on the editor
            experience, leaving developers in the dark about the actual HTML
            markup generated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              The Problem
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Block comment syntax is poorly documented</li>
              <li>• HTML output varies between themes</li>
              <li>• FSE markup quirks are hard to find</li>
              <li>• Real-world examples are scattered</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Our Solution
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Complete HTML markup reference</li>
              <li>• Visual examples with code</li>
              <li>• Known quirks and gotchas</li>
              <li>• Production-ready patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-16">
        <h2 className="text-3xl font-bold text-foreground">
          Ready to Master WordPress Blocks?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Start with our comprehensive anatomy guide, then dive into specific
          block documentation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/anatomy">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Block Anatomy Guide
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            Contribute on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
