import { Link } from "react-router-dom";
import styles from "./SignInForm.module.css";
import { useState } from "react";

import { MdAccountCircle } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import BackgroundStars from "./BackgroundStars";
import Button from "./Button";
import WelcomeMessage from "./WelcomeMessage";
import MainIcon from "./MainIcon";

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
          <WelcomeMessage onClick={handleShow} />
        ) : (
          <>
            <BackgroundStars />
            <div className={styles.mainContainer}>
              <MainIcon />

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

              <Button onClick={handleShow}>SIGN IN</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignInForm;
