import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";

import styles from "./Homepage.module.css";
import GenreBar from "../components/GenreBar";
import Header from "../components/Header";
import { useState } from "react";

function Homepage() {
  const genres = [28, 12, 16, 18, 53, 878, 10752];
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showSelection, setShowSelection] = useState(false);

  function handleShow() {
    setShowSelection(true);
  }

  function handleGenreSelect(genre) {
    const selectedGenre = parseInt(genre, 10);
    setSelectedGenre(selectedGenre);
  }

  return (
    <div>
      <Header isHomepage={true} />
      <FetchTrendingMovies />

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
      {showSelection && selectedGenre && (
        <FetchMoviesGenre
          key={selectedGenre}
          x={selectedGenre}
          genre={selectedGenre}
        />
      )}
      {genres.map(genre => (
        <FetchMoviesGenre key={genre} x={genre} genre={genre} />
      ))}
    </div>
  );
}

export default Homepage;
