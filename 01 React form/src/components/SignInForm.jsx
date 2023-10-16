import { Link } from "react-router-dom";
import styles from "./SignInForm.module.css";
import { useState } from "react";

import { MdAccountCircle } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";

function SignInForm() {
  const [show, setShow] = useState(false);

  function handleShow(e) {
    e.preventDefault();
    setShow(show => !show);
  }

  return (
    <div>
      {show ? (
        <>
          <div className={styles.sucessMessageLogin}>
            <p>Welcome!</p>
            <button onClick={handleShow} className={styles.buttonGoBack}>
              Go back
            </button>
          </div>
        </>
      ) : (
        <div className={styles.mainContainer}>
          <FaUserAstronaut size={90} className={styles.mainIcon} />
          <div className={styles.secondaryContainer}>
            <form className={styles.formContainer}>
              <span>
                <label htmlFor="email" className={styles.icons}>
                  <MdAccountCircle size={30} />
                </label>
                <input type="email" placeholder="Email ID" required />
              </span>
              <span>
                <label htmlFor="password" className={styles.icons}>
                  <AiFillUnlock size={30} />
                </label>
                <input type="password" placeholder="Password" required />
              </span>
            </form>

            <span>
              <label>Remember me </label>
              <input type="checkbox" />
              <p>Not registered yet?</p> &nbsp;
              <Link to="/signup">Sign up</Link>
            </span>
          </div>
          <button
            type="submit"
            onClick={handleShow}
            className={styles.signButton}
          >
            SIGN IN
          </button>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
