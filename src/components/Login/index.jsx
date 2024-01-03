import { useState } from "react";
import classes from "./index.module.css";
function Login({ loginState }) {

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const validEmail = email.trim();
    
    if (!validEmail) {
      SetErrorMessage("Please write your email!")
    } else {
      SetErrorMessage("Please write your password")
    }

    SetErrorMessage("")
    console.log("Email - ", email )
    console.log("Password - ", password)

  }


  return (
    <div className={classes.login}>
      <h1>Login to your account</h1>
       <p>{errorMessage}</p>
      <form onSubmit={(e) => { onLogin(e)}} className={classes.login_form}>
        <input value={email} onChange={(e) => { SetEmail(e.target.value)}} className={classes.input_field} type="email" placeholder="Your email" />
        <input
        value={password}
        onChange={(e) => { SetPassword(e.target.value)}}
          className={classes.input_field}
          type="password"
          placeholder="Your password"
        />
        <input className={classes.input_btn} type="submit" value={"Sign in"} />
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={loginState} className={classes.login_switch}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
