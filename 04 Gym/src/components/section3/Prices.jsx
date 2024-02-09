import styles from "./Prices.module.css";
import TitleNumber from "../../components/TitleNumber.jsx";

function Prices() {
  return (
    <div id="prices" className={styles.mainContainerPrices}>
      <TitleNumber
        title={"PRICES TABLES"}
        message={"Membership Plans"}
        number={"03"}
      />

      <div className={styles.containerPlans}>
        <p>
          <strong> $</strong>
          <span className={styles.dollars}>4</span>/day
        </p>
        <br />
        <p className={styles.periodTraining}>
          <strong>One Day Training</strong>
        </p>
        <br />
        <p>Access All Equipments</p>
        <div className={styles.horizontalLine}></div>
        <p>Access Spa</p>
        <div className={styles.horizontalLine}></div>
        <p>Access Group Class</p>
        <div className={styles.horizontalLine}></div>
        <p>Only During Staff Hours</p>
      </div>
    </div>
  );
}

export default Prices;
