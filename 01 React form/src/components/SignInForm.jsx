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
    <div className={styles.mainContainer}>
      {show ? (
        <>
          <p>Welcome!</p>
          <button onClick={handleShow}>Go back</button>
        </>
      ) : (
        <>
          <form className={styles.formContainer} onSubmit={handleShow}>
            <label htmlFor="email">Your Email</label>
            <input type="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" required />

            <button type="submit">Sign In</button>
          </form>
          <span>
            <p>Not registered yet ?</p>
            <Link to="/signup"> Sign up </Link>
          </span>
        </>
      )}
    </div>
  );
}

export default SignInForm;
