import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import styles from "./GenreTitle.module.css";

function GenreTitle({ genre, serie }) {
  const genreName = genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : "";

  return (
    <h2 className={styles.containerGenreTitle}>
      {serie ? <BiCameraMovie /> : <BiMoviePlay />}
      &nbsp;
      {genreName} {serie ? "Series" : "Movies"}
    </h2>
  );
}

export default GenreTitle;
