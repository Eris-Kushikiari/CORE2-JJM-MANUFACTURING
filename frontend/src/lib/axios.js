import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:7684/api"
      : "https://core-2-jjm-manufacturing.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;
