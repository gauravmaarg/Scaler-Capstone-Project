import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import moviesApi from "../api/movieDb";

function VideoSlider({ mediaType, title, path, params = {}, isLarge }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      moviesApi
        .get(path, params)
        .then((data) => {
          setItems(data.results);
        })
        .catch((err) => console.error("Error:", err));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
