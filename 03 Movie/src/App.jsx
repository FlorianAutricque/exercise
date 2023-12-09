import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Watchlist from "./pages/Watchlist";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import MovieSearchContainer from "./pages/MovieSearchContainer";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="watchlist" element={<Watchlist />} />

          <Route path="searched-movies" element={<SearchResultsPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
