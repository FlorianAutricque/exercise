import FormatDay from "../helpers/FormatDay";
import GetWeatherIcon from "../helpers/GetWeatherIcon";

import styles from "./FirstDay.module.css";

function FirstDay({ weather }) {
  return (
    <div>
      {weather &&
        weather.temperature_2m_max &&
        weather.weathercode &&
        weather.temperature_2m_min && (
          <div key={0} className={styles.containerFirstDay}>
            {/* <p className={styles.today}>Today:</p> */}
            <div className={styles.firstDay}>
              <p>{GetWeatherIcon(weather.weathercode[0], 50)}</p>

              <div className={styles.firstDayDateTemp}>
                <p className={styles.day}>
                  {FormatDay(weather.time[0]).toUpperCase()}
                </p>
                <span>
                  <p> {Math.round(weather.temperature_2m_min[0])}°C - </p>
                  <p>&nbsp;{Math.round(weather.temperature_2m_max[0])}°C</p>
                </span>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default FirstDay;
