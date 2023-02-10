import { instance } from "../api";
import { PopularMovies } from "../types";

const API_KEY = "b5ef548f8871b0bc494c1a64ce6a22ef";
const page = 1

// Search top rated movies
export const getPopularMovies = async (route: string = "popular"): Promise<PopularMovies> => {
  try {
    const response = await instance.get(`/${route}?api_key=${API_KEY}&language=es&page=${page}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Error get popular movies");
  }
};

// Search a movie with a keyword 
export const searchMovies = async (query: string | undefined): Promise<PopularMovies> => {
  try {
    const response = await instance.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${!!query ? query : "matrix"}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Error search movies");
  }
}

// Get movie by id 
export const getMovieBydId = async (id: number) => {
  try {
    const response = await instance.get(`${id}?api_key=${API_KEY}`);
    const result = response.data;
    return result;
  } catch (error) {
    throw new Error("Error search movies by id");
  }
}

// Search top rated movies
export const getTopRatedMovies = async () => {
  try {
    const response = await instance.get(`/top_rated?api_key=${API_KEY}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Error search movies");
  }
}

// Discover random movies
export const getDiscoverFilms = async () => {
  try {
    const response = await instance.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-12-31`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error("Error search movies");
  }
}
