import React, { useState } from "react";
import classNames from "classnames";
import { VideoModal } from "./VideoModal";
import { generateImageUrl, ImageSizes } from "../utils/movieDb";

export const MediaCard = ({ media, mediaType, isLarge }) => {
  const [isTrailerOpen, setTrailerOpen] = useState(false);

  return (
    <>
      <div
        key={media.id}
        className="media-card"
        onClick={() => setTrailerOpen(true)}
      >
        <img
          className={classNames("media-card_poster", {
            "media-card_poster--large": isLarge,
          })}
          src={
            isLarge
              ? generateImageUrl(media.poster_path, ImageSizes.poster)
              : generateImageUrl(media.backdrop_path, ImageSizes.card)
          }
          alt={media.original_title}
        />
        <div className="media-card_cover">
          <div className="media-card_name">
            {media.title || media.name || media.original_name}
          </div>
          <div className="media-card_description">{media.overview}</div>
        </div>
      </div>
      {isTrailerOpen && (
        <VideoModal
          mediaType={mediaType}
          mediaId={media.id}
          media={media}
          onClose={() => setTrailerOpen(false)}
        />
      )}
    </>
  );
};
