import "./index.css";
function Login({ loginState }) {
  return (
    <div className="login">
      <h1>Login to your account</h1>
      <form className="login_form">
        <input className="input_field" type="email" placeholder="Your email" />
        <input
          className="input_field"
          type="password"
          placeholder="Your password"
        />
        <input className="input_btn" type="submit" value={"Sign in"} />
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={loginState} className="login_switch">
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
