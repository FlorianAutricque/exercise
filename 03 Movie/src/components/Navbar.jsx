import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import SearchbarTop from "./SearchbarTop";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarItems}>
        <li className={styles.logo}>
          <NavLink to="/">
            <img
              src="https://fontmeme.com/permalink/231214/21f2ad003e9fee319bec8b6434772889.png"
              alt="netflix-font"
              border="0"
            />
          </NavLink>
        </li>

        <div className={styles.navbarSearchWatchlist}>
          <li className={styles.watchlist}>
            <NavLink to="/watchlist">Watchlist</NavLink>
          </li>

          <li>
            <SearchbarTop />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
