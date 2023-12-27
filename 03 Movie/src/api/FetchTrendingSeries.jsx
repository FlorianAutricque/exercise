import React, { useEffect, useState } from "react";

import { IoMdTrendingUp } from "react-icons/io";

import styles from "./MoviesContainerStyle.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SerieCard from "../components/SerieCard";

function FetchTrendingSeries() {
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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
        console.log(data.results);

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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : trendingSeries.length === 0 ? (
        <p>No trending movies found</p>
      ) : (
        <>
          <h2 className={styles.trendingMovies}>
            <IoMdTrendingUp />
            &nbsp;Trending Series
          </h2>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
          >
            {trendingSeries.map(serie => (
              <React.Fragment key={serie.id}>
                <div className={styles.moviesInsideCarousel}>
                  <SerieCard serie={serie} />
                </div>
              </React.Fragment>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
}

export default FetchTrendingSeries;
