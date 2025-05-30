import axios from "axios";
import { BaseUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../slices/userSlice";
const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await axios.post(
        `${BaseUrl}auth/logout`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate("/admin/login");
        dispatch(removeUser())
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return logout;
};

export default useLogout;
