import { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import classes from './index.module.css'
function Auth() {
  const [isRegister, setIsRegister] = useState(true);

  const switchState = () => {
    const currentRegisterState = !isRegister;
    setIsRegister(currentRegisterState);
  };
  return (
    <div className={classes.container}>
      {isRegister == true ? (
        <Login loginState={switchState} />
      ) : (
        <Register registerState={switchState} />
      )}
    </div>
  );
}

export default Auth;
