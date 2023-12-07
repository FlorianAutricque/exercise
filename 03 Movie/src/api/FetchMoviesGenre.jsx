import { useEffect, useState } from "react";

//NEED NEW API URL TO BE ABLE TOO ACCESS MORE MOVIES TO FETCH BY GENRE

function FetchMoviesGenre() {
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

        const res = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();
        console.log(data.results);
        setGenreMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesGenre();
  }, []);

  return (
    <div>
      {genreMovies.length === 0 ? (
        <p>No movies found for this genre</p>
      ) : (
        <ul>
          {genreMovies.map(movie => (
            <li key={movie.id}>
              {movie.genre_ids.includes(14) ? (
                <>
                  <p key={movie.title}>{movie.title}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchMoviesGenre;
