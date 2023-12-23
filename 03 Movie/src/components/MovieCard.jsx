import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

import VoteAverage from "./VoteAverage";
import AddMovieWatchlist from "./AddMovieWatchlist";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}

function MovieCard({ movie }) {
  const truncatedTitle = truncateString(movie.title, 21);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.movieCardContainer}>
      <NavLink key={movie.id} to={`/movie/${movie.id}`}>
        <li key={movie.id} onClick={handleClick}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p key={truncatedTitle}>{truncatedTitle}</p>

          <span className={styles.dateRatingAdd}>
            {movie.release_date ? movie.release_date.slice(0, 4) : ""}

            <div className={styles.dateRatingAdd}>
              <AddMovieWatchlist movie={movie} size={14} />
              &nbsp; &nbsp;
              <VoteAverage movie={movie} />
            </div>
          </span>
        </li>
      </NavLink>
    </div>
  );
}

export default MovieCard;
