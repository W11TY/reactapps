import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import ShippingReturns from "./pages/shipping-returns";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/faq";
import Story from "./pages/story";

import ScrollToTop from "./components/scrolltotop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop /> {/* ✅ FIX: self-closing, not wrapping */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;