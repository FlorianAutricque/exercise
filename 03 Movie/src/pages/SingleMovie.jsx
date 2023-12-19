import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormatDay from "../helpers/FormatDay";
import VoteAverage from "../components/VoteAverage";
import FetchMoviesGenre from "../api/FetchMoviesGenre";

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { addToWatchlist, removeFromWatchlist } from "../helpers/WatchlistUtils";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [add, setAdd] = useState(true);

  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  function handleAddWatchlist() {
    if (add === true) {
      addToWatchlist(movie);
      alert("added");
    } else {
      removeFromWatchlist(movie);
      alert("removed");
    }

    setAdd(add => !add);
  }

  useEffect(() => {
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
        console.log(data);
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
          <h2>{movie.title} hello</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>{FormatDay(movie.release_date)}</p>
          <VoteAverage movie={movie} />
          {movie.genres && movie.genres.length > 0 ? (
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          ) : movie.genre ? (
            <p>{movie.genre.name}</p>
          ) : (
            <p>No genre information available</p>
          )}

          <p>Movies with the same genre</p>
          {movie.genres && movie.genres.length > 0 ? (
            movie.genres.map(genre => (
              <>
                <FetchMoviesGenre key={genre.id} x={genre.id} />
              </>
            ))
          ) : movie.genre ? (
            <FetchMoviesGenre x={movie.genre.id} />
          ) : (
            <p>No genre information available</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {add ? (
        <button onClick={handleAddWatchlist}>
          <BsBookmarkPlus size={30} color="white" />
        </button>
      ) : (
        <button onClick={handleAddWatchlist}>
          <BsBookmarkCheck size={30} color="white" />
        </button>
      )}
    </div>
  );
}

export default SingleMovie;
