import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.mainContainerNavbar}>
      <ul className={styles.containerLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.linkBorder}>
          <NavLink
            to="/completed"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Done
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/not-completed"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Not Done
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
