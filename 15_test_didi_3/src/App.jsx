import { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");

  const x = Number.parseInt(Math.random() * 100);
  console.log(x);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://picsum.photos/id/${x}/200/300`);
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await res.url;
        setImage(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch</h1>

      <img src={image} alt="" />
    </div>
  );
}

export default App;
