import React, { FC, useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { Result } from "../../types";
import { CardFilm } from "../../components/CardFilm";
import { getPopularMovies } from "../../services";
import "../../styles/PopularMovies.css";

export const ListPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Result[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Result[]>([]);
  const [seletedItem, setSeletedItem] = useState<string>("popular");

  const handleSeletetedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSeletedItem(value);
  };

  useEffect(() => {
    (async () => {
      const movies = await getPopularMovies(seletedItem);
      const results = movies.results;
      setPopularMovies(results);
    })();
  }, [seletedItem]);

  useEffect(() => {
    (async () => {
      const movies = await getPopularMovies(seletedItem);
      const results = movies.results;
      setTopRatedMovies(results);
    })();
  }, []);

  return (
    <Grid container direction="row" justifyContent="space-between">
      <section>
        <div className="nav-select-items">
          <h2>Populares</h2>
          <select
            name="serching"
            id="elections"
            onChange={handleSeletetedChange}
          >
            <option value="popular">Populares</option>
            <option value="top_rated">Top films</option>
          </select>
        </div>
        <div className="container-films">
          {popularMovies.map((movie) => (
            <CardFilm key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section>
        <div className="nav-select-items"></div>
        <div className="container-films">
          {topRatedMovies.map((movie) => (
            <CardFilm key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </Grid>
  );
};
