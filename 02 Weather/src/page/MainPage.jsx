import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";
import Spinner from "../components/Spinner";

function MainPage({
  weather,
  setLocation,
  images,
  isLoading,
  location,
  onSubmitLocation,
}) {
  return (
    <div className={styles.mainContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.x}>
          <TopPart
            weather={weather}
            location={location}
            setLocation={setLocation}
            onSubmitLocation={onSubmitLocation}
          />
          <div className={styles.mainContainerImageWeather}>
            <div>
              <Image
                className={styles.image}
                isLoading={isLoading}
                images={images}
              />
            </div>

            {location ? (
              <BottomPart weather={weather} />
            ) : (
              <p className={styles.containerError}>
                Location not found, try another one
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
