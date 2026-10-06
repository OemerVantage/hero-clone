// BeFi v2 — standalone app. Routes mounted at root for the dedicated v2 website.
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/v2/pages/Home";
import Dienstleistungen from "@/v2/pages/Dienstleistungen";
import ServiceDetail from "@/v2/pages/ServiceDetail";
import UeberUns from "@/v2/pages/UeberUns";
import Referenzen from "@/v2/pages/Referenzen";
import Karriere from "@/v2/pages/Karriere";
import Kontakt from "@/v2/pages/Kontakt";
import BefiSoft from "@/v2/pages/BefiSoft";

const queryClient = new QueryClient();

const V2App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dienstleistungen" element={<Dienstleistungen />} />
          <Route path="/dienstleistungen/:slug" element={<ServiceDetail />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/befi-soft" element={<BefiSoft />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default V2App;
