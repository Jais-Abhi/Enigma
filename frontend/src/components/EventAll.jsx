import React from "react";
import { useParams } from "react-router-dom";
import useGetAllEvents from "../hooks/events/useGetAllEvents";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserIcon,
  UsersIcon,
  ClipboardDocumentIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

const EventAll = () => {
  const { id } = useParams();
  const { events, loading, error } = useGetAllEvents();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-600 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Error fetching event</p>
      </div>
    );
  }

  const event = events.find((e) => e._id === id);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Event not found</p>
      </div>
    );
  }

  const dateObj = new Date(event.eventDateTime);

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-20 font-sans text-gray-800">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">Event Overview</h1>
      </div>

      {/* Horizontal Division */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={event.poster}
            alt={event.title}
            className="w-full max-w-[500px] h-auto object-contain bg-white p-2 rounded-lg shadow"
          />
        </div>

        {/* RIGHT SIDE: Event Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          {/* Event Details Card */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
              <ClipboardDocumentIcon className="h-6 w-6 text-pink-600" />
              Event Details
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <IdentificationIcon className="h-5 w-5 text-gray-500]" />
                <span><strong>Title:</strong> {event.title}</span>
              </div>
              <div className="flex items-start gap-2">
                <ClipboardDocumentIcon className="h-5 w-5 text-gray-500 mt-1" />
                <span><strong>Description:</strong> {event.description}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-gray-500" />
                <span><strong>Organizer:</strong> {event.organizerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-gray-500" />
                <span><strong>Community:</strong> {event.community}</span>
              </div>
            </div>
          </div>
<div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-[#7C0A2A]">
          READY FOR <span className="text-pink-600">WHAT'S NEXT</span>
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#7C0A2A] text-white px-6 py-2 rounded-full font-semibold w-60">
            REQUEST MORE INFO
          </button>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold w-60">
            REGISTER NOW
          </button>
          <button className="bg-[#7C0A2A] text-white px-6 py-2 rounded-full font-semibold w-60">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
          {/* Schedule Card */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
              <CalendarDaysIcon className="h-6 w-6 text-pink-600" />
              Schedule
            </h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
                <span><strong>Date:</strong> {dateObj.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <span><strong>Time:</strong> {dateObj.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-500" />
                <span><strong>Venue:</strong> {event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAll;
