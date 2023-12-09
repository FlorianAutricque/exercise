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

  function handleChange() {
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
      <>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleChange}>
          <FaSearch />
        </button>
      </>
      {/* )} */}
    </div>
  );
}

export default Searchbar;
