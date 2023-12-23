import { useState } from "react";
import { getWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";
import { BsBookmarkDash } from "react-icons/bs";

import styles2 from "../components/AddMovieWatchlist.module.css";
import styles from "./Watchlist.module.css";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlist());

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
            <MovieCard movie={movie} watchlist={watchlist} />
            <button
              onClick={() => handleRemove(movie.id)}
              className={styles2.btn}
            >
              <BsBookmarkDash size={30} color="white" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
