import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`
      : "https://core2-jjm-manufacturing.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
