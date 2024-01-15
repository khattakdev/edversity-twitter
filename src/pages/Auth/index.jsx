import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <h1>This is Auth page</h1>
      {/* <button>Take me to Home</button> */}
      {/* <a href="http://google.com">Take me to Google</a> */}
      {/* <a href="/">Take me to Home page</a> */}
      <Link to="/">Take me to Home</Link>
      <Link to="/products">Take me to Products</Link>
    </>
  );
}
