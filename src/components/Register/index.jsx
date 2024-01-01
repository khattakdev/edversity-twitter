import "./index.css";
function Register({ registerState }) {
  return (
    <div className="login">
      <h1>Register your account</h1>
      <form className="login_form">
        <input className="input_field" type="email" placeholder="Your email" />
        <input className="input_field" type="name" placeholder="Your name" />
        <input
          className="input_field"
          type="password"
          placeholder="Your password"
        />
        <input
          className="input_field"
          type="password"
          placeholder="Confirm password"
        />
        <input className="input_btn" type="submit" value={"Register"} />
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
