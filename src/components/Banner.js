import React, { useState, useEffect } from "react";
import { generateImageUrl, ImageSizes, getBannerData } from "../utils/movieDb";

export const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchBannerMovie = async () => {
      const videoData = await getBannerData(`/discover/tv`);
      setMovie(
        videoData.data.results[
          Math.floor(Math.random() * videoData.data.results.length - 1)
        ]
      );
    };
    fetchBannerMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${generateImageUrl(
          movie?.backdrop_path || "",
          ImageSizes.backdrop
        )})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner_cover" />
    </div>
  );
};
