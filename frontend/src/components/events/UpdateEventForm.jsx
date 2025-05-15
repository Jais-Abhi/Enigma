import React, { useState, useEffect } from "react";
import { useGetEventById } from "../hooks/useGetEventById";
import { useUpdateOrDeleteEvent } from "../hooks/useUpdateOrDeleteEvent";
import { useParams } from "react-router-dom";

const UpdateEventForm = () => {
  const { id } = useParams(); 
  const { event, loading: loadingEvent } = useGetEventById(id);
  const { updateEvent, loading } = useUpdateOrDeleteEvent();

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
  };

  if (loadingEvent) return <p>Loading event...</p>;

  return (
    <form onSubmit={handleUpdate}>
      <input name="title" value={form.title} onChange={handleChange} required />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="community"
        value={form.community}
        onChange={handleChange}
        required
      />
      <input name="venue" value={form.venue} onChange={handleChange} required />
      <input
        name="eventDateTime"
        type="datetime-local"
        value={form.eventDateTime?.slice(0, 16)}
        onChange={handleChange}
        required
      />
      <input
        name="organizerName"
        value={form.organizerName}
        onChange={handleChange}
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit" disabled={loading}>
        {loading ? "Updating..." : "Update Event"}
      </button>
    </form>
  );
};

export default UpdateEventForm;
