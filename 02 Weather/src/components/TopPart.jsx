import Infos from "./Infos";
import Input from "./Input";
import Title from "./Title";

import styles from "./TopPart.module.css";

function TopPart({ weather, location, setLocation, onSubmitLocation }) {
  return (
    <div className={styles.mainContainerTop}>
      <div className={styles.topContainer}>
        <Infos weather={weather} />
        <div>
          <Title location={location} />
          <Input
            location={location}
            setLocation={setLocation}
            onSubmitLocation={onSubmitLocation}
          />
        </div>
      </div>
    </div>
  );
}

export default TopPart;
