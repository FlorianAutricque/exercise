import TitleNumber from "../TitleNumber";
import styles from "./Feedbacks.module.css";

import imageClient1 from "../../images/client/client1.jpg";
import imageClient2 from "../../images/client/client2.jpg";
import ClientFeedback from "./ClientFeedback";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Feedbacks() {
  const responsive = {
    0: { items: 1 },
    750: { items: 2 },
  };
  return (
    <div id="feedbacks" className={styles.mainContainerFeedbacks}>
      <TitleNumber
        title={"OUR TESTIMONIALS"}
        message={"What Clients Say"}
        number={"02"}
      />

      <div className={styles.horizontalLine}></div>

      <div className={styles.x}>
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
    </div>
  );
}

export default Feedbacks;
