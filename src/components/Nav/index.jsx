import { Link } from "react-router-dom";
import classes from "./index.module.css";
function Navigation() {
  const navLinks = [
    {
      placeholder: "Home",
      path: "/home",
    },
    {
      placeholder: "Followers",
      path: "/home/followers",
    },
    {
      placeholder: "Followings",
      path: "/home/followings",
    },
    {
      placeholder: "Settings",
      path: "/setting",
    },
    {
      placeholder: "sign out",
      path: "/",
    },
  ];
  return (
    <nav>
      <h3 className="text-xl uppercase font-semibold">Edverter</h3>
      <ul className={classes.list_items}>
        {navLinks.map((navlink, index) => (
          <li className={classes.list_item} key={index}>
            <Link to={navlink.path}>{navlink.placeholder}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
