import { useState } from "react";
import { getWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";
import { BsBookmarkDash } from "react-icons/bs";

import styles2 from "../components/AddMovieWatchlist.module.css";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlist());

  function handleRemove(movieId) {
    removeFromWatchlist(movieId);
    setWatchlist(getWatchlist());
    alert("Removed");
  }

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map(movie => (
          <li key={movie.id}>
            {movie.title}{" "}
            <button
              onClick={() => handleRemove(movie.id)}
              className={styles2.btn}
            >
              <BsBookmarkDash size={30} color="white" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
