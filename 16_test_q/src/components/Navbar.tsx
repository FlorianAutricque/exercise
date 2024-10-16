import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.mainContainerNavbar}>
      <NavLink to="/">
        <div>LOGO</div>
      </NavLink>

      <ul className={`${styles.containerLinks} ${show ? styles.showMenu : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={handleClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            onClick={handleClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/not-completed"
            onClick={handleClick}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Not completed
          </NavLink>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={handleClick}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
