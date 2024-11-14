import axios from "axios";
import { refrechIntercepter } from "@api/intercepters";

const externalApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const defaultApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const needAuthDefaultApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("poomasi_user") || "{}").token
      ? `Bearer ${JSON.parse(localStorage.getItem("poomasi_user") || "{}").token}`
      : undefined,
  },
});
needAuthDefaultApi.interceptors.response.use(refrechIntercepter);

export { externalApi, defaultApi, needAuthDefaultApi };
