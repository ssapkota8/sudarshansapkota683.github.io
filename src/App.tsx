
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// Create basic placeholder pages for routes that are being linked to but don't exist yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-ivory-dark pt-24">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-xl">This page is coming soon.</p>
        <p className="mt-4">Created by Sudarshan Sapkota</p>
        <a href="/" className="mt-8 inline-block bg-royal hover:bg-royal-dark text-midnight font-medium py-2 px-6 rounded-full transition-all duration-300">
          Return to Home
        </a>
      </div>
    </div>
  </div>
);

const AboutPage = () => <PlaceholderPage title="About The Royal Legacy" />;
const KingsPage = () => <PlaceholderPage title="Kings of Nepal" />;
const GalleryPage = () => <PlaceholderPage title="Royal Gallery" />;
const MapPage = () => <PlaceholderPage title="Royal Map" />;
const ContactPage = () => <PlaceholderPage title="Contact Us" />;
const KingDetailPage = () => <PlaceholderPage title="King Biography" />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kings" element={<KingsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/king/:id" element={<KingDetailPage />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
