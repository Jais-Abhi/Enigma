import { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

const useGetAllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/");
      setEvents(res.data.events);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, loading, refetchEvents: fetchEvents };
};

export default useGetAllEvents;
