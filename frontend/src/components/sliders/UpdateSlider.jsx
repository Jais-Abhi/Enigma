import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSliderById } from "../../hooks/sliders/useGetSliderById";
import { useUpdateOrDeleteSlider } from "../../hooks/sliders/useUpdateOrDeleteSlider";

const UpdateSliderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { slider, loading: loadingSlider } = useGetSliderById(id);
  const { updateSlider, loading } = useUpdateOrDeleteSlider();

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
  });
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    if (slider) {
      setForm({
        title: slider.title,
        subtitle: slider.subtitle,
      });
    }
  }, [slider]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setPoster(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    if (poster) formData.append("poster", poster);

    const result = await updateSlider(id, formData);
    console.log("Update Result:", result);
    navigate("/admin/dashboard");
  };

  if (loadingSlider) return <p className="text-center mt-10 text-lg">Loading slider...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border border-gray-300 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">Update Slider</h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
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

        <div>
          <label className="block font-medium text-gray-800">Subtitle</label>
          <input
            name="subtitle"
            value={form.subtitle}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            placeholder="Enter subtitle"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-800">Poster Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-1"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            {loading ? "Updating..." : "Update Slider"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSliderForm;
