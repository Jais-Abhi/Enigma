// src/hooks/sliders/useCreateSlider.js
import { useState } from "react";
import axios from "axios";

export const useCreateSlider = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSlider = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/sliders", // ✅ correct endpoint
        formData,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (err) {
      console.error("Create slider error:", err.response?.data || err);
      setError(err.response?.data?.message || "Failed to create slider");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createSlider, loading, error };
};