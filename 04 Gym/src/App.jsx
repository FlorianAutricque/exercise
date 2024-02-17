import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "./components/section1/Welcome";
import Feedbacks from "./components/section2/Feedbacks";
import Prices from "./components/section3/Prices";
import Offers from "./components/section4/Offers";
import Header from "./components/Header";
import CalculateBMI from "./components/section5/CalculateBMI";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Welcome />
        <Feedbacks />
        <Prices />
        <Offers />
        <CalculateBMI />
        <Footer />
      </Router>
    </>
  );
}

export default App;
