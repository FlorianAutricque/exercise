export function getWatchlist() {
  const watchlistJSON = localStorage.getItem("watchlist");
  return watchlistJSON ? JSON.parse(watchlistJSON) : [];
}

export function addToWatchlist(movie) {
  const watchlist = getWatchlist();
  watchlist.push(movie);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

export function removeFromWatchlist(movieId) {
  const watchlist = getWatchlist();
  const updatedWatchlist = watchlist.filter(movie => movie.id !== movieId);
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
}

export function isInWatchlist(movieId) {
  const watchlist = getWatchlist();
  return watchlist.some(movie => movie.id === movieId);
}

export function addToWatchlistSerie(serie) {
  const watchlist = getWatchlist();
  watchlist.push(serie);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

export function removeFromWatchlistSerie(serieId) {
  const watchlist = getWatchlist();
  const updatedWatchlist = watchlist.filter(serie => serie.id !== serieId);
  localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
}

export function isInWatchlistSerie(serieId) {
  const watchlist = getWatchlist();
  return watchlist.some(serie => serie.id === serieId);
}
