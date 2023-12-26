import { useState, useEffect } from "react";
import {
  isInWatchlistSerie,
  removeFromWatchlistSerie,
  addToWatchlistSerie,
} from "../helpers/WatchlistUtils";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import styles from "./AddMovieWatchlist.module.css";

function AddSerieWatchlist({ serie, size, children }) {
  const [isInWatchlistState, setIsInWatchlistState] = useState(
    isInWatchlistSerie(serie.id)
  );

  function handleToggleWatchlist() {
    if (isInWatchlistState) {
      removeFromWatchlistSerie(serie.id);
      alert("removed");
    } else {
      addToWatchlistSerie(serie);
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

export default AddSerieWatchlist;
