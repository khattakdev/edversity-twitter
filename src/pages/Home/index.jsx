import Nav from "../../components/Nav";
import Profile from "../../components/Profile";
import "./index.css";
function Home() {
  return (
    <>
      <Nav />
      <div className="container">
        <Profile />
      </div>
    </>
  );
}

export default Home;
