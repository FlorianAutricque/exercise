import { useEffect, useState } from "react";

function FetchAllMovies() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=67d8da50&s=${query}`
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();
        console.log(data.Search);
        setMovie(data.Search || []);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
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
            <>
              <li key={movie.imdbID}>{movie.Title}</li>
              <img alt={movie.Title} src={movie.Poster} />
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchAllMovies;
