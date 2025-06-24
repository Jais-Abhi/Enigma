import axios from "axios";
import { BaseUrl } from "../../utils/constant";

const axiosInstance = axios.create({
  baseURL: `${BaseUrl}slider/`,
  withCredentials: true,
});

export default axiosInstance;