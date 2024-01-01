import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import FormatDay from "../helpers/FormatDay";
import VoteAverage from "../components/VoteAverage";

import AddSerieWatchlist from "../components/AddSerieWatchlist";

import styles from "./SingleMovie.module.css";
import MovieGenreSingleMovie from "../components/MovieGenreSingleMovie";
import FetchSeriesGenre from "../api/FetchSeriesGenre";

function SingleSerie() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchSerieDetails = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error("Failed to fetch serie details");
        }

        const data = await response.json();
        console.log(data);
        setSerie(data);
      } catch (error) {
        console.error("Error fetching serie details:", error);
      }
    };

    fetchSerieDetails();
  }, [id, accessKey]);

  return (
    <div>
      {serie ? (
        <div>
          <div className={styles.movieContainer}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
                className={styles.img}
              />
              <div className={styles.addVoteUnderPoster}></div>
            </div>
            <div>
              <h2>{serie.name}</h2>
              <p>
                {serie.first_air_date
                  ? FormatDay(serie.first_air_date)
                  : "No release date available"}
              </p>
              <span className={styles.voteGenre}>
                <VoteAverage serie={serie} /> |
                <MovieGenreSingleMovie serie={serie} />
              </span>
              {serie.overview ? (
                <>
                  <h2>Synopsis</h2>
                  <p className={styles.overview}>{serie.overview}</p>
                </>
              ) : (
                ""
              )}

              <div className={styles.linkAdd}>
                <div className={styles.addBtn}>
                  <AddSerieWatchlist serie={serie} size={20}>
                    Watchlist
                  </AddSerieWatchlist>
                </div>
                <Link
                  to={`https://www.youtube.com/results?search_query=${serie.name}+trailer`}
                  target="_blank"
                  className={styles.linkToTrailer}
                >
                  Trailer
                </Link>
              </div>
            </div>
          </div>

          <h2 className={styles.textSimilarGenre}>Movies of similar genre</h2>
          {serie.genres && serie.genres.length > 0 ? (
            serie.genres.map((genre, index) => (
              <FetchSeriesGenre
                key={`${genre.id}-${index}`}
                defaultGenre={genre.id}
              />
            ))
          ) : serie.genre ? (
            <FetchSeriesGenre
              key={`${serie.genres.id}-single`}
              defaultGenre={serie.genres.id}
            />
          ) : (
            <p>No genre information available</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleSerie;