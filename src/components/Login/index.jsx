import classes from "./index.module.css";
function Login({ loginState }) {
  return (
    <div className={classes.login}>
      <h1>Login to your account</h1>
      <form className={classes.login_form}>
        <input className={classes.input_field} type="email" placeholder="Your email" />
        <input
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
