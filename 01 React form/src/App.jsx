import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
