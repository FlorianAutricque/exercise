import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div>
      <HashLink smooth to="#welcome">
        <p>Welcome</p>
      </HashLink>
      <HashLink smooth to="#feedbacks">
        <p>Feedbacks</p>
      </HashLink>
      <HashLink smooth to="#prices">
        <p>Prices</p>
      </HashLink>
      <HashLink smooth to="#offers">
        <p>Offers</p>
      </HashLink>
    </div>
  );
}

export default Navbar;
