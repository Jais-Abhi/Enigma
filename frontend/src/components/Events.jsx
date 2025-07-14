import React from "react";
import useGetAllEvents from "../hooks/events/useGetAllEvents";

const Events = () => {
  const { events, loading, error } = useGetAllEvents();

  const now = new Date();
  const completedEvents = events.filter(
    (event) => new Date(event.eventDateTime) < now
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading completed events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">Error fetching events</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 px-4 md:px-6 pt-6 pb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-4xl font-bold text-center text-blue-800 mb-2">
          Completed Events
        </h2>
       <p className="text-center text-gray-600 text-sm sm:text-base font-medium mb-12">
        From Ideas to Execution – Our Journey So Far
      </p>
        {completedEvents.length === 0 ? (
          <p className="text-center text-gray-500">No completed events</p>
        ) : (
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {completedEvents.map((event) => (
              <div
                key={event._id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-44 object-contain bg-white p-2"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-cyan-600 font-medium mb-2">
                    {new Date(event.eventDateTime).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
