import styles from "./Title.module.css";

function Title({ location }) {
  return (
    location && (
      <p className={styles.title}>
        Weather in {location.charAt(0).toUpperCase() + location.slice(1)}
      </p>
    )
  );
}

export default Title;
