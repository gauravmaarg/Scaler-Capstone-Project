import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { axiosInstance } from "../api/movieDb";
import apikey from "../apiKey.json";

function VideoSlider({ mediaType, title, path, params = {}, isLarge }) {
  const [items, setItems] = useState([]);
  const API_KEY = apikey.MoviesDB_API_KEY;

  const getVideoData = async () => {
    return axiosInstance.get(path, {
      params: {
        api_key: API_KEY,
        with_networks: 213,
      },
    });
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoData = await getVideoData();
      setItems(videoData.data.results);
    };
    fetchVideoData();
  }, []);

  return (
    <div className="video-slider">
      <h3 className="video-slider__title">{title}</h3>
      <div className="video-slider__cards">
        {items &&
          items.map((media) => (
            <MediaCard
              isLarge={isLarge}
              key={media.id}
              media={media}
              mediaType={media.media_type || mediaType}
            />
          ))}
      </div>
    </div>
  );
}

export default VideoSlider;
