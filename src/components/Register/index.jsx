import classes from "./index.module.css";
function Register({ registerState }) {
  return (
    <div className={classes.login}>
      <h1>Register your account</h1>
      <form className={classes.login_form}>
        <input className={classes.input_field} type="email" placeholder="Your email" />
        <input className={classes.input_field} type="name" placeholder="Your name" />
        <input
          className={classes.input_field}
          type="password"
          placeholder="Your password"
        />
        <input
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
