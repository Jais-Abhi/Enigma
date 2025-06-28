import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useUpdateOrDeleteMember = () => {
  const [loading, setLoading] = useState(false);

  const updateMember = async (id, updatedData) => {
    setLoading(true);
    try {
      const res = await axios.put(`${BaseUrl}member/${id}`, updatedData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Update member error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteMember = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${BaseUrl}member/${id}`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Delete member error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateMember, deleteMember, loading };
};
