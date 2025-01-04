// import path from "path-browserify";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

export const ImageSizes = {
  poster: "w500",
  card: "w300",
  backdrop: "w1280",
};

// export function generateImageUrl(imagePath, size) {
//   return path.join(IMAGE_BASE_URL, size, imagePath);
// }

export function generateImageUrl(imagePath, size) {
  // return `${IMAGE_BASE_URL}/${size}/${imagePath}`.replace(/\/+/g, "/");
  return `${IMAGE_BASE_URL}/${size}/${imagePath}`
    .replace(/\/+/g, "/")
    .replace(":/", "://");
}

export function filterPreferredResults(results) {
  return results.filter((o) => ["movie", "tv"].includes(o.media_type));
}
