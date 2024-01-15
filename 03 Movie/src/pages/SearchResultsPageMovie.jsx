import { useLocation } from "react-router-dom";
import ListMoviesSearched from "../api/ListMoviesSearched";
import Footer from "../components/Footer";

function SearchResultsPageMovie({ mediaType }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <ListMoviesSearched searchValue={searchValue} mediaType={mediaType} />
      <Footer />
    </div>
  );
}

export default SearchResultsPageMovie;
