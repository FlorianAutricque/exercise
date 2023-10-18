import { useState } from "react";

function App() {
  const [isLoading, setIsloading] = useState(false);
  const [location, setLocation] = useState("");

  // async function fetch() {
  //   try {
  //     setIsloading(true);
  //     const res = await fetch(
  //       `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
  //     );
  //     const data = res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsloading(false);
  //   }
  // }
  // fetch();
  console.log(location);

  return (
    <div>
      <h1>Weather {location}</h1>
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
    </div>
  );
}

export default App;
