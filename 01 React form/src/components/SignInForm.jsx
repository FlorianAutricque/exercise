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

    if (email !== "" && password !== "" && password.length >= 6) {
      setShow(show => !show);
      setErrorEmail("");
      setErrorPassword("");
    }
    if (email === "") {
      setErrorEmail("Please provide your email");
    } else {
      setErrorPassword("Please prove a password longer than 6 characters");
    }
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
      )}
    </div>
  );
}

export default SignInForm;
