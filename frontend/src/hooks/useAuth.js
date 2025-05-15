import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/constant";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get(`${BaseUrl}auth/check-auth`, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  return isAuthenticated;
};

export default useAuth;
