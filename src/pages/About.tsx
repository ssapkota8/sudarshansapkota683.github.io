
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ivory-dark">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 md:pt-32 md:pb-20 bg-royal-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-ivory max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Monarchical Legacy</h1>
            <p className="text-xl text-ivory/80 mb-8">
              From the ancient Malla dynasties to the modern Shah kings, explore Nepal's rich royal history
              spanning centuries of cultural development, military conquests, and social transformation.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
              <div className="aspect-video">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kathmandu_Durbar_Square_before_and_after.jpg/1280px-Kathmandu_Durbar_Square_before_and_after.jpg" 
                  alt="Nepal Royal Palace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">History of Nepal's Monarchy</h2>
                <p className="text-gray-700 mb-4">
                  Nepal's history is deeply intertwined with its monarchy, which played a pivotal role in shaping the nation's identity for centuries. The monarchy in Nepal can be traced back to ancient times, with the Kirat Dynasty ruling from 800 BCE to 300 CE, followed by the Licchavi Dynasty from 400 to 750 CE.
                </p>
                <p className="text-gray-700 mb-4">
                  The Malla Dynasty, ruling from the 12th to 18th centuries, contributed significantly to Nepal's arts, architecture, and culture. The Kathmandu Valley was divided into three kingdoms: Kathmandu, Bhaktapur, and Lalitpur, each with its own royal palace and cultural achievements.
                </p>
                <p className="text-gray-700 mb-4">
                  The modern history of Nepal's monarchy began with Prithvi Narayan Shah, who unified various small principalities into the Kingdom of Nepal in 1768. The Shah Dynasty ruled continuously from this time until 2008, making it one of Asia's longest-running monarchies.
                </p>
                <p className="text-gray-700">
                  Throughout its history, Nepal's monarchy witnessed significant transformations, from absolute rule to constitutional monarchy, and finally to abolition in 2008 when Nepal was declared a federal democratic republic.
                </p>
              </div>
            </div>
          </div>
          
          <Timeline />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Shah Dynasty's Legacy</h2>
                <p className="text-gray-700 mb-4">
                  The Shah Dynasty, which ruled Nepal for 240 years, left an indelible mark on the nation's history, culture, and identity. Although the monarchy has been abolished, its legacy continues to influence modern Nepal in various ways.
                </p>
                <p className="text-gray-700 mb-4">
                  One of the most significant aspects of the Shah Dynasty's legacy is national unity. Before King Prithvi Narayan Shah's unification campaign, the region that is now Nepal was divided into numerous small kingdoms and principalities. The unified nation has endured for centuries, despite facing various internal and external challenges.
                </p>
                <p className="text-gray-700 mb-4">
                  The Shah kings also contributed to Nepal's cultural identity, patronizing arts, literature, and architecture. Many of Nepal's UNESCO World Heritage Sites, including the royal palaces of Kathmandu Valley, were built or expanded during their reign.
                </p>
                <p className="text-gray-700">
                  Today, while Nepal embraces its new identity as a democratic republic, the royal legacy remains an essential part of its national heritage and historical narrative. The former royal palaces now serve as museums, preserving the history of the monarchy for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
