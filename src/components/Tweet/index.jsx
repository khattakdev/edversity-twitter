import classes from "./index.module.css";
function Tweet({ item }) {
  const { title, description, date, likes } = item;
  return (
    <div className={classes.tweet}>
      <h2 className="text-xl font-semibold mb-5">{title}</h2>{" "}
      {/*  top bottom left right */}
      <p className="mb-6">{description}</p>
      <div className={["w-full mb-2", classes.divider].join(" ")}></div>
      <div className={classes.tweet_stats}>
        <p className={classes.tweet_date}>{`${new Date(
          date
        ).getDate()}-${new Date(date).getMonth()}-${new Date(
          date
        ).getFullYear()} - ${new Date(date).getHours()}:${new Date(
          date
        ).getMinutes()}`}</p>
        <p className={classes.tweet_like}>{likes} Likes</p>
      </div>
    </div>
  );
}

export default Tweet;
