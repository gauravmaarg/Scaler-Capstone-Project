import React, { useState, useEffect } from "react";
import { generateImageUrl, ImageSizes } from "../utils/movieDb";
import movieDb from "../api/movieDb";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchBannerMovie = async () => {
      const json = await movieDb.get(
        "https:/api.themoviedb.org/3/discover/tv?api_key=f5aa27e0c3a00d3316fea9e17baf5ae7&with_networks=213",
        { with_networks: 213 }
      );
      setMovie(
        json.results[Math.floor(Math.random() * json.results.length - 1)]
      );
    };
    fetchBannerMovie();
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
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__cover" />
    </div>
  );
}

export default Banner;
