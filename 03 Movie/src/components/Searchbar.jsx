// Searchbar.js
import { useState } from "react";

function Searchbar({ onSearch }) {
  const [value, setValue] = useState("");

  function handleChange() {
    onSearch(value);
    console.log(value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></input>
      <button onClick={handleChange}>Search</button>
    </div>
  );
}

export default Searchbar;
