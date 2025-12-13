
import axios from "axios";

const API = axios.create({
  baseURL: "https://ideal-space-disco-jj4qpp7w69phpr5-5000.app.github.dev/api"
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
