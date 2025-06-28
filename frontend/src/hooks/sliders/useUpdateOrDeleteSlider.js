import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useUpdateOrDeleteSlider = () => {
  const updateSlider = async (id, formData) => {
    try {
      const res = await axios.put(`${BaseUrl}slider/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Update slider error:", error);
      throw error;
    }
  };

  const deleteSlider = async (id) => {
    try {
      const res = await axios.delete(`${BaseUrl}slider/${id}`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error("Delete slider error:", error);
      throw error;
    }
  };

  return { updateSlider, deleteSlider };
};
