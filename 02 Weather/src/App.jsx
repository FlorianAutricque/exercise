import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

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

          const { latitude, longitude, timezone } = data.results.at(0);

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timezone}`
          );

          const weatherData = await weatherRes.json();

          setWeather(weatherData.daily);
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

  // const { time, temperature_2m_max, temperature_2m_min, weathercode } = weather;

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
          <>
            <p key={index}>
              Max Temperature for {weather.time[index]}: {max}°C
            </p>
            <p>
              WC:
              {weather.weathercode[index]}
            </p>
            <p>min: {weather.temperature_2m_min[index]}C</p>
          </>
        ))}
    </div>
  );
}

export default App;
