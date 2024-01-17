import styles from "./Input.module.css";

function Input({ location, setLocation, onSubmitLocation }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmitLocation(location);
  }
  return (
    <form onSubmit={handleFormSubmit} className={styles.x}>
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter location"
        className={styles.input}
      />
    </form>
  );
}

export default Input;
