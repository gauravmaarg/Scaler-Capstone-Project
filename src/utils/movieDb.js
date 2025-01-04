import { axiosInstance } from "../api/movieDb";
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
export const getBannerData = async () => {
  return axiosInstance.get(`/discover/tv`, {
    params: {
      api_key: API_KEY,
      with_networks: 213,
    },
  });
};
