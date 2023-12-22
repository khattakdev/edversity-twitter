// import { useState } from "react";
function Counter(props) {
  console.log(props);
  let count = props.count;
  let setCount = props.setCount;
  function increaseCounter() {
    let currentCount = count; // 0
    currentCount++; // 0 + 1 = 1
    setCount(currentCount);
  }
  return (
    <>
      <button onClick={increaseCounter}>Increase the number</button>
      <p>The value is {count}</p>
    </>
  );
}

export default Counter;
