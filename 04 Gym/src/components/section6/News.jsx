import TitleNumber from "../TitleNumber.jsx";
import styles from "./News.module.css";
import NewsBox from "./NewsBox.jsx";

import news1 from "../../images/gym1.webp";

function News() {
  return (
    <div id="news" className={styles.mainContainerNews}>
      <TitleNumber
        title={"LAST INFOS"}
        message={"Our Latest News"}
        number={"06"}
      />

      <div className={styles.horizontalLine}></div>

      <NewsBox
        image={news1}
        altImage={"Yoga and Pilate"}
        title={" YOGA AND PILATE"}
        textTitle={"Yoga and Pilates promote wellness"}
        text={
          "Discover the joy of mindful movement through yoga and pilates classes."
        }
        author={"Flo"}
        numberLikes={123}
      />

      <NewsBox
        image={news1}
        altImage={"Yoga and Pilate"}
        title={" YOGA AND PILATE"}
        textTitle={"Yoga and Pilates promote wellness"}
        text={
          "Discover the joy of mindful movement through yoga and pilates classes."
        }
        author={"Flo"}
        numberLikes={94}
      />

      <NewsBox
        image={news1}
        altImage={"Yoga and Pilate"}
        title={" YOGA AND PILATE"}
        textTitle={"Yoga and Pilates promote wellness"}
        text={
          "Discover the joy of mindful movement through yoga and pilates classes."
        }
        author={"Flo"}
        numberLikes={78}
      />
    </div>
  );
}

export default News;
