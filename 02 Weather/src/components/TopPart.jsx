import Infos from "./Infos";
import Input from "./Input";
import Title from "./Title";

import styles from "./TopPart.module.css";

function TopPart({ weather, location, setLocation }) {
  return (
    <div className={styles.mainContainerTop}>
      <div className={styles.topContainer}>
        <Infos weather={weather} />
        <div>
          <Title location={location} />
          <Input location={location} setLocation={setLocation} />
        </div>
      </div>
    </div>
  );
}

export default TopPart;
