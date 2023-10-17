import styles from "./BackgroundStars.module.css";

function BackgroundStars() {
  return (
    <>
      <div className={`${styles.space} ${styles.stars1}`}></div>
      <div className={`${styles.space} ${styles.stars2}`}></div>
      <div className={`${styles.space} ${styles.stars3}`}></div>
      <div className={`${styles.space} ${styles.stars4}`}></div>
    </>
  );
}

export default BackgroundStars;
