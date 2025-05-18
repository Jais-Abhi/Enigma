import React, { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
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
        <div className="flex justify-between">
          <div className="text-4xl flex justify-center gap-5">
            <button
              onClick={() => {
                setIsEvent(true);
              }}
              className="bg-green-300 p-4 rounded-4xl "
            >
              Events
            </button>
            <button
              onClick={() => {
                setIsEvent(false);
              }}
              className="bg-green-300 p-4 rounded-4xl"
            >
              Members
            </button>
          </div>
          <button
            className="bg-red-300 p-4 rounded-2xl font-bold"
            onClick={handleLogout}
          >
            LogOut
          </button>
          <p className="text-4xl text-center p-4">Hey, {name}</p>
        </div>
      </div>
      {IsEvent ? (
        // <Event />
        <div>
          <Outlet />
          <div className="mb-8 bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
            <CreateEventForm onSuccess={refetchEvents} />
          </div>

          {/* <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">All Events</h2>
            <AdminEventList />
          </div> */}
        </div>
      ) : (
        <>
          <div>Members</div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
