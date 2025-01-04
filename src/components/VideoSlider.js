import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import { getVideoData } from "../utils/movieDb";

function VideoSlider({ mediaType, title, path, isLarge }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoData = await getVideoData(path);
      setItems(videoData.data.results);
    };
    fetchVideoData();
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
