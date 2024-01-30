import headerImage from "../images/gym1.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={headerImage} alt="header" className={styles.imageHeader} />
      </div>
    </div>
  );
}

export default Header;
