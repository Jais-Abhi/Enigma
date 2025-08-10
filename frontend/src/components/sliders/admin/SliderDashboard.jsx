import React, { useState, useEffect } from "react";
import { useCreateSlider } from "../../../hooks/sliders/useCreateSlider";
import { useGetAllSliders } from "../../../hooks/sliders/useGetAllSliders";
import { useUpdateOrDeleteSlider } from "../../../hooks/sliders/useUpdateOrDeleteSlider";

const SliderDashboard = () => {
  const { sliders: fetchedSliders, loading } = useGetAllSliders();
  const { createSlider } = useCreateSlider();
  const { updateSlider, deleteSlider } = useUpdateOrDeleteSlider();

  const [sliders, setSliders] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: null,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setSliders(fetchedSliders);
  }, [fetchedSliders]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("image", formData.image);

    try {
      if (isUpdating) {
        const updated = await updateSlider(selectedId, data);
        setSliders((prev) =>
          prev.map((slider) =>
            slider._id === selectedId
              ? { ...slider, ...updated.slider }
              : slider
          )
        );
        setIsUpdating(false);
      } else {
        const newSlider = await createSlider(data);
        setSliders((prev) => [...prev, newSlider.slider]);
      }

      // Clear form after submit
      setFormData({ title: "", subtitle: "", image: null });
      setSelectedId(null);
    } catch (error) {
      console.error("Error saving slider:", error);
    }
  };

  const handleEdit = (slider) => {
    setFormData({
      title: slider.title,
      subtitle: slider.subtitle,
      image: null,
    });
    setIsUpdating(true);
    setSelectedId(slider._id);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this slider?")) {
      try {
        await deleteSlider(id);
        setSliders((prev) => prev.filter((slider) => slider._id !== id));
      } catch (error) {
        console.error("Error deleting slider:", error);
      }
    }
  };

  if (loading) return <p>Loading sliders...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col w-full justify-center items-center " >
      <form onSubmit={handleSubmit} className="mb-6 border p-4">
        <h2 className="text-2xl font-bold mb-4">Slider Management</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="block mb-2 p-3 w-full border"
          required
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="block mb-2 p-3 w-full border"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="block mb-2 p-3 w-full border"
          accept="image/*"
          required={!isUpdating}
        />
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 text-white rounded"
        >
          {isUpdating ? "Update" : "Add"} Slider
        </button>
      </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sliders.map((slider) => (
          <div key={slider._id} className="p-4 border rounded shadow">
            <img
              src={slider.image}
              alt={slider.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-xl font-bold">{slider.title}</h3>
            <p>{slider.subtitle}</p>
            <div className="mt-2">
              <button
                onClick={() => handleEdit(slider)}
                className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(slider._id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderDashboard;
