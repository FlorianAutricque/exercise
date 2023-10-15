import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [errorFamilyName, setErrorFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorConfirmedEmail, setErrorConfirmedEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmedPassword, setErrorConfirmedPassword] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function isAnyFieldMissing() {
    return (
      !name ||
      !familyName ||
      !email ||
      !confirmEmail ||
      !password ||
      !confirmPassword
    );
  }

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      setErrorName("Fill this field with your first name");
    }
    if (familyName === "") {
      setErrorFamilyName("Fill this field with your family name");
    }
    if (email === "") {
      setErrorEmail("Fill this field with your email");
    }
    if (confirmEmail === "") {
      setErrorConfirmedEmail(
        "Fill this field with your email and make sure both emails match"
      );
    }
    if (email !== confirmEmail) {
      setErrorConfirmedEmail("Emails don't match");
      return;
    }
    if (password === "" || password.length < 6) {
      setErrorPassword(
        "Fill this field with a password and make sure it's at least 6 characters long"
      );
      return;
    }
    if (confirmPassword === "") {
      setErrorConfirmedPassword(
        "Fill this field with a password and make sure both passwords match "
      );
    }
    if (confirmPassword !== password) {
      setErrorConfirmedPassword("Password don't match");
      return;
    }

    if (isAnyFieldMissing()) {
      return;
    }

    if (!isAnyFieldMissing()) {
      setShow(true);
    }
  }

  return (
    <>
      <div className={styles.secondaryContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          {errorName && <p className={styles.errormessage}>{errorName}</p>}

          <label htmlFor="surname">Family Name</label>
          <input
            type="text"
            value={familyName}
            onChange={e => {
              setFamilyName(e.target.value);
            }}
          />
          {errorFamilyName && (
            <p className={styles.errormessage}>{errorFamilyName}</p>
          )}

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          {errorEmail && <p className={styles.errormessage}>{errorEmail}</p>}

          <label htmlFor="email">Confirm Email</label>
          <input
            type="email"
            value={confirmEmail}
            onChange={e => {
              setConfirmEmail(e.target.value);
            }}
          />
          {errorConfirmedEmail && (
            <p className={styles.errormessage}>{errorConfirmedEmail}</p>
          )}

          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          {errorPassword && (
            <p className={styles.errormessage}>{errorPassword}</p>
          )}

          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => {
              setConfirmPassword(e.target.value);
            }}
          />
          {errorConfirmedPassword && (
            <p className={styles.errormessage}>{errorConfirmedPassword}</p>
          )}

          <button type="submit">Sign Up</button>
          <Link to="/">Go back</Link>
        </form>
      </div>
      {show && <p className={styles.successMessage}>Success!</p>}
    </>
  );
}

export default SignUpForm;
