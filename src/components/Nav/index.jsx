import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
function Navigation() {
  const navigate = useNavigate();
  const navLinks = [
    {
      placeholder: "Home",
      path: "/home",
      isLink: true,
    },
    {
      placeholder: "Followers",
      path: "/home/followers",
      isLink: true,
    },
    {
      placeholder: "Followings",
      path: "/home/followings",
      isLink: true,
    },
    {
      placeholder: "Settings",
      path: "/setting",
      isLink: true,
    },
    {
      placeholder: "sign out",
      path: "/",
      isLink: false,
    },
  ];

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav>
      <h3 className="text-xl uppercase font-semibold">Edverter</h3>
      <ul className={classes.list_items}>
        {navLinks.map((navlink, index) => (
          <li className={classes.list_item} key={index}>
            {navlink.isLink ? (
              <Link to={navlink.path}>{navlink.placeholder}</Link>
            ) : (
              <button onClick={logoutHandler}>Signout</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
