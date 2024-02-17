import styles from "./Welcome.module.css";
import Carousel from "./CarouselComponent.jsx";
import TitleNumber from "../TitleNumber.jsx";

function Welcome() {
  return (
    <div id="welcome" className={styles.mainContainer}>
      <div className={styles.containerFlex}>
        <div className={styles.container}>
          <div>
            <TitleNumber
              title={"ABOUT GYMRAT"}
              message={"Welcome to your Gym"}
              number={"01"}
            />
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
        <div className={styles.containerCarousel}>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
