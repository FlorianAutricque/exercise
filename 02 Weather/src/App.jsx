import { useEffect, useState } from "react";

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

          console.log(weatherData);
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
      <h1>Weather {location}</h1>
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}

      {weather &&
        weather.temperature_2m_max &&
        weather.weathercode &&
        weather.temperature_2m_min &&
        weather.temperature_2m_max.map((max, index) => (
          <div key={index}>
            <p>
              Max Temperature for {weather.time[index]}: {max}°C
            </p>
            <p>WC: {weather.weathercode[index]}</p>
            <p>min: {weather.temperature_2m_min[index]}C</p>
          </div>
        ))}

      <h1>City Images</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <img src={images[0].urls.small} alt={images[0].description} />
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}

export default App;
