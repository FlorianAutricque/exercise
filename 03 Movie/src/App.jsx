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
import SearchResultsPageAll from "./pages/SearchResultsPageAll";

import { Toaster } from "react-hot-toast";

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
          <Route path="searched-all" element={<SearchResultsPageAll />} />

          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="serie/:id" element={<SingleSerie />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}

export default App;
