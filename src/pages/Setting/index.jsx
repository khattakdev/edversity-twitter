import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../firebase";
function Setting() {
  const navigate = useNavigate();
  const [confirmationState, setConfirmationState] = useState(false);
  const [name, setName] = useState("");
  const [userID, setUserID] = useState(null);
  const [description, setDescription] = useState("");
  const [userData, setUserData] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);

        const db = getDatabase();
        setUserID(uid);
        const userDataRef = ref(db, "users/" + uid);
        onValue(userDataRef, (snapshot) => {
          const data = snapshot.val();
          setName(data.name);
          setDescription(data.bio);
          setUserData(data);
          // console.log(data);
        });

        setLoggedIn(true);
      } else {
        navigate("/");
        console.log("User is NOT logged in!");
      }
    });
  }, []);

  const submitBasicInfo = () => {
    const { followings, followers, tweets } = userData;
    console.log(followers, followings, tweets);
    const updatedUserData = {
      name,
      bio: description,
      followers,
      followings,
      tweets,
    };

    try {
      const db = getDatabase();
      const userRef = ref(db, "users/" + userID);
      set(userRef, updatedUserData);
      console.log("User data has been updated!");
    } catch (error) {
      console.log("Something went wrong!");
    }
  };

  return (
    <>
      {isLoggedIn && (
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
                  <input
                    className={classes.submit_btn}
                    onClick={submitBasicInfo}
                    type="button"
                    value="Yes"
                  />
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
      )}
    </>
  );
}

export default Setting;
