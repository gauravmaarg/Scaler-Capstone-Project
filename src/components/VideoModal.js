import React, { useEffect, useState } from "react";
import { getVideoTrailer } from "../utils/movieDb";

export const VideoModal = ({ mediaType, mediaId, onClose }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      const videoData = await getVideoTrailer(mediaType, mediaId);
      const video = videoData.data.results.find((o) => o.site === "YouTube");
      setVideoId(video?.key);
    }
    fetchVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaId, mediaType]);

  return (
    <>
      <div className="video-modal-backdrop" onClick={onClose} />
      <div className="video-modal">
        {videoId && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <button className="video-modal_close" onClick={onClose}>
          ✕
        </button>
      </div>
    </>
  );
};
