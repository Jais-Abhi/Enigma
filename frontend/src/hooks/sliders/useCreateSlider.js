import { useState } from "react";
import axiosInstance from "./axiosInstance";

export const useCreateSlider = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSlider = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post("/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    } catch (err) {
      console.error("Create event error:", err.response || err.message);
      setError(err.response?.data?.message || "Error creating event");
    } finally {
      setLoading(false);
    }
  };

  

  return { createSlider, loading, error };
};