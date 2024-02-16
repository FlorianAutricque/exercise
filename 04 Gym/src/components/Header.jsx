import headerImage from "../images/gymbanner.jpg";
import styles from "./Header.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.mainContainerHeader}>
      <div className={styles.imageContainer}>
        <img src={headerImage} alt="header" className={styles.imageHeader} />
      </div>
      <div className={styles.textHeader}>
        <h2 className={styles.titleHeader}>
          You Only Fail, If You Stop Trying
        </h2>
        <div className={styles.horizontalLine}></div>
        <p>
          Your ultimate fitness destination, <br />
          helping you achieve your goals effectively.
        </p>
      </div>
      <div className={styles.socialMedia}>
        <span>
          <Link to="/" className={styles.socialMediaLogo}>
            <FaFacebookSquare color="var(--color-text)" />
          </Link>
          <Link to="/" className={styles.socialMediaLogo}>
            <FaInstagramSquare color="var(--color-text)" />
          </Link>
          <Link to="/" className={styles.socialMediaLogo}>
            <FaXTwitter color="var(--color-text)" />
          </Link>
          <Link to="/" className={styles.socialMediaLogo}>
            <FaYoutube color="var(--color-text)" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
