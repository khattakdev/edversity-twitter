import classes from "./index.module.css";
function Tweet({ sendNewTweet, title, description, setTitle, setDescription }) {
  return (
    <form className={classes.tweet} onSubmit={(e) => sendNewTweet(e)}>
      <input
        placeholder="Tweet Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Tweet Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        className={classes.tweet_submit}
        type="submit"
        value={"Add Tweet"}
      />
    </form>
  );
}

export default Tweet;
