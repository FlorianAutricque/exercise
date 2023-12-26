import { useState } from "react";
import { getWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";
import styles2 from "../components/AddMovieWatchlist.module.css";
import styles from "./Watchlist.module.css";
import styles3 from "../components/Button.module.css";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlist());
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  function handleRemove(movieId) {
    removeFromWatchlist(movieId);
    setWatchlist(getWatchlist());
    alert("Removed");
  }

  return (
    <>
      <h2>Your Watchlist</h2>
      <ul className={styles.container}>
        {watchlist.map(movie => (
          <li key={movie.id}>
            <div
              onMouseOver={() => setHoveredMovieId(movie.id)}
              onMouseOut={() => setHoveredMovieId(null)}
              className={styles.movieCardContainer}
            >
              <MovieCard movie={movie} watchlist={watchlist} />
              {hoveredMovieId === movie.id && (
                <button
                  onClick={() => handleRemove(movie.id)}
                  className={`${styles2.btn} ${styles.removeWatchlist} ${styles3.button}`}
                >
                  Remove
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
