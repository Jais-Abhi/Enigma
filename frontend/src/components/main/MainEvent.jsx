import React from "react";

const events = [
  {
    title: "Web Dev Workshop",
    date: "May 15, 2025",
    description: "Hands-on session on HTML, CSS, JS and React basics.",
    image: "/event-1.jpg",
  },
  {
    title: "AI/ML Bootcamp",
    date: "June 5–7, 2025",
    description: "3-day bootcamp exploring Machine Learning & AI fundamentals.",
    image: "/event-2.jpg",
  },
  {
    title: "Hackathon 2.0",
    date: "July 20–21, 2025",
    description: "24-hour coding marathon for innovation and creativity.",
    image: "event-3.jpg",
  },
];

const MainEvent = () => {
  return (
    <div className="bg-white px-4 md:px-6 pt-6 pb-10 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Upcoming Events
        </h2>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-70 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-cyan-600 font-medium mb-2">
                  {event.date}
                </p>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainEvent;
