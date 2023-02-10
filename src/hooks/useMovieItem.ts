import { useQuery } from "@tanstack/react-query";
import { getMovieBydId } from "../services";

// Get and cache movies save
export const useMovieItem = (movieId: number) => {
  const movieItem = useQuery({
    queryKey: ["MOVIE_ITEM", movieId],
    queryFn: () => getMovieBydId(movieId),
  });

  return {
    movieItem: movieItem.data,
  };
};
