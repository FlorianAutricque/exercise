import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return (
    <button type="submit" onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
