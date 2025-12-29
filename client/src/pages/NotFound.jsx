import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="page-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>404</h2>
      <p>Page Not Found.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
