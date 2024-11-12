import axios from "axios";

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

export { externalApi, defaultApi };
