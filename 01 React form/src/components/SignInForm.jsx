import { Link } from "react-router-dom";
import styles from "./Form.module.css";

function SignInForm() {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.formContainer}>
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
    </div>
  );
}

export default SignInForm;
