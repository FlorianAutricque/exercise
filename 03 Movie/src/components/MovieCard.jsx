import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

import VoteAverage from "./VoteAverage";
import AddMovieWatchlist from "./AddMovieWatchlist";

function truncateString(str, maxLength) {
  if (str) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  }
  return "";
}

function MovieCard({ movie, watchlist }) {
  const truncatedTitle = movie
    ? truncateString(movie.title || movie.name, 21)
    : "";

  const date = movie.release_date || movie.first_air_date;

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.movieCardContainer}>
      {watchlist ? (
        <>
          <div className={`${styles.containerMovie}`}>
            {/* <NavLink key={movie.id} to={`/movie/${movie.id}`}> */}
            <div key={movie.id}>
              <div onClick={handleClick}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p key={truncatedTitle}>{truncatedTitle}</p>
              </div>
            </div>
            {/* </NavLink> */}
            <div className={styles.cardBelow}>
              <span className={styles.dateRatingAdd}>
                {date ? date.slice(0, 4) : ""}

                <div className={styles.dateRatingAdd}>
                  {watchlist ? (
                    ""
                  ) : (
                    <AddMovieWatchlist movie={movie} size={14} />
                  )}
                  &nbsp; &nbsp;
                  <VoteAverage movie={movie} />
                </div>
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavLink
            key={movie.id}
            to={movie.title ? `/movie/${movie.id}` : `/serie/${movie.id}`}
          >
            <div onClick={handleClick}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p key={truncatedTitle}>{truncatedTitle}</p>
            </div>
          </NavLink>
          <div className={styles.cardBelow}>
            <span className={styles.dateRatingAdd}>
              {movie.release_date ? movie.release_date.slice(0, 4) : ""}

              <div className={styles.dateRatingAdd}>
                {watchlist ? "" : <AddMovieWatchlist movie={movie} size={14} />}
                &nbsp; &nbsp;
                <VoteAverage movie={movie} />
              </div>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieCard;
