// General Imports
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";

// General Pages
import Index from "@/pages/Index";
import Support from "@/pages/Support";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

// Minecraft Docs
import CloveLibDocs from "@/pages/docs/CloveLibDocs";
import EstrocordDocs from "@/pages/docs/EstrocordDocs";
import JailedWingsDocs from "@/pages/docs/JailedWingsDocs";
import WingSyncDocs from "@/pages/docs/WingSyncDocs";
import CPCDocs from "@/pages/docs/CPCDocs";
import StatsEndDocs from "@/pages/docs/StatsEndDocs";
import EndRaceDocs from "@/pages/docs/EndRaceDocs";

// Hytale Docs
// import CPTDocs from '@/pages/docs/CPTDocs';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/docs/clovelib" element={<CloveLibDocs />} />
          <Route path="/docs/estrocord" element={<EstrocordDocs />} />
          <Route path="/docs/jailedwings" element={<JailedWingsDocs />} />
          <Route path="/docs/wingsync" element={<WingSyncDocs />} />
          <Route path="/docs/cpc" element={<CPCDocs />} />
          <Route path="/docs/statsend" element={<StatsEndDocs />} />
          <Route path="/docs/endrace" element={<EndRaceDocs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
