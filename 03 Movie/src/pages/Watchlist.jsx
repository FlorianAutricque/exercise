import { useState } from "react";
import {
  getWatchlist,
  removeFromWatchlist,
  removeFromWatchlistSerie,
} from "../helpers/WatchlistUtils";
import styles2 from "../components/AddMovieWatchlist.module.css";
import styles from "./Watchlist.module.css";
import styles3 from "../components/Button.module.css";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";

import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";

import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(getWatchlist());

  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [hoveredSerieId, setHoveredSerieId] = useState(null);

  const movies = watchlist.filter(
    item =>
      item.media_type === "movie" ||
      (item.media_type !== "tv" && item.title && item.release_date)
  );

  const series = watchlist.filter(
    item =>
      item.media_type === "tv" ||
      (item.first_air_date && item.name && item.first_air_date)
  );

  function handleRemove(movieId) {
    removeFromWatchlist(movieId);
    setWatchlist(getWatchlist());

    toast.error("Movie removed from watchlist");
  }

  function handleRemoveSerie(serieId) {
    removeFromWatchlistSerie(serieId);
    setWatchlist(getWatchlist());

    toast.error("Serie removed from watchlist");
  }
  return (
    <div className={styles.x}>
      <h2 className={styles.seriesMovies}>Your Watchlist</h2>
      <h3>
        <BiMoviePlay /> &nbsp;Movies
      </h3>
      {movies.length > 0 ? (
        <ul className={styles.container}>
          {movies.map(movie => (
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
      ) : (
        <p className={styles.textWatchlist}>
          Add some movies to your watchlist
        </p>
      )}
      <h3>
        <BiCameraMovie />
        &nbsp;Series
      </h3>
      {series.length > 0 ? (
        <ul className={styles.container}>
          {series.map(serie => (
            <li key={serie.id}>
              <div
                onMouseOver={() => setHoveredSerieId(serie.id)}
                onMouseOut={() => setHoveredSerieId(null)}
                className={styles.movieCardContainer}
              >
                <SerieCard serie={serie} watchlist={watchlist} />
                {hoveredSerieId === serie.id && (
                  <button
                    onClick={() => handleRemoveSerie(serie.id)}
                    className={`${styles2.btn} ${styles.removeWatchlist} ${styles3.button}`}
                  >
                    Remove
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.textWatchlist}>
          Add some series to your watchlist
        </p>
      )}
      <Footer />
    </div>
  );
}

export default Watchlist;
