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

        for (let page = 1; page <= 10; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
            options
          );

          if (!res.ok) throw new Error("Network response error");

          const data = await res.json();
          console.log(data);
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
  }, [accessKey]);

  let genre;
  let idGenreScroll;

  if (x === 28) {
    genre = "action";
    idGenreScroll = "action";
  }
  if (x === 12) {
    genre = "adventure";
    idGenreScroll = "adventure";
  }
  if (x === 10752) {
    genre = "war";
    idGenreScroll = "war";
  }
  if (x === 16) {
    genre = "animation";
    idGenreScroll = "animation";
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
              <Slider responsive={responsive} autoSlide={4000}>
                {genreMovies
                  .filter(movie => movie.genre_ids.includes(x))
                  .reduce((pairs, movie, index, array) => {
                    if (index % 2 === 0) {
                      pairs.push(array.slice(index, index + 2));
                    }
                    return pairs;
                  }, [])
                  .map((pair, pairIndex) => (
                    <div key={pairIndex}>
                      {pair.map(movie => (
                        <React.Fragment key={movie.id}>
                          <div className={styles.moviesInsideCarousel}>
                            <MovieCard movie={movie} />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
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
