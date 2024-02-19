import gymOffers from "../../images/gymOffers.webp";
import styles from "./Offers.module.css";
import TitleNumber from "../TitleNumber.jsx";

import { GiWeightLiftingUp } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";

function Offers() {
  return (
    <div id="offers" className={styles.mainContainerOffers}>
      <div className={styles.containerOffers}>
        <div className={styles.listOfOffers}>
          <div className={styles.imageContainer}>
            <img src={gymOffers} alt="Gym offers" />
          </div>

          <div className={styles.title}>
            <TitleNumber
              title={"INTRODUCE"}
              message={"All Our Offers"}
              number={"04"}
            />

            <div className={styles.horizontalLine}></div>

            <div className={styles.containerSmallerOffers}>
              <div>
                <FaWeightScale size={40} color="var(--color-orange-light)" />
              </div>
              <div>
                <h4>Weight Loose Programs</h4>
                <p>
                  Transform your body with our effective weight loss programs.
                  Achieve your goals today!
                </p>
              </div>
            </div>

            <div className={styles.containerSmallerOffers}>
              <div>
                <GiWeightLiftingUp
                  size={40}
                  color="var(--color-orange-light)"
                />
              </div>
              <div>
                <h4>Body Building Programs</h4>
                <p>
                  Unlock your potential with our comprehensive bodybuilding
                  program. Sculpt, strengthen, and achieve greatness!
                </p>
              </div>
            </div>

            <div className={styles.containerSmallerOffers}>
              <div>
                <MdOutlineGroups
                  size={40}
                  color="var(--color-orange-light)"
                  style={{ marginTop: "-7px" }}
                />
              </div>
              <div>
                <h4>Different Special Classes</h4>
                <p>
                  Elevate your fitness with specialized classes tailored to your
                  goals. Join us for transformative sessions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
