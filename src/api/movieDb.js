import Api from "utils/api";
import apikey from "apiKey.json";

const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = apikey.MoviesDB_API_KEYs;

const moviesApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default moviesApi;
