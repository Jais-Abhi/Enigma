

import axios from "axios";
import { BaseUrl } from "../../utils/constant"; // ✅ FIXED

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
});

export default axiosInstance;
