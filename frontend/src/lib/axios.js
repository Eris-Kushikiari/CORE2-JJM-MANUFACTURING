import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SOCKET_SERVER,
  withCredentials: true,
});

export default axiosInstance;
