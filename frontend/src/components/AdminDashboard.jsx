import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateEventForm from "./events/CreateEventForm";
import CreateSlider from "./sliders/CreateSlider";
import useGetAllEvents from "../hooks/events/useGetAllEvents";
import useGetAllSlider from "../hooks/sliders/useGetAllSliders";
import Slider from "./Slider"; // this should display all sliders
import useLogout from "../hooks/useLogout";

const AdminDashboard = () => {
  const [tab, setTab] = useState("events"); // "events" | "sliders" | "members"
  const user = useSelector((store) => store.user);
  const name = user?.name?.split(" ")[0] || "Admin";

  const { refetchEvents } = useGetAllEvents();
  const { refetchSliders } = useGetAllSlider();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  const buttonClass = (value) =>
    `p-4 rounded-xl ${
      tab === value ? "bg-green-500 text-white" : "bg-green-300"
    }`;

  return (
    <div>
      {/* Top Bar */}
      <div className="mt-20 bg-gray-300">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl flex gap-5">
            <button onClick={() => setTab("events")} className={buttonClass("events")}>
              All Events
            </button>
            <button onClick={() => setTab("sliders")} className={buttonClass("sliders")}>
              All Sliders
            </button>
            <button onClick={() => setTab("members")} className={buttonClass("members")}>
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

      {/* Main Section */}
      <div className="p-6 space-y-6">
        {tab === "events" && (
          <>
            <Outlet />
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
              <CreateEventForm onSuccess={refetchEvents} />
            </div>
          </>
        )}

        {tab === "sliders" && (
          <>
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">All Sliders</h2>
              <Slider />
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Create New Slider</h2>
              <CreateSlider onSuccess={refetchSliders} />
            </div>
          </>
        )}

        {tab === "members" && (
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Members</h2>
            {/* Member list/form here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
