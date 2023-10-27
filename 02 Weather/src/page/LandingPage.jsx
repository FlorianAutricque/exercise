import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";
import styles2 from "./LandingPage.module.css";

import image from "../img/landingPage.jpg";

function LandingPage({
  weather,
  setLocation,
  location,
  images,
  isLoading,
  onClick,
  onSubmitLocation,
}) {
  return (
    <div className={styles.mainContainer}>
      <div>
        <TopPart
          weather={weather}
          location={location}
          setLocation={setLocation}
          onSubmitLocation={onSubmitLocation}
        />
        <div className={styles.mainContainerImageWeather}>
          <div>
            <img
              src={image}
              alt="landing page image"
              className={styles2.imageLandingPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
