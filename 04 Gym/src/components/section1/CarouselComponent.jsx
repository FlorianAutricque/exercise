import { Carousel } from "react-responsive-carousel";
import gym1 from "../../images/gym1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./CarouselComponent.module.css";

function CarouselComponent() {
  const images = [gym1, gym1, gym1];
  return (
    <div className={styles.container}>
      <Carousel useKeyboardArrows={true}>
        {images.map(image => (
          <img src={image} key="image" />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
