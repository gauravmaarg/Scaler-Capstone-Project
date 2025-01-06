import React, { useState, useEffect } from "react";
import { MediaCard } from "./MediaCard";
import { getVideoData } from "../utils/movieDb";

export const Slider = ({ mediaType, title, path, isLarge }) => {
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
    <div className="slider">
      <h3 className="slider_title">{title}</h3>
      <div className="slider_cards">
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
};
