import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.mainContainerNavbar}>
      <ul className={styles.containerLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.linkBorderHome} ${
                isActive ? styles.activeLinkBorder : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `${styles.linkBorderDone} ${
                isActive ? styles.activeLinkBorder : ""
              }`
            }
          >
            Done
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/not-completed"
            className={({ isActive }) =>
              `${styles.linkBorderNotDone} ${
                isActive ? styles.activeLinkBorder : ""
              }`
            }
          >
            Not Done
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
