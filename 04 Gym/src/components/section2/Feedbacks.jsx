import TitleNumber from "../TitleNumber";
import CarouselFeedback from "./CarouselFeedback";
import styles from "./Feedbacks.module.css";

import gym1 from "../../images/gym1.jpg";
import gym2 from "../../images/gym2.jpg";
import gym3 from "../../images/gym3.jpg";
import gym4 from "../../images/gym4.jpg";
import gym5 from "../../images/gym5.jpg";
import gym6 from "../../images/gym6.jpg";
import gym7 from "../../images/gym7.jpg";
import gym8 from "../../images/gym8.jpg";
import gym9 from "../../images/gym9.jpg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Feedbacks() {
  const images = [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8, gym9];

  const responsive = {
    0: { items: 2 },
    390: { items: 2 },
    550: { items: 3 },
    750: { items: 5 },
  };

  return (
    <div id="feedbacks" className={styles.mainContainerFeedbacks}>
      <TitleNumber
        title={"OUR TESTIMONIALS"}
        message={"What Clients Say"}
        number={"02"}
      />

      <div className={styles.horizontalLine}></div>

      <CarouselFeedback />

      <div className={styles.containerImageGym}>
        <AliceCarousel
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          autoPlay
          infinite
          autoPlayInterval={5000}
        >
          {images.map((image, index) => (
            <img src={image} key={index + 1} className={styles.imageGym} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Feedbacks;
