import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Watchlist from "./pages/Watchlist";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

import SearchResultsPage from "./pages/SearchResultsPage";
import SingleMovie from "./pages/SingleMovie";
// import MovieDetailAfterSearch from "./pages/MovieDetailAfterSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="watchlist" element={<Watchlist />} />

          <Route path="searched-movies" element={<SearchResultsPage />} />

          <Route path="movie/:id" element={<SingleMovie />} />
          {/* <Route path="movie/:movieId" element={<MovieDetailAfterSearch />} /> */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
