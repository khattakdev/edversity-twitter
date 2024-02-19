import { useContext } from "react";
import { CounterContext } from "./context";

function D() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h2>This is D</h2>
      <p>Value is: {counter}</p>
    </div>
  );
}

export default D;
