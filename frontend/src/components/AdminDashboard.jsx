import React, { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Event from "./Event";
const AdminDashboard = () => {
  const [IsEvent, setIsEvent] = useState(true);
  const user = useSelector((store) => store.user);
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
          <p className="text-4xl text-center p-4">Hey, {user.name}</p>
        </div>
      </div>
      {IsEvent ? (
        <Event />
      ) : (
        <>
          <div>Members</div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
