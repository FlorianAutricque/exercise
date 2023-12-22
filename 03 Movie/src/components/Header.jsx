import styles from "./Header.module.css";
import header from "../img/header.jpg";

function Header({ isHomepage }) {
  return (
    <div className={`${styles.container} ${isHomepage && styles.homepage}`}>
      <div className={styles.overlay}></div>
      <img src={header} alt="header" className={styles.img} />
    </div>
  );
}

export default Header;
