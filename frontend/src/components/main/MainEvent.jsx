import React from "react";
import useGetAllEvents from "../../hooks/events/useGetAllEvents";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const { events, loading, error } = useGetAllEvents();

  const now = new Date();
  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDateTime) >= now
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 animate-pulse">Loading upcoming events...</p>
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
    <div className="bg-gray-200 px-4 md:px-6 pt-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-blue-800 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
            UPCOMING EVENTS
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium text-center mb-12">
              Don't miss out on the latest happenings. Mark your calendars!
           </p>
        <div className="bg-white border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

          {upcomingEvents.length === 0 ? (
            <p className="text-center text-gray-500">No upcoming events</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => {
                  const dateObj = new Date(event.eventDateTime);
                  const day = dateObj.getDate();
                  const monthYear = dateObj.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  });

                  return (
                    <div
                      key={event._id}
                      className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    >
                      <div className="relative w-full h-60 bg-white">
                        <img
                          src={event.poster}
                          alt={event.title}
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-red-800 text-white px-3 py-1 rounded text-center shadow-md">
                          <div className="text-lg font-bold leading-none">{day}</div>
                          <div className="text-xs">{monthYear}</div>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3 font-bold">
                          {event.description}
                        </p>
                        <Link to={`/events/${event._id}`}>
                          <button className="mt-4 bg-red-800 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition duration-300">
                            LEARN MORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-12 text-center">
                <Link to="/Events">
                  <button className="text-red-800 border border-red-800 px-6 py-2 rounded-full hover:bg-red-800 hover:text-white transition duration-300">
                    SEE ALL EVENTS
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default UpcomingEvents;
