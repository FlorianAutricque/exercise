import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "react-multi-carousel/lib/styles.css";

import styles from "./StylesAPI.module.css";
import GenreTitle from "../components/GenreTitle";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";

function FetchMoviesGenre({ defaultGenre }) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

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
            `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${defaultGenre}&page=${page}`,
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
  }, [accessKey, defaultGenre]);

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

  const genreUnknown = "unknown";

  const genre = genreMappings[defaultGenre] || genreUnknown;
  const idGenreScroll = genre.toLowerCase();

  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : genreMovies.length === 0 ? (
        <p>No movies found for this genre</p>
      ) : (
        <div>
          <div id={idGenreScroll}>
            <span className={styles.titleBtnUpContainer}>
              <GenreTitle genre={genre} />
              &nbsp;&nbsp;&nbsp;
              <button onClick={handleUp} className={styles.btnUp}>
                <FaRegArrowAltCircleUp size={25} color="white" />
              </button>
            </span>

            <div>
              <Slider fetch={genreMovies}>
                {genreMovies
                  .filter(
                    movie =>
                      movie.genre_ids && movie.genre_ids.includes(defaultGenre)
                  )
                  .map(movie => (
                    <React.Fragment key={movie.id}>
                      <div className={`swiper-slide ${styles.hoverEffect}`}>
                        <MovieCard movie={movie} />
                      </div>
                    </React.Fragment>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchMoviesGenre;
