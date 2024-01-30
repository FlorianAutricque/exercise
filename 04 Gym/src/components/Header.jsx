import headerImage from "../images/gym1.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.mainContainerHeader}>
      <div className={styles.imageContainer}>
        <img src={headerImage} alt="header" className={styles.imageHeader} />
      </div>
      <div className={styles.textHeader}>
        <h2>
          You Only Fail, <br /> If You Stop
          <br /> Trying
        </h2>
        <p>
          jvnrei fweeinfewiun <br />
          fweoejnfwein
          <br /> woieijefnewoifn
        </p>
      </div>
    </div>
  );
}

export default Header;
