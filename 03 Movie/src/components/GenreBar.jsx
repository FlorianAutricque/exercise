import { useState, useEffect } from "react";
import styles from "./GenreBar.module.css";
import Button from "./Button";
import styles2 from "./Button.module.css";

function GenreBar({ onGenreSelect, handleShow, showSerie, showMovie }) {
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (onGenreSelect) {
      onGenreSelect(selectedGenre);
    }
    if (handleShow) {
      handleShow();
    }
  }, [selectedGenre, onGenreSelect, handleShow]);

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
  }

  return (
    <div>
      {showMovie && (
        <ul className={styles.containerGenreBar}>
          <Button type={"action"}>Action</Button>
          <Button type={"adventure"}>Adventure</Button>
          <Button type={"animation"}>Animation</Button>
          <Button type={"war"}>War</Button>
          <Button type={"drama"}>Drama</Button>
          <Button type={"thriller"}>Thriller</Button>
          <Button type={"sci-fi"}>Science Fiction</Button>
          <select
            className={`${styles2.button} ${styles.btnSelect}`}
            onChange={handleSelectChange}
            value={selectedGenre}
          >
            <option value="" disabled hidden>
              Select a Genre
            </option>
            <option value={35}>Comedy</option>
            <option value={80}>Crime</option>
            <option value={99}>Documentary</option>
            <option value={10751}>Family</option>
            <option value={14}>Fantasy</option>
            <option value={36}>History</option>
            <option value={27}>Horror</option>
            <option value={10402}>Music</option>
            <option value={9648}>Mystery</option>
            <option value={10749}>Romance</option>
            <option value={37}>Western</option>
          </select>
        </ul>
      )}

      {showSerie && (
        <ul className={styles.containerGenreBar}>
          <Button type={"Action & Adventure"}>Action & Adv.</Button>
          <Button type={"Animation"}>Animation</Button>
          <Button type={"Comedy"}>Comedy</Button>
          <Button type={"Crime"}>Crime</Button>
          <Button type={"Documentary"}>Documentary</Button>
          <Button type={"Drama"}>Drama</Button>
          <Button type={"Family"}>Family</Button>
          <select
            className={`${styles2.button} ${styles.btnSelect}`}
            onChange={handleSelectChange}
            value={selectedGenre}
          >
            <option value="" disabled hidden>
              Select a Genre
            </option>
            <option value={10762}>Kids</option>
            <option value={9648}>Mystery</option>
            <option value={10763}>News</option>
            <option value={10764}>Reality</option>
            <option value={10765}>Sci-Fi & Fantasy</option>
            <option value={10766}>Soap</option>
            <option value={10767}>Talk</option>
            <option value={10768}>War & Politics</option>
            <option value={37}>Western</option>
          </select>
        </ul>
      )}
    </div>
  );
}

export default GenreBar;
