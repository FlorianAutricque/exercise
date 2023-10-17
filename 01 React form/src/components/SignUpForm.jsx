import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { useEffect, useState } from "react";

import { RiUserReceivedFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import { MdError } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { AiFillUnlock } from "react-icons/ai";
import BackgroundStars from "./BackgroundStars";
import Button from "./Button";
import MainIcon from "./MainIcon";

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
    setErrorPassword("");
    setErrorConfirmedPassword("");

    if (name === "") {
      setErrorName("Add your first name");
    }
    if (familyName === "") {
      setErrorFamilyName("Add your family name");
    }
    if (email === "" || !email.includes("@")) {
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
    if (email && email.includes("@") && email === confirmEmail) {
      setErrorEmail("");
      setErrorConfirmedEmail("");
    }
    if (password === "" || password.length < 6) {
      setErrorPassword("Password should be at least 6 characters long");
      return;
    }
    if (confirmPassword === "") {
      setErrorConfirmedPassword(
        "Password should be at least 6 characters long"
      );
    }
    if (confirmPassword !== password) {
      setErrorConfirmedPassword("Passwords don't match");
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
    <div id="background-wrapper">
      <BackgroundStars />
      {show && <div className={styles.blurOverlay}></div>}

      <div className={styles.mainContainer}>
        <MainIcon />

        <div className={styles.secondaryContainer}>
          <form className={styles.formContainer}>
            <Link to="/" className={styles.arrowBack}>
              &larr;
            </Link>
            <div className={styles.firstnameFullname}>
              <span>
                <label htmlFor="firstName" className={styles.icons}>
                  {errorName ? (
                    <RiUserUnfollowFill size={30} />
                  ) : (
                    <RiUserReceivedFill size={30} />
                  )}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  placeholder="First Name"
                />
              </span>

              <span>
                <label htmlFor="surname" className={styles.icons}>
                  {errorFamilyName ? (
                    <RiUserUnfollowFill size={30} />
                  ) : (
                    <RiUserReceivedFill size={30} />
                  )}
                </label>
                <input
                  type="text"
                  value={familyName}
                  onChange={e => {
                    setFamilyName(e.target.value);
                  }}
                  placeholder="Family Name"
                />
              </span>
            </div>

            <div className={styles.firstnameFullname}>
              {errorName && (
                <p className={styles.errormessage}>{name ? "" : errorName}</p>
              )}
              {errorFamilyName && (
                <p className={styles.errormessage}>
                  {familyName ? "" : errorFamilyName}
                </p>
              )}
            </div>

            <span>
              <label htmlFor="email" className={styles.icons}>
                {errorEmail ? <MdError size={30} /> : <ImMail4 size={30} />}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
              />
            </span>
            {errorEmail && <p className={styles.errormessage}>{errorEmail}</p>}

            <span>
              <label htmlFor="email" className={styles.icons}>
                {errorConfirmedEmail ? (
                  <MdError size={30} />
                ) : (
                  <ImMail4 size={30} />
                )}
              </label>
              <input
                type="email"
                value={confirmEmail}
                onChange={e => {
                  setConfirmEmail(e.target.value);
                }}
                placeholder="Confirm your Email"
              />
            </span>
            {errorConfirmedEmail && (
              <p className={styles.errormessage}>{errorConfirmedEmail}</p>
            )}

            <span>
              <label htmlFor="password" className={styles.icons}>
                {errorPassword ? (
                  <MdError size={30} />
                ) : (
                  <AiFillUnlock size={30} />
                )}
              </label>
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
              />
            </span>
            {errorPassword && (
              <p className={styles.errormessage}>{errorPassword}</p>
            )}

            <span>
              <label htmlFor="password" className={styles.icons}>
                {errorPassword ? (
                  <MdError size={30} />
                ) : (
                  <AiFillUnlock size={30} />
                )}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm Password"
              />
            </span>
            {errorConfirmedPassword && (
              <p className={styles.errormessage}>{errorConfirmedPassword}</p>
            )}
          </form>
        </div>

        <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>

        {show && <div className={styles.successMessage}>ACCOUNT CREATED</div>}
      </div>
    </div>
  );
}

export default SignUpForm;
