import { BiMoviePlay } from "react-icons/bi";
import styles from "./GenreTitle.module.css";

function GenreTitle({ genre }) {
  console.log("Genre:", genre);
  return (
    <h2 className={styles.containerGenreTitle}>
      <BiMoviePlay />
      &nbsp;
      {genre.charAt(0).toUpperCase() + genre.slice(1)} Movies
    </h2>
  );
}

export default GenreTitle;
