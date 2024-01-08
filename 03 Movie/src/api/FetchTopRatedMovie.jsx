import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";

import styles from "./MoviesContainerStyle.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

function FetchTopRatedMovie() {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
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
    <div>
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

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // centerMode={true}
          >
            {topRatedMovie.map(movie => (
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

export default FetchTopRatedMovie;
