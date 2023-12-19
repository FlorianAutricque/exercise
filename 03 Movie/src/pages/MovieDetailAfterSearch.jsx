// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MovieDetail() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         setLoading(true);

//         const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

//         const options = {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${accessKey}`,
//           },
//         };

//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//           options
//         );

//         if (!response.ok) {
//           throw new Error("Network response error");
//         }

//         const data = await response.json();

//         setMovie(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <>
//           <h2>{movie.title}</h2>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default MovieDetail;
