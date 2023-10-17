import { Link } from "react-router-dom";
import styles from "./SignInForm.module.css";
import { useState } from "react";

import { MdAccountCircle } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";

function SignInForm() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  function handleShow(e) {
    e.preventDefault();

    if (email === "" || !email.includes("@")) {
      setErrorEmail("Please provide a valid email");
    } else if (password === "" || password.length < 6) {
      setErrorPassword("Please provide a password with at least 6 characters");
    } else {
      setShow(show => !show);
      setErrorEmail("");
      setErrorPassword("");
    }
  }

  return (
    <div id="background-wrapper">
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
          <>
            <div className={`${styles.space} ${styles.stars1}`}></div>
            <div className={`${styles.space} ${styles.stars2}`}></div>
            <div className={`${styles.space} ${styles.stars3}`}></div>
            <div className={`${styles.space} ${styles.stars4}`}></div>
            <div className={styles.mainContainer}>
              <FaUserAstronaut size={90} className={styles.mainIcon} />
              <div className={styles.secondaryContainer}>
                <form className={styles.formContainer} onSubmit={handleShow}>
                  <span>
                    <label htmlFor="email" className={styles.icons}>
                      <MdAccountCircle size={30} />
                    </label>
                    <input
                      type="email"
                      placeholder="Email ID"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </span>
                  {errorEmail && (
                    <p className={styles.errorMessage}>{errorEmail}</p>
                  )}
                  <span>
                    <label htmlFor="password" className={styles.icons}>
                      <AiFillUnlock size={30} />
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </span>
                  {errorPassword && (
                    <p className={styles.errorMessage}>{errorPassword}</p>
                  )}
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
          </>
        )}
      </div>
    </div>
  );
}

export default SignInForm;
