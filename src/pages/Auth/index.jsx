import { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import "./index.css";
function Auth() {
  const [isRegister, setIsRegister] = useState(true);

  const switchState = () => {
    const currentRegisterState = !isRegister;
    setIsRegister(currentRegisterState);
  };
  return (
    <div className="container">
      {isRegister == true ? (
        <Login loginState={switchState} />
      ) : (
        <Register registerState={switchState} />
      )}
    </div>
  );
}

export default Auth;
