import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counterRedux = useSelector((state) => state.counter);
  const showCounterRedux = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrementCounter = () => {
    dispatch({
      type: "decrement",
    });
  };

  const showCounterHandler = () => {
    dispatch({
      type: "show",
    });
  };

  return (
    <>
      {showCounterRedux && <h1>{counterRedux}</h1>}

      <div className="container">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={showCounterHandler}>Show Counter</button>
      </div>
    </>
  );
}

export default App;
