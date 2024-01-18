import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./MoviesContainerStyle.module.css";
import Spinner from "../components/Spinner";
import NextPrevious from "../components/NextPrevious";

function ListAllSearch({ searchValue, mediaType }) {
  const [serie, setSerie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
          `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=${page}`,

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

    fetchAll();
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
          <NextPrevious page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default ListAllSearch;
