import React, { useEffect, useState } from "react";

import styles from "./StylesAPI.module.css";

import "react-multi-carousel/lib/styles.css";

import SerieCard from "../components/SerieCard";
import { FaStar } from "react-icons/fa";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";

function FetchTopRatedSerie() {
  const [topRatedSerie, setTopRatedSerie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function FetchTopRatedSerie() {
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
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setTopRatedSerie(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    FetchTopRatedSerie();
  }, [accessKey]);

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : topRatedSerie.length === 0 ? (
        <p>No top rated series found</p>
      ) : (
        <>
          <h2 className={styles.trendingMovies}>
            <FaStar />
            &nbsp;Top Rated Series
          </h2>

          <Slider fetch={topRatedSerie}>
            {topRatedSerie.map(serie => (
              <React.Fragment key={serie.id}>
                <div className={`swiper-slide ${styles.hoverEffect}`}>
                  <SerieCard serie={serie} />
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default FetchTopRatedSerie;
