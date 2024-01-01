import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Watchlist from "./pages/Watchlist";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

import SearchResultsPage from "./pages/SearchResultsPage";
import SingleMovie from "./pages/SingleMovie";
import SingleSerie from "./pages/SingleSerie";
import Footer from "./components/Footer";

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
          <Route path="serie/:id" element={<SingleSerie />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
