import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <div className={styles.movieCardContainer}>
      <NavLink key={movie.id} to={`movie/${movie.id}`}>
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p key={movie.title}>{movie.title}</p>
        </li>
      </NavLink>
    </div>
  );
}

export default MovieCard;
