import { useState } from "react";
import axiosInstance from "../axiosInstance";

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

  const deleteEvent = async (id) => {
    try {
      setLoading(true);
      const res = await axiosInstance.delete(`/${id}`);
      return res.data;
    } catch (err) {
      throw err.response?.data?.message || "Failed to delete event";
    } finally {
      setLoading(false);
    }
  };

  return { updateEvent, deleteEvent, loading };
};
