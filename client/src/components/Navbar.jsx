import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">My Games List</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="create">Add Game</Link>
      </div>
    </div>
  );
}

export default Navbar;
