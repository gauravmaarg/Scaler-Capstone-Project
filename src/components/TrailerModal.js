import React, { useEffect, useState } from "react";
import moviesApi from "../api/movieDb";

function TrailerModal({ mediaType, mediaId, onClose }) {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    async function fetchTrailer() {
      const json = await moviesApi.get(`/${mediaType}/${mediaId}/videos`);
      const video = json.results.find((o) => o.site === "YouTube");
      setVideoId(video?.key);
    }
    fetchTrailer();
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
