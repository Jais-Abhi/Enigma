import { useState } from "react";
import axiosInstance from "./axiosInstance";

export const useUpdateOrDeleteSlider = () => {
  const [loading, setLoading] = useState(false);

  const updateSlider = async (id, formData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.put(`/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      throw err.response?.data?.message || "Failed to update slider";
    } finally {
      setLoading(false);
    }
  };

  const deleteSlider = async (sliderId) => {
    try {
      const res = await axiosInstance.delete(`/${sliderId}`);
      return res.data;
    } catch (err) {
      console.error("Delete event failed:", err);
      throw err;
    }
  };

  return { updateSlider, deleteSlider, loading };
};

