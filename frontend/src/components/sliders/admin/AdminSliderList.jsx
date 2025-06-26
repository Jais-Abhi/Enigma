import React, { useState } from "react";
import { useNavigate } from "react-router";
import useGetAllSliders from "../../../hooks/sliders/useGetAllSliders";
import { useUpdateOrDeleteSlider } from "../../../hooks/sliders/useUpdateOrDeleteSlider";

const AdminSliderList = () => {
  const { sliders, loading, refetchSliders } = useGetAllSliders();
  const { deleteEvent } = useUpdateOrDeleteSlider();
  const navigate = useNavigate();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this Sliders?");
    if (!confirm) return;

    try {
      await deleteSlider(id);
      setSuccessMsg("Slider deleted successfully!");
      setErrorMsg("");
      refetchSliders();
    } catch (err) {
      setErrorMsg(err.message || `Failed to delete slider.`);
      setSuccessMsg("");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit-event/${id}`);
  };

  if (loading) return <p>Loading sliders...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Sliders</h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sliders.map((slider) => (
          <div
            key={slider._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={slider.poster}
              alt="Slider poster"
              className="w-full h-40 object-cover rounded mb-3"
            />

            <h3 className="text-lg font-semibold mb-1">Title: {slider.title}</h3>
            <p><strong>Subtitle:</strong> {slider.subtitle}</p>
            <p><strong>Created By:</strong> {event.createdBy?.name || "Unknown"}</p>

            <div className="mt-auto flex gap-4 pt-4">
              <button
                onClick={() => handleEdit(slider._id)}
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(slider._id)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
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

export default AdminSliderList;
