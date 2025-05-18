import React, { useState } from "react";
import { useNavigate } from "react-router";
import useGetAllEvents from "../../../hooks/events/useGetAllEvents";
import { useUpdateOrDeleteEvent } from "../../../hooks/events/useUpdateOrDeleteEvent";

const AdminEventList = () => {
  const { events, loading, refetchEvents } = useGetAllEvents();
  const { deleteEvent } = useUpdateOrDeleteEvent();
  const navigate = useNavigate();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirm) return;

    try {
      await deleteEvent(id);
      setSuccessMsg("Event deleted successfully!");
      setErrorMsg("");
      refetchEvents();
    } catch (err) {
      setErrorMsg(err.message || `Failed to delete event.`);
      setSuccessMsg("");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-event/${id}`);
  };

  if (loading) return <p>Loading events...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Events</h2>

      {successMsg && (
        <p className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          {successMsg}
        </p>
      )}
      {errorMsg && (
        <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
          {errorMsg}
        </p>
      )}

      {events.map((event) => (
        <div key={event._id} className="border p-4 rounded-lg mb-4 shadow">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <p>
            <strong>Community:</strong> {event.community}
          </p>
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
          <p>
            <strong>Date & Time:</strong>{" "}
            {new Date(event.eventDateTime).toLocaleString()}
          </p>
          <p>
            <strong>Organizer:</strong> {event.organizerName}
          </p>
          <p>
            <strong>Created By:</strong> {event.createdBy?.name || "Unknown"}
          </p>
          <img
            src={event.poster}
            alt="Event poster"
            className="w-48 h-auto mt-2 rounded"
          />

          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleEdit(event._id)}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(event._id)}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEventList;
