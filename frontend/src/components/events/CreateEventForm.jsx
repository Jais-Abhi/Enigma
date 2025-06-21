import React, { useState } from "react";
import { useCreateEvent } from "../../hooks/events/useCreateEvent";

const CreateEventForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    community: "",
    venue: "",
    eventDateTime: "",
    organizerName: "",
  });
  const [poster, setPoster] = useState(null);
  const [result, setResult] = useState(null);
  const { createEvent, loading, error } = useCreateEvent();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setPoster(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (poster) formData.append("poster", poster);

    const result = await createEvent(formData);
    if (result) setResult(result);
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white shadow-lg p-8 rounded-xl border-2 border-black-400"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Create New Event
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Title", name: "title", type: "text", placeholder: "Event Title" },
          { label: "Description", name: "description", type: "textarea", placeholder: "Event Description" },
          { label: "Community", name: "community", type: "text", placeholder: "Community" },
          { label: "Venue", name: "venue", type: "text", placeholder: "Venue" },
          { label: "Date & Time", name: "eventDateTime", type: "datetime-local" },
          { label: "Organizer Name", name: "organizerName", type: "text", placeholder: "Organizer" },
        ].map((field, i) => (
          <div key={i}>
            <label className="block mb-1 text-sm font-semibold text-gray-700">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black-400"
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black-400"
              />
            )}
          </div>
        ))}

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Event Poster</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-2 py-2 border-2 border-gray-400 rounded-md bg-white"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {result?.success && (
          <p className="text-green-600 text-sm mt-3">{result.message}</p>
        )}
      </div>
    </form>
  );
};

export default CreateEventForm;
