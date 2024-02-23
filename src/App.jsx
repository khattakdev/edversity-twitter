import { useRef, useEffect } from "react";
import Spinner from "./Spiner";
import "./App.css";

function App() {
  const myRef = useRef(null); // { current: }

  // const hideHandler = () => {
  //   myRef.current.hidden = true;
  // };

  // const focusHandler = () => {
  //   myRef.current.focus();
  // };

  const alertHandler = () => {
    alert("You Clicked!");
  };

  useEffect(() => {
    console.log(myRef);
    myRef.current.onclick = alertHandler;
  }, []);

  return (
    <>
      <Spinner ref={myRef} />
      {/* <input type="text" placeholder="Your Name" ref={myRef} />
      <button onClick={hideHandler}>Hide input</button>
      <button onClick={focusHandler}>Focus on input</button> */}
    </>
  );
}

export default App;
