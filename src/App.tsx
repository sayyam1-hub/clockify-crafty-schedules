
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Tips from "./pages/Tips";
import Schedules from "./pages/Schedules";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <div className="page-transition">{children}</div>;
};

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/tips" element={<PageTransition><Tips /></PageTransition>} />
        <Route path="/schedules" element={<PageTransition><Schedules /></PageTransition>} />
        <Route path="/reviews" element={<PageTransition><Reviews /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/learn-more" element={<PageTransition><LearnMore /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
