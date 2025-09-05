import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? `${import.meta.env.VITE_SOCKET_SERVER}`
      : "https://backend-core2.jjm-manufacturing.com/api",
  withCredentials: true,
});

export default axiosInstance;
