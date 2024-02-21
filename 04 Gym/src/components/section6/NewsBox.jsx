import { AiFillLike } from "react-icons/ai";
import news1 from "../../images/gym1.webp";

import { useState } from "react";

import styles from "./NewsBox.module.css";

function NewsBox() {
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem("likes");
    return storedLikes ? parseInt(storedLikes) : 0;
  });

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(prevLikes => prevLikes + 1);
      setLiked(true);
      localStorage.setItem("liked", "true");
    }
  };
  return (
    <div className={styles.containerNews}>
      <img src={news1} alt="Yoga and pilate" />

      <div className={styles.infosNews}>
        <div>text</div>
        <h3>text text</h3>
        <p>text text</p>

        <div className={styles.likesAuthor}>
          <span>
            <AiFillLike
              onClick={handleLike}
              className={`${liked ? styles.iconLiked : styles.icon}`}
              disabled={liked}
            />
            &nbsp;
            {likes}
          </span>
          |<div>author</div>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
