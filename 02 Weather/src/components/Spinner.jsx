import { ProgressBar } from "react-loader-spinner";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#364156cc"
        barColor="#fbfbfb"
      />
    </div>
  );
}

export default Spinner;
