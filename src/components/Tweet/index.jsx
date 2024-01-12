import classes from "./index.module.css";
function Tweet({ item }) {
  const { title, content, date, likes } = item;
  return (
    <div className={classes.tweet}>
      <h2 className="text-xl font-semibold mb-5">{title}</h2>{" "}
      {/*  top bottom left right */}
      <p className="mb-6">{content}</p>
      <div className={["w-full mb-2", classes.divider].join(" ")}></div>
      <div className={classes.tweet_stats}>
        <p className={classes.tweet_date}>{date}</p>
        <p className={classes.tweet_like}>{likes} Likes</p>
      </div>
    </div>
  );
}

export default Tweet;
