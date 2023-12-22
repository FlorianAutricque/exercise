import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./MoviesContainerStyle.module.css";
import GenreTitle from "../components/GenreTitle";

import { FaRegArrowAltCircleUp } from "react-icons/fa";

function FetchMoviesGenre({ x }) {
  const [genreMovies, setGenreMovies] = useState([]);
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
    async function fetchMoviesGenre() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const allPages = [];

        for (let page = 1; page <= 4; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${x}&page=${page}`,
            options
          );

          if (!res.ok) throw new Error("Network response error");

          const data = await res.json();

          allPages.push(...data.results);
        }

        setGenreMovies(allPages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesGenre();
  }, [accessKey, x]);

  const genreMappings = {
    28: "action",
    12: "adventure",
    16: "animation",
    35: "comedy",
    80: "crime",
    99: "documentary",
    18: "drama",
    10751: "family",
    14: "fantasy",
    36: "history",
    27: "horror",
    10402: "music",
    9648: "mystery",
    10749: "romance",
    878: "sci-fi",
    10770: "TV movie",
    53: "thriller",
    10752: "war",
    37: "western",
  };

  const defaultGenre = "unknown";

  const genre = genreMappings[x] || defaultGenre;
  const idGenreScroll = genre.toLowerCase();

  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : genreMovies.length === 0 ? (
        <p>No movies found for this genre</p>
      ) : (
        <div>
          <div id={idGenreScroll}>
            <GenreTitle genre={genre} />
            <div>
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                infinite={true}
              >
                {genreMovies
                  .filter(
                    movie => movie.genre_ids && movie.genre_ids.includes(x)
                  )
                  .map(movie => (
                    <React.Fragment key={movie.id}>
                      <div className={styles.moviesInsideCarousel}>
                        <MovieCard movie={movie} />
                      </div>
                    </React.Fragment>
                  ))}
              </Carousel>
            </div>
          </div>
          <button onClick={handleUp} className={styles.btnUp}>
            <FaRegArrowAltCircleUp size={25} color="white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default FetchMoviesGenre;
