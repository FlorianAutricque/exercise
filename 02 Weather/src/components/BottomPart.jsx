import FirstDay from "./FirstDay";
import RestOfWeek from "./RestOfWeek";

import styles from "./BottomPart.module.css";

function BottomPart({ weather }) {
  return (
    <div className={styles.containerWeather}>
      <FirstDay weather={weather} />

      <RestOfWeek weather={weather} />
    </div>
  );
}

export default BottomPart;
