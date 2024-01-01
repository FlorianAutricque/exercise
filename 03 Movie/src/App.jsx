import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Watchlist from "./pages/Watchlist";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

import SingleMovie from "./pages/SingleMovie";
import SingleSerie from "./pages/SingleSerie";
import Footer from "./components/Footer";
import SearchResultsPageMovie from "./pages/SearchResultsPageMovie";
import SearchResultsPageSerie from "./pages/SearchResultsPageSerie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="watchlist" element={<Watchlist />} />

          <Route path="searched-movies" element={<SearchResultsPageMovie />} />
          <Route path="searched-series" element={<SearchResultsPageSerie />} />

          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="serie/:id" element={<SingleSerie />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
