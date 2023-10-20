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
              <p>{FormatDay(weather.time[index])}</p>
              <p>{GetWeatherIcon(weather.weathercode[index], 30)}</p>
              <span>
                <p>{weather.temperature_2m_min[index]}°C -</p>
                <p>&nbsp;{max}°C</p>
              </span>
            </div>
          );
        })}
    </>
  );
}

export default RestOfWeek;
