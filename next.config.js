module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:
          "https://api.themoviedb.org/3/discover/tv?api_key=YOUR_API_KEY",
      },
    ];
  },
};
