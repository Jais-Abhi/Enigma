import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllSliders = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSliders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sliders"); // ✅ Correct endpoint
      setSliders(res.data);
    } catch (error) {
      console.error("Slider fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  return { sliders, loading };
};

export default useGetAllSliders;
