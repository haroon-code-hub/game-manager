import { Link } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";

function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  return (
    <div className="navbar">
      <div className="navbar-title">My Games List</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="create">Add Game</Link>

        <label className="theme-switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={isDark}
            aria-label="Toggle Theme"
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
