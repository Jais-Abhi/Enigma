import React, { useState, useEffect } from "react";
import { useGetEventById } from "../../hooks/events/useGetEventById";
import { useUpdateOrDeleteEvent } from "../../hooks/events/useUpdateOrDeleteEvent";
import { useNavigate, useParams } from "react-router";

const UpdateEventForm = () => {
  const { id } = useParams();
  const { event, loading: loadingEvent } = useGetEventById(id);
  const { updateEvent, loading } = useUpdateOrDeleteEvent();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    community: "",
    venue: "",
    eventDateTime: "",
    organizerName: "",
  });
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    if (event) {
      setForm({
        title: event.title,
        description: event.description,
        community: event.community,
        venue: event.venue,
        eventDateTime: event.eventDateTime,
        organizerName: event.organizerName,
      });
    }
  }, [event]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setPoster(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (poster) formData.append("poster", poster);

    const result = await updateEvent(id, formData);
    console.log("Update Result:", result);
    navigate("/admin/dashboard");
  };

  if (loadingEvent) return <p className="text-center mt-10 text-lg">Loading event...</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 border border-black shadow-lg shadow-black rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Update Event</h1>
      <form onSubmit={handleUpdate} className="flex flex-wrap gap-6">
        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Enter title"
          />
        </div>

        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Community</label>
          <input
            name="community"
            value={form.community}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Enter community"
          />
        </div>

        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Venue</label>
          <input
            name="venue"
            value={form.venue}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Enter venue"
          />
        </div>

        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Date & Time</label>
          <input
            name="eventDateTime"
            type="datetime-local"
            value={form.eventDateTime?.slice(0, 16)}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Organizer</label>
          <input
            name="organizerName"
            value={form.organizerName}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Organizer name"
          />
        </div>

        <div className="w-full md:w-[32%]">
          <label className="block font-medium text-gray-800">Poster Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-1"
          />
        </div>

        <div className="w-full">
          <label className="block font-medium text-gray-800">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            maxLength={150}
            rows={4}
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Enter description"
          />
        </div>

        <div className="w-full mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            {loading ? "Updating..." : "Update Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEventForm;
