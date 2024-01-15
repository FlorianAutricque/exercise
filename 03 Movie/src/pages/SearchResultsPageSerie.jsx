import { useLocation } from "react-router-dom";
import ListSeriesSearched from "../api/ListSeriesSearched";
import Footer from "../components/Footer";

function SearchResultsPageSerie({ mediaType }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <ListSeriesSearched searchValue={searchValue} mediaType={mediaType} />
      <Footer />
    </div>
  );
}

export default SearchResultsPageSerie;
