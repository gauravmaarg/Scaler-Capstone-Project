import React from "react";
import { Slider, Banner, Header, Footer } from "../components";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo-full.png";

export const Main = () => {
  return (
    <div>
      <Header logo={logo} avatar={avatar} username="Kumar Gaurav" />
      <Banner />
      <Slider
        mediaType="tv"
        title="NETFLIX ORIGINALS"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
      <Slider title="Trending Now" path="/trending/all/week" />
      <Slider mediaType="movie" title="Top Rated" path="/movie/top_rated" />
      <Slider
        mediaType="movie"
        title="Action Movies"
        path="/discover/movie"
        params={{ with_genre: 28 }}
      />
      <Footer />
    </div>
  );
};
