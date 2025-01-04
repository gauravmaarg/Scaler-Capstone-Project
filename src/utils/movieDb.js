import { axiosInstance } from "../api/apiConfig";
import apikey from "../apiKey.json";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const API_KEY = apikey.MoviesDB_API_KEY;

export const ImageSizes = {
  poster: "w500",
  card: "w300",
  backdrop: "w1280",
};

export function generateImageUrl(imagePath, size) {
  return `${IMAGE_BASE_URL}/${size}/${imagePath}`
    .replace(/\/+/g, "/")
    .replace(":/", "://");
}

export function filterPreferredResults(results) {
  return results.filter((o) => ["movie", "tv"].includes(o.media_type));
}
export const getBannerData = async (path) => {
  return axiosInstance.get(path, {
    params: {
      api_key: API_KEY,
      with_networks: 213,
    },
  });
};

export const getVideoData = async (path) => {
  return axiosInstance.get(path, {
    params: {
      api_key: API_KEY,
      with_networks: 213,
    },
  });
};

export const getVideoTrailer = async (mediaType, mediaId) => {
  return axiosInstance.get(`/${mediaType}/${mediaId}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });
};
