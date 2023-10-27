import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";

function MainPage({
  weather,
  setLocation,
  images,
  isLoading,
  location,
  onClick,
}) {
  return (
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
  );
}

export default MainPage;
