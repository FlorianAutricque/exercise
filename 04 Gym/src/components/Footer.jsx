import imageBanner from "../images/gym1.jpg";

import styles from "./Footer.module.css";

import TitleNumber from "./TitleNumber.jsx";

import logo from "../images/logo.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <div className={styles.imageBanner}>
          <TitleNumber title={"CALL US TODAY"} message={"000 000 0000"} />
          <p className={styles.textTopImage}>
            Give us a call during our staff hours or send us an email and we
            will get to you within 24 hours
          </p>

          <img src={imageBanner} alt="Image banner" />
        </div>
        <div className={styles.containerMailto}>
          <a href="mailto:fakeemail@example.com" className={styles.mailto}>
            Send Email
          </a>
        </div>
      </div>

      <div>
        <div className={styles.bottomFooter}>
          <div className={styles.leftPart}>
            <img src={logo} alt="logo" />
            <p>
              Stay connected and follow us on our social media channels today.
            </p>
            <div>
              <span>
                <Link to="/">
                  <FaFacebookSquare color="var(--color-text)" />
                </Link>
                <Link to="/">
                  <FaInstagramSquare color="var(--color-text)" />
                </Link>
                <Link to="/">
                  <FaXTwitter color="var(--color-text)" />
                </Link>
                <Link to="/">
                  <FaYoutube color="var(--color-text)" />
                </Link>
              </span>
            </div>
          </div>

          <div className={styles.middlePart}></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
