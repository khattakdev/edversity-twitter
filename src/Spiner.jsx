import { forwardRef } from "react";

const myButton = forwardRef(function Spinner(props, ref) {
  return (
    <>
      <button ref={ref}>Click Me</button>
    </>
  );
});

export default myButton;
