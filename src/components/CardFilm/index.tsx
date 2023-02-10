import { FC } from "react";

import { StarRateRounded, ThumbUpAltRounded } from "@mui/icons-material";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

import { getMovieBydId } from "../../services";
import { Result } from "../../types";
import "../../styles/CardFilm.css";


interface Props {
  movie: Result;
}

export const CardFilm: FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const prefetchMovie = async (movieId: number) => {
    await queryClient.prefetchQuery({
      queryKey: ["MOVIE_ITEM", movieId],
      queryFn: () => getMovieBydId(movieId),
      cacheTime: 1000 * 150,
    });
  };

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    return navigate(`/movies/movie/${movie.id}`);
  };

  return (
    <a
      className="card-film"
      onClick={handleClick}
      onMouseEnter={() => prefetchMovie(movie.id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          movie.poster_path?.length > 0
            ? movie.poster_path
            : "https://image.tmdb.org/t/p/w500/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg"
        }`}
        alt="imagen"
      />
      <h4>{movie.title}</h4>
      <div>
        <span>
          <IconButton color="warning">
            <StarRateRounded />
          </IconButton>
          {movie.vote_average}
        </span>

        <span>
          <IconButton color="default" style={{ margin: 0 }}>
            <ThumbUpAltRounded sx={{ width: "15px", padding: 0, margin: 0 }} />
          </IconButton>
          {movie.vote_count}
        </span>
      </div>
    </a>
  );
};
