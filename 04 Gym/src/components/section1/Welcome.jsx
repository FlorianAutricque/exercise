import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div id="welcome" className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <div className={styles.textAboveNumber}>
            <p className={styles.aboutGymrat}>ABOUT GYMRAT</p>
            <h2>Welcome to your Gym</h2>
          </div>
          <p className={styles.number}>01</p>
        </div>

        <div className={styles.horizontalLine}></div>

        <p className={styles.welcomeMessage}>
          Welcome to GymRat: Elevate your fitness journey with us. Sweat,
          Achieve, Repeat!
        </p>

        <p>
          Step into GymRat, where fitness dreams come to life. Our
          state-of-the-art facility welcomes you to a world of health and
          strength. From cutting-edge equipment to expert guidance, we are
          committed to sculpting the best version of you. <br />
          <br /> Join us on this exhilarating journey toward a healthier,
          fitter, and happier lifestyle.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
