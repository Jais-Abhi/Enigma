import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useCreateSlider = () => {
  const createSlider = async (formData) => {
    try {
      const res = await axios.post(`${BaseUrl}slider/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Create slider error:", error);
      throw error;
    }
  };

  return { createSlider };
};
