import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Result } from "../../types";
import { searchMovies } from "../../services";
import "../../styles/MoviesSearch.css";
import { CardFilm } from "../CardFilm";

export const MoviesSearch = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const { search } = useParams();

  useEffect(() => {
    (async () => {
      const data = await searchMovies(search);
      const results = await data.results;
      setMovies(results);
    })();
  }, [search]);

  return (
    <main className="container-searched">
      <h3>Resultados de búsqueda {search}</h3>
      <div className="grid-content">
        {movies.map((movie) => (
          <CardFilm key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};
