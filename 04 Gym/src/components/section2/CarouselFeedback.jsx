import imageClient1 from "../../images/client/client1.jpg";
import imageClient2 from "../../images/client/client2.jpg";
import ClientFeedback from "./ClientFeedback";

import AliceCarousel from "react-alice-carousel";

import styles from "./CarouselFeedback.module.css";

import "react-alice-carousel/lib/alice-carousel.css";

function CarouselFeedback() {
  const responsive = {
    0: { items: 1 },
    750: { items: 2 },
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerFeedbacks}>
        <AliceCarousel responsive={responsive} disableButtonsControls>
          <ClientFeedback
            name={"William Chuck"}
            feedback={
              "Fantastic gym with top-notch equipment, knowledgeable trainers. Highly recommend for fitness enthusiasts!"
            }
            rating={5}
            image={imageClient1}
          />
          <ClientFeedback
            name={"Chris Bum"}
            feedback={
              "Excellent gym experience, friendly staff, modern facilities. Only improvement needed is more class variety."
            }
            rating={4}
            image={imageClient2}
          />
          <ClientFeedback
            name={"Chris Bum"}
            feedback={
              "Excellent gym experience, friendly staff, modern facilities. Only improvement needed is more class variety."
            }
            rating={4}
            image={imageClient2}
          />
          <ClientFeedback
            name={"Chris Bum"}
            feedback={
              "Excellent gym experience, friendly staff, modern facilities. Only improvement needed is more class variety."
            }
            rating={4}
            image={imageClient2}
          />
          <ClientFeedback
            name={"Chris Bum"}
            feedback={
              "Excellent gym experience, friendly staff, modern facilities. Only improvement needed is more class variety."
            }
            rating={4}
            image={imageClient2}
          />
        </AliceCarousel>
      </div>
    </div>
  );
}

export default CarouselFeedback;