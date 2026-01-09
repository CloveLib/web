// General Imports
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General Pages
import Index from "@/pages/Index";
import Support from "@/pages/Support";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import Licence from "@/pages/Licence";
import Docs from "@/pages/Docs";

// Minecraft Docs
import CloveLibAPIDocs from "@/pages/docs/CloveLibAPIDocs";
import EstrocordDocs from "@/pages/docs/EstrocordDocs";
import JailedWingsDocs from "@/pages/docs/JailedWingsDocs";
import WingSyncDocs from "@/pages/docs/WingSyncDocs";
import CPCDocs from "@/pages/docs/CPCDocs";
import EstrocordCrafts from "@/pages/crafts/EstrocordCrafts";

// Hytale/Other Docs
import CPTDocs from '@/pages/docs/CPTDocs';
import CPWDocs from '@/pages/docs/CPWDocs';

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
          <Route path="/licence" element={<Licence />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/clovelibapi" element={<CloveLibAPIDocs />} />
          <Route path="/docs/estrocord" element={<EstrocordDocs />} />
          <Route path="/docs/jailedwings" element={<JailedWingsDocs />} />
          <Route path="/docs/wingsync" element={<WingSyncDocs />} />
          <Route path="/docs/cpc" element={<CPCDocs />} />
          <Route path="/docs/cpt" element={<CPTDocs />} />
          <Route path="/docs/cpw" element={<CPWDocs />} />
          <Route path="/crafts/estrocord" element={<EstrocordCrafts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;