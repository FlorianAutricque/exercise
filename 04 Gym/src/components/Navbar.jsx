import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.containerNavbar}>
      <Link onClick={scrollTop} className={styles.logo}>
        GymRat
      </Link>
      <div className={styles.containerLinks}>
        <HashLink smooth to="#welcome">
          <p>Welcome</p>
        </HashLink>
        <HashLink smooth to="#feedbacks">
          <p>Feedbacks</p>
        </HashLink>
        <HashLink smooth to="#prices">
          <p>Prices</p>
        </HashLink>
        <HashLink smooth to="#offers">
          <p>Offers</p>
        </HashLink>
      </div>
    </div>
  );
}

export default Navbar;
