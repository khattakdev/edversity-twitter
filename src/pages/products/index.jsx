import { useOutletContext } from "react-router-dom";
export default function Products() {
  const context = useOutletContext();
  console.log(context);
  return (
    <>
      <h1>This is Products page</h1>
      <p>Institution: {context.institution}</p>
    </>
  );
}
