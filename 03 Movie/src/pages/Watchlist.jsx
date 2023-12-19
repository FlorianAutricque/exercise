import { useState } from "react";
import { getWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";
import { BsBookmarkDash } from "react-icons/bs";

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
            <button onClick={() => handleRemove(movie.id)}>
              <BsBookmarkDash size={30} color="white" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
