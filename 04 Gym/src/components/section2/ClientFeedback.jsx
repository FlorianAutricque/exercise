import styles from "./ClientFeedback.module.css";

function ClientFeedback({ name, feedback, rating, image }) {
  const renderStars = () => {
    const fullStar = "★";
    const emptyStar = "☆";
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ color: "var(--color-orange-light)" }}>
            {fullStar}
          </span>
        );
      } else {
        stars.push(
          <span key={i} style={{ color: "var(--color-orange-light)" }}>
            {emptyStar}
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className={styles.containerClient}>
      <div className={styles.containerTextClient}>
        <p>{name}</p>
        <p className={styles.client}>CLIENT</p>
        <p className={styles.feedback}>
          <em>&ldquo;{feedback}&rdquo;</em>
        </p>
        <div>{renderStars()}</div>
      </div>
      <div className={styles.imageClient}>
        <img src={image} alt="client1" />
      </div>
    </div>
  );
}

export default ClientFeedback;
