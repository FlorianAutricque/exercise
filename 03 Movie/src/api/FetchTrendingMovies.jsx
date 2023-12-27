import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import { IoMdTrendingUp } from "react-icons/io";

import styles from "./MoviesContainerStyle.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FetchTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // centerMode={true}
          >
            {trendingMovies.map(movie => (
              <React.Fragment key={movie.id}>
                <div className={styles.moviesInsideCarousel}>
                  <MovieCard movie={movie} />
                </div>
              </React.Fragment>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
}

export default FetchTrendingMovies;
