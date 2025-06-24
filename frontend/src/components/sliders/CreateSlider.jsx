// src/components/sliders/CreateSlider.jsx

import React, { useState } from "react";
import { useCreateSlider } from "../../hooks/sliders/useCreateSlider";

const CreateSlider = () => {
  const [form, setForm] = useState({ title: "", subtitle: "" });
  const [poster, setPoster] = useState(null);
  const [success, setSuccess] = useState(null);
  const { createSlider, loading, error } = useCreateSlider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("poster", poster);

    const result = await createSlider(formData);
    if (result?.success) {
      setSuccess("Slider created successfully!");
      setForm({ title: "", subtitle: "" });
      setPoster(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        required
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        name="subtitle"
        placeholder="Subtitle"
        value={form.subtitle}
        required
        onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        required
        onChange={(e) => setPoster(e.target.files[0])}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Slider"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default CreateSlider;
