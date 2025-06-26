import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

export const useGetSliderById = (id) => {
  const [slider, setSlider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchSlider = async () => {
      try {
        const res = await axiosInstance.get(`/${id}`);
        setSlider(res.data.slider);
      } catch (err) {
        console.error("Error fetching slider:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSlider();
  }, [id]);

  return { slider, loading };
};
