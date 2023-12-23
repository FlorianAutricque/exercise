import { useState, useEffect } from "react";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "../helpers/WatchlistUtils";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import styles from "./AddMovieWatchlist.module.css";

function AddMovieWatchlist({ movie, size, children }) {
  const [isInWatchlistState, setIsInWatchlistState] = useState(
    isInWatchlist(movie.id)
  );

  function handleToggleWatchlist() {
    if (isInWatchlistState) {
      removeFromWatchlist(movie.id);
      alert("removed");
    } else {
      addToWatchlist(movie);
    }

    setIsInWatchlistState(!isInWatchlistState);
  }

  useEffect(() => {
    setIsInWatchlistState(isInWatchlist(movie.id));
  }, [movie.id]);

  return (
    <div>
      <button
        onClick={handleToggleWatchlist}
        className={`${styles.btn} ${
          isInWatchlistState ? styles.addedToWatchlist : ""
        }`}
      >
        {children}
        {isInWatchlistState ? (
          <BsBookmarkCheck size={size} color="green" />
        ) : (
          <BsBookmarkPlus size={size} color="white" />
        )}
      </button>
    </div>
  );
}

export default AddMovieWatchlist;
