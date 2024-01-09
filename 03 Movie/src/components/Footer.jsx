import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>&copy; MovieSphere</p>
      </div>
      <div className={styles.contact}>
        Contact:&nbsp;
        <Link
          to="https://www.linkedin.com/in/florian-autricque/"
          target="_blank"
        >
          <CiLinkedin size={30} color="#0A66C2" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
