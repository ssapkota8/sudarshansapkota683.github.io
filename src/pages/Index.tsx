
import { useEffect } from "react";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import KingsGallery from "@/components/KingsGallery";
import PhotoGallery from "@/components/PhotoGallery";
import RoyalMap from "@/components/RoyalMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ivory-dark">
      <Header />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Timeline />
        <KingsGallery />
        <PhotoGallery />
        <RoyalMap />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
