import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByValue } from "./store/counter/counterSlice";

function App() {
  const counterRedux = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // dispatch({
    //   type: "increment",
    // });
    dispatch(increment());
  };

  const incrementBySomething = () => {
    dispatch(incrementByValue(20));
  };

  return (
    <>
      <h1>{counterRedux}</h1>

      <div className="container">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={incrementBySomething}>Increment by 10</button>
      </div>
    </>
  );
}

export default App;
