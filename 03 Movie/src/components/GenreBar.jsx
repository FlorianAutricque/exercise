import styles from "./GenreBar.module.css";
import Button from "./Button";

function GenreBar() {
  return (
    <div>
      <ul className={styles.containerGenreBar}>
        <Button type={"action"}>Action</Button>
        <Button type={"adventure"}>Adventure</Button>
        <Button type={"animation"}>Animation</Button>
        <Button type={"war"}>War</Button>
      </ul>
    </div>
  );
}

export default GenreBar;
