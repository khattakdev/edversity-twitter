import { useState } from "react";
import Nav from "../../components/Nav";
import classes from "./index.module.css";
function Setting() {
  const [confirmationState, setConfirmationState] = useState(false);
  const [name, setName] = useState("Arsalan Khattak");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit illo. Iure exercitationem architecto repudiandaaasde consequuntur laudantium, obcaecati possimus pariatur iste aliquid aspernatur qui esse reprehenderit quisquam odio facere tempore!"
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <h2>Basic info</h2>
        <form className={classes.basic}>
          <input
            type="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={description}
            placeholder="Your Bio"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="button"
            className={classes.submit_btn}
            value="Update Info"
            onClick={() => setConfirmationState(true)}
          />
          {confirmationState && (
            <div className={classes.basic_confirmation}>
              <input className={classes.submit_btn} type="submit" value="Yes" />
              <input
                className={classes.deny}
                onClick={() => setConfirmationState(false)}
                type="button"
                value="No"
              />
            </div>
          )}
        </form>

        <h2>Update Password</h2>
        <form className="credential">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input className={classes.submit_btn} type="submit" />
        </form>
      </div>
    </>
  );
}

export default Setting;
