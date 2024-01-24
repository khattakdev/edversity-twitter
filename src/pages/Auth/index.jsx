import { useEffect, useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import classes from "./index.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
function Auth() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(true);
  const [isAuth, setAuth] = useState(true);

  const switchState = () => {
    const currentRegisterState = !isRegister;
    setIsRegister(currentRegisterState);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        console.log("User is not logged in!");
        setAuth(false);
      }
    });
  }, []);

  return (
    <>
      {!isAuth && (
        <div className={classes.container}>
          {isRegister == true ? (
            <Login loginState={switchState} />
          ) : (
            <Register registerState={switchState} />
          )}
        </div>
      )}
    </>
  );
}

export default Auth;
