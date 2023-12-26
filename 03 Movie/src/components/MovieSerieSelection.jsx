import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";

import styles from "./MovieSerieSelection.module.css";

function MovieSerieSelection({ active, handleShowSerie, handleShowMovie }) {
  return (
    <div className={styles.buttonSerieMovie}>
      <button
        onClick={handleShowMovie}
        className={`${styles.btnMS} ${
          active === "movie" ? styles.activeButton : ""
        }`}
      >
        <span className={styles.redDot}>
          <div className={active === "movie" ? styles.dot : ""}></div>
          &nbsp;&nbsp;
          <span className={styles.icon}>
            <BiMoviePlay /> &nbsp;Movies
          </span>
        </span>
      </button>
      <button
        onClick={handleShowSerie}
        className={`${styles.btnMS} ${
          active === "serie" ? styles.activeButton : ""
        }`}
      >
        <span className={styles.redDot}>
          <div className={active === "serie" ? styles.dot : ""}></div>
          &nbsp;&nbsp;
          <span className={styles.icon}>
            <BiCameraMovie />
            &nbsp;Series
          </span>
        </span>
      </button>
    </div>
  );
}

export default MovieSerieSelection;
