import TitleNumber from "../TitleNumber.jsx";
import styles from "./News.module.css";
import NewsBox from "./NewsBox.jsx";

import news1 from "../../images/yoga.webp";
import news2 from "../../images/equipment.webp";
import news3 from "../../images/pt.webp";

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
        title={"YOGA AND PILATE"}
        textTitle={"Yoga and Pilates Classes"}
        text={
          "Discover the joy of mindful movement through yoga and pilates classes."
        }
        author={"Flo"}
        numberLikes={123}
      />

      <NewsBox
        image={news2}
        altImage={"Training and equipments"}
        title={"TRAINING AND EQUIPMENTS"}
        textTitle={"New Equipments In Your Gym"}
        text={"Discover and use our new gym equipments."}
        author={"Coach Carter"}
        numberLikes={94}
      />

      <NewsBox
        image={news3}
        altImage={"New coach"}
        title={"NEW COACH"}
        textTitle={"Meet our new gym coach; Tony"}
        text={
          "Tony, our new coach, specializes in weight loss and muscle gain."
        }
        author={"Flo"}
        numberLikes={78}
      />
    </div>
  );
}

export default News;
