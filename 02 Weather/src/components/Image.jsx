import styles from "./Image.module.css";
import Spinner from "./Spinner";

function Image({ isLoading, images }) {
  return (
    <div className={styles.containerImage}>
      {isLoading ? (
        <Spinner />
      ) : images.length > 0 ? (
        <img
          className={styles.image}
          src={images[0].urls.regular}
          alt={images[0].description}
        />
      ) : (
        <p className={styles.errorText}>
          Image not found, try another location
        </p>
      )}
    </div>
  );
}

export default Image;
