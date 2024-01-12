import classes from "./index.module.css";
function Navigation() {
  return (
    <nav>
      <h3 className="text-xl uppercase font-semibold">Edverter</h3>
      <ul className={classes.list_items}>
        <li className={classes.list_item}>Home</li>
        <li className={classes.list_item}>Followers</li>
        <li className={classes.list_item}>Followings</li>
        <li className={classes.list_item}>Settings</li>
        <li className={classes.list_item}>Sign out</li>
      </ul>
    </nav>
  );
}

export default Navigation;
