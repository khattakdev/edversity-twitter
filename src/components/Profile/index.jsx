import classes from "./index.module.css";
function Profile() {
  return (
    <div className={classes.profile}>
      <div className={classes.profile_cover}></div>
      <div className={classes.profile_basics}>
        <div className={classes.profile_basics_img}></div>
        <div>
          <h2 className={classes.profile_basics_name}>Arsalan Khattak</h2>
          <p className={classes.profile_basics_handle}>@khattakdev</p>
        </div>
      </div>
      <div className={classes.profile_bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit
        illo. Iure exercitationem architecto repudiandae consequuntur
        laudantium, obcaecati possimus pariatur iste aliquid aspernatur qui esse
        reprehenderit quisquam odio facere tempore!
      </div>
      <div className={classes.profile_stats}>
        <div>
          <h3>Following</h3>
          <p>2000</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>200</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
