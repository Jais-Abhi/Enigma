// import React from "react";

// const events = [
//   {
//     title: "Web Dev Workshop",
//     date: "May 15, 2025",
//     description: "Hands-on session on HTML, CSS, JS and React basics.",
//     image: "/event-1.jpg",
//   },
//   {
//     title: "AI/ML Bootcamp",
//     date: "June 5–7, 2025",
//     description: "3-day bootcamp exploring Machine Learning & AI fundamentals.",
//     image: "/event-2.jpg",
//   },
//   {
//     title: "Hackathon 2.0",
//     date: "July 20–21, 2025",
//     description: "24-hour coding marathon for innovation and creativity.",
//     image: "event-3.jpg",
//   },
// ];

// const MainEvent = () => {
//   return (
//     <div className="bg-white px-4 md:px-6 pt-6 pb-10 mt-10">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
//           Upcoming Events
//         </h2>

//         <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-70 object-cover"
//               />
//               <div className="p-4 md:p-6">
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//                   {event.title}
//                 </h3>
//                 <p className="text-sm text-cyan-600 font-medium mb-2">
//                   {event.date}
//                 </p>
//                 <p className="text-gray-600 text-sm">{event.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainEvent;

// src/MainEvent.jsx




// src/MainEvent.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import useGetAllEvents from '../../hooks/events/useGetAllEvents';

// const { events, loading } = useGetAllEvents();


const events = [
  {
    name: "Web Dev Workshop",
    description: "Hands-on session on HTML, CSS, JS and React basics. Learn the fundamentals of web development.",
  },
  {
    name: "AI/ML Bootcamp",
    description: "3-day bootcamp exploring Machine Learning & AI fundamentals. Dive deep into algorithms and neural networks."
  },
  {
    name: "Hackathon 2.0",
    description: "24-hour coding marathon for innovation and creativity. Build amazing projects and solve real-world problems."
  },
];

const MainEvent = () => {
  return (
    <div>
      <p className='flex flex-col text-center text-3xl font-semibold'>Upcoming Events</p>
      <div className=" h-[30rem] flex flex-wrap items-center justify-center p-8 gap-6">
      {events.map((event, index) => (
        <EventCard
          key={index} // In a real app, use a unique ID from your event data if available
          name={event.name}
          description={event.description}
        />
      ))}

{/* 
      {loading ? (
        <p className="text-xl text-center">Loading events...</p>
          ) : (
          events.map((event) => (
        <EventCard
      key={event._id}
      name={event.title}
      description={event.description}
    />
  ))
)} */}


    </div>
    </div>
  );
};

// Internal component for the individual event card
const EventCard = ({ name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define dimensions for no hover and hover states
  const cardVariants = {
    initial: { width: '130px', height: '300px' }, // Small initial state
    hovered: { width: '400px', height: '400px' },  // Expanded state (adjust as needed)
  };

  // Variants for the initial name display (fade out)
  const nameVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20, transition: { duration: 2 } } // Fast fade out
  };

  // Variants for the description content (fade and slide in)
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }, // Fade and slide in
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } } // Fade and slide out
  };

  return (
    <motion.div
      className="relative rounded-lg shadow-lg bg-white overflow-hidden cursor-pointer flex flex-col justify-center items-center p-2" // Added p-2
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial="initial"
      animate={isHovered ? "hovered" : "initial"}
      variants={cardVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }} // Overall card animation
    >
      {/* Content Area - this div will handle the internal layout */}
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center">
        {/* Name (visible when not hovered) */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              key="initial-name" // Key for AnimatePresence to track
              variants={nameVariants}
              initial="visible"
              animate="visible"
              exit="hidden" // Animates to hidden when isHovered becomes true
              className="absolute inset-0 flex items-center justify-center text-indigo-700 font-bold text-base [word-break:break-word]" // text-center is handled by parent flex
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description (visible when hovered) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="description-content" // Key for AnimatePresence to track
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit" // Animates to hidden when isHovered becomes false
              className="absolute inset-0 flex flex-col justify-center items-center p-2 bg-blue-50 text-blue-800" // Added p-2
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }} // Delay slightly after parent fades in
                className="text-indigo-600 font-bold mb-1 text-base"
              >
                {name}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }} // Delay slightly more
                className="text-sm leading-snug"
              >
                {description}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainEvent;