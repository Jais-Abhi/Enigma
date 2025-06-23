import React from "react";
import useGetAllEvents from "../../hooks/events/useGetAllEvents";

const MainEvent = () => {
  const { events, loading, error } = useGetAllEvents();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading New events...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">Error fetching events</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 py-10 px-4 sm:px-10 md:px-20 lg:px-[200px]">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-blue-800 drop-shadow-md">
        Upcoming Events
      </h2>

      {events.length === 0 && (
        <p className="text-center text-gray-600">No Upcoming events available.</p>
      )}

      <div className="grid gap-10 sm:gap-12 md:gap-20 grid-cols-1 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl overflow-hidden border-2 border-transparent
                       transition-all duration-300 group hover:border-blue-600 
                       hover:shadow-[0_0_10px_2px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
          >
            <img
              src={event.poster}
              alt={event.title}
              className="w-full object-contain"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p><strong>📍 Venue:</strong> {event.venue}</p>
                <p>
                  <strong>🕒 Date:</strong>{" "}
                  {new Date(event.eventDateTime).toLocaleString()}
                </p>
                <p><strong>👤 Organizer:</strong> {event.organizerName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainEvent;
