import { useState } from "react";
import axiosInstance from "./axiosInstance";

export const useUpdateOrDeleteEvent = () => {
  const [loading, setLoading] = useState(false);

  const updateEvent = async (id, formData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.put(`/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      throw err.response?.data?.message || "Failed to update event";
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const res = await axiosInstance.delete(`/${eventId}`);
      return res.data;
    } catch (err) {
      console.error("Delete event failed:", err);
      throw err;
    }
  };

  return { updateEvent, deleteEvent, loading };
};

