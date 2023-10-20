function Input({ location, setLocation }) {
  return (
    <input
      type="text"
      value={location}
      onChange={e => setLocation(e.target.value)}
    />
  );
}

export default Input;
