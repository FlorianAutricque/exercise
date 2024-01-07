import { useState, useEffect } from "react";
import {
  isInWatchlistSerie,
  removeFromWatchlistSerie,
  addToWatchlistSerie,
} from "../helpers/WatchlistUtils";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import styles from "./AddMovieWatchlist.module.css";

import { toast } from "react-hot-toast";

function AddSerieWatchlist({ serie, size, children, style }) {
  const [isInWatchlistState, setIsInWatchlistState] = useState(
    isInWatchlistSerie(serie.id)
  );

  function handleToggleWatchlist() {
    if (isInWatchlistState) {
      removeFromWatchlistSerie(serie.id);
      toast.error("Serie removed from watchlist");
    } else {
      addToWatchlistSerie(serie);
      toast.success("Serie added to watchlist");
    }

    setIsInWatchlistState(!isInWatchlistState);
  }

  useEffect(() => {
    setIsInWatchlistState(isInWatchlistSerie(serie.id));
  }, [serie.id]);

  return (
    <div>
      <button
        onClick={handleToggleWatchlist}
        className={`${style === "btnIcon" ? styles.btnIcon : styles.btn} ${
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

export default AddSerieWatchlist;
