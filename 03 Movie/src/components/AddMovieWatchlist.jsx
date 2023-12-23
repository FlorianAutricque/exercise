import { useState } from "react";
import { addToWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";

import styles from "./AddMovieWatchlist.module.css";

function AddMovieWatchlist({ movie, size, children }) {
  const [add, setAdd] = useState(true);
  function handleAddWatchlist(e) {
    e.preventDefault();
    if (add === true) {
      addToWatchlist(movie);
      alert("added");
    } else {
      removeFromWatchlist(movie);
      alert("removed");
    }

    setAdd(add => !add);
  }
  return (
    <div>
      {add ? (
        <button onClick={handleAddWatchlist} className={styles.btn}>
          {children}
          <BsBookmarkPlus size={size} color="white" />
        </button>
      ) : (
        <button onClick={handleAddWatchlist} className={styles.btn}>
          {children}
          <BsBookmarkCheck size={size} color="green" />
        </button>
      )}
    </div>
  );
}

export default AddMovieWatchlist;
