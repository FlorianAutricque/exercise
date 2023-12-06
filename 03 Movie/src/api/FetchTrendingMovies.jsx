import { useEffect, useState } from "react";

//api key tmdb = 9456e22d0ca702b31b7acb6325aa1c72

function FetchTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrendingMovies() {
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
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );

        if (!res.ok) throw new Error("Network response error");

        const data = await res.json();
        console.log(data.results.slice(0, 10));
        setTrendingMovies(data.results.slice(0, 10));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {trendingMovies.length === 0 ? (
        <p>No trending movies found</p>
      ) : (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              {movie.title}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchTrendingMovies;
