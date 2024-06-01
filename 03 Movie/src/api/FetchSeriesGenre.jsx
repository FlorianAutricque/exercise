import React, { useEffect, useState } from "react";

import "react-multi-carousel/lib/styles.css";

import styles from "./StylesAPI.module.css";
import GenreTitle from "../components/GenreTitle";

import { FaRegArrowAltCircleUp } from "react-icons/fa";
import SerieCard from "../components/SerieCard";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";

function FetchSeriesGenre({ defaultGenre }) {
  const [genreSeries, setGenreSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchSeriesGenre() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const allPages = [];

        for (let page = 1; page <= 4; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${defaultGenre}`,
            options
          );

          if (!res.ok) throw new Error("Network response error");

          const data = await res.json();

          allPages.push(...data.results);
        }

        setGenreSeries(allPages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSeriesGenre();
  }, [accessKey, defaultGenre]);

  const genreMappings = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western",
  };

  const unknownGenre = "unknown";

  const genre = genreMappings[defaultGenre] || unknownGenre;
  const idGenreScrollWSerie = genre;

  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : genreSeries.length === 0 ? (
        <p>No series found for this genre</p>
      ) : (
        <div>
          <div id={idGenreScrollWSerie}>
            <span className={styles.titleBtnUpContainer}>
              <GenreTitle genre={genre} serie={genreSeries} />
              &nbsp;&nbsp;&nbsp;
              <button onClick={handleUp} className={styles.btnUp}>
                <FaRegArrowAltCircleUp size={25} color="white" />
              </button>
            </span>
            <div>
              <Slider fetch={genreSeries}>
                {genreSeries
                  .filter(
                    serie =>
                      serie.genre_ids && serie.genre_ids.includes(defaultGenre)
                  )
                  .map(serie => (
                    <React.Fragment key={serie.id}>
                      <div className={`swiper-slide ${styles.hoverEffect}`}>
                        <SerieCard serie={serie} />
                      </div>
                    </React.Fragment>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchSeriesGenre;
