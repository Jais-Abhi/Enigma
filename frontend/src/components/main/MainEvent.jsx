import React from "react";
import useGetAllEvents from "../../hooks/events/useGetAllEvents";

const MainEvent = () => {
  const { events, loading, error } = useGetAllEvents();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading trending events...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">Error fetching events</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 py-10 px-4 md:px-12">
      <h2 className="text-4xl font-extrabold text-center mb-15 text-blue-800 drop-shadow-md">
        Upcomming Events
      </h2>

      {events.length === 0 && (
        <p className="text-center text-gray-600">No Upcomming events available.</p>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-55 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              
                {event.title}
              
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {event.description}
              </p>
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
