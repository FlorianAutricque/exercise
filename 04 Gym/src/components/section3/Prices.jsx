import styles from "./Prices.module.css";
import TitleNumber from "../../components/TitleNumber.jsx";
import { useEffect } from "react";

function Prices() {
  useEffect(() => {
    const containers = document.querySelectorAll(`.${styles.containerPlans}`);

    const handleScroll = () => {
      containers.forEach(container => {
        const bounding = container.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          container.classList.add(styles.hoverEffect);
        } else {
          container.classList.remove(styles.hoverEffect);
        }
      });
    };

    const applyHoverEffect = () => {
      if (window.innerWidth <= 400) {
        window.addEventListener("scroll", handleScroll);
      }
    };

    applyHoverEffect();
    window.addEventListener("resize", applyHoverEffect);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", applyHoverEffect);
    };
  }, []);

  return (
    <div id="prices" className={styles.mainContainerPrices}>
      <TitleNumber
        title={"PRICES TABLES"}
        message={"Membership Plans"}
        number={"03"}
      />

      <div className={styles.containerOffers}>
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
    </div>
  );
}

export default Prices;
