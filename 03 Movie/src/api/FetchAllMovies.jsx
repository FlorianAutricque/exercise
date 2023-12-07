import React, { useEffect, useState } from "react";

//api key tmdb = 9456e22d0ca702b31b7acb6325aa1c72

//NEED NEW API URL TO BE ABLE TOO ACCESS MORE MOVIES TO FETCH BY GENRE

function FetchAllMovies() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const [genreMovies, setGenreMovies] = useState([]);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();
        console.log(data.results);
        setMovie(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllMovies();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {movie.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <ul>
          {movie.map(movie => (
            //Fragment to conditionally render both li and img only when the poster_path is not null
            <React.Fragment key={movie.id}>
              {movie.poster_path !== null && (
                <>
                  <li>{movie.title}</li>
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchAllMovies;
