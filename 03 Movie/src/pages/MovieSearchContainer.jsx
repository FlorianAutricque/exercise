import { useState } from "react";
import Searchbar from "../components/Searchbar";
import ListMoviesSearched from "../api/ListMoviesSearched";

function MovieSearchContainer() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = value => {
    setSearchValue(value);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <ListMoviesSearched searchValue={searchValue} />
    </div>
  );
}

export default MovieSearchContainer;
