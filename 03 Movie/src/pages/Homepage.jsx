import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchSeriesGenre from "../api/FetchSeriesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";
import FetchTrendingSeries from "../api/FetchTrendingSeries";

import styles from "./Homepage.module.css";
import GenreBar from "../components/GenreBar";
import Header from "../components/Header";
import { useState } from "react";

import MovieSerieSelection from "../components/MovieSerieSelection";

function Homepage() {
  const genres = [28, 12, 16, 18, 53, 878, 10752];
  const genresSerie = [10759, 16, 35, 80, 99, 18, 10751];
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showSelection, setShowSelection] = useState(false);
  const [showMovie, setShowMovie] = useState(true);
  const [showSerie, setShowSerie] = useState(false);
  const [active, setActive] = useState("movie");

  const [selectedGenreSerie, setSelectedGenreSerie] = useState(null);

  function handleShow() {
    setShowSelection(true);
  }

  function handleGenreSelect(genre) {
    const selectedGenre = parseInt(genre, 10);
    setSelectedGenre(selectedGenre);
  }

  function handleGenreSelectSerie(genre) {
    const selectedGenreSerie = parseInt(genre, 10);
    setSelectedGenreSerie(selectedGenreSerie);
  }

  function handleShowMovie() {
    setActive("movie");

    setShowMovie(true);
    setShowSerie(false);
  }

  function handleShowSerie() {
    setActive("serie");

    setShowSerie(true);
    setShowMovie(false);
  }

  let mediaType;
  mediaType = showSerie ? "tv" : "movie";
  return (
    <div>
      <Header isHomepage={true} />

      <MovieSerieSelection
        active={active}
        handleShowMovie={handleShowMovie}
        handleShowSerie={handleShowSerie}
      />

      {showSerie && (
        <>
          <FetchTrendingSeries />
          <div className={styles.containerSearchHomepage}>
            <p>
              Lost in options? Search for your favorite serie instantly or
              Select a Genre
            </p>
            <div className={styles.searchbarHomepage}>
              {showSerie && <MovieSearchContainer mediaType="tv" />}
            </div>
            <GenreBar
              onGenreSelect={handleGenreSelectSerie}
              handleShow={handleShow}
              showSerie={showSerie}
            />
          </div>
          {showSelection && selectedGenreSerie ? (
            <FetchSeriesGenre
              key={selectedGenreSerie}
              defaultGenre={selectedGenreSerie}
              genre={selectedGenreSerie}
            />
          ) : (
            ""
          )}
          {genresSerie.map(genre => (
            <FetchSeriesGenre key={genre} defaultGenre={genre} genre={genre} />
          ))}
        </>
      )}

      {showMovie && (
        <>
          <FetchTrendingMovies />
          <div className={styles.containerSearchHomepage}>
            <p>
              Lost in options? Search for your favorite movie instantly or
              Select a Genre
            </p>
            <div className={styles.searchbarHomepage}>
              <MovieSearchContainer mediaType={mediaType} />
              {/* {console.log("media movie", mediaType)} */}
            </div>
            <GenreBar
              onGenreSelect={handleGenreSelect}
              handleShow={handleShow}
              showMovie={showMovie}
            />
          </div>
          {showSelection && selectedGenre ? (
            <FetchMoviesGenre
              key={selectedGenre}
              defaultGenre={selectedGenre}
              genre={selectedGenre}
            />
          ) : (
            ""
          )}
          {genres.map(genre => (
            <FetchMoviesGenre key={genre} defaultGenre={genre} genre={genre} />
          ))}
        </>
      )}
    </div>
  );
}

export default Homepage;
