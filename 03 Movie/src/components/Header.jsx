import styles from "./Header.module.css";
import header from "../img/header.jpg";

function Header({ movie, isHomepage }) {
  return (
    <div className={`${styles.container} ${isHomepage && styles.homepage}`}>
      <div className={styles.overlay}></div>
      <img src={header} alt="header" className={styles.img} />
      {/* <h1 className={styles.text}>{movie.title}</h1> */}
    </div>
  );
}

export default Header;
