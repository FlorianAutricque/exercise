import TitleNumber from "../TitleNumber.jsx";
import styles from "./News.module.css";
import NewsBox from "./NewsBox.jsx";

function News() {
  return (
    <div id="news" className={styles.mainContainerNews}>
      <TitleNumber
        title={"LAST INFOS"}
        message={"Our Latest News"}
        number={"06"}
      />

      <div className={styles.horizontalLine}></div>

      <NewsBox />
    </div>
  );
}

export default News;
