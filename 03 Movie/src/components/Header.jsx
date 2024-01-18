import styles from "./Header.module.css";
import styles2 from "../pages/SingleMovie.module.css";

import { useEffect, useState } from "react";
import VoteAverage from "./VoteAverage";

import FormatDay from "../helpers/FormatDay";

import { NavLink } from "react-router-dom";
import AddMovieWatchlist from "./AddMovieWatchlist";
import Spinner from "./Spinner";

function truncateOverview(str, maxLength) {
  if (str) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  }
  return "";
}

function Header({ isHomepage }) {
  const [imageHeader, setImageHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchImageHeader() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomImage = data.results[randomIndex];

        setImageHeader(randomImage);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImageHeader();
  }, [accessKey]);

  return (
    <div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <div
              className={`${styles.container} ${isHomepage && styles.homepage}`}
            >
              <div className={styles.overlay}></div>

              <img
                src={`https://image.tmdb.org/t/p/original${imageHeader.backdrop_path}`}
                alt={imageHeader.title}
                className={styles.imageHeader}
              />
              <div className={styles.text}>
                <span className={styles.lineHeader}>
                  <VoteAverage movie={imageHeader} /> &nbsp; &nbsp;| &nbsp;
                  &nbsp;
                  <p>
                    {imageHeader.release_date &&
                      FormatDay(imageHeader.release_date)}
                  </p>{" "}
                  <div className={styles.dateRatingAdd}>&nbsp; &nbsp;</div>
                </span>
                <h1>{imageHeader.title}</h1>

                <p>{truncateOverview(imageHeader.overview, 200)}</p>
              </div>
            </div>
            <div className={styles.linkHeader}>
              <div className={styles2.linkAdd}>
                <div className={styles2.addBtn}>
                  <AddMovieWatchlist movie={imageHeader} size={20}>
                    Watchlist
                  </AddMovieWatchlist>
                </div>

                <NavLink
                  key={imageHeader.id}
                  to={imageHeader.title ? `/movie/${imageHeader.id}` : ""}
                  className={styles.linkToTrailer}
                >
                  More infos
                </NavLink>
              </div>
            </div>
          </>
        )}

        {/* <div className={styles.linkHeader}>
          <div className={styles2.linkAdd}>
          <div className={styles2.addBtn}>
          <AddMovieWatchlist movie={imageHeader} size={20}>
          Watchlist
          </AddMovieWatchlist>
          </div>

          <NavLink
          key={imageHeader.id}
          to={imageHeader.title ? `/movie/${imageHeader.id}` : ""}
              className={styles.linkToTrailer}
            >
              More infos
            </NavLink>
          </div>
        </div>*/}
      </div>
    </div>
  );
}
export default Header;
