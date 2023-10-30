import Image from "../components/Image";
import TopPart from "../components/TopPart";
import BottomPart from "../components/BottomPart";

import styles from "./MainPage.module.css";
import styles2 from "./LandingPage.module.css";

import image from "../img/landingPage.jpg";
import Input from "../components/Input";

function LandingPage({
  weather,
  setLocation,
  location,
  images,
  isLoading,
  onClick,
  onSubmitLocation,
}) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmitLocation(location);
  }

  return (
    <div className={styles.mainContainer}>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Enter location"
            className={styles.input}
          />
        </form>
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
