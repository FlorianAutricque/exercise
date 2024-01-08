import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./MoviesContainerStyle.module.css";
import Spinner from "../components/Spinner";
import NextPrevious from "../components/NextPrevious";

function ListSeriesSearched({ searchValue, mediaType }) {
  const [serie, setSerie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchAllSeries() {
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
          `https://api.themoviedb.org/3/search/tv?query=${searchValue}&include_adult=false&language=en-US&page=${page}`,
          // `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`,

          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setSerie(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllSeries();
  }, [accessKey, searchValue, mediaType, page]);
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
              List of series for{" "}
              {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
            </h2>
          ) : (
            ""
          )}
          <div className={styles.containerMovies}>
            {serie.map(serie => (
              //Fragment to conditionally render both li and img only when the poster_path is not null
              <React.Fragment key={serie.id}>
                {serie.poster_path !== null && <MovieCard movie={serie} />}
              </React.Fragment>
            ))}
          </div>

          <NextPrevious page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default ListSeriesSearched;
