import { useEffect, useState } from "react";
import FormatDay from "../helpers/FormatDay";
import GetWeatherIcon from "../helpers/GetWeatherIcon";

import styles from "../App.module.css";
import Input from "../components/Input";

function FetchData() {
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

      <Input location={location} setLocation={setLocation} />

      {isLoading && <p>Loading...</p>}
      <div className={styles.x}>
        <div className={styles.mainContainer}>
          <div className={styles.contentWrapper}>
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
                          <p>{GetWeatherIcon(weather.weathercode[0], 50)}</p>

                          <div className={styles.firstDayDateTemp}>
                            <p> {FormatDay(weather.time[0])}</p>
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
                        <p>{FormatDay(weather.time[index])}</p>
                        <p>{GetWeatherIcon(weather.weathercode[index], 30)}</p>
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
    </div>
  );
}

export default FetchData;
