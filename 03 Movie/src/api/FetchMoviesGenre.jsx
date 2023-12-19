import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import Slider from "react-styled-carousel";

import styles from "./MoviesContainerStyle.module.css";
import GenreTitle from "../components/GenreTitle";

function FetchMoviesGenre({ x }) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const responsive = [
    { breakPoint: 1280, cardsToShow: 5 },
    { breakPoint: 760, cardsToShow: 2 },
  ];

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
    878: "science Fiction",
    10770: "TV movie",
    53: "thriller",
    10752: "war",
    37: "western",
  };

  const defaultGenre = "unknown";

  const genre = genreMappings[x] || defaultGenre;
  const idGenreScroll = genre.toLowerCase();

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
              <Slider responsive={responsive} autoSlide={4000} showDots={false}>
                {genreMovies
                  .filter(movie => movie.genre_ids.includes(x))
                  .map(movie => (
                    <React.Fragment key={movie.id}>
                      <div className={styles.moviesInsideCarousel}>
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
