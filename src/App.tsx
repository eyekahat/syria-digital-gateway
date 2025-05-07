import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Diaspora from "./pages/Diaspora";
import CitizenServices from "./pages/CitizenServices";
import EntrepreneurServices from "./pages/EntrepreneurServices";
import ProactiveServices from "./pages/ProactiveServices";
import Bureaucracy from "./pages/Bureaucracy";
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/citizen-services" element={<CitizenServices />} />
          <Route
            path="/entrepreneur-services"
            element={<EntrepreneurServices />}
          />
          <Route path="/proactive-services" element={<ProactiveServices />} />
          <Route path="/bureaucracy-test" element={<Bureaucracy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
