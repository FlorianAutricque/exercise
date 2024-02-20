import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleNumberElement = document.getElementById("titleNumber");
      if (titleNumberElement) {
        const { top } = titleNumberElement.getBoundingClientRect();
        setIsSticky(top <= 0);

        const welcomeSection = document.getElementById("welcome");
        const feedbacksSection = document.getElementById("feedbacks");
        const pricesSection = document.getElementById("prices");
        const offersSection = document.getElementById("offers");
        const bmiSection = document.getElementById("bmi");
        const newsSection = document.getElementById("news");

        const sections = [
          welcomeSection,
          feedbacksSection,
          pricesSection,
          offersSection,
          bmiSection,
          newsSection,
        ];

        let activeLinkId = null;

        for (let i = 0; i < sections.length; i++) {
          if (
            sections[i] &&
            sections[i].offsetTop <= window.pageYOffset &&
            sections[i].offsetTop + sections[i].offsetHeight >
              window.pageYOffset
          ) {
            activeLinkId = sections[i].id;
            break;
          }
        }

        setActiveLink(activeLinkId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
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

            <li
              className={`${styles.navItem} ${
                activeLink === "news" ? styles.active : ""
              }`}
            >
              <HashLink
                smooth
                to="#news"
                className={styles.navLinks}
                onClick={() => handleClick("news")}
              >
                <p>News</p>
              </HashLink>
            </li>
          </ul>

          <div
            className={styles.navIcon}
            onClick={() => {
              setClick(!click);
              setActiveLink("");
            }}
          >
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
