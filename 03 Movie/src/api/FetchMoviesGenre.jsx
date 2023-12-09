import React, { useEffect, useState } from "react";

function FetchMoviesGenre({ x }) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchMoviesGenre() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const allPages = [];

        for (let page = 1; page <= 10; page++) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
            options
          );

          if (!res.ok) throw new Error("Network response error");

          const data = await res.json();
          console.log(data);
          allPages.push(...data.results);
        }

        setGenreMovies(allPages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesGenre();
  }, [accessKey]);

  let genre;

  if (x === 28) {
    genre = "action";
  }
  if (x === 12) {
    genre = "adventure";
  }
  if (x === 16) {
    genre = "animation";
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : genreMovies.length === 0 ? (
        <p>No movies found for this genre</p>
      ) : (
        <ul>
          <p>genre: {genre}</p>
          {genreMovies
            .filter(movie => movie.genre_ids.includes(x))
            .map(movie => (
              <React.Fragment key={movie.id}>
                <li key={movie.id}>
                  <p key={movie.title}>{movie.title}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </li>
              </React.Fragment>
            ))}
        </ul>
      )}
    </div>
  );
}

export default FetchMoviesGenre;
