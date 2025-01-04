import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/movieDb";
import apikey from "../apiKey.json";

function TrailerModal({ mediaType, mediaId, onClose }) {
  const [videoId, setVideoId] = useState(null);
  const API_KEY = apikey.MoviesDB_API_KEY;

  const getVideoTrailer = async () => {
    return axiosInstance.get(`/${mediaType}/${mediaId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
  };

  useEffect(() => {
    async function fetchTrailer() {
      const videoData = await getVideoTrailer();
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
