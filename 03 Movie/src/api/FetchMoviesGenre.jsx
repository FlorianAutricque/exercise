import { useEffect, useState } from "react";

//api key tmdb = 9456e22d0ca702b31b7acb6325aa1c72

//NEED NEW API URL TO BE ABLE TOO ACCESS MORE MOVIES TO FETCH BY GENRE

function FetchMoviesGenre() {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMoviesGenre() {
      try {
        setIsLoading(true);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU2ZTIyZDBjYTcwMmIzMWI3YWNiNjMyNWFhMWM3MiIsInN1YiI6IjY1NzBlMGY3YjIzNGI5MDEzYTIzZWQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lniqLGF4PTDCR9PYwdm1dm7EQrh99qZQWFzn8Bn7ur4",
          },
        };

        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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
              {movie.genre_ids.includes(28) ? (
                <>
                  <p>{movie.title}</p>
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
