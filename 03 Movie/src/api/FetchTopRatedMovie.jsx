import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";

import styles from "./StylesAPI.module.css";

import "react-multi-carousel/lib/styles.css";

import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

import Slider from "../components/Slider";

function FetchTopRatedMovie() {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function FetchTopRatedMovie() {
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
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setTopRatedMovie(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    FetchTopRatedMovie();
  }, [accessKey]);

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : topRatedMovie.length === 0 ? (
        <p>No top rated movies found</p>
      ) : (
        <>
          <h2 className={styles.trendingMovies}>
            <FaStar />
            &nbsp;Top Rated Movies
          </h2>

          <Slider fetch={topRatedMovie}>
            {topRatedMovie.map(movie => (
              <React.Fragment key={movie.id}>
                <div className={`swiper-slide ${styles.hoverEffect}`}>
                  <MovieCard movie={movie} />
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default FetchTopRatedMovie;
