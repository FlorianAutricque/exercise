import styles from "./Input.module.css";

function Input({ location, setLocation }) {
  return (
    <input
      type="text"
      // value={location}
      onChange={e => setLocation(e.target.value)}
      placeholder="Enter location"
      className={styles.input}
    />
  );
}

export default Input;
