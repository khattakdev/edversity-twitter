import Nav from "../../components/Nav";
import classes from "./index.module.css";
function Followers() {
  const followers = [
    {
      name: "John Doe",
      handle: "@johndoe",
    },
    {
      name: "John Doe",
      handle: "@johndoe",
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
        <h2>Followers</h2>
        {followers.map((follower, index) => {
          return (
            <div key={index} className={classes.follower}>
              <h3>{follower.name}</h3>
              <p>{follower.handle}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Followers;
