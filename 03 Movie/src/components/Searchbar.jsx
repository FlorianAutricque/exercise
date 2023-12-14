import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Searchbar({ onSearch }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  function handleShow() {
    setShow(!show);
  }

  function handleChange(e) {
    e.preventDefault();
    navigate(`/searched-movies?query=${encodeURIComponent(value)}`);

    onSearch(value);
  }

  return (
    <div>
      {/* {show && (
        <button onClick={handleShow}>
          <FaSearch />
        </button>
      )} */}
      {/* {!show && ( */}

      <form onSubmit={handleChange}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {/* )} */}
    </div>
  );
}

export default Searchbar;
