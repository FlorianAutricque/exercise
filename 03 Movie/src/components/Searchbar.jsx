import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Searchbar.module.css";
import { IoSearch } from "react-icons/io5";

function Searchbar({ onSearch, mediaType }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();

    {
      value
        ? mediaType === "movie"
          ? navigate(`/searched-movies?query=${encodeURIComponent(value)}`)
          : navigate(`/searched-series?query=${encodeURIComponent(value)}`)
        : !navigate;
    }
    onSearch(value);
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <>
          <div className={styles.searchbox}>
            <button type="submit" className={styles.btnSearch}>
              <i>
                <IoSearch className={styles.searchIcon} />
              </i>
            </button>
            <input
              type="text"
              className={styles.inputSearch}
              placeholder={`Search a ${
                mediaType === "tv" ? "Serie" : "Movie"
              }...`}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </>
      </form>
    </div>
  );
}

export default Searchbar;
