import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getDiscoverFilms } from "../../services";
import { CardFilm } from "../../components/CardFilm"
import { Result } from "../../types"
import "../../styles/MoviesSearch.css";

export const Films = () => {
  const [ movies, setMovies ] = useState<Result[]>([])
  const { search } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getDiscoverFilms();
      const results = await data.results
      console.log("results", results);
      setMovies(results);
    })();
  }, [search]);

  return (
    <main className="container-searched">
      <h3>Resultados de búsqueda {search}</h3>
      <div className="grid-content">
        {movies.map(movie => (
          <CardFilm key={movie.id} movie={movie}/>
        ))}
      </div>
    </main>
  );
};