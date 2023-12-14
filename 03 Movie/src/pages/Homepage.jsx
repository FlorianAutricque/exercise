import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";

import styles from "./Homepage.module.css";
import GenreBar from "../components/GenreBar";

function Homepage() {
  const genres = [28, 12, 16, 10752];

  return (
    <div>
      <FetchTrendingMovies />

      <div className={styles.containerSearchHomepage}>
        <p>
          Lost in options? Search for your favorite movie instantly or Search a
          Genre
        </p>
        <div className={styles.searchbarHomepage}>
          <MovieSearchContainer />
        </div>
        <GenreBar />
      </div>
      {genres.map(genre => (
        <FetchMoviesGenre key={genre} x={genre} genre={genre} />
      ))}
    </div>
  );
}

export default Homepage;
