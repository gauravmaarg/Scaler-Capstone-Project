import React, { useEffect, useState } from "react";
import { getVideoTrailer } from "../utils/movieDb";

function TrailerModal({ mediaType, mediaId, onClose }) {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    async function fetchTrailer() {
      const videoData = await getVideoTrailer(mediaType, mediaId);
      const video = videoData.data.results.find((o) => o.site === "YouTube");
      setVideoId(video?.key);
    }
    fetchTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaId, mediaType]);

  return (
    <>
      <div className="trailer-modal-backdrop" onClick={onClose} />
      <div className="trailer-modal">
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
        <button className="trailer-modal__close" onClick={onClose}>
          ✕
        </button>
      </div>
    </>
  );
}

export default TrailerModal;
