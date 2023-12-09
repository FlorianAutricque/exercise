import FetchAllMovies from "../api/FetchAllMovies";
import FetchMoviesGenre from "../api/FetchMoviesGenre";
import FetchTrendingMovies from "../api/FetchTrendingMovies";

function Homepage() {
  return (
    <div>
      <FetchAllMovies />
      {/* <FetchTrendingMovies /> */}
      {/* <FetchMoviesGenre /> */}
    </div>
  );
}

export default Homepage;
