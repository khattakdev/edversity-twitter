import Nav from "../../components/Nav";
import Profile from "../../components/Profile";
import Tweet from "../../components/Tweet";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [userID, setUserID] = useState(null);
  const tweetData = [
    {
      title: "My first tweet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
      date: "01 Jan, 2024",
      likes: 20,
    },
    {
      title: "My second tweet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
      date: "02 Jan, 2024",
      likes: 40,
    },
    {
      title: "My third tweet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
      date: "03 Jan, 2024",
      likes: 60,
    },
  ];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserID(uid);
        setLoggedIn(true);
      } else {
        navigate("/");
        console.log("User is NOT logged in!");
      }
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const userDataRef = ref(db, "users/" + userID);
    onValue(userDataRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, [userID]);

  return (
    <>
      {isLoggedIn ? (
        <>
          {" "}
          <Nav />
          <div className={classes.container}>
            <Profile info={userData} />
            {tweetData.map((item, index) => {
              return <Tweet key={index} item={item} />;
            })}
          </div>{" "}
        </>
      ) : null}
    </>
  );
}

export default Home;
