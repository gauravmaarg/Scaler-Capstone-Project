import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: API_BASE,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (loading) {
    return loading;
  },
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
