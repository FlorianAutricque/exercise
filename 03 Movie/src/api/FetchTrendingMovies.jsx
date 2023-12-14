import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import Slider from "react-styled-carousel";

import { IoMdTrendingUp } from "react-icons/io";

import styles from "./MoviesContainerStyle.module.css";

function FetchTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const responsive = [
    { breakPoint: 1280, cardsToShow: 5 },
    { breakPoint: 760, cardsToShow: 2 },
  ];

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
        console.log(data.results);
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, [accessKey]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : trendingMovies.length === 0 ? (
        <p>No trending movies found</p>
      ) : (
        <>
          <h2 className={styles.trendingMovies}>
            <IoMdTrendingUp />
            &nbsp;Trending Movies
          </h2>
          <Slider responsive={responsive} autoSlide={40000} showDots={false}>
            {trendingMovies.map(movie => (
              <React.Fragment key={movie.id}>
                <MovieCard movie={movie} />
              </React.Fragment>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default FetchTrendingMovies;
