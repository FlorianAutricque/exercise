import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";
import FetchTrendingSeries from "../api/FetchTrendingSeries";

import styles from "./Homepage.module.css";
import GenreBar from "../components/GenreBar";
import Header from "../components/Header";
import { useState } from "react";

import MovieSerieSelection from "../components/MovieSerieSelection";

function Homepage() {
  const genres = [28, 12, 16, 18, 53, 878, 10752];
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showSelection, setShowSelection] = useState(false);
  const [showMovie, setShowMovie] = useState(true);
  const [showSerie, setShowSerie] = useState(false);
  const [active, setActive] = useState("movie");

  function handleShow() {
    setShowSelection(true);
  }

  function handleGenreSelect(genre) {
    const selectedGenre = parseInt(genre, 10);
    setSelectedGenre(selectedGenre);
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
  console.log(selectedGenre);

  return (
    <div>
      <Header isHomepage={true} />

      <MovieSerieSelection
        active={active}
        handleShowMovie={handleShowMovie}
        handleShowSerie={handleShowSerie}
      />

      <div className={styles.containerSearchHomepage}>
        <p>
          Lost in options? Search for your favorite movie instantly or Select a
          Genre
        </p>
        <div className={styles.searchbarHomepage}>
          <MovieSearchContainer />
        </div>
        <GenreBar onGenreSelect={handleGenreSelect} handleShow={handleShow} />
      </div>
      {showMovie && <FetchTrendingMovies />}
      {showSerie && <FetchTrendingSeries />}

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
    </div>
  );
}

export default Homepage;
