import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";
import styles2 from "../components/Image.module.css";

import image from "../img/landingPage.jpg";

function LandingPage({
  weather,
  setLocation,
  location,
  images,
  isLoading,
  onClick,
}) {
  return (
    <div className={styles.mainContainer}>
      <button onClick={onClick}>button</button>
      <div>
        <TopPart
          weather={weather}
          location={location}
          setLocation={setLocation}
        />
        <div className={styles.mainContainerImageWeather}>
          <div>
            <img
              src={image}
              alt="landing page image"
              className={styles2.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
