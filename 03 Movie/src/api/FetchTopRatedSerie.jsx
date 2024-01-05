import React, { useEffect, useState } from "react";

import styles from "./MoviesContainerStyle.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SerieCard from "../components/SerieCard";
import { FaStar } from "react-icons/fa";

function FetchTopRatedSerie() {
  const [topRatedSerie, setTopRatedSerie] = useState([]);
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
        console.log(data.results);

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
    <div>
      {isLoading ? (
        <p>Loading...</p>
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

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // centerMode={true}
          >
            {topRatedSerie.map(serie => (
              <React.Fragment key={serie.id}>
                <div className={styles.seriesInsideCarousel}>
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

export default FetchTopRatedSerie;
