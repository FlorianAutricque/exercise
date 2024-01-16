import FirstDay from "./FirstDay";
import RestOfWeek from "./RestOfWeek";

import styles from "./BottomPart.module.css";

function BottomPart({ weather }) {
  return (
    <div className={styles.mainContainerWeather}>
      <div className={styles.FirstDay}>
        <FirstDay weather={weather} />
      </div>
      <div className={styles.containerWeather}>
        <RestOfWeek weather={weather} />
      </div>
    </div>
  );
}

export default BottomPart;
