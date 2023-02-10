import React, { useState, useEffect } from "react";
import { searchMovies } from "../services";
import { Result } from "../types";

export const useSearchMovie = (query: string) => {
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    let timer: any;
    const fetchSearch = async () => {
      const data = await searchMovies(query);
      const results = await data.results;
      setData(results);
    };

    if (query) {
      timer = setInterval(fetchSearch, 500);
    } else {
      clearInterval(timer);
      setData([]);
    }

    return () => {
      clearInterval(timer);
    };
  }, [query]);

  return {
    data,
  };
};
