import { useLocation } from "react-router-dom";

import ListAllSearch from "../api/ListAllSearch";

function SearchResultsPageAll({ mediaType }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  return (
    <div>
      <ListAllSearch searchValue={searchValue} mediaType={mediaType} />
    </div>
  );
}

export default SearchResultsPageAll;
