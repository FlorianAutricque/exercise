import { FaStar } from "react-icons/fa";

import styles from "./VoteAverage.module.css";

function VoteAverage({ movie, serie }) {
  return (
    <div className={styles.ratingMovie}>
      <FaStar size={14} />
      &nbsp;
      {movie ? parseFloat(movie.vote_average).toFixed(1) : ""}
      {serie ? parseFloat(serie.vote_average).toFixed(1) : ""}
    </div>
  );
}

export default VoteAverage;
