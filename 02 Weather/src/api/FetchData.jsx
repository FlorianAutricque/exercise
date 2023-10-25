import { useEffect, useState } from "react";

import styles from "./FetchData.module.css";

import Image from "../components/Image";
import FirstDay from "../components/FirstDay";
import RestOfWeek from "../components/RestOfWeek";

import Spinner from "../components/Spinner";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

function FetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("paris");
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
      const query = location;
      // const query = "new y";
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
      {isLoading && <Spinner />}

      <div className={styles.mainContainer}>
        <div>
          <TopPart
            weather={weather}
            location={location}
            setLocation={setLocation}
          />
          <div className={styles.mainContainerImageWeather}>
            <div>
              <Image
                className={styles.image}
                isLoading={isLoading}
                images={images}
              />
            </div>

            <BottomPart weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
