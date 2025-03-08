
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1974&auto=format&fit=crop",
    title: "Royal Legacy of Nepal",
    description: "Explore the majestic history of the Nepali monarchy"
  },
  {
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf22e?q=80&w=2070&auto=format&fit=crop",
    title: "240 Years of Dynasty",
    description: "Discover the rich heritage of the Shah dynasty"
  },
  {
    image: "https://images.unsplash.com/photo-1526719810292-033f15b498cf?q=80&w=2070&auto=format&fit=crop",
    title: "Palaces & Kingdoms",
    description: "Journey through the royal landmarks of a bygone era"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 hero-mask">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-royal w-8" : "bg-ivory/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2"
        >
          <span className="bg-royal px-4 py-1 text-sm md:text-base uppercase tracking-wider text-midnight font-medium rounded-full">
            Where History Lives On
          </span>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 max-w-5xl"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-ivory/90 mb-8 max-w-2xl"
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={scrollToContent}
            className="bg-royal hover:bg-royal-dark text-midnight font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center"
          >
            Explore the Dynasty
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-ivory h-8 w-8 cursor-pointer" onClick={scrollToContent} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
