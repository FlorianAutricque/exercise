import imageBanner from "../images/gym1.jpg";

import styles from "./Footer.module.css";

import TitleNumber from "./TitleNumber.jsx";

function Footer() {
  return (
    <div>
      <div className={styles.imageBanner}>
        <TitleNumber title={"CALL US TODAY"} message={"000 000 0000"} />
        <p className={styles.textTopImage}>
          Give us a call during our staff hours or send us an email and we will
          get to you within 24 hours
        </p>

        <a href="mailto:fakeemail@example.com" className={styles.mailto}>
          Send Email
        </a>

        <img src={imageBanner} alt="Image banner" />
      </div>
    </div>
  );
}

export default Footer;
