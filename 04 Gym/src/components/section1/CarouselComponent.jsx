import { Carousel } from "react-responsive-carousel";
import gym11 from "../../images/gym11.webp";
import gym22 from "../../images/gym22.webp";
import gym33 from "../../images/gym33.webp";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./CarouselComponent.module.css";

function CarouselComponent() {
  const images = [gym11, gym22, gym33];

  return (
    <div className={styles.container}>
      <Carousel
        useKeyboardArrows={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {images.map(image => (
          <img src={image} key="image" />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
