function Tweet(props) {
  const {tweet} = props
  const {name, image, handle} = tweet.user

  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
