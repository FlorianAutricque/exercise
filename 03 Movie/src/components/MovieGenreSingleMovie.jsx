import styles from "./MovieGenreSingleMovie.module.css";

function MovieGenreSingleMovie({ movie }) {
  return (
    <div>
      {movie.genres && movie.genres.length > 0 ? (
        <p className={styles.genreList}>
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < movie.genres.length - 1 && ", "}
            </span>
          ))}
        </p>
      ) : movie.genre ? (
        <p>{movie.genre.name}</p>
      ) : (
        <p>No genre information available</p>
      )}
    </div>
  );
}

export default MovieGenreSingleMovie;
