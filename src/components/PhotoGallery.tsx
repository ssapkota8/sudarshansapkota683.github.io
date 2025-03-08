
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1604954055827-0bfcc1e1aba4?q=80&w=1974&auto=format&fit=crop",
    alt: "Kathmandu Durbar Square",
    caption: "Kathmandu Durbar Square, a UNESCO World Heritage site and former royal palace"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop",
    alt: "Bhaktapur Palace",
    caption: "The ancient royal palace at Bhaktapur Durbar Square"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532699617061-0f05de19b6d3?q=80&w=1972&auto=format&fit=crop",
    alt: "Patan Durbar Square",
    caption: "The royal complex at Patan, showcasing Newar architecture"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544634076-a90160ddf22e?q=80&w=2070&auto=format&fit=crop",
    alt: "Royal Temples",
    caption: "Ancient temples built by Nepal's royal dynasties"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518439179742-b9d916e7da5d?q=80&w=1974&auto=format&fit=crop",
    alt: "Narayanhiti Palace Museum",
    caption: "The former royal palace, now a museum open to the public"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1974&auto=format&fit=crop",
    alt: "Royal Artifacts",
    caption: "Royal artifacts on display at the National Museum of Nepal"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.2 });

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
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
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-royal-light/20 text-royal-dark text-sm font-medium rounded-full uppercase tracking-wider mb-3"
          >
            Visual Archives
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Royal Nepal Photo Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore rare and historic images showcasing Nepal's majestic royal heritage.
          </motion.p>
        </div>

        <motion.div
          ref={galleryRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-xl group"
              onClick={() => openLightbox(photo)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 via-midnight/40 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-ivory text-sm">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[85vh] p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200 z-10"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-[75vh] mx-auto rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-center">
                  <p className="text-white text-lg">{selectedPhoto.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;
