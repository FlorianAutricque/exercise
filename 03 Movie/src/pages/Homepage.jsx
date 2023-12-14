import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";

import styles from "./Homepage.module.css";

function Homepage() {
  const genres = [28, 12, 16];

  return (
    <div>
      <FetchTrendingMovies />

      <div className={styles.containerSearchHomepage}>
        <p>Lost in options? Search for your favorite movie instantly</p>
        <div className={styles.searchbarHomepage}>
          <MovieSearchContainer />
        </div>
      </div>
      {genres.map(genre => (
        <FetchMoviesGenre key={genre} x={genre} />
      ))}
    </div>
  );
}

export default Homepage;
