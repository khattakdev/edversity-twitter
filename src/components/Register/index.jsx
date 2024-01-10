import { useState } from "react";
import classes from "./index.module.css";
function Register({ registerState }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedErrorMessages = [];

    if (!email.trim()) {
      updatedErrorMessages.push("You must enter an email.");
    }
    if (!name.trim()) {
      updatedErrorMessages.push("You must enter a name.");
    }
    if (!password) {
      updatedErrorMessages.push("You must enter a password.");
    }
    if (!confirmPassword) {
      updatedErrorMessages.push("You must enter a confirmation password.");
    }
    if (password != confirmPassword) {
      updatedErrorMessages.push("Passwords didn't match.");
    }

    setErrorMessages(updatedErrorMessages);

    if (updatedErrorMessages.length == 0) {
      console.log("Form submitted!");
    }
  };
  return (
    <div className={classes.login}>
      <h1>Register your account</h1>
      {errorMessages.map((errorMessage, index) => (
        <p key={index} className={classes.error}>
          {errorMessage}
        </p>
      ))}
      <form onSubmit={(e) => submitHandler(e)} className={classes.login_form}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input_field}
          type="email"
          placeholder="Your email"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.input_field}
          type="name"
          placeholder="Your name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input_field}
          type="password"
          placeholder="Your password"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={classes.input_field}
          type="password"
          placeholder="Confirm password"
        />
        <input className={classes.input_btn} type="submit" value={"Register"} />
      </form>
      <p>
        Already have an account,{" "}
        <span onClick={registerState} className="login_switch">
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
