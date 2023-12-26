import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";

import VoteAverage from "./VoteAverage";
import AddSerieWatchlist from "./AddSerieWatchlist";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  }
  return str;
}

function SerieCard({ serie, watchlist }) {
  const truncatedTitle = truncateString(serie.name, 21);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.movieCardContainer}>
      <>
        <div className={`${styles.containerMovie}`}>
          <NavLink key={serie.id} to={`/serie/${serie.id}`}>
            <div onClick={handleClick}>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
              />
              <p key={truncatedTitle}>{truncatedTitle}</p>
            </div>
          </NavLink>
          <div className={styles.cardBelow}>
            <span className={styles.dateRatingAdd}>
              {serie.first_air_date
                ? serie.first_air_date.slice(0, 4)
                : "No date"}

              <div className={styles.dateRatingAdd}>
                {watchlist ? "" : <AddSerieWatchlist serie={serie} size={14} />}
                &nbsp; &nbsp;
                <VoteAverage serie={serie} />
              </div>
            </span>
          </div>{" "}
        </div>
      </>
    </div>
  );
}

export default SerieCard;

// {watchlist ? (
//   <>
//     <div className={`${styles.containerMovie}`}>
//       {/* <NavLink key={movie.id} to={`/movie/${movie.id}`}> */}
//       <li key={serie.id}>
//         <div onClick={handleClick}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
//             alt={serie.name}
//           />
//           <p key={truncatedTitle}>{truncatedTitle}</p>
//         </div>
//       </li>
//       {/* </NavLink> */}
//       <div className={styles.cardBelow}>
//         <span className={styles.dateRatingAdd}>
//           {movie.release_date ? movie.release_date.slice(0, 4) : ""}

//           <div className={styles.dateRatingAdd}>
//             {watchlist ? (
//               ""
//             ) : (
//               <AddMovieWatchlist serie={serie} size={14} />
//             )}
//             &nbsp; &nbsp;
//             <VoteAverage movie={movie} />
//           </div>
//         </span>
//       </div>
//     </div>
//   </>
// ) : (
//   <>
//     <NavLink key={serie.id} to={`/movie/${s.id}`}>
//       <li key={movie.id}>
//         <div onClick={handleClick}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <p key={truncatedTitle}>{truncatedTitle}</p>
//         </div>
//       </li>
//     </NavLink>
//     <div className={styles.cardBelow}>
//       <span className={styles.dateRatingAdd}>
//         {movie.release_date ? movie.release_date.slice(0, 4) : ""}

//         <div className={styles.dateRatingAdd}>
//           {watchlist ? "" : <AddMovieWatchlist movie={movie} size={14} />}
//           &nbsp; &nbsp;
//           <VoteAverage movie={movie} />
//         </div>
//       </span>
//     </div>
//   </>
// )}
