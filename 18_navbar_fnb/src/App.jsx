import { useState } from "react";
import logo from "./img/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo fnb" />
        <div className="burger-wrapper">
          <div
            className={`burger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`container-nav ${isMenuOpen ? "show" : ""}`}>
        <div className="nav nav-left">
          <ul>
            <li>A propos</li>
            <li>Nos solutions</li>
            <li>Nos concepts</li>
          </ul>
        </div>

        <div className="nav nav-right">
          <ul>
            <li>Devenir Gérant licencié</li>
            <li>Recrutement</li>
            <li>Contact</li>
          </ul>
          <select
            className="lang-select"
            defaultValue="FR"
            aria-label="Choisir la langue"
          >
            <option value="FR">FR</option>
            <option value="EN">ENG</option>
            <option value="ESP">ESP</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default App;
