import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { useSelector } from "react-redux";
import Event from "./Event";
import CreateEventForm from "./events/CreateEventForm";
import AdminEventList from "./events/admin/AdminEventList";
import useGetAllEvents from "../hooks/events/useGetAllEvents";
import useLogout from "../hooks/useLogout";

const AdminDashboard = () => {
  const [IsEvent, setIsEvent] = useState(true);
  const user = useSelector((store) => store.user);
  const name = user?.name.split(" ")[0] || "Admin";

  const { refetchEvents } = useGetAllEvents();
  const logout = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div className="mt-20 bg-gray-300">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-4xl flex gap-5">
            <button
              onClick={() => setIsEvent(true)}
              className="bg-green-300 p-4 rounded-4xl"
            >
              All Events
            </button>
            <button
              onClick={() => setIsEvent(false)}
              className="bg-green-300 p-4 rounded-4xl"
            >
              Members
            </button>
          </div>
          <p className="text-4xl font-semibold">Hey, {name}</p>
          <button
            className="bg-red-300 p-4 rounded-2xl font-bold"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      </div>

      {IsEvent ? (
        <div className="p-6 space-y-6">
          <Outlet />
          
          {/* Create New Event Section */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
            <CreateEventForm onSuccess={refetchEvents} />
          </div>

          {/* Optionally show all events list */}
          {/*
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">All Events</h2>
            <AdminEventList />
          </div>
          */}
        </div>
      ) : (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Members</h2>
          {/* Add member list or form here */}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
