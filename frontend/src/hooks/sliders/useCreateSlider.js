// src/hooks/sliders/useCreateSlider.js

import { useState } from "react";
import axiosInstance from "./axiosInstance"; // ✅ path ध्यान से

export const useCreateSlider = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSlider = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post("/slider", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (err) {
      console.error("Create slider error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Error creating slider");
    } finally {
      setLoading(false);
    }
  };

  return { createSlider, loading, error };
};
