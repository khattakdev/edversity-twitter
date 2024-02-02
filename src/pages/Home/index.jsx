import Nav from "../../components/Nav";
import Profile from "../../components/Profile";
import Tweet from "../../components/Tweet";
import NewTweet from "../../components/NewTweet";
import classes from "./index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
function Home() {
  const navigate = useNavigate();
  const params = useParams();
  const { paramId } = params;
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [userID, setUserID] = useState(null);
  const [newTweetTitle, setNewTweetTitle] = useState("");
  const [newTweetDescription, setNewTweetDescription] = useState("");
  const [tweetData, setTweetData] = useState([]);
  const [isUserOnHome, setIsUserOnHome] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        setLoggedIn(true);

        if (paramId && paramId !== uid) {
          setIsUserOnHome(false);
        }
        if (paramId) {
          const db = getDatabase();
          const userRef = ref(db, "users/" + paramId);
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) {
              navigate("/home");
              setUserID(uid);
            } else {
              setUserID(paramId);
            }
            console.log(data);
          });
        } else {
          setUserID(uid);
        }
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
      console.log(data);

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
            {isUserOnHome && (
              <NewTweet
                sendNewTweet={sendNewTweet}
                title={newTweetTitle}
                description={newTweetDescription}
                setTitle={setNewTweetTitle}
                setDescription={setNewTweetDescription}
              />
            )}
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
