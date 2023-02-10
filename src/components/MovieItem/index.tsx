import { StarRateRounded, ThumbUpAltRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";

import { useMovieItem } from "../../hooks/useMovieItem";
import "../../styles/MovieView.css";

export const MovieItem = () => {
  const { id } = useParams();
  const { movieItem } = useMovieItem(Number(id));

  const categories = movieItem.genres.map((item: any) => item.name);

  return (
    <main className="container-view">
      <h3>Resultados de {movieItem.title}</h3>
      <div className="content-view">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
          alt=""
        />
        <div className="movie-info">
          <h3>{movieItem.title}</h3>
          <span>{movieItem.tagline}</span>
          <div className="categories">
            {categories?.map((category: string) => (
              <span>{category}</span>
            ))}
          </div>
          <div className="overview">
            <h4>Overview</h4>
            <span>{movieItem.overview}</span>
          </div>

          <div>
            <span>
              <IconButton color="warning">
                <StarRateRounded />
              </IconButton>
              {movieItem.vote_average}
            </span>

            <span>
              <IconButton color="default" style={{ margin: 0 }}>
                <ThumbUpAltRounded
                  sx={{ width: "15px", padding: 0, margin: 0 }}
                />
              </IconButton>
              {movieItem.vote_count}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
