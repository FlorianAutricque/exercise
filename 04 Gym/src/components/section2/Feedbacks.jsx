import TitleNumber from "../TitleNumber";
import CarouselFeedback from "./CarouselFeedback";
import styles from "./Feedbacks.module.css";

import "react-alice-carousel/lib/alice-carousel.css";

function Feedbacks() {
  return (
    <div id="feedbacks" className={styles.mainContainerFeedbacks}>
      <TitleNumber
        title={"OUR TESTIMONIALS"}
        message={"What Clients Say"}
        number={"02"}
      />

      <div className={styles.horizontalLine}></div>

      <CarouselFeedback />
    </div>
  );
}

export default Feedbacks;
