import FetchAllMovies from "./api/FetchAllMovies";
import FetchMoviesGenre from "./api/FetchMoviesGenre";
import FetchTrendingMovies from "./api/FetchTrendingMovies";

function App() {
  return (
    <>
      {/* <FetchAllMovies /> */}
      {/* <FetchTrendingMovies /> */}
      <FetchMoviesGenre />
    </>
  );
}

export default App;
