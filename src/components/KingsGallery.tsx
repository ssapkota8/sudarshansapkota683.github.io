
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { kings } from "@/assets/data/kings";
import { ChevronLeft, ChevronRight } from "lucide-react";

const KingsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true });

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? kings.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === kings.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-ivory-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
          >
            Historical Figures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            The Kings of Nepal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover the monarchs who shaped Nepal's history through their leadership, policies, and cultural impacts.
          </motion.p>
        </div>

        <div
          ref={carouselRef}
          className="relative max-w-6xl mx-auto px-4 md:px-10"
        >
          <div className="relative overflow-hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center flex-col md:flex-row md:h-[500px] gap-8"
            >
              {/* King Image */}
              <motion.div
                key={`image-${activeIndex}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[3/4] max-w-md mx-auto">
                  <img
                    src={kings[activeIndex].image}
                    alt={kings[activeIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                    <h3 className="text-2xl font-bold mb-1">{kings[activeIndex].name}</h3>
                    <p className="opacity-80">{kings[activeIndex].reign} | {kings[activeIndex].dynasty}</p>
                  </div>
                </div>
              </motion.div>

              {/* King Details */}
              <motion.div
                key={`details-${activeIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 flex flex-col justify-center"
              >
                {kings[activeIndex].quote && (
                  <blockquote className="italic text-gray-600 dark:text-gray-400 text-lg mb-6 border-l-4 border-royal pl-4 py-2">
                    "{kings[activeIndex].quote}"
                  </blockquote>
                )}
                <p className="text-gray-700 dark:text-gray-300 mb-6">{kings[activeIndex].description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {kings[activeIndex].achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-royal rounded-full mt-2 mr-3"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/king/${kings[activeIndex].id}`}
                  className="mt-4 inline-block bg-royal hover:bg-royal-dark text-midnight font-medium py-2 px-6 rounded-full transition-all duration-300 self-start"
                >
                  Read Full Biography
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="bg-midnight/5 hover:bg-midnight/10 p-3 rounded-full transition-colors duration-200"
              aria-label="Previous king"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-2">
              {kings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-royal w-8" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-midnight/5 hover:bg-midnight/10 p-3 rounded-full transition-colors duration-200"
              aria-label="Next king"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KingsGallery;
