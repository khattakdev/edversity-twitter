import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import classes from "./index.module.css";
function Login({ loginState }) {
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    let errMessage = "";
    const validEmail = email.trim();

    if (validEmail.length == 0) {
      errMessage = "Please write your email!";
    } else if (password.length == 0) {
      errMessage = "Please write your password";
    }

    SetErrorMessage(errMessage);

    if (!errMessage) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res.user.uid);
        navigate("/home");
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
        if (error.code == "auth/invalid-credential") {
          SetErrorMessage("Invalid Credentails!");
        }
      }
    }
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/home");
  //     } else {
  //       console.log("User is not logged In!");
  //     }
  //   });
  // }, []);
  /*
  users: {
    "QQQ7XGvGWRSdhNxIv8OtmZgxJkb2": {
      name: "Arsalan Khattak",
      handle: "khattakdev",
      bio: "aosdjaodjasijdsadi",
      followings: 222,
      followers: 1234
    }
  }

  */

  return (
    <div className={classes.login}>
      <h1>Login to your account</h1>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}
      <form
        onSubmit={(e) => {
          onLogin(e);
        }}
        className={classes.login_form}
      >
        <input
          value={email}
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
          className={classes.input_field}
          type="email"
          placeholder="Your email"
        />
        <input
          value={password}
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
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
