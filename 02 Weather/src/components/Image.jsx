import styles from "./Image.module.css";

function Image({ isLoading, images }) {
  return (
    <div className={styles.containerImage}>
      {isLoading ? (
        <p>Loading...</p>
      ) : images.length > 0 ? (
        <img
          className={styles.image}
          src={images[0].urls.regular}
          alt={images[0].description}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Image;
