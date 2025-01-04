import React, { useState, useEffect } from "react";
import { generateImageUrl, ImageSizes, getBannerData } from "../utils/movieDb";
// import { axiosInstance } from "../api/movieDb";
// import apikey from "../apiKey.json";

function Banner() {
  const [movie, setMovie] = useState({});
  // const API_KEY = apikey.MoviesDB_API_KEY;

  // const getBannerData = async () => {
  //   return axiosInstance.get(`/discover/tv`, {
  //     params: {
  //       api_key: API_KEY,
  //       with_networks: 213,
  //     },
  //   });
  // };
  useEffect(() => {
    const fetchBannerMovie = async () => {
      const videoData = await getBannerData();
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
