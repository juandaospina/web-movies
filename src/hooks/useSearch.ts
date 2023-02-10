import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  console.log("useSearch", query);
  const [error, setError] = useState<string>();
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (query.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError("");
  }, [query]);

  return { query, setQuery, error };
};
