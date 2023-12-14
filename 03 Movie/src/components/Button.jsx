import styles from "./Button.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Button({ children, type }) {
  return (
    <div>
      <li className={styles.button}>
        <Link smooth to={`#${type}`} className={styles.button}>
          {children}
        </Link>
      </li>
    </div>
  );
}

export default Button;
