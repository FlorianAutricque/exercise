import { BiMoviePlay } from "react-icons/bi";
import styles from "./GenreTitle.module.css";

function GenreTitle({ genre }) {
  const genreName = genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : "";

  return (
    <h2 className={styles.containerGenreTitle}>
      <BiMoviePlay />
      &nbsp;
      {genreName} Movies
    </h2>
  );
}

export default GenreTitle;
