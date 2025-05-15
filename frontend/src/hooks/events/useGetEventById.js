import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

export const useGetEventById = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        const res = await axiosInstance.get(`/${id}`);
        setEvent(res.data.event);
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  return { event, loading };
};
