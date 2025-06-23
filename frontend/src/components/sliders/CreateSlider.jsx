import React, { useState } from "react";
import { useCreateSlider } from "../../hooks/sliders/useCreateSlider";

const CreateSlider = () => {
  const [form, setForm] = useState({ title: "", subtitle: "" });
  const [poster, setPoster] = useState(null);
  const { createSlider, loading, error } = useCreateSlider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("poster", poster);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const result = await createSlider(formData);
    if (result?.success) alert("Slider created successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        name="subtitle"
        placeholder="Subtitle"
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
    </form>
  );
};

export default CreateSlider;
