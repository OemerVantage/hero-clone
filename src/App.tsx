import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dienstleistungen from "./pages/Dienstleistungen";
import DienstleistungenReinigung from "./pages/DienstleistungenReinigung";
import DienstleistungenHauswartung from "./pages/DienstleistungenHauswartung";
import DienstleistungenGarten from "./pages/DienstleistungenGarten";
import UeberUns from "./pages/UeberUns";
import UeberUnsUnternehmen from "./pages/UeberUnsUnternehmen";
import UeberUnsTeam from "./pages/UeberUnsTeam";
import Referenzen from "./pages/Referenzen";
import Kontakt from "./pages/Kontakt";
import Karriere from "./pages/Karriere";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dienstleistungen" element={<Dienstleistungen />} />
          <Route path="/dienstleistungen/reinigung" element={<DienstleistungenReinigung />} />
          <Route path="/dienstleistungen/hauswartung" element={<DienstleistungenHauswartung />} />
          <Route path="/dienstleistungen/garten" element={<DienstleistungenGarten />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/ueber-uns/unternehmen" element={<UeberUnsUnternehmen />} />
          <Route path="/ueber-uns/team" element={<UeberUnsTeam />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/karriere" element={<Karriere />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
