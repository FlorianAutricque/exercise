import styles from "./MainPage.module.css";
import styles2 from "./LandingPage.module.css";

import image from "../img/landingPage.jpg";

function LandingPage({ setLocation, location, onSubmitLocation }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmitLocation(location);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles2.container}>
        <div className={styles2.imageContainer}>
          <img
            src={image}
            alt="landing page image"
            className={styles2.imageLandingPage}
          />

          <form onSubmit={handleFormSubmit} className={styles2.inputForm}>
            <p>Check the weather, anywhere in the world!</p>
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Enter location"
              className={styles2.input}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
