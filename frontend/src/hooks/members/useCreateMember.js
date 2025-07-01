import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useCreateMember = () => {
  const [loading, setLoading] = useState(false);

  const createMember = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}member/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Create member error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createMember, loading };
};
