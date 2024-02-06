import styles from "./TitleNumber.module.css";

function TitleNumber({ title, message, number }) {
  return (
    <div className={styles.titleNumberContainer}>
      <div className={styles.textAboveNumber}>
        <p className={styles.title}>{title}</p>
        <h2>{message}</h2>
      </div>
      <div className={styles.number}>{number}</div>
    </div>
  );
}

export default TitleNumber;
