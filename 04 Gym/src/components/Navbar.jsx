import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerNavbar}>
          <Link onClick={scrollTop} className={styles.logo}>
            GymRat
          </Link>

          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItem}>
              <HashLink
                smooth
                to="#welcome"
                activeClassName="active"
                className={styles.navLinks}
                onClick={handleClick}
              >
                <p>Welcome</p>
              </HashLink>
            </li>

            <li className={styles.navItem}>
              <HashLink
                smooth
                to="#feedbacks"
                activeClassName="active"
                className={styles.navLinks}
                onClick={handleClick}
              >
                <p>Feedbacks</p>
              </HashLink>
            </li>

            <li className={styles.navItem}>
              <HashLink
                smooth
                to="#prices"
                activeClassName="active"
                className={styles.navLinks}
                onClick={handleClick}
              >
                <p>Prices</p>
              </HashLink>
            </li>

            <li className={styles.navItem}>
              <HashLink
                smooth
                to="#offers"
                activeClassName="active"
                className={styles.navLinks}
                onClick={handleClick}
              >
                <p>Offers</p>
              </HashLink>
            </li>
          </ul>

          <div className={styles.navIcon} onClick={handleClick}>
            {click ? (
              <span className="icon">
                <FaTimes />{" "}
              </span>
            ) : (
              <span className="icon">
                <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
