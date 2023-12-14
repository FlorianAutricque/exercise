import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <div className={styles.movieCardContainer}>
      <li key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p key={movie.title}>{movie.title}</p>
      </li>
    </div>
  );
}

export default MovieCard;
