import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";
import Spinner from "../components/Spinner";

function MainPage({ weather, setLocation, images, isLoading, location }) {
  return (
    <div className={styles.mainContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </div>
  );
}

export default MainPage;
