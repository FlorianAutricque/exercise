import { useLocation } from "react-router-dom";
import ListMoviesSearched from "../api/FetchAllMovies";

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <h2>Search Results</h2>
      <ListMoviesSearched searchValue={searchValue} />
    </div>
  );
}

export default SearchResultsPage;
