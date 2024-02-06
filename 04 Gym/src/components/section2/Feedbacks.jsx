import TitleNumber from "../TitleNumber";
import styles from "./Feedbacks.module.css";

import imageClient1 from "../../images/client/client1.jpg";
import ClientFeedback from "./ClientFeedback";

function Feedbacks() {
  return (
    <div id="feedbacks" className={styles.mainContainerFeedbacks}>
      <TitleNumber
        title={"OUR TESTIMONIALS"}
        message={"What clients day"}
        number={"02"}
      />

      <div className={styles.horizontalLine}></div>

      <ClientFeedback
        name={"William Chuck"}
        feedback={
          "Fantastic gym with top-notch equipment, knowledgeable trainers, and motivating atmosphere. Highly recommend for fitness enthusiasts!"
        }
        rating={3}
        image={imageClient1}
      />
    </div>
  );
}

export default Feedbacks;
