import Nav from "../../components/Nav";
import classes from "./index.module.css";
function Followings() {
  const followings = [
    {
      name: "Elizabeth Keen",
      handle: "@ekeen",
    },
    {
      name: "Eva Smith",
      handle: "@smitheva",
    },
    {
      name: "John Doe",
      handle: "@johndoe",
    },
  ];

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <h2>Followings</h2>
        {followings.map((following, index) => {
          return (
            <div key={index} className={classes.following}>
              <h3>{following.name}</h3>
              <p>{following.handle}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Followings;
