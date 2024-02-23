import { AiFillLike } from "react-icons/ai";
import { useState, useEffect } from "react";
import styles from "./NewsBox.module.css";

function NewsBox({
  image,
  altImage,
  title,
  textTitle,
  text,
  author,
  numberLikes,
}) {
  const [likes, setLikes] = useState(numberLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
    setLiked(true);
  };

  return (
    <div className={styles.containerNews}>
      <img src={image} alt={altImage} />
      <div className={styles.infosNews}>
        <div className={styles.title}>{title}</div>
        <h3>{textTitle}</h3>
        <p>{text}</p>
        <div className={styles.likesAuthor}>
          <span>
            <AiFillLike
              onClick={handleLike}
              className={`${liked ? styles.iconLiked : styles.icon}`}
            />
            &nbsp;
            {likes}
          </span>
          |<div className={styles.author}>{author}</div>
        </div>
      </div>
    </div>
  );
}

export default NewsBox;
