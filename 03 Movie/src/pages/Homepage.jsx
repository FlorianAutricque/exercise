import React from "react";
import MovieSearchContainer from "./MovieSearchContainer";
import FetchMoviesGenre from "../api/FetchMoviesGenre";

function Homepage() {
  const genres = [28, 12, 16];

  return (
    <div>
      <h1>Hello Chicko</h1>
      <MovieSearchContainer />
      {genres.map(genre => (
        <FetchMoviesGenre key={genre} x={genre} />
      ))}
    </div>
  );
}

export default Homepage;
