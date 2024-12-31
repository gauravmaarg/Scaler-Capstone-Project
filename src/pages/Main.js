import React from "react";

import VideoSlider from "../components/VideoSlider";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Banner />
      <VideoSlider
        mediaType="tv"
        title="NETFLIX ORIGINALS"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
      <VideoSlider title="Trending Now" path="/trending/all/week" />
      <VideoSlider
        mediaType="movie"
        title="Top Rated"
        path="/movie/top_rated"
      />
      <VideoSlider
        mediaType="movie"
        title="Action Movies"
        path="/discover/movie"
        params={{ with_genre: 28 }}
      />
      <Footer />
    </div>
  );
}

export default HomeScreen;
