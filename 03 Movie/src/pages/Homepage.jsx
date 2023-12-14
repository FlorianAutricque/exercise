import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";

function Homepage() {
  const genres = [28, 12, 16];

  return (
    <div>
      <FetchTrendingMovies />

      <MovieSearchContainer />
      {genres.map(genre => (
        <FetchMoviesGenre key={genre} x={genre} />
      ))}
    </div>
  );
}

export default Homepage;
