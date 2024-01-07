import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import FormatDay from "../helpers/FormatDay";
import VoteAverage from "../components/VoteAverage";
import FetchMoviesGenre from "../api/FetchMoviesGenre";

import AddMovieWatchlist from "../components/AddMovieWatchlist";

import styles from "./SingleMovie.module.css";
import MovieGenreSingleMovie from "../components/MovieGenreSingleMovie";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, accessKey]);

  return (
    <div>
      {movie ? (
        <div>
          <div className={styles.movieContainer}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.img}
              />
              <div className={styles.addVoteUnderPoster}></div>
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>{FormatDay(movie.release_date)}</p>
              <span className={styles.voteGenre}>
                <VoteAverage movie={movie} /> |
                <MovieGenreSingleMovie movie={movie} />
              </span>
              {movie.overview ? (
                <>
                  <h2>Synopsis</h2>
                  <p className={styles.overview}>{movie.overview}</p>
                </>
              ) : (
                ""
              )}
              <div className={styles.linkAdd}>
                <AddMovieWatchlist movie={movie} size={20} style={"btn"}>
                  Watchlist
                </AddMovieWatchlist>

                <Link
                  to={`https://www.youtube.com/results?search_query=${movie.title}+trailer`}
                  target="_blank"
                  className={styles.linkToTrailer}
                >
                  Trailer
                </Link>
              </div>
            </div>
          </div>

          <h2 className={styles.textSimilarGenre}>Movies of similar genre</h2>
          {movie.genres && movie.genres.length > 0 ? (
            movie.genres.map(genre => (
              <>
                <FetchMoviesGenre key={genre.id} defaultGenre={genre.id} />
              </>
            ))
          ) : movie.genre ? (
            <FetchMoviesGenre defaultGenre={movie.genre.id} />
          ) : (
            <p>No genre information available</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleMovie;
