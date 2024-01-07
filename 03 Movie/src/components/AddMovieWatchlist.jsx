import { useState, useEffect } from "react";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "../helpers/WatchlistUtils";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import styles from "./AddMovieWatchlist.module.css";

import { toast } from "react-hot-toast";

function AddMovieWatchlist({ movie, size, children, style }) {
  const [isInWatchlistState, setIsInWatchlistState] = useState(
    isInWatchlist(movie.id)
  );

  function handleToggleWatchlist() {
    if (isInWatchlistState) {
      removeFromWatchlist(movie.id);

      toast.error("Movie removed from watchlist");
    } else {
      addToWatchlist(movie);
      toast.success("Movie added to watchlist");
    }

    setIsInWatchlistState(!isInWatchlistState);
  }

  useEffect(() => {
    setIsInWatchlistState(isInWatchlist(movie.id));
  }, [movie.id]);

  return (
    <button
      onClick={handleToggleWatchlist}
      className={`${style === "btnIcon" ? styles.btnIcon : styles.btn}  ${
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
  );
}

export default AddMovieWatchlist;
