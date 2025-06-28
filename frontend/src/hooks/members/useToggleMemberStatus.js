import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useToggleMemberStatus = () => {
  const [loading, setLoading] = useState(false);

  const toggleStatus = async (id) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BaseUrl}member/toggle-status/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      console.error("Toggle member status error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { toggleStatus, loading };
};
