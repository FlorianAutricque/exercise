import { NavLink } from "react-router-dom";

import Searchbar from "./Searchbar";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.navbarItems}>
        <li>
          <NavLink to="/">Movie App</NavLink>
        </li>

        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>

        <li>
          <Searchbar />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
