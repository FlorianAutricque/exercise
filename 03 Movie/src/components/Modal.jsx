import { useState } from "react";
import styles from "./Modal.module.css";

function Modal({ queryTrailer }) {
  const [modal, setModal] = useState(false);
  const [videoId, setVideoId] = useState(null);

  function modalOpen() {
    setModal(true);
    fetchYoutubeVideo();
  }

  function modalClose() {
    setModal(false);
  }
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_YOUTUBE;

  async function fetchYoutubeVideo() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${queryTrailer}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch YouTube video");
      }

      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const firstVideoId = data.items[0].id.videoId;
        setVideoId(firstVideoId);
      }
    } catch (error) {
      console.error("Error fetching YouTube video:", error);
    }
  }

  return (
    <div>
      <button onClick={modalOpen} className={styles.linkToTrailer}>
        Trailer
      </button>

      {modal && (
        <div
          className={`${styles.modalContainer} ${styles.landscapeMode}`}
          onClick={modalClose}
        >
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={modalClose}>
              &times;
            </span>

            <div className={styles.youtubeFrame}>
              {videoId && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
