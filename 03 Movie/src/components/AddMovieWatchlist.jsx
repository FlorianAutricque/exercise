// AddMovieWatchlist.js

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

  useEffect(() => {
    setIsInWatchlistState(isInWatchlist(movie.id));
  }, [movie.id]);

  function handleAddWatchlist(e) {
    e.preventDefault();
    if (isInWatchlistState) {
      removeFromWatchlist(movie.id);
      alert("removed");
    } else {
      addToWatchlist(movie);
      alert("added");
    }

    setIsInWatchlistState(!isInWatchlistState);
  }

  return (
    <div>
      <button
        onClick={handleAddWatchlist}
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
