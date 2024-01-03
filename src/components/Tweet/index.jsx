import classes from "./index.module.css";
function Tweet({ item }) {
  const { title, content, date, likes } = item;
  return (
    <div className={classes.tweet}>
      <h2 className={classes.tweet_title}>{title}</h2>
      <p className={classes.tweet_body}>{content}</p>
      <div className={classes.divider}></div>
      <div className={classes.tweet_stats}>
        <p className={classes.tweet_date}>{date}</p>
        <p className={classes.tweet_like}>{likes} Likes</p>
      </div>
    </div>
  );
}

export default Tweet;
