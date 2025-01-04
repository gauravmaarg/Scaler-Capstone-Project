import Api from "../utils/api";
import apikey from "../apiKey.json";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const API_KEY = apikey.MoviesDB_API_KEY;

console.log(API_BASE);

const moviesApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

console.log(moviesApi);
console.log("API Base URL:", process.env.REACT_APP_API_BASE_URL);
export default moviesApi;
