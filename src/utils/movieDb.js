import path from "path-browserify";

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
  if (!IMAGE_BASE_URL) {
    throw new Error(
      "IMAGE_BASE_URL is not defined in the environment variables."
    );
  }

  if (imagePath && !imagePath) {
    console.warn(
      "Image path is undefined or empty. Returning a placeholder URL."
    );
    return `${IMAGE_BASE_URL}/${size}/placeholder.jpg`; // Optional: Replace with your own placeholder image URL.
  }

  // Safely construct the URL
  return `${IMAGE_BASE_URL}/${size}/${imagePath}`.replace(/\/+/g, "/"); // Normalize slashes
}

export function filterPreferredResults(results) {
  return results.filter((o) => ["movie", "tv"].includes(o.media_type));
}
