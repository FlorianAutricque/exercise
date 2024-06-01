import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

import styles from "./StylesAPI.module.css";

import { IoMdTrendingUp } from "react-icons/io";
import Slider from "../components/Slider";

function FetchTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovies() {
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
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setTrendingMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, [accessKey]);

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : trendingMovies.length === 0 ? (
        <p>No trending movies found</p>
      ) : (
        <>
          <h2>
            <IoMdTrendingUp />
            &nbsp;Trending Movies
          </h2>
          <Slider fetch={trendingMovies}>
            {trendingMovies.map((movie, index) => (
              <>
                <React.Fragment key={movie.id || index}>
                  <div className={`swiper-slide ${styles.hoverEffect}`}>
                    <MovieCard movie={movie} />
                  </div>
                </React.Fragment>
              </>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default FetchTrendingMovies;
