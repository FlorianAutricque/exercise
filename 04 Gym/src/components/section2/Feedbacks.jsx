import TitleNumber from "../TitleNumber";
import CarouselFeedback from "./CarouselFeedback";
import styles from "./Feedbacks.module.css";

import gym1 from "../../images/gym1.jpg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Feedbacks() {
  const images = [gym1, gym1, gym1, gym1, gym1, gym1, gym1, gym1, gym1, gym1];

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

      <div className={styles.x}>
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
