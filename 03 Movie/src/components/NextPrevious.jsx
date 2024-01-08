import styles2 from "../components/Button.module.css";
import styles from "./NextPrevious.module.css";

function NextPrevious({ page, setPage, totalPages }) {
  function pageChangeNext(e) {
    e.preventDefault();
    setPage(page + 1);
  }

  function pageChangePrev(e) {
    e.preventDefault();
    setPage(page - 1);
  }
  return (
    <div className={styles.nextPrevious}>
      {page > 1 && (
        <button
          onClick={pageChangePrev}
          className={`${styles2.button} ${styles.buttonPrevNext}`}
        >
          &larr; Previous page
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={pageChangeNext}
          className={`${styles2.button} ${styles.buttonPrevNext}`}
        >
          Next page &rarr;
        </button>
      )}
    </div>
  );
}

export default NextPrevious;
