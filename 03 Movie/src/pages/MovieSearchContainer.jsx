import { useState } from "react";
import Searchbar from "../components/Searchbar";
import ListMoviesSearched from "../api/ListMoviesSearched";
import ListSeriesSearched from "../api/ListSeriesSearched";

function MovieSearchContainer({ mediaType }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = value => {
    setSearchValue(value);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} mediaType={mediaType} />
      {mediaType === "movie" ? (
        <ListMoviesSearched searchValue={searchValue} mediaType={mediaType} />
      ) : (
        <ListSeriesSearched searchValue={searchValue} mediaType={mediaType} />
      )}
    </div>
  );
}

export default MovieSearchContainer;
