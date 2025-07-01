import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../utils/constant";

export const useGetAllSliders = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await axios.get(`${BaseUrl}slider/`);
        setSliders(res.data.sliders);
      } catch (error) {
        console.error("Fetch sliders error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSliders();
  }, []);

  return { sliders, loading };
};
