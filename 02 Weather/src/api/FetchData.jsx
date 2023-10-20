import { useEffect, useState } from "react";
import FormatDay from "../helpers/FormatDay";
import GetWeatherIcon from "../helpers/GetWeatherIcon";

import styles from "../App.module.css";
import Input from "../components/Input";
import Image from "../components/Image";
import FirstDay from "../components/FirstDay";
import RestOfWeek from "../components/RestOfWeek";

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
            <Image isLoading={isLoading} images={images} />

            <div className={styles.mainContainerWeather}>
              <div className={styles.containerWeather}>
                <FirstDay weather={weather} />

                <RestOfWeek weather={weather} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
