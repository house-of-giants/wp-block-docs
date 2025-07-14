import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocLayout } from "@/components/DocLayout";
import Index from "./pages/Index";
import BlockIndex from "./pages/BlockIndex";
import QueryLoopBlock from "./pages/QueryLoopBlock";
import NavigationBlock from "./pages/NavigationBlock";
import ListBlock from "./pages/ListBlock";
import QuoteBlock from "./pages/QuoteBlock";
import GalleryBlock from "./pages/GalleryBlock";
import GroupBlock from "./pages/GroupBlock";
import ColumnsBlock from "./pages/ColumnsBlock";
import ImageBlock from "./pages/ImageBlock";
import HeadingBlock from "./pages/HeadingBlock";
import ParagraphBlock from "./pages/ParagraphBlock";
import ButtonBlock from "./pages/ButtonBlock";
import PropertiesReferencePage from "./pages/PropertiesReferencePage";
import FSEQuirks from "./pages/FSEQuirks";
import BestPractices from "./pages/BestPractices";
import PatternLibrary from "./pages/PatternLibrary";
import BlockValidator from "./pages/BlockValidator";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Placeholder components for routes
const Anatomy = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-foreground">
      Anatomy of WordPress Blocks
    </h1>
    <p className="text-muted-foreground">
      Coming soon - comprehensive guide to block structure and syntax.
    </p>
  </div>
);

const CustomBlocks = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-foreground">Custom Blocks</h1>
    <p className="text-muted-foreground">
      Coming soon - guide to creating and using custom WordPress blocks.
    </p>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <DocLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/anatomy" element={<Anatomy />} />
              <Route path="/blocks" element={<BlockIndex />} />
              <Route path="/blocks/query-loop" element={<QueryLoopBlock />} />
              <Route path="/blocks/navigation" element={<NavigationBlock />} />
              <Route path="/blocks/list" element={<ListBlock />} />
              <Route path="/blocks/quote" element={<QuoteBlock />} />
              <Route path="/blocks/gallery" element={<GalleryBlock />} />
              <Route path="/blocks/group" element={<GroupBlock />} />
              <Route path="/blocks/columns" element={<ColumnsBlock />} />
              <Route path="/blocks/image" element={<ImageBlock />} />
              <Route path="/blocks/heading" element={<HeadingBlock />} />
              <Route path="/blocks/paragraph" element={<ParagraphBlock />} />
              <Route path="/blocks/button" element={<ButtonBlock />} />
              <Route path="/properties" element={<PropertiesReferencePage />} />
              <Route path="/patterns" element={<PatternLibrary />} />
              <Route path="/validator" element={<BlockValidator />} />
              <Route path="/custom-blocks" element={<CustomBlocks />} />
              <Route path="/fse-quirks" element={<FSEQuirks />} />
              <Route path="/best-practices" element={<BestPractices />} />
              <Route path="/resources" element={<Resources />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DocLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
