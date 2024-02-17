import imageFooter from "../images/gymFooter.jpg";

import styles from "./Footer.module.css";

import TitleNumber from "./TitleNumber.jsx";

import logo from "../images/logo.png";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <div>
        <div className={styles.imageBanner}>
          <TitleNumber title={"CALL US TODAY"} message={"123 456 7890"} />
          <p className={styles.textTopImage}>
            Give us a call during our staff hours or send us an email and we
            will get to you within 24 hours
          </p>

          <img src={imageFooter} alt="Image banner" />
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
                  <FaFacebookSquare />
                </Link>
                <Link to="/">
                  <FaInstagramSquare />
                </Link>
                <Link to="/">
                  <FaXTwitter />
                </Link>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </span>
            </div>
          </div>

          <div className={styles.middlePart}>
            <h3>Quick Contact</h3>
            <div className={styles.contactInfos}>
              <span>
                <FaLocationDot color="var(--color-orange-dark)" /> 1234 Fake
                Street, Faketown, Canada
              </span>
              <span>
                <MdOutlineEmail color="var(--color-orange-dark)" />{" "}
                fakeemail@example.com
              </span>
              <span>
                <FaPhoneVolume color="var(--color-orange-dark)" /> 123 456 7890
              </span>
              <span>
                <TbWorldWww color="var(--color-orange-dark)" />{" "}
                https://gymrat.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.lineEnd}></div>

        <div className={styles.copyright}>
          <p>© COPYRIGHT ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
