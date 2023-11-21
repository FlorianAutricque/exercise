import { useState } from "react";
import MainPage from "../page/MainPage";
import LandingPage from "../page/LandingPage";

function FetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [images, setImages] = useState([]);
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const [show, setShow] = useState(false);

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
      setLocation("");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchImages(location) {
    try {
      const query = location;

      const apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

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

  function onSubmitLocation(enteredLocation) {
    setLocation(enteredLocation);
    console.log("Location after setting:", location);

    setShow(true);
    fetchData();
  }

  return (
    <div>
      {show ? (
        <MainPage
          weather={weather}
          setLocation={setLocation}
          images={images}
          isLoading={isLoading}
          location={location}
          onSubmitLocation={onSubmitLocation}
        />
      ) : (
        <LandingPage
          location={location}
          setLocation={setLocation}
          onSubmitLocation={onSubmitLocation}
        />
      )}
    </div>
  );
}

export default FetchData;
