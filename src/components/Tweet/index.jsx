import "./index.css";
function Tweet({ item }) {
  const { title, content, date, likes } = item;
  return (
    <div className="tweet">
      <h2 className="tweet_title">{title}</h2>
      <p className="tweet_body">{content}</p>
      <div className="divider"></div>
      <div className="tweet_stats">
        <p className="tweet_date">{date}</p>
        <p className="tweet_like">{likes} Likes</p>
      </div>
    </div>
  );
}

export default Tweet;
