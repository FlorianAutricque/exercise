import imageClient1 from "../../images/client/client1.webp";
import imageClient2 from "../../images/client/client2.webp";
import imageClient3 from "../../images/client/client3.webp";
import imageClient4 from "../../images/client/client4.webp";
import imageClient5 from "../../images/client/client5.webp";
import imageClient6 from "../../images/client/client6.webp";
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
            name={"Jay Culter"}
            feedback={
              "Friendly staff, motivating atmosphere, top-notch equipment, exceeded expectations!"
            }
            rating={5}
            image={imageClient3}
          />
          <ClientFeedback
            name={"Arnold Scwarzy"}
            feedback={
              "Clean facilities, knowledgeable trainers, convenient location, highly recommend this gym!."
            }
            rating={4}
            image={imageClient4}
          />
          <ClientFeedback
            name={"Kylian Mbappe"}
            feedback={
              "Great variety of classes, supportive community, fantastic results, love it!"
            }
            rating={4}
            image={imageClient5}
          />
          <ClientFeedback
            name={"Ronnie Coleman"}
            feedback={
              "Professional instructors, welcoming environment, effective workout plans, exceptional gym experience!"
            }
            rating={4}
            image={imageClient6}
          />
        </AliceCarousel>
      </div>
    </div>
  );
}

export default CarouselFeedback;
