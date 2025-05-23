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
    <form onSubmit={handleSubmit} className="border-black">
      <input
        name="title"
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="community"
        onChange={handleChange}
        placeholder="Community"
        required
      />
      <input
        name="venue"
        onChange={handleChange}
        placeholder="Venue"
        required
      />
      <input
        name="eventDateTime"
        type="datetime-local"
        onChange={handleChange}
        required
      />
      <input
        name="organizerName"
        onChange={handleChange}
        placeholder="Organizer Name"
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Event"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result?.success ? (
        <p style={{ color: "green" }}>{result?.message}</p>
      ) : null}
    </form>
  );
};

export default CreateEventForm;
