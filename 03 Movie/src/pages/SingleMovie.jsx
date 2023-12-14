// SingleMovie.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    // Fetch movie details using the id from the URL
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessKey}`,
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, accessKey]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          {/* Add other movie details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleMovie;
