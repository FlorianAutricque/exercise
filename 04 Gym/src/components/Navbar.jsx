import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

import logo from "../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClick(link) {
    setClick(!click);
    setActiveLink(link);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerNavbar}>
          <Link onClick={scrollTop}>
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>

          <ul
            className={
              click
                ? `${styles.navMenuActive} ${styles.navMenu}`
                : styles.navMenu
            }
          >
            <li
              className={`${styles.navItem} ${
                activeLink === "welcome" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#welcome"
                className={styles.navLinks}
                onClick={() => handleClick("welcome")}
              >
                <p>Welcome</p>
              </HashLink>
            </li>

            <li
              className={`${styles.navItem} ${
                activeLink === "feedbacks" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#feedbacks"
                className={styles.navLinks}
                onClick={() => handleClick("feedbacks")}
              >
                <p>Feedbacks</p>
              </HashLink>
            </li>

            <li
              className={`${styles.navItem} ${
                activeLink === "prices" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#prices"
                className={styles.navLinks}
                onClick={() => handleClick("prices")}
              >
                <p>Prices</p>
              </HashLink>
            </li>

            <li
              className={`${styles.navItem} ${
                activeLink === "offers" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#offers"
                className={styles.navLinks}
                onClick={() => handleClick("offers")}
              >
                <p>Offers</p>
              </HashLink>
            </li>

            <li
              className={`${styles.navItem} ${
                activeLink === "bmi" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#bmi"
                className={styles.navLinks}
                onClick={() => handleClick("bmi")}
              >
                <p>BMI calculator</p>
              </HashLink>
            </li>
          </ul>

          <div className={styles.navIcon} onClick={() => setClick(!click)}>
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
