import FormatDay from "../helpers/FormatDay";
import GetWeatherIcon from "../helpers/GetWeatherIcon";

import styles from "./RestOfWeek.module.css";

function RestOfWeek({ weather }) {
  return (
    <>
      {weather &&
        weather.temperature_2m_max &&
        weather.weathercode &&
        weather.temperature_2m_min &&
        weather.temperature_2m_max.map((max, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <div key={index} className={styles.containerEachDay}>
              <div className={styles.day}>
                {FormatDay(weather.time[index]).toUpperCase()}
              </div>

              <div>
                <div className={styles.iconTemp}>
                  <p>{GetWeatherIcon(weather.weathercode[index], 50)}</p>
                  <span>
                    <p>{Math.round(weather.temperature_2m_min[index])}°C -</p>
                    <p>&nbsp;{Math.round(max)}°C</p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default RestOfWeek;
