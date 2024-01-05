import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./MoviesContainerStyle.module.css";
import Spinner from "../components/Spinner";

function ListAllSearch({ searchValue, mediaType }) {
  const [serie, setSerie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchAll() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const res = await fetch(
          // `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
          // `https://api.themoviedb.org/3/search/${mediaType}?query=${searchValue}&include_adult=false&language=en-US&page=1`,
          // `https://api.themoviedb.org/3/search/tv?query=${searchValue}&include_adult=false&language=en-US&page=1`,
          `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`,

          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setSerie(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAll();
  }, [accessKey, searchValue, mediaType]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {searchValue ? (
            <h2>
              List for your research:{" "}
              {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
            </h2>
          ) : (
            ""
          )}
          <div className={styles.containerMovies}>
            {serie
              .filter(
                item =>
                  item.poster_path !== null && item.media_type !== "person"
              )
              .map(serie => (
                <React.Fragment key={serie.id}>
                  <MovieCard movie={serie} />
                </React.Fragment>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ListAllSearch;
