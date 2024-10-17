import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CompletedPage from "./pages/CompletedPage";
import NotCompletedPage from "./pages/NotCompletedPage";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { Todo } from "./types/Types";
import { Toaster } from "react-hot-toast";

function App() {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <Homepage
                data={data}
                setData={setData}
                error={error}
                setError={setError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <CompletedPage
                data={data}
                setData={setData}
                error={error}
                setError={setError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/not-completed"
            element={
              <NotCompletedPage
                data={data}
                setData={setData}
                error={error}
                setError={setError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
