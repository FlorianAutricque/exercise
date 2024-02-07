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

      <div>
        <p>
          $<span>4</span>/day
        </p>

        <p>One Day Training</p>

        <p>Access All Equipments</p>
        <p>Access Spa</p>
        <p>Access Group Class</p>
        <p>Only During Staff Hours</p>
      </div>
    </div>
  );
}

export default Prices;
