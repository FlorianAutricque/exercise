import TitleNumber from "../TitleNumber";
import styles from "./Feedbacks.module.css";

function Feedbacks() {
  return (
    <div id="feedbacks" className={styles.mainContainerFeedbacks}>
      <TitleNumber
        title={"OUR TESTIMONIALS"}
        message={"What clients day"}
        number={"02"}
      />

      <p>ble</p>
      <p>ble</p>
      <p>ble</p>
      <p>ble</p>
    </div>
  );
}

export default Feedbacks;
