import { useState, useEffect } from "react";

function CityImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const query = "montreal";
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setImages(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>City Images</h1>
      {loading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <img src={images[0].urls.small} alt={images[0].description} />
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
}

export default CityImages;
