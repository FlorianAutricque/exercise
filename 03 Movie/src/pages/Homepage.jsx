import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";
import FetchTrendingSeries from "../api/FetchTrendingSeries";

import styles from "./Homepage.module.css";
import GenreBar from "../components/GenreBar";
import Header from "../components/Header";
import { useState } from "react";

function Homepage() {
  const genres = [28, 12, 16, 18, 53, 878, 10752];
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showSelection, setShowSelection] = useState(false);
  const [showMovie, setShowMovie] = useState(true);
  const [showSerie, setShowSerie] = useState(false);

  function handleShow() {
    setShowSelection(true);
  }

  function handleGenreSelect(genre) {
    const selectedGenre = parseInt(genre, 10);
    setSelectedGenre(selectedGenre);
  }

  function handleShowMovie() {
    setShowMovie(true);
    setShowSerie(false);
  }

  function handleShowSerie() {
    setShowSerie(true);
    setShowMovie(false);
  }

  return (
    <div>
      <Header isHomepage={true} />

      <button onClick={handleShowMovie}>movie</button>
      <button onClick={handleShowSerie}>serie</button>

      {showMovie && <FetchTrendingMovies />}
      {showSerie && <FetchTrendingSeries />}

      <div className={styles.containerSearchHomepage}>
        <p>
          Lost in options? Search for your favorite movie instantly or Search a
          Genre
        </p>
        <div className={styles.searchbarHomepage}>
          <MovieSearchContainer />
        </div>
        <GenreBar onGenreSelect={handleGenreSelect} handleShow={handleShow} />
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
        <FetchMoviesGenre key={genre} x={genre} genre={genre} />
      ))}
    </div>
  );
}

export default Homepage;
