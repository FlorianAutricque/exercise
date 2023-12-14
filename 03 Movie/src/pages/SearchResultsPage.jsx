import { useLocation } from "react-router-dom";
import ListMoviesSearched from "../api/ListMoviesSearched";

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <ListMoviesSearched searchValue={searchValue} />
    </div>
  );
}

export default SearchResultsPage;
