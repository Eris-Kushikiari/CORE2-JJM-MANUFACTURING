import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`
      : "https://core-2-jjm-manufacturing.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;
