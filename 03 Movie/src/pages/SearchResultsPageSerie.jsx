import { useLocation } from "react-router-dom";
import ListSeriesSearched from "../api/ListSeriesSearched";

function SearchResultsPageSerie({ mediaType }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <ListSeriesSearched searchValue={searchValue} mediaType={mediaType} />
    </div>
  );
}

export default SearchResultsPageSerie;
