import axios from "axios";

export const brewerApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
