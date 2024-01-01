import "./index.css";
function Navigation() {
  return (
    <nav>
      <h3 className="logo">Edverter</h3>
      <ul className="list_items">
        <li className="list_item">Home</li>
        <li className="list_item">Settings</li>
        <li className="list_item">Followers</li>
        <li className="list_item">Sign out</li>
      </ul>
    </nav>
  );
}

export default Navigation;
