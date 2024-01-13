import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import SearchbarTop from "./SearchbarTop.jsx";

import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(show => !show);
  }

  function removeActive() {
    setShow(false);
  }

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <div className={styles.logo}>
          <NavLink to="/" onClick={removeActive}>
            <img
              src="https://fontmeme.com/permalink/231214/21f2ad003e9fee319bec8b6434772889.png"
              alt="netflix-font"
              border="0"
            />
          </NavLink>
        </div>

        <div
          className={`${styles.hamburgerMenu} ${show ? styles.active : ""}`}
          onClick={handleShow}
        >
          {show ? <FaTimes color="#C73534" /> : <FaBars color="#C73534" />}
        </div>

        <div
          className={`${styles.responsiveContent} ${show ? styles.active : ""}`}
        >
          <div className={styles.watchlist}>
            <NavLink to="/watchlist" onClick={removeActive}>
              Watchlist
            </NavLink>
          </div>
          <div>
            <SearchbarTop onSearch={() => {}} onSubmit={removeActive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
