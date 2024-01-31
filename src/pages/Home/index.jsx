import Nav from "../../components/Nav";
import Profile from "../../components/Profile";
import Tweet from "../../components/Tweet";
import NewTweet from "../../components/NewTweet";
import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [userID, setUserID] = useState(null);
  const [newTweetTitle, setNewTweetTitle] = useState("");
  const [newTweetDescription, setNewTweetDescription] = useState("");
  const [tweetData, setTweetData] = useState([]);
  // const tweetData = [
  //   {
  //     title: "My first tweet",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
  //     date: "01 Jan, 2024",
  //     likes: 20,
  //   },
  //   {
  //     title: "My second tweet",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
  //     date: "02 Jan, 2024",
  //     likes: 40,
  //   },
  //   {
  //     title: "My third tweet",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sed veniam odit tempora explicabo ipsa? Voluptas sunt sapiente earum tempora?",
  //     date: "03 Jan, 2024",
  //     likes: 60,
  //   },
  // ];

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

  const sendNewTweet = (e) => {
    e.preventDefault();
    if (!newTweetTitle.trim() || !newTweetDescription.trim()) {
      alert("One of the field is empty!");
      return;
    }
    const db = getDatabase();
    const tweetRef = ref(db, "users/" + userID + "/tweets");
    const newTweetRef = push(tweetRef);
    set(newTweetRef, {
      title: newTweetTitle,
      description: newTweetDescription,
      date: new Date().getTime(),
      likes: 0,
    });
    alert("New Tweet Created!");
    setNewTweetTitle("");
    setNewTweetDescription("");
  };

  useEffect(() => {
    const db = getDatabase();
    const userDataRef = ref(db, "users/" + userID);
    onValue(userDataRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);

      if (data?.tweets) {
        const tweets = data.tweets;
        const tweetsList = [];
        for (const tweet in tweets) {
          tweetsList.push(tweets[tweet]);
        }

        setTweetData(tweetsList);
      }
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
            <NewTweet
              sendNewTweet={sendNewTweet}
              title={newTweetTitle}
              description={newTweetDescription}
              setTitle={setNewTweetTitle}
              setDescription={setNewTweetDescription}
            />
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
