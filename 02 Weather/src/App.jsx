import { useEffect, useState } from "react";
import styles from "./App.module.css";

import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiDaySunnyOvercast,
} from "react-icons/wi";

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    weekday: "short",
  }).format(new Date(dateStr));
}

function getWeatherIcon(wmoCode, size) {
  const icons = new Map([
    [[0], <WiDaySunny size={size} color="#bd5252" key="sunny" />],
    [[1, 2], <WiDaySunnyOvercast size={size} color="#bd5252" key="suncloud" />],
    [[3], <WiCloud size={size} color="#bd5252" key="cloud" />],
    [
      [45, 48, 51, 56, 61, 66, 80],
      <WiCloud size={size} color="#bd5252" key="clorainunny" />,
    ],
    [
      [53, 55, 63, 65, 57, 67, 81, 82],
      <WiRain size={size} color="#bd5252" key="rain" />,
    ],
    [
      [71, 73, 75, 77, 85, 86],
      <WiRain size={size} color="#bd5252" key="rain" />,
    ],
    [[95, 96, 99], <WiThunderstorm size={size} color="#bd5252" key="storm" />],
  ]);

  const arr = [...icons.keys()].find(key => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";

  return icons.get(arr);
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [images, setImages] = useState([]);
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        if (location.length >= 4) {
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
          );
          const data = await res.json();

          if (!data.results) throw new Error("Location not found");

          const { latitude, longitude, timezone } = data.results[0];

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timezone}`
          );

          const weatherData = await weatherRes.json();

          setWeather(weatherData.daily);

          fetchImages(location);
        } else {
          setWeather({});
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [location]);

  async function fetchImages(location) {
    try {
      // const query = location;
      const query = "paris";
      const apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setImages(data.results);
      } else {
        console.error("Error fetching images:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>Weather {location.charAt(0).toUpperCase() + location.slice(1)}</h1>

      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}

      <div className={styles.x}>
        <div className={styles.mainContainer}>
          {isLoading ? (
            <p>Loading...</p>
          ) : images.length > 0 ? (
            <img src={images[0].urls.regular} alt={images[0].description} />
          ) : (
            <p>No images found.</p>
          )}

          <div className={styles.mainContainerWeather}>
            <div className={styles.containerWeather}>
              <div>
                {weather &&
                  weather.temperature_2m_max &&
                  weather.weathercode &&
                  weather.temperature_2m_min && (
                    <div key={0} className={styles.containerFirstDay}>
                      {/* <p className={styles.today}>Today:</p> */}
                      <div className={styles.firstDay}>
                        <p>WC: {getWeatherIcon(weather.weathercode[0], 50)}</p>
                        <div className={styles.firstDayDateTemp}>
                          <p> {formatDay(weather.time[0])}</p>
                          <span>
                            <p> {weather.temperature_2m_min[0]}°C - </p>
                            <p>&nbsp;{weather.temperature_2m_max[0]}°C</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
              </div>

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
                      <p>{formatDay(weather.time[index])}</p>
                      <p>
                        WC: {getWeatherIcon(weather.weathercode[index], 30)}
                      </p>
                      <span>
                        <p>{weather.temperature_2m_min[index]}°C -</p>
                        <p>&nbsp;{max}°C</p>
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
