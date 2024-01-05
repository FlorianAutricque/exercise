import RingLoader from "react-spinners/ClipLoader";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.container}>
      <RingLoader color="#C73534" />
    </div>
  );
}

export default Spinner;
