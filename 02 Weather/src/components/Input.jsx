import styles from "./Input.module.css";

function Input({ location, setLocation, onSubmitLocation }) {
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmitLocation(location);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter location"
        className={styles.input}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
