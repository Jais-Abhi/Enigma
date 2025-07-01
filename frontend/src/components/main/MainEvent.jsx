import React from "react";
import useGetAllEvents from "../../hooks/events/useGetAllEvents";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const TiltCard = ({ children }) => {
  const x = useMotionValue(150);
  const y = useMotionValue(150);

  const rotateX = useTransform(y, [0, 300], [10, -10]);
  const rotateY = useTransform(x, [0, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    animate(x, posX, { type: "tween", duration: 0.4, ease: "easeOut" });
    animate(y, posY, { type: "tween", duration: 0.4, ease: "easeOut" });
  };

  const handleMouseLeave = () => {
    animate(x, 150, { type: "tween", duration: 0.6, ease: "easeOut" });
    animate(y, 150, { type: "tween", duration: 0.6, ease: "easeOut" });
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }}
    >
      {children}
    </motion.div>
  );
};

const MainEvent = () => {
  const { events, loading, error } = useGetAllEvents();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading upcoming events...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">Error fetching events</p>
      </div>
    );

  const now = new Date();
  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDateTime) > now
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-blue-800 drop-shadow-md">
        Upcoming Events
      </h2>

      {upcomingEvents.length === 0 ? (
        <p className="text-center text-gray-600">No Upcoming events available.</p>
      ) : (
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <TiltCard key={event._id}>
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] flex flex-col h-full">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-[250px] object-contain bg-white p-2"
                />
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-800">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p><strong>📍 Venue:</strong> {event.venue}</p>
                    <p><strong>🕒 Date:</strong> {new Date(event.eventDateTime).toLocaleString()}</p>
                    <p><strong>👤 Organizer:</strong> {event.organizerName}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainEvent;
