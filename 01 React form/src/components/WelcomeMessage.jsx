import styles from "./WelcomeMessage.module.css";

function WelcomeMessage({ onClick }) {
  return (
    <div className={styles.sucessMessageLogin}>
      <p>WELCOME!</p>
      <button onClick={onClick} className={styles.buttonGoBack}>
        Go back
      </button>
    </div>
  );
}

export default WelcomeMessage;
