import React, { useEffect, useState } from "react";

import { IoMdTrendingUp } from "react-icons/io";

import "react-multi-carousel/lib/styles.css";
import SerieCard from "../components/SerieCard";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";

import styles from "./StylesAPI.module.css";

function FetchTrendingSeries() {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchTrendingSeries() {
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
          "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();

        setTrendingSeries(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingSeries();
  }, [accessKey]);

  return (
    <div className={styles.containerAPI}>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : trendingSeries.length === 0 ? (
        <p>No trending movies found</p>
      ) : (
        <>
          <h2>
            <IoMdTrendingUp />
            &nbsp;Trending Series
          </h2>

          <Slider fetch={trendingSeries}>
            {trendingSeries.map(serie => (
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

export default FetchTrendingSeries;
