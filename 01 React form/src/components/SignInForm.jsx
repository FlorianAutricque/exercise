import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import { useState } from "react";

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
          <div className={styles.secondaryContainer}>
            <p>Welcome!</p>
            <button onClick={handleShow}>Go back</button>
          </div>
        </>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.secondaryContainer}>
            <form className={styles.formContainer}>
              <label htmlFor="email">Your Email</label>
              <input type="email" required />

              <label htmlFor="password">Password</label>
              <input type="password" required />
            </form>

            <span>
              <label>Remember me &nbsp;</label>
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
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
