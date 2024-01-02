import { useState } from "react";

import ListAllSearch from "../api/ListAllSearch";
import SearchbarTop from "../components/SearchbarTop";

function MovieSearchAll({ mediaType }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = value => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchbarTop onSearch={handleSearch} mediaType={mediaType} />

      <ListAllSearch searchValue={searchValue} mediaType={mediaType} />
    </div>
  );
}

export default MovieSearchAll;
