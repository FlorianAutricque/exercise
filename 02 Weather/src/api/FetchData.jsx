import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import MainPage from "../page/MainPage";
import LandingPage from "../page/LandingPage";

function FetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [images, setImages] = useState([]);
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const [show, setShow] = useState(false);

  function onSubmitLocation(enteredLocation) {
    setLocation(enteredLocation);
    setShow(true);
  }

  // function handleShow() {
  //   setShow(show => !show);
  // }
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

  return (
    <div>
      {/* {isLoading && <Spinner />} */}

      {show ? (
        <MainPage
          weather={weather}
          setLocation={setLocation}
          images={images}
          // isLoading={isLoading}
          location={location}
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
