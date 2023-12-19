import { FaStar } from "react-icons/fa";

import styles from "./VoteAverage.module.css";

function VoteAverage({ movie }) {
  return (
    <div className={styles.ratingMovie}>
      <FaStar size={14} />
      &nbsp;
      {parseFloat(movie.vote_average).toFixed(1)}
    </div>
  );
}

export default VoteAverage;
