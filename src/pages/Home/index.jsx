import Nav from "../../components/Nav";
import Profile from "../../components/Profile";
import Tweet from "../../components/Tweet";
import classes from "./index.module.css";
function Home() {
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
  return (
    <>
      <Nav />
      <div className={classes.container}>
        <Profile />
        {tweetData.map((item, index) => {
          return <Tweet key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default Home;
