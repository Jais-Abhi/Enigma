import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CreateEventForm from "./events/CreateEventForm";
import useGetAllEvents from "../hooks/events/useGetAllEvents";
import { useGetAllSliders } from "../hooks/sliders/useGetAllSliders";
import Slider from "./Slider";
import useLogout from "../hooks/useLogout";
import AdminMemberDashboard from "./members/admin/AdminMemberDashboard";
import { useGetAllMembers } from "../hooks/members/useGetAllMembers";
import SliderDashboard from "./sliders/admin/SliderDashboard";

const AdminDashboard = () => {
  const [tab, setTab] = useState("events");
  const user = useSelector((store) => store.user);
  const name = user?.name?.split(" ")[0] || "Admin";

  const { refetchEvents } = useGetAllEvents();
  const { refetchSliders } = useGetAllSliders();
  const { refetchMembers } = useGetAllMembers();

  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  const buttonClass = (value) =>
    `p-2 rounded-xl ${
      tab === value ? "bg-green-500 text-white" : "bg-green-300"
    }`;

  return (
    <div>
      <div className="bg-gray-300">
        <div className="flex justify-between items-center px-6 py-1">
          <div className="text-2xl flex gap-5">
            <button
              onClick={() => setTab("events")}
              className={buttonClass("events")}
            >
              All Events
            </button>
            <button
              onClick={() => setTab("sliders")}
              className={buttonClass("sliders")}
            >
              All Sliders
            </button>
            <button
              onClick={() => setTab("members")}
              className={buttonClass("members")}
            >
              Members
            </button>
          </div>
          <p className="text-4xl font-semibold">Hey, {name.charAt(0).toUpperCase() + name.slice(1)}</p>
          <button
            className="bg-red-300 p-4 rounded-2xl font-bold"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {tab === "events" && (
          <>
            
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
              <CreateEventForm onSuccess={refetchEvents} />
            </div>
            <Outlet />
          </>
        )}

        {tab === "sliders" && (
          <>
            {/* <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">All Sliders</h2>
              <Slider />
            </div> */}
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-2xl font-semibold">Create New Slider</p>
              <SliderDashboard onSuccess={refetchSliders} />
            </div>
          </>
        )}

        {tab === "members" && (
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Members</h2>
            <AdminMemberDashboard onSuccess={refetchMembers} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
