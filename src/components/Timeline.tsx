
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { timelineEvents } from "@/assets/data/timeline";

const TimelineItem = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div 
      ref={ref}
      className="timeline-item"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(20px)",
        transition: `all 0.5s ease-out ${index * 0.1}s`
      }}
    >
      <div className="timeline-dot" />
      <div className="pl-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <div className="mb-4 md:mb-0 md:w-1/4">
            <span className="inline-block px-3 py-1 bg-royal-light/20 text-royal font-medium rounded-md">
              {event.year}
            </span>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold mb-3">{event.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
            {event.image && (
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-ivory-dark/30">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          The Monarchical Timeline
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Journey through the key moments in Nepal's royal history, from the early kingdoms to the establishment of the republic.
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
