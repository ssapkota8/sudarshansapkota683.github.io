
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const landmarks = [
  {
    id: 1,
    name: "Narayanhiti Palace",
    location: "Kathmandu",
    description: "The former residence of Nepal's monarchy until 2008, now a museum showcasing royal artifacts and history.",
    position: { top: "42%", left: "48%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narayanhity_Palace%2C_Kathmandu.jpg/1280px-Narayanhity_Palace%2C_Kathmandu.jpg"
  },
  {
    id: 2,
    name: "Hanuman Dhoka",
    location: "Kathmandu Durbar Square",
    description: "The historic royal palace at the heart of Kathmandu, built in the 4th century and expanded over centuries by Malla and Shah kings.",
    position: { top: "46%", left: "45%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hanuman_Dhoka_Palace_-_Kathmandu.jpg/1280px-Hanuman_Dhoka_Palace_-_Kathmandu.jpg"
  },
  {
    id: 3,
    name: "Patan Royal Palace",
    location: "Patan Durbar Square",
    description: "An ancient royal complex featuring intricate Newar architecture, built by the Malla kings who ruled the independent kingdom of Patan.",
    position: { top: "50%", left: "47%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PATAN_DURBAR_SQUARE.jpg/1280px-PATAN_DURBAR_SQUARE.jpg"
  },
  {
    id: 4,
    name: "Bhaktapur Palace",
    location: "Bhaktapur Durbar Square",
    description: "The royal palace of the Malla kings who ruled Bhaktapur, known for its 55-window palace and Golden Gate.",
    position: { top: "45%", left: "52%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bhaktapur_durbar_square.jpg/1280px-Bhaktapur_durbar_square.jpg"
  },
  {
    id: 5,
    name: "Gorkha Durbar",
    location: "Gorkha",
    description: "The ancient palace of King Prithvi Narayan Shah, who unified Nepal, perched on a hill overlooking the town of Gorkha.",
    position: { top: "38%", left: "35%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Gorkha_Durbar.jpg/1280px-Gorkha_Durbar.jpg"
  },
  {
    id: 6,
    name: "Nuwakot Palace",
    location: "Nuwakot",
    description: "A strategically important palace built by Prithvi Narayan Shah as he began his conquest of the Kathmandu Valley.",
    position: { top: "32%", left: "42%" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nuwakot_Durbar.jpg/1280px-Nuwakot_Durbar.jpg"
  }
];

const RoyalMap = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 px-4 md:px-6 bg-midnight text-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-royal/30 text-royal-light text-sm font-medium rounded-full uppercase tracking-wider mb-3"
          >
            Royal Landmarks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Interactive Kingdom Map
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ivory/70 max-w-2xl mx-auto"
          >
            Explore historical royal sites across Nepal, from ancient palaces to sacred temples built by monarchs.
          </motion.p>
        </div>

        <div 
          ref={mapRef}
          className="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row gap-8 items-start"
        >
          {/* Map with Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 aspect-[4/5] bg-royal/10 rounded-lg overflow-hidden border border-royal/30 shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nepal_relief_location_map.jpg/1280px-Nepal_relief_location_map.jpg"
              alt="Map of Nepal"
              className="w-full h-full object-cover"
            />
            
            {/* Landmark Pins */}
            {landmarks.map((landmark) => (
              <button
                key={landmark.id}
                onClick={() => setSelectedLandmark(landmark)}
                className={`absolute w-5 h-5 md:w-6 md:h-6 rounded-full transition-all duration-300 hover:scale-125 z-10 ${
                  selectedLandmark?.id === landmark.id
                    ? "bg-royal border-2 border-white scale-125"
                    : "bg-red-500 border-2 border-white"
                }`}
                style={{
                  top: landmark.position.top,
                  left: landmark.position.left,
                }}
                aria-label={landmark.name}
              />
            ))}
          </motion.div>

          {/* Landmark Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            {selectedLandmark ? (
              <motion.div
                key={selectedLandmark.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-midnight-light p-6 rounded-lg shadow-lg border border-royal/20"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedLandmark.image}
                    alt={selectedLandmark.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{selectedLandmark.name}</h3>
                <p className="text-royal mb-4">{selectedLandmark.location}</p>
                <p className="text-ivory/80">{selectedLandmark.description}</p>
              </motion.div>
            ) : (
              <div className="bg-midnight-light p-6 rounded-lg shadow-lg border border-royal/20 h-full flex items-center justify-center">
                <p className="text-ivory/70 text-center">
                  Select a landmark on the map to view details about Nepal's royal heritage sites.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoyalMap;
