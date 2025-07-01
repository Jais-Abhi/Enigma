import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/constant";

export const useGetAllMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`${BaseUrl}member/`);
      setMembers(res.data.members);
    } catch (error) {
      console.error("Fetch members error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return { members, loading, refetchMembers: fetchMembers };
};
